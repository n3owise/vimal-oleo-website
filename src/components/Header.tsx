import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/#contact' },
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
    <motion.button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      onClick={onClick}
      className="inline-flex items-center justify-center p-2 text-white bg-transparent shadow-none md:hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-5 w-6">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            custom={index}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-1/2 h-0.5 w-6 origin-center bg-current"
            style={{ transform: 'translateY(-50%)' }}
          />
        ))}
      </div>
    </motion.button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;
  const isHomePage = currentPath === '/';
  const isAboutPage = currentPath === '/about';

  if (isAboutPage) {
    return (
      <>
        {/* Absolute header background for Logo (scrolls away) */}
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
          </div>
        </motion.header>

        {/* Fixed header container for Navigation (stays on scroll) */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-4 right-4 top-4 z-[1000] pointer-events-none sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
        >
          <div className="relative z-10 flex min-h-[76px] w-full items-center justify-between px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
            {/* Invisible spacer to maintain flex layout matching the logo */}
            <div className="w-[154px] max-w-[52vw] sm:w-[190px] lg:w-[215px]" />

            <div className="pointer-events-auto ml-auto flex items-center justify-end gap-8">
              {/* Navigation */}
              <nav className="hidden items-center rounded-full border border-white/30 bg-white/30 p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.4)] backdrop-blur-sm backdrop-saturate-[1.15] md:flex">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'rounded-full px-5 py-2.5 font-display text-sm font-bold transition-colors',
                      currentPath === item.href
                        ? 'bg-primary text-white shadow-md'
                        : 'text-primary hover:bg-white/50'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <MobileMenuCapsule isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
            </div>
          </div>

          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto absolute right-5 top-[calc(100%+0.75rem)] z-[1001] flex w-48 flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-display text-sm font-bold text-slate-900 transition-colors hover:bg-primary hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </motion.div>
      </>
    );
  }

  if (isHomePage) {
    return (
      <>
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 right-4 top-4 z-50 pointer-events-none py-6 sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
        >
          <div className="flex w-full items-center justify-between px-5 sm:px-8 lg:px-10">
            <a href="/" className="pointer-events-auto flex w-[154px] max-w-[52vw] items-center sm:w-[190px] lg:w-[215px]">
              <img
                src="/vinal-oleo-logo.svg"
                alt="Vimal Oleo Chemicals"
                className="block h-auto w-full"
              />
            </a>
          </div>
        </motion.header>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-4 right-4 top-4 z-50 pointer-events-none py-6 sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
        >
          <div className="flex w-full items-center justify-between px-5 sm:px-8 lg:px-10">
            <div className="w-[154px] max-w-[52vw] sm:w-[190px] lg:w-[215px]" />

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

              <MobileMenuCapsule isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
            </div>
          </div>

          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto absolute right-5 top-[5.5rem] z-50 flex w-48 flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-display text-sm font-bold text-slate-900 transition-colors hover:bg-primary hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 right-4 top-4 z-[1000] pointer-events-none sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
      >
        <div className="relative z-10 flex min-h-[76px] w-full items-center justify-between px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
          {/* Logo Section */}
          <a href="/" className="pointer-events-auto flex w-[154px] max-w-[52vw] items-center sm:w-[190px] lg:w-[215px]">
            <img
              src="/vinal-oleo-logo.svg"
              alt="Vimal Oleo Chemicals"
              className="block h-auto w-full"
            />
          </a>
        </div>
      </motion.header>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-4 right-4 top-4 z-[1000] pointer-events-none sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
      >
        <div className="relative z-10 flex min-h-[76px] w-full items-center justify-between px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
          <div className="w-[154px] max-w-[52vw] sm:w-[190px] lg:w-[215px]" />

          <div className="pointer-events-auto ml-auto flex items-center justify-end gap-8">
            {/* Navigation */}
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

            <MobileMenuCapsule isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute right-5 top-[calc(100%+0.75rem)] z-[1001] flex w-48 flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-sm font-bold text-slate-900 transition-colors hover:bg-primary hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </motion.div>
    </>
  );
}
