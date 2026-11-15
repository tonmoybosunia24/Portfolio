import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EDUCATION } from '@/constants/profile';

import Education from './Education';

describe('Education', () => {
  it('lists every education milestone with its degree, period and institution', () => {
    render(<Education />);

    expect(screen.getByRole('region', { name: EDUCATION.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: EDUCATION.groupTitle })).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(EDUCATION.items.length);

    EDUCATION.items.forEach(({ degree, period, institution, text }, index) => {
      const card = items[index]!;

      expect(within(card).getByRole('heading', { level: 4, name: degree })).toBeInTheDocument();
      expect(within(card).getByText(period)).toBeInTheDocument();
      expect(within(card).getByText(institution)).toBeInTheDocument();
      expect(within(card).getByText(text)).toBeInTheDocument();
    });
  });
});
