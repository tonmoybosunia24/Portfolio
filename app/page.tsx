import type { Metadata } from 'next';

import { pageMetadata } from '@/utils/page-metadata';
import { homeStructuredData } from '@/utils/structured-data';

import JsonLd from '@/components/ui/JsonLd';

import { SEO } from '@/constants/seo';
import Home from '@/views/home';

export const metadata: Metadata = pageMetadata({
  title: SEO.title,
  description: SEO.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData()} />
      <Home />
    </>
  );
}
