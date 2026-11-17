import Link from 'next/link';

import { formatDate } from '@/utils/format-date';
import { readingMinutes } from '@/utils/reading-time';

import type { BlogPost } from '@/constants/blog';

import BlogCover from './BlogCover';
import { ArrowRightIcon } from './icons';

/**
 * A post as a card: its cover, the date and reading time, the title, a short excerpt and "Read Article".
 * The whole card opens the post. Put it in a `group`, as `BlogGrid` does.
 */
/** How wide a card's cover is shown: one, two or three cards per row. */
const COVER_SIZES = '(min-width: 1400px) 400px, (min-width: 992px) 31vw, (min-width: 768px) 48vw, 100vw';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col">
      <BlogCover post={post} sizes={COVER_SIZES} />

      <p className="mt-5 flex items-center gap-2 font-rubik text-sm leading-5 text-gray-light">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true" className="size-1 rounded-full bg-primary" />
        {readingMinutes(post.content)} min read
      </p>
      <h3 className="mt-2.5 text-[22px] leading-7.5 font-bold transition-colors duration-300 group-hover:text-primary md:text-2xl md:leading-8">
        {/* Stretched over the whole card, so clicking anywhere opens the post. */}
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-[20px]">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 font-rubik text-[15px] leading-6.5 text-gray-light">{post.excerpt}</p>

      <span
        aria-hidden="true"
        className="mt-auto inline-flex items-center gap-2 pt-5 font-rubik text-[15px] font-medium text-primary"
      >
        Read Article
        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
