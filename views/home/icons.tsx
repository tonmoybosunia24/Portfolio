import type { JSX } from 'react';

import type { ServiceIcon, SocialName } from '@/constants/profile';

interface IconProps {
  className?: string;
}

// Icons from the previous site. All are decorative: the button or link around them carries the name.
export function InstagramIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <rect width="17" height="17" x="3.5" y="3.5" rx="5.5" />
        <circle cx="12" cy="12" r="3.606" />
      </g>
      <circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
      <path
        fill="currentColor"
        d="M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z"
      />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
      />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z"
      />
    </svg>
  );
}

export const SOCIAL_ICONS: Record<SocialName, (props: IconProps) => JSX.Element> = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

export function MenuIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 7l10 10M7 17L17 7"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="2 2 20 20" className={className}>
      <path
        fill="currentColor"
        d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="1.5 2.5 21 19" className={className}>
      <g fill="currentColor">
        <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
        <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
      </g>
    </svg>
  );
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 384 512" className={className}>
      <path
        fill="currentColor"
        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128z"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      />
    </svg>
  );
}

/** Line icons for the service cards (in the style of Lucide), drawn with the text color. */
const SERVICE_ICON_PATHS: Record<ServiceIcon, string[]> = {
  phone: ['M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z', 'M12 18h.01'],
  layers: ['m12 2 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 17 9 5 9-5'],
  network: [
    'M12 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z',
    'M5.5 15.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z',
    'M18.5 15.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z',
    'm10.8 8.2-4 7.4M13.2 8.2l4 7.4M8 18h8',
  ],
  flame: [
    'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z',
  ],
  gauge: ['m12 14 4-4', 'M3.34 19a10 10 0 1 1 17.32 0'],
  rocket: [
    'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z',
    'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z',
    'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0',
    'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
  ],
};

export function ServiceIconSvg({ name, className }: IconProps & { name: ServiceIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {SERVICE_ICON_PATHS[name].map(d => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
    </svg>
  );
}

/** A large closing quote mark, drawn faintly behind each testimonial. */
export function QuoteIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10 11H6.2c.2-2.4 1.6-3.9 4-4.4V4C5.8 4.5 3 7.6 3 12.3V20h7v-9Zm11 0h-3.8c.2-2.4 1.6-3.9 4-4.4V4c-4.4.5-7.2 3.6-7.2 8.3V20h7v-9Z" />
    </svg>
  );
}
