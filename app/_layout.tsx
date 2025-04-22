import { useAuth } from '@/store/authStore';
import Splash from 'app/splash';
import { Slot, SplashScreen, useRouter } from 'expo-router';
import { useEffect } from 'react';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const {
    refreshSession,
    isAuthenticated,
    setIsAuthenticatedLoading,
    isAuthenticatedLoading,
  } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const bootstrap = async () => {
      await refreshSession();
      setIsAuthenticatedLoading(false);
    };

    bootstrap();
  }, []);

  useEffect(() => {
    if (!isAuthenticatedLoading) {
      if (isAuthenticated) {
        router.replace('/home');
      } else {
        router.replace('/authentication');
      }
    }
  }, [isAuthenticatedLoading, isAuthenticated]);

  if (isAuthenticatedLoading) {
    return <Splash />;
  }

  return <Slot />;
};

export default RootLayout;
