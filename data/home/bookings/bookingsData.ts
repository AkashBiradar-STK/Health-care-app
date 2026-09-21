export type Booking = {
  id: string;
  date: string;
  time: string;
  doctorName: string;
  specialty: string;
  location: string;
  image: any;
};

export const upcomingBookings: Booking[] = [
  {
    id: 'upcoming-1',
    date: 'May 22, 2023',
    time: '10.00 AM',
    doctorName: 'Dr. James Robinson',
    specialty: 'Orthopedic Surgery',
    location: 'Elite Ortho Clinic, USA',
    image: require('@/assets/images/onboarding/doctor-3.png'),
  },
  {
    id: 'upcoming-2',
    date: 'June 14, 2023',
    time: '03.00 PM',
    doctorName: 'Dr. Daniel Lee',
    specialty: 'Gastroenterologist',
    location: 'Digestive Institute, USA',
    image: require('@/assets/images/onboarding/doctor-4.png'),
  },
  {
    id: 'upcoming-3',
    date: 'June 21, 2023',
    time: '10.00 AM',
    doctorName: 'Dr. Nathan Harris',
    specialty: 'Cardiologist',
    location: 'Heart Wellness Center, USA',
    image: require('@/assets/images/onboarding/doctor-1.png'),
  },
];

export const completedBookings: Booking[] = [
  {
    id: 'completed-1',
    date: 'March 12, 2023',
    time: '11.00 AM',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Gynecologist',
    location: "Women's Health Clinic",
    image: require('@/assets/images/onboarding/doctor-2.png'),
  },
  {
    id: 'completed-2',
    date: 'March 2, 2023',
    time: '12.00 AM',
    doctorName: 'Dr. Michael Chang',
    specialty: 'Cardiologist',
    location: 'HeartCare Center, USA',
    image: require('@/assets/images/onboarding/doctor-1.png'),
  },
  {
    id: 'completed-3',
    date: 'Feb 2, 2023',
    time: '09.00 AM',
    doctorName: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    location: 'Serenity Pediatrics Clinic',
    image: require('@/assets/images/onboarding/doctor-4.png'),
  },
];

export const canceledBookings: Booking[] = [];