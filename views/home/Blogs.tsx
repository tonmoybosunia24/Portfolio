import BlogGrid from '@/components/ui/BlogGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import ViewAllLink from '@/components/ui/ViewAllLink';

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

        <ViewAllLink href="/blog">View All Posts</ViewAllLink>
      </div>
    </section>
  );
}
