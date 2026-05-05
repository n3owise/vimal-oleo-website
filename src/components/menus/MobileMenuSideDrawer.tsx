import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type MenuItem = { label: string; href: string };

export default function MobileMenuSideDrawer({
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { x: '100%', transition: { type: 'spring', damping: 25, stiffness: 200 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          key="sidedrawer-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 z-[2000] bg-slate-900/20 backdrop-blur-[2px]"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            className="absolute bottom-0 right-0 top-0 flex w-[280px] max-w-[85vw] flex-col bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <span className="font-display text-lg font-bold text-slate-800">Menu</span>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col overflow-y-auto p-4 gap-2">
              {items.map((item) => {
                const currentPath = window.location.pathname;
                const currentHash = window.location.hash;
                const isActive = (item.href === '/' && currentPath === '/') || 
                               (item.href !== '/' && (currentPath === item.href || (currentPath + currentHash) === item.href));
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-xl px-5 py-4 font-display text-base font-bold transition-all ${
                      isActive
                        ? 'text-[#2563eb] bg-[#2563eb]/5'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            
            <div className="p-6 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Vimal Oleo Chemicals © 2026
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
