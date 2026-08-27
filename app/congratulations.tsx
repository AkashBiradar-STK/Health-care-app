import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function CongratulationsScreen() {

  // Automatically go to Sign In after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/signin');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.overlay}>

      <View style={styles.popup}>

        {/* ================= SUCCESS ICON ================= */}

        <View style={styles.successCircle}>

          <View style={styles.shield}>
            <Ionicons
              name="checkmark"
              size={38}
              color="#1C2A3A"
            />
          </View>

        </View>

        {/* ================= TITLE ================= */}

        <Text style={styles.title}>
          Congratulations!
        </Text>

        {/* ================= DESCRIPTION ================= */}

        <Text style={styles.description}>
          Your account is ready to use. You will
          {'\n'}
          be redirected to the Home Page in a
          {'\n'}
          few seconds...
        </Text>

        {/* ================= LOADING ================= */}

        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#1C2A3A"
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // =====================================================
  // BACKGROUND OVERLAY
  // =====================================================

  overlay: {
    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.38)',

    alignItems: 'center',
    justifyContent: 'center',
  },

  // =====================================================
  // POPUP
  // =====================================================

  popup: {
    width: 337,
    height: 417,

    maxWidth: '90%',

    backgroundColor: '#FFFFFF',

    borderRadius: 48,

    alignItems: 'center',

    paddingTop: 40,
    paddingHorizontal: 32,
  },

  // =====================================================
  // SUCCESS CIRCLE
  // =====================================================

  successCircle: {
    width: 155,
    height: 155,

    borderRadius: 78,

    backgroundColor: '#A5D6CC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  // =====================================================
  // SHIELD
  // =====================================================

  shield: {
    width: 64,
    height: 72,

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    transform: [
      {
        scaleY: 1.05,
      },
    ],
  },

  // =====================================================
  // TITLE
  // =====================================================

  title: {
    marginTop: 32,

    fontSize: 23,
    lineHeight: 28,

    fontWeight: '700',

    color: '#1C2A3A',

    textAlign: 'center',
  },

  // =====================================================
  // DESCRIPTION
  // =====================================================

  description: {
    marginTop: 12,

    fontSize: 15,
    lineHeight: 24,

    fontWeight: '400',

    color: '#6B7280',

    textAlign: 'center',
  },

  // =====================================================
  // LOADING INDICATOR
  // =====================================================

  loaderContainer: {
    marginTop: 28,

    width: 55,
    height: 55,

    alignItems: 'center',
    justifyContent: 'center',
  },

});