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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const isAboutPage = window.location.pathname === '/about';
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
