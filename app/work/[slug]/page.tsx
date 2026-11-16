import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import { PROFILE } from '@/constants/profile';
import { findProject, PROJECTS } from '@/constants/projects';
import ProjectDetail from '@/views/work/detail';

/** One page per project, built ahead of time. Any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const project = findProject((await params).slug);

  return project ? { title: { absolute: `${project.title} - ${PROFILE.fullName}` }, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<'/work/[slug]'>) {
  const project = findProject((await params).slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
