'use client';

import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-grow';

/**
 * Plays the reveal animations (`reveal`, `reveal-left`, `reveal-right`, `reveal-zoom`, `reveal-grow` in
 * `app/globals.css`) as content scrolls into view. It marks the page `reveal-ready`, which hides that
 * content until it is shown, and adds `is-revealed` to each element once enough of it is on screen. Each
 * element is shown once. Without JavaScript, or for visitors who prefer reduced motion, it does nothing
 * and the content simply shows. Renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      // A little of the element must be on screen, clear of the very bottom edge.
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll(SELECTOR).forEach(element => observer.observe(element));
    root.classList.add('reveal-ready');

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);

  return null;
}
