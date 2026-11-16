const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2'] as const;

/**
 * The reveal delay class for item `index` in a row of `columns` cards, so cards side by side come in one
 * after the other (`reveal-delay-*` in `app/globals.css`). At most three steps.
 */
export const revealDelay = (index: number, columns: number) => DELAYS[index % Math.min(columns, DELAYS.length)] ?? '';
