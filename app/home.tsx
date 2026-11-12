
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import {
  categories,
  medicalCenters,
} from '@/data/home/homeData';
import MedicalCenterCard from '@/components/home/MedicalCenterCard';
import NavItem from '@/components/home/NavItem';
import { styles } from '@/styles/home/homeStyles';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [activeNav, setActiveNav] = useState('home');
  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const name = await AsyncStorage.getItem('profileName');
        const image = await AsyncStorage.getItem('profileImage');

        setProfileName(name || '');
        setProfileImage(image);
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };

    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

{/* Profile + Location + Notification */}
<View style={styles.locationRow}>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: 12,
    }}
  >
    {/* Profile Picture */}
    {profileImage ? (
      <Image
        source={{ uri: profileImage }}
        style={{
width: 44,
height: 44,
borderRadius: 22,
        }}
      />
    ) : (
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: Colors.profileBackground,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name="person"
          size={27}
          color={Colors.secondaryText}
        />
      </View>
    )}

    {/* Name + Location */}
    <View style={{ flex: 1, gap: 5 }}>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 15,
          fontWeight: '700',
          color: Colors.primary,
        }}
      >
        {profileName || 'Your Profile'}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Ionicons
          name="location"
          size={14}
          color={Colors.secondaryText}
        />

        <Text
          style={{
            fontSize: 12,
            color: Colors.secondaryText,
          }}
        >
          Seattle, USA
        </Text>
      </View>
    </View>
  </View>

  {/* Notification Bell */}
  <Pressable
    style={styles.notificationButton}
    onPress={() => router.push('/notifications')}
  >
    <Ionicons
      name="notifications"
      size={21}
      color={Colors.notificationIcon}
    />
  </Pressable>
</View>


        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.placeholder}
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search doctor..."
            placeholderTextColor={Colors.placeholder}
            style={styles.searchInput}
          />
        </View>

        {/* Promotional Banner */}
        <View style={styles.banner}>
          <Image
            source={require('@/assets/images/homepage/lfsdoctors.png')}
            style={styles.bannerBackground}
            resizeMode="cover"
          />

          <View style={styles.bannerOverlay} />

          <Text style={styles.bannerTitle}>
            Looking for Specialist{'\n'}Doctors?
          </Text>

          <Text style={styles.bannerDescription}>
            Find and connect with specialized doctors
            for your healthcare needs.
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>

          <Pressable onPress={() => router.push('/all-doctors')}>
            <Text style={styles.seeAll}>
              See All
            </Text>
          </Pressable>
        </View>

        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <Pressable
              key={category.name}
              style={styles.categoryItem}
              onPress={() =>
                router.push({
                  pathname: '/all-doctors',
                  params: {
                    specialty: category.name,
                  },
                })
              }
            >
              <View
                style={[
                  styles.categoryIcon,
                  {
                    backgroundColor: category.color,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name={category.icon as any}
                  size={30}
                  color={Colors.white}
                />
              </View>

              <Text
                style={styles.categoryName}
                numberOfLines={1}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Medical Centers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Nearby Medical Centers
          </Text>

          <Pressable onPress={() => router.push('/find-location')}>
            <Text style={styles.seeAll}>
              See All
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.centerScroll}
        >
          {medicalCenters.map((center) => (
            <MedicalCenterCard
              key={center.name}
              center={center}
            />
          ))}
        </ScrollView>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home"
          label="Home"
          active={activeNav === 'home'}
          onPress={() => setActiveNav('home')}
        />

        <NavItem
          icon="location-outline"
          label="Location"
          active={false}
          onPress={() => router.push('/find-location')}
        />

        <NavItem
          icon="calendar-outline"
          label="Appointment"
          active={false}
          onPress={() => router.push('/my-bookings')}
        />

        <NavItem
          icon="person-outline"
          label="Profile"
          active={false}
          onPress={() => router.push('/profile-dashboard')}
        />
      </View>
    </View>
  );
}
