import { LocationIcon, MailIcon, PhoneIcon, SOCIAL_ICONS } from '@/components/ui/icons';

import { FOOTER } from '@/constants/navigation';
import { PROFILE, SIDEBAR, SOCIALS } from '@/constants/profile';

import FooterEmailForm from './FooterEmailForm';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

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
        <div className="reveal md:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-105 text-4xl leading-[1.2] md:text-[44px] lg:text-[50px]">
            <span className="font-bold">{FOOTER.headline[0]}</span>{' '}
            <span className="font-light text-foreground">{FOOTER.headline[1]}</span>
          </p>
          <FooterEmailForm />
        </div>

        <nav aria-labelledby="footer-links-title" className="reveal reveal-delay-1">
          <h2 id="footer-links-title" className="text-2xl leading-7.5 font-bold">
            {FOOTER.linksTitle}
          </h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {FOOTER.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-rubik text-[15px] leading-6 font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="reveal reveal-delay-2">
          <h2 className="text-2xl leading-7.5 font-bold">{FOOTER.contactTitle}</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {SIDEBAR.contacts.map(({ icon, label, value, href }) => {
              const Icon = DETAIL_ICONS[icon];
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-foreground/8 bg-foreground/2 text-foreground">
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
                      className="flex items-center gap-3 font-rubik text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 font-rubik text-sm text-foreground">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </div>

      <div className="border-t border-foreground/8">
        <div className="section flex flex-col items-center justify-between gap-3 py-5 font-rubik text-sm text-gray-light sm:flex-row">
          <p>
            <span className="font-medium text-foreground">©{PROFILE.fullName}</span> {year} | {FOOTER.rights}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-7.5">
            {SOCIALS.filter(social => FOOTER.bottomSocials.includes(social.name)).map(({ name, label, href }) => {
              const Icon = SOCIAL_ICONS[name];

              return (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
