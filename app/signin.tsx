import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

import CustomButton from '@/components/reusable/CustomButton';
import CustomInput from '@/components/reusable/CustomInput';
import SocialButton from '@/components/reusable/SocialButton';
import { Colors } from '@/constants/theme';

export default function SigninScreen() {
  const handleSignIn = () => {
    router.push('/profile');
  };

  const handleSignUp = () => {
    router.push('/signup');
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
          Hi, Welcome Back!
        </Text>

        <Text style={styles.subtitle}>
          Hope you're doing fine.
        </Text>

        {/* Inputs */}
        <View style={styles.inputsContainer}>
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

        {/* Sign In */}
        <CustomButton
          title="Sign In"
          onPress={handleSignIn}
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
          title="Sign In with Google"
        />

        <SocialButton
          icon="facebook"
          title="Sign In with Facebook"
        />

        {/* Forgot Password */}
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </Pressable>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>
            Don't have an account yet?
          </Text>

          <Pressable onPress={handleSignUp}>
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
    marginTop: 120,
    marginBottom: 35,
  },

  logo: {
    width: 82,
    height: 82,
    tintColor: Colors.primary,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 12,
    color: Colors.secondaryText,
    marginBottom: 32,
  },

  inputsContainer: {
    width: '100%',
    gap: 17,
    marginBottom: 10,
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
    fontSize: 13,
  },

  forgotButton: {
    marginTop: 8,
  },

  forgotText: {
    color: Colors.link,
    fontSize: 12,
  },

  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  accountText: {
    color: Colors.secondaryText,
    fontSize: 12,
  },

  signupText: {
    color: Colors.link,
    fontSize: 12,
    marginLeft: 4,
  },
});