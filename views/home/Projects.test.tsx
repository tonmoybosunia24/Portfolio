import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PROJECTS } from '@/constants/projects';

import Projects from './Projects';

const FEATURED = PROJECTS.items.filter(project => project.featured);

describe('Projects', () => {
  it('shows every featured project with its title and category', () => {
    render(<Projects />);

    expect(screen.getByRole('region', { name: PROJECTS.title })).toHaveAttribute('id', 'projects');

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(FEATURED.length);
    FEATURED.forEach((project, index) => {
      expect(within(items[index]!).getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument();
      expect(items[index]).toHaveTextContent(project.category);
    });
  });

  it('links every featured project to its own page and all projects to /work', () => {
    render(<Projects />);

    FEATURED.forEach(project => {
      expect(screen.getByRole('link', { name: project.title })).toHaveAttribute('href', `/work/${project.slug}`);
    });
    expect(screen.getByRole('link', { name: /View All Projects/ })).toHaveAttribute('href', '/work');
  });
});
