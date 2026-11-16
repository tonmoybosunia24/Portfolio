import ProjectGrid from '@/components/ui/ProjectGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import ViewAllLink from '@/components/ui/ViewAllLink';

import { PROJECTS } from '@/constants/projects';

/**
 * The featured projects as cards (`ProjectGrid`), then a button to every project on `/work`. One card per
 * row on phones, two from 768px.
 */
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="projects-title"
          label={PROJECTS.label}
          title={PROJECTS.title}
          description={PROJECTS.description}
        />

        <ProjectGrid projects={PROJECTS.items.filter(project => project.featured)} className="mt-8 md:mt-12" />

        <ViewAllLink href="/work">View All Projects</ViewAllLink>
      </div>
    </section>
  );
}
