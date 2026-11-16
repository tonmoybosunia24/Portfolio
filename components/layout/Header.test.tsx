import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { NAV_LINKS, SIDEBAR, SOCIALS } from '@/constants/profile';

import Header from './Header';

describe('Header', () => {
  it('links to every section of the page', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: 'Main' });

    for (const link of NAV_LINKS) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href);
    }
  });

  it('opens the social profiles in the side panel in a new tab', () => {
    render(<Header />);

    for (const social of SOCIALS) {
      const link = screen.getByRole('link', { name: social.label, hidden: true });

      expect(link).toHaveAttribute('href', social.href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('toggles between dark and light mode', async () => {
    const user = userEvent.setup();

    window.localStorage.removeItem('theme');
    render(<Header />);

    const toggle = screen.getByRole('button', { name: 'Switch to light mode' });

    await user.click(toggle);

    expect(document.documentElement.dataset.theme).toBe('light');
    expect(window.localStorage.getItem('theme')).toBe('light');
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }));

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
  });

  it('opens the menu panel and closes it with Escape, returning focus to the button', async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole('button', { name: 'Open menu' });

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveFocus();

    await user.keyboard('{Escape}');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveFocus();
  });

  it('closes the menu when a link in it is chosen', async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    await user.click(
      within(screen.getByRole('navigation', { name: 'Menu links' })).getByRole('link', { name: 'About' }),
    );

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows the contact details in the panel', () => {
    render(<Header />);

    const panel = screen.getByRole('dialog', { name: 'Menu', hidden: true });

    for (const contact of SIDEBAR.contacts) {
      expect(within(panel).getByText(contact.value)).toBeInTheDocument();
    }

    expect(within(panel).getByRole('link', { name: 'mdtonmoybosunia24@gmail.com', hidden: true })).toHaveAttribute(
      'href',
      'mailto:mdtonmoybosunia24@gmail.com',
    );
  });

  it('sticks to the top with a glass effect only after scrolling past the hero section', () => {
    let heroBottom = 500;

    render(
      <>
        <Header />
        <section id="home" />
      </>,
    );

    const hero = document.getElementById('home')!;

    vi.spyOn(hero, 'getBoundingClientRect').mockImplementation(() => ({ bottom: heroBottom }) as DOMRect);

    const header = screen.getByRole('banner');

    expect(header).toHaveClass('absolute');
    expect(header).not.toHaveClass('fixed');

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(600);
    heroBottom = 0;
    fireEvent.scroll(window);

    expect(header).toHaveClass('fixed');
    expect(header).not.toHaveClass('absolute');

    heroBottom = 200;
    fireEvent.scroll(window);

    expect(header).toHaveClass('absolute');
    expect(header).not.toHaveClass('fixed');
  });
});
