import { beforeEach, describe, expect, it, vi } from 'vitest';

import { isMailConfigured, sendMail } from '@/utils/mailer.server';

import { sendContactMessage } from './actions';

vi.mock('@/utils/mailer.server', () => ({
  isMailConfigured: vi.fn(),
  sendMail: vi.fn(),
}));

const form = (fields: Record<string, string>) => {
  const data = new FormData();

  for (const [key, value] of Object.entries(fields)) data.set(key, value);

  return data;
};

const valid = {
  name: 'Ana',
  phone: '+880 1700-000000',
  email: 'ana@example.com',
  subject: 'Mobile App',
  message: 'Hi Tonmoy, let us work together.',
};

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.mocked(isMailConfigured).mockReturnValue(true);
  vi.mocked(sendMail).mockResolvedValue(undefined);
});

describe('sendContactMessage', () => {
  it('silently accepts honeypot submissions without sending mail', async () => {
    const result = await sendContactMessage({ status: 'idle' }, form({ ...valid, website: 'https://spam.example' }));

    expect(result).toEqual({ status: 'sent' });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('returns field errors when required fields are invalid', async () => {
    const result = await sendContactMessage({ status: 'idle' }, form({ ...valid, email: 'invalid', message: '' }));

    expect(result.status).toBe('error');
    expect(result.fieldErrors?.email).toBeDefined();
    expect(result.fieldErrors?.message).toBeDefined();
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('returns an error message when mail is not configured', async () => {
    vi.mocked(isMailConfigured).mockReturnValue(false);

    const result = await sendContactMessage({ status: 'idle' }, form(valid));

    expect(result.status).toBe('error');
    expect(result.message).toContain('could not be sent');
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('sends the formatted contact email with replyTo set to the visitor email', async () => {
    const result = await sendContactMessage({ status: 'idle' }, form(valid));

    expect(result).toEqual({ status: 'sent' });
    expect(sendMail).toHaveBeenCalledTimes(1);

    const sent = vi.mocked(sendMail).mock.calls[0]?.[0];

    expect(sent?.subject).toBe('Portfolio: Mobile App');
    expect(sent?.replyTo).toBe('ana@example.com');
    expect(sent?.html).toContain('Portfolio Inquiry');
    expect(sent?.html).toContain('Reply to Ana');
  });

  it('returns an error message when sendMail throws', async () => {
    vi.mocked(sendMail).mockRejectedValue(new Error('SMTP error'));

    const result = await sendContactMessage({ status: 'idle' }, form(valid));

    expect(result.status).toBe('error');
    expect(result.message).toContain('could not be sent');
  });
});
