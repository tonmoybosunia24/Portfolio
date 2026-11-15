import { TESTIMONIALS } from '@/constants/profile';

import SectionHeading from './SectionHeading';
import TestimonialSlider from './TestimonialSlider';

/** Client reviews in a slider, the current one large in the middle. */
export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="testimonials-title"
          label={TESTIMONIALS.label}
          title={TESTIMONIALS.title}
          description={TESTIMONIALS.description}
        />
        <div className="mt-8 md:mt-12">
          <TestimonialSlider items={TESTIMONIALS.items} />
        </div>
      </div>
    </section>
  );
}
