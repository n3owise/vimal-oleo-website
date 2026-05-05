import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type MenuItem = { label: string; href: string };

export default function MobileMenuBottomSheet({
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
    hidden: { y: '100%' },
    visible: { y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { y: '100%', transition: { type: 'spring', damping: 25, stiffness: 200 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          key="bottomsheet-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 z-[2000] bg-slate-900/40 backdrop-blur-sm"
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
            className="absolute bottom-0 left-0 right-0 flex max-h-[85vh] flex-col rounded-t-[2rem] bg-white pt-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
          >
            {/* Grab handle indicator */}
            <div className="flex w-full justify-center pb-2 pt-2">
              <div className="h-1.5 w-12 rounded-full bg-slate-200" />
            </div>

            <div className="flex items-center justify-between px-6 pb-4 pt-2">
              <span className="font-display text-xl font-black text-slate-900">Explore</span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 overflow-y-auto px-6 pb-12 pt-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block rounded-2xl p-4 font-display text-lg font-bold transition-all ${
                    window.location.pathname === item.href
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-slate-50 text-slate-700 active:scale-95'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
