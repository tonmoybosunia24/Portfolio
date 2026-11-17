import { LocationIcon, MailIcon, PhoneIcon } from '@/components/ui/icons';

import { CONTACT, SIDEBAR } from '@/constants/profile';

import ContactForm from './ContactForm';

const DETAIL_ICONS = { phone: PhoneIcon, mail: MailIcon, location: LocationIcon };

/**
 * One large dark card: a big title and the contact details on the left, vertically centred, and the form
 * on the right (5:8, so the email address fits on one line on a 1280px screen). Stacked below 992px.
 */
export default function Contact() {
  const details = CONTACT.detailOrder.flatMap(icon => SIDEBAR.contacts.filter(contact => contact.icon === icon));

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <div className="grid items-center gap-10 rounded-3xl bg-black-soft px-5 py-10 md:rounded-4xl md:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-14 xl:gap-16 xl:px-20 xl:py-20">
          <div className="reveal-left">
            <h2
              id="contact-title"
              className="text-4xl leading-[1.15] font-bold md:text-5xl lg:text-[40px] xl:text-[46px] 2xl:text-[52px]"
            >
              {CONTACT.title}
            </h2>
            <p className="mt-4 font-rubik text-base leading-6.5 text-gray-light">{CONTACT.text}</p>

            <ul className="mt-6 flex flex-col gap-4">
              {details.map(({ icon, value, href }) => {
                const Icon = DETAIL_ICONS[icon];

                return (
                  <li key={icon} className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-foreground/8 bg-foreground/2 text-foreground">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs leading-4 font-semibold tracking-[0.5px] text-gray-light uppercase">
                        {CONTACT.detailLabels[icon]}:
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block font-rubik text-[15px] leading-6 wrap-break-word text-foreground transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="mt-0.5 block font-rubik text-[15px] leading-6 text-foreground">{value}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="reveal-right">
            <h3 className="mb-6 text-[28px] leading-tight font-bold uppercase md:text-[32px]">{CONTACT.formTitle}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
