/**
 * Content of the portfolio's header and hero. Edit the text here; the layout in `views/home/` picks it up.
 * Values marked TODO are placeholders to replace with your own.
 */

export type SocialName = 'instagram' | 'linkedin' | 'twitter' | 'facebook';

export const PROFILE = {
  name: 'Tonmoy',
  fullName: 'Tonmoy Bosunia',
  role: 'Mobile App Developer',
  greeting: 'Hello',
  /**
   * Cycled by the typewriter under the name. The first one is what screen readers and no-motion visitors
   * get. Keep each at most 20 characters so it fits on one line.
   */
  roles: ['Mobile App Developer', 'Flutter Developer', 'Android & iOS Expert'],
  intro:
    'I’m a passionate Mobile App Developer who builds fast, beautiful, cross-platform apps with Flutter for Android and iOS. I love turning ideas into apps people enjoy using every day.',
  /** The two words floating over the photo: a large faint one behind, an outlined one in front. */
  titles: ['FLUTTER', 'APP DEVELOPER'],
} as const;

/** Shown in the side panel the menu button opens. */
export const SIDEBAR = {
  headline: 'Mobile App Developer building fast, polished apps with Flutter.',
  text: 'I am a mobile developer skilled in Flutter, Dart, REST APIs and clean architecture. I build smooth, reliable apps for Android and iOS, from the first screen to the store release.',
  contacts: [
    { label: 'Call Now', value: '0178025-9656', href: 'tel:+8801780259656', icon: 'phone' },
    {
      label: 'Mail Us',
      value: 'mdtonmoybosunia24@gmail.com',
      href: 'mailto:mdtonmoybosunia24@gmail.com',
      icon: 'mail',
    },
    { label: 'My Address', value: 'Bangladesh', href: null, icon: 'location' }, // TODO: your address
  ],
} as const;

// TODO: your profile URLs.
export const SOCIALS: { name: SocialName; label: string; href: string }[] = [
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { name: 'twitter', label: 'X (Twitter)', href: 'https://x.com/' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
];

/** Header links. They point at the home page sections, added one by one. */
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
