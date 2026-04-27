import { motion } from 'framer-motion';
import {
  Beaker,
  Brush,
  Factory,
  FlaskConical,
  Layers,
  Leaf,
  Pill,
  Sparkles,
} from 'lucide-react';

type Industry = {
  name: string;
  shortName: string;
  code: string;
  description: string;
  image: string;
  icon: typeof Pill;
};

const industries: Industry[] = [
  {
    name: 'Pharmaceuticals & Formulator',
    shortName: 'Pharma',
    code: 'PH',
    description: 'Oleo chemicals used in pharmaceutical, formulation, and excipient-led production.',
    image: 'https://images.unsplash.com/photo-1579165466541-74e246905d4a?auto=format&fit=crop&q=80&w=1400',
    icon: Pill,
  },
  {
    name: 'Paints, Inks & Laminated',
    shortName: 'Coatings',
    code: 'PI',
    description: 'Reliable inputs for coatings, industrial inks, lamination, and surface finishing.',
    image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=80&w=1400',
    icon: Brush,
  },
  {
    name: 'Intermediates',
    shortName: 'Intermediates',
    code: 'IN',
    description: 'Consistent chemical supply for intermediate manufacturing and process chemistry.',
    image: 'https://images.unsplash.com/photo-1532187875605-7fe3584814b6?auto=format&fit=crop&q=80&w=1400',
    icon: FlaskConical,
  },
  {
    name: 'PVC Pipes & PVC Compound',
    shortName: 'PVC',
    code: 'PV',
    description: 'Materials supporting PVC pipe, profile, compound, and extrusion applications.',
    image: 'https://images.unsplash.com/photo-1565008480292-2262189dbdd8?auto=format&fit=crop&q=80&w=1400',
    icon: Factory,
  },
  {
    name: 'Textile Auxiliaries',
    shortName: 'Textile',
    code: 'TX',
    description: 'Processing aids for textile auxiliaries, fabric finishing, and fiber applications.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1400',
    icon: Layers,
  },
  {
    name: 'Plant Extract & Master Batches',
    shortName: 'Extracts',
    code: 'PM',
    description: 'Inputs for plant extract processing, master batches, and compounding operations.',
    image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=1400',
    icon: Leaf,
  },
  {
    name: 'Cosmetics & Personal Care',
    shortName: 'Cosmetics',
    code: 'CP',
    description: 'High-quality oleo ingredients for skincare, hair care, and personal care products.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1400',
    icon: Sparkles,
  },
  {
    name: 'Speciality Chemicals',
    shortName: 'Speciality',
    code: 'SC',
    description: 'Flexible supply for speciality chemical production and technical industrial uses.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400',
    icon: Beaker,
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function MoleculeMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 110"
      className={className}
      fill="none"
    >
      <path
        d="M14 68 L38 42 L68 64 L96 34 L128 58 L164 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68 64 L82 94 M96 34 L110 12 M128 58 L150 86"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[14, 38, 68, 96, 128, 164].map((cx, index) => (
        <circle
          key={cx}
          cx={cx}
          cy={[68, 42, 64, 34, 58, 24][index]}
          r={index === 3 ? 6 : 4}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = industry.icon;
  const isDark = index === 1 || index === 4 || index === 7;
  const isBlue = index === 0 || index === 5;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border shadow-sm ${
        isDark
          ? 'border-white/10 bg-navy-dark text-white'
          : isBlue
            ? 'border-primary/20 bg-primary text-white'
            : 'border-slate-200 bg-white text-slate-950'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[52%] overflow-hidden">
        <img
          src={industry.image}
          alt={industry.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 ${
            isDark || isBlue
              ? 'bg-gradient-to-b from-slate-950/25 via-slate-950/5 to-transparent'
              : 'bg-gradient-to-b from-white/5 via-transparent to-white'
          }`}
        />
      </div>

      <MoleculeMark
        className={`absolute right-4 top-4 h-20 w-28 ${
          isDark || isBlue ? 'text-white/22' : 'text-primary/18'
        }`}
      />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
              isDark || isBlue ? 'bg-white/12 text-white' : 'bg-primary/10 text-primary'
            }`}
          >
            <Icon size={20} strokeWidth={1.9} />
          </span>
          <span
            className={`font-display text-4xl font-black italic leading-none tracking-tighter ${
              isDark || isBlue ? 'text-white/25' : 'text-slate-200'
            }`}
          >
            {industry.code}
          </span>
        </div>

        <div className="mt-auto pt-36">
          <p
            className={`mb-3 font-mono text-[10px] font-black uppercase tracking-[0.26em] ${
              isDark || isBlue ? 'text-white/55' : 'text-primary'
            }`}
          >
            0{index + 1} / {industry.shortName}
          </p>
          <h3 className="font-display text-2xl font-black uppercase italic leading-[0.88] tracking-tighter sm:text-3xl">
            {industry.name}
          </h3>
          <p
            className={`mt-4 text-sm font-medium leading-relaxed ${
              isDark || isBlue ? 'text-white/68' : 'text-text-slate'
            }`}
          >
            {industry.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Industries() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-100 bg-surface py-20 text-text-main sm:py-24"
      id="industries"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-16 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10rem] bottom-20 h-[28rem] w-[28rem] rounded-full bg-slate-900/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mb-12 max-w-5xl text-center sm:mb-16"
        >
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
            [ INDUSTRIES WE SERVE ]
          </span>
          <h2 className="mb-8 font-display text-[clamp(2.25rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900">
            INDUSTRIES WE<br />
            <span className="text-primary">SERVE.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
            We introduce ourselves as one of the Importers & Suppliers of Oleo Chemicals. Our Chemicals & Pharmaceuticals are widely used by these industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry, index) => (
            <div key={industry.name}>
              <IndustryCard industry={industry} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
