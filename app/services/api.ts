
// // app/services/api.ts
// import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://alexandercyril.onrender.com';
// const LOGIN_ENDPOINT = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT || '/api/user/login/';

// const ACCESS_TOKEN_KEY = 'auth_access_token';
// const REFRESH_TOKEN_KEY = 'auth_refresh_token';
// const USER_KEY = 'auth_user_data';

// class ApiService {
//   private api: AxiosInstance;
//   private static instance: ApiService;

//   private constructor() {
//     this.api = axios.create({
//       baseURL: API_BASE_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     this.api.interceptors.request.use(
//       (config: InternalAxiosRequestConfig) => {
//         const token = this.getAccessToken();
//         if (token && config.headers) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error: any) => Promise.reject(error)
//     );

//     this.api.interceptors.response.use(
//       (response: AxiosResponse) => response,
//       async (error: AxiosError) => {
//         const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        
//         // FIX: Detect if the failed request originated from the login route
//         const isLoginRequest = originalRequest?.url?.includes(LOGIN_ENDPOINT);

//         // Only run interceptor automatic refresh/rerouting logic if it's NOT a direct login failure
//         if (error.response?.status === 401 && !originalRequest._retry && !isLoginRequest) {
//           originalRequest._retry = true;
//           const refreshToken = this.getRefreshToken();
          
//           if (refreshToken) {
//             try {
//               const response = await axios.post(`${API_BASE_URL}/api/user/token/refresh/`, {
//                 refresh: refreshToken,
//               });
              
//               const newAccessToken = response.data.access;
//               const currentUser = this.getUser();
              
//               if (currentUser) {
//                 this.setTokens(newAccessToken, refreshToken);
//               }
              
