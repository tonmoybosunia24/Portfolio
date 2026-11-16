import { revealDelay } from '@/lib/reveal';
import { cn } from '@/lib/utils';

import type { BlogPost } from '@/constants/blog';

import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: readonly BlogPost[];
  /** Hide the third card between 768px and 992px, so a row of three doesn't leave one card alone. */
  evenOnTablet?: boolean;
  className?: string;
}

/**
 * Posts as cards that rise in one after another: one per row on phones, two from 768px and three from
 * 992px. Each card lifts on hover (without the pink border glow of other cards).
 */
export default function BlogGrid({ posts, evenOnTablet = false, className }: BlogGridProps) {
  return (
    <ul className={cn('grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-7.5', className)}>
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className={cn(
            'reveal group rounded-[20px] border border-foreground/6 bg-dark p-4 transition duration-300 hover:-translate-y-1 md:p-5',
            revealDelay(index, 3),
            evenOnTablet && index === 2 && 'md:max-lg:hidden',
          )}
        >
          <BlogCard post={post} />
        </li>
      ))}
    </ul>
  );
}
