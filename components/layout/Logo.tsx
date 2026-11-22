import Image from 'next/image';
import Link from 'next/link';

import { PROFILE } from '@/constants/profile';

/**
 * The logo mark and name, linking to the top of the home page. Used in the header, the side panel and the
 * footer. The mark is the pink "TB" monogram on a see-through background, so it suits both themes.
 */
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/#home" className="flex h-10.25 items-center gap-2" onClick={onClick}>
      <Image src="/images/logo-tb.webp" alt="" width={340} height={240} className="h-7.5 w-auto" />
      <span className="text-3xl font-bold">{PROFILE.name}</span>
    </Link>
  );
}
