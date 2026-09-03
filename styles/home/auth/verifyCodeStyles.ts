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
    width: 272,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: Colors.homeSecondaryText,
    textAlign: 'center',
  },

  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  codeInput: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    borderRadius: 12,
    backgroundColor: Colors.profileBackground,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.primary,
  },

  button: {
    height: 48,
    borderRadius: 42,
    marginTop: 24,
  },

  helperText: {
    marginTop: 24,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.homeSecondaryText,
    textAlign: 'center',
  },

  resendText: {
    color: Colors.link,
  },
});