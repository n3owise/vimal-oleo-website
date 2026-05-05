import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const navItems = ['Home', 'About Us', 'Products', 'Contact Us'];

type Variant = {
  id: string;
  name: string;
  description: string;
  buttonClass: string;
  iconClass: string;
  iconBars: string[];
  panelClass: string;
  panelAccentClass: string;
  activeIndex: number;
};

const variants: Variant[] = [
  {
    id: '01',
    name: 'Glass Bar',
    description: 'A slim pill with three lines and a soft glass dropdown.',
    buttonClass: 'rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]',
    iconClass: 'text-primary',
    iconBars: ['w-5', 'w-3.5', 'w-5'],
    panelClass: 'bg-white/92 border-white/70 shadow-2xl shadow-[#1d5fb8]/10 backdrop-blur-xl',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-[#1d5fb8]/20 to-transparent',
    activeIndex: 2,
  },
  {
    id: '02',
    name: 'Stacked Stroke',
    description: 'A hand-drawn feel with offset bars and a clean open card.',
    buttonClass: 'rounded-[1.1rem] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5 translate-y-[1px] -rotate-6', 'w-4', 'w-5 translate-y-[-1px] rotate-6'],
    panelClass: 'bg-[#f4f6f9] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/10 via-[#8fc2ff]/20 to-transparent',
    activeIndex: 1,
  },
  {
    id: '03',
    name: 'Editorial Bracket',
    description: 'Structured, with bracket-like framing and a premium list panel.',
    buttonClass: 'rounded-[0.95rem] border border-slate-200 bg-white shadow-[0_14px_28px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-4', 'w-6', 'w-4'],
    panelClass: 'bg-white border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-white to-transparent',
    activeIndex: 0,
  },
  {
    id: '04',
    name: 'Underline Drawer',
    description: 'Minimal closed icon with a wide bottom-sheet drawer.',
    buttonClass: 'rounded-[1rem] border border-white/40 bg-white/70 shadow-[0_10px_28px_rgba(29,95,184,0.12)] backdrop-blur-xl',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5', 'w-5', 'w-3.5'],
    panelClass: 'bg-[#eaf3ff] border-white/70 shadow-2xl shadow-[#1d5fb8]/10',
    panelAccentClass: 'bg-gradient-to-r from-white via-[#eaf3ff] to-[#b9d5ff]/20',
    activeIndex: 3,
  },
  {
    id: '05',
    name: 'Split Line',
    description: 'Two long bars and one short bar, with a crisp floating panel.',
    buttonClass: 'rounded-[0.95rem] border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.07)]',
    iconClass: 'text-slate-900',
    iconBars: ['w-6', 'w-3.5', 'w-6'],
    panelClass: 'bg-white border-slate-200 shadow-2xl shadow-slate-900/8',
    panelAccentClass: 'bg-gradient-to-r from-[#0d47a1]/12 via-transparent to-transparent',
    activeIndex: 1,
  },
  {
    id: '06',
    name: 'Capsule Toggle',
    description: 'A longer capsule shape with a tidy, spacious menu panel.',
    buttonClass: 'rounded-full border border-white/30 bg-[#f4f6f9] shadow-[0_12px_28px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-4', 'w-6', 'w-4'],
    panelClass: 'bg-white/95 border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.08] backdrop-blur-xl',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/15 via-[#eaf3ff] to-transparent',
    activeIndex: 2,
  },
  {
    id: '07',
    name: 'Minimal Mark',
    description: 'Thin lines, lots of whitespace, and a gentle open sheet.',
    buttonClass: 'rounded-[0.85rem] border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.05)]',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5 opacity-90', 'w-5 opacity-65', 'w-5 opacity-90'],
    panelClass: 'bg-[#f8fbff] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.05]',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-transparent to-transparent',
    activeIndex: 0,
  },
  {
    id: '08',
    name: 'Ribbon Drawer',
    description: 'A stretched button with a ribbon-like menu expansion.',
    buttonClass: 'rounded-[1.1rem] border border-[#b9d5ff] bg-white shadow-[0_14px_28px_rgba(29,95,184,0.08)]',
    iconClass: 'text-primary',
    iconBars: ['w-6', 'w-4', 'w-6'],
    panelClass: 'bg-white border-[#dbeafe] shadow-xl shadow-[#1d5fb8]/[0.08]',
    panelAccentClass: 'bg-gradient-to-r from-[#8fc2ff]/20 via-white to-transparent',
    activeIndex: 2,
  },
  {
    id: '09',
    name: 'Corner Editorial',
    description: 'A refined square-ish trigger and an orderly menu list.',
    buttonClass: 'rounded-[0.9rem] border border-slate-200 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.06)]',
    iconClass: 'text-slate-900',
    iconBars: ['w-3.5', 'w-6', 'w-3.5'],
    panelClass: 'bg-white border-slate-200 shadow-2xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-transparent via-[#eaf3ff] to-[#1d5fb8]/10',
    activeIndex: 3,
  },
  {
    id: '10',
    name: 'Clean Corporate',
    description: 'The safest version: simple, neat, and brand-aligned.',
    buttonClass: 'rounded-[1rem] border border-slate-200 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-5', 'w-5', 'w-5'],
    panelClass: 'bg-[#f4f6f9] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.05]',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/10 via-[#eaf3ff] to-transparent',
    activeIndex: 1,
  },
];

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
            <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Preview</span>
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
