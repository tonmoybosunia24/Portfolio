import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ACHIEVEMENTS } from '@/constants/profile';

import Achievements from './Achievements';

describe('Achievements', () => {
  it('shows the years of experience as a heading', () => {
    render(<Achievements />);

    expect(screen.getByRole('region', { name: ACHIEVEMENTS.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('02Years Of Experience');
  });

  it('lists every number with its label', () => {
    render(<Achievements />);

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(ACHIEVEMENTS.stats.length);
    ACHIEVEMENTS.stats.forEach(({ count, label }, index) => {
      expect(items[index]).toHaveTextContent(`${String(count).padStart(2, '0')} +${label}`);
    });
  });
});
