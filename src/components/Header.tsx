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
        <a href="#" className="block w-[145px] max-w-[44vw] sm:w-[190px] lg:w-[215px]">
          <img
            src="/final-logo.png"
            alt="Vimal Oleo Chemicals"
            className="block h-auto w-full"
          />
        </a>

        <div className="ml-auto flex items-center justify-end gap-8">
          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
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
                  "text-sm font-display font-bold tracking-normal transition-colors underline-offset-4",
                  index === 0 && "underline",
                  "text-white hover:text-white/75"
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
