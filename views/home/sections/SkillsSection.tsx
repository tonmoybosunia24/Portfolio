import SectionHeading from '@/components/ui/SectionHeading';

import { SKILLS } from '@/constants/home/skills';

import SkillChip from '../components/SkillChip';

/**
 * Skills as chips in three rows that slide sideways, the middle row the other way, fading out at the
 * edges. Hovering a row stops it. Each row holds its skills four times (two copies of a doubled list)
 * so it fills even a wide screen and loops without a gap. The moving rows are hidden from screen
 * readers, which get one plain list instead. Visitors who prefer less motion get still rows they can
 * scroll sideways.
 */
export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading id="skills-title" label={SKILLS.label} title={SKILLS.title} description={SKILLS.description} />

        <ul className="sr-only">
          {SKILLS.rows.flat().map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          className="mt-8 flex flex-col gap-2.5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-12 md:gap-3 motion-reduce:mask-none"
        >
          {SKILLS.rows.map((row, index) => (
            <div key={row[0]?.name} className="overflow-hidden motion-reduce:overflow-x-auto">
              <div className={`flex w-max ${index % 2 === 1 ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {[0, 1].map(copy => (
                  <ul key={copy} className="flex gap-2.5 pr-2.5 md:gap-4 md:pr-4">
                    {[...row, ...row].map((skill, position) => (
                      <SkillChip key={position} {...skill} />
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
