import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  backButton: {
    marginTop: 28,
    width: 24,
    height: 24,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 130,
    marginBottom: 16,
  },

  logo: {
    width: 66,
    height: 66,
    tintColor: Colors.primary,
  },

  logoText: {
    marginTop: 16,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '400',
    color: Colors.homeSecondaryText,
  },

  titleContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },

  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },

  description: {
    width: 342,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: Colors.homeSecondaryText,
    textAlign: 'center',
  },

  inputsContainer: {
    width: '100%',
    gap: 20,
  },

  passwordInput: {
    height: 45,
    borderColor: Colors.forgotPasswordInputBorder,
    borderRadius: 8,
    backgroundColor: Colors.forgotPasswordInputBackground,
    paddingHorizontal: 16,
  },

  passwordInputText: {
    fontSize: 14,
    color: Colors.primary,
  },

  button: {
    height: 48,
    borderRadius: 29,
    marginTop: 32,
  },
});