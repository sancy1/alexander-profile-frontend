
// app/context/AuthContext.tsx
'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContextType, User } from '@/types/auth';
import apiService from '@/app/services/api';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = useCallback(async (): Promise<boolean> => {
    const storedUser = apiService.getUser();
    if (apiService.isAuthenticated() && storedUser) {
      setUser({
        user_id: storedUser.user_id,
        email: storedUser.email,
      });
      return true;
    }
    setUser(null);
    return false;
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      await checkAuth();
      setIsLoading(false);
    };
    initAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await apiService.login(email, password);
      if (response && response.success) {
        const userData = {
          user_id: response.user_id,
          email: response.email,
        };
        setUser(userData);
        router.push('/admin');
      } else {
        throw new Error(response?.message || 'Login failed');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await apiService.logout();
    } catch (error) {
      console.error('Context capture handled bypass logout errors:', error);
    } finally {
      setUser(null);
      setIsLoading(false);
      router.push('/login');
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user && apiService.isAuthenticated(),
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider setup.');
  }
  return context;
}