import Image from 'next/image';
import Link from 'next/link';

import { PROFILE } from '@/constants/profile';

/** The logo mark and name, linking to the top of the home page. Used in the header, the side panel and the footer. */
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/#home" className="flex h-10.25 items-center gap-1" onClick={onClick}>
      <Image src="/images/logo.png" alt="" width={41} height={41} className="size-9" />
      <span className="text-3xl font-bold">{PROFILE.name}</span>
    </Link>
  );
}
