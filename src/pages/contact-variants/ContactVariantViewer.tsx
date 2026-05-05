import { Variant01, Variant02, Variant03, Variant04, Variant05 } from '@/src/components/contact-variants/ContactVariants1';
import { Variant06, Variant07, Variant08, Variant09, Variant10 } from '@/src/components/contact-variants/ContactVariants2';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

export default function ContactVariantViewer() {
  const path = window.location.pathname;
  const match = path.match(/\/contact-variants\/(\d+)/);
  const variantId = match ? match[1] : null;

  let VariantComponent = Variant01;

  switch (variantId) {
    case '01': VariantComponent = Variant01; break;
    case '02': VariantComponent = Variant02; break;
    case '03': VariantComponent = Variant03; break;
    case '04': VariantComponent = Variant04; break;
    case '05': VariantComponent = Variant05; break;
    case '06': VariantComponent = Variant06; break;
    case '07': VariantComponent = Variant07; break;
    case '08': VariantComponent = Variant08; break;
    case '09': VariantComponent = Variant09; break;
    case '10': VariantComponent = Variant10; break;
    default: VariantComponent = Variant01; break;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <VariantComponent />
      </main>
      <Footer />
    </div>
  );
}