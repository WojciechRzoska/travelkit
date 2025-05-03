import 'dotenv/config';

import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'TravelKit',
  name: 'TravelKit',
  extra: {
    apiUrl: process.env.API_URL,
  },
});
