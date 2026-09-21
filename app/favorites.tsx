import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import FavoriteDoctorCard from '@/components/favorites/FavoriteDoctorCard';
import FavoriteHospitalCard from '@/components/favorites/FavoriteHospitalCard';

import { doctors } from '@/data/home/doctors/doctorsData';
import { medicalCenters } from '@/data/home/homeData';
import { Colors } from '@/constants/theme';

const tabs = ['Doctors', 'Hospitals'];

export default function FavoritesScreen() {
  const [activeTab, setActiveTab] = useState('Doctors');

  const [selectedFavorite, setSelectedFavorite] =
    useState<any>(null);

  const [favoriteType, setFavoriteType] = useState<
    'doctor' | 'hospital' | null
  >(null);

  const [favoriteDoctors, setFavoriteDoctors] =
    useState(doctors);

  const [favoriteHospitals, setFavoriteHospitals] =
    useState(medicalCenters);

  const openRemovePopup = (
    item: any,
    type: 'doctor' | 'hospital'
  ) => {
    setSelectedFavorite(item);
    setFavoriteType(type);
  };

  const closeRemovePopup = () => {
    setSelectedFavorite(null);
    setFavoriteType(null);
  };

  const removeFavorite = () => {
    if (!selectedFavorite || !favoriteType) {
      return;
    }

    if (favoriteType === 'doctor') {
      setFavoriteDoctors((current) =>
        current.filter(
          (doctor) => doctor.id !== selectedFavorite.id
        )
      );
    }

    if (favoriteType === 'hospital') {
      setFavoriteHospitals((current) =>
        current.filter(
          (hospital) =>
            hospital.name !== selectedFavorite.name
        )
      );
    }

    closeRemovePopup();
  };

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
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={28}
              color={Colors.primary}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Favorites
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tab}
              >
                <Text
                  style={[
                    styles.tabText,
                    active && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Text>

                {active && (
                  <View style={styles.activeIndicator} />
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Doctors */}
        {activeTab === 'Doctors' ? (
          <FlatList
            data={favoriteDoctors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FavoriteDoctorCard
                doctor={item}
                onRemove={() =>
                  openRemovePopup(item, 'doctor')
                }
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: 8 }} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          /* Hospitals */
          <FlatList
            data={favoriteHospitals}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <FavoriteHospitalCard
                center={item}
                onRemove={() =>
                  openRemovePopup(item, 'hospital')
                }
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10 }} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.hospitalListContent
            }
          />
        )}
      </SafeAreaView>

      {/* Remove Favorite Modal */}
      <Modal
        visible={selectedFavorite !== null}
        transparent
        animationType="fade"
        onRequestClose={closeRemovePopup}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.removeModal}>
            <Text style={styles.modalTitle}>
              Remove from Favorites?
            </Text>

            {/* Selected item preview */}
            {selectedFavorite && (
              <View style={styles.previewCard}>
                <View style={styles.previewImageContainer}>
                  <View style={styles.previewImageWrapper}>
                    <FavoritePreviewImage
                      item={selectedFavorite}
                    />
                  </View>
                </View>

                <View style={styles.previewInfo}>
                  <Text
                    style={styles.previewName}
                    numberOfLines={1}
                  >
                    {selectedFavorite.name}
                  </Text>

                  <Text
                    style={styles.previewSpecialty}
                    numberOfLines={1}
                  >
                    {favoriteType === 'doctor'
                      ? selectedFavorite.specialty
                      : selectedFavorite.type}
                  </Text>

                  <View style={styles.previewLocationRow}>
                    <Ionicons
                      name="location-outline"
                      size={11}
                      color={Colors.secondaryText}
                    />

                    <Text
                      style={styles.previewLocation}
                      numberOfLines={1}
                    >
                      {favoriteType === 'doctor'
                        ? selectedFavorite.location
                        : selectedFavorite.address}
                    </Text>
                  </View>

                  {favoriteType === 'doctor' && (
                    <View style={styles.previewRatingRow}>
                      <Ionicons
                        name="star"
                        size={11}
                        color={Colors.ratingStar}
                      />

                      <Text style={styles.previewRating}>
                        {selectedFavorite.rating}
                      </Text>

                      <Text style={styles.previewReviews}>
                        • {selectedFavorite.reviews}
                      </Text>
                    </View>
                  )}
                </View>

                <Ionicons
                  name="heart"
                  size={17}
                  color={Colors.primary}
                  style={styles.previewHeart}
                />
              </View>
            )}

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalCancelButton}
                onPress={closeRemovePopup}
              >
                <Text style={styles.modalCancelText}>
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                style={styles.modalRemoveButton}
                onPress={removeFavorite}
              >
                <Text style={styles.modalRemoveText}>
                  Yes, Remove
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

/* Preview image */
function FavoritePreviewImage({
  item,
}: {
  item: any;
}) {
  return (
    <View style={styles.previewImage}>
      <View style={styles.imageFill}>
        {item.image ? (
          <FavoriteImage source={item.image} />
        ) : null}
      </View>
    </View>
  );
}

function FavoriteImage({ source }: { source: any }) {
  const { Image } = require('react-native');

  return (
    <Image
      source={source}
      style={styles.imageFill}
      resizeMode="cover"
    />
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    height: 70,
    paddingHorizontal: 24,
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

  tabsContainer: {
    height: 42,
    flexDirection: 'row' as const,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  tab: {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    position: 'relative' as const,
  },

  tabText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500' as const,
    color: '#9CA3AF',
  },

  tabTextActive: {
    color: Colors.primary,
    fontWeight: '700' as const,
  },

  activeIndicator: {
    position: 'absolute' as const,
    bottom: -1,
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },

  listContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 30,
  },

  hospitalListContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 30,
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    justifyContent: 'flex-end' as const,
  },

  removeModal: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 30,
  },

  modalTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700' as const,
    color: Colors.primary,
    textAlign: 'center' as const,
    marginBottom: 20,
  },

  previewCard: {
    width: '100%',
    minHeight: 72,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightBorder,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  previewImageContainer: {
    width: 56,
    height: 56,
  },

  previewImageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    overflow: 'hidden' as const,
  },

  previewImage: {
    width: '100%',
    height: '100%',
  },

  imageFill: {
    width: '100%',
    height: '100%',
  },

  previewInfo: {
    flex: 1,
    marginLeft: 8,
    paddingRight: 24,
  },

  previewName: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  previewSpecialty: {
    marginTop: 1,
    fontSize: 10,
    lineHeight: 14,
    color: Colors.secondaryText,
  },

  previewLocationRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginTop: 1,
  },

  previewLocation: {
    flex: 1,
    marginLeft: 3,
    fontSize: 8,
    lineHeight: 12,
    color: Colors.secondaryText,
  },

  previewRatingRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginTop: 1,
  },

  previewRating: {
    marginLeft: 2,
    fontSize: 8,
    color: Colors.secondaryText,
  },

  previewReviews: {
    marginLeft: 3,
    fontSize: 8,
    color: Colors.secondaryText,
  },

  previewHeart: {
    position: 'absolute' as const,
    top: 9,
    right: 8,
  },

  modalButtons: {
    flexDirection: 'row' as const,
    gap: 12,
    marginTop: 20,
  },

  modalCancelButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3E6EA',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  modalCancelText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: Colors.primary,
  },

  modalRemoveButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  modalRemoveText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: Colors.white,
  },
};