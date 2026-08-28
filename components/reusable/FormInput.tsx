import {
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

import { Colors } from '@/constants/theme';

type FormInputProps = TextInputProps;

export default function FormInput(props: FormInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={Colors.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.inputBackground,
    paddingHorizontal: 16,
    color: Colors.text,
    fontSize: 14,
  },
});