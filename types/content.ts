/** A phone screenshot in a `gallery` block. */
export interface ContentScreenshot {
  /** A portrait image (9:19.5, like 1080×2340) in `public/images/`. */
  src: string;
  alt: string;
  /** A short label shown below it. */
  caption: string;
}

/**
 * One piece of a long write-up (a project story or a blog post). A `heading` starts a part and is listed
 * in the page's "On this page" box; the others are its text, phone screenshots and code.
 */
export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: readonly string[] }
  | { type: 'quote'; text: string }
  | { type: 'gallery'; images: readonly ContentScreenshot[] }
  | { type: 'code'; code: string; language?: string };
