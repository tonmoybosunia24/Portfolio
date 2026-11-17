import type { ContentBlock } from './content';
import type { ProjectLink } from './project';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: { src: string; alt: string; credit?: { name: string; href: string } };
  links?: readonly ProjectLink[];
  content: readonly ContentBlock[];
}
