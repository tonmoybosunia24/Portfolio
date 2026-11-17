import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageHeroProps {
  labelledBy: string;
  className?: string;
  children: ReactNode;
}

/**
 * The top of an inner page (a project, the blog, a post), on the same background as the home hero: a
 * faint pink light in the top right corner and the bottom fading into the page below. It leaves room for
 * the header above the content, and the header sticks once it has scrolled away (`data-page-hero`).
 */
export default function PageHero({ labelledBy, className, children }: PageHeroProps) {
  return (
    <section data-page-hero aria-labelledby={labelledBy} className="relative isolate overflow-hidden bg-(--hero-bg)">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_85%_10%,rgb(255_1_79/0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-background"
      />

      <div className={cn('section pt-30 pb-15 md:pb-20 compact:pt-25', className)}>{children}</div>
    </section>
  );
}
