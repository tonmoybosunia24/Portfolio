interface SectionHeadingProps {
  /** Used for the section's `aria-labelledby`. */
  id: string;
  /** A word or two above the title. */
  label: string;
  /** One short line. */
  title: string;
}

/**
 * The compact centred heading at the top of a section: a small pink label between two short lines,
 * then a one-line title.
 */
export default function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:gap-3">
      <p className="flex items-center gap-3 font-rubik text-xs leading-5 font-medium tracking-[3px] text-pink-primary uppercase md:text-sm">
        <span aria-hidden="true" className="h-px w-6 bg-pink-primary/60 md:w-8" />
        {label}
        <span aria-hidden="true" className="h-px w-6 bg-pink-primary/60 md:w-8" />
      </p>
      <h2 id={id} className="text-[28px] leading-[1.2] font-bold md:text-4xl lg:text-[42px]">
        {title}
      </h2>
    </div>
  );
}
