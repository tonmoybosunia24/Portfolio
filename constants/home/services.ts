import type { ServiceIcon } from '@/types';

/** The "Services" section: a heading and six numbered cards. */
export const SERVICES = {
  label: 'What I Do',
  title: 'My Services',
  description:
    'From the first design to the store release, I build mobile apps and web interfaces that are fast, clean and easy to use.',
  items: [
    {
      title: 'Mobile App Development',
      text: 'Android and iOS apps from one codebase with Flutter, my main stack, or React Native, using GetX, BLoC or Provider.',
      icon: 'phone',
    },
    {
      title: 'Web Frontend Development',
      text: 'Fast, responsive websites and web apps with React, Next.js and Tailwind CSS that look sharp on every screen.',
      icon: 'monitor',
    },
    {
      title: 'Firebase & Supabase Backends',
      text: 'Sign-in, databases, file storage and push notifications, so your app can launch without a custom server.',
      icon: 'flame',
    },
    {
      title: 'API & Maps Integration',
      text: 'Connecting apps to REST APIs with clear loading, error and offline states, and adding Google Maps features.',
      icon: 'network',
    },
    {
      title: 'UI Design in Figma',
      text: 'Screens and clickable prototypes designed in Figma before any code, so you can see and approve your app early.',
      icon: 'pen',
    },
    {
      title: 'Store Publishing',
      text: 'Release builds, store listings and screenshots, and publishing your app on Google Play and the App Store.',
      icon: 'rocket',
    },
  ] satisfies { title: string; text: string; icon: ServiceIcon }[],
} as const;
