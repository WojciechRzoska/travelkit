import { User } from '@store/authStore/types/User'

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  isAuthenticatedLoading: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  setUser: (user: User) => void
  setIsAuthenticatedLoading: (isLoading: boolean) => void
  clear: VoidFunction
}

export type { AuthState }
