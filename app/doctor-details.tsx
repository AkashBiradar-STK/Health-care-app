import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams } from 'expo-router';

import { doctors } from '@/data/home/doctors/doctorsData';
import { Colors } from '@/constants/theme';

export default function DoctorDetailsScreen() {
  const { doctorId } = useLocalSearchParams<{
    doctorId: string;
  }>();

  const doctor = doctors.find(
    (item) => item.id === doctorId
  );

  if (!doctor) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: Colors.secondaryText,
            }}
          >
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
            Doctor Details
          </Text>

          <Pressable style={styles.headerFavorite}>
            <Ionicons
              name="heart-outline"
              size={23}
              color={Colors.primary}
            />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Doctor Card */}
          <View style={styles.doctorCard}>
            <Image
              source={doctor.image}
              style={styles.doctorImage}
              resizeMode="cover"
            />

            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>
                {doctor.name}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.specialty}>
                {doctor.specialty}
              </Text>

              <View style={styles.locationRow}>
                <Ionicons
                  name="location-outline"
                  size={15}
                  color={Colors.secondaryText}
                />

                <Text style={styles.location}>
                  {doctor.location}
                </Text>
              </View>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="people"
                  size={22}
                  color={Colors.primary}
                />
              </View>

              <Text style={styles.statValue}>
                2,000+
              </Text>

              <Text style={styles.statLabel}>
                patients
              </Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="ribbon"
                  size={22}
                  color={Colors.primary}
                />
              </View>

              <Text style={styles.statValue}>
                10+
              </Text>

              <Text style={styles.statLabel}>
                experience
              </Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="star"
                  size={22}
                  color={Colors.primary}
                />
              </View>

              <Text style={styles.statValue}>
                {doctor.rating}
              </Text>

              <Text style={styles.statLabel}>
                rating
              </Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="chatbubbles"
                  size={22}
                  color={Colors.primary}
                />
              </View>

              <Text style={styles.statValue}>
                {doctor.reviews.replace(' Reviews', '')}
              </Text>

              <Text style={styles.statLabel}>
                reviews
              </Text>
            </View>
          </View>

          {/* About Me */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              About me
            </Text>

            <Text style={styles.description}>
              {doctor.name}, a dedicated {doctor.specialty.toLowerCase()},
              brings a wealth of experience to providing compassionate
              and professional healthcare. With a patient-focused
              approach, every consultation is designed to understand
              your needs and provide appropriate care.
            </Text>

            <Pressable>
              <Text style={styles.viewMore}>
                view more
              </Text>
            </Pressable>
          </View>

          {/* Working Time */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Working Time
            </Text>

            <Text style={styles.workingTime}>
              Monday-Friday, 08.00 AM-18.00 PM
            </Text>
          </View>

          {/* Reviews */}
          <View style={styles.reviewHeader}>
            <Text style={styles.sectionTitle}>
              Reviews
            </Text>

            <Pressable>
              <Text style={styles.seeAll}>
                See All
              </Text>
            </Pressable>
          </View>

          <View style={styles.reviewCard}>
            <View style={styles.reviewTop}>
              <View style={styles.reviewerAvatar}>
                <Ionicons
                  name="person"
                  size={22}
                  color={Colors.white}
                />
              </View>

              <View style={styles.reviewerInfo}>
                <Text style={styles.reviewerName}>
                  Emily Anderson
                </Text>

                <View style={styles.reviewRating}>
                  <Text style={styles.reviewScore}>
                    5.0
                  </Text>

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Ionicons
                      key={star}
                      name="star"
                      size={13}
                      color={Colors.ratingStar}
                    />
                  ))}
                </View>
              </View>
            </View>

            <Text style={styles.reviewText}>
              Dr. {doctor.name.replace('Dr. ', '')} is a true
              professional who genuinely cares about patients.
              I highly recommend this doctor.
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.bookButton}
            onPress={() =>
              router.push({
                pathname: '/book-appointment',
                params: {
                  doctorId: doctor.id,
                },
              })
            }
          >
            <Text style={styles.bookButtonText}>
              Book Appointment
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

  headerFavorite: {
    width: 40,
    height: 40,
    alignItems: 'flex-end' as const,
    justifyContent: 'center' as const,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  doctorCard: {
    height: 116,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row' as const,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 3,
  },

  doctorImage: {
    width: 96,
    height: 96,
    borderRadius: 10,
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center' as const,
  },

  doctorName: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700' as const,
    color: '#1F2A37',
  },

  divider: {
    height: 1,
    backgroundColor: Colors.lightBorder,
    marginVertical: 6,
  },

  specialty: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600' as const,
    color: '#4B5563',
  },

  locationRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginTop: 2,
  },

  location: {
    flex: 1,
    marginLeft: 4,
    fontSize: 13,
    lineHeight: 20,
    color: '#4B5563',
  },

  statsRow: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    marginTop: 22,
  },

  statItem: {
    width: '24%',
    alignItems: 'center' as const,
  },

  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginBottom: 6,
  },

  statValue: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600' as const,
    color: Colors.primary,
  },

  statLabel: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.secondaryText,
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  description: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 19,
    color: Colors.secondaryText,
  },

  viewMore: {
    marginTop: 2,
    fontSize: 13,
    color: Colors.primary,
    textDecorationLine: 'underline' as const,
  },

  workingTime: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 20,
    color: Colors.secondaryText,
  },

  reviewHeader: {
    marginTop: 18,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },

  seeAll: {
    fontSize: 13,
    color: Colors.secondaryText,
  },

  reviewCard: {
    marginTop: 10,
  },

  reviewTop: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },

  reviewerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8E9BA5',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  reviewerInfo: {
    marginLeft: 12,
  },

  reviewerName: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700' as const,
    color: '#374151',
  },

  reviewRating: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginTop: 2,
    gap: 2,
  },

  reviewScore: {
    marginRight: 4,
    fontSize: 12,
    color: Colors.secondaryText,
  },

  reviewText: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 19,
    color: Colors.secondaryText,
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 44,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  bookButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  bookButtonText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600' as const,
    color: Colors.white,
  },
};