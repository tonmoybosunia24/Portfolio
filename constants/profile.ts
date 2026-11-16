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
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Blogs', href: '/#blogs' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
] as const;

/** Line icons in `views/home/icons.tsx`, used by the service and achievement cards. */
export type ServiceIcon = 'phone' | 'layers' | 'network' | 'flame' | 'gauge' | 'rocket' | 'check' | 'star' | 'users';

/** The "Services" section: a heading and six numbered cards. */
export const SERVICES = {
  label: 'What I Do',
  title: 'My Services',
  description:
    'From the first sketch to the store release, I build fast, reliable mobile apps tailored to your users and business goals.',
  items: [
    {
      title: 'Cross-Platform Apps',
      text: 'Flutter and Dart apps for Android and iOS from one codebase, with clean state management in Provider or GetX.',
      icon: 'phone',
    },
    {
      title: 'Native Android',
      text: 'Kotlin and Jetpack Compose apps with Room and Android SDK libraries, plus migrating legacy XML layouts to Compose.',
      icon: 'layers',
    },
    {
      title: 'API & Real-Time Integration',
      text: 'RESTful APIs, WebSockets and native plugins that connect apps to backend services, including Node.js.',
      icon: 'network',
    },
    {
      title: 'Firebase Backends',
      text: 'Firebase Auth, Firestore and Realtime Database for sign-in, sync and live data.',
      icon: 'flame',
    },
    {
      title: 'Performance Optimization',
      text: 'Finding bottlenecks, cutting memory use and load times, and fixing device-specific issues on iOS and Android.',
      icon: 'gauge',
    },
    {
      title: 'Store Publishing',
      text: 'The full release lifecycle, from testing and builds to publishing on Google Play and the App Store.',
      icon: 'rocket',
    },
  ] satisfies { title: string; text: string; icon: ServiceIcon }[],
} as const;

/** The "Achievements" section: years of experience and four numbers. TODO: check the numbers. */
export const ACHIEVEMENTS = {
  label: 'Achievements',
  title: 'My Journey In Numbers',
  description:
    'A quick look at the apps shipped, projects completed and clients helped along my journey as a mobile app developer.',
  experience: {
    years: 2,
    text: 'Two years of building cross-platform apps with Flutter, working with clients from the first idea to the store release.',
  },
  stats: [
    { count: 10, label: 'Projects Done', icon: 'check' },
    { count: 5, label: 'Apps Published', icon: 'rocket' },
    { count: 7, label: 'Client Reviews', icon: 'star' },
    { count: 8, label: 'Happy Clients', icon: 'users' },
  ] satisfies { count: number; label: string; icon: ServiceIcon }[],
} as const;

/** Icons in `views/home/SkillIcon.tsx`: brand logos, then line icons for skills without one. */
export type SkillIconName =
  | 'flutter'
  | 'dart'
  | 'android'
  | 'apple'
  | 'materialdesign'
  | 'firebase'
  | 'sqlite'
  | 'googlemaps'
  | 'json'
  | 'getx'
  | 'git'
  | 'github'
  | 'postman'
  | 'androidstudio'
  | 'xcode'
  | 'figma'
  | 'googleplay'
  | 'appstore'
  | 'devices'
  | 'motion'
  | 'layers'
  | 'state'
  | 'api'
  | 'code';

/**
 * The "Skills" section: three rows that scroll sideways, the middle one the other way. Each icon is drawn
 * in its brand color, lightened where the real one is too dark to see; black logos (Apple, GitHub) use
 * the text color so they show in both themes.
 */
export const SKILLS = {
  label: 'Tech Stack',
  title: 'Tools I Work With',
  description:
    'The frameworks, state management libraries, backend services and developer tools I use every day to craft modern mobile apps.',
  rows: [
    [
      { name: 'Flutter', icon: 'flutter', color: '#47c5fb' },
      { name: 'Dart', icon: 'dart', color: '#29b6f6' },
      { name: 'Android', icon: 'android', color: '#3ddc84' },
      { name: 'iOS', icon: 'apple', color: 'var(--foreground)' },
      { name: 'Material Design', icon: 'materialdesign', color: '#b0bec5' },
      { name: 'Responsive UI', icon: 'devices', color: '#22d3ee' },
      { name: 'Animations', icon: 'motion', color: '#f472b6' },
      { name: 'Clean Architecture', icon: 'layers', color: '#a78bfa' },
    ],
    [
      { name: 'Bloc', icon: 'state', color: '#2dd4bf' },
      { name: 'Riverpod', icon: 'state', color: '#38bdf8' },
      { name: 'Provider', icon: 'state', color: '#fb923c' },
      { name: 'GetX', icon: 'getx', color: '#a855f7' },
      { name: 'REST API', icon: 'api', color: '#34d399' },
      { name: 'JSON', icon: 'json', color: '#f5de19' },
      { name: 'Firebase', icon: 'firebase', color: '#ffca28' },
      { name: 'SQLite', icon: 'sqlite', color: '#44a3d6' },
      { name: 'Google Maps', icon: 'googlemaps', color: '#ea4335' },
    ],
    [
      { name: 'Git', icon: 'git', color: '#f05032' },
      { name: 'GitHub', icon: 'github', color: 'var(--foreground)' },
      { name: 'Postman', icon: 'postman', color: '#ff6c37' },
      { name: 'Android Studio', icon: 'androidstudio', color: '#3ddc84' },
      { name: 'VS Code', icon: 'code', color: '#3b9fe8' },
      { name: 'Xcode', icon: 'xcode', color: '#1f8cff' },
      { name: 'Figma', icon: 'figma', color: '#f24e1e' },
      { name: 'Google Play', icon: 'googleplay', color: '#34a853' },
      { name: 'App Store', icon: 'appstore', color: '#0d96f6' },
    ],
  ] satisfies { name: string; icon: SkillIconName; color: string }[][],
} as const;

