import type { SkillIconName } from '@/types';

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
