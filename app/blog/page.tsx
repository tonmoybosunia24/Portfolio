import type { Metadata } from 'next';

import { pageMetadata } from '@/utils/page-metadata';

import { BLOG } from '@/constants/blog';
import { PROFILE } from '@/constants/profile';
import Blog from '@/views/blog';

export const metadata: Metadata = pageMetadata({
  title: `Blog - ${PROFILE.fullName}`,
  description: BLOG.description,
  path: '/blog',
});

export default function BlogPage() {
  return <Blog />;
}
