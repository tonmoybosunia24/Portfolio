import type { ReactNode } from 'react';

import Footer from './Footer';
import GlowTracker from './GlowTracker';
import Header from './Header';
import ScrollReveal from './ScrollReveal';

/**
 * The frame of every portfolio page: the header, the page's own content in `<main>`, the footer, and the
 * page-wide helpers for card glows and scroll reveals. Horizontal overflow is clipped, so content sliding
 * in from the side never adds a horizontal scrollbar.
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-clip">
      <Header />
      <main>{children}</main>
      <Footer />
      <GlowTracker />
      <ScrollReveal />
    </div>
  );
}
