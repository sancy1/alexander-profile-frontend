// hooks/useContacts.ts
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import apiService from '@/app/services/api';
import { Contact, ContactFilters, ContactStats } from '@/types/contact';

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ContactFilters>({});

  const fetchContacts = useCallback(async (searchQuery?: string) => {
    setLoading(true);
    try {
      let response;
      if (searchQuery || Object.keys(filters).length > 0) {
        response = await apiService.searchContacts(searchQuery || '', filters);
      } else {
        response = await apiService.getContacts();
      }
      
      // Handle Django's envelope structure safely (Raw Array vs DRF Paginated Results Object)
      const raw = response?.data ?? response;
      const verifiedArray = Array.isArray(raw) 
        ? raw 
        : (raw?.results ?? raw?.contacts ?? raw?.data ?? []);
        
      setContacts(verifiedArray);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Derive stats synchronously with complete type structural enforcement
  const stats: ContactStats = useMemo(() => {
    // Rigid runtime type enforcement prevents racy layout mount collapses
    const contactsList = Array.isArray(contacts) ? contacts : [];
    
    const total = contactsList.length;
    const unread = contactsList.filter((c) => c.is_read === false || !c.is_read).length;
    const read = total - unread;

    // Relative timeline analysis metrics mapping layers
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const recent30Days = contactsList.filter((c) => {
      if (!c.created_at) return false;
      return new Date(c.created_at) >= thirtyDaysAgo;
    }).length;

    const recent7Days = contactsList.filter((c) => {
      if (!c.created_at) return false;
      return new Date(c.created_at) >= sevenDaysAgo;
    }).length;

    return {
      total_contacts: total,
      unread_contacts: unread,
      read_contacts: read,
      recent_contacts_30_days: recent30Days,
      recent_contacts_7_days: recent7Days,
    };
  }, [contacts]);

  const deleteContact = useCallback(async (id: number) => {
    try {
      await apiService.deleteContact(id);
      setContacts(prev => prev.filter(c => c.id !== id));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  const deleteAllContacts = useCallback(async () => {
    try {
      const promises = contacts.map(c => apiService.deleteContact(c.id));
      await Promise.all(promises);
      setContacts([]);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, [contacts]);

  const updateContact = useCallback(async (id: number, data: Partial<Contact>) => {
    try {
      const response = await apiService.updateContact(id, data);
      const updated = response?.data || response;
      setContacts(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
      return { success: true, data: updated };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }, []);

  const markAsRead = useCallback(async (id: number) => {
    return updateContact(id, { is_read: true });
  }, [updateContact]);

  const markAsUnread = useCallback(async (id: number) => {
    return updateContact(id, { is_read: false });
  }, [updateContact]);

  const applyFilters = useCallback((newFilters: ContactFilters) => {
    setFilters(newFilters);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return {
    contacts,
    loading,
    error,
    stats,
    filters,
    fetchContacts,
    deleteContact,
    deleteAllContacts,
    updateContact,
    markAsRead,
    markAsUnread,
    applyFilters,
  };
}