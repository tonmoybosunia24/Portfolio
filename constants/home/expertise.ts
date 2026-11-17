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
