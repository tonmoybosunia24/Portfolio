import { SKILLS } from '@/constants/profile';

import SectionHeading from './SectionHeading';
import SkillIcon from './SkillIcon';

type Skill = (typeof SKILLS.rows)[number][number];

function SkillChip({ name, icon }: Skill) {
  return (
    <li className="flex h-10 shrink-0 items-center gap-2 rounded-md bg-dark px-3 text-base font-bold whitespace-nowrap md:h-12 md:gap-2.5 md:px-4 md:text-xl">
      <SkillIcon name={icon} className="size-4 text-pink-primary md:size-5" />
      {name}
    </li>
  );
}

/**
 * Skills as chips in three rows that slide sideways, the middle row the other way, fading out at the
 * edges. Hovering a row stops it. Each row holds its skills four times (two copies of a doubled list)
 * so it fills even a wide screen and loops without a gap. The moving rows are hidden from screen
 * readers, which get one plain list instead. Visitors who prefer less motion get still rows they can
 * scroll sideways.
 */
export default function Skills() {
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
          className="mt-8 flex flex-col gap-3 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-12 md:gap-4 motion-reduce:mask-none"
        >
          {SKILLS.rows.map((row, index) => (
            <div key={row[0]?.name} className="overflow-hidden motion-reduce:overflow-x-auto">
              <div className={`flex w-max ${index % 2 === 1 ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {[0, 1].map(copy => (
                  <ul key={copy} className="flex gap-3 pr-3 md:gap-5 md:pr-5">
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
