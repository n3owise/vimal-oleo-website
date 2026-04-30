import { ChevronDown, CircleDot, LayoutGrid, MoveRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = ['Home', 'About Us', 'Products', 'Contact Us'];

type Variant = {
  id: string;
  name: string;
  description: string;
  frameClass: string;
  itemClass: string;
  activeClass: string;
  inactiveClass: string;
  decoration?: 'dot' | 'underline' | 'arrow' | 'grid' | 'chevron';
};

const variants: Variant[] = [
  {
    id: '01',
    name: 'Soft Glass Pill',
    description: 'Closest to the current style, cleaner and more balanced.',
    frameClass: 'border-white/30 bg-white/14 shadow-xl shadow-[#001e38]/15 backdrop-blur-2xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-white text-[#0d47a1] shadow-sm shadow-white/20',
    inactiveClass: 'text-white hover:bg-white/14',
  },
  {
    id: '02',
    name: 'Light Capsule',
    description: 'Brighter glass bar with high readability.',
    frameClass: 'border-white/45 bg-white/82 shadow-2xl shadow-[#001e38]/12 backdrop-blur-xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-[#eaf3ff] text-[#1d5fb8] shadow-sm',
    inactiveClass: 'text-[#001e38] hover:bg-[#f4f6f9]',
  },
  {
    id: '03',
    name: 'Blue Tint Frost',
    description: 'Light blue glass matching the product section.',
    frameClass: 'border-[#b9d5ff]/60 bg-[#eaf3ff]/72 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-2xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-white text-[#1d5fb8] shadow-sm',
    inactiveClass: 'text-[#0d47a1] hover:bg-white/55',
  },
  {
    id: '04',
    name: 'Underline Glass',
    description: 'Simple labels with a precise active underline.',
    frameClass: 'border-white/25 bg-white/12 shadow-xl shadow-[#001e38]/10 backdrop-blur-xl',
    itemClass: 'px-5 py-3',
    activeClass: 'text-white',
    inactiveClass: 'text-white/72 hover:text-white',
    decoration: 'underline',
  },
  {
    id: '05',
    name: 'Dot Indicator',
    description: 'Compact link bar with subtle active dot.',
    frameClass: 'border-white/30 bg-white/16 shadow-xl shadow-[#001e38]/12 backdrop-blur-2xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-white/18 text-white',
    inactiveClass: 'text-white/76 hover:bg-white/10 hover:text-white',
    decoration: 'dot',
  },
  {
    id: '06',
    name: 'Inset Active',
    description: 'More premium, with a soft inner active surface.',
    frameClass: 'border-white/35 bg-white/20 shadow-2xl shadow-[#001e38]/15 backdrop-blur-2xl ring-1 ring-white/10',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-white/92 text-[#0d47a1] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_22px_rgba(0,30,56,0.12)]',
    inactiveClass: 'text-white hover:bg-white/12',
  },
  {
    id: '07',
    name: 'Separated Pills',
    description: 'Each link has its own light glass boundary.',
    frameClass: 'border-white/20 bg-white/8 shadow-xl shadow-[#001e38]/10 backdrop-blur-xl',
    itemClass: 'mx-0.5 border border-white/18 px-4 py-2.5',
    activeClass: 'border-white bg-white text-[#0d47a1] shadow-sm',
    inactiveClass: 'text-white hover:border-white/35 hover:bg-white/12',
  },
  {
    id: '08',
    name: 'Product Blue',
    description: 'Uses the product marquee blue as the active surface.',
    frameClass: 'border-white/40 bg-white/86 shadow-xl shadow-[#1d5fb8]/12 backdrop-blur-xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-[#1d5fb8] text-white shadow-sm shadow-[#1d5fb8]/20',
    inactiveClass: 'text-[#001e38] hover:bg-[#eaf3ff] hover:text-[#1d5fb8]',
  },
  {
    id: '09',
    name: 'Utility Glass',
    description: 'Operational and sharp while staying rounded.',
    frameClass: 'border-white/35 bg-white/14 shadow-xl shadow-[#001e38]/12 backdrop-blur-2xl',
    itemClass: 'px-4 py-2.5',
    activeClass: 'bg-white text-[#0d47a1] shadow-sm',
    inactiveClass: 'text-white/78 hover:bg-white/12 hover:text-white',
    decoration: 'grid',
  },
  {
    id: '10',
    name: 'Arrow Active',
    description: 'Clear active state with a small directional cue.',
    frameClass: 'border-white/35 bg-white/18 shadow-2xl shadow-[#001e38]/14 backdrop-blur-2xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-white text-[#0d47a1] shadow-sm',
    inactiveClass: 'text-white hover:bg-white/12',
    decoration: 'arrow',
  },
  {
    id: '11',
    name: 'Minimal White',
    description: 'Clean white navigation for stronger contrast on the video frame.',
    frameClass: 'border-white/55 bg-white/92 shadow-2xl shadow-[#001e38]/14 backdrop-blur-xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'bg-[#eaf3ff] text-[#1d5fb8]',
    inactiveClass: 'text-[#001e38] hover:bg-slate-50',
    decoration: 'chevron',
  },
  {
    id: '12',
    name: 'Floating Line',
    description: 'Lightest visual weight, best if the banner should dominate.',
    frameClass: 'border-white/20 bg-white/10 shadow-lg shadow-[#001e38]/8 backdrop-blur-xl',
    itemClass: 'px-5 py-2.5',
    activeClass: 'text-white',
    inactiveClass: 'text-white/70 hover:text-white',
    decoration: 'underline',
  },
];

function Decoration({ type, active }: { type?: Variant['decoration']; active: boolean }) {
  if (!active) return null;

  if (type === 'dot') {
    return <CircleDot size={12} className="ml-2 text-white" />;
  }

  if (type === 'arrow') {
    return <MoveRight size={14} className="ml-2" />;
  }

  if (type === 'grid') {
    return <LayoutGrid size={13} className="mr-2" />;
  }

  if (type === 'chevron') {
    return <ChevronDown size={14} className="ml-2" />;
  }

  return null;
}

function NavBarPreview({ variant }: { variant: Variant }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.7rem] bg-primary p-5 shadow-2xl shadow-primary/15 ring-1 ring-white/20 sm:p-6">
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

      <div className="relative z-10 flex min-h-[86px] items-center justify-between gap-6">
        <a href="/" className="flex w-[172px] shrink-0 items-center">
          <img src="/vinal-oleo-logo.svg" alt="Vimal Oleo Chemicals" className="block h-auto w-full brightness-0 invert" />
        </a>

        <nav className={cn('hidden items-center rounded-full p-1.5 md:flex', variant.frameClass)}>
          {navItems.map((item, index) => {
            const active = index === 1;

            return (
              <a
                key={item}
                href="#"
                className={cn(
                  'relative inline-flex items-center justify-center rounded-full font-display text-sm font-bold transition-all duration-200',
                  variant.itemClass,
                  active ? variant.activeClass : variant.inactiveClass
                )}
              >
                <Decoration type={variant.decoration} active={active && variant.decoration === 'grid'} />
                {item}
                <Decoration type={variant.decoration} active={active && variant.decoration !== 'grid' && variant.decoration !== 'underline'} />
                {active && variant.decoration === 'underline' && (
                  <span className="absolute bottom-1.5 left-5 right-5 h-0.5 rounded-full bg-current" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function NavLinkOptionsPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.35em] text-[#1d5fb8]">Navigation Link Bar</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-950">
            Link Bar<br />
            <span className="italic text-[#1d5fb8]">Variations.</span>
          </h1>
        </div>

        <div className="grid gap-6">
          {variants.map((variant) => (
            <section key={variant.id} className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-[#1d5fb8]/[0.06] sm:p-5">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-[#1d5fb8]">
                    {variant.id}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-slate-950">
                    {variant.name}
                  </h2>
                </div>
                <p className="max-w-xl text-sm font-medium leading-relaxed text-text-slate">
                  {variant.description}
                </p>
              </div>

              <NavBarPreview variant={variant} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
