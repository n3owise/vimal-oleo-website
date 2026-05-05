import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type MenuItem = { label: string; href: string };

export default function FullScreenMenu({
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

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const overlayVariants = {
    hidden: { opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' },
    visible: { 
      opacity: 1, 
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], staggerChildren: 0.08, delayChildren: 0.2 }
    },
    exit: { 
      opacity: 0, 
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          key="fs-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 z-[2000] flex flex-col bg-white px-6 py-8"
        >
          <div className="flex w-full items-center justify-between">
            <span className="font-display text-2xl font-black tracking-tighter text-black">
              MENU
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:scale-105 active:scale-95 transition-transform"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          <nav className="mt-auto mb-auto flex w-full flex-col items-start gap-4 sm:gap-6">
            {items.map((item, i) => {
              const currentPath = window.location.pathname;
              const currentHash = window.location.hash;
              // Check if either path or path+hash matches exactly
              const isActive = (item.href === '/' && currentPath === '/') || 
                             (item.href !== '/' && (currentPath === item.href || (currentPath + currentHash) === item.href));
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  variants={itemVariants}
                  className={`group relative font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter overflow-hidden transition-colors duration-300 ${
                    isActive ? 'text-[#0D47A2]' : 'text-black hover:text-[#0D47A2]'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <span className={`hidden sm:block text-xl sm:text-2xl font-bold transition-opacity ${isActive ? 'opacity-80' : 'opacity-30 group-hover:opacity-80'}`}>
                      0{i + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                </motion.a>
              );
            })}
          </nav>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-4 border-t border-black/20 pt-6 font-medium text-black sm:flex-row"
          >
            <div className="opacity-60">© 2026 Vimal Oleo Chemicals</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
