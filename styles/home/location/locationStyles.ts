import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  mapContainer: {
    flex: 1,
  },

  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  doctorMarker: {
    position: 'absolute',
    zIndex: 5,
  },

  searchContainer: {
    position: 'absolute',
    top: 75,
    left: 24,
    right: 24,
    zIndex: 10,
  },

  cardsContainer: {
    position: 'absolute',
    left: 24,
    right: 0,
    bottom: 20,
    zIndex: 10,
  },

  cardsContent: {
    paddingRight: 4,
    gap: 16,
  },

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

  locationButton: {
    width: 48,
    height: 48,
    borderRadius: 36,
    backgroundColor: Colors.notificationBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});