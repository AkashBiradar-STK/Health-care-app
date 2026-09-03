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
import KeyboardAwareScrollView from '@/components/reusable/KeyboardAwareScrollView';
import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/auth/verifyCodeStyles';

export default function VerifyCodeScreen() {
  const [code, setCode] = useState(['', '', '', '', '']);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const isCodeComplete = code.every(
    (digit) => digit.length === 1
  );

  const handleCodeChange = (
    value: string,
    index: number
  ) => {
    const newCode = [...code];

    newCode[index] = value.slice(-1);

    setCode(newCode);

    if (value && index < 4) {
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
    if (!isCodeComplete) {
      return;
    }

    router.push('/create-password');
  };

  const handleBack = () => {
    router.back();
  };

  const handleResend = () => {
    console.log('Resend verification code');
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
                Verify Code
              </Text>

              <Text style={styles.description}>
                Enter the the code
                {'\n'}
                we just sent you on your registered Email
              </Text>
            </View>

            {/* Verification Code */}
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  style={styles.codeInput}
                  value={digit}
                  onChangeText={(value) =>
                    handleCodeChange(value, index)
                  }
                  onKeyPress={(event) =>
                    handleKeyPress(event, index)
                  }
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>

            {/* Verify Button */}
            <CustomButton
              title="Verify"
              onPress={handleVerify}
              disabled={!isCodeComplete}
              buttonStyle={styles.button}
            />

            {/* Resend */}
            <Text style={styles.helperText}>
              Didn't get the Code?{' '}
              <Text
                style={styles.resendText}
                onPress={handleResend}
              >
                Resend
              </Text>
            </Text>

          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}