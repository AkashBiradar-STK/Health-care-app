import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function registerForNotificationsAsync() {
  // Android notification channel
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'HealthPal Notifications',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  // Check notification permission
  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  // Ask for permission if not already granted
  if (existingStatus !== 'granted') {
    const { status } =
      await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  // Permission denied
  if (finalStatus !== 'granted') {
    console.log('Notification permission not granted');
    return null;
  }

  // Get Expo Push Token
  const token = (
    await Notifications.getExpoPushTokenAsync({
      projectId: 'cda56aee-559b-4d93-ab61-9a67afaec91d',
    })
  ).data;

  console.log('Expo Push Token:', token);

  return token;
}