import type { Metadata } from 'next';

import { pageMetadata } from '@/utils/page-metadata';

import { PROFILE } from '@/constants/profile';
import { PROJECTS } from '@/constants/projects';
import Work from '@/views/work';

export const metadata: Metadata = pageMetadata({
  title: `Projects - ${PROFILE.fullName}`,
  description: PROJECTS.page.description,
  path: '/work',
});

export default function WorkPage() {
  return <Work />;
}
