import SiteShell from '@/components/layout/SiteShell';

import { TESTIMONIALS } from '@/constants/home/testimonials';

import AchievementsSection from './sections/AchievementsSection';
import BlogsSection from './sections/BlogsSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import ExpertiseSection from './sections/ExpertiseSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';
import TestimonialsSection from './sections/TestimonialsSection';

/** The portfolio home page: the sections in `sections/`, in page order. Parts only they use are in `components/`. */
export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <SkillsSection />
      <ExpertiseSection />
      <EducationSection />
      <ProjectsSection />
      {TESTIMONIALS.visible && <TestimonialsSection />}
      <BlogsSection />
      <ContactSection />
    </SiteShell>
  );
}
