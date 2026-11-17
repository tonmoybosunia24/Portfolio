/** The 404 page, shown for unknown addresses and wherever `notFound()` is called. */
export const NOT_FOUND = {
  label: 'Error 404',
  title: 'Page not found',
  text: 'The page you are looking for doesn’t exist, has moved, or the link is broken. Let’s get you back to something useful.',
  home: { label: 'Back to Home', href: '/' },
  projects: { label: 'View Projects', href: '/work' },
  linksTitle: 'Or jump to',
} as const;
