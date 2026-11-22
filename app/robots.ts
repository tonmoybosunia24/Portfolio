import type { MetadataRoute } from 'next';

import { LOGIN_ROUTE, PROTECTED_ROUTES } from '@/constants/routes';
import { SITE_URL } from '@/constants/seo';

/**
 * Served at /robots.txt. Lets search engines index the public pages, keeps them off the API and the
 * pages behind login, and points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', LOGIN_ROUTE, ...PROTECTED_ROUTES],
    },
    sitemap: new URL('/sitemap.xml', SITE_URL).href,
  };
}
