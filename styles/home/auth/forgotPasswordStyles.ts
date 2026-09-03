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
    width: '100%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: Colors.homeSecondaryText,
    textAlign: 'center',
  },

  emailInput: {
    height: 45,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },

  emailInputText: {
    fontSize: 14,
    color: Colors.primary,
  },

  button: {
    height: 48,
    borderRadius: 42,
    marginTop: 32,
  },
});