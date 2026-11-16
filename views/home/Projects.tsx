import Image from 'next/image';

import { type Project, PROJECTS } from '@/constants/profile';

import { ArrowUpRightIcon } from './icons';
import SectionHeading from './SectionHeading';

const BANNER_SIZES = '(min-width: 1400px) 600px, (min-width: 768px) 50vw, 100vw';
const BANNER_CLASS = 'object-cover transition-transform duration-500 group-hover:scale-[1.03]';

/**
 * The project's banner, 4:3, zooming in slightly on hover: the dark one in dark mode, the light one in
 * light mode. The hidden one is not downloaded, as lazy images that are not displayed are skipped.
 */
function Preview({ project }: { project: Project }) {
  const alt = `${project.title}: app screens`;

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-2xl border-[1.5px] border-foreground/10 bg-background">
      <Image
        src={project.banner.dark}
        alt={alt}
        fill
        quality={95}
        sizes={BANNER_SIZES}
        className={`${BANNER_CLASS} light:hidden`}
      />
      <Image
        src={project.banner.light}
        alt={alt}
        fill
        quality={95}
        sizes={BANNER_SIZES}
        className={`${BANNER_CLASS} hidden light:block`}
      />
    </div>
  );
}

/**
 * Projects as cards: a framed preview, then the title, the tech and an arrow button. One card per row on
 * phones, two from 768px. When a project has a link, the whole card opens it.
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
          {PROJECTS.items.map((project: Project) => (
            <li key={project.title} className="group relative">
              <div className="rounded-3xl border-[1.5px] border-foreground/12 bg-black-soft p-3 transition-colors duration-300 md:p-4 xl:p-5">
                <Preview project={project} />
              </div>

              {/* Title and tech on the left, a square arrow button on the right, as on the previous site. */}
              <div className="mt-5 flex items-center justify-between gap-4 md:mt-6">
                <div className="min-w-0">
                  <h3 className="text-[22px] leading-7 font-bold md:text-2xl md:leading-8 xl:text-[26px] xl:leading-8.5">
                    {project.href ? (
                      // Stretched over the whole card, so clicking anywhere opens the project.
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:rounded-3xl"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
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
