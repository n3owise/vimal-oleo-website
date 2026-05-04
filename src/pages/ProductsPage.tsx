import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Droplets, Factory, FlaskConical, Leaf, PackageCheck, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

const ZigZag = ({ nodes }: { nodes: number }) => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    {Array.from({ length: nodes - 1 }, (_, i) => (
      <line
        key={i}
        x1={4 + i * (56 / (nodes - 1))}
        y1={i % 2 === 0 ? 30 : 20}
        x2={4 + (i + 1) * (56 / (nodes - 1))}
        y2={i % 2 === 0 ? 20 : 30}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ))}
    {Array.from({ length: nodes }, (_, i) => (
      <circle key={i} cx={4 + i * (56 / (nodes - 1))} cy={i % 2 === 0 ? 30 : 20} r="1.8" fill="currentColor" opacity="0.5" />
    ))}
    <text x={54} y={17} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={52} y={31} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const GlycerolIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    <line x1={16} y1={36} x2={32} y2={24} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1={32} y1={24} x2={48} y2={36} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1={16} y1={36} x2={8} y2={28} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1={32} y1={24} x2={32} y2={12} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1={48} y1={36} x2={56} y2={28} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <text x={2} y={28} fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
    <text x={28} y={10} fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
    <text x={50} y={28} fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
    <circle cx={16} cy={36} r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx={32} cy={24} r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx={48} cy={36} r="2.5" fill="currentColor" opacity="0.5" />
  </svg>
);

const SoapIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    <circle cx={32} cy={13} r={8} stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <text x={26} y={16} fontSize="7" fill="currentColor" fontFamily="monospace">Na+</text>
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={i} x1={28 + i * 1.5} y1={21 + i * 5} x2={36 - i * 1.5} y2={26 + i * 5} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <circle cx={32} cy={44} r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const OleicIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1={4 + i * 8} y1={i % 2 === 0 ? 30 : 22} x2={4 + (i + 1) * 8} y2={i % 2 === 0 ? 22 : 30} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <line x1={36} y1={22} x2={44} y2={22} stroke="currentColor" strokeWidth="1.5" />
    <line x1={36} y1={27} x2={44} y2={27} stroke="currentColor" strokeWidth="1.5" />
    {[0, 1, 2].map((i) => (
      <line key={i} x1={44 + i * 7} y1={i % 2 === 0 ? 22 : 30} x2={44 + (i + 1) * 7} y2={i % 2 === 0 ? 30 : 22} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <text x={55} y={18} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={53} y={34} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const MixedIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    {[0, 1, 2, 3].map((i) => (
      <line key={`a${i}`} x1={4 + i * 7} y1={i % 2 === 0 ? 22 : 30} x2={4 + (i + 1) * 7} y2={i % 2 === 0 ? 30 : 22} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    {[0, 1, 2, 3].map((i) => (
      <line key={`b${i}`} x1={34 + i * 7} y1={i % 2 === 0 ? 22 : 30} x2={34 + (i + 1) * 7} y2={i % 2 === 0 ? 30 : 22} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    ))}
    <line x1={28} y1={26} x2={34} y2={26} stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
  </svg>
);

const HydIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '48px', height: '48px' }}>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={i} x1={4 + i * 9} y1={i % 2 === 0 ? 30 : 22} x2={4 + (i + 1) * 9} y2={i % 2 === 0 ? 22 : 30} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    {[1, 3, 5].map((i) => (
      <line key={`h${i}`} x1={4 + i * 9} y1={i % 2 === 0 ? 30 : 22} x2={4 + i * 9} y2={i % 2 === 0 ? 38 : 14} stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    ))}
    <text x={56} y={19} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={54} y={33} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const heroCopy = {
  eyebrow: '[ PRODUCTS ]',
  title: 'Building industries with sustainable and reliable solutions.',
  description:
    'We offer a wide portfolio of oleochemical products that serve as key ingredients and performance enhancers across diverse industries. Our range is designed to deliver consistency, efficiency, and reliability, helping our customers improve processing, product quality, and sustainability.',
};

const productSignals = [
  { label: 'Oleochemical Range', icon: FlaskConical },
  { label: 'Reliable Supply', icon: Box },
  { label: 'Sustainable Solutions', icon: Leaf },
];

const productStory = [
  {
    name: 'Stearic Acid',
    tag: 'Rubber / Plastics / Candles',
    description:
      'Applied in rubber, plastics, candles, and cosmetics. It works as a stabilizer and processing aid across various industries.',
  },
  {
    name: 'Glycerine',
    tag: 'Food / Pharma / Cosmetics',
    description:
      'Refined glycerine suitable for food, pharmaceutical, cosmetic, and industrial applications, offering excellent humectant and solvent properties.',
  },
  {
    name: 'Distilled Coconut Fatty Acid',
    tag: 'Soap / Detergent / Personal Care',
    description:
      'Derived from coconut oil, widely used in soaps, detergents, and personal care for its foaming and cleansing properties.',
  },
  {
    name: 'Hydrogenated Technical Oil',
    tag: 'Lubricants / Coatings / Textiles',
    description:
      'A stable oil used in lubricants, coatings, and textiles. Its oxidative stability makes it ideal for industrial processes.',
  },
  {
    name: 'Hydrogenated Palm Stearin',
    tag: 'Flexible Formulation',
    description:
      'We partner with formulators by offering flexible, reliable ingredients that make product development easier, faster, and more consistent.',
  },
  {
    name: 'Soya-based Distilled Fatty Acid',
    tag: 'Flexible Formulation',
    description:
      'We partner with formulators by offering flexible, reliable ingredients that make product development easier, faster, and more consistent.',
  },
  {
    name: 'Rice Bran Fatty Acid',
    tag: 'Flexible Formulation',
    description:
      'We partner with formulators by offering flexible, reliable ingredients that make product development easier, faster, and more consistent.',
  },
  {
    name: 'Soap Noodles (All Grades)',
    tag: 'Toilet / Laundry Soap',
    description:
      'The base for toilet and laundry soap manufacturing, offering consistent quality, easy processing, and compatibility with additives.',
  },
  {
    name: 'Lauric Acid',
    tag: 'Soaps / Shampoos / Surfactants',
    description:
      'Known for strong foaming and cleansing, it is a key ingredient in soaps, shampoos, detergents, and surfactants.',
  },
  {
    name: 'Myristic Acid',
    tag: 'Cosmetics / Creams / Lotions',
    description:
      'A fatty acid used in cosmetics, creams, lotions, and fragrances. It adds smoothness, mildness, and emollient properties.',
  },
  {
    name: 'Palm Fatty Acid',
    tag: 'Cosmetics / Creams / Lotions',
    description:
      'A fatty acid used in cosmetics, creams, lotions, and fragrances. It adds smoothness, mildness, and emollient properties.',
  },
  {
    name: 'Oleic Acid',
    tag: 'Lubricants / Textiles / Cosmetics',
    description:
      'An unsaturated fatty acid used in lubricants, coatings, textiles, and cosmetics. It improves softness, stability, and spreadability.',
  },
  {
    name: 'Palmitic Acid',
    tag: 'Soaps / Cosmetics / Surfactants',
    description:
      'A fatty acid used in soaps, cosmetics, and surfactants. It provides hardness, stability, and texture in personal care and industrial applications.',
  },
];

const heroOptions = [
  { id: '01', label: 'Split Glass' },
  { id: '02', label: 'Full Image' },
  { id: '03', label: 'Editorial' },
  { id: '04', label: 'Product Cards' },
  { id: '05', label: 'Blueprint' },
];

const storyOptions = [
  { id: '01', label: 'Timeline Atlas' },
  { id: '02', label: '3D Product Deck' },
  { id: '03', label: 'Floating Map' },
  { id: '04', label: 'Pinned Showcase' },
  { id: '05', label: 'Horizontal Rail' },
  { id: '06', label: 'Spotlight Tabs' },
  { id: '07', label: 'Bento Flow' },
  { id: '08', label: 'Image Catalog' },
];

function StyleSelector({
  eyebrow,
  title,
  description,
  options,
  active,
  onChange,
}: {
  eyebrow: string;
  title: string;
  description: string;
  options: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <section className="bg-white px-6 pb-10 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-[#f4f6f9] p-5 shadow-xl shadow-[#1d5fb8]/[0.06] sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl font-black uppercase italic tracking-tight text-slate-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-text-slate">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => onChange(option.id)}
                className={cn(
                  'rounded-full px-4 py-2.5 font-display text-xs font-black uppercase tracking-[0.08em] transition-colors',
                  active === option.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-[#eaf3ff] hover:text-primary'
                )}
              >
                {option.id} {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ className }: { className?: string }) {
  return (
    <span className={cn('mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary', className)}>
      {heroCopy.eyebrow}
    </span>
  );
}

function ProductSignalRow({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {productSignals.map((item) => (
        <span
          key={item.label}
          className={cn(
            'inline-flex items-center gap-2 rounded-full border px-4 py-2 font-display text-[11px] font-black uppercase tracking-[0.12em]',
            light
              ? 'border-white/30 bg-white/15 text-white backdrop-blur-xl'
              : 'border-slate-200 bg-white text-primary shadow-sm'
          )}
        >
          <item.icon size={15} strokeWidth={1.8} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function SplitGlassHero() {
  return (
    <section className="bg-white px-6 pb-20 pt-[148px] sm:px-8 sm:pt-[164px] lg:px-14 lg:pt-[184px]">
      <div className="mx-auto grid min-h-[calc(100svh-12rem)] max-w-7xl gap-8 rounded-[2.5rem] border border-slate-200 bg-[#f4f6f9] p-6 shadow-2xl shadow-[#1d5fb8]/10 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:p-10">
        <div className="flex flex-col justify-center py-8">
          <Eyebrow />
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase italic leading-[0.86] tracking-tighter text-slate-950">
            Sustainable<br />
            <span className="text-primary">Product Range.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{heroCopy.description}</p>
          <div className="mt-9">
            <ProductSignalRow />
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#1d5fb8]/10">
          <img src="/products-hero.avif" alt="Oleochemical product materials" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/58 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/35 bg-white/18 p-5 text-white backdrop-blur-xl">
            <p className="font-display text-3xl font-black uppercase italic leading-none">Consistency</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/78">Key ingredients and performance enhancers for diverse industries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FullImageHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface px-4 pb-14 pt-4 sm:px-8 sm:pb-20 sm:pt-6 lg:px-14">
      <div className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden rounded-[2rem] bg-primary shadow-2xl [clip-path:inset(0_round_2rem)] [contain:paint] sm:min-h-[calc(100svh-3rem)] sm:rounded-[2.35rem] sm:[clip-path:inset(0_round_2.35rem)] lg:min-h-[calc(100svh-5rem)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 overflow-hidden rounded-[inherit] [backface-visibility:hidden] [transform:translateZ(0)]"
        >
          <img
            src="/remove_the_label_2K_202605041538.jpeg"
            alt="Oleochemical products"
            className="absolute inset-0 h-full w-full object-cover object-[82%_center] [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform] sm:object-center"
          />

            {/* Soft left-focused gradient — full-width, smooth falloff, preserves top-left brightness */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                background:
                  'radial-gradient(700px 500px at 10% 14%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.32) 20%, rgba(0,0,0,0.54) 45%, rgba(0,0,0,0.7) 70%), linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.06) 60%, rgba(0,0,0,0) 100%)',
              }}
            />

            {/* Top overlay remains full-width to keep top text contrast */}
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/40 via-black/24 to-transparent" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100svh-2rem)] items-start sm:items-center px-6 pb-16 pt-36 sm:min-h-[calc(100svh-3rem)] sm:px-10 sm:pt-36 lg:min-h-[calc(100svh-5rem)] lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-8 space-y-1">
              <Eyebrow className="text-white/78" />
              <h1 className="font-display text-[clamp(2.7rem,8vw,6rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-white">
                {heroCopy.title}
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-white/82">{heroCopy.description}</p>

            <div className="mt-9">
              <ProductSignalRow light />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EditorialHero() {
  return (
    <section className="bg-[#f4f6f9] px-6 pb-20 pt-[148px] sm:px-8 sm:pt-[164px] lg:px-14 lg:pt-[184px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Eyebrow />
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-950">
              Building<br />
              <span className="text-primary">Industries.</span>
            </h1>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-text-slate lg:pb-3">{heroCopy.description}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#1d5fb8]/10">
            <img src="/products-hero.avif" alt="Oleochemical products" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="grid gap-5">
            {productSignals.map((item) => (
              <article key={item.label} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]">
                <item.icon className="mb-10 text-primary" size={28} strokeWidth={1.8} />
                <h2 className="font-display text-2xl font-black uppercase tracking-tight text-slate-950">{item.label}</h2>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCardsHero() {
  return (
    <section className="bg-white px-6 pb-20 pt-[148px] sm:px-8 sm:pt-[164px] lg:px-14 lg:pt-[184px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <Eyebrow />
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.4rem)] font-black uppercase italic leading-[0.86] tracking-tighter text-slate-950">
            Reliable<br />
            <span className="text-primary">Oleo Solutions.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-text-slate">{heroCopy.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {productSignals.map((item, index) => (
            <article key={item.label} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-[#1d5fb8]/[0.06]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/products-hero.avif"
                  alt=""
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
                    index === 0 && 'object-left',
                    index === 1 && 'object-center',
                    index === 2 && 'object-right'
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/62 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg">
                  <item.icon size={23} strokeWidth={1.8} />
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl font-black uppercase tracking-tight text-slate-950">{item.label}</h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">Designed to support consistency, efficiency, and product quality across manufacturing applications.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlueprintHero() {
  return (
    <section className="bg-[#eaf3ff] px-6 pb-20 pt-[148px] sm:px-8 sm:pt-[164px] lg:px-14 lg:pt-[184px]">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/72 p-6 shadow-2xl shadow-[#1d5fb8]/10 backdrop-blur-xl sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(#1d5fb8_1px,transparent_1px),linear-gradient(90deg,#1d5fb8_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow />
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.4rem)] font-black uppercase italic leading-[0.86] tracking-tighter text-slate-950">
              Product<br />
              <span className="text-primary">Blueprint.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{heroCopy.description}</p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 font-display text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm">
              Explore portfolio <ArrowRight size={16} />
            </div>
          </div>

          <div className="relative min-h-[480px]">
            <div className="absolute inset-8 rounded-[2rem] border-2 border-primary/20" />
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-[2rem] shadow-xl shadow-[#1d5fb8]/10">
              <img src="/products-hero.avif" alt="Oleochemical products" className="h-full w-full object-cover" />
              <div className="absolute right-6 top-6 rounded-full border border-white/40 bg-white/22 px-4 py-2 font-display text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                Sustainable Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveHero({ active }: { active: string }) {
  if (active === '02') return <FullImageHero />;
  if (active === '03') return <EditorialHero />;
  if (active === '04') return <ProductCardsHero />;
  if (active === '05') return <BlueprintHero />;
  return <SplitGlassHero />;
}

function ProductStoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f9] px-6 py-24 sm:px-8 lg:px-14">
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-16rem] h-[30rem] w-[30rem] rounded-full bg-white blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
        <div className="lg:sticky lg:top-[172px] lg:h-fit">
          <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
            [ PRODUCT ATLAS ]
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
            13 CORE<br />
            <span className="text-primary">MATERIALS.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-text-slate">
            A portfolio built as a practical supply system: fatty acids, glycerine, soap bases, and performance materials used across manufacturing-led industries.
          </p>

          <div className="mt-9 grid grid-cols-3 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl shadow-[#1d5fb8]/[0.06]">
            <div className="border-r border-slate-100 p-5">
              <p className="font-display text-3xl font-black leading-none text-primary">13</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-text-slate">Products</p>
            </div>
            <div className="border-r border-slate-100 p-5">
              <p className="font-display text-3xl font-black leading-none text-primary">4</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-text-slate">Use Cases</p>
            </div>
            <div className="p-5">
              <p className="font-display text-3xl font-black leading-none text-primary">1</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-text-slate">Supply View</p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-xl shadow-[#1d5fb8]/[0.06] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PackageCheck size={20} strokeWidth={1.8} />
              </span>
              <p className="font-display text-sm font-black uppercase tracking-[0.14em] text-slate-950">
                Consistent, readable, application-led product details.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 hidden w-px bg-primary/15 md:block" />
          <div className="grid gap-5">
            {productStory.map((product, index) => {
              const Icon = index % 4 === 0 ? FlaskConical : index % 4 === 1 ? Droplets : index % 4 === 2 ? Factory : Sparkles;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 44, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-[6px] border-[#f4f6f9] bg-[#8fc2ff] shadow-lg shadow-[#1d5fb8]/15 md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-[#1d5fb8]/[0.06] transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                    <div className="pointer-events-none absolute right-[-4rem] top-[-5rem] h-44 w-44 rounded-full bg-[#eaf3ff] blur-2xl transition-transform duration-500 group-hover:scale-125" />
                    <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_3.1rem]">
                      <div>
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#eaf3ff] px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.14em] text-text-slate">
                            {product.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-[clamp(1.65rem,3vw,2.65rem)] font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">
                          {product.name}
                        </h3>
                        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary lg:justify-self-end">
                        <Icon size={24} strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductStoryDeck3D() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f9] px-6 py-24 sm:px-8 lg:px-14">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
              [ PRODUCT DECK ]
            </span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
              FORMULATION<br />
              <span className="text-primary">STACK.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-text-slate">
            A comprehensive product deck treating every material like a technical card in a formulation system.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {productStory.map((product, index) => {
            const Icon = index % 5 === 0 ? () => <ZigZag nodes={5} /> : index % 5 === 1 ? GlycerolIcon : index % 5 === 2 ? SoapIcon : index % 5 === 3 ? OleicIcon : HydIcon;

            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'group relative min-h-[350px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]'
                )}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center text-primary">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mt-3 font-display text-[10px] font-black uppercase tracking-[0.14em] text-[#1d5fb8]">
                    {product.tag}
                  </p>
                  <p className="mt-6 text-base font-medium leading-relaxed text-text-slate">
                    {product.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductStoryFloatingMap() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] p-6 shadow-2xl shadow-[#1d5fb8]/10 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(29,95,184,0.13),transparent_34%),radial-gradient(circle_at_90%_12%,rgba(143,194,255,0.22),transparent_30%)]" />
          <div className="relative z-10 mb-12 max-w-4xl">
            <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
              [ PRODUCT MAP ]
            </span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
              FROM BASE<br />
              <span className="text-primary">TO PERFORMANCE.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">
              A floating product map where each material is visible as part of a wider industrial supply story.
            </p>
          </div>

          <div className="relative z-10 grid gap-5 lg:grid-cols-2">
            {productStory.map((product, index) => {
              const Icon = index % 4 === 0 ? FlaskConical : index % 4 === 1 ? Droplets : index % 4 === 2 ? Factory : Sparkles;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42, y: 32 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  whileHover={{ scale: 1.025, rotateZ: index % 2 === 0 ? -0.6 : 0.6 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-xl shadow-[#1d5fb8]/[0.08] backdrop-blur-xl sm:p-7"
                >
                  <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-[#8fc2ff]" />
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3ff] text-primary shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#eaf3ff] px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.14em] text-text-slate">
                          {product.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-[clamp(1.45rem,2.2vw,2.25rem)] font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">
                        {product.name}
                      </h3>
                      <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductStoryPinnedShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f9] px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
            [ PINNED SHOWCASE ]
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
            MATERIALS IN<br />
            <span className="text-primary">SEQUENCE.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-[172px] lg:h-[calc(100svh-12rem)]">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full min-h-[480px] overflow-hidden rounded-[2.5rem] bg-primary shadow-2xl shadow-primary/15"
            >
              <img src="/products-hero.avif" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/90 via-[#0d47a1]/54 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-display text-6xl font-black uppercase italic leading-none">13</p>
                <p className="mt-3 max-w-sm text-base font-medium leading-relaxed text-white/78">
                  A guided product catalogue that keeps the image pinned while the materials move through the story.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-5">
            {productStory.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 52 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]"
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#eaf3ff] px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[10px] font-black uppercase tracking-[0.14em] text-text-slate">{product.tag}</span>
                </div>
                <h3 className="font-display text-[clamp(1.65rem,3vw,2.8rem)] font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">
                  {product.name}
                </h3>
                <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">{product.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductStoryHorizontalRail() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
              [ HORIZONTAL RAIL ]
            </span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
              SUPPLY<br />
              <span className="text-primary">CAROUSEL.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-text-slate">
            A Webflow-style rail where cards feel like a moving product shelf while staying fully readable.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
        <div className="flex w-max gap-5 px-6 sm:px-8 lg:px-14">
          {productStory.map((product, index) => {
            const Icon = index % 4 === 0 ? FlaskConical : index % 4 === 1 ? Droplets : index % 4 === 2 ? Factory : Sparkles;

            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, x: 80, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                whileHover={{ y: -12, rotateZ: -0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[390px] w-[340px] shrink-0 rounded-[2rem] border border-slate-200 bg-[#f4f6f9] p-7 shadow-xl shadow-[#1d5fb8]/[0.08] sm:w-[390px]"
              >
                <div className="mb-12 flex items-center justify-between gap-4">
                  <span className="font-display text-5xl font-black italic leading-none text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <Icon size={23} strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">{product.name}</h3>
                <p className="mt-3 font-display text-[10px] font-black uppercase tracking-[0.14em] text-primary">{product.tag}</p>
                <p className="mt-6 text-base font-medium leading-relaxed text-text-slate">{product.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductStorySpotlightTabs() {
  const [selected, setSelected] = useState(0);
  const activeProduct = productStory[selected];

  return (
    <section className="relative overflow-hidden bg-[#001e38] px-6 py-24 text-white sm:px-8 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(143,194,255,0.22),transparent_34%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-[172px]">
          <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/70">
            [ SPOTLIGHT ]
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-white">
            SELECT A<br />
            <span className="text-[#8fc2ff]">MATERIAL.</span>
          </h2>
          <motion.div
            key={activeProduct.name}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 rounded-[2rem] border border-white/20 bg-white/12 p-7 shadow-xl shadow-black/10 backdrop-blur-xl"
          >
            <p className="font-display text-[11px] font-black uppercase tracking-[0.18em] text-[#8fc2ff]">{activeProduct.tag}</p>
            <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3.6rem)] font-black uppercase italic leading-[0.88] tracking-tight text-white">
              {activeProduct.name}
            </h3>
            <p className="mt-6 text-base font-medium leading-relaxed text-white/76">{activeProduct.description}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {productStory.map((product, index) => (
            <motion.button
              key={product.name}
              type="button"
              onClick={() => setSelected(index)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'min-h-[128px] rounded-[1.4rem] border p-4 text-left transition-colors',
                selected === index
                  ? 'border-white bg-white text-primary shadow-xl shadow-black/10'
                  : 'border-white/15 bg-white/8 text-white hover:bg-white/14'
              )}
            >
              <span className="font-display text-[10px] font-black uppercase tracking-[0.18em] opacity-70">{String(index + 1).padStart(2, '0')}</span>
              <span className="mt-4 block font-display text-base font-black uppercase leading-tight tracking-tight">{product.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductStoryBentoFlow() {
  return (
    <section className="bg-[#f4f6f9] px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
            [ BENTO FLOW ]
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-slate-950">
            PRODUCT<br />
            <span className="text-primary">SYSTEM.</span>
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] gap-5 lg:grid-cols-4">
          {productStory.map((product, index) => {
            const featured = index === 0 || index === 4 || index === 12;
            const Icon = index % 4 === 0 ? FlaskConical : index % 4 === 1 ? Droplets : index % 4 === 2 ? Factory : Sparkles;

            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 42, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'relative overflow-hidden rounded-[1.75rem] border p-6 shadow-xl',
                  featured
                    ? 'border-primary/10 bg-primary text-white shadow-primary/15 lg:col-span-2'
                    : 'border-slate-200 bg-white text-slate-950 shadow-[#1d5fb8]/[0.06]'
                )}
              >
                <Icon className={cn('mb-12', featured ? 'text-white' : 'text-primary')} size={28} strokeWidth={1.75} />
                <p className={cn('font-display text-[10px] font-black uppercase tracking-[0.16em]', featured ? 'text-white/70' : 'text-primary')}>
                  {String(index + 1).padStart(2, '0')} / {product.tag}
                </p>
                <h3 className="mt-5 font-display text-2xl font-black uppercase italic leading-[0.9] tracking-tight">{product.name}</h3>
                <p className={cn('mt-5 text-base font-medium leading-relaxed', featured ? 'text-white/76' : 'text-text-slate')}>
                  {product.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductStoryImageCatalog() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate mb-8 overflow-hidden rounded-[2.5rem] px-6 py-16 text-white shadow-2xl shadow-[#1d5fb8]/12 sm:px-10 lg:px-14">
          <img src="/products-hero.avif" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001e38]/92 via-[#0d47a1]/58 to-transparent" />
          <div className="relative z-10 max-w-3xl">
            <span className="mb-5 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/75">
              [ IMAGE CATALOG ]
            </span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.4rem)] font-black uppercase italic leading-[0.84] tracking-tighter text-white">
              APPLICATION<br />
              <span className="text-white/72">LIBRARY.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {productStory.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f4f6f9] shadow-xl shadow-[#1d5fb8]/[0.06] sm:grid-cols-[11rem_1fr]"
            >
              <div className="relative min-h-[170px]">
                <img
                  src="/products-hero.avif"
                  alt=""
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover',
                    index % 3 === 0 && 'object-left',
                    index % 3 === 1 && 'object-center',
                    index % 3 === 2 && 'object-right'
                  )}
                />
                <div className="absolute inset-0 bg-primary/28" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6">
                <p className="font-display text-[10px] font-black uppercase tracking-[0.14em] text-primary">{product.tag}</p>
                <h3 className="mt-4 font-display text-2xl font-black uppercase italic leading-[0.9] tracking-tight text-slate-950">{product.name}</h3>
                <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{product.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActiveProductStory({ active }: { active: string }) {
  if (active === '02') return <ProductStoryDeck3D />;
  if (active === '03') return <ProductStoryFloatingMap />;
  if (active === '04') return <ProductStoryPinnedShowcase />;
  if (active === '05') return <ProductStoryHorizontalRail />;
  if (active === '06') return <ProductStorySpotlightTabs />;
  if (active === '07') return <ProductStoryBentoFlow />;
  if (active === '08') return <ProductStoryImageCatalog />;
  return <ProductStoryTimeline />;
}

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-text-main selection:bg-primary/10">
      <Header />
      <main>
        <FullImageHero />
        <ProductStoryDeck3D />
      </main>
      <Footer />
    </div>
  );
}
