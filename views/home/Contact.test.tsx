import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CONTACT, SIDEBAR } from '@/constants/profile';

import Contact from './Contact';
import { validate } from './ContactForm';

const sendContactMessage = vi.hoisted(() => vi.fn());

vi.mock('@/app/actions', () => ({ sendContactMessage }));

const empty = { name: '', phone: '', email: '', subject: '', message: '' };

describe('Contact', () => {
  afterEach(() => sendContactMessage.mockReset());

  it('shows the contact details with working links', () => {
    render(<Contact />);

    expect(screen.getByRole('region', { name: CONTACT.title })).toHaveAttribute('id', 'contact');

    const mail = SIDEBAR.contacts.find(contact => contact.icon === 'mail')!;

    expect(screen.getByRole('link', { name: mail.value })).toHaveAttribute('href', mail.href);
  });

  it('marks the required fields that are missing instead of sending', () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole('button', { name: CONTACT.submit }));

    expect(screen.getByLabelText('Your Name')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Your Email')).toHaveAccessibleDescription('Please enter your email.');
    expect(screen.getByLabelText('Your Message')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Your Number')).not.toHaveAttribute('aria-invalid');
  });

  it('opens the email app with the message when the form is valid', () => {
    const location = { href: '' };

    vi.stubGlobal('location', location);
    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'ana@example.com' } });
    fireEvent.change(screen.getByLabelText('Your Message'), { target: { value: 'Hi!' } });
    fireEvent.click(screen.getByRole('button', { name: CONTACT.submit }));

    expect(location.href).toMatch(new RegExp(`^mailto:${CONTACT.email}\\?subject=`));
    expect(screen.getByRole('status')).toHaveTextContent('Your email app should open');
  });
});

describe('validate', () => {
  it('accepts a form with a name, a valid email and a message', () => {
    expect(validate({ ...empty, name: 'Ana', email: 'ana@example.com', message: 'Hi' })).toEqual({});
  });

  it('rejects an email without a domain', () => {
    expect(validate({ ...empty, name: 'Ana', email: 'ana@', message: 'Hi' })).toEqual({
      email: 'Please enter a valid email.',
    });
  });
});
