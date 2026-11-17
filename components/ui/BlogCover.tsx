import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { BlogPost } from '@/constants/blog';

interface BlogCoverProps {
  post: BlogPost;
  /** The `sizes` of the photo: how wide it is shown at each screen width. */
  sizes: string;
  /** Load it first, for a cover at the top of the page. */
  preload?: boolean;
  className?: string;
}

/**
 * A post's cover image at 4:3, like the project banners, with the category at the top left on a dark
 * glassy pill and a soft shade at the top so the pill stays readable on light photos. It zooms in
 * slightly when a parent `group` is hovered.
 */
export default function BlogCover({ post, sizes, preload = false, className }: BlogCoverProps) {
  return (
    <div className={cn('relative aspect-4/3 overflow-hidden rounded-2xl bg-black-soft', className)}>
      <Image
        src={post.image.src}
        alt={post.image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black/45 to-transparent"
      />
      <span className="absolute top-4 left-4 rounded-full bg-black/45 px-3 py-1 font-rubik text-xs leading-5 font-medium text-white backdrop-blur-sm">
        {post.category}
      </span>
    </div>
  );
}
