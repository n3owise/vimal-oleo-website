import { cn } from '@/src/lib/utils';

const navItems = ['Home', 'About Us', 'Products', 'Contact Us'];

type Variant = {
  id: string;
  name: string;
  description: string;
  frameClass: string;
  videoClass?: string;
  overlayClass: string;
  accentClass?: string;
  contentClass?: string;
  logoClass?: string;
};

const variants: Variant[] = [
  {
    id: '01',
    name: 'Hero Glass Frame',
    description: 'The current video-backed blue frame, balanced for the site theme.',
    frameClass: 'rounded-[1.7rem] bg-primary shadow-2xl shadow-primary/15 ring-1 ring-white/20',
    videoClass: 'opacity-30 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-[#f9fbfc]/20 via-[#0d47a1]/88 to-[#002a45]/92',
    accentClass: 'inset-x-0 top-0 h-12 bg-white/[0.08]',
  },
  {
    id: '02',
    name: 'Soft Product Blue',
    description: 'A lighter blue banner using the product-section color family.',
    frameClass: 'rounded-[1.7rem] bg-[#eaf3ff] shadow-2xl shadow-[#1d5fb8]/12 ring-1 ring-[#b9d5ff]/70',
    videoClass: 'opacity-18 mix-blend-multiply',
    overlayClass: 'bg-gradient-to-r from-white/82 via-[#eaf3ff]/72 to-[#b9d5ff]/80',
    accentClass: 'inset-x-0 top-0 h-12 bg-white/35',
    logoClass: 'brightness-0 saturate-100',
  },
  {
    id: '03',
    name: 'White Glass Banner',
    description: 'Clean white logo side with a blue nav-side wash for contrast.',
    frameClass: 'rounded-[1.7rem] bg-white shadow-2xl shadow-[#1d5fb8]/10 ring-1 ring-slate-200',
    videoClass: 'opacity-16 mix-blend-multiply',
    overlayClass: 'bg-gradient-to-r from-white/94 via-[#eaf3ff]/82 to-[#0d47a1]/88',
    accentClass: 'inset-x-0 bottom-0 h-px bg-[#b9d5ff]',
    logoClass: 'brightness-0 saturate-100',
  },
  {
    id: '04',
    name: 'Tall Air Frame',
    description: 'More vertical breathing room while preserving the current nav pill.',
    frameClass: 'rounded-[2rem] bg-primary shadow-2xl shadow-primary/15 ring-1 ring-white/20',
    videoClass: 'opacity-28 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-[#f9fbfc]/18 via-[#0d47a1]/82 to-[#00385f]/90',
    accentClass: 'inset-x-0 top-0 h-16 bg-white/[0.075]',
    contentClass: 'min-h-[124px] lg:min-h-[132px]',
  },
  {
    id: '05',
    name: 'Slim Banner',
    description: 'Lower height and tighter frame for a more compact topbar.',
    frameClass: 'rounded-[1.35rem] bg-primary shadow-xl shadow-primary/12 ring-1 ring-white/20',
    videoClass: 'opacity-26 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-[#f9fbfc]/16 via-[#0d47a1]/86 to-[#002a45]/90',
    accentClass: 'inset-x-0 top-0 h-9 bg-white/[0.07]',
    contentClass: 'min-h-[78px] lg:min-h-[84px]',
  },
  {
    id: '06',
    name: 'Inset White Rim',
    description: 'Blue video frame with a brighter internal border.',
    frameClass: 'rounded-[1.9rem] bg-primary shadow-2xl shadow-primary/15 ring-1 ring-white/25',
    videoClass: 'opacity-32 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-[#f9fbfc]/18 via-[#0d47a1]/86 to-[#002a45]/90',
    accentClass: 'inset-3 rounded-[1.45rem] border border-white/18',
  },
  {
    id: '07',
    name: 'Floating Frost',
    description: 'Less saturated, glassier banner with a pale industrial feel.',
    frameClass: 'rounded-[1.7rem] bg-[#f4f6f9] shadow-2xl shadow-[#1d5fb8]/10 ring-1 ring-white',
    videoClass: 'opacity-22 mix-blend-multiply',
    overlayClass: 'bg-gradient-to-r from-white/78 via-[#ddecff]/72 to-[#1d5fb8]/84',
    accentClass: 'inset-x-8 top-0 h-px bg-white/80',
    logoClass: 'brightness-0 saturate-100',
  },
  {
    id: '08',
    name: 'Deep Edge Light',
    description: 'Keeps the brand-blue frame but adds a softer white edge glow.',
    frameClass: 'rounded-[1.7rem] bg-primary shadow-[0_24px_70px_rgba(13,71,161,0.18)] ring-1 ring-white/25',
    videoClass: 'opacity-34 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-white/22 via-[#0d47a1]/82 to-[#004a82]/88',
    accentClass: 'inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.28),transparent_34%)]',
  },
  {
    id: '09',
    name: 'Split Glow Frame',
    description: 'Light on the logo side, stronger blue behind the nav side.',
    frameClass: 'rounded-[1.7rem] bg-primary shadow-2xl shadow-primary/15 ring-1 ring-white/20',
    videoClass: 'opacity-28 mix-blend-screen',
    overlayClass: 'bg-gradient-to-r from-[#f9fbfc]/46 via-[#6ea8f3]/38 to-[#002a45]/92',
    accentClass: 'inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/18 to-transparent',
  },
  {
    id: '10',
    name: 'Clean Corporate',
    description: 'Restrained white/blue header for non-home pages with strong readability.',
    frameClass: 'rounded-[1.7rem] bg-white shadow-2xl shadow-[#1d5fb8]/10 ring-1 ring-slate-200',
    videoClass: 'opacity-10 mix-blend-multiply',
    overlayClass: 'bg-gradient-to-r from-white via-[#f4f6f9]/92 to-[#0d47a1]/88',
    accentClass: 'inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0d47a1]/60 to-transparent',
    logoClass: 'brightness-0 saturate-100',
  },
];

