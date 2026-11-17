'use server';

import { z } from 'zod';

import { buildContactEmail } from '@/utils/contact-email';
import { isMailConfigured, sendMail } from '@/utils/mailer.server';

import { CONTACT } from '@/constants/contact';

export type ContactField = 'name' | 'phone' | 'email' | 'subject' | 'message';

export interface ContactState {
  status: 'idle' | 'sent' | 'error';
  /** Shown above the button when the whole message failed, not just a field. */
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string[]>>;
}

const ContactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100, 'Please keep your name under 100 characters.'),
  phone: z.string().trim().max(30, 'Please enter a shorter number.'),
  email: z.email({ error: 'Please enter a valid email.' }).max(200),
  subject: z.string().trim().max(150, 'Please keep the subject under 150 characters.'),
  message: z
    .string()
    .trim()
    .min(1, 'Please write a message.')
    .max(5000, 'Please keep your message under 5000 characters.'),
});

const FAILED = `Sorry, your message could not be sent. Please email me at ${CONTACT.email} instead.`;

/**
 * The home page's contact form. Checks the fields and emails the message to `EMAIL_USER` (see
 * `utils/mailer.server.ts`), with the visitor's address as the reply-to, so answering the email answers
 * them. A filled-in `website` field is a bot (the field is hidden from people): it is told the message was
 * sent and nothing is emailed.
 */
export async function sendContactMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get('website') ?? '').trim()) return { status: 'sent' };

  const fields: ContactField[] = ['name', 'phone', 'email', 'subject', 'message'];
  const parsed = ContactSchema.safeParse(
    Object.fromEntries(fields.map(field => [field, String(formData.get(field) ?? '').trim()])),
  );

  if (!parsed.success) return { status: 'error', fieldErrors: z.flattenError(parsed.error).fieldErrors };

  if (!isMailConfigured()) {
    console.error('Contact form: EMAIL_USER and EMAIL_PASSWORD are not set, so the message was not sent.');
    return { status: 'error', message: FAILED };
  }

  const { name, phone, email, subject, message } = parsed.data;
  const emailContent = buildContactEmail({ name, phone, email, subject, message });

  try {
    await sendMail({ ...emailContent, replyTo: email });
  } catch (error) {
    console.error('Contact form: sending the email failed.', error);
    return { status: 'error', message: FAILED };
  }

  return { status: 'sent' };
}
