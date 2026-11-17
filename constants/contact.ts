/**
 * The "Contact" section on the home page. The details reuse `SIDEBAR.contacts`. Sending the form emails the
 * message to the site owner (`app/actions.ts`); `email` is shown when sending fails.
 */
export const CONTACT = {
  label: 'Contact',
  title: 'Have a Project in Mind?',
  text: 'I am open to full-time roles and freelance projects. Tell me about your app or website, and I will get back to you soon.',
  formTitle: 'Get In Touch',
  email: 'mdtonmoybosunia24@gmail.com',
  detailLabels: { mail: 'E-mail', location: 'Location', phone: 'Contact' },
  detailOrder: ['mail', 'location', 'phone'],
  submit: 'Send Message',
} as const;
