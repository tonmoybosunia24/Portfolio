import Image from 'next/image';

import { formatDate } from '@/utils/format-date';
import { readingMinutes } from '@/utils/reading-time';

import Breadcrumb from '@/components/article/Breadcrumb';
import ExternalLinks from '@/components/article/ExternalLinks';
import PageHero from '@/components/layout/PageHero';
import BlogCover from '@/components/ui/BlogCover';

import { PROFILE } from '@/constants/profile';
import type { BlogPost } from '@/types';

const COVER_SIZES = '(min-width: 1400px) 620px, (min-width: 992px) 46vw, (min-width: 576px) 540px, 100vw';

const TRAIL = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
];

/**
 * The top of a post, laid out like a project page: the breadcrumb, the category, the title, the excerpt,
 * the author with the date and reading time, and any links on the left; the framed cover with its photo
 * credit on the right. Stacked below 992px, cover last. The title is sized to its column (30px beside
 * the cover at 992px, up to 40px from 1400px) so a long one such as the template post's takes two lines.
 */
export default function PostHeroSection({ post }: { post: BlogPost }) {
  return (
    <PageHero labelledBy="post-title" className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div className="animate-intro flex flex-col items-start">
        <Breadcrumb trail={TRAIL} current={post.title} />

        <p className="mt-5 font-rubik text-xs leading-5 font-medium tracking-[3px] text-primary uppercase md:mt-6 md:text-sm">
          {post.category}
        </p>
        <h1
          id="post-title"
          className="mt-2 text-[32px] leading-[1.2] font-bold md:text-[40px] lg:text-3xl xl:text-4xl 2xl:text-[40px]"
        >
          {post.title}
        </h1>
        <p className="mt-3 max-w-140 font-rubik text-base leading-7 text-gray-light md:mt-4 md:text-lg md:leading-8">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-3 md:mt-7">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/8 bg-dark md:size-12">
            <Image src="/images/logo.png" alt="" width={41} height={41} className="size-7" />
          </span>
          <span className="font-rubik">
            <span className="block text-[15px] leading-5 font-medium text-foreground">{PROFILE.fullName}</span>
            <span className="mt-1 flex items-center gap-2 text-sm leading-5 text-gray-light">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true" className="size-1 rounded-full bg-primary" />
              {readingMinutes(post.content)} min read
            </span>
          </span>
        </div>

        <ExternalLinks links={post.links ?? []} className="mt-6 md:mt-7" />
      </div>

      <figure className="animate-intro intro-delay-2">
        <div className="rounded-3xl border-[1.5px] border-foreground/12 bg-black-soft p-3 md:p-4 xl:p-5">
          <BlogCover post={post} sizes={COVER_SIZES} preload />
        </div>
        {post.image.credit && (
          <figcaption className="mt-3 text-right font-rubik text-xs leading-5 text-gray-light">
            Photo by{' '}
            <a
              href={post.image.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-primary hover:underline"
            >
              {post.image.credit.name}
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-primary hover:underline"
            >
              Unsplash
            </a>
          </figcaption>
        )}
      </figure>
    </PageHero>
  );
}
