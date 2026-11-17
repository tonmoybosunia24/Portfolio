import Link from 'next/link';

import { ArrowRightIcon } from '@/components/ui/icons';

/** A small card inviting the reader to get in touch, in the colours of the home page's experience card. */
export default function ContactCta() {
  return (
    <div className="rounded-[20px] bg-linear-to-br from-feature-start to-feature-end p-6 text-feature-fg xl:p-7">
      <h2 className="text-2xl leading-8 font-bold">Have an app idea?</h2>
      <p className="mt-2 font-rubik text-[15px] leading-6.5 text-feature-fg/80">
        I can help you plan, design and build it for Android and iOS. Tell me about your project.
      </p>
      <Link
        href="/#contact"
        className="group mt-5 inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary bg-primary px-6 font-rubik text-[15px] font-medium tracking-[0.5px] text-white transition-colors duration-300 hover:bg-transparent hover:text-primary"
      >
        Let’s Talk
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
