import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import KeyboardAwareScrollView from '@/components/reusable/KeyboardAwareScrollView';
import {
  Alert,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function ProfileScreen() {
  // -----------------------------
  // FORM STATES
  // -----------------------------

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);

  const [profileImage, setProfileImage] = useState<string | null>(null);

  // -----------------------------
  // DATE PICKER
  // -----------------------------

  const handleDateChange = (
    event: any,
    selectedDate?: Date
  ) => {
    // Android closes automatically
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  // -----------------------------
  // PROFILE PHOTO
  // -----------------------------

  const handlePickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission Required',
        'Please allow access to your photos to choose a profile picture.'
      );
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // -----------------------------
  // EMAIL VALIDATION
  // -----------------------------

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // -----------------------------
  // SAVE
  // -----------------------------

  const handleSave = () => {
    // Required fields
    if (
      !name.trim() ||
      !nickname.trim() ||
      !email.trim() ||
      !dateOfBirth ||
      !gender
    ) {
      Alert.alert(
        'Incomplete Profile',
        'Please complete your Name, Nickname, Email, Date of Birth and Gender.'
      );

      return;
    }

    // Email validation
    if (!isValidEmail(email.trim())) {
      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address.'
      );

      return;
    }

    // Everything is valid
    router.push('/congratulations');
  };

  // -----------------------------
  // FORM COMPLETION
  // -----------------------------

  const isFormComplete =
    name.trim().length > 0 &&
    nickname.trim().length > 0 &&
    email.trim().length > 0 &&
    dateOfBirth !== null &&
    gender !== '';

  // -----------------------------
  // FORMAT DATE
  // -----------------------------

  const formattedDate = dateOfBirth
    ? dateOfBirth.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <SafeAreaView style={styles.container}>
         
          <KeyboardAwareScrollView>


      {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color="#374151"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Fill Your Profile
        </Text>
      </View>

      {/* ================= PROFILE PHOTO ================= */}

      <View style={styles.profileSection}>

        <View style={styles.profileCircle}>

          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
          ) : (
            <Ionicons
              name="person"
              size={85}
              color="#E5E7EB"
            />
          )}

        </View>

        {/* Pencil button */}

        <Pressable
          style={styles.editButton}
          onPress={handlePickImage}
        >
          <Ionicons
            name="pencil"
            size={17}
            color="#FFFFFF"
          />
        </Pressable>

      </View>

      {/* Optional text */}

      <Text style={styles.optionalText}>
        Profile picture is optional
      </Text>

      {/* ================= FORM ================= */}

      <View style={styles.form}>

        {/* NAME */}

        <TextInput
          style={styles.input}
          placeholder="Michael Jordan"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        {/* NICKNAME */}

        <TextInput
          style={styles.input}
          placeholder="Nickname"
          placeholderTextColor="#9CA3AF"
          value={nickname}
          onChangeText={setNickname}
        />

        {/* EMAIL */}

        <TextInput
          style={styles.input}
          placeholder="name@example.com"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* ================= DATE OF BIRTH ================= */}

        <Pressable
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons
            name="calendar-outline"
            size={19}
            color="#9CA3AF"
          />

          <Text
            style={[
              styles.placeholder,
              dateOfBirth && styles.selectedText,
            ]}
          >
            {formattedDate || 'Date of Birth'}
          </Text>
        </Pressable>

        {/* DATE PICKER */}

        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth || new Date(2000, 0, 1)}
            mode="date"
            display="default"
            maximumDate={new Date()}
            onChange={handleDateChange}
          />
        )}

        {/* ================= GENDER ================= */}

        <Pressable
          style={styles.input}
          onPress={() => setShowGenderModal(true)}
        >
          <Text
            style={[
              styles.placeholder,
              gender && styles.selectedText,
            ]}
          >
            {gender || 'Gender'}
          </Text>

          <Ionicons
            name="chevron-down"
            size={19}
            color="#9CA3AF"
          />
        </Pressable>

        {/* ================= SAVE ================= */}

        <Pressable
          style={[
            styles.saveButton,
            !isFormComplete && styles.saveButtonDisabled,
          ]}
          disabled={!isFormComplete}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>
            Save
          </Text>
        </Pressable>

      </View>

      {/* ================================================= */}
      {/* GENDER MODAL */}
      {/* ================================================= */}

      <Modal
        visible={showGenderModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowGenderModal(false)}
        >
          <Pressable
            style={styles.genderModal}
            onPress={(event) => event.stopPropagation()}
          >

            <Text style={styles.genderTitle}>
              Select Gender
            </Text>

            {/* MALE */}

            <Pressable
              style={styles.genderOption}
              onPress={() => {
                setGender('Male');
                setShowGenderModal(false);
              }}
            >
              <Text style={styles.genderOptionText}>
                Male
              </Text>

              {gender === 'Male' && (
                <Ionicons
                  name="checkmark"
                  size={22}
                  color="#1C2A3A"
                />
              )}
            </Pressable>

            {/* FEMALE */}

            <Pressable
              style={styles.genderOption}
              onPress={() => {
                setGender('Female');
                setShowGenderModal(false);
              }}
            >
              <Text style={styles.genderOptionText}>
                Female
              </Text>

              {gender === 'Female' && (
                <Ionicons
                  name="checkmark"
                  size={22}
                  color="#1C2A3A"
                />
              )}
            </Pressable>

            {/* OTHERS */}

            <Pressable
              style={styles.genderOption}
              onPress={() => {
                setGender('Others');
                setShowGenderModal(false);
              }}
            >
              <Text style={styles.genderOptionText}>
                Others
              </Text>

              {gender === 'Others' && (
                <Ionicons
                  name="checkmark"
                  size={22}
                  color="#1C2A3A"
                />
              )}
            </Pressable>

          </Pressable>
        </Pressable>
      </Modal>
    </KeyboardAwareScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // ==========================================
  // CONTAINER
  // ==========================================

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ==========================================
  // HEADER
  // ==========================================

  header: {
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
  },

  // ==========================================
  // PROFILE PHOTO
  // ==========================================

  profileSection: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  profileCircle: {
    width: 155,
    height: 155,
    borderRadius: 80,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  editButton: {
    position: 'absolute',
    right: '27%',
    bottom: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1C2A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionalText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: -8,
    marginBottom: 12,
  },

  // ==========================================
  // FORM
  // ==========================================

  form: {
    paddingHorizontal: 24,
    gap: 16,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  placeholder: {
    color: '#9CA3AF',
    fontSize: 14,
  },

  selectedText: {
    color: '#374151',
  },

  // ==========================================
  // SAVE BUTTON
  // ==========================================

  saveButton: {
    width: '100%',
    height: 48,
    borderRadius: 55,
    backgroundColor: '#1C2A3A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  saveButtonDisabled: {
    backgroundColor: '#CBD1D8',
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  // ==========================================
  // GENDER MODAL
  // ==========================================

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  genderModal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  genderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C2A3A',
    marginBottom: 8,
  },

  genderOption: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F2',
  },

  genderOptionText: {
    fontSize: 15,
    color: '#374151',
  },
});