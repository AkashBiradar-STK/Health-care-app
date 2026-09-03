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
import { styles } from '@/styles/home/auth/createPasswordStyles';

export default function CreatePasswordScreen() {
  const handleResetPassword = () => {
    router.replace('/signin');
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

              <Text style={styles.logoText}>
                HealthPal
              </Text>
            </View>

            {/* Title + Description */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Create new password
              </Text>

              <Text style={styles.description}>
                Your new password must be different form
                {'\n'}previously used password
              </Text>
            </View>

            {/* Password Inputs */}
            <View style={styles.inputsContainer}>

              <CustomInput
                icon="lock-outline"
                placeholder="Password"
                secureTextEntry
                showPasswordToggle
                containerStyle={styles.passwordInput}
                inputStyle={styles.passwordInputText}
              />

              <CustomInput
                icon="lock-outline"
                placeholder="Confirm Password"
                secureTextEntry
                showPasswordToggle
                containerStyle={styles.passwordInput}
                inputStyle={styles.passwordInputText}
              />

            </View>

            {/* Reset Password */}
            <CustomButton
              title="Reset Password"
              onPress={handleResetPassword}
              buttonStyle={styles.button}
            />

          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}