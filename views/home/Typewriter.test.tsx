import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Typewriter from './Typewriter';

const words = ['Alpha', 'Bo'];

/** The visible, animated text without the blinking cursor. */
const typed = (container: HTMLElement) =>
  container.querySelector('[aria-hidden="true"]')?.textContent?.replace(/_$/, '');

const mockReducedMotion = (reduce: boolean) =>
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: reduce, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  );

describe('Typewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('gives screen readers the first word only', () => {
    mockReducedMotion(false);
    render(<Typewriter words={words} />);

    expect(screen.getByText('Alpha', { selector: '.sr-only' })).toBeInTheDocument();
  });

  it('deletes the word after a pause and types the next one', () => {
    mockReducedMotion(false);
    const { container } = render(<Typewriter words={words} typeSpeed={10} deleteSpeed={10} pause={100} />);

    expect(typed(container)).toBe('Alpha');

    // Pause on the full word, then delete it letter by letter.
    act(() => vi.advanceTimersByTime(100));
    act(() => vi.advanceTimersByTime(10));
    expect(typed(container)).toBe('Alph');

    for (let i = 0; i < 10; i++) act(() => vi.advanceTimersByTime(10));

    expect(typed(container)).toBe('Bo');
  });

  it('stays still for visitors who prefer reduced motion', () => {
    mockReducedMotion(true);
    const { container } = render(<Typewriter words={words} pause={100} />);

    act(() => vi.advanceTimersByTime(5_000));

    expect(typed(container)).toBe('Alpha');
  });
});
