export const mockUser = {
  firstName: 'John',
  lastName: 'Smith',
  gender: 'Male',
  dateOfBirth: '08/19/2001',
  language: 'English',
  proficiency: 'Conversational',
  timezone: 'Asia (GMT +8)',
  autoTimezone: true,
  phoneCountry: 'US',
  phoneCode: '+1',
  phone: '(630) 123-9874',
  smsSubscribed: false,
  avatar: 'https://i.pravatar.cc/80?img=11',
  displayName: 'John Smith',
  email: 'john.smith@example.com',
  country: 'Philippines',
  zipCode: '1200',
  city: 'Makati',
  state: 'Metro Manila',
  bookingLink: 'https://calendly.com/johnsmith',
  socialLinks: {
    facebook: 'https://facebook.com/johnsmith',
    linkedin: 'https://linkedin.com/in/johnsmith',
    twitter: 'https://twitter.com/johnsmith',
  },
  hasHelperProfile: false,
  hasGospelWorker: false,
};

export const genderOptions = ['Male', 'Female', 'Prefer not to say'];
export const languageOptions = ['English', 'Tagalog', 'Mandarin', 'Spanish', 'Korean', 'Japanese'];
export const proficiencyOptions = ['Native', 'Fluent', 'Conversational', 'Basic'];
export const timezoneOptions = [
  'Asia (GMT +8)',
  'US Eastern (GMT -5)',
  'US Central (GMT -6)',
  'US Mountain (GMT -7)',
  'US Pacific (GMT -8)',
  'Europe/London (GMT +0)',
  'Europe/Paris (GMT +1)',
];
export const countryOptions = ['Philippines', 'United States', 'Singapore', 'South Korea', 'Japan', 'Australia', 'Canada'];

export const gospelWorkerMockData = {
  organization: 'Tentmakers Network',
  role: 'Church Planter',
  yearsOfExperience: '5',
  denomination: 'Non-denominational',
  fieldOfService: 'Southeast Asia',
  bio: 'Passionate about cross-cultural ministry and community development in underserved areas.',
  skills: ['Teaching', 'Evangelism', 'Discipleship', 'Community Development'],
};
