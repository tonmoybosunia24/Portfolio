'use client';

import { type FormEvent, startTransition, useActionState, useEffect, useRef, useState } from 'react';

import { ArrowRightIcon } from '@/components/ui/icons';

import { CONTACT } from '@/constants/profile';
import { type ContactField, type ContactState, sendContactMessage } from '@/app/actions';

type Field = ContactField;
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

const fieldClass =
  'w-full rounded-xl border border-foreground/10 bg-transparent px-5 font-rubik text-base text-foreground transition-colors outline-none placeholder:text-gray-light/70 hover:border-foreground/20 focus:border-primary aria-invalid:border-primary';

const FIELDS: { name: Field; label: string; type: string; autoComplete: string; wide?: boolean }[] = [
  { name: 'name', label: 'Your Name', type: 'text', autoComplete: 'name' },
  { name: 'phone', label: 'Your Number', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Your Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

const INITIAL: ContactState = { status: 'idle' };

/**
 * The contact form: name and number, email and subject side by side from 768px, then the message and a
 * send button. Name, email and message are required and checked here first; the server action
 * (`sendContactMessage` in `app/actions.ts`) checks them again and emails the message to the site owner.
 * The form clears once the message is sent, and keeps what was typed when sending fails.
 */
export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'sent') formRef.current?.reset();
  }, [state]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      (['name', 'phone', 'email', 'subject', 'message'] as const).map(field => [field, String(data.get(field) ?? '')]),
    ) as Record<Field, string>;
    const found = validate(values);

    setErrors(found);
    if (Object.keys(found).length > 0) return;

    startTransition(() => formAction(data));
  };

  const errorText = (field: Field) => errors[field] ?? (pending ? undefined : state.fieldErrors?.[field]?.[0]);

  const errorFor = (field: Field) => {
    const text = errorText(field);

    return text ? (
      <p id={`contact-${field}-error`} className="mt-1.5 font-rubik text-sm text-primary">
        {text}
      </p>
    ) : null;
  };

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2 md:gap-5">
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
            aria-invalid={errorText(name) ? true : undefined}
            aria-describedby={errorText(name) ? `contact-${name}-error` : undefined}
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
          aria-invalid={errorText('message') ? true : undefined}
          aria-describedby={errorText('message') ? 'contact-message-error' : undefined}
          className={`${fieldClass} block min-h-36 resize-y py-4`}
        />
        {errorFor('message')}
      </div>

      {/* A trap for bots: hidden from people, so anything typed here marks the message as spam. */}
      <div aria-hidden="true" className="absolute left-[-9999px] size-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group mt-2 flex h-13 items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary font-rubik text-base font-medium tracking-[0.5px] text-white transition-colors duration-300 hover:bg-transparent hover:text-primary disabled:cursor-wait disabled:opacity-70 md:col-span-2 md:h-14 md:w-fit md:justify-self-start md:px-7.5"
      >
        {pending ? 'Sending…' : CONTACT.submit}
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p
        role="status"
        className={`font-rubik text-sm md:col-span-2 empty:hidden ${state.status === 'error' ? 'text-primary' : 'text-gray-light'}`}
      >
        {pending
          ? ''
          : state.status === 'sent'
            ? 'Thanks! Your message has been sent. I will get back to you soon.'
            : (state.message ?? '')}
      </p>
    </form>
  );
}
