/** "Tech Stack & Architecture" → "tech-stack-architecture": lowercase letters and digits joined by hyphens. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
