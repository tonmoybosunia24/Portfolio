import type { Metadata } from 'next';

import { BLOG } from '@/constants/blog';
import { PROFILE } from '@/constants/profile';
import Blog from '@/views/blog';

export const metadata: Metadata = {
  title: { absolute: `Blog - ${PROFILE.fullName}` },
  description: BLOG.description,
};

export default function BlogPage() {
  return <Blog />;
}
