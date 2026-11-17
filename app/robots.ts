import type { MetadataRoute } from 'next';

/**
 * Served at /robots.txt. Asks every crawler to stay off the whole site, so search engines don't index it.
 * To allow indexing again, allow `/` (keeping `/api/` and the pages behind login disallowed) and list the
 * sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
