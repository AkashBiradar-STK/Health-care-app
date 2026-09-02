import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Image } from 'react-native';

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

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Location + Notification */}
        <View style={styles.locationRow}>
          <View>
            <Text style={styles.locationLabel}>
              Location
            </Text>

            <Pressable style={styles.locationValue}>
              <Ionicons
                name="location"
                size={18}
                color={Colors.primary}
              />

              <Text style={styles.locationText}>
                Seattle, USA
              </Text>

              <Ionicons
                name="chevron-down"
                size={14}
                color={Colors.homeChevron}
              />
            </Pressable>
          </View>

          <Pressable style={styles.notificationButton}>
            <Ionicons
              name="notifications"
              size={21}
              color={Colors.notificationIcon}
            />

            <View style={styles.notificationBadge} />
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

          <Pressable>
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

          <Pressable>
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
          active={activeNav === 'location'}
          onPress={() => setActiveNav('location')}
        />

        <NavItem
          icon="calendar-outline"
          label="Appointment"
          active={activeNav === 'appointment'}
          onPress={() => setActiveNav('appointment')}
        />

        <NavItem
          icon="person-outline"
          label="Profile"
          active={activeNav === 'profile'}
          onPress={() => setActiveNav('profile')}
        />
      </View>
    </View>
  );
}