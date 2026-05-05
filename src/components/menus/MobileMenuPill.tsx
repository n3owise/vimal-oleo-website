import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type MenuItem = { label: string; href: string };

export default function MobileMenuPill({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      // Find the toggle button so we don't immediately close if they clicked it
      // but in this setup the toggle is handled externally. Use simple outside detection.
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
         setTimeout(onClose, 10);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          ref={panelRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
          className="pointer-events-auto absolute right-5 top-[calc(100%+0.75rem)] z-[1001] flex w-48 flex-col overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-xl backdrop-saturate-[1.15] md:hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.32))' }}
          />

          <div className="relative z-10 flex w-full flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`block w-full rounded-2xl px-4 py-3 font-display text-sm font-bold transition-colors ${
                  window.location.pathname === item.href
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
