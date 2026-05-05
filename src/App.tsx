import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Products } from '@/src/components/Products';
import { Reliability } from '@/src/components/Reliability';
import { Industries } from '@/src/components/Industries';
import { CertifiedTrust } from '@/src/components/CertifiedTrust';
import { Contact } from '@/src/components/Contact';
import { Footer } from '@/src/components/Footer';
import { AboutPage } from '@/src/pages/AboutPage';
import { NavLinkOptionsPage } from '@/src/pages/NavLinkOptionsPage';
import { PhilosophyOptionsPage } from '@/src/pages/PhilosophyOptionsPage';
import { SustainabilityOptionsPage } from '@/src/pages/SustainabilityOptionsPage';
import { ProductsPage } from '@/src/pages/ProductsPage';
import { MobileMenuOptionsPage } from '@/src/pages/MobileMenuOptionsPage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const isAboutPage = window.location.pathname === '/about';
  const isNavLinkOptionsPage = window.location.pathname === '/nav-link-options';
  const isPhilosophyOptionsPage = window.location.pathname === '/philosophy-options';
  const isSustainabilityOptionsPage = window.location.pathname === '/sustainability-options';
  const isMobileMenuOptionsPage = window.location.pathname === '/mobile-menu-options';
  const isProductsPage = window.location.pathname === '/products';
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
      <>
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-teal-500 origin-left z-[100]"
          style={{ scaleX }}
        />
        <AboutPage />
      </>
    );
  }

  if (isNavLinkOptionsPage) {
    return <NavLinkOptionsPage />;
  }

  if (isPhilosophyOptionsPage) {
    return <PhilosophyOptionsPage />;
  }

  if (isSustainabilityOptionsPage) {
    return <SustainabilityOptionsPage />;
  }

  if (isMobileMenuOptionsPage) {
    return <MobileMenuOptionsPage />;
  }

  if (isProductsPage) {
    return <ProductsPage />;
  }

  return (
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
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
