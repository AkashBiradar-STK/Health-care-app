import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  TextInput,
  View,
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
};

export default function CustomInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={Colors.placeholder}
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
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
});