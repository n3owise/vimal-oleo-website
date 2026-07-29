import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';
import { useDialogFocus } from '@/src/hooks/useDialogFocus';

interface Product {
  name: string;
  grade: string;
  tag: string;
  formula: string;
  icon: ReactNode;
}

export type ProductDetail = {
  overview: string;
  applications: string[];
  forms?: string[];
};

const ZigZag = ({ nodes }: { nodes: number }) => (
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
    <circle cx={32} cy={13} r={8} stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <text x={26} y={16} fontSize="7" fill="currentColor" fontFamily="monospace">Na+</text>
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={i} x1={28 + i * 1.5} y1={21 + i * 5} x2={36 - i * 1.5} y2={26 + i * 5} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <circle cx={32} cy={44} r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const OleicIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
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

const CocoIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={i} x1={6 + i * 9} y1={i % 2 === 0 ? 30 : 21} x2={6 + (i + 1) * 9} y2={i % 2 === 0 ? 21 : 30} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <circle key={i} cx={6 + i * 9} cy={i % 2 === 0 ? 30 : 21} r="2" fill="currentColor" opacity="0.5" />
    ))}
    <text x={52} y={19} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={50} y={33} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const SoyaIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" focusable="false" style={{ width: '100%', height: '100%' }}>
    {[0, 1, 2].map((i) => (
      <line key={i} x1={4 + i * 8} y1={i % 2 === 0 ? 30 : 22} x2={4 + (i + 1) * 8} y2={i % 2 === 0 ? 22 : 30} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <line x1={28} y1={22} x2={36} y2={22} stroke="currentColor" strokeWidth="1.5" />
    <line x1={28} y1={27} x2={36} y2={27} stroke="currentColor" strokeWidth="1.5" />
    {[0, 1, 2].map((i) => (
      <line key={i} x1={44 + i * 6} y1={i % 2 === 0 ? 22 : 30} x2={44 + (i + 1) * 6} y2={i % 2 === 0 ? 30 : 22} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <text x={56} y={18} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={54} y={34} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const allProducts: Product[] = [
  { name: 'Stearic Acid', grade: 'Flakes / Beads / Powder', tag: 'PVC, Rubber, Speciality & Cosmetics', formula: 'C18H36O2', icon: <ZigZag nodes={9} /> },
  { name: 'Rice Bran Fatty Acid', grade: 'Multiple Variants', tag: 'Soap & Detergent', formula: 'Mixed C16-C18', icon: <MixedIcon /> },
  { name: 'Myristic Acid', grade: '98%+ High Purity', tag: 'Personal Care, Cosmetics & Surfactants', formula: 'C14H28O2', icon: <ZigZag nodes={7} /> },
  { name: 'Palmitic Acid', grade: 'Fractionated & Distilled', tag: 'Speciality & Cosmetic', formula: 'C16H32O2', icon: <ZigZag nodes={8} /> },
  { name: 'Glycerine', grade: 'IP / BP / USP / CP', tag: 'Food & Pharma', formula: 'C3H8O3', icon: <GlycerolIcon /> },
  { name: 'GMS 95', grade: '95% Monoglyceride', tag: 'Food, Cosmetics & Emulsifiers', formula: 'Glyceryl Monostearate', icon: <GlycerolIcon /> },
  { name: 'Caprylic-Capric Acid', grade: 'C8-C10 Blend', tag: 'Personal Care, Cosmetics & Surfactants', formula: 'Mixed C8-C10', icon: <CocoIcon /> },
  { name: 'Hydrogenated Palm / Hydrogenated Technical Oil', grade: 'Fully Saturated', tag: 'Speciality & Lubricant', formula: 'C18H36O2 sat.', icon: <HydIcon /> },
  { name: 'Soap Noodles', grade: 'TFM 60% to 80%', tag: 'Personal Care', formula: 'RCOONa', icon: <SoapIcon /> },
  { name: 'Palm Fatty Acid', grade: 'Multiple Variants', tag: 'Industrial', formula: 'Mixed C16-C18', icon: <MixedIcon /> },
  { name: 'Distilled Coconut Fatty Acid', grade: '99% Distilled', tag: 'Personal Care', formula: 'C12H24O2', icon: <CocoIcon /> },
  { name: 'Soya Distilled Fatty Acid', grade: 'Distilled', tag: 'Paints & Inks', formula: 'C18H34O2', icon: <SoyaIcon /> },
  { name: 'Lauric Acid', grade: '99% Pure / Cosmetic Grade', tag: 'Personal Care, Cosmetics & Surfactants', formula: 'C12H24O2', icon: <ZigZag nodes={6} /> },
  { name: 'Oleic Acid', grade: 'Vegetable & Technical', tag: 'Textiles', formula: 'C18H34O2', icon: <OleicIcon /> },
  { name: 'Magnesium hydroxide', grade: 'Technical Grade', tag: 'PVC, Pharma & Flame Retardants', formula: 'Mg(OH)2', icon: <HydIcon /> },
  { name: 'Magnesium oxide', grade: 'Light / Heavy Grades', tag: 'Rubber, Pharma & Ceramics', formula: 'MgO', icon: <MixedIcon /> },
];

export const productDetails: Record<string, ProductDetail> = {
  'Stearic Acid': {
    overview: 'A versatile fatty acid used to improve stability, hardness, lubrication, and processing across industrial and personal care applications.',
    applications: ['Personal Care & Cosmetics', 'Soaps & Detergents', 'Rubber & PVC', 'Candles & Crayons', 'Pharmaceuticals', 'Animal Nutrition'],
    forms: ['Flakes', 'Beads', 'Powder'],
  },
  'Rice Bran Fatty Acid': {
    overview: 'A vegetable-derived fatty acid widely used as a processing aid and lubricant in industrial formulations.',
    applications: ['Soaps & Detergents', 'Rubber Industry', 'Paints & Coatings', 'Lubricants', 'Textile Processing'],
  },
  'Myristic Acid': {
    overview: 'A high-purity fatty acid used to improve texture, cleansing performance, and stability in cosmetic formulations.',
    applications: ['Personal Care & Cosmetics'],
  },
  'Palmitic Acid': {
    overview: 'A saturated fatty acid that enhances hardness, consistency, and emulsification in a wide range of products.',
    applications: ['Personal Care & Cosmetics', 'Soaps & Detergents', 'Candles & Crayons', 'Animal Nutrition'],
  },
  'Glycerine': {
    overview: 'A refined humectant that retains moisture and improves stability in food, pharmaceutical, cosmetic, and industrial applications.',
    applications: ['Food Processing', 'Pharmaceuticals', 'Cosmetics', 'Personal Care', 'Industrial Formulations'],
  },
  'GMS 95': {
    overview: 'A high-performance emulsifier that blends oil and water while improving texture and processing efficiency.',
    applications: ['Food Processing', 'Cosmetics', 'Pharmaceuticals', 'Industrial Manufacturing'],
  },
  'Caprylic-Capric Acid': {
    overview: 'A stable medium-chain fatty acid used in specialty industrial, pharmaceutical, and fragrance applications.',
    applications: ['Aviation Lubricants', 'Agriculture', 'Flavours & Fragrances', 'Pharmaceuticals', 'Wood Preservation'],
  },
  'Hydrogenated Palm / Hydrogenated Technical Oil': {
    overview: 'Hydrogenated vegetable oil offering improved stability, hardness, and oxidation resistance for industrial manufacturing.',
    applications: ['Rubber Processing', 'Industrial Lubricants', 'Chemical Manufacturing', 'Candles'],
  },
  'Soap Noodles': {
    overview: 'Ready-to-use soap base for manufacturing toilet soaps, laundry bars, and personal care products.',
    applications: ['Toilet Soaps', 'Laundry Soaps', 'Bathing Bars', 'Personal Care'],
  },
  'Palm Fatty Acid': {
    overview: 'A vegetable-based fatty acid used as an emulsifier, lubricant, and processing aid in industrial formulations.',
    applications: ['Soaps & Detergents', 'Rubber Industry', 'Lubricants', 'Chemical Manufacturing', 'Paints & Coatings'],
  },
  'Distilled Coconut Fatty Acid': {
    overview: 'A refined fatty acid known for excellent cleansing and foaming performance in soap formulations.',
    applications: ['Soaps & Detergents', 'Paint Industry'],
  },
  'Soya Distilled Fatty Acid': {
    overview: 'A vegetable-derived fatty acid offering reliable emulsification and lubrication across multiple industries.',
    applications: ['Soaps & Detergents', 'Rubber Industry', 'Paints & Coatings', 'Lubricants', 'Chemical Manufacturing'],
  },
  'Lauric Acid': {
    overview: 'A naturally derived fatty acid valued for its cleansing, emulsifying, and formulation properties.',
    applications: ['Personal Care & Cosmetics', 'Pharmaceuticals', 'Rubber Industry'],
  },
  'Oleic Acid': {
    overview: 'A versatile fatty acid used as an emulsifier, lubricant, and processing aid across industrial sectors.',
    applications: ['Personal Care & Cosmetics', 'Food Processing', 'Pharmaceuticals', 'Lubricants', 'Textiles', 'Paints'],
  },
  'Magnesium hydroxide': {
    overview: 'An inorganic compound used for pH control, flame retardancy, water treatment, and chemical manufacturing.',
    applications: ['Acid Neutralization', 'Flame Retardants', 'Water Treatment', 'Chemical Processing'],
  },
  'Magnesium oxide': {
    overview: 'A high-performance mineral compound offering thermal stability and reliable performance in industrial applications.',
    applications: ['Rubber & Plastics', 'Water Treatment', 'Food Processing', 'Building & Construction'],
  },
};

const row1 = allProducts.slice(0, 7);
const row2 = allProducts.slice(7, 16);

const colors = [
  { bg: '#001e38', border: 'none', icon: '#3d7fd4', formula: 'rgba(61,127,212,0.7)', name: 'white', tagBg: 'rgba(255,255,255,0.15)', tagTxt: 'white' },
  { bg: 'white', border: '1px solid rgba(0,30,56,0.10)', icon: '#1d5fb8', formula: '#1d5fb8', name: '#001228', tagBg: '#1d5fb8', tagTxt: 'white' },
  { bg: '#1d5fb8', border: 'none', icon: 'rgba(255,255,255,0.85)', formula: 'rgba(255,255,255,0.5)', name: 'white', tagBg: 'white', tagTxt: '#1d5fb8' },
];

function Row({
  cards,
  reverse,
  offset,
  onProductClick,
}: {
  cards: Product[];
  reverse?: boolean;
  offset: number;
  onProductClick: (product: Product) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const repeatedCards = shouldReduceMotion ? cards : [...cards, ...cards, ...cards];

  return (
    <div className="product-marquee-row" style={{ overflowX: shouldReduceMotion ? 'auto' : 'hidden', overflowY: 'visible', marginBottom: '4px', paddingTop: '24px', paddingBottom: '22px' }}>
      <div
        className="product-marquee-track"
        style={{
          display: 'flex',
          gap: '14px',
          width: 'max-content',
          animation: shouldReduceMotion ? 'none' : 'product-marquee-scroll 74s linear infinite',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedCards.map((p, i) => {
          const c = colors[(i + offset) % colors.length];
          const isClone = !shouldReduceMotion && i >= cards.length;
          return (
            <motion.button
              key={`${p.name}-${i}`}
              type="button"
              aria-label={`View B2B details for ${p.name}`}
              aria-hidden={isClone ? true : undefined}
              aria-haspopup="dialog"
              tabIndex={isClone ? -1 : undefined}
              title={`View B2B details for ${p.name}`}
              onClick={() => onProductClick(p)}
              whileHover={{ y: -6, scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="product-marquee-card cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
              style={{
                flexShrink: 0,
                width: '260px',
                minHeight: '245px',
                background: c.bg,
                border: c.border,
                borderRadius: '18px',
                padding: '26px 22px 22px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                font: 'inherit',
              }}
            >
              <div
                className="product-marquee-icon"
                style={{
                  width: '86px',
                  height: '64px',
                  marginBottom: '20px',
                  color: c.icon,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {p.icon}
              </div>
              <p className="product-marquee-name" style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.12, marginBottom: '14px', color: c.name }}>{p.name}</p>
              <span className="product-marquee-tag" style={{ alignSelf: 'flex-start', fontSize: '9px', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '100px', color: c.tagTxt, background: c.tagBg }}>{p.tag}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ProductDetailModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const dialogRef = useRef<HTMLElement | null>(null);
  const detail = productDetails[product.name];
  const titleId = `product-detail-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const descriptionId = `${titleId}-overview`;
  const forms = detail.forms ?? [];

  useDialogFocus(true, dialogRef, onClose);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.div
      key="product-detail-overlay"
      className="fixed inset-0 z-[3000] flex items-center justify-center overflow-y-auto bg-slate-950/62 px-4 py-6 backdrop-blur-sm sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="relative my-auto max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-white/45 bg-white text-slate-950 shadow-2xl shadow-slate-950/28"
        initial={{ opacity: 0, y: 22, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          aria-label="Close product details"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-xl font-light leading-none text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 active:scale-95"
        >
          ×
        </button>

        <div className="bg-[#001e38] p-5 pr-14 text-white sm:p-6 sm:pr-16">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#8fc2ff]">Product Detail</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8fc2ff] sm:h-16 sm:w-16">
              {product.icon}
            </div>
            <div className="min-w-0">
              <h3 id={titleId} className="break-words hyphens-auto font-display text-[clamp(1.55rem,5vw,2.75rem)] font-black uppercase italic leading-[0.9] tracking-tighter">
                {product.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <section>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary">Overview</p>
            <p id={descriptionId} className="mt-2 text-sm font-medium leading-relaxed text-text-slate">{detail.overview}</p>
          </section>

          {forms.length > 0 && (
            <section>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary">Available Forms:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {forms.map((form) => (
                  <span key={form} className="rounded-full border border-primary/15 bg-[#eaf3ff] px-3 py-1.5 text-xs font-bold text-primary shadow-sm">
                    {form}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl bg-[#f4f6f9] p-4">
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary">Common Applications</p>
            <ul className="mt-3 space-y-2">
              {detail.applications.map((item) => (
                <li key={item} className="flex gap-2 text-sm font-semibold leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.article>
    </motion.div>
  );
}

function PortfolioHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} style={{ padding: '0 24px 56px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <span className={sectionEyebrowClass}>[ PRODUCTS ]</span>
      </motion.div>

      <motion.h2
        className={sectionHeadingClass}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        style={{ margin: '0 0 32px' }}
      >
        <span style={{ display: 'block', color: '#1d5fb8' }}>COMPREHENSIVE</span>
        <span style={{ display: 'block', color: '#001228' }}>OLEO RANGE.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-text-slate sm:text-base lg:text-lg"
      >
        Core oleochemical products across food, pharma, personal care, cosmetics, speciality, textile auxiliaries, surfactants and industrial applications.
      </motion.p>
    </div>
  );
}

type ProductMarqueeCPreviewProps = {
  sectionId?: string;
  ctaHref?: string;
  fullHeight?: boolean;
};

export function ProductMarqueeCPreview({ sectionId, ctaHref = '#', fullHeight = false }: ProductMarqueeCPreviewProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id={sectionId} style={{ background: '#f4f6f9', padding: '72px 0', overflow: 'hidden', minHeight: fullHeight ? '100vh' : undefined }}>
      <PortfolioHeader />

      <Row cards={row1} reverse={false} offset={0} onProductClick={setSelectedProduct} />
      <Row cards={row2} reverse={true} offset={2} onProductClick={setSelectedProduct} />

      <div style={{ textAlign: 'center', paddingTop: '36px' }}>
        <motion.div
          style={{ display: 'inline-flex' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <InteractiveHoverButton
          href={ctaHref}
          className="h-[52px] border-[#001e38] px-8 text-[13px] uppercase text-[#001e38]"
        >
          See Full Product List
          </InteractiveHoverButton>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
