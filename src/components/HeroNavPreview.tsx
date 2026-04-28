import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Circle, Menu, Search } from 'lucide-react';

import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';
import { cn } from '@/src/lib/utils';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
];

type HighlightBox = {
  left: number;
  width: number;
};

type NavVariantProps = {
  option: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function Logo() {
  return (
    <a href="#" className="block w-[145px] max-w-[44vw] sm:w-[190px]">
      <img src="/final-logo.png" alt="Vimal Oleo Chemicals" className="block h-auto w-full" />
    </a>
  );
}

function HeroFrame({ option, title, description, children }: NavVariantProps) {
  return (
    <section id={`option-${option}`} className="bg-surface px-4 py-12 sm:px-8 lg:px-14">
      <div className="mx-auto mb-5 flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-[11px] font-black uppercase italic tracking-[0.24em] text-primary">[ Option {option} ]</span>
          <h2 className="mt-2 font-display text-3xl font-black uppercase italic leading-none tracking-tighter text-slate-950 sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-md text-sm font-semibold leading-relaxed text-text-slate">{description}</p>
      </div>

      <div className="relative isolate mx-auto min-h-[520px] max-w-7xl overflow-hidden rounded-[2rem] bg-primary shadow-2xl [clip-path:inset(0_round_2rem)]">
        <video
          aria-label="Hero navigation preview background"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[82%_center] sm:object-center"
        >
          <source src="/hero-flowing-elements.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-surface/85 via-surface/58 to-primary/25" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />

        <div className="relative z-10 flex items-center justify-between px-5 py-7 sm:px-8 lg:px-10">
          <Logo />
          {children}
        </div>

        <div className="relative z-10 flex min-h-[410px] items-center px-7 pb-12 pt-14 sm:px-12">
          <div className="max-w-3xl">
            <h3 className="font-display text-[clamp(2rem,7vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-900">
              High-Quality<br />
              Oleo Chemicals.<br />
              <span className="italic text-primary">Delivered with<br />Reliability.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewIntro() {
  return (
    <section className="bg-surface px-5 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <span className={sectionEyebrowClass}>[ HERO NAVIGATION PREVIEW ]</span>
        <h1 className={sectionHeadingClass}>
          HERO NAV<br />
          <span className="text-primary">VARIATIONS.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
          Thirteen separate navigation link styles inside the hero frame, including liquid-glass hover and drag concepts. The live homepage navigation is unchanged.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {Array.from({ length: 13 }, (_, index) => (
            <a key={index} href={`#option-${String(index + 1).padStart(2, '0')}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary">
              Option {String(index + 1).padStart(2, '0')}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function NavTextUnderline() {
  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navItems.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            'relative font-display text-sm font-bold text-white transition-colors hover:text-white/75',
            'after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100',
            index === 0 && 'after:scale-x-100',
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function NavGlassPills() {
  return (
    <nav className="hidden items-center rounded-full border border-white/25 bg-white/15 p-1.5 shadow-xl backdrop-blur-xl md:flex">
      {navItems.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            'rounded-full px-5 py-2.5 font-display text-sm font-bold text-white transition-colors',
            index === 0 ? 'bg-white text-primary shadow-sm' : 'hover:bg-white/15',
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function NavDarkCapsule() {
  return (
    <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-950/90 p-1.5 shadow-2xl md:flex">
      {navItems.map((item, index) => (
        <a key={item.label} href={item.href} className={cn('rounded-full px-5 py-2.5 font-mono text-[10px] font-black uppercase tracking-[0.18em] transition-colors', index === 0 ? 'bg-primary text-white' : 'text-white/70 hover:bg-white/10 hover:text-white')}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function NavNumbered() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map((item, index) => (
        <a key={item.label} href={item.href} className="group flex items-center gap-2 font-display text-sm font-bold text-white">
          <span className="font-mono text-[10px] font-black tracking-[0.18em] text-white/45">0{index + 1}</span>
          <span className="transition-colors group-hover:text-white/75">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

function NavSplitCta() {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <nav className="flex items-center gap-8">
        {navItems.slice(0, 3).map((item) => (
          <a key={item.label} href={item.href} className="font-display text-sm font-bold text-white transition-colors hover:text-white/75">
            {item.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-black text-primary shadow-lg transition-transform hover:-translate-y-0.5">
        Contact Us <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

function NavBracket() {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      {navItems.map((item, index) => (
        <a key={item.label} href={item.href} className={cn('font-mono text-[11px] font-black uppercase tracking-[0.2em] transition-colors', index === 0 ? 'text-white' : 'text-white/65 hover:text-white')}>
          [ {item.label} ]
        </a>
      ))}
    </nav>
  );
}

function NavFloatingCards() {
  return (
    <nav className="hidden items-center gap-2 md:flex">
      {navItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          whileHover={{ y: -3 }}
          className={cn('rounded-2xl border px-4 py-3 font-display text-sm font-bold shadow-lg backdrop-blur-md transition-colors', index === 0 ? 'border-white bg-white text-primary' : 'border-white/20 bg-white/12 text-white hover:bg-white/20')}
        >
          {item.label}
        </motion.a>
      ))}
    </nav>
  );
}

function NavDotRail() {
  return (
    <nav className="hidden items-center gap-7 md:flex">
      {navItems.map((item, index) => (
        <a key={item.label} href={item.href} className="group flex items-center gap-2 font-display text-sm font-bold text-white">
          <Circle size={index === 0 ? 9 : 6} fill="currentColor" className={cn(index === 0 ? 'text-white' : 'text-white/35 group-hover:text-white')} />
          <span className={cn(index === 0 ? 'text-white' : 'text-white/65 group-hover:text-white')}>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

function NavUtilityBar() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <nav className="flex items-center gap-7 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">
        {navItems.map((item, index) => (
          <a key={item.label} href={item.href} className={cn('font-display text-sm font-bold transition-colors', index === 0 ? 'text-white underline underline-offset-4' : 'text-white/70 hover:text-white')}>
            {item.label}
          </a>
        ))}
      </nav>
      <button aria-label="Search" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl">
        <Search size={17} />
      </button>
    </div>
  );
}

function NavDropdownStyle() {
  return (
    <nav className="hidden items-center gap-2 md:flex">
      {navItems.map((item, index) => (
        <a key={item.label} href={item.href} className={cn('inline-flex items-center gap-1 rounded-full px-4 py-2.5 font-display text-sm font-bold transition-colors', index === 0 ? 'bg-white/95 text-primary' : 'text-white hover:bg-white/12')}>
          {item.label}
          {item.label === 'Products' && <ChevronDown size={14} />}
        </a>
      ))}
    </nav>
  );
}

function LiquidGlassDefs() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
      <filter id="liquid-glass-ripple">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.035" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

function LiquidGlassNav({
  tone = 'clear',
  compact = false,
}: {
  tone?: 'clear' | 'blue' | 'dark';
  compact?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [highlight, setHighlight] = useState<HighlightBox>({ left: 6, width: 86 });

  const moveToIndex = (index: number) => {
    const container = containerRef.current;
    const item = itemRefs.current[index];

    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    setActiveIndex(index);
    setHighlight({
      left: itemRect.left - containerRect.left,
      width: itemRect.width,
    });
  };

  const moveToPointer = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const centerDistances = itemRefs.current.map((item, index) => {
      if (!item) return { index, distance: Number.POSITIVE_INFINITY };
      const rect = item.getBoundingClientRect();
      return {
        index,
        distance: Math.abs(clientX - (rect.left + rect.width / 2)),
      };
    });

    const nearest = centerDistances.sort((a, b) => a.distance - b.distance)[0];
    moveToIndex(nearest.index);
  };

  const shellClass = {
    clear: 'border-white/30 bg-white/15 shadow-[0_18px_60px_rgba(15,23,42,0.18)]',
    blue: 'border-white/35 bg-primary/20 shadow-[0_18px_60px_rgba(0,70,150,0.25)]',
    dark: 'border-white/10 bg-slate-950/55 shadow-[0_18px_60px_rgba(2,8,23,0.35)]',
  }[tone];

  const highlightClass = {
    clear: 'border-white/65 bg-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-18px_40px_rgba(255,255,255,0.18),0_12px_36px_rgba(255,255,255,0.16)]',
    blue: 'border-white/65 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-18px_40px_rgba(46,110,210,0.28),0_12px_36px_rgba(25,90,180,0.22)]',
    dark: 'border-white/25 bg-white/16 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-18px_40px_rgba(255,255,255,0.08),0_12px_36px_rgba(0,0,0,0.28)]',
  }[tone];

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => {
        setIsDragging(false);
        moveToIndex(0);
      }}
      onPointerMove={(event) => {
        if (isDragging) moveToPointer(event.clientX);
      }}
      onPointerUp={() => setIsDragging(false)}
      onPointerCancel={() => setIsDragging(false)}
      className={cn(
        'relative hidden select-none items-center overflow-hidden rounded-full border p-1.5 backdrop-blur-2xl md:flex',
        shellClass,
      )}
      style={{ WebkitBackdropFilter: 'blur(22px) saturate(170%)', backdropFilter: 'blur(22px) saturate(170%)' }}
    >
      <LiquidGlassDefs />
      <motion.div
        className={cn(
          'absolute top-1.5 rounded-full border backdrop-blur-2xl',
          compact ? 'h-[38px]' : 'h-[44px]',
          highlightClass,
        )}
        animate={{
          x: highlight.left,
          width: highlight.width,
          scale: isDragging ? 1.05 : 1,
          borderRadius: isDragging ? 18 : 999,
        }}
        transition={{
          type: 'spring',
          stiffness: isDragging ? 520 : 380,
          damping: isDragging ? 30 : 34,
          mass: 0.75,
        }}
        style={{ filter: 'url(#liquid-glass-ripple)' }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.16),transparent_35%)]"
        animate={{ opacity: isDragging ? 0.95 : 0.68 }}
      />
      {navItems.map((item, index) => (
        <a
          key={item.label}
          ref={(node) => {
            itemRefs.current[index] = node;
            if (index === 0 && node && highlight.width === 86) {
              requestAnimationFrame(() => moveToIndex(0));
            }
          }}
          href={item.href}
          onMouseEnter={() => moveToIndex(index)}
          onPointerDown={(event) => {
            setIsDragging(true);
            moveToPointer(event.clientX);
          }}
          className={cn(
            'relative z-10 cursor-grab rounded-full text-center font-display text-sm font-bold transition-colors active:cursor-grabbing',
            compact ? 'px-4 py-2.5' : 'px-5 py-3',
            activeIndex === index ? 'text-white' : 'text-white/72 hover:text-white',
          )}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function MobileButton() {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-lg md:hidden">
      <Menu size={19} />
    </button>
  );
}

export function HeroNavPreview() {
  return (
    <main className="min-h-screen bg-surface">
      <PreviewIntro />
      <HeroFrame option="01" title="Underline Classic" description="Closest to the current style, but with a more refined animated underline.">
        <NavTextUnderline />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="02" title="Glass Pill Menu" description="A polished translucent pill that feels built into the hero frame.">
        <NavGlassPills />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="03" title="Dark Capsule" description="High contrast and premium, useful when the video behind the nav is bright.">
        <NavDarkCapsule />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="04" title="Numbered Links" description="Editorial numbered navigation with a technical, structured feel.">
        <NavNumbered />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="05" title="Contact CTA Split" description="Keeps main links simple and makes contact more action-oriented.">
        <NavSplitCta />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="06" title="Bracket Mono" description="Uses the same bracket language as your section labels for consistency.">
        <NavBracket />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="07" title="Floating Cards" description="Individual glass cards with a subtle lift interaction.">
        <NavFloatingCards />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="08" title="Dot Rail" description="A clean status-indicator style that feels precise and lightweight.">
        <NavDotRail />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="09" title="Utility Bar" description="A compact nav bar with a small utility icon for a more product-like feel.">
        <NavUtilityBar />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="10" title="Soft Dropdown" description="A familiar website navigation style with a products dropdown hint.">
        <NavDropdownStyle />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="11" title="Liquid Glass Hover" description="A clear glass selector follows hover and slides back to Home when the mouse leaves. Drag across the links to scrub the selector.">
        <LiquidGlassNav tone="clear" />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="12" title="Blue Liquid Glass" description="Same live hover and drag behavior, tuned with a cooler blue glass tint for the Vimal color palette.">
        <LiquidGlassNav tone="blue" />
        <MobileButton />
      </HeroFrame>
      <HeroFrame option="13" title="Dark Liquid Glass" description="A darker native-glass feel that reads well on bright video frames while keeping the selector fluid.">
        <LiquidGlassNav tone="dark" compact />
        <MobileButton />
      </HeroFrame>
    </main>
  );
}
