import Breadcrumb from '@/components/article/Breadcrumb';
import PageHero from '@/components/layout/PageHero';
import SiteShell from '@/components/layout/SiteShell';

import { PROJECTS } from '@/constants/projects';

import ProjectTabs from './components/ProjectTabs';

const TRAIL = [{ label: 'Home', href: '/' }];

/** Every project: a short introduction at the top, then tabs for all, mobile and web projects and the cards. */
export default function Work() {
  return (
    <SiteShell>
      <PageHero labelledBy="work-title" className="animate-intro flex flex-col items-start">
        <Breadcrumb trail={TRAIL} current="Projects" />
        <p className="mt-5 font-rubik text-xs leading-5 font-medium tracking-[3px] text-primary uppercase md:mt-6 md:text-sm">
          {PROJECTS.page.label}
        </p>
        <h1
          id="work-title"
          className="mt-2 text-[34px] leading-[1.15] font-bold md:text-5xl xl:text-[56px] compact:text-[44px]"
        >
          {PROJECTS.page.title}
        </h1>
        <p className="mt-3 max-w-160 font-rubik text-base leading-7 text-gray-light md:mt-4 md:text-lg md:leading-8">
          {PROJECTS.page.description}
        </p>
      </PageHero>

      <section aria-label="All projects" className="pb-15 md:pb-20 lg:pb-30">
        <div className="section">
          <ProjectTabs />
        </div>
      </section>
    </SiteShell>
  );
}
