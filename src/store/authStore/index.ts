import getRefreshToken from '@/api/auth/actions/getRefreshToken';
import login from '@/api/auth/actions/login';
import logout from '@/api/auth/actions/logout';
import { AuthState } from '@/store/authStore/types/AuthState';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isAuthenticatedLoading: true,
  setIsAuthenticatedLoading: (isLoading) =>
    set({ isAuthenticatedLoading: isLoading }),

  setUser: (user) => set({ user, isAuthenticated: true }),

  clear: async () => {
    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('refreshToken');
    set({ user: null, isAuthenticated: false });
  },

  refreshSession: async () => {
    try {
      const refreshToken = await SecureStore.getItemAsync('refreshToken');
      const user = get().user;
      if (!refreshToken || !user) return;

      const res = await getRefreshToken(user.id);
      await SecureStore.setItemAsync('accessToken', res.accessToken);
      set({ isAuthenticated: true });
    } catch (err) {
      console.warn('Refresh failed', err);
      get().clear();
    }
  },

  login: async (identifier: string, password: string) => {
    const res = await login({ identifier, password });
    await SecureStore.setItemAsync('accessToken', res.accessToken);
    await SecureStore.setItemAsync('refreshToken', res.refreshToken);
    set({ user: res.user, isAuthenticated: true });
  },

  logout: async (userId: number) => {
    await logout(userId);
    await get().clear();
  },
}));
