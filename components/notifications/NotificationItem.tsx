import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

type NotificationType = 'success' | 'cancelled' | 'changed';

type NotificationItemProps = {
  title: string;
  message: string;
  time: string;
  type: NotificationType;
};

export default function NotificationItem({
  title,
  message,
  time,
  type,
}: NotificationItemProps) {
  let backgroundColor = '#F3F4F6';
  let iconColor = Colors.primary;

  if (type === 'success') {
    backgroundColor = '#DDF6E7';
    iconColor = '#166534';
  }

  if (type === 'cancelled') {
    backgroundColor = '#FDE5E5';
    iconColor = '#B91C1C';
  }

  return (
    <Pressable
      style={{
        width: '100%',
        minHeight: 72,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name="calendar-outline"
          size={20}
          color={iconColor}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 12,
          paddingRight: 8,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            lineHeight: 18,
            fontWeight: '700',
            color: Colors.primary,
          }}
        >
          {title}
        </Text>

        <Text
          numberOfLines={2}
          style={{
            marginTop: 3,
            fontSize: 12,
            lineHeight: 17,
            color: Colors.secondaryText,
          }}
        >
          {message}
        </Text>
      </View>

      <Text
        style={{
          minWidth: 24,
          textAlign: 'right',
          fontSize: 11,
          lineHeight: 17,
          color: Colors.secondaryText,
        }}
      >
        {time}
      </Text>
    </Pressable>
  );
}