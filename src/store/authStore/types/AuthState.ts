import { User } from '@store/authStore/types/User';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isAuthenticatedLoading: boolean;
  setUser: (user: User) => void;
  setIsAuthenticatedLoading: (isLoading: boolean) => void;
  clear: VoidFunction;
  refreshSession: () => Promise<void>;
  login: (identifier: string, password: string) => Promise<void>;
  logout: (userId: number) => Promise<void>;
};

export type { AuthState };
