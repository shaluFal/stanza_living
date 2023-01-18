import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';

// ----------------------------------------------------------------------

// const LICENSES = ['fgf', 'cfvgg', 'fkkf'];

export const _homePlans = [...Array(3)].map((_, index) => ({
  license: ['Tell us what you crave', 'All payments and dues, in one place', 'Be heard. Without saying a word'],
  commons: ['Not only are our meals deliciously homely, they are also customisable. Pick and choose from our varied menu on the app and we will serve it up, piping hot.', 
  'No running around here and there paying all your bills. While paying, tracking and managing your rent and other expenses on your app, the only thing that will move would be your fingertips.', 
  'If you need help with anything, wish to register a complaint, or if you think we can do something better, do tell us through the support and real-time feedback feature on the app.'],
  options: ['JavaScript version', 'TypeScript version', 'Design Resources', 'Commercial applications'],
  icons: [
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_sketch.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_figma.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_js.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_ts.svg',
  ],
}));

export const _pricingPlans = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 0,
    caption: 'forever',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: false },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'current plan',
  },
  {
    subscription: 'starter',
    icon: <PlanStarterIcon />,
    price: 4.99,
    caption: 'saving $24 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'saving $124 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];
