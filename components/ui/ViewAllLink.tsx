import Link from 'next/link';

import { ArrowRightIcon } from '@/components/ui/icons';

interface ViewAllLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * Below a home page section, a link to its full page, such as all posts. It echoes the section heading's
 * label: the text between two thin lines that fade out at the ends, with no box around it. On hover the
 * text turns pink and the round arrow fills with pink; the arrow stays centred in its circle. The text alone
 * sits in the middle: the arrow hangs off its right edge and the right line starts after the arrow.
 */
export default function ViewAllLink({ href, children }: ViewAllLinkProps) {
  return (
    <div className="mt-10 flex items-center gap-4 md:mt-14 md:gap-6">
      <span aria-hidden="true" className="h-px flex-1 bg-linear-to-r from-transparent to-foreground/20" />
      <Link
        href={href}
        className="group relative inline-flex items-center font-rubik text-[15px] font-medium tracking-[0.5px] text-foreground transition-colors duration-300 hover:text-primary md:text-base"
      >
        {children}
        <span className="absolute left-full ml-2.5 flex size-8 items-center justify-center rounded-full border border-foreground/15 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:size-9">
          <ArrowRightIcon className="size-3.5" />
        </span>
      </Link>
      <span
        aria-hidden="true"
        className="ml-10.5 h-px flex-1 bg-linear-to-l from-transparent to-foreground/20 md:ml-11.5"
      />
    </div>
  );
}
