
import React, { useRef } from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

type NotificationType = 'success' | 'cancelled' | 'changed';

type NotificationItemProps = {
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  onDelete: () => void;
};

export default function NotificationItem({
  title,
  message,
  time,
  type,
  onDelete,
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

  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,

      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 8 &&
        Math.abs(gesture.dx) > Math.abs(gesture.dy),

      onPanResponderMove: (_, gesture) => {
        const value = Math.max(-76, Math.min(76, gesture.dx));
        translateX.setValue(value);
      },

      onPanResponderRelease: (_, gesture) => {
        let finalPosition = 0;

        if (gesture.dx < -60) {
          finalPosition = -76;
        } else if (gesture.dx > 60) {
          finalPosition = 76;
        }

        Animated.spring(translateX, {
          toValue: finalPosition,
          useNativeDriver: true,
          friction: 7,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Delete action revealed by swiping right */}
      <Pressable
        onPress={onDelete}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 76,
          backgroundColor: '#D92D36',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="trash-outline" size={22} color="#FFFFFF" />
        <Text style={{ color: '#FFFFFF', fontSize: 10, marginTop: 3 }}>
          Delete
        </Text>
      </Pressable>

      {/* Delete action revealed by swiping left */}
      <Pressable
        onPress={onDelete}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 76,
          backgroundColor: '#D92D36',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="trash-outline" size={22} color="#FFFFFF" />
        <Text style={{ color: '#FFFFFF', fontSize: 10, marginTop: 3 }}>
          Delete
        </Text>
      </Pressable>

      {/* Notification content */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          width: '100%',
          minHeight: 72,
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingVertical: 10,
          backgroundColor: Colors.white,
          transform: [{ translateX }],
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
      </Animated.View>
    </View>
  );
}
