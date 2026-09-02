import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen
          name="onboarding"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signin"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profile"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="congratulations"
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
            contentStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}