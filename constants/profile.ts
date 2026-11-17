import type { SocialName } from '@/types';

/**
 * Who the site is about and how to reach them: the name and hero text, the side panel and the social
 * profiles. Used across the site; the home page sections have their own files in `constants/home/`.
 */
export const PROFILE = {
  name: 'Tonmoy',
  fullName: 'Md Tonmoy Bosunia',
  role: 'Mobile & Frontend Developer',
  greeting: 'Hello',
  roles: ['Flutter Developer', 'Mobile App Developer', 'Frontend Developer'],
  intro:
    'I’m a frontend developer focused on mobile apps. At BlackDevs I build Flutter apps for Android and iOS, and I also create fast, responsive web interfaces with React and Next.js.',
  titles: ['Web Developer', 'APP DEVELOPER'],
} as const;

/** Shown in the side panel the menu button opens. */
export const SIDEBAR = {
  headline: 'Mobile developer at BlackDevs, building polished Flutter apps.',
  text: 'I build Android and iOS apps with Flutter, using GetX, BLoC and Provider, REST APIs, Firebase and Supabase. On the web I work with React, Next.js and Tailwind CSS, and I design in Figma before I code.',
  contacts: [
    { label: 'Call Now', value: '+880 1780-259656', href: 'tel:+8801780259656', icon: 'phone' },
    {
      label: 'Mail Us',
      value: 'mdtonmoybosunia24@gmail.com',
      href: 'mailto:mdtonmoybosunia24@gmail.com',
      icon: 'mail',
    },
    { label: 'My Address', value: 'Rangpur, Bangladesh', href: null, icon: 'location' },
  ],
} as const;

/**
 * Profile links, shown as round icons in the side panel and the footer. GitHub and LinkedIn first, for
 * recruiters and clients.
 */
export const SOCIALS: { name: SocialName; label: string; href: string }[] = [
  { name: 'github', label: 'GitHub', href: 'https://github.com/tonmoybosunia24' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-tonmoy-bosunia/' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/mdtonmoy.bosunia.3' },
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mdtonmoybosunia24/' },
  { name: 'twitter', label: 'X (Twitter)', href: 'https://x.com/TonmoyBosunia10' },
];
