import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import variants, { Variant } from '@/src/lib/menu-variants';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/#contact' },
];

function AnimatedBars({ bars, open, colorClass = 'text-white' }: { bars: string[]; open: boolean; colorClass?: string }) {
  const variantsBar = {
    closed: (i: number) => ({ y: i === 0 ? -7 : i === 2 ? 7 : 0, rotate: 0, opacity: 1 }),
    open: (i: number) => ({ y: 0, rotate: i === 0 ? 45 : i === 2 ? -45 : 0, opacity: i === 1 ? 0 : 1 }),
  };

  return (
    <span className={cn('flex h-5 w-6 flex-col justify-between', colorClass)} aria-hidden>
      {bars.map((b, i) => (
        <motion.span
          key={i}
          className={cn('block h-0.5 rounded-full bg-current', b)}
          custom={i}
          variants={variantsBar}
          animate={open ? 'open' : 'closed'}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </span>
  );
}

function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (ev: MouseEvent) => {
      if (!ref.current || ref.current.contains(ev.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

function InteractiveDemo({ variant }: { variant: Variant }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(panelRef, () => setOpen(false));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // prevent body scroll for heavier overlays
    if (open && (variant.mode === 'fullscreen' || variant.mode.startsWith('side') || variant.mode === 'bottom-sheet' || variant.mode === 'center-modal')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open, variant.mode]);

  const MenuLinks = (
    <nav aria-label="Primary mobile">
      <ul className="flex flex-col gap-3">
        {navItems.map((n) => (
          <li key={n.label}>
            <a
              href={n.href}
              className="block rounded-xl px-4 py-3 font-display text-sm font-bold text-slate-900 hover:bg-primary hover:text-white"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Render per-mode panels
  return (
    <div className="relative mx-auto max-w-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black">{variant.name}</h3>
        <button
          aria-expanded={open}
          aria-controls={`menu-${variant.id}`}
          onClick={() => setOpen((s) => !s)}
          className={cn('inline-flex items-center justify-center rounded-md p-2 focus:outline-none', variant.iconClass)}
        >
          <AnimatedBars bars={variant.iconBars} open={open} colorClass={variant.iconClass} />
        </button>
      </div>

      <div className="mt-6">
        {/* Dropdown */}
        {variant.mode === 'dropdown' && (
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.24 }}
                  className={cn('absolute right-0 z-40 w-56 rounded-xl border p-2', variant.panelClass)}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.35))' }} />
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="h-2" />
          </div>
        )}

        {/* Card (drop) */}
        {variant.mode === 'card' && (
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ opacity: 0, y: -18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.32 }}
                  className={cn('z-40 rounded-2xl border p-4', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Bracket */}
        {variant.mode === 'bracket' && (
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className={cn('z-40 rounded-2xl border p-4', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom sheet */}
        {variant.mode === 'bottom-sheet' && (
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="fixed inset-0 z-40 bg-black/30"
                  onClick={() => setOpen(false)}
                />

                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.32 }}
                  className={cn('fixed left-0 right-0 bottom-0 z-50 rounded-t-2xl border p-4', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}

        {/* Side panel right */}
        {variant.mode === 'side-panel-right' && (
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="fixed inset-0 z-40 bg-black/30"
                  onClick={() => setOpen(false)}
                />
                <motion.aside
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.34 }}
                  className={cn('fixed right-0 top-0 bottom-0 z-50 w-[84%] p-6', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        )}

        {/* Capsule dropdown */}
        {variant.mode === 'capsule-dropdown' && (
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className={cn('absolute right-0 z-40 w-64 rounded-2xl border p-3', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Center modal */}
        {variant.mode === 'center-modal' && (
          <AnimatePresence>
            {open && (
              <>
                <motion.div className="fixed inset-0 z-40 bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className={cn('fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-6', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}

        {/* Side panel left */}
        {variant.mode === 'side-panel-left' && (
          <AnimatePresence>
            {open && (
              <>
                <motion.div className="fixed inset-0 z-40 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
                <motion.aside
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.34 }}
                  className={cn('fixed left-0 top-0 bottom-0 z-50 w-[78%] p-6', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        )}

        {/* Corner menu */}
        {variant.mode === 'corner-menu' && (
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  id={`menu-${variant.id}`}
                  ref={panelRef}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={cn('absolute right-0 z-40 w-56 rounded-xl border p-2', variant.panelClass)}
                >
                  <div className="relative z-10">{MenuLinks}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Fullscreen */}
        {variant.mode === 'fullscreen' && (
          <AnimatePresence>
            {open && (
              <>
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <motion.div className={cn('absolute inset-0', variant.panelClass)} initial={{ opacity: 0.9 }} animate={{ opacity: 0.98 }} exit={{ opacity: 0.9 }} />
                  <div className="relative z-50 mx-auto w-full max-w-2xl px-6">
                    <div className="grid gap-6">{MenuLinks}</div>
                  </div>
                </motion.div>
                <motion.div className="fixed inset-0 z-40" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} exit={{ opacity: 0 }} />
              </>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export function MobileMenuViewer() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const parts = path.split('/').filter(Boolean);
  const id = parts[parts.length - 1] || '';
  const variant = variants.find((v) => v.id === id);

  if (!variant) {
    return (
      <div className="min-h-screen p-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black">Unknown menu variant</h2>
          <p className="mt-3 text-sm text-text-slate">Variant "{id}" not found. Go back to <a href="/mobile-menu-options" className="text-primary font-bold">options</a>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <a href="/mobile-menu-options" className="text-sm font-bold text-primary">← Back</a>
          <span className="text-sm text-text-slate">Interactive preview — {variant.name}</span>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-lg">
          <p className="mb-4 text-sm text-text-slate">Tap the icon to open the menu. Links are functional and will navigate the app.</p>
          <InteractiveDemo variant={variant} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenuViewer;
