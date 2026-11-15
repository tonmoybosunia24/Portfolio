import { FOOTER, PROFILE, SIDEBAR } from '@/constants/profile';

import { Logo, SocialLinks } from './Brand';
import FooterEmailForm from './FooterEmailForm';
import { LocationIcon, MailIcon, PhoneIcon } from './icons';

const DETAIL_ICONS = { phone: PhoneIcon, mail: MailIcon, location: LocationIcon };

/**
 * The page footer: the logo, a headline and an email field; quick links to the sections; the contact
 * details and social links. Below them, the copyright and a link back to the top. One column on phones,
 * two from 768px and three from 992px.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black-soft">
      <div className="section grid gap-10 py-15 md:grid-cols-2 md:gap-x-8 md:py-20 lg:grid-cols-[minmax(0,5.5fr)_minmax(0,2.5fr)_minmax(0,4fr)] lg:gap-x-7.5 lg:py-25 xl:grid-cols-[minmax(0,6fr)_minmax(0,2.5fr)_minmax(0,3.5fr)]">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-105 text-4xl leading-[1.2] md:text-[44px] lg:text-[50px]">
            <span className="font-bold">{FOOTER.headline[0]}</span>{' '}
            <span className="font-light text-white">{FOOTER.headline[1]}</span>
          </p>
          <FooterEmailForm />
        </div>

        <nav aria-labelledby="footer-links-title">
          <h2 id="footer-links-title" className="text-2xl leading-7.5 font-bold">
            {FOOTER.linksTitle}
          </h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {FOOTER.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-rubik text-[15px] leading-6 font-medium text-white transition-colors hover:text-pink-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-2xl leading-7.5 font-bold">{FOOTER.contactTitle}</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {SIDEBAR.contacts.map(({ icon, label, value, href }) => {
              const Icon = DETAIL_ICONS[icon];
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/8 bg-white/2 text-white">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="min-w-0 break-all sm:break-normal sm:whitespace-nowrap">{value}</span>
                </>
              );

              return (
                <li key={icon}>
                  {href ? (
                    <a
                      href={href}
                      aria-label={`${label}: ${value}`}
                      className="flex items-center gap-3 font-rubik text-sm text-white transition-colors hover:text-pink-primary"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 font-rubik text-sm text-white">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="section flex flex-col items-center justify-between gap-3 py-5 font-rubik text-sm text-gray-light sm:flex-row">
          <p>
            <span className="font-medium text-white">©{PROFILE.name}</span> {year} | {FOOTER.rights}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-7.5">
            {FOOTER.bottomLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-white transition-colors hover:text-pink-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
