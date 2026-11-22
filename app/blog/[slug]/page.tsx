import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import { pageMetadata } from '@/utils/page-metadata';

import { BLOG, findPost } from '@/constants/blog';
import { PROFILE } from '@/constants/profile';
import BlogPostDetail from '@/views/blog/detail';

/** One page per post, built ahead of time. Any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG.posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const post = findPost((await params).slug);

  return post
    ? pageMetadata({
        title: `${post.title} - ${PROFILE.fullName}`,
        description: post.excerpt,
        path: `/blog/${post.slug}`,
        article: { publishedTime: post.date },
      })
    : {};
}

export default async function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  const post = findPost((await params).slug);

  if (!post) notFound();

  return <BlogPostDetail post={post} />;
}
