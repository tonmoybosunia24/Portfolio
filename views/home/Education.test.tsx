import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EDUCATION } from '@/constants/profile';

import Education from './Education';

describe('Education', () => {
  it('lists every experience and education card with its title, period and place', () => {
    render(<Education />);

    expect(screen.getByRole('region', { name: EDUCATION.title })).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    const cards = EDUCATION.groups.flatMap<{ title: string; period: string; place: string; text: string }>(group => [
      ...group.items,
    ]);

    expect(items).toHaveLength(cards.length);

    EDUCATION.groups.forEach(group => {
      expect(screen.getByRole('heading', { level: 3, name: group.title })).toBeInTheDocument();
    });

    cards.forEach(({ title, period, place, text }, index) => {
      const card = items[index]!;

      expect(within(card).getByRole('heading', { level: 4, name: title })).toBeInTheDocument();
      expect(within(card).getByText(period)).toBeInTheDocument();
      expect(within(card).getByText(place)).toBeInTheDocument();
      expect(within(card).getByText(text)).toBeInTheDocument();
    });
  });
});
