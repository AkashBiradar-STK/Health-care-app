import React, { useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  Pressable,
  Text,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import DoctorCard from '@/components/doctors/DoctorCard';
import { doctors } from '@/data/home/doctors/doctorsData';
import { Colors } from '@/constants/theme';
import { styles } from '@/styles/home/doctors/doctorsStyles';

const filters = [
  'All',
  'Cardiology',
  'Dermatology',
  'Neurology',
  'Gynecology',
  'Orthopedic',
  'Pediatrics',
  'Pulmonology',
  'General Physician',
];

export default function AllDoctorsScreen() {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredDoctors = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    const specialtyMap: Record<string, string> = {
      Cardiology: 'Cardiologist',
      Dermatology: 'Dermatologist',
      Neurology: 'Neurologist',
      Gynecology: 'Gynecologist',
      Orthopedic: 'Orthopedic Surgery',
      Pediatrics: 'Pediatrician',
      Pulmonology: 'Pulmonologist',
      'General Physician': 'General Physician',
    };

    return doctors.filter((doctor) => {
      const matchesSearch =
        searchText.length === 0 ||
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.specialty.toLowerCase().includes(searchText) ||
        doctor.location.toLowerCase().includes(searchText);

      const matchesFilter =
        selectedFilter === 'All' ||
        doctor.specialty.toLowerCase() ===
          specialtyMap[selectedFilter]?.toLowerCase();

      return matchesSearch && matchesFilter;
    });
  }, [search, selectedFilter]);

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
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={Colors.primary}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            All Doctors
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Main content */}
        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DoctorCard doctor={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => (
            <View style={{ height: 12 }} />
          )}
          ListHeaderComponent={
            <View>
              {/* Search */}
              <View style={styles.searchContainer}>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={Colors.placeholder}
                />

                <TextInput
                  style={styles.searchInput}
                  value={search}
                  onChangeText={setSearch}
                  placeholder="Search Doctor, Hospital"
                  placeholderTextColor={Colors.placeholder}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="search"
                />
              </View>

              {/* Filters */}
              <FlatList
                horizontal
                data={filters}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filtersContent}
                style={styles.filtersList}
                renderItem={({ item }) => {
                  const active = selectedFilter === item;

                  return (
                    <Pressable
                      onPress={() => setSelectedFilter(item)}
                      style={[
                        styles.filterButton,
                        active && styles.filterButtonActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.filterText,
                          active && styles.filterTextActive,
                        ]}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                }}
              />

              {/* Results / Sort */}
              <View style={styles.resultsRow}>
                <Text style={styles.resultsText}>
                  {filteredDoctors.length} found
                </Text>

                <Pressable style={styles.sortButton}>
                  <Text style={styles.sortText}>
                    Default
                  </Text>

                  <Ionicons
                    name="swap-vertical"
                    size={16}
                    color={Colors.secondaryText}
                  />
                </Pressable>
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No doctors found
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}