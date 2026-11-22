import { PROFILE } from '@/constants/profile';

/**
 * What search engines and link previews learn about the site: its public address and the facts behind
 * the structured data on the home page (`utils/structured-data.ts`).
 */

/**
 * The live site. `NEXT_PUBLIC_APP_URL` overrides it, e.g. `http://localhost:3000` in development; a
 * blank value counts as unset.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL?.trim() || 'https://mdtonmoybosunia.vercel.app';

export const SEO = {
  /**
   * The home page's title and description, which Google shows in its results. "Frontend Developer" is
   * in both, so searches for the name with that role find the site.
   */
  title: `${PROFILE.fullName} - Frontend Developer (Flutter, React, Next.js)`,
  description: `${PROFILE.fullName} (Tonmoy Bosunia) is a frontend developer in Rangpur, Bangladesh, building Flutter apps for Android and iOS and web interfaces with React and Next.js.`,
  /** The job title in the structured data and on the link preview image. */
  jobTitle: 'Frontend Developer',
  /** Other spellings people search for, so they still find this site. */
  alternateNames: [
    'Tonmoy Bosunia',
    'MD Tonmoy Bosunia',
    'Tonmoy',
    'Tonmoy Basunia',
    'Md Tonmoy Basunia',
    'Tanmoy Bosunia',
    'Tanmoy Basunia',
  ],
  /** The portrait used in the structured data, from `public/`. */
  image: '/images/portrait.png',
  worksFor: 'BlackDevs',
  location: { locality: 'Rangpur', country: 'BD' },
  alumniOf: 'Kader Boksha Memorial College',
  knowsAbout: [
    'Frontend Development',
    'Web Development',
    'Flutter',
    'Dart',
    'Mobile App Development',
    'Android',
    'iOS',
    'GetX',
    'BLoC',
    'Firebase',
    'Supabase',
    'REST API',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Figma',
  ],
  /** Proves to Google Search Console that this site is yours (the HTML tag method). */
  googleSiteVerification: 'YIfmCJZxm--vGrYMyQqlGPz-OGcQoO_NHgXk0JGWVgQ',
  /** The X (Twitter) handle shown on link previews. */
  twitterHandle: '@TonmoyBosunia10',
} as const;
