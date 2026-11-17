import Link from 'next/link';

import SiteShell from '@/components/layout/SiteShell';
import { ArrowRightIcon } from '@/components/ui/icons';

import { NAV_LINKS } from '@/constants/navigation';
import { NOT_FOUND } from '@/constants/not-found';

/** The outlined "4" on both sides of the pink "0". */
const outlinedDigit = 'text-transparent [-webkit-text-stroke:2px_color-mix(in_srgb,var(--foreground)_75%,transparent)]';

/**
 * The 404 page on the inner pages' background: a large "404" with a floating pink zero, the message, a way
 * home and to the projects, then the other header links.
 */
export default function NotFound() {
  return (
    <SiteShell>
      <section
        aria-labelledby="not-found-title"
        className="relative isolate flex min-h-svh items-center overflow-hidden bg-(--hero-bg)"
      >
        {/* The same background as the other inner pages (PageHero): a faint pink light in the top right corner. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_85%_10%,rgb(255_1_79/0.12),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-background"
        />

        <div className="section flex flex-col items-center pt-30 pb-20 text-center compact:pt-24 compact:pb-8">
          <p
            aria-hidden="true"
            className="animate-intro flex text-[120px] leading-none font-bold sm:text-[170px] md:text-[210px] compact:text-[110px]"
          >
            <span className={outlinedDigit}>4</span>
            <span className="animate-float inline-block text-primary drop-shadow-[0_0_40px_rgb(255_1_79/0.45)]">0</span>
            <span className={outlinedDigit}>4</span>
          </p>

          <p className="animate-intro intro-delay-1 mt-6 font-rubik text-xs leading-5 font-medium tracking-[3px] text-primary uppercase md:text-sm compact:mt-3">
            {NOT_FOUND.label}
          </p>
          <h1
            id="not-found-title"
            className="animate-intro intro-delay-1 mt-2 text-[34px] leading-[1.15] font-bold md:text-5xl compact:text-[40px]"
          >
            {NOT_FOUND.title}
          </h1>
          <p className="animate-intro intro-delay-1 mt-3 max-w-140 font-rubik text-base leading-7 text-gray-light md:mt-4 md:text-lg md:leading-8">
            {NOT_FOUND.text}
          </p>

          <div className="animate-intro intro-delay-2 mt-8 flex flex-wrap justify-center gap-3 compact:mt-6 font-rubik text-[15px] font-medium tracking-[0.5px] md:mt-10 md:gap-3.75 md:text-base">
            <Link
              href={NOT_FOUND.home.href}
              className="group inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 text-white transition-colors duration-300 hover:bg-transparent hover:text-primary md:h-15 md:px-7.5 compact:h-13"
            >
              {NOT_FOUND.home.label}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={NOT_FOUND.projects.href}
              className="inline-flex h-12 items-center rounded-full border-2 border-white-overlay px-5 transition-colors hover:border-primary hover:text-primary md:h-15 md:px-7.5 compact:h-13"
            >
              {NOT_FOUND.projects.label}
            </Link>
          </div>

          <nav aria-label={NOT_FOUND.linksTitle} className="animate-intro intro-delay-2 mt-10 md:mt-12 compact:mt-6">
            <p className="font-rubik text-sm text-gray-light">{NOT_FOUND.linksTitle}</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-bold">
              {NAV_LINKS.filter(link => link.href !== '/#home').map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </SiteShell>
  );
}
