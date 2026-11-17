import 'server-only';

import nodemailer, { type Transporter } from 'nodemailer';

interface Mail {
  subject: string;
  text: string;
  html: string;
  /** Where a reply goes, e.g. the visitor who filled in the contact form. */
  replyTo?: string;
}

let transporter: Transporter | undefined;

/** True when `EMAIL_USER` and `EMAIL_PASSWORD` are set, so mail can be sent. */
export const isMailConfigured = (): boolean => Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD);

/**
 * Sends an email from `EMAIL_USER` to `EMAIL_USER` through Gmail's SMTP server, logging in with
 * `EMAIL_PASSWORD` (a Gmail app password, not the account password). Throws when sending fails.
 */
export async function sendMail({ subject, text, html, replyTo }: Mail): Promise<void> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) throw new Error('EMAIL_USER and EMAIL_PASSWORD are not set');

  transporter ??= nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });

  await transporter.sendMail({ from: { name: 'Portfolio', address: user }, to: user, replyTo, subject, text, html });
}
