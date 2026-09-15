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
    paddingTop: 12,
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

  headerSpacer: {
    width: 40,
  },

  /* Main content */
  content: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 30,
  },

  /* Search */
  searchContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.primary,
  },

  /* Filters */
  filtersList: {
    marginBottom: 12,
  },

  filtersContent: {
    gap: 8,
    paddingRight: 24,
  },

  filterButton: {
    height: 37,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterButtonActive: {
    backgroundColor: Colors.primary,
  },

  filterText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    color: Colors.secondaryText,
  },

  filterTextActive: {
    color: Colors.white,
  },

  /* Results */
  resultsRow: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  resultsText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700',
    color: Colors.primary,
  },

  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  sortText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: Colors.secondaryText,
  },

  /* Doctor list */
  doctorCard: {
    width: '100%',
    height: 133,
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#F3F4F6',
    flexDirection: 'row',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 4,
  },

  doctorImage: {
    width: 109,
    height: 109,
    borderRadius: 12,
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
    gap: 2,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  favoriteButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },

  doctorName: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#1F2A37',
  },

  doctorSpecialty: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#4B5563',
  },

  doctorLocation: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#4B5563',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },

  reviewsText: {
    marginLeft: 4,
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },

  /* Empty state */
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 40,
  },

  emptyText: {
    fontSize: 16,
    color: Colors.secondaryText,
  },
});