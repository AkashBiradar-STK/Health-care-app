import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/doctors/doctorsStyles';

type DoctorCardProps = {
  doctor: {
    name: string;
    specialty: string;
    location: string;
    rating: string;
    reviews: string;
    image: any;
  };
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <View style={styles.doctorCard}>
      <Image
        source={doctor.image}
        style={styles.doctorImage}
        resizeMode="cover"
      />

      <View style={styles.doctorInfo}>
        <View style={styles.nameRow}>
          <Text style={styles.doctorName} numberOfLines={1}>
            {doctor.name}
          </Text>

          <Pressable style={styles.favoriteButton}>
            <Ionicons
              name="heart-outline"
              size={18}
              color={Colors.secondaryText}
            />
          </Pressable>
        </View>

        <Text style={styles.doctorSpecialty} numberOfLines={1}>
          {doctor.specialty}
        </Text>

        <Text style={styles.doctorLocation} numberOfLines={1}>
          {doctor.location}
        </Text>

        <View style={styles.ratingRow}>
          <Ionicons
            name="star"
            size={14}
            color={Colors.ratingStar}
          />

          <Text style={styles.ratingText}>
            {doctor.rating}
          </Text>

          <Text style={styles.reviewsText}>
            • {doctor.reviews}
          </Text>
        </View>
      </View>
    </View>
  );
}