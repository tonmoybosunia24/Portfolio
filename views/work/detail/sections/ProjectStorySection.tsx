import ArticleLayout from '@/components/article/ArticleLayout';

import type { Project } from '@/constants/projects';

/** The project's full write-up, with the "On this page" sidebar. */
export default function ProjectStorySection({ project }: { project: Project }) {
  return <ArticleLayout blocks={project.story} label="About the project" />;
}
