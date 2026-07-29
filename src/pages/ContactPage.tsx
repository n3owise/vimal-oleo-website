import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { ContactFormSection } from '@/src/components/ContactFormSection';

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
