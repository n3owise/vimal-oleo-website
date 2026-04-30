import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-4 right-4 top-4 z-50 py-6 sm:left-8 sm:right-8 sm:top-6 lg:left-14 lg:right-14"
    >
      <div className="flex w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo Section */}
        <a href="#" className="flex w-[64px] max-w-[22vw] items-center sm:w-[190px] lg:w-[215px]">
          <img
            src="/vimal-logo-mobile.svg"
            alt="Vimal Oleo Chemicals"
            className="md:hidden block h-auto w-full"
          />
          <img
            src="/vinal-oleo-logo.svg"
            alt="Vimal Oleo Chemicals"
            className="hidden md:block h-auto w-full object-contain"
          />
        </a>

        <div className="ml-auto flex items-center justify-end gap-8">
          {/* Navigation */}
          <nav className="hidden items-center rounded-full border border-white/25 bg-white/15 p-1.5 shadow-xl backdrop-blur-xl md:flex">
            {[
              { label: 'Home', href: '#' },
              { label: 'About Us', href: '#why-us' },
              { label: 'Products', href: '#products' },
              { label: 'Contact Us', href: '#contact' }
            ].map((item, index) => (
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

          <button className="p-2 text-white transition-colors hover:text-white/75 md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
