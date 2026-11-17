import SiteShell from '@/components/layout/SiteShell';

import type { Project } from '@/types';

import ProjectFactsSection from './sections/ProjectFactsSection';
import ProjectHeroSection from './sections/ProjectHeroSection';
import ProjectStorySection from './sections/ProjectStorySection';

/** A project's own page: the top with the banner, the quick facts, then the full write-up. */
export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <SiteShell>
      <ProjectHeroSection project={project} />
      <ProjectFactsSection project={project} />
      <ProjectStorySection project={project} />
    </SiteShell>
  );
}
