import type { ServiceIcon } from '@/types';

/**
 * The "Achievements" section: years of experience and four numbers. `plus` adds a faint "+" after a number
 * that is a lower bound ("10+ projects"); leave it off for exact counts.
 */
export const ACHIEVEMENTS = {
  label: 'Achievements',
  title: 'My Journey In Numbers',
  description:
    'A quick look at the projects and apps I have worked on since joining BlackDevs as a mobile and frontend developer.',
  experience: {
    years: 1,
    text: 'A year at BlackDevs in Rangpur: six months as an intern on the web and mobile teams, and now a mobile developer building Flutter apps for real clients.',
  },
  stats: [
    { count: 10, plus: true, label: 'Projects Done', icon: 'check' },
    { count: 6, plus: false, label: 'Apps Published', icon: 'rocket' },
    { count: 3, plus: false, label: 'Platforms', icon: 'monitor' },
    { count: 4, plus: false, label: 'Frameworks', icon: 'layers' },
  ] satisfies { count: number; plus: boolean; label: string; icon: ServiceIcon }[],
} as const;
