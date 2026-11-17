import { PROFILE } from '@/constants/profile';

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sentAt?: Date;
}

const ACCENT = '#ff014f';
const DARK_BG = '#0d1117';
const TEXT_MAIN = '#1f2328';
const TEXT_MUTED = '#59636e';
const BORDER = '#e6e8eb';
const PANEL_BG = '#f6f8fa';
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'Asia/Dhaka',
});

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => `&#${char.charCodeAt(0)};`);

const escapeHtmlWithBreaks = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br>');

/** One label and value row of the details table. */
const row = (label: string, value: string, isLast = false) => `
  <tr>
    <td style="padding:11px 0;${isLast ? '' : `border-bottom:1px solid ${BORDER};`}width:92px;vertical-align:top;font-size:11px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:${TEXT_MUTED};">${label}</td>
    <td style="padding:11px 0;${isLast ? '' : `border-bottom:1px solid ${BORDER};`}vertical-align:top;font-size:14px;line-height:1.5;color:${TEXT_MAIN};word-break:break-word;">${value}</td>
  </tr>`;

/**
 * Builds the subject, plain text fallback, and responsive inline-styled HTML email sent to the site
 * owner when a visitor submits the portfolio contact form.
 */
export function buildContactEmail({ name, email, phone, subject, message, sentAt = new Date() }: ContactMessage) {
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanPhone = phone.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  const title = cleanSubject || `Message from ${cleanName}`;
  const firstName = cleanName.split(/\s+/)[0] || cleanName;
  const initial = (cleanName.charAt(0) || '?').toUpperCase();
  const timestamp = `${DATE_FORMAT.format(sentAt)} (BDT)`;
  const replyHref = escapeHtml(`mailto:${cleanEmail}?subject=${encodeURIComponent(`Re: ${title}`)}`);

  const telDigits = cleanPhone.replace(/[^\d+]/g, '');
  const hasTelLink = /\d/.test(telDigits);
  const telHref = hasTelLink ? escapeHtml(`tel:${telDigits}`) : '';

  const text = [
    `New portfolio message from ${cleanName}`,
    `Received: ${timestamp}`,
    '',
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    ...(cleanPhone ? [`Phone: ${cleanPhone}`] : []),
    ...(cleanSubject ? [`Subject: ${cleanSubject}`] : []),
    '',
    'Message:',
    cleanMessage,
    '',
    `Reply to this email to answer ${firstName}.`,
  ].join('\n');

  const detailItems: [string, string][] = [
    [
      'Email',
      `<a href="mailto:${escapeHtml(cleanEmail)}" style="color:${ACCENT};text-decoration:none;font-weight:500;">${escapeHtml(cleanEmail)}</a>`,
    ],
  ];

  if (cleanPhone) {
    detailItems.push([
      'Phone',
      hasTelLink
        ? `<a href="${telHref}" style="color:${TEXT_MAIN};text-decoration:none;font-weight:500;">${escapeHtml(cleanPhone)}</a>`
        : escapeHtml(cleanPhone),
    ]);
  }

  if (cleanSubject) {
    detailItems.push(['Subject', escapeHtml(cleanSubject)]);
  }

  const detailsHtml = detailItems
    .map(([label, value], index) => row(label, value, index === detailItems.length - 1))
    .join('');

  const callButton = hasTelLink
    ? `<a href="${telHref}" style="display:inline-block;margin-left:10px;border:1px solid #d0d7de;background:#ffffff;color:${TEXT_MAIN};font-size:14px;font-weight:600;text-decoration:none;padding:11px 22px;border-radius:999px;">Call ${escapeHtml(firstName)}</a>`
    : '';

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(cleanName)}: ${escapeHtml(cleanMessage.slice(0, 120))}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 14px;font-family:${FONT};">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};box-shadow:0 4px 24px rgba(13,17,23,0.06);">
          <tr>
            <td style="background:${ACCENT};height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background:${DARK_BG};padding:28px 32px;">
              <span style="display:inline-block;background:#26121b;color:#ff4d82;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:5px 12px;border-radius:999px;">Portfolio Inquiry</span>
              <h1 style="margin:14px 0 6px;font-size:22px;line-height:1.35;font-weight:700;color:#ffffff;">${escapeHtml(cleanSubject || `New message from ${cleanName}`)}</h1>
              <p style="margin:0;font-size:13px;line-height:1.5;color:#9ca3af;">Received ${escapeHtml(timestamp)}</p>
            </td>
          </tr>
          <tr>
            <td style="background:${PANEL_BG};padding:18px 32px;border-bottom:1px solid ${BORDER};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:44px;vertical-align:middle;">
                    <div style="width:44px;height:44px;border-radius:999px;background:${ACCENT};color:#ffffff;font-size:18px;font-weight:700;line-height:44px;text-align:center;">${escapeHtml(initial)}</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:middle;">
                    <p style="margin:0;font-size:16px;font-weight:700;line-height:1.3;color:${TEXT_MAIN};">${escapeHtml(cleanName)}</p>
                    <p style="margin:2px 0 0;font-size:13px;line-height:1.4;color:${TEXT_MUTED};">
                      <a href="mailto:${escapeHtml(cleanEmail)}" style="color:${ACCENT};text-decoration:none;">${escapeHtml(cleanEmail)}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px 6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailsHtml}</table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px 10px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${TEXT_MUTED};">Message</p>
              <div style="background:${PANEL_BG};border:1px solid #eaeef2;border-left:4px solid ${ACCENT};border-radius:10px;padding:18px 20px;font-size:15px;line-height:1.7;color:${TEXT_MAIN};word-break:break-word;">${escapeHtmlWithBreaks(cleanMessage)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="${replyHref}" style="display:inline-block;background:${ACCENT};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 26px;border-radius:999px;">Reply to ${escapeHtml(firstName)}</a>${callButton}
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:12px;line-height:1.5;color:${TEXT_MUTED};">You can also reply directly to this email — Reply-To is set to ${escapeHtml(cleanEmail)}.</p>
            </td>
          </tr>
        </table>
        <p style="margin:18px 0 4px;font-size:12px;font-weight:600;color:${TEXT_MAIN};">${escapeHtml(PROFILE.fullName)} &middot; ${escapeHtml(PROFILE.role)}</p>
        <p style="margin:0;font-size:12px;color:${TEXT_MUTED};">Sent from the contact form on your portfolio</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: `Portfolio: ${cleanSubject || `Message from ${cleanName}`}`,
    text,
    html,
  };
}
