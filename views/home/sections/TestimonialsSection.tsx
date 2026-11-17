import SectionHeading from '@/components/ui/SectionHeading';

import { TESTIMONIALS } from '@/constants/home/testimonials';

import TestimonialSlider from '../components/TestimonialSlider';

/** Client reviews in a slider, the current one large in the middle. */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="pb-15 md:pb-20 lg:pb-30">
      <div className="section">
        <SectionHeading
          id="testimonials-title"
          label={TESTIMONIALS.label}
          title={TESTIMONIALS.title}
          description={TESTIMONIALS.description}
        />
        <div className="reveal mt-8 md:mt-12">
          <TestimonialSlider items={TESTIMONIALS.items} />
        </div>
      </div>
    </section>
  );
}
