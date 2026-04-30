import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { AboutTimeline } from '@/src/components/AboutTimeline';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-text-main selection:bg-primary/10">
      <Header />

      <main>
        <AboutTimeline />
      </main>

      <Footer />
    </div>
  );
}
