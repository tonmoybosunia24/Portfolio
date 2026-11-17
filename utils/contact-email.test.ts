import { describe, expect, it } from 'vitest';

import { buildContactEmail } from './contact-email';

const sentAt = new Date('2026-11-17T06:30:00.000Z');

describe('buildContactEmail', () => {
  it('builds a styled HTML and plain-text email with optional phone and subject', () => {
    const result = buildContactEmail({
      name: 'Sarah Mitchell',
      email: 'sarah@example.com',
      phone: '+880 1711-000000',
      subject: 'Flutter App Proposal',
      message: 'Hello Tonmoy,\nWe want to build a delivery app.',
      sentAt,
    });

    expect(result.subject).toBe('Portfolio: Flutter App Proposal');
    expect(result.text).toContain('Name: Sarah Mitchell');
    expect(result.text).toContain('Email: sarah@example.com');
    expect(result.text).toContain('Phone: +880 1711-000000');
    expect(result.text).toContain('Subject: Flutter App Proposal');
    expect(result.text).toContain('Hello Tonmoy,\nWe want to build a delivery app.');
    expect(result.text).toContain('Reply to this email to answer Sarah.');

    expect(result.html).toContain('Portfolio Inquiry');
    expect(result.html).toContain('Flutter App Proposal');
    expect(result.html).toContain('Sarah Mitchell');
    expect(result.html).toContain('mailto:sarah@example.com?subject=Re%3A%20Flutter%20App%20Proposal');
    expect(result.html).toContain('tel:+8801711000000');
    expect(result.html).toContain('Reply to Sarah');
    expect(result.html).toContain('Call Sarah');
    expect(result.html).toContain('Hello Tonmoy,<br>We want to build a delivery app.');
    expect(result.html).toContain('Nov 17, 2026');
  });

  it('omits optional phone, call button, and subject row when omitted', () => {
    const result = buildContactEmail({
      name: 'Rahim',
      email: 'rahim@example.com',
      phone: '',
      subject: '',
      message: 'Quick question.',
      sentAt,
    });

    expect(result.subject).toBe('Portfolio: Message from Rahim');
    expect(result.text).not.toContain('Phone:');
    expect(result.text).not.toContain('Subject:');
    expect(result.html).toContain('New message from Rahim');
    expect(result.html).not.toContain('Call Rahim');
    expect(result.html).not.toContain('tel:');
  });

  it('escapes HTML special characters in all user fields', () => {
    const result = buildContactEmail({
      name: '<script>alert(1)</script>',
      email: 'xss@example.com',
      phone: '123',
      subject: 'Test & "Quote"',
      message: "<b>Bold</b> & 'single'",
      sentAt,
    });

    expect(result.html).not.toContain('<script>');
    expect(result.html).not.toContain('<b>Bold</b>');
    expect(result.html).toContain('&#60;script&#62;alert(1)&#60;/script&#62;');
    expect(result.html).toContain('Test &#38; &#34;Quote&#34;');
    expect(result.html).toContain('&#60;b&#62;Bold&#60;/b&#62; &#38; &#39;single&#39;');
  });
});
