// hooks/useNewsletter.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import apiService from '@/app/services/api';
import { Subscriber, DeletedSubscriber } from '@/types/newsletter';

export function useNewsletter() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [deletedSubscribers, setDeletedSubscribers] = useState<DeletedSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiService.getSubscribers();
      
      // 🛡️ Safe array extract from Django envelope
      const raw = response?.data ?? response;
      const verifiedArray = Array.isArray(raw) 
        ? raw 
        : (raw?.results ?? raw?.subscribers ?? raw?.data ?? []);

      setSubscribers(verifiedArray);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch subscribers');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchDeletedSubscribers = useCallback(async () => {
    try {
      const response = await apiService.getDeletedSubscribers();
      
      // 🛡️ Safe array extract from Django envelope
      const raw = response?.data ?? response;
      const verifiedArray = Array.isArray(raw) 
        ? raw 
        : (raw?.results ?? raw?.deleted_subscribers ?? raw?.data ?? []);

      setDeletedSubscribers(verifiedArray);
    } catch (err: any) {
      console.error('Failed to fetch deleted subscribers:', err);
    }
  }, []);

  const deleteSubscriber = useCallback(async (id: number) => {
    try {
      await apiService.deleteSubscriber(id);
      setSubscribers(prev => prev.filter(s => s.id !== id));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  const deleteAllSubscribers = useCallback(async () => {
    try {
      const promises = subscribers.map(s => apiService.deleteSubscriber(s.id));
      await Promise.all(promises);
      setSubscribers([]);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, [subscribers]);

  const updateSubscriber = useCallback(async (id: number, data: Partial<Subscriber>) => {
    try {
      const response = await apiService.updateSubscriber(id, data);
      const updated = response?.data || response;
      setSubscribers(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
      return { success: true, data: updated };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  const reactivateSubscriber = useCallback(async (email: string) => {
    try {
      await apiService.reactivateSubscriber(email);
      await fetchDeletedSubscribers();
      await fetchSubscribers();
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, [fetchDeletedSubscribers, fetchSubscribers]);

  const deleteDeletedSubscriber = useCallback(async (id: number) => {
    try {
      await apiService.deleteDeletedSubscriber(id);
      setDeletedSubscribers(prev => prev.filter(d => d.id !== id));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  const clearAllDeleted = useCallback(async () => {
    try {
      await apiService.clearAllDeletedSubscribers();
      setDeletedSubscribers([]);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  useEffect(() => {
    fetchSubscribers();
    fetchDeletedSubscribers();
  }, [fetchSubscribers, fetchDeletedSubscribers]);

  return {
    subscribers,
    deletedSubscribers,
    loading,
    error,
    fetchSubscribers,
    fetchDeletedSubscribers,
    deleteSubscriber,
    deleteAllSubscribers,
    updateSubscriber,
    reactivateSubscriber,
    deleteDeletedSubscriber,
    clearAllDeleted,
  };
}