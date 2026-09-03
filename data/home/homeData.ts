import { Colors } from '@/constants/theme';

export const categories = [
  {
    name: 'Dentistry',
    icon: 'tooth-outline',
    color: Colors.categoryDentistry,
  },
  {
    name: 'Cardiology',
    icon: 'heart-plus',
    color: Colors.categoryCardiology,
  },
  {
    name: 'Pulmonology',
    icon: 'lungs',
    color: Colors.categoryPulmonology,
  },
  {
    name: 'General',
    icon: 'stethoscope',
    color: Colors.categoryGeneral,
  },
  {
    name: 'Neurology',
    icon: 'brain',
    color: Colors.categoryNeurology,
  },
  {
    name: 'Gastroenterology',
    icon: 'stomach',
    color: Colors.categoryGastroenterology,
  },
  {
    name: 'Laboratory',
    icon: 'flask-outline',
    color: Colors.categoryLaboratory,
  },
  {
    name: 'Vaccination',
    icon: 'needle',
    color: Colors.categoryVaccination,
  },
];

export const medicalCenters = [
  {
    name: 'Sunrise Health Clinic',
    address: '123 Oak Street, CA 98765',
    rating: '5.0',
    reviews: '58 Reviews',
    distance: '2.5 km',
    time: '40min',
    type: 'Clinic',
    image: require('@/assets/images/homepage/medicalimg1.png'),
  },
  {
    name: 'Golden Cardio Center',
    address: '456 Pine Avenue, CA 98765',
    rating: '4.8',
    reviews: '42 Reviews',
    distance: '3.2 km',
    time: '45min',
    type: 'Hospital',
    image: require('@/assets/images/homepage/medicalimg2.png'),
  },
  {
    name: 'Global Health Center',
    address: '456 Pine Avenue, CA 98765',
    rating: '4.8',
    reviews: '42 Reviews',
    distance: '2.2 km',
    time: '35min',
    type: 'Hospital',
    image: require('@/assets/images/homepage/medicalimg3.png'),
  },
];