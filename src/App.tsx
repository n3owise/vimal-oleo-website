import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Products } from '@/src/components/Products';
import { Reliability } from '@/src/components/Reliability';
import { Industries } from '@/src/components/Industries';
import { CertifiedTrust } from '@/src/components/CertifiedTrust';
import { Contact } from '@/src/components/Contact';
import { IndustryConceptsPreview } from '@/src/components/IndustryConceptsPreview';
import { IndustryStackPreview } from '@/src/components/IndustryStackPreview';
import { TrustPreview } from '@/src/components/TrustPreview';
import { TrustMobilePreview } from '@/src/components/TrustMobilePreview';
import { ContactPreview } from '@/src/components/ContactPreview';
import { FooterPreview } from '@/src/components/FooterPreview';
import { HeroNavPreview } from '@/src/components/HeroNavPreview';
import { Footer } from '@/src/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const isIndustryPreview = window.location.pathname === '/industry-preview';
  const isIndustryStackPreview = window.location.pathname === '/industry-stack-preview';
  const isTrustPreview = window.location.pathname === '/trust-preview';
  const isTrustMobilePreview = window.location.pathname === '/trust-mobile-preview';
  const isContactPreview = window.location.pathname === '/contact-preview';
  const isFooterPreview = window.location.pathname === '/footer-preview';
  const isHeroNavPreview = window.location.pathname === '/hero-nav-preview';
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

  if (isIndustryPreview) {
    return <IndustryConceptsPreview />;
  }

  if (isIndustryStackPreview) {
    return <IndustryStackPreview />;
  }

  if (isTrustPreview) {
    return <TrustPreview />;
  }

  if (isTrustMobilePreview) {
    return <TrustMobilePreview />;
  }

  if (isContactPreview) {
    return <ContactPreview />;
  }

  if (isFooterPreview) {
    return <FooterPreview />;
  }

  if (isHeroNavPreview) {
    return <HeroNavPreview />;
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
