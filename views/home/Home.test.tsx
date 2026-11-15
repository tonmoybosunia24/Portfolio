import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PROFILE } from '@/constants/profile';

import Home from './Home';

describe('Home', () => {
  it('greets the visitor with the name and first role', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `${PROFILE.greeting}I’m ${PROFILE.name}${PROFILE.roles[0]}`,
    );
  });

  it('links to the projects and shows the portrait', () => {
    render(<Home />);

    expect(screen.getByRole('link', { name: 'View Portfolio' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('img', { name: `Portrait of ${PROFILE.fullName}` })).toBeInTheDocument();
  });
});
