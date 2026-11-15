'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { QuoteIcon, StarIcon } from './icons';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** A square picture in `public/images/`. */
  image: string;
  rating: number;
}

/** Time each review stays in the middle before the next one slides in. */
const AUTOPLAY_MS = 5000;

/** How long the row must be still before it counts as settled. */
const SETTLE_MS = 150;

/** The list is drawn three times, so there is always a review on either side of the middle one. */
const COPIES = 3;

/**
 * Steps from review `from` to review `to` the short way round the loop: from the last review to the first
 * is one step forward, not four back.
 */
export const shortestStep = (from: number, to: number, count: number) => {
  const step = (((to - from) % count) + count) % count;

  return step > count / 2 ? step - count : step;
};

/**
 * Reviews in an endless row with the current one in the middle and its neighbours dimmed at the sides.
 * The list is drawn three times; whenever the row settles in the first or last copy it jumps, without
 * animation, to the same review in the middle copy, so it can keep going in either direction. It slides
 * to the next review every few seconds (not for visitors who prefer reduced motion) and stops while the
 * pointer or keyboard focus is on it. Visitors can also swipe or scroll it, or pick a review with the dots.
 * Screen readers get only the middle copy.
 */
export default function TestimonialSlider({ items }: { items: readonly Testimonial[] }) {
  const count = items.length;
  const track = useRef<HTMLUListElement>(null);
  const activeRef = useRef(count);
  const paused = useRef(false);
  const [active, setActive] = useState(count);

  /** Scrolls so card `index` (counting all copies) sits in the middle. */
  const goTo = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const list = track.current;
    const card = list?.children[index] as HTMLElement | undefined;

    if (!list || !card) return;

    const left = card.offsetLeft - (list.clientWidth - card.clientWidth) / 2;

    // A jump is a plain position change; only slides animate.
    if (behavior === 'instant') list.scrollLeft = left;
    else list.scrollTo({ left, behavior });
  }, []);

  useEffect(() => {
    const list = track.current;

    if (!list) return;

    // Start on the first review of the middle copy, with the last review already on its left.
    goTo(count, 'instant');

    let settle: ReturnType<typeof setTimeout> | undefined;

    const onScroll = () => {
      // The card nearest the middle is the current one, however the row was scrolled.
      const middle = list.scrollLeft + list.clientWidth / 2;
      let nearest = 0;
      let distance = Infinity;

      [...list.children].forEach((child, index) => {
        const card = child as HTMLElement;
        const offset = Math.abs(card.offsetLeft + card.clientWidth / 2 - middle);

        if (offset < distance) {
          distance = offset;
          nearest = index;
        }
      });
      activeRef.current = nearest;
      setActive(nearest);

      // Once still, move from an outer copy back to the middle one.
      clearTimeout(settle);
      settle = setTimeout(() => {
        const current = activeRef.current;

        if (current < count || current >= count * 2) goTo(count + (current % count), 'instant');
      }, SETTLE_MS);
    };

    list.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(settle);
      list.removeEventListener('scroll', onScroll);
    };
  }, [count, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (paused.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      goTo(activeRef.current + 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [goTo]);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    paused.current = false;
  };

  const current = active % count;
  const cards = Array.from({ length: COPIES }, (_, copy) => items.map((item, index) => ({ ...item, copy, index })));

  // Card widths are in `cqw` of the outer box, so they are a share of the whole row.
  return (
    <div
      className="@container"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
    >
      <ul
        ref={track}
        // Focusable so keyboard users can scroll the row with the arrow keys.
        tabIndex={0}
        aria-label="Client reviews"
        // The row fades out at both sides, so the neighbouring reviews don't end in a hard cut.
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] md:gap-5 lg:mask-[linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]"
      >
        {cards.flat().map(({ quote, name, role, image, rating, copy, index }) => {
          const position = copy * count + index;
          const isActive = position === active;

          return (
            <li
              key={`${copy}-${name}`}
              aria-hidden={copy === 1 ? undefined : true}
              aria-current={isActive ? 'true' : undefined}
              className={`w-[88cqw] shrink-0 snap-center pt-8 transition-opacity duration-500 md:w-[75cqw] lg:w-[52cqw] ${isActive ? 'opacity-100' : 'opacity-50'}`}
            >
              <figure className="relative flex h-full flex-col rounded-xl border border-white/12 px-5 pt-11 pb-7 md:px-10 md:pt-14 md:pb-11">
                {/* The quote badge sits on the top border. */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-5 flex size-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-background md:left-10 md:size-16"
                >
                  <QuoteIcon className="size-6 text-white/30 md:size-7" />
                </span>

                {/* Stars below the name on phones, at the top right from tablets. */}
                <figcaption className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
                  <span className="flex items-center gap-3">
                    {/* Decorative: the name is right next to it. */}
                    <Image
                      src={image}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-full ring-2 ring-white/10"
                    />
                    <span>
                      <span className="block text-xl leading-6 font-bold md:text-[22px] md:leading-7">{name}</span>
                      <span className="block font-rubik text-sm leading-5 text-gray-light md:text-base md:leading-6">
                        {role}
                      </span>
                    </span>
                  </span>
                  <span
                    role="img"
                    aria-label={`Rated ${rating} out of 5`}
                    className="flex shrink-0 gap-0.5 text-pink-primary md:mt-1"
                  >
                    {Array.from({ length: rating }, (_, star) => (
                      <StarIcon key={star} className="size-3.5 md:size-4" />
                    ))}
                  </span>
                </figcaption>

                <blockquote className="mt-5 text-xl leading-7.5 font-medium md:mt-6 md:text-[28px] md:leading-9">
                  <p>{quote}</p>
                </blockquote>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex justify-center gap-2 md:mt-8">
        {items.map(({ name }, index) => (
          <button
            key={name}
            type="button"
            aria-label={`Show review ${index + 1} of ${count}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => goTo(active + shortestStep(current, index, count))}
            className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'w-7 bg-pink-primary' : 'w-2 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
