import { lazy, Suspense, useEffect } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Products } from '@/src/components/Products';
import { Reliability } from '@/src/components/Reliability';
import { Industries } from '@/src/components/Industries';
import { CertifiedTrust } from '@/src/components/CertifiedTrust';
import { AuthorizedDistributor } from '@/src/components/AuthorizedDistributor';
import { Contact } from '@/src/components/Contact';
import { Footer } from '@/src/components/Footer';
import { normalizePathname } from '@/src/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = lazy(() => import('@/src/pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ProductsPage = lazy(() => import('@/src/pages/ProductsPage').then((module) => ({ default: module.ProductsPage })));
const ContactPage = lazy(() => import('@/src/pages/ContactPage').then((module) => ({ default: module.ContactPage })));

function PageFallback() {
  return (
    <div role="status" aria-live="polite" className="grid min-h-screen place-items-center bg-surface px-6 text-center">
      <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Loading</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col bg-surface selection:bg-primary/10">
        <Header />
        <main className="flex flex-1 items-center justify-center px-6 py-40 text-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-primary">404</p>
            <h1 className="mt-4 font-display text-5xl font-black uppercase italic tracking-tight text-slate-950 sm:text-7xl">
              Page Not Found
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-relaxed text-text-slate sm:text-lg">
              The page you are looking for is not available on this website.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-display text-sm font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-slate-950"
            >
              Return Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default function App() {
  const currentPath = normalizePathname(window.location.pathname);
  const isHomePage = currentPath === '/';
  const isAboutPage = currentPath === '/about';
  const isContactPage = currentPath === '/contact-us';
  const isProductsPage = currentPath === '/products';
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Global ScrollTrigger refresh on mount
    ScrollTrigger.refresh();
  }, []);

  if (isAboutPage) {
    return (
      <MotionConfig reducedMotion="user">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100]"
          style={{ scaleX }}
        />
        <Suspense fallback={<PageFallback />}>
          <AboutPage />
        </Suspense>
      </MotionConfig>
    );
  }

  if (isContactPage) {
    return (
      <MotionConfig reducedMotion="user">
        <Suspense fallback={<PageFallback />}>
          <ContactPage />
        </Suspense>
      </MotionConfig>
    );
  }

  if (isProductsPage) {
    return (
      <MotionConfig reducedMotion="user">
        <Suspense fallback={<PageFallback />}>
          <ProductsPage />
        </Suspense>
      </MotionConfig>
    );
  }

  if (!isHomePage) {
    return <NotFoundPage />;
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-surface selection:bg-primary/10">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100]"
          style={{ scaleX }}
        />

        <Header />

        <main>
          <Hero />
          <Products />
          <Reliability />

          <Industries />
          <CertifiedTrust />
          <AuthorizedDistributor />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
