import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/theme';

type SocialButtonProps = {
  icon: 'google' | 'facebook';
  title: string;
  onPress?: () => void;
};

export default function SocialButton({
  icon,
  title,
  onPress,
}: SocialButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <FontAwesome
        name={icon}
        size={18}
        color={icon === 'google' ? Colors.google : Colors.facebook}
      />

      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 38,

    borderWidth: 1,
    borderColor: Colors.lightBorder,
    borderRadius: 7,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },

  text: {
    marginLeft: 10,
    color: Colors.primary,
    fontSize: 13,
  },
});