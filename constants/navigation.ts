import type { SocialName } from '@/types';

/**
 * Header links, in the order of the home page. Most jump to a home page section; Projects and Blog open
 * their own pages. `section` is the home page section that marks the link as current while it is on
 * screen; on other pages a link without `#` is current when the address starts with its `href`.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/#home', section: 'home' },
  { label: 'Services', href: '/#services', section: 'services' },
  { label: 'Experience', href: '/#education', section: 'education' },
  { label: 'Projects', href: '/work', section: 'projects' },
  { label: 'Blog', href: '/blog', section: 'blogs' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
] as const;

/** The footer. Its contact details reuse `SIDEBAR.contacts` and its links point at the home page sections. */
export const FOOTER = {
  /** A bold part, then a light part. */
  headline: ['Let’s Build', 'Your Next App'],
  emailPlaceholder: 'Your email address',
  linksTitle: 'Quick Links',
  links: [
    { label: 'Services', href: '/#services' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#education' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  contactTitle: 'Contact',
  rights: 'All Rights Reserved',
  /**
   * Profiles beside the copyright, each with its icon, taken from `SOCIALS`. Terms and privacy pages are
   * left out: a portfolio without accounts needs neither.
   */
  bottomSocials: ['github', 'linkedin'] as readonly SocialName[],
} as const;
