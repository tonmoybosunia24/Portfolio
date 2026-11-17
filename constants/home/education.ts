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
