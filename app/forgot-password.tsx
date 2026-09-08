import React, { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import CustomButton from '@/components/reusable/CustomButton';
import CustomInput from '@/components/reusable/CustomInput';
import KeyboardAwareScrollView from '@/components/reusable/KeyboardAwareScrollView';
import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/auth/forgotPasswordStyles';

type ForgotPasswordStep = 'email' | 'verify' | 'password';

export default function ForgotPasswordScreen() {
  const [step, setStep] =
    useState<ForgotPasswordStep>('email');

  // Email
  const [email, setEmail] = useState('');

  // Verification code
  const [code, setCode] = useState([
    '',
    '',
    '',
    '',
    '',
  ]);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  // -----------------------------
  // Validation
  // -----------------------------

  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email.trim()
    );

  const isCodeComplete = code.every(
    (digit) => digit.length === 1
  );

  const hasMinLength = password.length >= 8;

  const hasUppercase = /[A-Z]/.test(password);

  const hasLowercase = /[a-z]/.test(password);

  const hasNumber = /[0-9]/.test(password);

  const hasSpecialCharacter =
    /[^A-Za-z0-9]/.test(password);

  const isPasswordValid =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialCharacter;

  const passwordsMatch =
    password.length > 0 &&
    password === confirmPassword;

  // -----------------------------
  // Email
  // -----------------------------

  const handleSendCode = () => {
    if (!isEmailValid) return;

    setStep('verify');
  };

  // -----------------------------
  // Verification Code
  // -----------------------------

const handleCodeChange = (
  value: string,
  index: number
) => {
  // Keep numbers only
  const digits = value.replace(/\D/g, '');

  if (!digits) {
    const newCode = [...code];
    newCode[index] = '';
    setCode(newCode);
    return;
  }

  // If multiple digits are pasted, distribute
  // them across the OTP fields
  if (digits.length > 1) {
    const newCode = [...code];

    const digitsToFill = digits.slice(
      0,
      code.length - index
    );

    digitsToFill.split('').forEach((digit, offset) => {
      newCode[index + offset] = digit;
    });

    setCode(newCode);

    // Focus the last filled field
    const nextIndex = Math.min(
      index + digitsToFill.length,
      code.length - 1
    );

    inputRefs.current[nextIndex]?.focus();

    return;
  }

  // Normal single-digit entry
  const newCode = [...code];
  newCode[index] = digits;
  setCode(newCode);

  if (index < code.length - 1) {
    inputRefs.current[index + 1]?.focus();
  }
};

  const handleKeyPress = (
    event: any,
    index: number
  ) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      !code[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (!isCodeComplete) return;

    setStep('password');
  };

  const handleResend = () => {
    console.log('Resend verification code');
  };

  // -----------------------------
  // Password
  // -----------------------------

  const handleResetPassword = () => {
    if (!isPasswordValid || !passwordsMatch) {
      return;
    }

    router.replace('/signin');
  };

  // -----------------------------
  // Back Button
  // -----------------------------

  const handleBack = () => {
    if (step === 'email') {
      router.back();
      return;
    }

    if (step === 'verify') {
      setStep('email');
      return;
    }

    setStep('verify');
  };

  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
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

            {/* ================================= */}
            {/* EMAIL STEP */}
            {/* ================================= */}

            {step === 'email' && (
              <>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                    Forget Password?
                  </Text>

                  <Text style={styles.description}>
                    Enter your Email, we will send you a
                    verification
                    {'\n'}
                    code.
                  </Text>
                </View>

                <CustomInput
                  icon="email-outline"
                  placeholder="Your Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  containerStyle={
                    styles.emailInput
                  }
                  inputStyle={
                    styles.emailInputText
                  }
                />

                <CustomButton
                  title="Send Code"
                  onPress={handleSendCode}
                  disabled={!isEmailValid}
                  buttonStyle={styles.button}
                />
              </>
            )}

            {/* ================================= */}
            {/* VERIFY CODE STEP */}
            {/* ================================= */}

            {step === 'verify' && (
              <>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                    Verify Code
                  </Text>

                  <Text style={styles.description}>
                    Enter the code
                    {'\n'}
                    we just sent you on your registered
                    Email
                  </Text>
                </View>

                <View
                  style={styles.codeContainer}
                >
                  {code.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => {
                        inputRefs.current[index] =
                          ref;
                      }}
                      style={styles.codeInput}
                      value={digit}
                      onChangeText={(value) =>
                        handleCodeChange(
                          value,
                          index
                        )
                      }
                      onKeyPress={(event) =>
                        handleKeyPress(
                          event,
                          index
                        )
                      }
                      keyboardType="number-pad"
                      selectTextOnFocus
                    />
                  ))}
                </View>

                <CustomButton
                  title="Verify"
                  onPress={handleVerify}
                  disabled={!isCodeComplete}
                  buttonStyle={styles.button}
                />

                <Text
                  style={styles.helperText}
                >
                  Didn't get the Code?{' '}

                  <Text
                    style={styles.resendText}
                    onPress={handleResend}
                  >
                    Resend
                  </Text>
                </Text>
              </>
            )}

            {/* ================================= */}
            {/* CREATE PASSWORD STEP */}
            {/* ================================= */}

            {step === 'password' && (
              <>
                <View
                  style={styles.titleContainer}
                >
                  <Text style={styles.title}>
                    Create new password
                  </Text>

                  <Text
                    style={styles.description}
                  >
                    Your new password must be different
                    from
                    {'\n'}
                    previously used password
                  </Text>
                </View>

                <View
                  style={styles.inputsContainer}
                >

                  {/* Password */}
                  <CustomInput
                    icon="lock-outline"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    showPasswordToggle
                    containerStyle={
                      styles.passwordInput
                    }
                    inputStyle={
                      styles.passwordInputText
                    }
                  />



                  {/* Confirm Password */}
                  <CustomInput
                    icon="lock-outline"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={
                      setConfirmPassword
                    }
                    secureTextEntry
                    showPasswordToggle
                    containerStyle={
                      styles.passwordInput
                    }
                    inputStyle={
                      styles.passwordInputText
                    }
                  />

                  {/* Password Requirements */}
                  <View
                    style={
                      styles.passwordRequirements
                    }
                  >
                    <Text
                      style={
                        styles.requirementsTitle
                      }
                    >
                      Password must contain:
                    </Text>

                    <Text
                      style={[
                        styles.requirement,
                        hasMinLength &&
                          styles.requirementValid,
                      ]}
                    >
                      {hasMinLength ? '✓' : '•'} At
                      least 8 characters
                    </Text>

                    <Text
                      style={[
                        styles.requirement,
                        hasUppercase &&
                          styles.requirementValid,
                      ]}
                    >
                      {hasUppercase ? '✓' : '•'} One
                      uppercase letter
                    </Text>

                    <Text
                      style={[
                        styles.requirement,
                        hasLowercase &&
                          styles.requirementValid,
                      ]}
                    >
                      {hasLowercase ? '✓' : '•'} One
                      lowercase letter
                    </Text>

                    <Text
                      style={[
                        styles.requirement,
                        hasNumber &&
                          styles.requirementValid,
                      ]}
                    >
                      {hasNumber ? '✓' : '•'} One
                      number
                    </Text>

                    <Text
                      style={[
                        styles.requirement,
                        hasSpecialCharacter &&
                          styles.requirementValid,
                      ]}
                    >
                      {hasSpecialCharacter
                        ? '✓'
                        : '•'}{' '}
                      One special character
                    </Text>
                  </View>

                  {/* Password Match */}
                  {confirmPassword.length > 0 && (
                    <Text
                      style={
                        passwordsMatch
                          ? styles.passwordMatch
                          : styles.passwordMismatch
                      }
                    >
                      {passwordsMatch
                        ? '✓ Passwords match'
                        : '✕ Passwords do not match'}
                    </Text>
                  )}
                </View>

                <CustomButton
                  title="Reset Password"
                  onPress={
                    handleResetPassword
                  }
                  disabled={
                    !isPasswordValid ||
                    !passwordsMatch
                  }
                  buttonStyle={styles.button}
                />
              </>
            )}

          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}