import React from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  Stack,
  router,
  useLocalSearchParams,
} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { doctors } from '@/data/home/doctors/doctorsData';
import { Colors } from '@/constants/theme';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function AppointmentConfirmationScreen() {
  const {
    doctorId,
    year,
    month,
    day,
    hour,
  } = useLocalSearchParams<{
    doctorId: string;
    year: string;
    month: string;
    day: string;
    hour: string;
  }>();

  const doctor = doctors.find(
    (item) => item.id === doctorId
  );

  if (!doctor) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Doctor not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const appointmentDate = new Date(
    Number(year),
    Number(month),
    Number(day)
  );

  const formattedDate = `${
    monthNames[appointmentDate.getMonth()]
  } ${appointmentDate.getDate()}, ${
    appointmentDate.getFullYear()
  }`;

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SafeAreaView style={styles.container}>
        {/* Background Book Appointment Screen */}
        <View style={styles.backgroundContent}>
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={Colors.primary}
              />
            </Pressable>

            <Text style={styles.headerTitle}>
              Book Appointment
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          <Text style={styles.backgroundTitle}>
            Select Date
          </Text>

          <View style={styles.backgroundCalendar} />

          <Text style={styles.backgroundTitle}>
            Select Hour
          </Text>

          <View style={styles.backgroundHours}>
            <View />
            <View />
            <View />
          </View>
        </View>

        {/* Dark Overlay */}
        <View style={styles.overlay}>
          {/* Confirmation Card */}
          <View style={styles.confirmationCard}>
            {/* Success Icon */}
            <View style={styles.successCircle}>
<View style={styles.successIconContainer}>
  <Ionicons
    name="shield"
    size={52}
    color={Colors.white}
  />

  <Ionicons
    name="checkmark"
    size={24}
    color={Colors.primary}
    style={styles.successCheck}
  />
</View>
            </View>

            <Text style={styles.congratulations}>
              Congratulations!
            </Text>

            <Text style={styles.confirmationText}>
              Your appointment with {doctor.name}
              {'\n'}
              is confirmed for {formattedDate}, at
              {'\n'}
              {hour}.
            </Text>

            <Pressable
              style={styles.doneButton}
              onPress={() => router.replace('/home')}
            >
              <Text style={styles.doneButtonText}>
                Done
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.back()}
              style={styles.editButton}
            >
              <Text style={styles.editButtonText}>
                Edit your appointment
              </Text>
            </Pressable>
          </View>
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

  backgroundContent: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    height: 72,
    paddingHorizontal: 24,
    paddingTop: 10,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start' as const,
    justifyContent: 'center' as const,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center' as const,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  headerSpacer: {
    width: 40,
  },

  backgroundTitle: {
    marginHorizontal: 24,
    marginTop: 18,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  backgroundCalendar: {
    height: 230,
    marginHorizontal: 24,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: '#F8F9FA',
  },

  backgroundHours: {
    flexDirection: 'row' as const,
    marginHorizontal: 24,
    marginTop: 14,
    gap: 10,
  },

  overlay: {
    position: 'absolute' as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  confirmationCard: {
    width: '76%',
    backgroundColor: Colors.white,
    borderRadius: 42,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 26,
    alignItems: 'center' as const,
  },

  successCircle: {
    width: 114,
    height: 114,
    borderRadius: 57,
    backgroundColor: '#A5D6CC',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

successIconContainer: {
  width: 54,
  height: 54,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  position: 'relative' as const,
},

successCheck: {
  position: 'absolute' as const,
  top: 15,
  left: 15,
},

  congratulations: {
    marginTop: 28,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  confirmationText: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400' as const,
    color: Colors.secondaryText,
    textAlign: 'center' as const,
  },

  doneButton: {
    width: '100%',
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginTop: 24,
  },

  doneButtonText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as const,
    color: Colors.white,
  },

  editButton: {
    marginTop: 14,
    paddingVertical: 4,
  },

  editButtonText: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.secondaryText,
  },

  errorContainer: {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  errorText: {
    fontSize: 16,
    color: Colors.secondaryText,
  },
};