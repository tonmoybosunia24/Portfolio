import SectionHeading from '@/components/ui/SectionHeading';

import { EXPERTISE } from '@/constants/profile';

/**
 * Two groups of skills, each skill with its level as a bar. Sizes follow the Reeni template (32px group
 * titles, 14px labels, a 6px track and pink bar). The name sits on the left and the percentage
 * on the right, so long names never run into it. Bars fill in one after another when they come on
 * screen (`reveal-grow` on the track, which is watched instead of the bar, as the hidden bar has no width
 * and phones never see it come into view); without JavaScript or with reduced motion they are simply full.
 */
export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="expertise-title"
          label={EXPERTISE.label}
          title={EXPERTISE.title}
          description={EXPERTISE.description}
        />

        <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-7.5">
          {EXPERTISE.groups.map((group, index) => (
            <div key={group.title} className={index % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
              <h3 className="mb-6 flex items-center gap-5 text-[28px] leading-10.5 font-bold md:mb-7.5 md:text-[32px]">
                {group.title}
                {/* A short line with a dot at each end, as on the previous site. */}
                <span
                  aria-hidden="true"
                  className="relative h-px w-20 bg-foreground/70 before:absolute before:-top-0.75 before:-left-0.5 before:size-1.75 before:rounded-full before:bg-foreground after:absolute after:-top-0.75 after:-right-0.5 after:size-1.75 after:rounded-full after:bg-foreground"
                />
              </h3>

              <ul className="flex flex-col gap-5 md:gap-6">
                {group.skills.map(({ name, level }, index) => (
                  <li key={name}>
                    <div className="mb-3 flex justify-between gap-4 font-rubik text-sm leading-4.5 font-medium">
                      <span>{name}</span>
                      <span className="text-gray-light">{level}%</span>
                    </div>
                    <div aria-hidden="true" className="reveal-grow h-1.5 overflow-hidden rounded-full bg-dark">
                      <div
                        className="h-full origin-left rounded-full bg-primary"
                        // Each bar starts a little after the one above it.
                        style={{ width: `${level}%`, animationDelay: `${index * 120}ms` }}
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
