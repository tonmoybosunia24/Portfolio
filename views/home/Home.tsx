import SiteShell from '@/components/layout/SiteShell';

import Achievements from './Achievements';
import Blogs from './Blogs';
import Contact from './Contact';
import Education from './Education';
import Expertise from './Expertise';
import Hero from './Hero';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import Testimonials from './Testimonials';

/** The portfolio home page. Sections are added below the hero one at a time. */
export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Services />
      <Achievements />
      <Skills />
      <Expertise />
      <Education />
      <Projects />
      <Testimonials />
      <Blogs />
      <Contact />
    </SiteShell>
  );
}
