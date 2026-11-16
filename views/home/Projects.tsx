import Link from 'next/link';

import { revealDelay } from '@/lib/reveal';

import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectBanner from '@/components/ui/ProjectBanner';
import SectionHeading from '@/components/ui/SectionHeading';

import { type Project, PROJECTS } from '@/constants/projects';

const BANNER_SIZES = '(min-width: 1400px) 600px, (min-width: 768px) 50vw, 100vw';

/**
 * Projects as cards: a framed preview, then the title, the tech and an arrow button. One card per row on
 * phones, two from 768px. The whole card opens the project's page (`/work/<slug>`).
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

        <ul className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:gap-x-7.5">
          {PROJECTS.items.map((project: Project, index) => (
            <li key={project.slug} className={`reveal-zoom ${revealDelay(index, 2)} group relative`}>
              <div className="rounded-3xl border-[1.5px] border-foreground/12 bg-black-soft p-3 transition-colors duration-300 md:p-4 xl:p-5">
                <ProjectBanner project={project} sizes={BANNER_SIZES} />
              </div>

              {/* Title and tech on the left, a square arrow button on the right, as on the previous site. */}
              <div className="mt-5 flex items-center justify-between gap-4 md:mt-6">
                <div className="min-w-0">
                  <h3 className="text-[22px] leading-7 font-bold md:text-2xl md:leading-8 xl:text-[26px] xl:leading-8.5">
                    {/* Stretched over the whole card, so clicking anywhere opens the project. */}
                    <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 font-rubik text-base leading-6.5 text-gray-light md:text-[17px]">
                    {project.category}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-md border border-foreground/15 bg-background transition-colors duration-300 group-hover:border-pink-primary group-hover:bg-pink-primary group-hover:text-white md:size-12"
                >
                  <ArrowUpRightIcon className="size-4.5" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
