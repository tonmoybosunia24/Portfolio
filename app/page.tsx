import type { Metadata } from 'next';

import { PROFILE } from '@/constants/profile';
import Home from '@/views/home/Home';

export const metadata: Metadata = {
  title: { absolute: `${PROFILE.fullName} - ${PROFILE.role}` },
  description: `Portfolio of ${PROFILE.fullName}, a frontend developer building Flutter apps for Android and iOS and web interfaces with React and Next.js.`,
};

export default function HomePage() {
  return <Home />;
}
