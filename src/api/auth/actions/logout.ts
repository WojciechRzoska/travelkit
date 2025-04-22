import API from '@/api/client';
import * as SecureStore from 'expo-secure-store';

const logout = async (userId: number) => {
  await API.post('/auth/logout');
  await SecureStore.deleteItemAsync('accessToken');
  await SecureStore.deleteItemAsync('refreshToken');
};

export default logout;
