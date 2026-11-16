import BlogGrid from '@/components/ui/BlogGrid';
import SectionHeading from '@/components/ui/SectionHeading';

import { type BlogPost, sortedPosts } from '@/constants/blog';

/** How many other posts follow the article. */
const MORE = 3;

/** "More Articles": the newest other posts as cards, so the reader can keep going. */
export default function MorePostsSection({ post }: { post: BlogPost }) {
  const others = sortedPosts()
    .filter(other => other.slug !== post.slug)
    .slice(0, MORE);

  if (others.length === 0) return null;

  return (
    <section aria-labelledby="more-posts-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading id="more-posts-title" label="Keep Reading" title="More Articles" />
        <BlogGrid posts={others} evenOnTablet className="mt-8 md:mt-12" />
      </div>
    </section>
  );
}
