import { Platform } from 'react-native';

export const Colors = {
  primary: '#1C2A3A',
  white: '#FFFFFF',

  text: '#374151',
  secondaryText: '#737D8D',
  descriptionText: '#858585',
  placeholder: '#9CA3AF',

  border: '#D6DBE2',
  lightBorder: '#E0E4E9',

  inputBackground: '#F8F9FA',
  profileBackground: '#F3F4F6',

  disabled: '#CBD1D8',

  link: '#2874D0',

  successLight: '#A5D6CC',

  overlay: 'rgba(0, 0, 0, 0.38)',

  google: '#4285F4',
  facebook: '#1877F2',

  onboardingBackground: '#252525',
  onboardingPurple: '#AAA1CF',
  onboardingPink: '#D58E96',
  onboardingPeach: '#D5A99A',
  onboardingTeal: '#4B9F98',
  onboardingLogo: '#39246D',

  imageBackground: '#E8EEEE',
  paginationInactive: '#B7B7B7',
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },

  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },

  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});