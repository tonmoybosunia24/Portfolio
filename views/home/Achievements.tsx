import { ACHIEVEMENTS } from '@/constants/profile';

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
        />

        <div className="mt-8 grid gap-4 md:mt-12 md:gap-6 lg:grid-cols-2 lg:gap-7.5">
          <div className="flex flex-col justify-center rounded-[20px] bg-linear-to-br from-[#211a1d] to-[#6d0e2c] px-5 py-7.5 md:px-13 md:py-11">
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

          <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-7.5 2xl:gap-5">
            {stats.map(({ count, label }) => (
              <li
                key={label}
                className="flex flex-col items-center justify-center rounded-[20px] border border-transparent bg-dark px-1.75 py-6 text-center transition-colors duration-300 hover:border-pink-primary/30 md:py-8.5 2xl:py-12"
              >
                <p className="text-4xl leading-[1.25] font-bold md:text-5xl md:leading-15 lg:text-[40px] 2xl:text-[56px] 2xl:leading-17.5">
                  {twoDigits(count)}
                  <span className="text-pink-primary"> +</span>
                </p>
                <p className="mt-1 font-rubik text-sm leading-5 text-gray-light md:text-base md:leading-7.5 2xl:text-lg">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
