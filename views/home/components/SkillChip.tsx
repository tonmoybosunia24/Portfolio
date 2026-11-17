import { SKILLS } from '@/constants/home/skills';

import SkillIcon from './SkillIcon';

type Skill = (typeof SKILLS.rows)[number][number];

/** One skill: its icon in the brand color and its name. */
export default function SkillChip({ name, icon, color }: Skill) {
  return (
    <li className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-dark px-3 text-base font-bold whitespace-nowrap md:h-11 md:gap-2.5 md:rounded-[10px] md:px-4 md:text-xl">
      <span className="shrink-0" style={{ color }}>
        <SkillIcon name={icon} className="block size-4 md:size-5" />
      </span>
      {name}
    </li>
  );
}
