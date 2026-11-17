import { cn } from '@/lib/utils';

import { SOCIAL_ICONS } from '@/components/ui/icons';

import { SOCIALS } from '@/constants/profile';

/** The social profile links as round icons, each opening in a new tab. */
export default function SocialLinks({ className }: { className?: string }) {
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
              className="round-icon size-10"
            >
              <Icon className="size-4.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
