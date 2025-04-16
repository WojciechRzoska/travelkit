import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
}
