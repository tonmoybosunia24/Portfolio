import { ACHIEVEMENTS } from '@/constants/profile';

import { ServiceIconSvg } from './icons';
import SectionHeading from './SectionHeading';

/** 2 → "02", like the previous site. */
const twoDigits = (value: number) => String(value).padStart(2, '0');

/**
 * Years of experience in a large card and four numbers beside it. Sizes follow the Reeni template
 * (20px radius, 48px numbers, 30px gaps), with the cards side by side on phones to keep it short. It
 * follows the services section, whose bottom padding already separates the two, so it only pads below.
 */
export default function Achievements() {
  const { experience, stats } = ACHIEVEMENTS;

  return (
    <section id="achievements" aria-labelledby="achievements-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="achievements-title"
          label={ACHIEVEMENTS.label}
          title={ACHIEVEMENTS.title}
          description={ACHIEVEMENTS.description}
        />

        <div className="mt-8 grid gap-4.5 md:mt-12 md:gap-6 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col justify-center rounded-[20px] bg-linear-to-br from-[#211a1d] to-[#6d0e2c] px-5 py-7.5 text-white md:px-13 md:py-11">
            <h3 className="flex items-center gap-5 font-bold md:gap-11">
              <span className="text-[80px] leading-none text-pink-primary md:text-[100px] xl:text-[140px] 2xl:text-[167px]">
                {twoDigits(experience.years)}
              </span>
              <span className="text-[26px] leading-[1.3] md:text-[37px] xl:text-[42px] 2xl:text-5xl">
                Years Of <br />
                Experience
              </span>
            </h3>
            <p className="mt-3 font-rubik text-base leading-6.5 text-white/90 md:mt-6">{experience.text}</p>
          </div>

          <ul className="grid grid-cols-2 gap-4.5 md:gap-6 lg:gap-5">
            {/*
              Styled like the service cards: a round icon, then the number and its label, left-aligned, with a
              large faint card number in the corner.
            */}
            {stats.map(({ count, label, icon }, index) => (
              <li
                key={label}
                className="group glow-card flex flex-col justify-center rounded-[20px] border border-foreground/6 bg-dark p-4.5 transition duration-300 hover:-translate-y-1 md:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3.5 right-4 text-[34px] leading-none font-bold text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_12%,transparent)] group-hover:[-webkit-text-stroke-color:rgb(255_1_79/0.5)] md:top-5 md:right-6 md:text-5xl"
                >
                  {twoDigits(index + 1)}
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-foreground/8 text-foreground transition-colors duration-300 group-hover:bg-pink-primary group-hover:text-white md:size-12">
                  <ServiceIconSvg name={icon} className="size-5 md:size-5.5" />
                </span>
                <p className="mt-4 text-[34px] leading-none font-bold md:mt-5 md:text-[44px] lg:text-[40px] 2xl:text-5xl">
                  {twoDigits(count)}
                  <span className="text-foreground/50">+</span>
                </p>
                <p className="mt-2 font-rubik text-sm leading-5 text-gray-light md:text-[15px] md:leading-6">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
