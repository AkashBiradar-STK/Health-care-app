import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import { Colors } from '@/constants/theme';

type MedicalCenter = {
  name: string;
  address: string;
  rating: string;
  reviews: string;
  distance: string;
  time: string;
  type: string;
  image?: any;
};

export default function MedicalCenterCard({
  center,
}: {
  center: MedicalCenter;
}) {
  return (
    <Pressable style={styles.centerCard}>
      {/* Medical Center Image */}
      <View style={styles.centerImagePlaceholder}>
        {center.image ? (
          <Image
            source={center.image}
            style={styles.centerImage}
            resizeMode="cover"
          />
        ) : (
          <Ionicons
            name="medical"
            size={48}
            color={Colors.white}
          />
        )}

        <Pressable style={styles.favoriteButton}>
          <Ionicons
            name="heart-outline"
            size={15}
            color={Colors.white}
          />
        </Pressable>
      </View>

      <View style={styles.centerContent}>
        <Text
          style={styles.centerName}
          numberOfLines={1}
        >
          {center.name}
        </Text>

        <View style={styles.addressRow}>
          <Ionicons
            name="location-outline"
            size={14}
            color={Colors.homeSecondaryText}
          />

          <Text
            style={styles.addressText}
            numberOfLines={1}
          >
            {center.address}
          </Text>
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            {center.rating}
          </Text>

          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name="star"
                size={10}
                color={Colors.ratingStar}
              />
            ))}
          </View>

          <Text style={styles.reviews}>
            ({center.reviews})
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.centerDetails}>
          <View style={styles.detailItem}>
            <Ionicons
              name="navigate"
              size={16}
              color={Colors.navigationInactive}
            />

            <Text style={styles.detailText}>
              {center.distance}/{center.time}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Ionicons
              name="business"
              size={16}
              color={Colors.navigationInactive}
            />

            <Text style={styles.detailText}>
              {center.type}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  centerCard: {
    width: 232,
    height: 252,
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },

  centerImagePlaceholder: {
    width: 232,
    height: 121,
    backgroundColor: Colors.cardImagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  centerImage: {
    width: '100%',
    height: '100%',
  },

  favoriteButton: {
    position: 'absolute',
    width: 27,
    height: 25,
    right: 8,
    top: 8,
    borderRadius: 15,
    backgroundColor: Colors.favoriteOverlay,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerContent: {
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },

  centerName: {
    width: 208,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    color: Colors.notificationIcon,
    marginBottom: 8,
  },

  addressRow: {
    width: 208,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  addressText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: Colors.homeSecondaryText,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },

  rating: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    color: Colors.homeSecondaryText,
  },

  stars: {
    flexDirection: 'row',
    gap: 2,
  },

  reviews: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.homeSecondaryText,
  },

  separator: {
    width: 208,
    height: 1,
    backgroundColor: Colors.cardBorder,
    marginVertical: 8,
  },

  centerDetails: {
    width: 208,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  detailText: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.homeSecondaryText,
  },
});