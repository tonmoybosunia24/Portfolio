import Image from 'next/image';

import { PROFILE } from '@/constants/profile';

import HexPattern from './HexPattern';
import { ArrowRightIcon } from './icons';
import Typewriter from './Typewriter';

const [backTitle, frontTitle] = PROFILE.titles;

/** Faint red light at both edges of a beam, dark in the middle. */
const beamLight =
  'bg-[linear-gradient(90deg,rgb(255_1_79/0.1),rgb(255_1_79/0.03)_20%,transparent_42%,transparent_58%,rgb(255_1_79/0.03)_80%,rgb(255_1_79/0.1))]';

/**
 * Two overlapping light beams that narrow down onto the portrait, like on the previous site. Only their
 * edges are lit. They are sized from the portrait's own box, so they scale and move with the photo.
 */
function LightBeams() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[170%] w-[260%] -translate-x-1/2"
    >
      <div className={`absolute inset-0 ${beamLight} [clip-path:polygon(0_0,100%_0,72%_100%,28%_100%)]`} />
      <div className={`absolute inset-0 ${beamLight} [clip-path:polygon(16%_0,84%_0,63%_100%,37%_100%)]`} />
    </div>
  );
}

/** Greeting with a typewriter role on the left, the portrait under two light beams on the right. */
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-(--hero-bg)">
      {/* Hexagon lines: around the top on phones, on the left from laptops, fading out at the edges. */}
      <HexPattern className="absolute inset-y-0 left-0 -z-10 h-full w-full text-pink-primary opacity-[0.22] mask-[radial-gradient(ellipse_100%_70%_at_50%_30%,black,transparent)] lg:w-3/4 lg:opacity-[0.14] lg:mask-[radial-gradient(ellipse_70%_60%_at_15%_45%,black,transparent)]" />
      {/* The whole bottom (background and photo) fades into the page below. The text column sits above it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-b from-transparent to-background"
      />

      {/*
        Sizes follow the Reeni template (header 71/78px, top padding 120px, title 32/54/68px, text 16/18px,
        60px buttons), tightened by `compact:` on laptops with short screens (at most 800px tall).
        One column below 992px; from there two columns, as tall as the screen.
      */}
      <div className="section grid items-center gap-7.5 pt-30 lg:min-h-svh lg:grid-cols-2 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] compact:pt-25">
        <div className="relative z-30 flex flex-col items-start">
          <h1 id="hero-title" className="animate-intro flex flex-col font-bold">
            <span className="text-[22px] leading-7 md:mb-3.75 md:text-[28px] md:leading-9.5 compact:mb-2 compact:text-[22px] compact:leading-7.5">
              {PROFILE.greeting}
            </span>
            <span className="text-[32px] leading-[1.3] md:mt-1.25 md:text-[54px] 3xl:text-[68px] compact:text-[44px]">
              I’m {PROFILE.name}
            </span>
            {/*
              One line, so the text below doesn't jump while the roles are typed. A little smaller than the
              name where the longest role (20 characters) would not fit its column otherwise.
            */}
            <span className="min-h-[1.3em] text-[32px] leading-[1.3] whitespace-nowrap text-pink-primary md:text-[54px] lg:text-[46px] xl:text-[54px] 3xl:text-[60px] compact:text-[40px]">
              <Typewriter words={PROFILE.roles} />
            </span>
          </h1>

          <p className="animate-intro intro-delay-1 mt-2.25 font-rubik text-base leading-7 text-gray-light md:mt-5.5 md:text-lg md:leading-8.5 compact:mt-4 compact:text-base compact:leading-7">
            {PROFILE.intro}
          </p>

          <div className="animate-intro intro-delay-2 mt-6 flex flex-wrap gap-3 font-rubik text-[15px] font-medium tracking-[0.5px] md:mt-9.75 md:gap-3.75 md:text-base compact:mt-7">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-pink-primary px-5 md:h-15 md:px-7.5 compact:h-13 text-white transition-colors hover:bg-red-primary"
            >
              View Portfolio
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border-2 border-white-overlay px-5 md:h-15 md:px-7.5 compact:h-13 transition-colors hover:border-pink-primary hover:text-pink-primary"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/*
          The photo is centred on phones and tablets, and flush with the container's right edge from laptops.
          The beams and both titles sit in the photo's own box, so they move with it.
        */}
        <div className="flex justify-center self-end lg:justify-end">
          <div className="relative max-w-full">
            <LightBeams />
            {/* A large faint word behind the photo: decoration, so it may disappear behind the head. */}
            <p
              aria-hidden="true"
              className="animate-float pointer-events-none absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 text-[46px] leading-[1.2] font-bold whitespace-nowrap text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_14%,transparent)] sm:text-[75px] md:text-[70px] lg:text-[64px] xl:text-[70px] 3xl:text-[90px] compact:text-[56px]"
            >
              {backTitle}
            </p>
            <Image
              src="/images/portrait.png"
              alt={`Portrait of ${PROFILE.fullName}`}
              width={1199}
              height={1312}
              preload
              sizes="(min-width: 1400px) 660px, (min-width: 1200px) 600px, (min-width: 576px) 486px, 345px"
              className="relative h-auto w-full max-w-86.25 sm:max-w-121.5 lg:max-h-[calc(100svh-130px)] lg:w-auto lg:max-w-full xl:max-w-150 2xl:max-w-165"
            />
            <p
              aria-hidden="true"
              className="text-stroke animate-float pointer-events-none absolute bottom-7.5 left-1/2 z-30 -translate-x-1/2 text-[46px] leading-[1.2] font-bold whitespace-nowrap text-transparent sm:text-[80px] md:text-[70px] lg:text-[64px] xl:text-[70px] 3xl:text-[90px] compact:text-[56px]"
            >
              {frontTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
