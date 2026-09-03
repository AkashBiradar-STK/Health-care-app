import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Colors } from '@/constants/theme';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
}: CustomButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        buttonStyle,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          textStyle,
          disabled && styles.disabledText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 42,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    backgroundColor: Colors.disabled,
  },

  text: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },

  disabledText: {
    color: Colors.white,
  },
});