import { PROFILE, SOCIALS } from '@/constants/profile';
import { SEO, SITE_URL } from '@/constants/seo';

/**
 * Schema.org data for the home page: a profile page about a person, and the site itself. It tells
 * Google whose site this is, so a search for the name can show it, and links the social profiles to it.
 */
export const homeStructuredData = () => {
  const url = new URL('/', SITE_URL).href;
  const personId = `${url}#person`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: PROFILE.fullName,
        alternateName: SEO.alternateNames,
        url,
        image: new URL(SEO.image, SITE_URL).href,
        jobTitle: SEO.jobTitle,
        hasOccupation: PROFILE.roles.map(name => ({ '@type': 'Occupation', name })),
        description: PROFILE.intro,
        worksFor: { '@type': 'Organization', name: SEO.worksFor },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SEO.location.locality,
          addressCountry: SEO.location.country,
        },
        alumniOf: { '@type': 'CollegeOrUniversity', name: SEO.alumniOf },
        knowsAbout: SEO.knowsAbout,
        sameAs: SOCIALS.map(({ href }) => href),
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        name: SEO.title,
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: PROFILE.fullName,
        alternateName: SEO.alternateNames,
        author: { '@id': personId },
      },
    ],
  };
};
