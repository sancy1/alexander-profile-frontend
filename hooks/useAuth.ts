// hooks/useAuth.ts
'use client';

import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext'; // Named import looks for the 'export' keyword!

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within an AuthProvider structural tree.');
  }
  
  return context;
}