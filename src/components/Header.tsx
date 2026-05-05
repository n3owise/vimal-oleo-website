import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';
import FullScreenMenu from './FullScreenMenu';
import MobileMenuPill from './menus/MobileMenuPill';
import MobileMenuDropdown from './menus/MobileMenuDropdown';
import MobileMenuSideDrawer from './menus/MobileMenuSideDrawer';
import MobileMenuBottomSheet from './menus/MobileMenuBottomSheet';
import MobileMenuCircleReveal from './menus/MobileMenuCircleReveal';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact-variants/01' },
];

// Mobile Menu Capsule Toggle Component
function MobileMenuCapsule({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const lineVariants = {
    closed: (index: number) => ({
      y: index === 0 ? -6 : index === 2 ? 6 : 0,
      rotate: 0,
      opacity: 1,
    }),
    open: (index: number) => ({
      y: 0,
      rotate: index === 0 ? 45 : index === 2 ? -45 : 0,
      opacity: index === 1 ? 0 : 1,
    }),
  };

  return (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center p-2 bg-transparent shadow-none md:hidden transition-transform active:scale-95"
      )}
    >
      <div className="relative h-5 w-6">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            custom={index}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-6 origin-center",
              isOpen ? "bg-black" : "bg-transparent"
            )}
            style={{ 
              transform: 'translateY(-50%)',
              backdropFilter: isOpen ? 'none' : 'invert(100%) grayscale(100%) contrast(100)',
              WebkitBackdropFilter: isOpen ? 'none' : 'invert(100%) grayscale(100%) contrast(100)'
            }}
          />
        ))}
      </div>
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 right-4 top-4 z-[1000] pointer-events-none sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
      >
        <div className="relative z-10 flex min-h-[76px] w-full items-center justify-between px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
          <a href="/" className="pointer-events-auto flex w-[154px] max-w-[52vw] items-center sm:w-[190px] lg:w-[215px]">
            <img
              src="/vinal-oleo-logo.svg"
              alt="Vimal Oleo Chemicals"
              className="block h-auto w-full"
            />
          </a>

          <div className="pointer-events-auto ml-auto flex items-center justify-end gap-8">
            <nav className="hidden items-center rounded-full border border-white/30 bg-white/30 p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.4)] backdrop-blur-sm backdrop-saturate-[1.15] md:flex">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-full px-5 py-2.5 font-display text-sm font-bold transition-colors',
                    currentPath === item.href || (index === 0 && currentPath === '/')
                      ? 'bg-primary text-white shadow-md'
                      : 'text-primary hover:bg-white/50'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Menu Icon container using backdrop-filter on the child lines instead of mix-blend-difference */}
      <div className="fixed left-4 right-4 top-4 z-[1000] pointer-events-none sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14">
        <div className="relative z-10 flex min-h-[76px] w-full items-center justify-end px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
          <div className="pointer-events-auto">
            <MobileMenuCapsule isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
          </div>
        </div>
      </div>

      <div className="pointer-events-auto fixed left-4 right-4 top-4 z-[1000] md:hidden sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14">
        <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} items={navItems} />
      </div>
    </>
  );
}
