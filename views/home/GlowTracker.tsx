'use client';

import { useEffect } from 'react';

/**
 * Points the border glow of `glow-card` elements at the corner nearest the pointer. One listener for the
 * whole page: it finds the card under the pointer and sets --glow-x and --glow-y on it to 0% or 100%.
 * Renders nothing.
 */
export default function GlowTracker() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const card = event.target instanceof Element ? event.target.closest<HTMLElement>('.glow-card') : null;

      if (!card) return;

      const box = card.getBoundingClientRect();
      const x = event.clientX - box.left < box.width / 2 ? '0%' : '100%';
      const y = event.clientY - box.top < box.height / 2 ? '0%' : '100%';

      card.style.setProperty('--glow-x', x);
      card.style.setProperty('--glow-y', y);
    };

    document.addEventListener('pointermove', onMove, { passive: true });

    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return null;
}
