import { SERVICES } from '@/constants/profile';

import { ServiceIconSvg } from './icons';
import { revealDelay } from './reveal';
import SectionHeading from './SectionHeading';

/** 1 → "01". */
const twoDigits = (value: number) => String(value).padStart(2, '0');

/**
 * What I do: a heading and six cards, each with a round icon, a title, a short description and a large
 * faint number in the corner. One card per row on phones, two from 768px and three from 992px.
 */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-15 md:py-20 lg:py-30">
      <div className="section">
        <SectionHeading
          id="services-title"
          label={SERVICES.label}
          title={SERVICES.title}
          description={SERVICES.description}
        />

        <ul className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.items.map(({ title, text, icon }, index) => (
            <li
              key={title}
              className={`reveal ${revealDelay(index, 3)} group glow-card rounded-[20px] border border-foreground/6 bg-dark p-6 transition duration-300 hover:-translate-y-1 md:p-7`}
            >
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 text-[44px] leading-none font-bold text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_12%,transparent)] group-hover:[-webkit-text-stroke-color:rgb(255_1_79/0.5)] md:top-5 md:right-6 md:text-5xl"
              >
                {twoDigits(index + 1)}
              </span>
              <span className="flex size-12 items-center justify-center rounded-full bg-foreground/8 text-foreground transition-colors duration-300 group-hover:bg-pink-primary group-hover:text-white">
                <ServiceIconSvg name={icon} className="size-5.5" />
              </span>
              <h3 className="mt-5 text-[22px] leading-7 font-bold lg:text-xl xl:text-[22px]">{title}</h3>
              <p className="mt-3 font-rubik text-[15px] leading-6.5 text-gray-light">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
