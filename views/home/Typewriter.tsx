'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

interface TypewriterProps {
  words: readonly string[];
  /** Milliseconds per typed letter. */
  typeSpeed?: number;
  /** Milliseconds per deleted letter. */
  deleteSpeed?: number;
  /** Milliseconds a full word stays before it is deleted. */
  pause?: number;
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeToMotion = (onChange: () => void) => {
  const query = window.matchMedia?.(REDUCED_MOTION);

  query?.addEventListener('change', onChange);

  return () => query?.removeEventListener('change', onChange);
};

/** True when the visitor hasn't asked for reduced motion. */
const motionAllowed = () => !window.matchMedia?.(REDUCED_MOTION).matches;

// The server can't know, so it renders the still version; the browser switches to the animation.
const motionAllowedOnServer = () => false;

/**
 * Types each word, deletes it and moves on to the next, in a loop. Screen readers and visitors who prefer
 * reduced motion get the first word only.
 */
export default function Typewriter({ words, typeSpeed = 80, deleteSpeed = 30, pause = 1500 }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  // Starts with the first word fully typed, so it doesn't flash away once the animation starts.
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const animate = useSyncExternalStore(subscribeToMotion, motionAllowed, motionAllowedOnServer);

  const word = words[wordIndex % words.length] ?? '';

  useEffect(() => {
    if (!animate) return;

    const typed = !deleting && length === word.length;
    const erased = deleting && length === 0;
    const delay = typed ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (typed) {
        setDeleting(true);
      } else if (erased) {
        setDeleting(false);
        setWordIndex(index => index + 1);
      } else {
        setLength(value => value + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [animate, deleting, length, word, typeSpeed, deleteSpeed, pause]);

  const first = words[0] ?? '';

  return (
    <>
      <span className="sr-only">{first}</span>
      <span aria-hidden="true">
        {animate ? word.slice(0, length) : first}
        <span className="animate-blink">_</span>
      </span>
    </>
  );
}
