import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '@/constants/theme';

type CustomInputProps = {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';

  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextInputProps['style'];
  showPasswordToggle?: boolean;
};

export default function CustomInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  containerStyle,
  inputStyle,
  showPasswordToggle = false,
}: CustomInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const shouldHidePassword =
    secureTextEntry && !isPasswordVisible;

  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={Colors.placeholder}
      />

      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={shouldHidePassword}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />

      {showPasswordToggle && secureTextEntry && (
        <Pressable
          onPress={() =>
            setIsPasswordVisible(!isPasswordVisible)
          }
          style={styles.eyeButton}
          hitSlop={8}
        >
          <MaterialCommunityIcons
            name={
              isPasswordVisible
                ? 'eye-outline'
                : 'eye-off-outline'
            }
            size={20}
            color={Colors.placeholder}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 7,
    backgroundColor: Colors.inputBackground,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: Colors.primary,
  },

  eyeButton: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});