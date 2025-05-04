import useInitializeAuth from '@/src/hooks/useInitializeAuth'
import { useAuth } from '@store/authStore'
import Splash from 'app/splash'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
const Index = () => {
  const initializeAuth = useInitializeAuth()
  const { isAuthenticated, isAuthenticatedLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    initializeAuth()
  }, [])

  useEffect(() => {
    if (!isAuthenticatedLoading) {
      if (isAuthenticated) {
        router.replace('/home')
      } else {
        router.replace('/signIn')
      }
    }
  }, [isAuthenticatedLoading, isAuthenticated])

  return <Splash />
}

export default Index
