import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PROJECTS } from '@/constants/profile';

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

  it('links a project only when it has a link', () => {
    render(<Projects />);

    const linked = PROJECTS.items.filter(project => project.href);

    expect(screen.queryAllByRole('link')).toHaveLength(linked.length);
  });
});
