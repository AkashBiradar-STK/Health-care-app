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

type FavoriteHospitalCardProps = {
  center: {
    name: string;
    address: string;
    rating: string;
    reviews: string;
    distance: string;
    time: string;
    type: string;
    image: any;
  };
  onRemove: () => void;
};

export default function FavoriteHospitalCard({
  center,
  onRemove,
}: FavoriteHospitalCardProps) {
  return (
    <View style={styles.card}>
      {/* Hospital Image */}
      <View style={styles.imageContainer}>
        <Image
          source={center.image}
          style={styles.hospitalImage}
          resizeMode="cover"
        />

        {/* Favorite */}
        <Pressable
          style={styles.favoriteButton}
          onPress={onRemove}
          hitSlop={10}
        >
          <Ionicons
            name="heart"
            size={20}
            color={Colors.white}
          />
        </Pressable>
      </View>

      {/* Hospital Information */}
      <View style={styles.info}>
        <Text
          style={styles.name}
          numberOfLines={1}
        >
          {center.name}
        </Text>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={14}
            color={Colors.secondaryText}
          />

          <Text
            style={styles.address}
            numberOfLines={1}
          >
            {center.address}
          </Text>
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            {center.rating}
          </Text>

          <Ionicons
            name="star"
            size={14}
            color={Colors.ratingStar}
          />

          <Text style={styles.reviews}>
            • {center.reviews}
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.distance}>
            {center.distance}/{center.time}
          </Text>

          <Text style={styles.type}>
            {center.type}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 12,

    overflow: 'hidden',

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

  imageContainer: {
    width: '100%',
    height: 150,
    position: 'relative',
  },

  hospitalImage: {
    width: '100%',
    height: '100%',
  },

  favoriteButton: {
    position: 'absolute',

    top: 12,
    right: 12,

    width: 34,
    height: 34,

    borderRadius: 17,

    backgroundColor: 'rgba(31, 42, 55, 0.35)',

    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
  },

  name: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: Colors.primary,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 8,
  },

  address: {
    flex: 1,
    marginLeft: 5,

    fontSize: 12,
    lineHeight: 17,

    color: Colors.secondaryText,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 7,
  },

  rating: {
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

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 12,
  },

  distance: {
    fontSize: 12,
    lineHeight: 17,
    color: Colors.secondaryText,
  },

  type: {
    fontSize: 12,
    lineHeight: 17,
    color: Colors.secondaryText,
  },
});