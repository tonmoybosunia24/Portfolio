import type { Metadata } from 'next';

import { PROFILE } from '@/constants/profile';
import Home from '@/views/home/Home';

export const metadata: Metadata = {
  title: { absolute: `${PROFILE.fullName} - ${PROFILE.role}` },
  description: `Portfolio of ${PROFILE.fullName} - Mobile app developer building Android and iOS apps with Flutter`,
};

export default function HomePage() {
  return <Home />;
}