//               if (originalRequest.headers) {
//                 originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//               }
//               return this.api(originalRequest);
//             } catch (refreshError) {
//               this.clearTokens();
//               if (typeof window !== 'undefined') window.location.href = '/login';
//               return Promise.reject(refreshError);
//             }
//           } else {
//             this.clearTokens();
//             if (typeof window !== 'undefined') window.location.href = '/login';
//           }
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   public static getInstance(): ApiService {
//     if (!ApiService.instance) {
//       ApiService.instance = new ApiService();
//     }
//     return ApiService.instance;
//   }

//   public getAccessToken(): string | null {
//     return Cookies.get(ACCESS_TOKEN_KEY) || null;
//   }

//   private getRefreshToken(): string | null {
//     return Cookies.get(REFRESH_TOKEN_KEY) || null;
//   }

//   private setTokens(access: string, refresh: string): void {
//     Cookies.set(ACCESS_TOKEN_KEY, access, { expires: 1, secure: true, sameSite: 'lax' });
//     Cookies.set(REFRESH_TOKEN_KEY, refresh, { expires: 7, secure: true, sameSite: 'lax' });
//   }

//   private clearTokens(): void {
//     Cookies.remove(ACCESS_TOKEN_KEY);
//     Cookies.remove(REFRESH_TOKEN_KEY);
//     Cookies.remove(USER_KEY);
//   }

//   private setUser(user: { user_id: string; email: string }): void {
//     Cookies.set(USER_KEY, JSON.stringify(user), { expires: 7, secure: true, sameSite: 'lax' });
//   }

//   public getUser(): { user_id: string; email: string } | null {
//     const userData = Cookies.get(USER_KEY);
//     if (userData) {
//       try {
//         return JSON.parse(userData);
//       } catch {
//         return null;
//       }
//     }
//     return null;
//   }

//   async login(email: string, password: string): Promise<any> {
//     try {
//       const response = await this.api.post(LOGIN_ENDPOINT, { email, password });
      
//       if (response.data.success && response.data.tokens) {
//         this.setTokens(response.data.tokens.access, response.data.tokens.refresh);
//         this.setUser({
//           user_id: response.data.user_id,
//           email: response.data.email,
//         });
//       }
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async logout(): Promise<void> {
//     try {
//       const refreshToken = this.getRefreshToken();
//       if (refreshToken) {
//         await this.api.post('/api/user/logout/', { refresh: refreshToken });
//       }
//     } catch (error) {
//       console.error('Logout API execution bypassed:', error);
//     } finally {
//       this.clearTokens();
//     }
//   }

//   // NEW METHOD: Change Authenticated User Password
//   async changePassword(payload: any): Promise<any> {
//     try {
//       const response = await this.api.put('/api/user/change-password/', {
//         currentPassword: payload.currentPassword,
//         newPassword: payload.newPassword,
//         confirmNewPassword: payload.confirmNewPassword,
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   isAuthenticated(): boolean {
//     return !!this.getAccessToken() && !!this.getUser();
//   }

//   public getApi(): AxiosInstance {
//     return this.api;
//   }
// }

// export default ApiService.getInstance();



































// // app/services/api.ts
// import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://alexandercyril.onrender.com';
// const LOGIN_ENDPOINT = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT || '/api/user/login/';
// const ACCESS_TOKEN_KEY = 'auth_access_token';
// const REFRESH_TOKEN_KEY = 'auth_refresh_token';
// const USER_KEY = 'auth_user_data';

// class ApiService {
//   private api: AxiosInstance;
//   private static instance: ApiService;

//   private constructor() {
//     this.api = axios.create({
//       baseURL: API_BASE_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     this.api.interceptors.request.use(
//       (config: InternalAxiosRequestConfig) => {
//         const token = this.getAccessToken();
//         if (token && config.headers) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error: any) => Promise.reject(error)
//     );

//     this.api.interceptors.response.use(
//       (response: AxiosResponse) => response,
//       async (error: AxiosError) => {
//         const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
//         const isLoginRequest = originalRequest?.url?.includes(LOGIN_ENDPOINT);

//         if (error.response?.status === 401 && !originalRequest._retry && !isLoginRequest) {
//           originalRequest._retry = true;
//           const refreshToken = this.getRefreshToken();
          
//           if (refreshToken) {
//             try {
//               const response = await axios.post(`${API_BASE_URL}/api/user/token/refresh/`, {
//                 refresh: refreshToken,
//               });
              
//               const newAccessToken = response.data.access;
//               const currentUser = this.getUser();
              
//               if (currentUser) {
//                 this.setTokens(newAccessToken, refreshToken);
//               }
              
//               if (originalRequest.headers) {
//                 originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//               }
//               return this.api(originalRequest);
//             } catch (refreshError) {
//               this.clearTokens();
//               if (typeof window !== 'undefined') window.location.href = '/login';
//               return Promise.reject(refreshError);
//             }
//           } else {
//             this.clearTokens();
//             if (typeof window !== 'undefined') window.location.href = '/login';
//           }
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   public static getInstance(): ApiService {
//     if (!ApiService.instance) {
//       ApiService.instance = new ApiService();
//     }
//     return ApiService.instance;
//   }

//   public getAccessToken(): string | null {
//     return Cookies.get(ACCESS_TOKEN_KEY) || null;
//   }

//   private getRefreshToken(): string | null {
//     return Cookies.get(REFRESH_TOKEN_KEY) || null;
//   }

//   private setTokens(access: string, refresh: string): void {
//     Cookies.set(ACCESS_TOKEN_KEY, access, { expires: 1, secure: true, sameSite: 'lax' });
//     Cookies.set(REFRESH_TOKEN_KEY, refresh, { expires: 7, secure: true, sameSite: 'lax' });
//   }

//   private clearTokens(): void {
//     Cookies.remove(ACCESS_TOKEN_KEY);
//     Cookies.remove(REFRESH_TOKEN_KEY);
//     Cookies.remove(USER_KEY);
//   }

//   private setUser(user: { user_id: string; email: string }): void {
//     Cookies.set(USER_KEY, JSON.stringify(user), { expires: 7, secure: true, sameSite: 'lax' });
//   }

//   public getUser(): { user_id: string; email: string } | null {
//     const userData = Cookies.get(USER_KEY);
//     if (userData) {
//       try {
//         return JSON.parse(userData);
//       } catch {
//         return null;
//       }
//     }
//     return null;
//   }

//   async login(email: string, password: string): Promise<any> {
//     const response = await this.api.post(LOGIN_ENDPOINT, { email, password });
//     if (response.data.success && response.data.tokens) {
//       this.setTokens(response.data.tokens.access, response.data.tokens.refresh);
//       this.setUser({
//         user_id: response.data.user_id,
//         email: response.data.email,
//       });
//     }
//     return response.data;
//   }

//   async logout(): Promise<void> {
//     try {
//       const refreshToken = this.getRefreshToken();
//       if (refreshToken) {
//         await this.api.post('/api/user/logout/', { refresh: refreshToken });
//       }
//     } catch (error) {
//       console.error('Logout execution bypassed:', error);
//     } finally {
//       this.clearTokens();
//     }
//   }

//   async changePassword(payload: any): Promise<any> {
//     const response = await this.api.put('/api/user/change-password/', {
//       currentPassword: payload.currentPassword,
//       newPassword: payload.newPassword,
//       confirmNewPassword: payload.confirmNewPassword,
//     });
//     return response.data;
//   }

//   // ============================================
//   // CONTACT METHODS
//   // ============================================
//   async getContacts(): Promise<any> {
//     const response = await this.api.get('/api/contacts/');
//     return response.data;
//   }

//   async getContact(id: number): Promise<any> {
//     const response = await this.api.get(`/api/contacts/${id}/`);
//     return response.data;
//   }

//   async updateContact(id: number, data: any): Promise<any> {
//     const response = await this.api.put(`/api/contacts/${id}/update/`, data);
//     return response.data;
//   }

//   async deleteContact(id: number): Promise<any> {
//     const response = await this.api.delete(`/api/contacts/${id}/delete/`);
//     return response.data;
//   }

//   async getContactStats(): Promise<any> {
//     const response = await this.api.get('/api/contacts/stats/');
//     return response.data;
//   }

//   async searchContacts(query: string, filters?: any): Promise<any> {
//     let url = `/api/contacts/search/?q=${encodeURIComponent(query)}`;
//     if (filters?.is_read !== undefined) {
//       url += `&is_read=${filters.is_read}`;
//     }
//     if (filters?.date_from) {
//       url += `&date_from=${filters.date_from}`;
//     }
//     if (filters?.date_to) {
//       url += `&date_to=${filters.date_to}`;
//     }
//     const response = await this.api.get(url);
//     return response.data;
//   }

//   // ============================================
//   // NEWSLETTER METHODS
//   // ============================================
//   async getSubscribers(): Promise<any> {
//     const response = await this.api.get('/api/newsletter/subscribers/');
//     return response.data;
//   }

//   async getSubscriber(id: number): Promise<any> {
//     const response = await this.api.get(`/api/newsletter/subscribers/${id}/`);
//     return response.data;
//   }

//   async updateSubscriber(id: number, data: any): Promise<any> {
//     const response = await this.api.put(`/api/newsletter/subscribers/${id}/update/`, data);
//     return response.data;
//   }

//   async deleteSubscriber(id: number): Promise<any> {
//     const response = await this.api.delete(`/api/newsletter/subscribers/${id}/delete/`);
//     return response.data;
//   }

//   async getDeletedSubscribers(): Promise<any> {
//     const response = await this.api.get('/api/newsletter/deleted/');
//     return response.data;
//   }

//   async getDeletedSubscriber(id: number): Promise<any> {
//     const response = await this.api.get(`/api/newsletter/deleted/${id}/`);
//     return response.data;
//   }

//   async reactivateSubscriber(email: string): Promise<any> {
//     const response = await this.api.post('/api/newsletter/deleted/reactivate/', { email });
//     return response.data;
//   }

//   async clearAllDeletedSubscribers(): Promise<any> {
//     const response = await this.api.delete('/api/newsletter/deleted/clear-all/');
//     return response.data;
//   }

//   async deleteDeletedSubscriber(id: number): Promise<any> {
//     const response = await this.api.delete(`/api/newsletter/deleted/${id}/delete/`);
//     return response.data;
//   }

//   // ============================================
//   // UTILITY METHODS
//   // ============================================
//   isAuthenticated(): boolean {
//     return !!this.getAccessToken() && !!this.getUser();
//   }

//   public getApi(): AxiosInstance {
//     return this.api;
//   }
// }

// export default ApiService.getInstance();




































// app/services/api.ts
import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

// Base Service Configurations
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://alexandercyril.onrender.com';

// Destructured Env Route Mappings
const LOGIN_ENDPOINT = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT || '/api/user/login/';
const LOGOUT_ENDPOINT = process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT || '/api/user/logout/';

// Contacts Endpoints
const CONTACTS_LIST = process.env.NEXT_PUBLIC_CONTACTS_LIST || '/api/contacts/';
const CONTACT_DETAIL = process.env.NEXT_PUBLIC_CONTACT_DETAIL || '/api/contacts/';

// Newsletter Endpoints
const SUBSCRIBERS_LIST = process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIBERS || '/api/newsletter/subscribers/';
const DELETED_SUBSCRIBERS = process.env.NEXT_PUBLIC_DELETED_SUBSCRIBERS || '/api/newsletter/deleted/';
const DELETED_CLEAR_ALL = process.env.NEXT_PUBLIC_DELETED_SUBSCRIBERS_CLEAR_ALL || '/api/newsletter/deleted/clear-all/';
const DELETED_REACTIVATE = process.env.NEXT_PUBLIC_DELETED_SUBSCRIBER_REACTIVATE || '/api/newsletter/deleted/reactivate/';

const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';
const USER_KEY = 'auth_user_data';

class ApiService {
  private api: AxiosInstance;
  private static instance: ApiService;

  private constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.getAccessToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        const isLoginRequest = originalRequest?.url?.includes(LOGIN_ENDPOINT);

        if (error.response?.status === 401 && !originalRequest._retry && !isLoginRequest) {
          originalRequest._retry = true;
          const refreshToken = this.getRefreshToken();
          
          if (refreshToken) {
            try {
              const response = await axios.post(`${API_BASE_URL}/api/user/token/refresh/`, {
                refresh: refreshToken,
              });
              
              const newAccessToken = response.data.access;
              const currentUser = this.getUser();
              
              if (currentUser) {
                this.setTokens(newAccessToken, refreshToken);
              }
              
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              }
              return this.api(originalRequest);
            } catch (refreshError) {
              this.clearTokens();
              if (typeof window !== 'undefined') window.location.href = '/login';
              return Promise.reject(refreshError);
            }
          } else {
            this.clearTokens();
            if (typeof window !== 'undefined') window.location.href = '/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public getAccessToken(): string | null {
    return Cookies.get(ACCESS_TOKEN_KEY) || null;
  }

  private getRefreshToken(): string | null {
    return Cookies.get(REFRESH_TOKEN_KEY) || null;
  }

  private setTokens(access: string, refresh: string): void {
    Cookies.set(ACCESS_TOKEN_KEY, access, { expires: 1, secure: true, sameSite: 'lax' });
    Cookies.set(REFRESH_TOKEN_KEY, refresh, { expires: 7, secure: true, sameSite: 'lax' });
  }

  private clearTokens(): void {
    Cookies.remove(ACCESS_TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
    Cookies.remove(USER_KEY);
  }

  private setUser(user: { user_id: string; email: string }): void {
    Cookies.set(USER_KEY, JSON.stringify(user), { expires: 7, secure: true, sameSite: 'lax' });
  }

  public getUser(): { user_id: string; email: string } | null {
    const userData = Cookies.get(USER_KEY);
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        return null;
      }
    }
    return null;
  }

  async login(email: string, password: string): Promise<any> {
    const response = await this.api.post(LOGIN_ENDPOINT, { email, password });
    if (response.data.success && response.data.tokens) {
      this.setTokens(response.data.tokens.access, response.data.tokens.refresh);
      this.setUser({
        user_id: response.data.user_id,
        email: response.data.email,
      });
    }
    return response.data;
  }

  async logout(): Promise<void> {
    try {
      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        await this.api.post(LOGOUT_ENDPOINT, { refresh: refreshToken });
      }
    } catch (error) {
      console.error('Logout execution bypassed:', error);
    } finally {
      this.clearTokens();
    }
  }

  async changePassword(payload: any): Promise<any> {
    const response = await this.api.put('/api/user/change-password/', {
      currentPassword: payload.currentPassword,
      newPassword: payload.newPassword,
      confirmNewPassword: payload.confirmNewPassword,
    });
    return response.data;
  }

  // ============================================
  // CONTACT METHODS
  // ============================================
  async getContacts(): Promise<any> {
    const response = await this.api.get(CONTACTS_LIST);
    return response.data;
  }

  async getContact(id: number): Promise<any> {
    const response = await this.api.get(`${CONTACT_DETAIL}${id}/`);
    return response.data;
  }

  async updateContact(id: number, data: any): Promise<any> {
    const response = await this.api.put(`${CONTACT_DETAIL}${id}/update/`, data);
    return response.data;
  }

  async deleteContact(id: number): Promise<any> {
    const response = await this.api.delete(`${CONTACT_DETAIL}${id}/delete/`);
    return response.data;
  }

  async searchContacts(query: string, filters?: any): Promise<any> {
    let url = `/api/contacts/search/?q=${encodeURIComponent(query)}`;
    if (filters?.is_read !== undefined) {
      url += `&is_read=${filters.is_read}`;
    }
    if (filters?.date_from) {
      url += `&date_from=${filters.date_from}`;
    }
    if (filters?.date_to) {
      url += `&date_to=${filters.date_to}`;
    }
    const response = await this.api.get(url);
    return response.data;
  }

  // ============================================
  // NEWSLETTER METHODS
  // ============================================
  async getSubscribers(): Promise<any> {
    const response = await this.api.get(SUBSCRIBERS_LIST);
    return response.data;
  }

  async getSubscriber(id: number): Promise<any> {
    const response = await this.api.get(`${SUBSCRIBERS_LIST}${id}/`);
    return response.data;
  }

  async updateSubscriber(id: number, data: any): Promise<any> {
    const response = await this.api.put(`${SUBSCRIBERS_LIST}${id}/update/`, data);
    return response.data;
  }

  async deleteSubscriber(id: number): Promise<any> {
    const response = await this.api.delete(`${SUBSCRIBERS_LIST}${id}/delete/`);
    return response.data;
  }

  async getDeletedSubscribers(): Promise<any> {
    const response = await this.api.get(DELETED_SUBSCRIBERS);
    return response.data;
  }

  async getDeletedSubscriber(id: number): Promise<any> {
    const response = await this.api.get(`${DELETED_SUBSCRIBERS}${id}/`);
    return response.data;
  }

  async reactivateSubscriber(email: string): Promise<any> {
    const response = await this.api.post(DELETED_REACTIVATE, { email });
    return response.data;
  }

  async clearAllDeletedSubscribers(): Promise<any> {
    const response = await this.api.delete(DELETED_CLEAR_ALL);
    return response.data;
  }

  async deleteDeletedSubscriber(id: number): Promise<any> {
    const response = await this.api.delete(`${DELETED_SUBSCRIBERS}${id}/delete/`);
    return response.data;
  }

  // ============================================
  // UTILITY METHODS
  // ============================================
  isAuthenticated(): boolean {
    return !!this.getAccessToken() && !!this.getUser();
  }

  public getApi(): AxiosInstance {
    return this.api;
  }
}

export default ApiService.getInstance();