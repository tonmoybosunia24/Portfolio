import type { Metadata } from 'next';

import { PROFILE } from '@/constants/profile';
import { PROJECTS } from '@/constants/projects';
import Work from '@/views/work';

export const metadata: Metadata = {
  title: { absolute: `Projects - ${PROFILE.fullName}` },
  description: PROJECTS.page.description,
};

export default function WorkPage() {
  return <Work />;
}
