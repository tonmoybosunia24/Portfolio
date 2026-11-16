import Achievements from './Achievements';
import Contact from './Contact';
import Education from './Education';
import Expertise from './Expertise';
import Footer from './Footer';
import GlowTracker from './GlowTracker';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import ScrollReveal from './ScrollReveal';
import Services from './Services';
import Skills from './Skills';
import Testimonials from './Testimonials';

/** The portfolio home page. Sections are added below the hero one at a time. */
export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Services />
        <Achievements />
        <Skills />
        <Expertise />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <GlowTracker />
      <ScrollReveal />
    </div>
  );
}
