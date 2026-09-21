import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';

import NavItem from '@/components/home/NavItem';
import { Colors } from '@/constants/theme';

const profileOptions = [
  {
    label: 'Edit Profile',
    icon: 'person-outline',
    onPress: () => router.push('/profile'),
  },
{
  label: 'Favorite',
  icon: 'heart-outline',
  onPress: () => router.push('/favorites'),
},
  {
    label: 'Notifications',
    icon: 'notifications-outline',
    onPress: () => {},
  },
  {
    label: 'Settings',
    icon: 'settings-outline',
    onPress: () => {},
  },
  {
    label: 'Help and Support',
    icon: 'help-circle-outline',
    onPress: () => {},
  },
  {
    label: 'Terms and Conditions',
    icon: 'shield-checkmark-outline',
    onPress: () => {},
  },
];

export default function ProfileDashboardScreen() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  // ----------------------------------------
  // PICK PROFILE IMAGE
  // ----------------------------------------

  const handlePickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission Required',
        'Please allow access to your photos to choose a profile picture.',
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // ----------------------------------------
  // LOGOUT
  // ----------------------------------------

  const handleLogout = () => {
    setLogoutModalVisible(false);

    // Firebase authentication logout can be connected here later.
    router.replace('/signin');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* ========================================
              HEADER
          ======================================== */}

          <View style={styles.header}>
            <Text style={styles.title}>Profile</Text>
          </View>

          {/* ========================================
              PROFILE
          ======================================== */}

          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={styles.profileImage}
                />
              ) : (
                <Ionicons
                  name="person"
                  size={82}
                  color={Colors.disabled}
                />
              )}
            </View>

            {/* Edit Photo Button */}

            <Pressable
              style={styles.editPhotoButton}
              onPress={handlePickImage}
            >
              <Ionicons
                name="pencil"
                size={16}
                color={Colors.white}
              />
            </Pressable>

            <Text style={styles.name}>
              Daniel Martinez
            </Text>

            <Text style={styles.phone}>
              +123 856479683
            </Text>
          </View>

          {/* ========================================
              PROFILE OPTIONS
          ======================================== */}

          <View style={styles.optionsContainer}>
            {profileOptions.map((item) => (
              <Pressable
                key={item.label}
                style={styles.option}
                onPress={item.onPress}
              >
                <View style={styles.optionLeft}>
                  <Ionicons
                    name={item.icon as any}
                    size={22}
                    color={Colors.primary}
                  />

                  <Text style={styles.optionText}>
                    {item.label}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={Colors.secondaryText}
                />
              </Pressable>
            ))}

            {/* ========================================
                LOG OUT
            ======================================== */}

            <Pressable
              style={styles.option}
              onPress={() => setLogoutModalVisible(true)}
            >
              <View style={styles.optionLeft}>
                <Ionicons
                  name="log-out-outline"
                  size={22}
                  color={Colors.primary}
                />

                <Text style={styles.optionText}>
                  Log Out
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>

        {/* ========================================
            BOTTOM NAVIGATION
        ======================================== */}

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
            active={false}
            onPress={() => router.push('/find-location')}
          />

          <NavItem
            icon="calendar-outline"
            label="Appointment"
            active={false}
            onPress={() => {}}
          />

          <NavItem
            icon="person"
            label="Profile"
            active={true}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>

      {/* ============================================
          LOGOUT MODAL
      ============================================ */}

      <Modal
        visible={logoutModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.logoutOverlay}>
          <View style={styles.logoutModal}>
            {/* Modal Title */}

            <Text style={styles.logoutTitle}>
              Logout
            </Text>

            {/* Divider */}

            <View style={styles.logoutDivider} />

            {/* Message */}

            <Text style={styles.logoutMessage}>
              Are you sure you want to log out?
            </Text>

            {/* Buttons */}

            <View style={styles.logoutButtons}>
              {/* Cancel */}

              <Pressable
                style={styles.cancelButton}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>
                  Cancel
                </Text>
              </Pressable>

              {/* Yes, Logout */}

              <Pressable
                style={styles.confirmLogoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.confirmLogoutText}>
                  Yes, Logout
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  /* ============================================
     MAIN CONTAINER
  ============================================ */

  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  /* ============================================
     HEADER
  ============================================ */

  header: {
    height: 152,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: Colors.primary,
  },

  /* ============================================
     PROFILE
  ============================================ */

  profileSection: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.profileBackground,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  editPhotoButton: {
    position: 'absolute',
    top: 112,
    right: '25%',
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: Colors.primary,
  },

  phone: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.secondaryText,
  },

  /* ============================================
     PROFILE OPTIONS
  ============================================ */

  optionsContainer: {
    marginHorizontal: 24,
  },

  option: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorder,
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionText: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 21,
    color: Colors.secondaryText,
  },

  /* ============================================
     BOTTOM NAVIGATION
  ============================================ */

  bottomNavigation: {
    height: 76,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    borderTopWidth: 1,
    borderTopColor: Colors.homeNavBorder,
  },
  /* ============================================
     LOGOUT OVERLAY
  ============================================ */

  logoutOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    justifyContent: 'flex-end',
  },

  /* ============================================
     LOGOUT MODAL
  ============================================ */

  logoutModal: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    paddingTop: 42,
    paddingHorizontal: 48,
    paddingBottom: 36,
  },

  logoutTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
  },

  logoutDivider: {
    height: 1,
    backgroundColor: Colors.lightBorder,
    marginTop: 28,
    marginBottom: 30,
  },

  logoutMessage: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: Colors.secondaryText,
    textAlign: 'center',
    marginBottom: 40,
  },

  /* ============================================
     LOGOUT BUTTONS
  ============================================ */

  logoutButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },

  cancelButton: {
    flex: 1,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E3E6EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
    color: Colors.primary,
  },

  confirmLogoutButton: {
    flex: 1,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmLogoutText: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
    color: Colors.white,
  },
})