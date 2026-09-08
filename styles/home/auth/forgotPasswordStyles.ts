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
    marginTop: 120,
    marginBottom: 16,
  },

  logo: {
    width: 66,
    height: 66,
    tintColor: Colors.primary,
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
    textAlign: 'center',
  },

  description: {
    width: 342,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: Colors.homeSecondaryText,
    textAlign: 'center',
  },

  /* =========================
     EMAIL
  ========================= */

  emailInput: {
    height: 45,
    borderColor: Colors.forgotPasswordInputBorder,
    borderRadius: 8,
    backgroundColor:
      Colors.forgotPasswordInputBackground,
    paddingHorizontal: 16,
  },

  emailInputText: {
    fontSize: 14,
    color: Colors.primary,
  },

  /* =========================
     VERIFY CODE
  ========================= */

  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },

  codeInput: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.inputBackground,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primary,
  },

  helperText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: Colors.homeSecondaryText,
  },

  resendText: {
    color: Colors.link,
    fontWeight: '600',
  },

  /* =========================
     PASSWORD
  ========================= */

  inputsContainer: {
    width: '100%',
  },

  passwordInput: {
    height: 45,
    borderColor:
      Colors.forgotPasswordInputBorder,
    borderRadius: 8,
    backgroundColor:
      Colors.forgotPasswordInputBackground,
    paddingHorizontal: 16,
    marginBottom: 14,

  },

  passwordInputText: {
    fontSize: 14,
    color: Colors.primary,
  },

  passwordRequirements: {
    marginTop: 14,
    marginBottom: 18,
  },

  requirementsTitle: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
  },

  requirement: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.homeSecondaryText,
  },

  requirementValid: {
    color: Colors.successLight,
  },

  passwordMatch: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: Colors.successLight,
  },

  passwordMismatch: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: Colors.notificationBadge,
  },

  /* =========================
     BUTTON
  ========================= */

  button: {
    height: 48,
    borderRadius: 29,
    marginTop: 32,
  },
});