import { useRef, useState } from 'react';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
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

function MoleculeMark({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 180 110" className={className} fill="none">
      <path d="M14 68 L38 42 L68 64 L96 34 L128 58 L164 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 64 L82 94 M96 34 L110 12 M128 58 L150 86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[14, 38, 68, 96, 128, 164].map((cx, index) => (
        <circle key={cx} cx={cx} cy={[68, 42, 64, 34, 58, 24][index]} r={index === 3 ? 6 : 4} fill="currentColor" />
      ))}
    </svg>
  );
}

function SectionHead({ option, title, copy }: { option: string; title: string; copy: string }) {
  return (
    <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
      <div>
        <span className="mb-4 inline-flex rounded-full bg-primary px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white">
          Option {option}
        </span>
        <h2 className="font-display text-[clamp(2.6rem,7vw,6.2rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-950">
          {title}
        </h2>
      </div>
      <p className="text-sm font-semibold leading-relaxed text-text-slate sm:text-base">{copy}</p>
    </div>
  );
}

function IndustryMiniCard({ industry, index, dark = false }: { industry: Industry; index: number; dark?: boolean }) {
  const Icon = industry.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 5, transition: { duration: 0.24 } }}
      className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border p-5 shadow-xl [transform-style:preserve-3d] ${
        dark ? 'border-white/10 bg-navy-dark text-white' : 'border-slate-200 bg-white text-slate-950'
      }`}
    >
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
      />
      <MoleculeMark className={`absolute right-4 top-4 h-24 w-36 ${dark ? 'text-white/20' : 'text-primary/20'}`} />
      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${dark ? 'bg-white/10' : 'bg-primary/10 text-primary'}`}>
            <Icon size={20} />
          </span>
          <span className={`font-display text-4xl font-black italic tracking-tighter ${dark ? 'text-white/25' : 'text-slate-200'}`}>
            {industry.code}
          </span>
        </div>
        <div>
          <p className={`mb-2 font-mono text-[10px] font-black uppercase tracking-[0.24em] ${dark ? 'text-white/55' : 'text-primary'}`}>
            0{index + 1} / {industry.shortName}
          </p>
          <h3 className="font-display text-2xl font-black uppercase italic leading-[0.9] tracking-tighter">{industry.name}</h3>
        </div>
      </div>
    </motion.article>
  );
}

function StackConceptCard({
  industry,
  index,
  active,
}: {
  industry: Industry;
  index: number;
  active: MotionValue<number>;
}) {
  const x = useTransform(active, (v) => (index - v) * 30 * (index % 2 ? 1 : -1));
  const y = useTransform(active, (v) => (index - v) * 68);
  const z = useTransform(active, (v) => -Math.abs(index - v) * 190);
  const rotateX = useTransform(active, (v) => (index - v) * 9);
  const rotateY = useTransform(active, (v) => (index - v) * -7);
  const scale = useTransform(active, (v) => 1 - Math.min(Math.abs(index - v), 2.4) * 0.07);
  const opacity = useTransform(active, (v) => Math.max(1 - Math.abs(index - v) * 0.32, 0.12));
  const zIndex = useTransform(active, (v) => Math.round(100 - Math.abs(index - v) * 10));

  return (
    <motion.article
      style={{ x, y, z, rotateX, rotateY, scale, opacity, zIndex }}
      className="absolute inset-0 grid overflow-hidden rounded-[2.4rem] border border-white/60 bg-white shadow-2xl [transform-style:preserve-3d] lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10">
        <MoleculeMark className="absolute right-6 top-6 h-32 w-48 text-primary/20" />
        <div className="relative flex items-start justify-between">
          <span className="rounded-full bg-primary px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white">
            {industry.shortName}
          </span>
          <span className="font-display text-6xl font-black italic tracking-tighter text-slate-200">{industry.code}</span>
        </div>
        <div className="relative">
          <h3 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-950">
            {industry.name}
          </h3>
          <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-text-slate">{industry.description}</p>
        </div>
      </div>
      <img src={industry.image} alt={industry.name} className="hidden h-full w-full object-cover lg:block" />
    </motion.article>
  );
}

function ScrollDepthStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const active = useTransform(scrollYProgress, (v) => v * 5);

  return (
    <section id="option-1" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHead
          option="01"
          title="Scroll Depth Stack."
          copy="A high-impact pinned deck where each industry card moves from depth into focus. This is the most cinematic option."
        />
        <div ref={ref} className="relative h-[420svh]">
          <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden [perspective:1600px]">
            <motion.div className="absolute left-6 top-1/2 hidden h-[62vh] w-px origin-top bg-primary lg:block" style={{ scaleY: progressScale }} />
            <div className="relative h-[68svh] min-h-[480px] w-full max-w-5xl [transform-style:preserve-3d]">
              {industries.slice(0, 6).map((industry, index) => (
                <div key={industry.name}>
                  <StackConceptCard industry={industry} index={index} active={active} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coverflow() {
  const [active, setActive] = useState(0);

  return (
    <section id="option-2" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHead
          option="02"
          title="Cinematic Coverflow."
          copy="A premium carousel inspired by high-end product microsites: one central hero card with side cards in perspective."
        />
        <div className="relative flex min-h-[660px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-dark via-slate-950 to-primary [perspective:1400px]">
          {industries.map((industry, index) => {
            let offset = index - active;
            if (offset > industries.length / 2) offset -= industries.length;
            if (offset < -industries.length / 2) offset += industries.length;

            return (
              <motion.article
                key={industry.name}
                animate={{
                  x: offset * 230,
                  z: -Math.abs(offset) * 180,
                  rotateY: offset * -24,
                  scale: 1 - Math.abs(offset) * 0.08,
                  opacity: Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.18,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-[470px] w-[min(390px,75vw)] overflow-hidden rounded-[2rem] border border-white/15 bg-navy-dark text-white shadow-2xl"
              >
                <img src={industry.image} alt={industry.name} className="absolute inset-0 h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <span className="rounded-full bg-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-slate-950">
                    {industry.code}
                  </span>
                  <h3 className="mt-5 font-display text-4xl font-black uppercase italic leading-[0.86] tracking-tighter">{industry.name}</h3>
                </div>
              </motion.article>
            );
          })}
          <div className="absolute bottom-8 z-20 flex gap-3">
            <button onClick={() => setActive((active - 1 + industries.length) % industries.length)} className="rounded-full bg-white p-4 text-slate-950 shadow-xl">
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => setActive((active + 1) % industries.length)} className="rounded-full bg-white p-4 text-slate-950 shadow-xl">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingBento() {
  return (
    <section id="option-3" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHead
          option="03"
          title="Floating Bento Board."
          copy="Editorial, stable, and polished. Cards reveal in a staggered motion and tilt subtly on hover."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid auto-rows-[250px] gap-5 md:grid-cols-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={{ hidden: { opacity: 0, y: 34, rotateX: 8 }, visible: { opacity: 1, y: 0, rotateX: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <IndustryMiniCard industry={industry} index={index} dark={index % 3 === 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OrbitalHub() {
  const [active, setActive] = useState(0);
  const activeIndustry = industries[active];

  return (
    <section id="option-4" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHead
          option="04"
          title="Orbital Industry Hub."
          copy="A central focused card with supporting industries orbiting around it. Best for a bold brand-led section."
        />
        <div className="relative grid min-h-[720px] place-items-center overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white [perspective:1500px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,71,161,0.15),transparent_30rem)]" />
          {industries.map((industry, index) => {
            const angle = ((index - active) / industries.length) * Math.PI * 2;
            return (
              <motion.button
                key={industry.name}
                onClick={() => setActive(index)}
                animate={{
                  x: Math.cos(angle) * 390,
                  y: Math.sin(angle) * 220,
                  z: Math.sin(angle) * 160,
                  rotateY: Math.cos(angle) * -18,
                  opacity: 0.45 + (Math.sin(angle) + 1) * 0.22,
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-28 w-40 rounded-[1.5rem] border border-slate-200 bg-white p-4 text-left shadow-xl"
              >
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-primary">{industry.code}</span>
                <p className="mt-5 font-display text-xl font-black uppercase italic leading-none tracking-tighter text-slate-950">{industry.shortName}</p>
              </motion.button>
            );
          })}
          <motion.article
            key={activeIndustry.name}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-md rounded-[2.2rem] bg-navy-dark p-8 text-white shadow-2xl"
          >
            <span className="rounded-full bg-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-slate-950">
              {activeIndustry.code} / {activeIndustry.shortName}
            </span>
            <h3 className="mt-7 font-display text-5xl font-black uppercase italic leading-[0.85] tracking-tighter">{activeIndustry.name}</h3>
            <p className="mt-5 font-semibold leading-relaxed text-white/70">{activeIndustry.description}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function DiagonalRail() {
  return (
    <section id="option-5" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHead
          option="05"
          title="Diagonal Rail Cards."
          copy="A smooth, stable option with a technical diagonal rhythm. It feels premium without risking performance."
        />
        <div className="relative">
          <div className="absolute left-6 right-6 top-1/2 hidden h-px -rotate-3 bg-primary/40 lg:block" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: index % 2 === 0 ? 0 : 54 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <IndustryMiniCard industry={industry} index={index} dark={index % 4 === 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryConceptsPreview() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface text-text-main">
      <section className="grid min-h-[80svh] place-items-center px-6 py-24 text-center">
        <div>
          <span className="mb-5 block font-mono text-[12px] font-black uppercase italic tracking-[0.3em] text-primary">
            [ React + Framer Motion Concepts ]
          </span>
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase italic leading-[0.78] tracking-tighter text-slate-950">
            3D Industry <span className="text-primary">Motion</span> Concepts.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-relaxed text-text-slate sm:text-lg">
            This is a separate React preview route. The main website is untouched. Choose one option number and I’ll implement only that style into the real Industries section.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[1, 2, 3, 4, 5].map((option) => (
              <a key={option} href={`#option-${option}`} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 shadow-sm">
                Option 0{option}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ScrollDepthStack />
      <Coverflow />
      <FloatingBento />
      <OrbitalHub />
      <DiagonalRail />
    </main>
  );
}
