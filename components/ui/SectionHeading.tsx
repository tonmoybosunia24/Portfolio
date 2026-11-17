interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: string;
}

/**
 * The compact centred heading at the top of a section: a small pink label between two short lines,
 * a one-line title and an optional short description below it.
 */
export default function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div className="reveal flex flex-col items-center gap-2 text-center md:gap-3">
      <p className="flex items-center gap-3 font-rubik text-xs leading-5 font-medium tracking-[3px] text-gray-light uppercase md:text-sm">
        <span aria-hidden="true" className="h-px w-6 bg-foreground/25 md:w-8" />
        {label}
        <span aria-hidden="true" className="h-px w-6 bg-foreground/25 md:w-8" />
      </p>
      <h2 id={id} className="text-[28px] leading-[1.2] font-bold md:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className="mt-1 max-w-160 font-rubik text-sm leading-6 text-gray-light md:text-base md:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
