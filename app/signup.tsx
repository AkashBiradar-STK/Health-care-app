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

export default function SignupScreen() {
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
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          We are here to help you!
        </Text>

        {/* NAME */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="#9AA5B5"
          />

          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#9AA5B5"
            style={styles.input}
          />
        </View>

        {/* EMAIL */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
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
            size={20}
            color="#9AA5B5"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9AA5B5"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* CREATE ACCOUNT */}
<Pressable
  style={styles.createButton}
  onPress={() => router.push('/profile')}
>
  <Text style={styles.createButtonText}>Create Account</Text>
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
            size={20}
            color="#4285F4"
          />

          <Text style={styles.socialText}>
            Continue with Google
          </Text>
        </Pressable>

        {/* FACEBOOK */}
        <Pressable style={styles.socialButton}>
          <FontAwesome
            name="facebook"
            size={20}
            color="#1877F2"
          />

          <Text style={styles.socialText}>
            Continue with Facebook
          </Text>
        </Pressable>

        {/* SIGN IN */}
        <View style={styles.signInContainer}>
          <Text style={styles.accountText}>
            Do you have an account ?
          </Text>

          <Pressable onPress={() => router.push('/signin')}>
            <Text style={styles.signInText}>
              Sign In
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: 'center',
  },

  /* LOGO */

  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 25,
  },

  logo: {
    width: 82,
    height: 82,

    // If your logo PNG is white,
    // this makes it dark navy like Figma.
    tintColor: '#1C2B39',
  },

  logoText: {
    marginTop: 5,
    fontSize: 18,
    color: '#687284',
    fontWeight: '400',
  },

  /* TITLE */

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C2B39',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: '#737D8D',
    marginBottom: 28,
  },

  /* INPUTS */

  inputContainer: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#D6DBE2',
    borderRadius: 7,
    backgroundColor: '#F8F9FA',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,

    fontSize: 13,
    color: '#1C2B39',
  },

  /* CREATE BUTTON */

  createButton: {
    width: '100%',
    height: 42,
    borderRadius: 22,

    backgroundColor: '#1C2B39',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 11,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  /* OR */

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
    fontSize: 14,
  },

  /* SOCIAL BUTTONS */

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
    marginLeft: 10,
    color: '#1C2B39',
    fontSize: 13,
  },

  /* SIGN IN */

  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  accountText: {
    color: '#737D8D',
    fontSize: 13,
  },

  signInText: {
    color: '#2874D0',
    fontSize: 13,
    marginLeft: 4,
  },
});