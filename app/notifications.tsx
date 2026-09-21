import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import NotificationItem from '@/components/notifications/NotificationItem';
import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/notifications/notificationsStyles';

type NotificationData = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'cancelled' | 'changed';
};

const todayNotifications: NotificationData[] = [
  {
    id: 'today-1',
    title: 'Appointment Success',
    message:
      'You have successfully booked your appointment with Dr. Emily Walker.',
    time: '1h',
    type: 'success',
  },
  {
    id: 'today-2',
    title: 'Appointment Cancelled',
    message:
      'You have successfully cancelled your appointment with Dr. David Patel.',
    time: '2h',
    type: 'cancelled',
  },
  {
    id: 'today-3',
    title: 'Scheduled Changed',
message: 'You have successfully changed your appointment with Dr. Jessica Turner.',
    time: '8h',
    type: 'changed',
  },
];

const yesterdayNotifications: NotificationData[] = [
  {
    id: 'yesterday-1',
    title: 'Appointment success',
    message:
      'You have successfully booked your appointment with Dr. David Patel.',
    time: '1d',
    type: 'success',
  },
];

export default function NotificationsScreen() {
  const [today, setToday] =
    useState<NotificationData[]>(todayNotifications);

  const [yesterday, setYesterday] =
    useState<NotificationData[]>(yesterdayNotifications);

  const markAllAsRead = (
    section: 'today' | 'yesterday'
  ) => {
    if (section === 'today') {
      setToday([]);
    } else {
      setYesterday([]);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color={Colors.primary}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Notification
          </Text>

          <View style={styles.headerRight}>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>
                1 New
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* TODAY */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                TODAY
              </Text>

              <Pressable
                onPress={() => markAllAsRead('today')}
              >
                <Text style={styles.markAllText}>
                  Mark all as read
                </Text>
              </Pressable>
            </View>

            <View style={styles.notificationsContainer}>
              {today.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  <NotificationItem
                    title={notification.title}
                    message={notification.message}
                    time={notification.time}
                    type={notification.type}
                  />

                  {index < today.length - 1 && (
                    <View
                      style={styles.notificationDivider}
                    />
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* YESTERDAY */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                YESTERDAY
              </Text>

              <Pressable
                onPress={() =>
                  markAllAsRead('yesterday')
                }
              >
                <Text style={styles.markAllText}>
                  Mark all as read
                </Text>
              </Pressable>
            </View>

            <View style={styles.notificationsContainer}>
              {yesterday.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  title={notification.title}
                  message={notification.message}
                  time={notification.time}
                  type={notification.type}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}