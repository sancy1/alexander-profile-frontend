
// types/contact.ts
export interface Contact {
  id: number;
  name: string;
  phone: string | null;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
  is_archived?: boolean;
}

export interface ContactsResponse {
  status?: string;
  count?: number;
  data: Contact[];
}

export interface ContactStats {
  total_contacts: number;
  unread_contacts: number;
  read_contacts: number;
  recent_contacts_30_days: number;
  recent_contacts_7_days: number;
}

export interface ContactFilters {
  search?: string;
  is_read?: boolean;
  date_from?: string;
  date_to?: string;
}