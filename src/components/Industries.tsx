import { useEffect, useRef, useState } from 'react';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import {
  Beaker,
  Paintbrush,
  Cylinder,
  FlaskConical,
  Shirt,
  Leaf,
  Pill,
  SprayCan,
} from 'lucide-react';
import { sectionHeadingClass } from '@/src/lib/section-styles';

type Industry = {
  name: string;
  shortName: string;
  code: string;
  description: string;
  image: string;
  imagePosition: string;
  icon: typeof Pill;
};

const industries: Industry[] = [
  {
    name: 'Pharmaceuticals & Formulator',
    shortName: 'Pharma',
    code: 'PH',
    description: 'Oleo chemicals used in pharmaceutical, formulation, and excipient-led production.',
    image: '/industry-pharmaceuticals.jpg',
    imagePosition: 'center',
    icon: Pill,
  },
  {
    name: 'Paints, Inks & Laminated',
    shortName: 'Coatings',
    code: 'PI',
    description: 'Reliable inputs for coatings, industrial inks, lamination, and surface finishing.',
    image: '/industry-coatings.jpg',
    imagePosition: 'center',
    icon: Paintbrush,
  },
  {
    name: 'Intermediates',
    shortName: 'Intermediates',
    code: 'IN',
    description: 'Consistent chemical supply for intermediate manufacturing and process chemistry.',
    image: '/industry-intermediates.jpg',
    imagePosition: 'center',
    icon: FlaskConical,
  },
  {
    name: 'PVC Pipes & PVC Compound',
    shortName: 'PVC',
    code: 'PV',
    description: 'Materials supporting PVC pipe, profile, compound, and extrusion applications.',
    image: '/industry-pvc.jpg',
    imagePosition: 'center',
    icon: Cylinder,
  },
  {
    name: 'Textile Auxiliaries',
    shortName: 'Textile',
    code: 'TX',
    description: 'Processing aids for textile auxiliaries, fabric finishing, and fiber applications.',
    image: '/industry-textile.jpg',
    imagePosition: 'center',
    icon: Shirt,
  },
  {
    name: 'Plant Extract & Master Batches',
    shortName: 'Extracts',
    code: 'PM',
    description: 'Inputs for plant extract processing, master batches, and compounding operations.',
    image: '/industry-extracts.jpg',
    imagePosition: 'center',
    icon: Leaf,
  },
  {
    name: 'Cosmetics & Personal Care',
    shortName: 'Cosmetics',
    code: 'CP',
    description: 'High-quality oleo ingredients for skincare, hair care, and personal care products.',
    image: '/industry-cosmetics.png',
    imagePosition: 'center',
    icon: SprayCan,
  },
  {
    name: 'Speciality Chemicals',
    shortName: 'Speciality',
    code: 'SC',
    description: 'Flexible supply for speciality chemical production and technical industrial uses.',
    image: '/industry-speciality.jpg',
    imagePosition: 'center',
    icon: Beaker,
  },
];

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

