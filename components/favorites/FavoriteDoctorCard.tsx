import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

type FavoriteDoctorCardProps = {
  doctor: {
    name: string;
    specialty: string;
    location: string;
    rating: string;
    reviews: string;
    image: any;
  };
  onRemove: () => void;
};

export default function FavoriteDoctorCard({
  doctor,
  onRemove,
}: FavoriteDoctorCardProps) {
  return (
    <View style={styles.card}>
      {/* Doctor Image */}
      <Image
        source={doctor.image}
        style={styles.doctorImage}
        resizeMode="cover"
      />

      {/* Doctor Information */}
      <View style={styles.doctorInfo}>
        <Text
          style={styles.doctorName}
          numberOfLines={1}
        >
          {doctor.name}
        </Text>

        <Text
          style={styles.specialty}
          numberOfLines={1}
        >
          {doctor.specialty}
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
            {doctor.location}
          </Text>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons
            name="star"
            size={14}
            color={Colors.ratingStar}
          />

          <Text style={styles.rating}>
            {doctor.rating}
          </Text>

          <Text style={styles.reviews}>
            • {doctor.reviews}
          </Text>
        </View>
      </View>

      {/* Favorite */}
      <Pressable
        style={styles.favoriteButton}
        onPress={onRemove}
        hitSlop={10}
      >
        <Ionicons
          name="heart"
          size={20}
          color={Colors.primary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 112,

    backgroundColor: Colors.white,
    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',

    padding: 12,

    borderWidth: 0.5,
    borderColor: Colors.cardBorder,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  doctorImage: {
    width: 88,
    height: 88,
    borderRadius: 10,
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 26,
  },

  doctorName: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    color: Colors.primary,
  },

  specialty: {
    marginTop: 5,

    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',

    color: Colors.secondaryText,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },

  location: {
    flex: 1,
    marginLeft: 4,

    fontSize: 12,
    lineHeight: 17,

    color: Colors.secondaryText,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },

  rating: {
    marginLeft: 4,

    fontSize: 12,
    lineHeight: 17,

    color: Colors.secondaryText,
  },

  reviews: {
    marginLeft: 5,

    fontSize: 12,
    lineHeight: 17,

    color: Colors.secondaryText,
  },

  favoriteButton: {
    position: 'absolute',

    top: 12,
    right: 12,

    width: 28,
    height: 28,

    alignItems: 'center',
    justifyContent: 'center',
  },
});