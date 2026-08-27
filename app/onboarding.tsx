import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

const onboardingData = [
  {
    image: require('@/assets/images/onboarding/doctor-1.png'),
    title: 'Meet Doctors Online',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
  },
  {
    image: require('@/assets/images/onboarding/doctor-2.png'),
    title: 'Connect with Specialists',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
  },
  {
    image: require('@/assets/images/onboarding/doctor-3.png'),
    title: 'Thousands of Online Specialists',
    description:
      'Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs.',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  // HealthPal intro → first onboarding screen
  useEffect(() => {
    if (currentIndex === -1) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

const handleNext = () => {
  if (currentIndex < onboardingData.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    router.replace('/signup');
  }
};

  const handleSkip = () => {
    console.log('Onboarding skipped');
  };

  // =====================================================
  // HEALTHPAL INTRO
  // =====================================================

  if (currentIndex === -1) {
    return (
      <SafeAreaView style={styles.introContainer}>
        <View style={styles.collage}>

          {/* TOP ROW */}
          <View style={styles.row}>
            <View style={[styles.tile, styles.purpleTile]} />

            <View style={styles.tile}>
              <Image
                source={require('@/assets/images/onboarding/doctor-1.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={[styles.tile, styles.pinkTile]} />
          </View>

          {/* MIDDLE ROW */}
          <View style={styles.row}>
            <View style={styles.tile}>
              <Image
                source={require('@/assets/images/onboarding/doctor-2.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.logoTile}>
              <Image
                source={require('@/assets/images/onboarding/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />

            </View>

            <View style={styles.tile}>
              <Image
                source={require('@/assets/images/onboarding/doctor-3.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* BOTTOM ROW */}
          <View style={styles.row}>
            <View style={[styles.tile, styles.peachTile]} />

            <View style={styles.tile}>
              <Image
                source={require('@/assets/images/onboarding/doctor-4.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={[styles.tile, styles.tealTile]} />
          </View>

        </View>
      </SafeAreaView>
    );
  }

  // =====================================================
  // DOCTOR ONBOARDING
  // =====================================================

  const currentSlide = onboardingData[currentIndex];

  return (
    <SafeAreaView style={styles.container}>

      {/* DOCTOR IMAGE */}
      <View style={styles.imageContainer}>
        <Image
          source={currentSlide.image}
          style={styles.doctorImage}
          resizeMode="cover"
        />
      </View>

      {/* CONTENT */}
      <View style={styles.contentContainer}>

        {/* TITLE */}
        <Text style={styles.title}>
          {currentSlide.title}
        </Text>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          {currentSlide.description}
        </Text>

        {/* NEXT BUTTON */}
        <Pressable
          style={styles.nextButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>
            Next
          </Text>
        </Pressable>

        {/* PAGINATION */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* SKIP */}
        <Pressable onPress={handleSkip}>
          <Text style={styles.skipText}>
            Skip
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // =====================================================
  // HEALTHPAL INTRO
  // =====================================================

  introContainer: {
    flex: 1,
    backgroundColor: '#252525',
  },

  collage: {
    flex: 1,
    padding: 10,
    gap: 10,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },

  tile: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#444444',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  purpleTile: {
    backgroundColor: '#AAA1CF',
  },

  pinkTile: {
    backgroundColor: '#D58E96',
  },

  peachTile: {
    backgroundColor: '#D5A99A',
  },

  tealTile: {
    backgroundColor: '#4B9F98',
  },

  logoTile: {
    flex: 1.55,
    borderRadius: 18,
    backgroundColor: '#39246D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 58,
    height: 58,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },

  // =====================================================
  // DOCTOR ONBOARDING
  // =====================================================

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    width: '100%',
    height: 580,
    overflow: 'hidden',
    backgroundColor: '#E8EEEE',
  },

doctorImage: {
  width: '100%',
  height: '100%',
},

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
  },

  title: {
    width: 311,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '700',
    color: '#1C2B39',
    textAlign: 'center',
  },

  description: {
    width: 311,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#858585',
    textAlign: 'center',
  },

  nextButton: {
    width: 311,
    height: 48,
    marginTop: 16,
    borderRadius: 24,
    backgroundColor: '#1C2B39',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 16,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#B7B7B7',
  },

  activeDot: {
    width: 16,
    backgroundColor: '#1C2B39',
  },

  skipText: {
    marginTop: 14,
    fontSize: 12,
    color: '#999999',
  },
});