import type { Metadata } from 'next';

import { PROFILE } from '@/constants/profile';

interface PageMetadataOptions {
  /** The whole title, used as is (no template). */
  title: string;
  description: string;
  path: string;
  article?: { publishedTime: string };
}

/**
 * Metadata for a public page: title, description, canonical URL and the Open Graph and X card fields
 * shown when the link is shared. The preview image comes from `app/opengraph-image.tsx`.
 */
export const pageMetadata = ({ title, description, path, article }: PageMetadataOptions): Metadata => ({
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName: PROFILE.fullName,
    locale: 'en_US',
    ...(article
      ? { type: 'article', publishedTime: article.publishedTime, authors: [PROFILE.fullName] }
      : { type: 'website' }),
  },
  twitter: { card: 'summary_large_image', title, description },
});
