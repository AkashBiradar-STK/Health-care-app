import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

export default function DoctorMarker() {
  return (
    <View style={styles.marker}>
      <View style={styles.circle}>
        <Ionicons
          name="person"
          size={18}
          color={Colors.white}
        />
      </View>

      <View style={styles.pointer} />
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 42,
    height: 48,
    alignItems: 'center',
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.primary,
    marginTop: -1,
  },
});