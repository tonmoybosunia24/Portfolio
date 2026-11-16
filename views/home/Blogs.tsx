import Link from 'next/link';

import BlogGrid from '@/components/ui/BlogGrid';
import { ArrowRightIcon } from '@/components/ui/icons';
import SectionHeading from '@/components/ui/SectionHeading';

import { BLOG, sortedPosts } from '@/constants/blog';

/** How many of the newest posts the home page shows. */
const LATEST = 3;

/**
 * The newest posts as cards, then a button to all posts. One card per row on phones; two from 768px (the
 * third is hidden there so the rows stay even) and three from 992px.
 */
export default function Blogs() {
  return (
    <section id="blogs" aria-labelledby="blogs-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading id="blogs-title" label={BLOG.label} title={BLOG.title} description={BLOG.description} />

        <BlogGrid posts={sortedPosts().slice(0, LATEST)} evenOnTablet className="mt-8 md:mt-12" />

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/blog"
            className="group inline-flex h-12 items-center gap-2 rounded-full border-2 border-white-overlay px-6 font-rubik text-[15px] font-medium tracking-[0.5px] transition-colors duration-300 hover:border-pink-primary hover:text-pink-primary md:h-14 md:px-7.5 md:text-base"
          >
            View All Posts
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
