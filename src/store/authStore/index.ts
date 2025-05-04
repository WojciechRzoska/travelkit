import { AuthState } from '@store/authStore/types/AuthState'
import * as SecureStore from 'expo-secure-store'
import { create } from 'zustand'

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthenticatedLoading: true,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsAuthenticatedLoading: (isLoading) =>
    set({ isAuthenticatedLoading: isLoading }),
  setUser: (user) => set({ user, isAuthenticated: true }),
  clear: async () => {
    await SecureStore.deleteItemAsync('accessToken')
    await SecureStore.deleteItemAsync('refreshToken')
    set({ user: null, isAuthenticated: false })
  },
}))
