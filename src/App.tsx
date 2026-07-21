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
const ContactVariantViewer = lazy(() => import('@/src/pages/contact-variants/ContactVariantViewer'));

function PageFallback() {
  return <div className="min-h-screen bg-surface" />;
}

export default function App() {
  const currentPath = normalizePathname(window.location.pathname);
  const isAboutPage = currentPath === '/about';
  const isContactPage = currentPath === '/contact-us' || currentPath.startsWith('/contact-variants/');
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
          className="fixed top-0 left-0 right-0 h-[2px] bg-teal-500 origin-left z-[100]"
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
          <ContactVariantViewer />
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

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-surface selection:bg-primary/10">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-teal-500 origin-left z-[100]"
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
