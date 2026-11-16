import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PROJECTS } from '@/constants/projects';

import Projects from './Projects';

describe('Projects', () => {
  it('shows every project with its title and tech', () => {
    render(<Projects />);

    expect(screen.getByRole('region', { name: PROJECTS.title })).toHaveAttribute('id', 'projects');

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(PROJECTS.items.length);
    PROJECTS.items.forEach((project, index) => {
      expect(within(items[index]!).getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument();
      expect(items[index]).toHaveTextContent(project.category);
    });
  });

  it('links every project to its own page', () => {
    render(<Projects />);

    PROJECTS.items.forEach(project => {
      expect(screen.getByRole('link', { name: project.title })).toHaveAttribute('href', `/work/${project.slug}`);
    });
  });
});
