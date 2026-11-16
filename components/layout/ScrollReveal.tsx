'use client';

import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-grow';

/**
 * Plays the reveal animations (`reveal`, `reveal-left`, `reveal-right`, `reveal-zoom`, `reveal-grow` in
 * `app/globals.css`) as content scrolls into view. It marks the page `reveal-ready`, which hides that
 * content until it is shown, and adds `is-revealed` to each element once enough of it is on screen,
 * including elements added to the page later. Each element is shown once. Without JavaScript, or for visitors who prefer reduced motion, it does nothing
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

    const watch = (scope: ParentNode) => {
      scope.querySelectorAll(SELECTOR).forEach(element => {
        if (!element.classList.contains('is-revealed')) observer.observe(element);
      });
    };

    // Content added later (another page's sections, or an edit while developing) is watched too, so it
    // never stays hidden.
    const added = new MutationObserver(records => {
      records.forEach(record =>
        record.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR) && !node.classList.contains('is-revealed')) observer.observe(node);
          watch(node);
        }),
      );
    });

    watch(document);
    added.observe(document.body, { childList: true, subtree: true });
    root.classList.add('reveal-ready');

    return () => {
      added.disconnect();
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);

  return null;
}
