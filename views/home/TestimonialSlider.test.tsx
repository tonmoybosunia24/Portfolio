import { describe, expect, it } from 'vitest';

import { shortestStep } from './TestimonialSlider';

describe('shortestStep', () => {
  it('goes the short way round a loop of five', () => {
    expect(shortestStep(0, 2, 5)).toBe(2);
    expect(shortestStep(4, 0, 5)).toBe(1);
    expect(shortestStep(0, 4, 5)).toBe(-1);
    expect(shortestStep(3, 1, 5)).toBe(-2);
    expect(shortestStep(2, 2, 5)).toBe(0);
  });
});
