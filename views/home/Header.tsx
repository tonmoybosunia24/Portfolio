'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { NAV_LINKS, PROFILE, SIDEBAR, SOCIALS } from '@/constants/profile';

import { CloseIcon, LocationIcon, MailIcon, MenuIcon, PhoneIcon, SOCIAL_ICONS } from './icons';

const CONTACT_ICONS = { phone: PhoneIcon, mail: MailIcon, location: LocationIcon };

const roundIcon =
  'flex size-10 items-center justify-center rounded-full bg-white-overlay transition-colors duration-300 hover:bg-pink-primary';

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#home" className="flex h-10.25 items-center gap-1" onClick={onClick}>
      <Image src="/images/logo.png" alt="" width={41} height={41} className="size-9" />
      <span className="text-3xl font-bold">{PROFILE.name}</span>
    </a>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex gap-2', className)}>
      {SOCIALS.map(social => {
        const Icon = SOCIAL_ICONS[social.name];

        return (
          <li key={social.name}>
            <a
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={roundIcon}
            >
              <Icon className="size-4.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Logo, links and social icons over the hero. The menu button opens a side panel: on phones and tablets
 * it holds the links (from the left), on desktops a short intro and contact details (from the right).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      // Give focus back to the button that opened the panel.
      if (wasOpen.current) menuButton.current?.focus();
      wasOpen.current = false;

      return;
    }

    wasOpen.current = true;
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section flex h-17.75 items-center justify-between xl:h-19.5">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'block px-3 py-1 text-base font-bold transition-colors hover:text-red-primary',
                    index === 0 && 'text-pink-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <SocialLinks className="hidden md:flex" />
          <button
            ref={menuButton}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="side-panel"
            onClick={() => setOpen(true)}
            className="flex size-10 items-center justify-center rounded-full border-2 border-pink-primary bg-pink-primary transition-colors duration-300 hover:bg-transparent hover:text-pink-primary"
          >
            <MenuIcon className="size-5.25" />
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          'fixed inset-0 z-40 bg-black/60 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        id="side-panel"
        role="dialog"
        aria-label="Menu"
        inert={!open}
        className={cn(
          'fixed top-0 left-0 z-50 flex h-dvh w-72 flex-col gap-6 overflow-y-auto bg-black-soft p-5 shadow-lg transition-transform duration-300 ease-in-out md:w-80 xl:right-0 xl:left-auto',
          open ? 'translate-x-0' : '-translate-x-full xl:translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Logo onClick={close} />
          <button ref={closeButton} type="button" aria-label="Close menu" onClick={close} className={roundIcon}>
            <CloseIcon className="size-4.5" />
          </button>
        </div>

        <nav aria-label="Menu links" className="xl:hidden">
          <ul className="flex flex-col uppercase">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href} className="border-b border-line py-2 text-lg first:border-t">
                <a
                  href={link.href}
                  onClick={close}
                  className={cn(
                    'block font-semibold text-gray-light transition-colors hover:text-red-primary',
                    index === 0 && 'font-bold text-pink-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden flex-col gap-5 xl:flex">
          <Image
            src="/images/sidebar-banner.png"
            alt=""
            width={340}
            height={196}
            sizes="280px"
            className="h-auto w-full rounded-lg"
          />
          <p className="text-xl leading-snug font-bold">{SIDEBAR.headline}</p>
          <p className="font-rubik text-sm text-gray-light">{SIDEBAR.text}</p>
          <ul className="flex flex-col gap-3">
            {SIDEBAR.contacts.map(contact => {
              const Icon = CONTACT_ICONS[contact.icon];

              return (
                <li key={contact.label} className="flex items-center gap-3">
                  <span className="rounded-md border border-white-overlay bg-dark p-2">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-pink-primary uppercase">{contact.label}</span>
                    {contact.href ? (
                      <a href={contact.href} className="font-rubik text-sm hover:underline">
                        {contact.value}
                      </a>
                    ) : (
                      <span className="font-rubik text-sm">{contact.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">FIND WITH ME</p>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
