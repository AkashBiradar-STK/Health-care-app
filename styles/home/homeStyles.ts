import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  scrollContent: {
    paddingTop: 58,
    paddingHorizontal: 24,
  },

  locationRow: {
    width: '100%',
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 14,
  },

  locationLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.homeSecondaryText,
    fontWeight: '400',
    marginBottom: 4,
  },

  locationValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  locationText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.text,
    fontWeight: '600',
  },

  notificationButton: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: Colors.notificationBackground,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  notificationBadge: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.notificationBadge,
    top: 7,
    right: 8,
    borderWidth: 0.5,
    borderColor: Colors.white,
  },

  searchContainer: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.profileBackground,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 14,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    paddingVertical: 0,
  },

  banner: {
    width: '100%',
    height: 163,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },

  bannerBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },

  bannerOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: Colors.homeBannerOverlay,
  },

  bannerTitle: {
    position: 'absolute',
    left: 11,
    top: 27,
    color: Colors.white,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '700',
  },

  bannerDescription: {
    position: 'absolute',
    left: 11,
    top: 93,
    width: 177,
    color: Colors.white,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },

  sectionHeader: {
    width: '100%',
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: Colors.primary,
  },

  seeAll: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: Colors.homeSecondaryText,
  },

  categoryGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    columnGap: 28,
    rowGap: 16,
    marginBottom: 24,
  },

  categoryItem: {
    width: 62,
    alignItems: 'center',
  },

  categoryIcon: {
    width: 62,
    height: 62,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  categoryName: {
    width: 62,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.notificationIcon,
  },

  centerScroll: {
    gap: 12,
    paddingBottom: 10,
  },

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

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: Colors.homeNavBorder,
  },

  navItem: {
    width: 48,
    height: 48,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navItemActive: {
    backgroundColor: Colors.profileBackground,
  },

  navLabel: {
    display: 'none',
  },
});