import { EXPERTISE } from '@/constants/profile';

import SectionHeading from './SectionHeading';

/**
 * Two groups of skills, each skill with its level as a bar. Sizes follow the Reeni template (32px group
 * titles, 14px labels, a 6px track and pink bar). The name sits on the left and the percentage
 * on the right, so long names never run into it. Bars fill in as they scroll into view where the
 * browser supports scroll-driven animations; elsewhere they are simply full.
 */
export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="expertise-title"

          label={EXPERTISE.label}
          title={EXPERTISE.title}
        />

        <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-7.5">
          {EXPERTISE.groups.map(group => (
            <div key={group.title}>
              <h3 className="mb-6 flex items-center gap-5 text-[28px] leading-10.5 font-bold md:mb-7.5 md:text-[32px]">
                {group.title}
                {/* A short line with a dot at each end, as on the previous site. */}
                <span
                  aria-hidden="true"
                  className="relative h-px w-20 bg-white/70 before:absolute before:-top-0.75 before:-left-0.5 before:size-1.75 before:rounded-full before:bg-white after:absolute after:-top-0.75 after:-right-0.5 after:size-1.75 after:rounded-full after:bg-white"
                />
              </h3>

              <ul className="flex flex-col gap-5 md:gap-6">
                {group.skills.map(({ name, level }) => (
                  <li key={name}>
                    <div className="mb-3 flex justify-between gap-4 font-rubik text-sm leading-4.5 font-medium">
                      <span>{name}</span>
                      <span className="text-gray-light">{level}%</span>
                    </div>
                    <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-dark">
                      <div
                        className="animate-grow-in-view h-full origin-left rounded-full bg-pink-primary"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
