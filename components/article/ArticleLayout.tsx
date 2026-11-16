import type { ContentBlock } from '@/types';

import ContactCta from './ContactCta';
import StoryBlock from './StoryBlock';
import TableOfContents from './TableOfContents';

/**
 * A long write-up (a project story or a blog post), read like a blog post, in a comfortable column. From
 * 992px a sidebar runs beside it: at its top a card inviting the reader to get in touch, then "On this
 * page" with the headings, which stays in view while scrolling. Below 992px only that card follows the
 * text.
 */
export default function ArticleLayout({ blocks, label }: { blocks: readonly ContentBlock[]; label: string }) {
  const headings = blocks.flatMap(block => (block.type === 'heading' ? [block.text] : []));

  return (
    <section aria-label={label} className="pb-15 md:pb-20 lg:pb-30">
      <div className="section grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-20">
        <article className="max-w-190">
          {blocks.map((block, index) => (
            <StoryBlock key={index} block={block} />
          ))}
        </article>

        {/*
          The card sits at the top, beside the start of the text. Below it, the contents box stays in view
          while the rest of the text scrolls by.
        */}
        <aside className="flex flex-col gap-6">
          <ContactCta />
          <div className="hidden flex-1 lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