function IndustryCard({
  industry,
  index,
  progress,
  total,
  targetScale,
  isMobile,
}: {
  industry: Industry;
  index: number;
  progress: MotionValue<number>;
  total: number;
  targetScale: number;
  isMobile: boolean;
}) {
  const Icon = industry.icon;
  const arrivalStart = index === 0 ? 0 : (index - 1) / (total - 1);
  const arrivalEnd = index === 0 ? 0.02 : index / (total - 1);
  const exitEnd = Math.min(arrivalEnd + 0.18, 1);
  const stackOffset = isMobile ? 8 : 20;
  const entryDistance = isMobile ? 420 : 800;
  
  const yInput = arrivalEnd >= 1 ? [arrivalStart, 1] : [arrivalStart, arrivalEnd, 1];
  const yOutput = arrivalEnd >= 1 
    ? [entryDistance, index * stackOffset] 
    : [index === 0 ? 0 : entryDistance, index * stackOffset, index * stackOffset];
  const y = useTransform(progress, yInput, yOutput);
  
  const scale = useTransform(progress, [arrivalEnd, exitEnd], [1, targetScale]);
  
  const shadowOpacity = useTransform(progress, [arrivalStart, arrivalEnd], [0.03, 0.1]);
  const boxShadow = useTransform(
    shadowOpacity,
    (value) => `0 15px 35px rgba(15, 23, 42, ${value})`,
  );

  return (
    <motion.div
      style={{
        x: '-50%',
        y,
        scale,
        boxShadow,
        zIndex: index + 1,
        transformOrigin: "top center",
      }}
      className="absolute left-1/2 top-0 flex h-[clamp(270px,48svh,355px)] w-[calc(100%-2rem)] max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white sm:h-[400px] sm:rounded-[2.5rem] md:flex-row lg:h-[clamp(330px,38svh,360px)]"
    >
      <div className="relative hidden flex-1 overflow-hidden bg-gradient-to-br from-primary/20 via-slate-100 to-slate-300 md:block">
        <img
          src={industry.image}
          alt={industry.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: industry.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col justify-center p-6 sm:p-10 [@media(max-height:900px)]:p-7 [@media(max-height:760px)]:p-6">
        <div>
          <div className="mb-3 flex items-center gap-4 sm:mb-6 [@media(max-height:900px)]:mb-3 [@media(max-height:760px)]:mb-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Industry 0{index + 1}
            </span>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>

          <div className="mb-3 flex items-start justify-between gap-5 sm:mb-5 [@media(max-height:900px)]:mb-3 [@media(max-height:760px)]:mb-2">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-12 sm:w-12 [@media(max-height:900px)]:h-10 [@media(max-height:900px)]:w-10">
              <Icon size={21} strokeWidth={1.9} />
            </span>
          </div>

          <h3 className="mb-3 font-display text-xl font-black uppercase leading-none tracking-tighter text-slate-900 sm:mb-4 sm:text-4xl [@media(max-height:900px)]:mb-3 [@media(max-height:900px)]:text-3xl [@media(max-height:760px)]:mb-2 [@media(max-height:760px)]:text-2xl">
            {industry.name}
          </h3>

          <p className="mb-4 max-w-md text-sm font-medium leading-relaxed text-text-slate sm:mb-8 sm:text-base [@media(max-height:900px)]:mb-4 [@media(max-height:900px)]:text-sm [@media(max-height:760px)]:mb-3">
            {industry.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {[industry.shortName, 'Oleo Chemicals', 'Industrial Supply'].map((tag) => (
              <span key={tag} className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Industries() {
  const container = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  // Finish the card animation early at 85% of the scroll track to create a natural pause
  // without artificially lengthening the page scroll distance
  const cardScrollProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  const blueGlowX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['-8rem', '20rem', '2rem', '30rem']);
  const blueGlowY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['-2rem', '10rem', '24rem', '38rem']);
  const blueGlowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.95]);
  const blueGlowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.75, 0.95, 0.8, 0.55]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  return (
    <section
      className="relative bg-[#f4f6f9] text-text-main pb-4 sm:pb-8"
      id="industries"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10rem] bottom-20 h-[28rem] w-[28rem] rounded-full bg-slate-900/[0.04] blur-3xl" />
      </div>

      {/* Keep the sticky stage full-height so the next section does not partially reveal during the stack handoff. */}
      <div 
        ref={container} 
        className="relative z-10" 
        style={{ height: `calc(${(industries.length - 1) * 60 + 100}vh)` }}
      >
        <div 
          className="sticky top-0 overflow-visible"
          style={{ height: '100svh' }}
        >
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <motion.div
              style={{
                x: blueGlowX,
                y: blueGlowY,
                scale: blueGlowScale,
                opacity: blueGlowOpacity,
              }}
              className="absolute left-[-12rem] top-6 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl"
            />
          </div>
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center sm:pt-12 lg:pt-14 [@media(max-height:900px)]:pt-7 [@media(max-height:760px)]:pt-5"
          >
            <h2 className={`${sectionHeadingClass} mb-4 sm:mb-6 [@media(max-height:900px)]:text-[clamp(2rem,6vw,4rem)] [@media(max-height:760px)]:mb-3 [@media(max-height:760px)]:text-[clamp(1.8rem,5vw,3.2rem)]`}>
              INDUSTRIES WE<br />
              <span className="text-primary">SERVE.</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-text-slate sm:text-base lg:text-lg [@media(max-height:760px)]:text-base">
              We introduce ourselves as one of the Importers & Suppliers of Oleo Chemicals. Our Chemicals & Pharmaceuticals are widely used by these industries.
            </p>
          </motion.div>

          <div className="relative z-10 mt-[clamp(3rem,8svh,6rem)] sm:mt-[clamp(5rem,11svh,8rem)] [@media(max-height:900px)]:mt-[clamp(2rem,5svh,4rem)] [@media(max-height:760px)]:mt-[clamp(1rem,3svh,2.5rem)]">
            {industries.map((industry, index) => {
              const targetScale = 1 - (industries.length - 1 - index) * 0.05;

              return (
                <div key={industry.name}>
                  <IndustryCard
                    industry={industry}
                    index={index}
                    progress={cardScrollProgress}
                    total={industries.length}
                    targetScale={targetScale}
                    isMobile={isMobile}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
