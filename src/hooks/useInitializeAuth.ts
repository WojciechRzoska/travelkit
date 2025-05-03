import getRefreshToken from '@api/auth/actions/getRefreshToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@store/authStore';
import { User } from '@store/authStore/types/User';
import { useMutation } from '@tanstack/react-query';
import * as SecureStore from 'expo-secure-store';

const useInitializeAuth = () => {
  const { setUser, setIsAuthenticatedLoading, clear, setIsAuthenticated } =
    useAuth();

  const { mutateAsync } = useMutation({
    mutationFn: (userId: number) => getRefreshToken(userId),
  });

  const initializeAuth = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      const parsedUser: User | null = savedUser ? JSON.parse(savedUser) : null;

      const refreshToken = await SecureStore.getItemAsync('refreshToken');

      if (!refreshToken || !parsedUser) {
        setIsAuthenticatedLoading(false);
        return;
      }

      await mutateAsync(parsedUser.userId);
      setUser(parsedUser);
      setIsAuthenticated(true);
    } catch (e) {
      clear();
    } finally {
      setIsAuthenticatedLoading(false);
    }
  };

  return initializeAuth;
};

export default useInitializeAuth;
