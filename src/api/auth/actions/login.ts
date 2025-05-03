import Endpoints from '@api/auth/Endpoints';
import API from '@api/client';
import * as SecureStore from 'expo-secure-store';

const login = async (credentials: { identifier: string; password: string }) => {
  const res = await API.post(Endpoints.login, credentials);
  const { accessToken, refreshToken, user } = res.data;

  await SecureStore.setItemAsync('accessToken', accessToken);
  await SecureStore.setItemAsync('refreshToken', refreshToken);

  return user;
};

export default login;
