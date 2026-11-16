import Image from 'next/image';

import { slugify } from '@/utils/slugify';

import type { ContentBlock } from '@/types';

/**
 * One piece of a long write-up, styled for long reading: headings with a short pink line and an id the
 * "On this page" box links to, roomy paragraphs, lists with pink dots, a pull quote, phone screenshots in
 * a row (two per row on phones, four from 576px) and code that scrolls sideways when a line is too long.
 */
export default function StoryBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2
          id={slugify(block.text)}
          className="reveal mt-10 flex scroll-mt-28 items-center gap-3 text-[26px] leading-tight font-bold first:mt-0 md:mt-12 md:text-[32px]"
        >
          <span aria-hidden="true" className="h-0.5 w-6 shrink-0 rounded-full bg-pink-primary md:w-8" />
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p className="mt-4 font-rubik text-base leading-7.5 text-gray-light md:mt-5 md:text-[17px] md:leading-8">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul className="mt-5 flex flex-col gap-3 font-rubik text-base leading-7 text-gray-light md:text-[17px]">
          {block.items.map(item => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-pink-primary" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="reveal mt-8 rounded-r-[20px] border-l-4 border-pink-primary bg-dark px-6 py-5 text-xl leading-8 font-semibold md:px-8 md:py-7 md:text-2xl md:leading-9">
          <p>{block.text}</p>
        </blockquote>
      );
    case 'gallery':
      return (
        <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {block.images.map(image => (
            <li key={image.src}>
              <figure>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={720}
                  height={1560}
                  sizes="(min-width: 768px) 180px, (min-width: 576px) 25vw, 50vw"
                  className="h-auto w-full rounded-2xl border border-foreground/10"
                />
                <figcaption className="mt-2 text-center font-rubik text-[13px] leading-5 text-gray-light">
                  {image.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <figure className="mt-6 overflow-hidden rounded-2xl border border-foreground/8 bg-dark">
          {block.language && (
            <figcaption className="border-b border-line px-5 py-2.5 font-rubik text-xs leading-5 font-medium tracking-[2px] text-gray-light uppercase">
              {block.language}
            </figcaption>
          )}
          <pre className="overflow-x-auto px-5 py-4 text-sm leading-6.5">
            <code className="font-mono text-foreground">{block.code}</code>
          </pre>
        </figure>
      );
  }
}
