import { EDUCATION } from '@/constants/profile';

import SectionHeading from './SectionHeading';

/**
 * Academic milestones in a two-column grid below Core Expertise. Each card shows the degree and years on
 * the top row, the institution name below it and a short summary.
 */
export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="education-title"
          label={EDUCATION.label}
          title={EDUCATION.title}
          description={EDUCATION.description}
        />

        <div className="mt-8 md:mt-12">
          <h3 className="mb-6 flex items-center gap-5 text-[28px] leading-10.5 font-bold md:mb-7.5 md:text-[32px]">
            {EDUCATION.groupTitle}
            <span
              aria-hidden="true"
              className="relative h-px w-20 bg-foreground/70 before:absolute before:-top-0.75 before:-left-0.5 before:size-1.75 before:rounded-full before:bg-foreground after:absolute after:-top-0.75 after:-right-0.5 after:size-1.75 after:rounded-full after:bg-foreground"
            />
          </h3>

          <ul className="grid gap-5 md:grid-cols-2 lg:gap-7.5">
            {EDUCATION.items.map(({ degree, period, institution, text }) => (
              <li
                key={degree}
                className="flex flex-col justify-center rounded-2xl border border-foreground/6 bg-dark px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-pink-primary/40 md:px-9 md:py-10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg leading-6.5 font-semibold text-foreground md:text-xl">{degree}</h4>
                  <span className="text-base font-bold text-foreground md:text-lg">{period}</span>
                </div>
                <p className="mt-2.5 text-lg leading-6.5 font-bold text-foreground md:text-[21px]">{institution}</p>
                <p className="mt-3.5 font-rubik text-[15px] leading-6.5 text-gray-light">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
