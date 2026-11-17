import { cn } from '@/lib/utils';

import { ArrowUpRightIcon } from '@/components/ui/icons';

import type { ProjectLink } from '@/constants/projects';

/** The first link: pink, turning into an outline on hover, like the home page's main button. */
const PRIMARY_LINK =
  'inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 text-white transition-colors duration-300 hover:bg-transparent hover:text-primary md:h-14 md:px-7';

/** The other links: an outline that turns pink on hover. */
const SECONDARY_LINK =
  'inline-flex h-12 items-center gap-2 rounded-full border-2 border-white-overlay px-5 transition-colors duration-300 hover:border-primary hover:text-primary md:h-14 md:px-7';

/**
 * Links to other sites (a store page, a repository) as round buttons with an arrow, each opening in a new
 * tab. The first one is pink. Renders nothing without links.
 */
export default function ExternalLinks({ links, className }: { links: readonly ProjectLink[]; className?: string }) {
  if (links.length === 0) return null;

  return (
    <ul
      className={cn('flex flex-wrap gap-3 font-rubik text-[15px] font-medium tracking-[0.5px] md:text-base', className)}
    >
      {links.map((link, index) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={index === 0 ? PRIMARY_LINK : SECONDARY_LINK}
          >
            {link.label}
            <ArrowUpRightIcon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
