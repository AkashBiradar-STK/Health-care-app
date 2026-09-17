export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: string;
  reviews: string;
  image: any;
};

export const doctors: Doctor[] = [
  {
    id: 'doctor-1',
    name: 'Dr. Ashwini Mehta',
    specialty: 'Cardiologist',
    location: 'Heart Care Hospital, Mumbai, India',
    rating: '4.9',
    reviews: '2,341 Reviews',
    image: require('@/assets/images/onboarding/doctor-1.png'),
  },
  {
    id: 'doctor-2',
    name: 'Dr. Sarah Wilson',
    specialty: 'Dermatologist',
    location: 'Skin Wellness Clinic, Seattle, USA',
    rating: '4.8',
    reviews: '986 Reviews',
    image: require('@/assets/images/onboarding/doctor-2.png'),
  },
  {
    id: 'doctor-3',
    name: 'Dr. Rohan Sharma',
    specialty: 'Neurologist',
    location: 'NeuroCare Center, Bengaluru, India',
    rating: '4.7',
    reviews: '1,527 Reviews',
    image: require('@/assets/images/onboarding/doctor-3.png'),
  },
  {
    id: 'doctor-4',
    name: 'Dr. Abhi',
    specialty: 'Pediatrician',
    location: 'Little Stars Hospital, New York, USA',
    rating: '5',
    reviews: '3,105 Reviews',
    image: require('@/assets/images/onboarding/doctor-4.png'),
  },
  {
    id: 'doctor-5',
    name: 'Dr. Neha Kapoor',
    specialty: 'Gynecologist',
    location: 'WomenCare Medical Center, Delhi, India',
    rating: '4.9',
    reviews: '1,864 Reviews',
    image: require('@/assets/images/onboarding/doctor-1.png'),
  },
  {
    id: 'doctor-6',
    name: 'Dr. Daniel Brooks',
    specialty: 'Orthopedic Surgery',
    location: 'Advanced Bone Clinic, Chicago, USA',
    rating: '4.8',
    reviews: '742 Reviews',
    image: require('@/assets/images/onboarding/doctor-2.png'),
  },
  {
    id: 'doctor-7',
    name: 'Dr. Aditya Nair',
    specialty: 'Pulmonologist',
    location: 'Respira Health Center, Kochi, India',
    rating: '4.6',
    reviews: '1,293 Reviews',
    image: require('@/assets/images/onboarding/doctor-3.png'),
  },
  {
    id: 'doctor-8',
    name: 'Dr. Michael Anderson',
    specialty: 'General Physician',
    location: 'City Medical Center, Boston, USA',
    rating: '4.9',
    reviews: '2,018 Reviews',
    image: require('@/assets/images/onboarding/doctor-4.png'),
  },
];