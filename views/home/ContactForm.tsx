'use client';

import { type FormEvent, useState } from 'react';

import { ArrowRightIcon } from '@/components/ui/icons';

import { CONTACT } from '@/constants/profile';

type Field = 'name' | 'phone' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns a message for each field that needs fixing; empty when the form can be sent. */
export function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email.';
  if (!values.message.trim()) errors.message = 'Please write a message.';

  return errors;
}

/** The email the visitor's mail app opens with: their details first, then their message. */
export function buildMailto(values: Record<Field, string>) {
  const subject = values.subject.trim() || `Message from ${values.name.trim()}`;
  const details = [`Name: ${values.name.trim()}`, `Email: ${values.email.trim()}`];

  if (values.phone.trim()) details.push(`Phone: ${values.phone.trim()}`);

  const body = `${details.join('\n')}\n\n${values.message.trim()}`;

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const fieldClass =
  'w-full rounded-xl border border-foreground/10 bg-transparent px-5 font-rubik text-base text-foreground transition-colors outline-none placeholder:text-gray-light/70 hover:border-foreground/20 focus:border-pink-primary aria-invalid:border-pink-primary';

const FIELDS: { name: Field; label: string; type: string; autoComplete: string; wide?: boolean }[] = [
  { name: 'name', label: 'Your Name', type: 'text', autoComplete: 'name' },
  { name: 'phone', label: 'Your Number', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Your Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

/**
 * The contact form: name and number, email and subject side by side from 768px, then the message and a
 * send button. Name, email and message are required. There is no server: a valid form opens the
 * visitor's email app with the message ready to send.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      (['name', 'phone', 'email', 'subject', 'message'] as const).map(field => [field, String(data.get(field) ?? '')]),
    ) as Record<Field, string>;
    const found = validate(values);

    setErrors(found);
    setSent(false);
    if (Object.keys(found).length > 0) return;

    window.location.href = buildMailto(values);
    setSent(true);
  };

  const errorFor = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 font-rubik text-sm text-pink-primary">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2 md:gap-5">
      {FIELDS.map(({ name, label, type, autoComplete }) => (
        <div key={name}>
          <label htmlFor={`contact-${name}`} className="sr-only">
            {label}
          </label>
          <input
            id={`contact-${name}`}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={label}
            aria-invalid={errors[name] ? true : undefined}
            aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
            className={`${fieldClass} h-14`}
          />
          {errorFor(name)}
        </div>
      ))}

      <div className="md:col-span-2">
        <label htmlFor="contact-message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Your Message"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${fieldClass} block min-h-36 resize-y py-4`}
        />
        {errorFor('message')}
      </div>

      <button
        type="submit"
        className="group mt-2 flex h-13 items-center justify-center gap-2 rounded-full border-2 border-pink-primary bg-pink-primary font-rubik text-base font-medium tracking-[0.5px] text-white transition-colors duration-300 hover:bg-transparent hover:text-pink-primary md:col-span-2 md:h-14 md:w-fit md:justify-self-start md:px-7.5"
      >
        {CONTACT.submit}
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p role="status" className="font-rubik text-sm text-gray-light md:col-span-2 empty:hidden">
        {sent ? 'Your email app should open with the message ready. Just press send.' : ''}
      </p>
    </form>
  );
}
