import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  /* Header */
  header: {
    height: 72,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: Colors.primary,
  },

  headerRight: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

newBadge: {
  minWidth: 64,
  height: 32,
  paddingHorizontal: 10,
  borderRadius: 6,
  backgroundColor: '#4B5563',
  alignItems: 'center',
  justifyContent: 'center',
},

newBadgeText: {
  fontSize: 12,
  lineHeight: 16,
  fontWeight: '700',
  color: Colors.white,
},

  /* Notification list */
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  section: {
    marginTop: 14,
  },

  sectionHeader: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: Colors.secondaryText,
    textTransform: 'uppercase',
  },

  markAllText: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '700',
    color: Colors.primary,
  },

  notificationsContainer: {
    marginTop: 4,
  },

  notificationDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 56,
  },
});