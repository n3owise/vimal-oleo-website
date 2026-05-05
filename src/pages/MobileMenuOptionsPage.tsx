import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';
import variants, { Variant } from '@/src/lib/menu-variants';

const navItems = ['Home', 'About Us', 'Products', 'Contact Us'];

function MenuIcon({ bars, className }: { bars: string[]; className: string }) {
  return (
    <span className={cn('flex h-5 w-6 flex-col justify-between', className)} aria-hidden="true">
      {bars.map((bar, index) => (
        <span key={index} className={cn('block h-0.5 rounded-full bg-current', bar)} />
      ))}
    </span>
  );
}

function PreviewCard({ variant }: { variant: Variant }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-[#1d5fb8]/[0.06] sm:p-5">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-[#1d5fb8]">{variant.id}</p>
          <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-slate-950">{variant.name}</h2>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-text-slate">{variant.description}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.55fr_1.45fr]">
        <div className={cn('flex min-h-[260px] flex-col justify-between p-5', variant.buttonClass)}>
          <div className="flex items-center justify-between">
            <a href="/" className="flex w-[108px] items-center opacity-80">
              <img src="/vinal-oleo-logo.svg" alt="Vimal Oleo Chemicals" className="block h-auto w-full brightness-0 saturate-100" />
            </a>
            <div className="flex items-center justify-center">
              <MenuIcon bars={variant.iconBars} className={variant.iconClass} />
            </div>
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-slate-200 bg-white/75 p-4 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Mobile Trigger</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-text-slate">Tap area stays pill-like but the menu mark is not circular.</p>
          </div>
        </div>

        <div className={cn('relative overflow-hidden rounded-[1.6rem] border p-5', variant.panelClass)}>
          <div className={cn('pointer-events-none absolute inset-0', variant.panelAccentClass)} />
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-display text-xs font-black uppercase tracking-[0.28em] text-primary">OPEN MENU</span>
            <div className="flex items-center gap-2">
              <a
                href={`/mobile-menu/${variant.id}`}
                className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white"
              >
                Try
              </a>
              <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Preview</span>
            </div>
          </div>
          <div className="relative z-10 mt-5 grid gap-3">
            {navItems.map((item, index) => (
              <div
                key={item}
                className={cn(
                  'flex items-center justify-between rounded-2xl px-4 py-3 font-display text-sm font-bold uppercase tracking-tight',
                  index === variant.activeIndex
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-slate-200 bg-white/80 text-slate-700'
                )}
              >
                <span>{item}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] opacity-70">Link</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MobileMenuOptionsPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.35em] text-[#1d5fb8]">Mobile Menu Options</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-950">
            Menu<br />
            <span className="italic text-[#1d5fb8]">Variations.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">
            Ten separate preview concepts for the mobile menu button and the opened menu state. Pick one and I will implement it on the site.
          </p>
        </div>

        <div className="grid gap-6">
          {variants.map((variant) => (
            <motion.section
              key={variant.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <PreviewCard variant={variant} />
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
