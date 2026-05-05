import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type MenuItem = { label: string; href: string };

export default function MobileMenuCircleReveal({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const circleVariants = {
    hidden: { clipPath: 'circle(0% at calc(100% - 40px) 40px)', opacity: 0 },
    visible: { 
      clipPath: 'circle(150% at calc(100% - 40px) 40px)', 
      opacity: 1,
      transition: { type: 'spring', damping: 30, stiffness: 100, mass: 1, staggerChildren: 0.1 }
    },
    exit: { 
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          key="circlereveal-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={circleVariants}
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-primary"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={24} strokeWidth={2} />
          </button>

          <nav className="flex w-full flex-col items-center gap-6 px-6">
            {items.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                variants={itemVariants}
                className={`relative overflow-hidden text-center font-display text-4xl font-black uppercase tracking-tighter transition-colors sm:text-5xl ${
                  window.location.pathname === item.href
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                {window.location.pathname === item.href && (
                  <motion.div 
                    layoutId="circle-reveal-active"
                    className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
                  />
                )}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
