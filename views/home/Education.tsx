import { EDUCATION } from '@/constants/profile';

import SectionHeading from './SectionHeading';

/**
 * Academic milestones below Core Expertise: one card per row up to 992px, then two columns. Each card shows the degree and years on
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

          <ul className="grid gap-4 md:gap-5 lg:grid-cols-2 lg:gap-7.5">
            {EDUCATION.items.map(({ degree, period, institution, text }) => (
              <li
                key={degree}
                className="glow-card flex flex-col justify-center rounded-2xl border border-foreground/6 bg-dark p-5 transition duration-300 hover:-translate-y-1 md:p-7 lg:px-9 lg:py-10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                  <h4 className="text-base leading-6 font-semibold text-foreground md:text-xl md:leading-6.5">
                    {degree}
                  </h4>
                  <span className="text-sm font-bold text-foreground md:text-lg">{period}</span>
                </div>
                <p className="mt-1.5 text-[17px] leading-6 font-bold text-foreground md:mt-2.5 md:text-[21px] md:leading-6.5">
                  {institution}
                </p>
                <p className="mt-2 font-rubik text-sm leading-5.5 text-gray-light md:mt-3.5 md:text-[15px] md:leading-6.5">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
