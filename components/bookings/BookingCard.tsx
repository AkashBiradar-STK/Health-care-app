import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

type BookingCardProps = {
  booking: {
    date: string;
    time: string;
    doctorName: string;
    specialty: string;
    location: string;
    image: any;
  };

  type: 'upcoming' | 'completed';
};

export default function BookingCard({
  booking,
}: BookingCardProps) {
  return (
    <View style={styles.card}>
      {/* Date + Time */}
      <Text style={styles.dateTime}>
        {booking.date} - {booking.time}
      </Text>

      <View style={styles.divider} />

      {/* Doctor */}
      <View style={styles.doctorRow}>
        <Image
          source={booking.image}
          style={styles.doctorImage}
          resizeMode="cover"
        />

        <View style={styles.doctorInfo}>
          <Text
            style={styles.doctorName}
            numberOfLines={1}
          >
            {booking.doctorName}
          </Text>

          <Text
            style={styles.specialty}
            numberOfLines={1}
          >
            {booking.specialty}
          </Text>

          <View style={styles.locationRow}>
            <Ionicons
              name="location-outline"
              size={14}
              color={Colors.secondaryText}
            />

            <Text
              style={styles.location}
              numberOfLines={1}
            >
              {booking.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 3,
  },

  dateTime: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.lightBorder,
    marginTop: 8,
    marginBottom: 10,
  },

  doctorRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },

  doctorImage: {
    width: 96,
    height: 96,
    borderRadius: 10,
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
  },

  doctorName: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  specialty: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500' as const,
    color: Colors.secondaryText,
  },

  locationRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginTop: 5,
  },

  location: {
    flex: 1,
    marginLeft: 4,
    fontSize: 12,
    lineHeight: 18,
    color: Colors.secondaryText,
  },
};