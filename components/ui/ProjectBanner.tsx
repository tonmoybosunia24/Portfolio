import Image from 'next/image';

import type { Project } from '@/constants/projects';

const BANNER_CLASS = 'object-cover transition-transform duration-500 group-hover:scale-[1.03]';

interface ProjectBannerProps {
  project: Project;
  /** The `sizes` of the image: how wide it is shown at each screen width. */
  sizes: string;
  /** Load it first, for a banner at the top of the page. */
  preload?: boolean;
}

/**
 * The project's 4:3 banner in a rounded frame, zooming in slightly when a parent `group` is hovered: the
 * dark one in dark mode, the light one in light mode. The hidden one is not downloaded, as lazy images that
 * are not displayed are skipped.
 */
export default function ProjectBanner({ project, sizes, preload = false }: ProjectBannerProps) {
  const alt = `${project.title}: app screens`;

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-2xl border-[1.5px] border-foreground/10 bg-background">
      <Image
        src={project.banner.dark}
        alt={alt}
        fill
        quality={95}
        sizes={sizes}
        preload={preload}
        className={`${BANNER_CLASS} light:hidden`}
      />
      <Image
        src={project.banner.light}
        alt={alt}
        fill
        quality={95}
        sizes={sizes}
        className={`${BANNER_CLASS} hidden light:block`}
      />
    </div>
  );
}
