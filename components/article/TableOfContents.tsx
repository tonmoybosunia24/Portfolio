import { slugify } from '@/utils/slugify';

/** "On this page": the headings of the write-up, numbered, each linking to its part. */
export default function TableOfContents({ headings }: { headings: readonly string[] }) {
  return (
    <nav
      aria-labelledby="toc-title"
      // The last link has its own 10px of space below it, so the bottom padding is that much smaller.
      className="rounded-[20px] border border-foreground/6 bg-dark p-6 pb-3.5 xl:p-7 xl:pb-4.5"
    >
      <h2 id="toc-title" className="text-xl leading-7 font-bold">
        On this page
      </h2>
      <ol className="mt-4 flex flex-col">
        {headings.map((heading, index) => (
          <li key={heading} className="border-b border-line last:border-b-0">
            <a
              href={`#${slugify(heading)}`}
              className="flex gap-3 py-2.5 font-rubik text-[15px] leading-6 text-gray-light transition-colors hover:text-pink-primary"
            >
              <span aria-hidden="true" className="w-5 shrink-0 font-medium text-pink-primary/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
