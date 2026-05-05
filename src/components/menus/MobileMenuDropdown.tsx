import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type MenuItem = { label: string; href: string };

export default function MobileMenuDropdown({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
         setTimeout(onClose, 10);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const panelVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
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
          className="pointer-events-auto absolute right-5 top-[calc(100%+0.75rem)] z-[1001] flex w-48 flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-1 shadow-2xl md:hidden"
        >
          <div className="flex w-full flex-col">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`block w-full rounded px-4 py-3 font-display text-sm font-semibold transition-colors ${
                  window.location.pathname === item.href
                    ? 'bg-slate-100 text-primary'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
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
