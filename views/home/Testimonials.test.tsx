import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TESTIMONIALS } from '@/constants/profile';

import Testimonials from './Testimonials';

const scrollTo = vi.fn();

beforeEach(() => {
  scrollTo.mockClear();
  Element.prototype.scrollTo = scrollTo;
});

describe('Testimonials', () => {
  it('gives screen readers each review once, with its rating, quote and author', () => {
    render(<Testimonials />);

    expect(screen.getByRole('region', { name: TESTIMONIALS.title })).toHaveAttribute('id', 'testimonials');

    // The slider draws the list three times; only the middle copy is visible to screen readers.
    const items = within(screen.getByRole('list', { name: 'Client reviews' })).getAllByRole('listitem');

    expect(items).toHaveLength(TESTIMONIALS.items.length);
    TESTIMONIALS.items.forEach(({ quote, name, role, rating }, index) => {
      const item = within(items[index]!);

      expect(item.getByRole('img', { name: `Rated ${rating} out of 5` })).toBeInTheDocument();
      expect(item.getByText(quote)).toBeInTheDocument();
      expect(items[index]).toHaveTextContent(`${name}${role}`);
    });
  });

  it('starts on the first review and scrolls to a review picked with its dot', () => {
    render(<Testimonials />);

    const dots = screen.getAllByRole('button', { name: /^Show review/ });

    expect(dots).toHaveLength(TESTIMONIALS.items.length);
    expect(dots[0]).toHaveAttribute('aria-current', 'true');

    fireEvent.click(dots[2]!);

    expect(scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ behavior: 'smooth' }));
  });
});
