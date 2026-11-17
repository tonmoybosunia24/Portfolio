/**
 * Content of the portfolio's header and hero. Edit the text here; the layout in `views/home/` picks it up.
 * Everything here is real content; the sections that are still samples say so where they are defined.
 */

export type SocialName = 'github' | 'instagram' | 'linkedin' | 'twitter' | 'facebook';

export const PROFILE = {
  name: 'Tonmoy',
  fullName: 'Md Tonmoy Bosunia',
  role: 'Mobile & Frontend Developer',
  greeting: 'Hello',
  /**
   * Cycled by the typewriter under the name. The first one is what screen readers and no-motion visitors
   * get. Keep each at most 20 characters so it fits on one line.
   */
  roles: ['Flutter Developer', 'Mobile App Developer', 'Frontend Developer'],
  intro:
    'I’m a frontend developer focused on mobile apps. At BlackDevs I build Flutter apps for Android and iOS, and I also create fast, responsive web interfaces with React and Next.js.',
  /** The two words floating over the photo: a large faint one behind, an outlined one in front. */
  titles: ['FLUTTER', 'APP DEVELOPER'],
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

/**
 * Header links, in the order of the home page. Most jump to a home page section; Projects and Blog open
 * their own pages. `section` is the home page section that marks the link as current while it is on
 * screen; on other pages a link without `#` is current when the address starts with its `href`.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/#home', section: 'home' },
  { label: 'Services', href: '/#services', section: 'services' },
  { label: 'Experience', href: '/#education', section: 'education' },
  { label: 'Projects', href: '/work', section: 'projects' },
  { label: 'Blog', href: '/blog', section: 'blogs' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
] as const;

/** Line icons in `views/home/icons.tsx`, used by the service and achievement cards. */
export type ServiceIcon =
  'phone' | 'layers' | 'monitor' | 'pen' | 'network' | 'flame' | 'gauge' | 'rocket' | 'check' | 'star' | 'users';

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
    /** Since joining BlackDevs on 1 November 2025. */
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
  | 'react'
  | 'nextdotjs'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'tailwindcss'
  | 'express'
  | 'supabase'
  | 'blender'
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
    'The frameworks, libraries, backend services and tools I use to build mobile apps and web interfaces, from the first Figma frame to the store release.',
  rows: [
    // Mobile: frameworks, platforms and state management.
    [
      { name: 'Flutter', icon: 'flutter', color: '#47c5fb' },
      { name: 'Dart', icon: 'dart', color: '#29b6f6' },
      { name: 'React Native', icon: 'react', color: '#61dafb' },
      { name: 'Android', icon: 'android', color: '#3ddc84' },
      { name: 'iOS', icon: 'apple', color: 'var(--foreground)' },
      { name: 'GetX', icon: 'getx', color: '#a855f7' },
      { name: 'Bloc', icon: 'state', color: '#2dd4bf' },
      { name: 'Provider', icon: 'state', color: '#fb923c' },
      { name: 'Riverpod', icon: 'state', color: '#38bdf8' },
      { name: 'Material Design', icon: 'materialdesign', color: '#b0bec5' },
      { name: 'Animations', icon: 'motion', color: '#f472b6' },
      { name: 'Clean Architecture', icon: 'layers', color: '#a78bfa' },
    ],
    // Web and backend.
    [
      { name: 'React', icon: 'react', color: '#61dafb' },
      { name: 'Next.js', icon: 'nextdotjs', color: 'var(--foreground)' },
      { name: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
      { name: 'HTML', icon: 'html5', color: '#f06529' },
      { name: 'CSS', icon: 'css3', color: '#42a5f5' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38bdf8' },
      { name: 'Express', icon: 'express', color: 'var(--foreground)' },
      { name: 'Firebase', icon: 'firebase', color: '#ffca28' },
      { name: 'Supabase', icon: 'supabase', color: '#3ecf8e' },
      { name: 'SQLite', icon: 'sqlite', color: '#44a3d6' },
      { name: 'REST API', icon: 'api', color: '#34d399' },
      { name: 'Google Maps', icon: 'googlemaps', color: '#ea4335' },
    ],
    // Tools, design and publishing.
    [
      { name: 'Responsive UI', icon: 'devices', color: '#22d3ee' },
      { name: 'Git', icon: 'git', color: '#f05032' },
      { name: 'GitHub', icon: 'github', color: 'var(--foreground)' },
      { name: 'Postman', icon: 'postman', color: '#ff6c37' },
      { name: 'Android Studio', icon: 'androidstudio', color: '#3ddc84' },
      { name: 'VS Code', icon: 'code', color: '#3b9fe8' },
      { name: 'Xcode', icon: 'xcode', color: '#1f8cff' },
      { name: 'Figma', icon: 'figma', color: '#f24e1e' },
      { name: 'Blender', icon: 'blender', color: '#f5792a' },
      { name: 'Google Play', icon: 'googleplay', color: '#34a853' },
      { name: 'App Store', icon: 'appstore', color: '#0d96f6' },
    ],
  ] satisfies { name: string; icon: SkillIconName; color: string }[][],
} as const;

/**
 * The "Expertise" section: two groups of skills with a level bar each. Levels are an honest self-rating
 * for about a year of professional work: highest for Flutter, the daily tool, lower for what is used less.
 */
export const EXPERTISE = {
  label: 'Code Expertise',
  title: 'My Skill Levels',
  description:
    'How I rate myself across mobile development, where I work every day, and the web and design skills I bring alongside it.',
  groups: [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter & Dart', level: 85 },
        { name: 'State Management (GetX, BLoC, Provider)', level: 80 },
        { name: 'REST API & Google Maps', level: 80 },
        { name: 'Firebase & Supabase', level: 75 },
        { name: 'React Native', level: 65 },
      ],
    },
    {
      title: 'Web & Design',
      skills: [
        { name: 'HTML, CSS & Tailwind CSS', level: 85 },
        { name: 'JavaScript & React', level: 80 },
        { name: 'Next.js', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Blender (3D)', level: 50 },
      ],
    },
  ],
} as const;

/**
 * The "Experience & Education" section below the skill levels: work first, as it matters most for the
 * jobs and freelance work the site is for, then studies. Each group is a heading and its cards.
 */
export const EDUCATION = {
  label: 'Experience & Education',
  title: 'My Journey So Far',
  description:
    'From an internship to a full-time mobile developer role at BlackDevs, alongside my studies, the steps that shaped how I build apps today.',
  groups: [
    {
      title: 'Experience',
      items: [
        {
          title: 'Mobile App Developer',
          period: 'May 2026 - Present',
          place: 'BlackDevs, Rangpur',
          text: 'Building Flutter apps for Android and iOS for real clients, with GetX, BLoC and Provider, REST APIs, Google Maps, Firebase and Supabase, through to the store release.',
        },
        {
          title: 'Web & Mobile Developer Intern',
          period: 'Nov 2025 - Apr 2026',
          place: 'BlackDevs, Rangpur',
          text: 'Spent the first months on the web team building interfaces with React, Next.js and Tailwind CSS, then moved to the mobile team to work on Flutter apps.',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          title: "Bachelor's Degree (English)",
          period: '2021 - 2026',
          place: 'Kader Boksha Memorial College, Dinajpur',
          text: "A bachelor's in English, studied alongside my work as a developer and my own projects.",
        },
        {
          title: 'Higher Secondary Certificate (HSC)',
          period: '2018 - 2020',
          place: 'Holy Land College, Dinajpur',
          text: 'Completed HSC in Science, developing strong analytical and problem-solving skills.',
        },
      ],
    },
  ],
} as const;

/**
 * The "Testimonials" section. Hidden for now (`visible: false`): the reviews below are samples that show
 * the layout. Replace them with real feedback from clients (with their permission), then set `visible`
 * to true. The pictures are illustrated avatars (Notionists by Zoish via DiceBear, CC0) in
 * `public/images/testimonials/`.
 */
export const TESTIMONIALS = {
  visible: false,
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
 * The "Contact" section. The details reuse `SIDEBAR.contacts`. Sending the form emails the message to the site owner (`app/actions.ts`); `email` is shown when sending fails.
 */
export const CONTACT = {
  label: 'Contact',
  title: 'Have a Project in Mind?',
  text: 'I am open to full-time roles and freelance projects. Tell me about your app or website, and I will get back to you soon.',
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
    // In the order the sections appear on the home page, plus the blog.
    { label: 'Services', href: '/#services' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#education' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  contactTitle: 'Contact',
  rights: 'All Rights Reserved',
  /**
   * Profiles beside the copyright, each with its icon, taken from `SOCIALS`. Terms and privacy pages are
   * left out: a portfolio without accounts needs neither.
   */
  bottomSocials: ['github', 'linkedin'] as readonly SocialName[],
} as const;
