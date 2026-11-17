'use client';

import { type MouseEvent, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

import { MoonIcon, SunIcon } from '@/components/ui/icons';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/** How long the new theme takes to spread over the page, in ms. */
const REVEAL_MS = 550;

/**
 * Switches the page between dark and light mode by setting `data-theme` on `<html>` and remembering the
 * choice in `localStorage`. The new theme spreads out in a circle from the button (a view transition).
 * While it does, `theme-switching` on `<html>` turns off the elements' own colour transitions, so the
 * snapshot of the new theme is taken with its final colours. Without view transitions, or with reduced
 * motion, the theme simply switches.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial: Theme = saved === 'light' ? 'light' : 'dark';

    document.documentElement.dataset.theme = initial;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with client storage after hydration
    setTheme(initial);
  }, []);

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    const apply = () => {
      flushSync(() => setTheme(next));
      root.dataset.theme = next;
      window.localStorage.setItem(STORAGE_KEY, next);
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    // The circle grows from the button's centre until it covers the farthest corner of the screen.
    const button = event.currentTarget.getBoundingClientRect();
    const x = button.left + button.width / 2;
    const y = button.top + button.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    root.classList.add('theme-switching');
    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: REVEAL_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
        );
      })
      .catch(() => {});
    void transition.finished.finally(() => root.classList.remove('theme-switching'));
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="round-icon size-12"
    >
      {isDark ? <SunIcon className="size-5.25" /> : <MoonIcon className="size-5.25" />}
    </button>
  );
}
