import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface Product {
  name: string;
  grade: string;
  tag: string;
  formula: string;
  icon: ReactNode;
}

const ZigZag = ({ nodes }: { nodes: number }) => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
    <circle cx={32} cy={13} r={8} stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <text x={26} y={16} fontSize="7" fill="currentColor" fontFamily="monospace">Na+</text>
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={i} x1={28 + i * 1.5} y1={21 + i * 5} x2={36 - i * 1.5} y2={26 + i * 5} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <circle cx={32} cy={44} r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const OleicIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
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

const PalmStIcon = () => (
  <svg viewBox="0 0 64 48" fill="none" style={{ width: '100%', height: '100%' }}>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <line key={i} x1={4 + i * 7} y1={i % 2 === 0 ? 28 : 20} x2={4 + (i + 1) * 7} y2={i % 2 === 0 ? 20 : 28} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    <text x={57} y={18} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">O</text>
    <text x={55} y={30} fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.8">OH</text>
  </svg>
);

const allProducts: Product[] = [
  { name: 'Stearic Acid', grade: 'All Grades', tag: 'High Volume', formula: 'C18H36O2', icon: <ZigZag nodes={9} /> },
  { name: 'Hydrogenated Technical Oil', grade: 'HTO', tag: 'Technical', formula: 'C18H36O2 sat.', icon: <HydIcon /> },
  { name: 'Rice Bran Fatty Acid', grade: 'Multiple Variants', tag: 'Bulk', formula: 'Mixed C16-C18', icon: <MixedIcon /> },
  { name: 'Myristic Acid', grade: '98%+ High Purity', tag: 'Specialty', formula: 'C14H28O2', icon: <ZigZag nodes={7} /> },
  { name: 'Palmitic Acid', grade: 'Fractionated & Distilled', tag: 'Cosmetics', formula: 'C16H32O2', icon: <ZigZag nodes={8} /> },
  { name: 'Glycerine', grade: 'IP / BP / USP / CP', tag: 'Food & Pharma', formula: 'C3H8O3', icon: <GlycerolIcon /> },
  { name: 'Hydrogenated Palm Stearin', grade: 'Fully Saturated', tag: 'Industrial', formula: 'C18H36O2 sat.', icon: <PalmStIcon /> },
  { name: 'Soap Noodles', grade: 'TFM 60% to 80%', tag: 'Personal Care', formula: 'RCOONa', icon: <SoapIcon /> },
  { name: 'Palm Fatty Acid', grade: 'Multiple Variants', tag: 'Bulk', formula: 'Mixed C16-C18', icon: <MixedIcon /> },
  { name: 'Distilled Coconut Fatty Acid', grade: '99% Distilled', tag: 'High Purity', formula: 'C12H24O2', icon: <CocoIcon /> },
  { name: 'Soya Distilled Fatty Acid', grade: 'Distilled', tag: 'Industrial', formula: 'C18H34O2', icon: <SoyaIcon /> },
  { name: 'Lauric Acid', grade: '99% Pure / Cosmetic Grade', tag: 'High Purity', formula: 'C12H24O2', icon: <ZigZag nodes={6} /> },
  { name: 'Oleic Acid', grade: 'Vegetable & Technical', tag: 'Industrial', formula: 'C18H34O2', icon: <OleicIcon /> },
];

const row1 = allProducts.slice(0, 7);
const row2 = allProducts.slice(6, 13);

const colors = [
  { bg: '#001e38', border: 'none', icon: '#3d7fd4', formula: 'rgba(61,127,212,0.7)', name: 'white', tagBg: 'rgba(255,255,255,0.15)', tagTxt: '#001e38' },
  { bg: 'white', border: '1px solid rgba(0,30,56,0.10)', icon: '#1d5fb8', formula: '#1d5fb8', name: '#001228', tagBg: '#1d5fb8', tagTxt: 'white' },
  { bg: '#1d5fb8', border: 'none', icon: 'rgba(255,255,255,0.85)', formula: 'rgba(255,255,255,0.5)', name: 'white', tagBg: 'white', tagTxt: '#1d5fb8' },
];

function Row({ cards, reverse, offset }: { cards: Product[]; reverse?: boolean; offset: number }) {
  const triple = [...cards, ...cards, ...cards];

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'visible', marginBottom: '14px', paddingTop: '8px', paddingBottom: '8px' }}>
      <motion.div
        animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '14px', width: 'max-content' }}
      >
        {triple.map((p, i) => {
          const c = colors[(i + offset) % colors.length];
          return (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              style={{
                flexShrink: 0,
                width: '260px',
                background: c.bg,
                border: c.border,
                borderRadius: '18px',
                padding: '24px 20px',
                cursor: 'default',
              }}
            >
              <div style={{ width: '60px', height: '46px', marginBottom: '16px', color: c.icon }}>{p.icon}</div>
              <p style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '10px', color: c.formula }}>{p.formula}</p>
              <p style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.25, marginBottom: '10px', color: c.name }}>{p.name}</p>
              <p style={{ fontSize: '11px', color: c.name, opacity: 0.55, lineHeight: 1.4, marginBottom: '12px' }}>{p.grade}</p>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', color: c.tagTxt, background: c.tagBg }}>{p.tag}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function PortfolioHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} style={{ padding: '0 24px 56px', textAlign: 'center' }}>
      <style>{`
        .ph-headline { font-size: clamp(32px, 9vw, 48px); }
        @media (min-width: 768px) {
          .ph-headline { font-size: clamp(48px, 5.5vw, 72px); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}
      >
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#1d5fb8', letterSpacing: '0.1em' }}>[</span>
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#1d5fb8' }}>Products</p>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#1d5fb8', letterSpacing: '0.1em' }}>]</span>
      </motion.div>

      <motion.h2
        className="ph-headline"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontStyle: 'italic',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          margin: '0 0 32px',
        }}
      >
        <span style={{ display: 'block', color: '#1d5fb8' }}>COMPREHENSIVE</span>
        <span style={{ display: 'block', color: '#001228' }}>OLEO RANGE.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ fontSize: '15px', fontWeight: 500, color: '#3d5a73', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}
      >
        Thirteen core oleochemical products across food, pharma, personal care, cosmetics, and industrial applications.
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
  return (
    <section id={sectionId} style={{ background: '#f4f6f9', padding: '72px 0', overflow: 'hidden', minHeight: fullHeight ? '100vh' : undefined }}>
      <PortfolioHeader />

      <Row cards={row1} reverse={false} offset={0} />
      <Row cards={row2} reverse={true} offset={2} />

      <div style={{ textAlign: 'center', paddingTop: '36px' }}>
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#001e38',
            color: 'white',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            padding: '14px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
          }}
        >
          See Full Product List <span style={{ fontSize: '16px' }}>-&gt;</span>
        </motion.a>
      </div>
    </section>
  );
}
