import 'dotenv/config';

import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'travelkit',
  name: 'travelkit',
  extra: {
    apiUrl: process.env.API_URL,
  },
});
