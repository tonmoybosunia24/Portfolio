import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SERVICES } from '@/constants/profile';

import Services from './Services';

describe('Services', () => {
  it('is a labelled section the header can link to', () => {
    render(<Services />);

    const section = screen.getByRole('region', { name: SERVICES.title });

    expect(section).toHaveAttribute('id', 'services');
  });

  it('lists every service with its title and text', () => {
    render(<Services />);

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(SERVICES.items.length);
    SERVICES.items.forEach((service, index) => {
      expect(within(items[index]!).getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument();
      expect(items[index]).toHaveTextContent(service.text);
    });
  });
});
