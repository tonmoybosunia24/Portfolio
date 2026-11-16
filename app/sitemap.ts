import type { MetadataRoute } from 'next';

import { BLOG } from '@/constants/blog';
import { PROJECTS } from '@/constants/projects';

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

/**
 * Served at /sitemap.xml. List the public pages search engines should index; for pages from the API
 * (blog posts, products), fetch them here and add one entry each.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL('/', appUrl).href, changeFrequency: 'weekly', priority: 1 },
    { url: new URL('/blog', appUrl).href, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: new URL('/work', appUrl).href, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...BLOG.posts.map(({ slug, date }) => ({
      url: new URL(`/blog/${slug}`, appUrl).href,
      lastModified: date,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...PROJECTS.items.map(({ slug }) => ({
      url: new URL(`/work/${slug}`, appUrl).href,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
