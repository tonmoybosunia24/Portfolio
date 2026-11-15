import Image from 'next/image';

import { type Project, PROJECTS, type ProjectScreen } from '@/constants/profile';

import HexPattern from './HexPattern';
import { ArrowUpRightIcon } from './icons';
import SectionHeading from './SectionHeading';

/** A rough app screen drawn in code, shown until a real screenshot is added. */
function SketchedScreen() {
  return (
    <div className="flex h-full flex-col gap-[6%] bg-[#101014] p-[9%] pt-[16%]">
      <div className="flex items-center justify-between">
        <div className="h-[0.35rem] w-2/5 rounded-full bg-white/50" />
        <div className="size-3 rounded-full bg-pink-primary/80" />
      </div>
      <div className="aspect-16/10 rounded-lg bg-linear-to-br from-pink-primary/70 to-[#6d0e2c]" />
      <div className="grid grid-cols-2 gap-[8%]">
        <div className="aspect-square rounded-md bg-white/10" />
        <div className="aspect-square rounded-md bg-white/10" />
      </div>
      {[0, 1, 2].map(row => (
        <div key={row} className="flex items-center gap-[8%]">
          <div className="size-4 shrink-0 rounded bg-white/15" />
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-[0.3rem] w-4/5 rounded-full bg-white/30" />
            <div className="h-[0.3rem] w-1/2 rounded-full bg-white/15" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * A phone frame shaped like a real phone (390×844) with a screenshot, or a sketched screen when there is
 * none. A taller screenshot is shrunk to fit whole, with its edge color filling the strips beside it.
 */
function Phone({ screen, alt, className }: { screen?: ProjectScreen; alt: string; className: string }) {
  return (
    <div
      className={`absolute aspect-390/844 overflow-hidden rounded-[18px] border-[3px] border-[#2a2a2e] bg-black shadow-2xl shadow-black/60 transition-transform duration-500 md:rounded-[22px] md:border-4 ${className}`}
      style={screen?.background ? { backgroundColor: screen.background } : undefined}
    >
      {screen ? (
        // Screenshots already show the status bar and camera, so they get no notch of their own.
        <Image
          src={screen.src}
          alt={alt}
          fill
          sizes="(min-width: 992px) 200px, 30vw"
          className="object-contain object-top"
        />
      ) : (
        <>
          <SketchedScreen />
          {/* The camera notch. */}
          <div className="absolute top-[2.5%] left-1/2 h-[2.2%] w-1/4 -translate-x-1/2 rounded-full bg-black" />
        </>
      )}
    </div>
  );
}

/**
 * The card preview: the tagline on the left and two phones on the right, on a plain dark background (the
 * site's card color) with the hero's hexagon lines and a faint pink light along the bottom. Everything
 * is sized from the preview width (`cqw`), so it keeps the same layout at any card size.
 */
function Preview({ project }: { project: Project }) {
  const [first, second] = project.screens;

  return (
    <div className="@container relative aspect-4/3 overflow-hidden rounded-lg bg-dark bg-[radial-gradient(ellipse_70%_45%_at_60%_100%,rgb(255_1_79/0.14),transparent)]">
      {/* The hero's hexagon lines, faint, fading out from the top-left. */}
      <HexPattern
        scale={0.9}
        className="absolute inset-0 h-full w-full text-pink-primary opacity-25 mask-[radial-gradient(ellipse_75%_80%_at_20%_25%,black,transparent)]"
      />
      <p className="absolute top-[14%] left-[7%] w-[36%] text-[4.8cqw] leading-[1.15] font-bold">
        {project.tagline[0]} <span className="text-pink-primary">{project.tagline[1]}</span>
      </p>
      <Phone
        screen={second}
        alt={`${project.title}, second screen`}
        className="right-[30%] bottom-[8%] w-[26%] group-hover:-translate-y-2"
      />
      <Phone
        screen={first}
        alt={`${project.title}, main screen`}
        className="right-[6%] bottom-[4%] w-[30%] group-hover:-translate-y-4"
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
              <div className="rounded-xl border border-white/10 bg-[#0b0b0d] p-3 transition-colors duration-300 group-hover:border-pink-primary/40 md:p-4 xl:p-5">
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
                        className="after:absolute after:inset-0 after:rounded-xl"
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
                  className="flex size-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-background transition-colors duration-300 group-hover:border-pink-primary group-hover:bg-pink-primary md:size-12"
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
