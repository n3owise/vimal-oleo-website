import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { AboutTimeline } from '@/src/components/AboutTimeline';
import { SustainabilityChapter } from '@/src/components/SustainabilityChapter';
import { OurPhilosophy } from '@/src/components/OurPhilosophy';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-text-main selection:bg-primary/10">
      <Header />

      <main>
        <AboutTimeline />
        <SustainabilityChapter />
        <OurPhilosophy />
      </main>

      <Footer />
    </div>
  );
}
