import { Rajdhani, Rubik } from 'next/font/google';

import type { Metadata } from 'next';

import StoreProvider from '@/lib/StoreProvider';

import { PROFILE } from '@/constants/profile';
import { SEO, SITE_URL } from '@/constants/seo';

import './globals.css';

// Headings and UI text.
const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Body copy (`font-rubik`).
const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Absolute URLs for Open Graph images and canonical links are built from this.
  metadataBase: new URL(SITE_URL),
  // A page sets `title: 'Settings'` and gets "Settings | <full name>". Public pages set their own
  // title, canonical URL and preview fields with `pageMetadata` (`utils/page-metadata.ts`).
  title: { default: SEO.title, template: `%s | ${PROFILE.fullName}` },
  description: PROFILE.intro,
  applicationName: PROFILE.fullName,
  authors: [{ name: PROFILE.fullName, url: SITE_URL }],
  creator: PROFILE.fullName,
  twitter: { card: 'summary_large_image', creator: SEO.twitterHandle },
  verification: { google: SEO.googleSiteVerification },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${rubik.variable} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
