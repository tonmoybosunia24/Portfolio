import type { Metadata } from 'next';

import NotFound from '@/views/not-found';

export const metadata: Metadata = {
  title: 'Page not found',
};

/** Shown for unknown URLs and wherever `notFound()` from `next/navigation` is called. */
export default function NotFoundPage() {
  return <NotFound />;
}
