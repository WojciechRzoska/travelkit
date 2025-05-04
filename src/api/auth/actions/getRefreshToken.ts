import Endpoints from '@api/auth/Endpoints'
import API from '@api/client'
import * as SecureStore from 'expo-secure-store'

const getRefreshToken = async (userId: number) => {
  const refreshToken = await SecureStore.getItemAsync('refreshToken')
  const res = await API.post(Endpoints.refreshToken, { userId, refreshToken })

  await SecureStore.setItemAsync('accessToken', res.data.accessToken)
  await SecureStore.setItemAsync('refreshToken', res.data.refreshToken)

  return res.data
}

export default getRefreshToken
