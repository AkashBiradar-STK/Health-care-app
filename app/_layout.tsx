import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: 'onboarding',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
    name="congratulations"
    options={{
      headerShown: false,
      presentation: 'transparentModal',  // This means the Congratulations screen behaves like a 
      animation: 'fade',                 // transparent modal and fades in, which matches the popup-style
      contentStyle: {                    // design you're using.
        backgroundColor: 'transparent',
      },
    }}
  />

        
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}