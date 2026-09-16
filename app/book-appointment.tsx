import React, { useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { doctors } from '@/data/home/doctors/doctorsData';
import { Colors } from '@/constants/theme';

const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const hours = [
  '09.00 AM',
  '09.30 AM',
  '10.00 AM',
  '10.30 AM',
  '11.00 AM',
  '11.30 AM',
  '03.00 PM',
  '03.30 PM',
  '04.00 PM',
  '04.30 PM',
  '05.00 PM',
  '05.30 PM',
];

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

export default function BookAppointmentScreen() {
  const { doctorId } = useLocalSearchParams<{
    doctorId: string;
  }>();

  const doctor = doctors.find(
    (item) => item.id === doctorId
  );

  /*
   * Start with June 2023 to match your Figma.
   */
  const [currentMonth, setCurrentMonth] = useState(
    new Date(2023, 5, 1)
  );

  const [selectedDate, setSelectedDate] = useState(
    new Date(2023, 5, 30)
  );

  const [selectedHour, setSelectedHour] = useState(
    '10.00 AM'
  );

  /*
   * Create the calendar days for the current month.
   */
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(
      year,
      month,
      1
    ).getDay();

    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const days: (number | null)[] = [];

    // Empty spaces before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [currentMonth]);

  /*
   * Previous month
   */
  const goToPreviousMonth = () => {
    setCurrentMonth(
      (previousMonth) =>
        new Date(
          previousMonth.getFullYear(),
          previousMonth.getMonth() - 1,
          1
        )
    );
  };

  /*
   * Next month
   */
  const goToNextMonth = () => {
    setCurrentMonth(
      (previousMonth) =>
        new Date(
          previousMonth.getFullYear(),
          previousMonth.getMonth() + 1,
          1
        )
    );
  };

  /*
   * Select a date.
   */
  const selectDate = (day: number) => {
    setSelectedDate(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      )
    );
  };

  /*
   * Check whether a calendar day is selected.
   */
  const isSelectedDate = (day: number) => {
    return (
      selectedDate.getFullYear() ===
        currentMonth.getFullYear() &&
      selectedDate.getMonth() ===
        currentMonth.getMonth() &&
      selectedDate.getDate() === day
    );
  };

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
            onPress={() => router.back()}
            style={styles.backButton}
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Select Date */}
          <Text style={styles.sectionTitle}>
            Select Date
          </Text>

          <View style={styles.calendarCard}>
            {/* Month Header */}
            <View style={styles.monthHeader}>
              <Text style={styles.monthTitle}>
                {monthNames[currentMonth.getMonth()]}{' '}
                {currentMonth.getFullYear()}
              </Text>

              <View style={styles.monthArrows}>
                <Pressable
                  onPress={goToPreviousMonth}
                  style={styles.monthArrowButton}
                >
                  <Ionicons
                    name="chevron-back"
                    size={20}
                    color={Colors.secondaryText}
                  />
                </Pressable>

                <Pressable
                  onPress={goToNextMonth}
                  style={styles.monthArrowButton}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.primary}
                  />
                </Pressable>
              </View>
            </View>

            {/* Week Days */}
            <View style={styles.weekRow}>
              {weekDays.map((day) => (
                <Text
                  key={day}
                  style={styles.weekDay}
                >
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar */}
            <View style={styles.calendarGrid}>
              {calendarDays.map((day, index) => {
                if (day === null) {
                  return (
                    <View
                      key={`empty-${index}`}
                      style={styles.dateCell}
                    />
                  );
                }

                const selected = isSelectedDate(day);

                return (
                  <Pressable
                    key={`day-${day}`}
                    onPress={() => selectDate(day)}
                    style={[
                      styles.dateCell,
                      selected &&
                        styles.dateCellSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dateText,
                        selected &&
                          styles.dateTextSelected,
                      ]}
                    >
                      {day}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Select Hour */}
          <Text style={styles.hourTitle}>
            Select Hour
          </Text>

          <View style={styles.hoursGrid}>
            {hours.map((hour) => {
              const selected =
                selectedHour === hour;

              return (
                <Pressable
                  key={hour}
                  onPress={() =>
                    setSelectedHour(hour)
                  }
                  style={[
                    styles.hourButton,
                    selected &&
                      styles.hourButtonSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.hourText,
                      selected &&
                        styles.hourTextSelected,
                    ]}
                  >
                    {hour}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>

        {/* Confirm */}
        <View style={styles.bottomContainer}>
<Pressable
  style={styles.confirmButton}
  onPress={() =>
    router.push({
      pathname: '/appointment_confirmation',
      params: {
        doctorId: doctor.id,
        year: selectedDate.getFullYear().toString(),
        month: selectedDate.getMonth().toString(),
        day: selectedDate.getDate().toString(),
        hour: selectedHour,
      },
    })
  }
>
            <Text style={styles.confirmButtonText}>
              Confirm
            </Text>
          </Pressable>
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
    paddingHorizontal: 24,
    paddingTop: 20,
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

  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  calendarCard: {
    width: '100%',
    minHeight: 236,
    backgroundColor: Colors.white,
    borderRadius: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 3,

    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 10,
  },

  monthHeader: {
    height: 28,
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'space-between' as const,
  },

  monthTitle: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  monthArrows: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 6,
  },

  monthArrowButton: {
    width: 28,
    height: 28,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  weekRow: {
    flexDirection: 'row' as const,
    marginTop: 8,
  },

  weekDay: {
    width: '14.2857%' as const,
    textAlign: 'center' as const,
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '600' as const,
    color: Colors.secondaryText,
  },

  calendarGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    marginTop: 5,
  },

  dateCell: {
    width: '14.2857%' as const,
    height: 28,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  dateCellSelected: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignSelf: 'center' as const,
  },

  dateText: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500' as const,
    color: Colors.secondaryText,
  },

  dateTextSelected: {
    color: Colors.white,
    fontWeight: '700' as const,
  },

  hourTitle: {
    marginTop: 36,
    marginBottom: 19,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  hoursGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between' as const,
    rowGap: 12,
  },

  hourButton: {
    width: '30.5%' as const,
    height: 37,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  hourButtonSelected: {
    backgroundColor: Colors.primary,
  },

  hourText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600' as const,
    color: Colors.secondaryText,
  },

  hourTextSelected: {
    color: Colors.white,
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 42,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  confirmButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  confirmButtonText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600' as const,
    color: Colors.white,
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