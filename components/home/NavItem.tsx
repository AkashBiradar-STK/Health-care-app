import React from 'react';
import {
  Pressable,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/homeStyles';

type NavItemProps = {
  icon: any;
  label: string;
  active: boolean;
  onPress: () => void;
};

export default function NavItem({
  icon,
  label,
  active,
  onPress,
}: NavItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.navItem,
        active && styles.navItemActive,
      ]}
    >
      <Ionicons
        name={icon}
        size={24}
        color={
          active
            ? Colors.notificationIcon
            : Colors.navigationInactive
        }
      />

      {active && (
        <Text style={styles.navLabel}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}