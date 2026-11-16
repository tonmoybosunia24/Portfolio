'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/constants/profile';

/** How far down the screen a section's top must be to count as the one being read. */
const READING_LINE = 0.35;

/**
 * The header link for where the visitor is: its `href` and its `aria-current` value. On the home page it
 * follows the scroll (`location`): the last link whose section's top has passed the reading line, or the
 * last link at the very bottom. On other pages it is the page link (Projects, Blog) whose `href` starts
 * the address (`page`), or none.
 */
export function useActiveNav(): { href: string; current: 'page' | 'location' } | undefined {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [section, setSection] = useState<string>(NAV_LINKS[0].section);

  useEffect(() => {
    if (!onHome) return;

    const update = () => {
      const line = window.innerHeight * READING_LINE;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string = NAV_LINKS[0].section;

      for (const link of NAV_LINKS) {
        const top = document.getElementById(link.section)?.getBoundingClientRect().top;

        if (top !== undefined && top <= line) current = link.section;
      }

      setSection(atBottom ? (NAV_LINKS.at(-1)?.section ?? current) : current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [onHome]);

  if (onHome) {
    const link = NAV_LINKS.find(item => item.section === section);

    return link && { href: link.href, current: 'location' };
  }

  const page = NAV_LINKS.find(link => !link.href.includes('#') && pathname?.startsWith(link.href));

  return page && { href: page.href, current: 'page' };
}
