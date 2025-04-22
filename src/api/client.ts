import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const baseURL = Constants.expoConfig?.extra?.apiUrl;

const API = axios.create({
  baseURL,
});

API.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
