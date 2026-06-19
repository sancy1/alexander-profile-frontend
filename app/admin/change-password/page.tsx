// app/admin/change-password/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Navigation from '@/components/navigation';
import ChangePasswordCard from '@/components/admin/ChangePasswordCard';

export default function ChangePasswordRoutePage() {
  const auth = useAuth() as { isAuthenticated: boolean; isLoading: boolean };
  const { isAuthenticated, isLoading } = auth;
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <Navigation />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-xl mx-auto">
        <button
          onClick={() => router.push('/admin')}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-gray-200 mb-6 group transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> 
          Back to Dashboard
        </button>

        {/* Your modularized ChangePasswordCard component rendering in place */}
        <ChangePasswordCard />
      </div>
    </div>
  );
}