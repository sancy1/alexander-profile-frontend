
// types/newsletter.ts
export interface Subscriber {
  id: number;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  unsubscribed_at?: string | null;
}

export interface DeletedSubscriber {
  id: number;
  email: string;
  unsubscribed_at: string;
  deleted_at: string;
}

export interface SubscribersResponse {
  data: Subscriber[];
}

export interface DeletedSubscribersResponse {
  data: DeletedSubscriber[];
}

export interface NewsletterStats {
  total_active: number;
  total_deleted: number;
}