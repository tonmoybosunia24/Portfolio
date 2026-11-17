import Link from 'next/link';

import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectBanner from '@/components/ui/ProjectBanner';

import type { Project } from '@/constants/projects';

const BANNER_SIZES = '(min-width: 1400px) 600px, (min-width: 768px) 50vw, 100vw';

interface ProjectCardProps {
  project: Project;
  /** The title's heading level: `h3` below a section heading, `h2` directly below the page title. */
  heading?: 'h2' | 'h3';
}

/**
 * A project as a card: a framed banner, then the title, the category and an arrow button. The whole card
 * opens the project's page (`/work/<slug>`). Its parent is the `group relative` list item.
 */
export default function ProjectCard({ project, heading: Heading = 'h3' }: ProjectCardProps) {
  return (
    <>
      <div className="rounded-3xl border-[1.5px] border-foreground/12 bg-black-soft p-3 transition-colors duration-300 md:p-4 xl:p-5">
        <ProjectBanner project={project} sizes={BANNER_SIZES} />
      </div>

      {/* Title and category on the left, a square arrow button on the right, as on the previous site. */}
      <div className="mt-5 flex items-center justify-between gap-4 md:mt-6">
        <div className="min-w-0">
          <Heading className="text-[22px] leading-7 font-bold md:text-2xl md:leading-8 xl:text-[26px] xl:leading-8.5">
            {/* Stretched over the whole card, so clicking anywhere opens the project. */}
            <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
              {project.title}
            </Link>
          </Heading>
          <p className="mt-1.5 font-rubik text-base leading-6.5 text-gray-light md:text-[17px]">{project.category}</p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-md border border-foreground/15 bg-background transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:size-12"
        >
          <ArrowUpRightIcon className="size-4.5" />
        </span>
      </div>
    </>
  );
}
