import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/#contact' },
];

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
              <nav className="hidden items-center rounded-full border border-black/5 bg-gradient-to-r from-blue-50/80 via-white/80 to-blue-50/80 p-1.5 shadow-xl backdrop-blur-xl md:flex">
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

              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="rounded-full bg-primary/5 p-2 text-primary shadow-lg backdrop-blur-xl transition-colors hover:bg-primary/10 md:hidden"
              >
                <Menu size={20} />
              </button>
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 right-4 top-4 z-50 py-6 sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
      >
        <div className="flex w-full items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="flex w-[154px] max-w-[52vw] items-center sm:w-[190px] lg:w-[215px]">
            <img
              src="/vinal-oleo-logo.svg"
              alt="Vimal Oleo Chemicals"
              className="block h-auto w-full"
            />
          </a>

          <div className="ml-auto flex items-center justify-end gap-8">
            <nav className="hidden items-center rounded-full border border-white/25 bg-white/15 p-1.5 shadow-xl backdrop-blur-xl md:flex">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-full px-5 py-2.5 font-display text-sm font-bold transition-colors',
                    index === 0 ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/15'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full bg-white/15 p-2 text-white shadow-lg backdrop-blur-xl transition-colors hover:text-white/75 md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-5 top-[5.5rem] z-50 flex w-48 flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
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
      </motion.header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-4 right-4 top-4 z-[1000] sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[116px] bg-white sm:h-[132px] lg:h-[152px]" />
      <div className="relative z-10 isolate overflow-hidden rounded-[1.7rem] bg-primary shadow-2xl shadow-primary/15 ring-1 ring-white/20">
        <video
          aria-hidden="true"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
        >
          <source src="/hero-flowing-elements.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f9fbfc]/20 via-[#0d47a1]/88 to-[#002a45]/92" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-white/[0.08]" />

        <div className="relative z-10 flex min-h-[76px] w-full items-center justify-between px-5 py-3 sm:min-h-[88px] sm:px-8 lg:min-h-[104px] lg:px-10">
          {/* Logo Section */}
          <a href="/" className="flex w-[154px] max-w-[52vw] items-center sm:w-[190px] lg:w-[215px]">
            <img
              src="/vinal-oleo-logo.svg"
              alt="Vimal Oleo Chemicals"
              className="block h-auto w-full brightness-0 invert"
            />
        </a>

        <div className="ml-auto flex items-center justify-end gap-8">
          {/* Navigation */}
          <nav
            className="hidden items-center rounded-full border border-white/25 bg-white/14 p-1.5 shadow-lg shadow-black/10 backdrop-blur-xl md:flex"
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'rounded-full px-5 py-2.5 font-display text-sm font-bold transition-colors',
                  currentPath === item.href
                    ? 'bg-white text-primary shadow-sm'
                    : index === 0 && currentPath === '/'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-white hover:bg-white/15'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full border border-white/25 bg-white/15 p-2 text-white shadow-lg backdrop-blur-xl transition-colors hover:text-white/75 md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-5 top-[calc(100%+0.75rem)] z-[1001] flex w-48 flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
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
    </motion.header>
  );
}
