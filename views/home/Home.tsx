import Header from './Header';
import Hero from './Hero';

/** The portfolio home page. Sections are added below the hero one at a time. */
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
