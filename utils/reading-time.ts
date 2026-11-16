import type { ContentBlock } from '@/types';

/** Average reading speed of an article, in words per minute. */
const WORDS_PER_MINUTE = 200;

/** The words a reader reads in a block. Screenshots count only their captions. */
const blockText = (block: ContentBlock): readonly string[] => {
  switch (block.type) {
    case 'list':
      return block.items;
    case 'gallery':
      return block.images.map(image => image.caption);
    case 'code':
      return [block.code];
    default:
      return [block.text];
  }
};

/** Minutes it takes to read these blocks, rounded up and at least 1. */
export const readingMinutes = (blocks: readonly ContentBlock[]) => {
  const words = blocks.flatMap(blockText).join(' ').split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
