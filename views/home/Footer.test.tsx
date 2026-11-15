import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CONTACT, FOOTER, SOCIALS } from '@/constants/profile';

import Footer from './Footer';

describe('Footer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('links to every section and to the social profiles', () => {
    render(<Footer />);

    const links = within(screen.getByRole('navigation', { name: FOOTER.linksTitle })).getAllByRole('link');

    expect(links.map(link => link.getAttribute('href'))).toEqual(FOOTER.links.map(link => link.href));
    SOCIALS.forEach(social => {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href);
    });
  });

  it('asks for a valid email before opening the email app', () => {
    const location = { href: '' };

    vi.stubGlobal('location', location);
    render(<Footer />);

    const field = screen.getByLabelText(FOOTER.emailPlaceholder);

    fireEvent.change(field, { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));

    expect(field).toHaveAccessibleDescription('Please enter a valid email.');
    expect(location.href).toBe('');

    fireEvent.change(field, { target: { value: 'ana@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));

    expect(location.href).toMatch(new RegExp(`^mailto:${CONTACT.email}\\?`));
    expect(decodeURIComponent(location.href)).toContain('ana@example.com');
  });
});
