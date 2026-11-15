'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { roundIcon } from './Brand';
import { MoonIcon, SunIcon } from './icons';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/**
 * Switches the page between dark and light mode by setting `data-theme` on `<html>` and remembering the
 * choice in `localStorage`.
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

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(roundIcon, 'size-12')}
    >
      {isDark ? <SunIcon className="size-5.25" /> : <MoonIcon className="size-5.25" />}
    </button>
  );
}
