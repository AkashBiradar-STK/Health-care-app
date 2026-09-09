import React, { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import LocationSearchBar from '@/components/location/LocationSearchBar';
import DoctorMarker from '@/components/location/DoctorMarker';
import MedicalCenterCard from '@/components/home/MedicalCenterCard';
import NavItem from '@/components/home/NavItem';

import {
  doctorMarkers,
  nearbyMedicalCenters,
} from '@/data/home/locationData/locationData';

import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/location/locationStyles';

export default function FindLocationScreen() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <ImageBackground
            source={require('@/assets/images/homepage/locationmap.png')}
            style={styles.map}
            resizeMode="cover"
          >
            {/* Doctor markers */}
            {doctorMarkers.map((doctor) => (
              <View
                key={doctor.id}
                style={[
                  styles.doctorMarker,
                  {
                    left: doctor.x,
                    top: doctor.y,
                  },
                ]}
              >
                <DoctorMarker />
              </View>
            ))}

            {/* Search */}
            <View style={styles.searchContainer}>
              <LocationSearchBar
                value={search}
                onChangeText={setSearch}
              />
            </View>

            {/* Medical center cards */}
            <View style={styles.cardsContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardsContent}
              >
                {nearbyMedicalCenters.map((center) => (
                  <MedicalCenterCard
                    key={center.name}
                    center={center}
                  />
                ))}
              </ScrollView>
            </View>
          </ImageBackground>
        </View>

        {/* Bottom navigation */}
        <View style={styles.bottomNavigation}>
          <NavItem
            icon="home-outline"
            label="Home"
            active={false}
            onPress={() => router.replace('/home')}
          />

          <NavItem
            icon="location-outline"
            label="Location"
            active={true}
            onPress={() => {}}
          />

          <NavItem
            icon="calendar-outline"
            label="Appointment"
            active={false}
            onPress={() => {}}
          />

          <NavItem
            icon="person-outline"
            label="Profile"
            active={false}
            onPress={() => {}}
          />

          <Pressable
            style={styles.locationButton}
            onPress={() => {}}
          >
            <Ionicons
              name="locate-outline"
              size={24}
              color={Colors.notificationIcon}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}