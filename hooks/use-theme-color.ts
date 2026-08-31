import { Colors } from '@/constants/theme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors
) {
  if (props.light) {
    return props.light;
  }

  if (props.dark) {
    return props.dark;
  }

  return Colors[colorName];
}