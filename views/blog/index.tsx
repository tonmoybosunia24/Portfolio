import Breadcrumb from '@/components/article/Breadcrumb';
import PageHero from '@/components/layout/PageHero';
import SiteShell from '@/components/layout/SiteShell';
import BlogGrid from '@/components/ui/BlogGrid';

import { BLOG, sortedPosts } from '@/constants/blog';

const TRAIL = [{ label: 'Home', href: '/' }];

/** The blog: a short introduction at the top, then every post as a card, newest first. */
export default function Blog() {
  return (
    <SiteShell>
      <PageHero labelledBy="blog-title" className="animate-intro flex flex-col items-start">
        <Breadcrumb trail={TRAIL} current="Blog" />
        <p className="mt-5 font-rubik text-xs leading-5 font-medium tracking-[3px] text-primary uppercase md:mt-6 md:text-sm">
          {BLOG.label}
        </p>
        <h1
          id="blog-title"
          className="mt-2 text-[34px] leading-[1.15] font-bold md:text-5xl xl:text-[56px] compact:text-[44px]"
        >
          {BLOG.title}
        </h1>
        <p className="mt-3 max-w-160 font-rubik text-base leading-7 text-gray-light md:mt-4 md:text-lg md:leading-8">
          {BLOG.description}
        </p>
      </PageHero>

      <section aria-label="All posts" className="pb-15 md:pb-20 lg:pb-30">
        <div className="section">
          <BlogGrid posts={sortedPosts()} heading="h2" />
        </div>
      </section>
    </SiteShell>
  );
}
