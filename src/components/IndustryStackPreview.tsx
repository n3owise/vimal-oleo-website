import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type StackIndustry = {
  title: string;
  code: string;
  tags: string[];
  copy: string;
  image: string;
};

const stackIndustries: StackIndustry[] = [
  {
    title: 'Pharmaceuticals & Formulator',
    code: '01',
    tags: ['Excipients', 'Formulation', 'Pharma'],
    copy: 'Reliable oleo chemical inputs for formulation, pharmaceutical processing, and quality-led production environments.',
    image: 'https://images.unsplash.com/photo-1579165466541-74e246905d4a?auto=format&fit=crop&q=85&w=1800',
  },
  {
    title: 'Cosmetics & Personal Care',
    code: '02',
    tags: ['Skincare', 'Haircare', 'Personal Care'],
    copy: 'Ingredient support for premium skincare, haircare, soaps, surfactants, and personal care applications.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=85&w=1800',
  },
  {
    title: 'PVC Pipes & PVC Compound',
    code: '03',
    tags: ['PVC', 'Compounding', 'Extrusion'],
    copy: 'Consistent industrial supply for PVC pipes, profiles, compounds, and extrusion-driven production lines.',
    image: 'https://images.unsplash.com/photo-1565008480292-2262189dbdd8?auto=format&fit=crop&q=85&w=1800',
  },
  {
    title: 'Paints, Inks & Laminated',
    code: '04',
    tags: ['Coatings', 'Inks', 'Lamination'],
    copy: 'Specialized materials for coatings, industrial inks, lamination, surface treatments, and finishing workflows.',
    image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=85&w=1800',
  },
];

function MoleculeOverlay() {
  return (
    <svg aria-hidden="true" viewBox="0 0 260 150" className="absolute right-6 top-6 h-28 w-44 text-primary/20 sm:h-36 sm:w-56" fill="none">
      <path d="M20 98 L58 54 L96 84 L136 36 L178 76 L238 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M96 84 L114 128 M136 36 L156 12 M178 76 L214 122" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {[20, 58, 96, 136, 178, 238].map((cx, index) => (
        <circle key={cx} cx={cx} cy={[98, 54, 84, 36, 76, 26][index]} r={index === 3 ? 8 : 6} fill="currentColor" />
      ))}
    </svg>
  );
}

export function IndustryStackPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        const image = imageRefs.current[index];
        const isLast = index === cardRefs.current.length - 1;

        gsap.set(card, {
          transformOrigin: 'center top',
          y: index === 0 ? 0 : 48,
          scale: index === 0 ? 1 : 0.95,
          boxShadow: `0 ${18 + index * 8}px ${55 + index * 12}px rgba(8, 22, 42, ${0.12 + index * 0.025})`,
        });

        gsap.to(card, {
          y: index === 0 ? -72 : -96,
          scale: isLast ? 1 : 0.9,
          opacity: isLast ? 1 : 0.5,
          ease: 'power2.inOut',
          boxShadow: `0 ${34 + index * 10}px ${85 + index * 16}px rgba(8, 22, 42, ${0.2 + index * 0.03})`,
          scrollTrigger: {
            trigger: card,
            start: 'top 10%',
            end: 'bottom top',
            scrub: true,
          },
        });

        if (index > 0) {
          gsap.fromTo(
            card,
            { y: 86, scale: 0.95, opacity: 0.82 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: card,
                start: 'top 78%',
                end: 'top 12%',
                scrub: true,
              },
            },
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -10, scale: 1.14 },
            {
              yPercent: 12,
              scale: 1.2,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-slate-950">
      <section className="grid min-h-[82svh] place-items-center px-5 py-20 text-center">
        <div>
          <span className="mb-5 block font-mono text-[11px] font-black uppercase italic tracking-[0.32em] text-primary">
            [ GSAP ScrollTrigger Preview ]
          </span>
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(3.25rem,10vw,8.8rem)] font-black uppercase italic leading-[0.76] tracking-tighter">
            Scroll Depth <span className="text-primary">Industry</span> Cards.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-relaxed text-text-slate sm:text-lg">
            A separate preview route using full-width overlapping cards, scrubbed parallax, image depth, sticky card behavior, and stacked shadows.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="relative px-4 pb-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {stackIndustries.map((industry, index) => (
            <article
              key={industry.title}
              ref={(node) => {
                if (node) cardRefs.current[index] = node;
              }}
              className="sticky top-[10svh] min-h-[72svh] overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#e8e8e8] p-5 shadow-xl sm:rounded-[2rem] sm:p-7 lg:min-h-[78svh] lg:p-8"
              style={{ marginTop: index === 0 ? 0 : '-64px', zIndex: index + 1 }}
            >
              <MoleculeOverlay />

              <header className="relative z-10 mb-5 flex flex-col gap-5 lg:mb-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="mt-1 rounded-full bg-primary px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white">
                    {industry.code}
                  </span>
                  <div>
                    <h2 className="max-w-3xl font-display text-[clamp(2.25rem,5.8vw,6.5rem)] font-black uppercase italic leading-[0.78] tracking-tighter">
                      {industry.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-text-slate sm:text-base">
                      {industry.copy}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                  {industry.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-800 backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className="relative z-10 h-[42svh] min-h-[300px] overflow-hidden rounded-[1.25rem] bg-slate-900 shadow-2xl sm:rounded-[1.5rem] lg:h-[48svh]">
                <img
                  ref={(node) => {
                    if (node) imageRefs.current[index] = node;
                  }}
                  src={industry.image}
                  alt={industry.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/5" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <p className="max-w-xl font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white/80">
                    Industries We Serve
                  </p>
                  <span className="hidden rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 sm:inline-flex">
                    Scroll linked
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
