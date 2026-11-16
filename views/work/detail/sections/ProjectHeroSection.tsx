import Breadcrumb from '@/components/article/Breadcrumb';
import ExternalLinks from '@/components/article/ExternalLinks';
import PageHero from '@/components/layout/PageHero';
import ProjectBanner from '@/components/ui/ProjectBanner';

import type { Project } from '@/constants/projects';

const TRAIL = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/work' },
];

const BANNER_SIZES = '(min-width: 1400px) 620px, (min-width: 992px) 46vw, (min-width: 576px) 540px, 100vw';

/**
 * The top of a project page (`PageHero`): the breadcrumb, the category, the title, a short summary, the
 * tech as small chips and the links on the left; the framed banner on the right, both starting at the top.
 * Stacked below 992px, banner last.
 */
export default function ProjectHeroSection({ project }: { project: Project }) {
  return (
    <PageHero labelledBy="project-title" className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div className="animate-intro flex flex-col items-start">
        <Breadcrumb trail={TRAIL} current={project.title} />

        <p className="mt-5 font-rubik text-xs leading-5 font-medium tracking-[3px] text-pink-primary uppercase md:mt-6 md:text-sm">
          {project.category}
        </p>
        <h1
          id="project-title"
          className="mt-2 text-[34px] leading-[1.15] font-bold md:text-5xl xl:text-[56px] compact:text-[44px]"
        >
          {project.title}
        </h1>
        <p className="mt-3 max-w-140 font-rubik text-base leading-7 text-gray-light md:mt-4 md:text-lg md:leading-8">
          {project.summary}
        </p>

        <ul aria-label="Built with" className="mt-5 flex flex-wrap gap-2">
          {project.tech.map(name => (
            <li
              key={name}
              className="flex h-8 items-center rounded-lg border border-foreground/8 bg-dark px-3 font-rubik text-sm font-medium md:h-9"
            >
              {name}
            </li>
          ))}
        </ul>

        <ExternalLinks links={project.links} className="mt-6 md:mt-7" />
      </div>

      <div className="animate-intro intro-delay-2 rounded-3xl border-[1.5px] border-foreground/12 bg-black-soft p-3 md:p-4 xl:p-5">
        <ProjectBanner project={project} sizes={BANNER_SIZES} preload />
      </div>
    </PageHero>
  );
}
