import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SigninScreen() {
  const handleSignIn = () => {
    // For now, just go to the profile screen.
    // Real authentication will be added later.
    router.push('/profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/onboarding/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

        </View>

        {/* TITLE */}
        <Text style={styles.title}>Hi, Welcome Back!</Text>

        <Text style={styles.subtitle}>
          Hope you're doing fine.
        </Text>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={18}
            color="#9AA5B5"
          />

          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#9AA5B5"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={18}
            color="#9AA5B5"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9AA5B5"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* SIGN IN BUTTON */}
        <Pressable
          style={styles.signInButton}
          onPress={handleSignIn}
        >
          <Text style={styles.signInButtonText}>
            Sign In
          </Text>
        </Pressable>

        {/* OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />

          <Text style={styles.orText}>or</Text>

          <View style={styles.line} />
        </View>

        {/* GOOGLE */}
        <Pressable style={styles.socialButton}>
          <FontAwesome
            name="google"
            size={18}
            color="#4285F4"
          />

          <Text style={styles.socialText}>
            Sign In with Google
          </Text>
        </Pressable>

        {/* FACEBOOK */}
        <Pressable style={styles.socialButton}>
          <FontAwesome
            name="facebook"
            size={18}
            color="#1877F2"
          />

          <Text style={styles.socialText}>
            Sign In with Facebook
          </Text>
        </Pressable>

        {/* FORGOT PASSWORD */}
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </Pressable>

        {/* SIGN UP */}
        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>
            Don't have an account yet?
          </Text>

          <Pressable
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.signupText}>
              Sign up
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: 'center',
  },

  /* ================= LOGO ================= */

  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 35,
  },

  logo: {
    width: 82,
    height: 82,
    tintColor: '#1C2B39',
  },

  logoText: {
    marginTop: 5,
    fontSize: 26,
    color: '#687284',
    fontWeight: '400',
  },

  /* ================= TITLE ================= */

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C2B39',
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 12,
    color: '#737D8D',
    marginBottom: 32,
  },

  /* ================= INPUTS ================= */

  inputContainer: {
    width: '100%',
    height: 40,

    borderWidth: 1,
    borderColor: '#D6DBE2',
    borderRadius: 7,

    backgroundColor: '#F8F9FA',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
    marginBottom: 17,
  },

  input: {
    flex: 1,
    marginLeft: 9,

    fontSize: 12,
    color: '#1C2B39',
  },

  /* ================= SIGN IN BUTTON ================= */

  signInButton: {
    width: '100%',
    height: 42,

    borderRadius: 22,

    backgroundColor: '#1C2B39',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
  },

  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },

  /* ================= OR ================= */

  orContainer: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDE1E6',
  },

  orText: {
    marginHorizontal: 20,

    color: '#737D8D',
    fontSize: 13,
  },

  /* ================= SOCIAL BUTTONS ================= */

  socialButton: {
    width: '100%',
    height: 38,

    borderWidth: 1,
    borderColor: '#E0E4E9',
    borderRadius: 7,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },

  socialText: {
    marginLeft: 9,

    color: '#1C2B39',
    fontSize: 12,
  },

  /* ================= FORGOT PASSWORD ================= */

  forgotButton: {
    marginTop: 8,
  },

  forgotText: {
    color: '#2874D0',
    fontSize: 12,
  },

  /* ================= SIGN UP ================= */

  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 20,
  },

  accountText: {
    color: '#737D8D',
    fontSize: 12,
  },

  signupText: {
    color: '#2874D0',
    fontSize: 12,
    marginLeft: 4,
  },
});