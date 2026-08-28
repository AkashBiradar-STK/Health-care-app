import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import CustomButton from '@/components/reusable/CustomButton';
import CustomInput from '@/components/reusable/CustomInput';
import SocialButton from '@/components/reusable/SocialButton';
import { Colors } from '@/constants/theme';

export default function SignupScreen() {
  const handleCreateAccount = () => {
    router.push('/profile');
  };

  const handleSignIn = () => {
    router.push('/signin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/onboarding/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          We are here to help you!
        </Text>

        {/* Inputs */}
        <View style={styles.inputsContainer}>
          <CustomInput
            icon="account-outline"
            placeholder="Your Name"
          />

          <CustomInput
            icon="email-outline"
            placeholder="Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomInput
            icon="lock-outline"
            placeholder="Password"
            secureTextEntry
          />
        </View>

        {/* Create Account */}
        <CustomButton
          title="Create Account"
          onPress={handleCreateAccount}
        />

        {/* OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />

          <Text style={styles.orText}>
            or
          </Text>

          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <SocialButton
          icon="google"
          title="Continue with Google"
        />

        <SocialButton
          icon="facebook"
          title="Continue with Facebook"
        />

        {/* Sign In */}
        <View style={styles.signInContainer}>
          <Text style={styles.accountText}>
            Do you have an account?
          </Text>

          <Pressable onPress={handleSignIn}>
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
    backgroundColor: Colors.white,
  },

  content: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 25,
  },

  logo: {
    width: 82,
    height: 82,
    tintColor: Colors.primary,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: Colors.secondaryText,
    marginBottom: 28,
  },

  inputsContainer: {
    width: '100%',
    gap: 10,
    marginBottom: 11,
  },

  orContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightBorder,
  },

  orText: {
    marginHorizontal: 20,
    color: Colors.secondaryText,
    fontSize: 14,
  },

  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  accountText: {
    color: Colors.secondaryText,
    fontSize: 13,
  },

  signInText: {
    color: Colors.link,
    fontSize: 13,
    marginLeft: 4,
  },
});