'use client';

import { type FormEvent, useState } from 'react';

import { CONTACT, FOOTER } from '@/constants/profile';

import { MailIcon } from './icons';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * "Leave your email": a single underlined field with a send icon. There is no mailing list, so a valid
 * email opens the visitor's email app with a short note asking to get in touch.
 */
export default function FooterEmailForm() {
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = String(new FormData(event.currentTarget).get('email') ?? '').trim();

    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email.');

      return;
    }
    setError('');

    const body = `Hi Tonmoy,\n\nI'd like to talk about an app. You can reach me at ${email}.`;

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Let's work together")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form noValidate onSubmit={onSubmit} className="mt-7.5 max-w-95">
      <div className="flex items-center border-b border-white/15 transition-colors focus-within:border-pink-primary">
        <label htmlFor="footer-email" className="sr-only">
          {FOOTER.emailPlaceholder}
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={FOOTER.emailPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'footer-email-error' : undefined}
          className="h-11 min-w-0 flex-1 bg-transparent font-rubik text-sm text-white outline-none placeholder:text-gray-light/70"
        />
        <button
          type="submit"
          aria-label="Send"
          className="flex size-10 shrink-0 items-center justify-center text-white transition-colors hover:text-pink-primary"
        >
          <MailIcon className="size-4" />
        </button>
      </div>
      {error && (
        <p id="footer-email-error" className="mt-1.5 font-rubik text-sm text-pink-primary">
          {error}
        </p>
      )}
    </form>
  );
}
