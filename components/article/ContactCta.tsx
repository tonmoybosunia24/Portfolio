import Link from 'next/link';

import { ArrowRightIcon } from '@/components/ui/icons';

/** A small card inviting the reader to get in touch, in the colours of the home page's experience card. */
export default function ContactCta() {
  return (
    <div className="rounded-[20px] bg-linear-to-br from-[#211a1d] to-[#6d0e2c] p-6 text-white xl:p-7">
      <h2 className="text-2xl leading-8 font-bold">Have an app idea?</h2>
      <p className="mt-2 font-rubik text-[15px] leading-6.5 text-white/80">
        I can help you plan, design and build it for Android and iOS. Tell me about your project.
      </p>
      <Link
        href="/#contact"
        className="group mt-5 inline-flex h-12 items-center gap-2 rounded-full border-2 border-pink-primary bg-pink-primary px-6 font-rubik text-[15px] font-medium tracking-[0.5px] text-white transition-colors duration-300 hover:bg-transparent hover:text-pink-primary"
      >
        Let’s Talk
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
