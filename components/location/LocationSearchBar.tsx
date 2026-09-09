import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

type LocationSearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function LocationSearchBar({
  value,
  onChangeText,
}: LocationSearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={24}
        color={Colors.placeholder}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Doctor, Hospital"
        placeholderTextColor={Colors.placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 4,
  },

  input: {
    flex: 1,
    marginLeft: 10,

    fontSize: 14,
    lineHeight: 21,

    color: Colors.primary,

    paddingVertical: 0,
  },
});