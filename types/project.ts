import type { ContentBlock } from './content';

/** A button on a project or blog page (store, live site, repository). The first one is highlighted. */
export interface ProjectLink {
  label: string;
  href: string;
}

/** The `/work` tab a project is listed under. */
export type ProjectKind = 'mobile' | 'web' | 'design';

export interface Project {
  slug: string;
  kind: ProjectKind;
  featured: boolean;
  title: string;
  category: string;
  summary: string;
  banner: { light: string; dark: string };
  facts: { role: string; client: string; year: string; duration: string; platforms: string };
  tech: readonly string[];
  links: readonly ProjectLink[];
  story: readonly ContentBlock[];
}
