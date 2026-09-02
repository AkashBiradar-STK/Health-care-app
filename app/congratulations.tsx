import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors } from '@/constants/theme';

export default function CongratulationsScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>

        {/* Success Icon */}
        <View style={styles.successCircle}>
          <View style={styles.shield}>
            <Ionicons
              name="checkmark"
              size={38}
              color={Colors.primary}
            />
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Congratulations!
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Your account is ready to use. You will
          {'\n'}
          be redirected to the Home Page in a
          {'\n'}
          few seconds...
        </Text>

        {/* Loading */}
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color={Colors.primary}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
  },

  popup: {
    width: 337,
    height: 417,
    maxWidth: '90%',
    backgroundColor: Colors.white,
    borderRadius: 48,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 32,
  },

  successCircle: {
    width: 155,
    height: 155,
    borderRadius: 78,
    backgroundColor: Colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shield: {
    width: 64,
    height: 72,
    backgroundColor: Colors.white,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 32,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
  },

  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 24,
    color: Colors.secondaryText,
    textAlign: 'center',
  },

  loaderContainer: {
    marginTop: 28,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});