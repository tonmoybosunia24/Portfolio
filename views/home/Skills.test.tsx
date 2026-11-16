import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SKILLS } from '@/constants/profile';

import Skills from './Skills';

describe('Skills', () => {
  it('gives screen readers every skill once, without the moving copies', () => {
    render(<Skills />);

    const skills = SKILLS.rows.flat().map(({ name }) => name);

    expect(screen.getByRole('region', { name: SKILLS.title })).toHaveAttribute('id', 'skills');
    expect(screen.getAllByRole('listitem').map(item => item.textContent)).toEqual(skills);
  });
});
