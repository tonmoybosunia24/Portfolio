import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EXPERTISE } from '@/constants/profile';

import Expertise from './Expertise';

describe('Expertise', () => {
  it('shows each group with every skill and its level', () => {
    render(<Expertise />);

    expect(screen.getByRole('region', { name: EXPERTISE.title })).toBeInTheDocument();

    const lists = screen.getAllByRole('list');

    EXPERTISE.groups.forEach((group, index) => {
      expect(screen.getByRole('heading', { level: 3, name: group.title })).toBeInTheDocument();

      const items = within(lists[index]!).getAllByRole('listitem');

      expect(items.map(item => item.textContent)).toEqual(group.skills.map(({ name, level }) => `${name}${level}%`));
    });
  });
});
