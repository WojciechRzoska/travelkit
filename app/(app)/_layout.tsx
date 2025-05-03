import { useAuth } from '@store/authStore';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AppLayout() {
  const { isAuthenticated, isAuthenticatedLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isAuthenticatedLoading) {
      router.replace('/signIn');
    }
  }, [isAuthenticated]);

  return <Stack />;
}
