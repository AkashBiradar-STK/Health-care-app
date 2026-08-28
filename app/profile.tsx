import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CustomButton from '@/components/reusable/CustomButton';
import FormInput from '@/components/reusable/FormInput';
import KeyboardAwareScrollView from '@/components/reusable/KeyboardAwareScrollView';
import { Colors } from '@/constants/theme';

const genderOptions = ['Male', 'Female', 'Others'];

export default function ProfileScreen() {
  // ================= FORM STATES =================

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);

  const [profileImage, setProfileImage] = useState<string | null>(null);

  // ================= DATE PICKER =================

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  // ================= PROFILE IMAGE =================

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

  // ================= VALIDATION =================

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isFormComplete =
    name.trim() &&
    nickname.trim() &&
    email.trim() &&
    dateOfBirth &&
    gender;

  // ================= SAVE =================

  const handleSave = () => {
    if (!isFormComplete) {
      Alert.alert(
        'Incomplete Profile',
        'Please complete your Name, Nickname, Email, Date of Birth and Gender.',
      );
      return;
    }

    if (!isValidEmail(email.trim())) {
      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address.',
      );
      return;
    }

    router.push('/congratulations');
  };

  // ================= DATE FORMAT =================

  const formattedDate = dateOfBirth
    ? dateOfBirth.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

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
              color={Colors.text}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Fill Your Profile
          </Text>
        </View>

        {/* ================= PROFILE IMAGE ================= */}

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
                color={Colors.disabled}
              />
            )}
          </View>

          <Pressable
            style={styles.editButton}
            onPress={handlePickImage}
          >
            <Ionicons
              name="pencil"
              size={17}
              color={Colors.white}
            />
          </Pressable>
        </View>

        <Text style={styles.optionalText}>
          Profile picture is optional
        </Text>

        {/* ================= FORM ================= */}

        <View style={styles.form}>

          <FormInput
            placeholder="Michael Jordan"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <FormInput
            placeholder="Nickname"
            value={nickname}
            onChangeText={setNickname}
          />

          <FormInput
            placeholder="name@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* DATE OF BIRTH */}

          <Pressable
            style={styles.selectionInput}
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons
              name="calendar-outline"
              size={19}
              color={Colors.placeholder}
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

          {showDatePicker && (
            <DateTimePicker
              value={dateOfBirth || new Date(2000, 0, 1)}
              mode="date"
              display="default"
              maximumDate={new Date()}
              onChange={handleDateChange}
            />
          )}

          {/* GENDER */}

          <Pressable
            style={styles.selectionInput}
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
              color={Colors.placeholder}
            />
          </Pressable>

          {/* SAVE */}

          <CustomButton
            title="Save"
            onPress={handleSave}
            disabled={!isFormComplete}
          />

        </View>

        {/* ================= GENDER MODAL ================= */}

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

              {genderOptions.map((option) => (
                <Pressable
                  key={option}
                  style={styles.genderOption}
                  onPress={() => {
                    setGender(option);
                    setShowGenderModal(false);
                  }}
                >
                  <Text style={styles.genderOptionText}>
                    {option}
                  </Text>

                  {gender === option && (
                    <Ionicons
                      name="checkmark"
                      size={22}
                      color={Colors.primary}
                    />
                  )}
                </Pressable>
              ))}
            </Pressable>
          </Pressable>
        </Modal>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ================= CONTAINER =================

  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // ================= HEADER =================

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
    color: Colors.text,
  },

  // ================= PROFILE IMAGE =================

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
    backgroundColor: Colors.profileBackground,
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionalText: {
    textAlign: 'center',
    color: Colors.placeholder,
    fontSize: 11,
    marginTop: -8,
    marginBottom: 12,
  },

  // ================= FORM =================

  form: {
    paddingHorizontal: 24,
    gap: 16,
  },

  selectionInput: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.inputBackground,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  placeholder: {
    color: Colors.placeholder,
    fontSize: 14,
  },

  selectedText: {
    color: Colors.text,
  },

  // ================= GENDER MODAL =================

  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  genderModal: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  genderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },

  genderOption: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorder,
  },

  genderOptionText: {
    fontSize: 15,
    color: Colors.text,
  },
});