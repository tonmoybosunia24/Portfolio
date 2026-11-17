import { revealDelay } from '@/lib/reveal';

import ProjectCard from '@/components/ui/ProjectCard';

import type { Project } from '@/types';

interface ProjectGridProps {
  projects: readonly Project[];
  heading?: 'h2' | 'h3';
  className?: string;
}

/** Project cards, one per row on phones and two from 768px, each growing slightly into view. */
export default function ProjectGrid({ projects, heading, className = '' }: ProjectGridProps) {
  return (
    <ul className={`grid gap-10 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:gap-x-7.5 ${className}`}>
      {projects.map((project, index) => (
        <li key={project.slug} className={`reveal-zoom ${revealDelay(index, 2)} group relative`}>
          <ProjectCard project={project} heading={heading} />
        </li>
      ))}
    </ul>
  );
}