/** The "Expertise" section: two groups of skills with a level bar each. TODO: check the percentages. */
export const EXPERTISE = {
  label: 'Code Expertise',
  title: 'My Skill Levels',
  description:
    'A breakdown of my core technical strengths across cross-platform app development, backend integration and store publishing.',
  groups: [
    {
      title: 'App Development',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
        { name: 'State Management (Bloc, Riverpod)', level: 80 },
        { name: 'UI & Animations', level: 85 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'REST API', level: 85 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'Play Store & App Store', level: 75 },
      ],
    },
  ],
} as const;

/** The "Education" section below Core Expertise: four academic milestone cards in a two-column grid. */
export const EDUCATION = {
  label: 'Education & Experience',
  title: 'Empowering Creativity Through',
  description:
    'A brief overview of my academic background and professional journey, highlighting the key milestones that have shaped my skills and expertise.',
  groupTitle: 'Education',
  items: [
    {
      degree: "Bachelor's Degree (ENGLISH)",
      period: '2021 - Present',
      institution: 'Kader Boksha Memorial College, Dinajpur',
      text: "Pursuing a Bachelor's in English while learning web development and building projects.",
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2018-2020',
      institution: 'Holy Land College, Dinajpur',
      text: 'Completed HSC in Science, developing strong analytical and problem-solving skills.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      period: '2017-2018',
      institution: 'Tepriganj Adarsha B.L High Scrool, Panchagarh',
      text: 'Achieved SSC in Science, building a solid foundation in core subjects and discipline.',
    },
    {
      degree: 'Junior School Certificate (JSC)',
      period: '2014-2015',
      institution: 'Tepriganj Adarsha B.L High Scrool, Panchagarh',
      text: 'Completed JSC, developing strong basic academic skills and a passion for learning.',
    },
  ],
} as const;

/**
 * The "Testimonials" section. TODO: these are sample reviews to show the layout. Replace them with real
 * feedback from your clients (with their permission) before the site goes live. The pictures are
 * illustrated avatars (Notionists by Zoish via DiceBear, CC0) in `public/images/testimonials/`.
 */
export const TESTIMONIALS = {
  label: 'Testimonials',
  title: 'What Clients Say',
  description:
    'Honest feedback from founders, product managers and teams I have collaborated with to bring their mobile app ideas to life.',
  items: [
    {
      quote:
        'Tonmoy turned our idea into a polished Flutter app for both Android and iOS. He kept us updated every step of the way and delivered ahead of schedule.',
      name: 'Sarah Mitchell',
      image: '/images/testimonials/sarah.webp',
      role: 'Founder, FitNest',
      rating: 5,
    },
    {
      quote:
        'Our old app was slow and crashed on many devices. After his performance work it loads twice as fast, and our store rating went up within a month.',
      name: 'Rahim Uddin',
      image: '/images/testimonials/rahim.webp',
      role: 'Product Manager, ShopKart',
      rating: 5,
    },
    {
      quote:
        'Clean code, clear communication and a smooth release on Google Play and the App Store. We will definitely work with him again on our next app.',
      name: 'Daniel Brooks',
      image: '/images/testimonials/daniel.webp',
      role: 'CTO, ChatWave',
      rating: 5,
    },
    {
      quote:
        'He rebuilt our Android app in Jetpack Compose and moved the old XML screens over without breaking anything. The new UI feels modern and fast.',
      name: 'Nadia Rahman',
      image: '/images/testimonials/nadia.webp',
      role: 'Co-founder, MediTrack',
      rating: 5,
    },
    {
      quote:
        'Real-time chat with WebSockets and Firebase sync worked perfectly from day one. Great problem solver and always quick to reply.',
      name: 'Kevin Tran',
      image: '/images/testimonials/kevin.webp',
      role: 'Lead Developer, TeamDesk',
      rating: 5,
    },
  ],
} as const;

/**
 * The "Contact" section. The details reuse `SIDEBAR.contacts`. The form has no server yet: sending it
 * opens the visitor's email app with a message to `email`, already filled in.
 */
export const CONTACT = {
  label: 'Contact',
  title: 'Get Ready To Create Great',
  formTitle: 'Get In Touch',
  email: 'mdtonmoybosunia24@gmail.com',
  /** Labels shown above each detail, by its icon. */
  detailLabels: { mail: 'E-mail', location: 'Location', phone: 'Contact' },
  /** The order the details are listed in. */
  detailOrder: ['mail', 'location', 'phone'],
  submit: 'Send Message',
} as const;

/** The footer. Its contact details reuse `SIDEBAR.contacts` and its links point at the home page sections. */
export const FOOTER = {
  /** The headline: a bold part, then a light part. */
  headline: ['Let’s Build', 'Your Next App'],
  emailPlaceholder: 'Your email address',
  linksTitle: 'Quick Links',
  links: [
    { label: 'Services', href: '/#services' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ],
  contactTitle: 'Contact',
  rights: 'All Rights Reserved',
  bottomLinks: [
    { label: 'Terms & Condition', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact Us', href: '/#contact' },
  ],
} as const;
