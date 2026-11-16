import ArticleLayout from '@/components/article/ArticleLayout';
import SiteShell from '@/components/layout/SiteShell';

import type { BlogPost } from '@/constants/blog';

import MorePostsSection from './sections/MorePostsSection';
import PostHeroSection from './sections/PostHeroSection';

/** A blog post: the top with the cover, the article with the "On this page" sidebar, then more posts. */
export default function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <SiteShell>
      <PostHeroSection post={post} />
      <ArticleLayout blocks={post.content} label="Article" />
      <MorePostsSection post={post} />
    </SiteShell>
  );
}
