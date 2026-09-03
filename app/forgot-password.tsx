import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import CustomButton from '@/components/reusable/CustomButton';
import CustomInput from '@/components/reusable/CustomInput';
import KeyboardAwareScrollView from '@/components/reusable/KeyboardAwareScrollView';
import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/auth/forgotPasswordStyles';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email.trim()
  );

  const handleSendCode = () => {
    if (!isEmailValid) {
      return;
    }

    router.push('/verify-code');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.content}>

            {/* Back Button */}
            <Pressable
              style={styles.backButton}
              onPress={handleBack}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={Colors.homeChevron}
              />
            </Pressable>

            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require('@/assets/images/onboarding/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            {/* Title + Description */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Forget Password?
              </Text>

              <Text style={styles.description}>
                Enter your Email, we will send you a verification
                {'\n'}code.
              </Text>
            </View>

            {/* Email Input */}
            <CustomInput
              icon="email-outline"
              placeholder="Your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              containerStyle={styles.emailInput}
              inputStyle={styles.emailInputText}
            />

            {/* Send Code */}
            <CustomButton
              title="Send Code"
              onPress={handleSendCode}
              disabled={!isEmailValid}
              buttonStyle={styles.button}
            />

          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}