import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import NavItem from '@/components/home/NavItem';

import BookingCard from '@/components/bookings/BookingCard';
import {
  upcomingBookings,
  completedBookings,
  canceledBookings,
} from '@/data/home/bookings/bookingsData';
import { Colors } from '@/constants/theme';

const tabs = [
  'Upcoming',
  'Completed',
  'Canceled',
];

export default function MyBookingsScreen() {
  const [activeTab, setActiveTab] = useState('Upcoming');

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
          <Text style={styles.headerTitle}>
            My Bookings
          </Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tab}
              >
                <Text
                  style={[
                    styles.tabText,
                    active && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Text>

                {active && (
                  <View style={styles.activeIndicator} />
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Booking List */}
        <FlatList
          data={
  activeTab === 'Upcoming'
    ? upcomingBookings
    : activeTab === 'Completed'
      ? completedBookings
      : canceledBookings
}

          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (



<BookingCard
  booking={item}
  type={
    activeTab === 'Upcoming'
      ? 'upcoming'
      : 'completed'
  }
  onCancel={() => {}}
  onReschedule={() => {}}
  onRebook={() => {}}
  onReview={() => {}}
/>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 12 }} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No {activeTab.toLowerCase()} bookings
              </Text>
            </View>
          }
        />
            {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
          active={false}
          onPress={() => router.replace('/home')}
        />

        <NavItem
          icon="location-outline"
          label="Location"
          active={false}
          onPress={() => router.push('/find-location')}
        />

        <NavItem
          icon="calendar"
          label="Appointment"
          active={true}
          onPress={() => {}}
        />

        <NavItem
          icon="person-outline"
          label="Profile"
          active={false}
          onPress={() => router.push('/profile-dashboard')}
        />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    height: 72,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  headerTitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  tabsContainer: {
    height: 44,
    flexDirection: 'row' as const,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  tab: {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    position: 'relative' as const,
  },

  tabText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600' as const,
    color: '#9CA3AF',
  },

  tabTextActive: {
    color: Colors.primary,
  },

  activeIndicator: {
    position: 'absolute' as const,
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },

  listContent: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 100,
  },

  emptyContainer: {
    alignItems: 'center' as const,
    paddingTop: 60,
  },

  emptyText: {
    fontSize: 14,
    color: Colors.secondaryText,
  },

    bottomNav: {
    height: 76,
    backgroundColor: Colors.white,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    paddingHorizontal: 48,
    borderTopWidth: 1,
    borderTopColor: '#F7F7F7',
  },
};