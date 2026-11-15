import { Rajdhani, Rubik } from 'next/font/google';

import type { Metadata } from 'next';

import StoreProvider from '@/lib/StoreProvider';

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

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? 'Next.js Starter Kit';

export const metadata: Metadata = {
  // Absolute URLs for Open Graph images and canonical links are built from this.
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  // A page sets `title: 'Settings'` and gets "Settings | <app name>".
  title: { default: appName, template: `%s | ${appName}` },
  description: `${appName} web application`,
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
