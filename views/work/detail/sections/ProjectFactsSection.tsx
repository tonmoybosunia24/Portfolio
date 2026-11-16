import { revealDelay } from '@/lib/reveal';

import { FactIconSvg } from '@/components/ui/icons';

import type { Project } from '@/constants/projects';

const FACT_LABELS: Record<keyof Project['facts'], string> = {
  role: 'My Role',
  client: 'Client',
  year: 'Year',
  duration: 'Duration',
  platforms: 'Platforms',
};

/**
 * The quick facts as five small cards, styled like the service cards: a round icon that turns pink on
 * hover, the label, the value and a large faint number in the corner. Two per row on phones (the last one
 * full width), three from 768px and all five in a row from 992px.
 */
export default function ProjectFactsSection({ project }: { project: Project }) {
  const facts = (Object.keys(FACT_LABELS) as (keyof Project['facts'])[]).map(key => ({
    key,
    label: FACT_LABELS[key],
    value: project.facts[key],
  }));

  return (
    <section aria-label="Project facts" className="pb-15 md:pb-20 lg:pb-30">
      <dl className="section grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-6">
        {facts.map(({ key, label, value }, index) => (
          <div
            key={key}
            className={`reveal ${revealDelay(index, 3)} group glow-card flex flex-col rounded-[20px] border border-foreground/6 bg-dark p-5 transition duration-300 last:col-span-2 hover:-translate-y-1 md:p-6 md:last:col-span-1`}
          >
            <dt className="flex flex-col items-start gap-4 font-rubik text-xs leading-4 font-medium tracking-[2px] text-gray-light uppercase md:gap-5">
              {/* A large faint number in the corner, outlined like on the service cards. */}
              <span
                aria-hidden="true"
                className="absolute top-3.5 right-4 font-sans text-[34px] leading-none font-bold tracking-normal text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_12%,transparent)] group-hover:[-webkit-text-stroke-color:rgb(255_1_79/0.5)] md:top-4 md:right-5 md:text-[40px]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex size-11 items-center justify-center rounded-full bg-foreground/8 text-foreground transition-colors duration-300 group-hover:bg-pink-primary group-hover:text-white md:size-12">
                <FactIconSvg name={key} className="size-5 md:size-5.5" />
              </span>
              {label}
            </dt>
            <dd className="mt-2 text-lg leading-6 font-bold md:text-xl md:leading-7">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
