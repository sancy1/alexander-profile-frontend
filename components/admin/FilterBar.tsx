
// components/admin/FilterBar.tsx
'use client';

import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange?: (filters: any) => void;
  showStatusFilter?: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onFilterChange,
  showStatusFilter = false,
}) => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setStatus(val);
    if (onFilterChange) {
      onFilterChange({
        is_read: val === 'all' ? undefined : val === 'read',
      });
    }
  };

  const handleClear = () => {
    setQuery('');
    setStatus('all');
    onSearch('');
    if (onFilterChange) onFilterChange({});
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full p-4 bg-slate-50 dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-xl mb-6">
      <form onSubmit={handleSearchSubmit} className="relative w-full md:max-w-md flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search records..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 bg-white dark:bg-gray-900"
          />
        </div>
        <Button type="submit" variant="secondary" className="bg-white dark:bg-gray-800 border">
          Find
        </Button>
      </form>

      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
        {showStatusFilter && (
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={status}
              onChange={handleStatusChange}
              className="text-sm bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread Only</option>
              <option value="read">Read Only</option>
            </select>
          </div>
        )}
        {(query || status !== 'all') && (
          <Button variant="ghost" onClick={handleClear} className="text-slate-500 text-sm h-9 flex gap-1 items-center">
            <X className="h-4 w-4" /> Reset
          </Button>
        )}
      </div>
    </div>
  );
};