function NavBarPreview({ variant }: { variant: Variant }) {
  const darkLogo = variant.logoClass?.includes('brightness-0 saturate-100');

  return (
    <div className={cn('relative isolate overflow-hidden p-5 sm:p-6', variant.frameClass)}>
      <video
        aria-hidden="true"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        className={cn('pointer-events-none absolute inset-0 h-full w-full object-cover', variant.videoClass)}
      >
        <source src="/hero-flowing-elements.mp4" type="video/mp4" />
      </video>
      <div className={cn('pointer-events-none absolute inset-0', variant.overlayClass)} />
      {variant.accentClass && <div className={cn('pointer-events-none absolute', variant.accentClass)} />}

      <div className={cn('relative z-10 flex min-h-[96px] items-center justify-between gap-6', variant.contentClass)}>
        <a href="/" className="flex w-[172px] shrink-0 items-center">
          <img
            src="/vinal-oleo-logo.svg"
            alt="Vimal Oleo Chemicals"
            className={cn('block h-auto w-full', darkLogo ? 'brightness-0 saturate-100' : 'brightness-0 invert')}
          />
        </a>

        <nav className="hidden items-center rounded-full border border-white/25 bg-white/14 p-1.5 shadow-lg shadow-black/10 backdrop-blur-xl md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={cn(
                'rounded-full px-5 py-2.5 font-display text-sm font-bold transition-colors',
                index === 1 ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/15'
              )}
            >
              {item}
            </a>
          ))}
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
          <p className="font-display text-xs font-black uppercase tracking-[0.35em] text-[#1d5fb8]">Header Banner</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-950">
            Banner<br />
            <span className="italic text-[#1d5fb8]">Variations.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">
            The navigation links stay in the same glass pill style. Only the surrounding header banner changes.
          </p>
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
