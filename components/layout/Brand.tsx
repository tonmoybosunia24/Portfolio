import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { SOCIAL_ICONS } from '@/components/ui/icons';

import { PROFILE, SOCIALS } from '@/constants/profile';

/** A round icon button: faint overlay, pink on hover. */
export const roundIcon =
  'flex size-10 items-center justify-center rounded-full bg-white-overlay transition-colors duration-300 hover:bg-primary hover:text-white';

/** The logo mark and name, linking to the top of the home page. Used in the header, the side panel and the footer. */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/#home" className="flex h-10.25 items-center gap-1" onClick={onClick}>
      <Image src="/images/logo.png" alt="" width={41} height={41} className="size-9" />
      <span className="text-3xl font-bold">{PROFILE.name}</span>
    </Link>
  );
}

/** The social profile links as round icons, each opening in a new tab. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex gap-2', className)}>
      {SOCIALS.map(social => {
        const Icon = SOCIAL_ICONS[social.name];

        return (
          <li key={social.name}>
            <a
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={roundIcon}
            >
              <Icon className="size-4.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Logo, links and social icons over the hero. The menu button opens a side panel: on phones and tablets
 * it holds the links (from the left), on desktops a short intro and contact details (from the right).
 */
