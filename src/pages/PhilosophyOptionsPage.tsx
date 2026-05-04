import { BadgeCheck, Eye, Factory, Leaf, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const philosophyItems = [
  {
    title: 'Vision',
    icon: Eye,
    text: 'To be the most trusted global partner in the oleochemicals industry through quality, innovation, and sustainability.',
  },
  {
    title: 'Mission',
    icon: Factory,
    text: 'To deliver high-quality oleochemicals with reliability and service excellence, exceeding customer expectations.',
  },
  {
    title: 'Value',
    icon: BadgeCheck,
    text: 'We are guided by our values of quality, customer focus, innovation, reliability, and sustainability, which shape every decision and action.',
  },
];

function PreviewShell({
  id,
  name,
  description,
  children,
}: {
  key?: string;
  id: string;
  name: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-[#1d5fb8]/[0.06] sm:p-5">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-[#1d5fb8]">{id}</p>
          <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-slate-950">{name}</h2>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-text-slate">{description}</p>
      </div>
      {children}
    </section>
  );
}

function Option01() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
          <h3 className={sectionHeadingClass}>
            BUILT ON<br />
            <span className="text-primary">PURPOSE.</span>
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {philosophyItems.map((item) => (
            <article key={item.title} className="min-h-[300px] rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
              <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option02() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-36">
          <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
          <h3 className={sectionHeadingClass}>
            WHAT<br />
            <span className="text-primary">GUIDES US.</span>
          </h3>
        </div>

        <div className="grid gap-4">
          {philosophyItems.map((item, index) => (
            <article key={item.title} className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-[#f4f6f9] p-7 shadow-sm sm:grid-cols-[5rem_1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <span className="font-display text-xl font-black">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h4 className="font-display text-2xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
                <p className="mt-3 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option03() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-white shadow-2xl shadow-primary/15 sm:px-10 lg:px-14">
      <video
        aria-hidden="true"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-24 mix-blend-screen"
      >
        <source src="/hero-flowing-elements.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f9fbfc]/16 via-[#0d47a1]/86 to-[#002a45]/92" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/80">[ OUR PHILOSOPHY ]</span>
          <h3 className="font-display text-[clamp(2rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
            PRINCIPLES IN<br />
            <span className="text-white/70">MOTION.</span>
          </h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {philosophyItems.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-white/25 bg-white/14 p-7 shadow-xl shadow-black/10 backdrop-blur-xl">
              <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-white">{item.title}</h4>
              <p className="mt-5 text-base font-medium leading-relaxed text-white/78">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option04() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
            <h3 className={sectionHeadingClass}>
              THREE<br />
              <span className="text-primary">PROMISES.</span>
            </h3>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-text-slate">
            A compact section with a strong editorial rhythm and cards that feel connected to the existing product marquee.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-[#1d5fb8]/[0.06] lg:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <article key={item.title} className="min-h-[310px] border-b border-slate-200 p-8 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="font-display text-sm font-black uppercase tracking-[0.3em] text-primary">{String(index + 1).padStart(2, '0')}</p>
              <h4 className="mt-16 font-display text-4xl font-black uppercase italic tracking-tight text-slate-950">{item.title}</h4>
              <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option05() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
          <h3 className={sectionHeadingClass}>
            CLEAR<br />
            <span className="text-primary">DIRECTION.</span>
          </h3>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-primary/20 md:block" />
          <div className="grid gap-5">
            {philosophyItems.map((item) => (
              <article key={item.title} className="relative rounded-[1.75rem] border border-slate-200 bg-[#f4f6f9] p-7 shadow-sm md:ml-20">
                <div className="absolute -left-[5.6rem] top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm md:flex">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h4 className="font-display text-3xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
                <p className="mt-4 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Option06() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#eaf3ff] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
            <h3 className={sectionHeadingClass}>
              QUALITY<br />
              <span className="text-primary">WITH INTENT.</span>
            </h3>
          </div>
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/70 bg-white/70 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-xl">
            <Sparkles size={16} />
            Vimal Oleo Group
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-white/70 bg-white/76 p-8 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
            <Leaf className="mb-16 text-primary" size={34} strokeWidth={1.7} />
            <h4 className="font-display text-5xl font-black uppercase italic leading-none tracking-tight text-slate-950">Vision</h4>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{philosophyItems[0].text}</p>
          </article>
          <div className="grid gap-5">
            {philosophyItems.slice(1).map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/70 bg-white/76 p-7 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
                <h4 className="font-display text-3xl font-black uppercase italic tracking-tight text-slate-950">{item.title}</h4>
                <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Option07() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-16 text-white sm:px-10 lg:px-14">
      <img
        src="/philosophy-bg.avif"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e38]/88 via-[#0d47a1]/58 to-[#001e38]/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/72 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/80">[ OUR PHILOSOPHY ]</span>
          <h3 className="font-display text-[clamp(2rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
            OUR<br />
            <span className="text-white/72">PHILOSOPHY.</span>
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {philosophyItems.map((item) => (
            <article key={item.title} className="min-h-[285px] rounded-[1.75rem] border border-white/30 bg-white/16 p-7 shadow-xl shadow-black/10 backdrop-blur-xl">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-white">{item.title}</h4>
              <p className="mt-5 text-base font-medium leading-relaxed text-white/82">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option08() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-[#1d5fb8]/[0.06]">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[460px] overflow-hidden bg-[#eaf3ff]">
          <img
            src="/philosophy-bg.avif"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/68 via-[#0d47a1]/16 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/35 bg-white/20 p-6 text-white backdrop-blur-xl">
            <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-white/80">Vimal Oleo Group</p>
            <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-white/82">
              A philosophy built around consistent supply, technical trust, and long-term industrial partnerships.
            </p>
          </div>
        </div>

        <div className="px-6 py-14 sm:px-10 lg:px-12">
          <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
          <h3 className={sectionHeadingClass}>
            OPERATING<br />
            <span className="text-primary">BELIEFS.</span>
          </h3>

          <div className="mt-10 grid gap-4">
            {philosophyItems.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-[#f4f6f9] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <item.icon size={20} strokeWidth={1.8} />
                  </span>
                  <h4 className="font-display text-2xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
                </div>
                <p className="text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Option09() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
          <h3 className={sectionHeadingClass}>
            FOCUSED<br />
            <span className="text-primary">FOUNDATION.</span>
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <article key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-[#1d5fb8]/[0.06]">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/philosophy-bg.avif"
                  alt=""
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
                    index === 0 && 'object-left',
                    index === 1 && 'object-center',
                    index === 2 && 'object-right'
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/62 to-transparent" />
                <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-lg">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
              </div>
              <div className="p-7">
                <h4 className="font-display text-3xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
                <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option10() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <img
          src="/philosophy-bg.avif"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/38 to-[#0d47a1]/18" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className={sectionEyebrowClass}>[ OUR PHILOSOPHY ]</span>
            <h3 className={sectionHeadingClass}>
              TRUST<br />
              <span className="text-primary">IN PRACTICE.</span>
            </h3>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-text-slate">
              A structured philosophy section with the industrial image used as a quiet supporting layer rather than the main surface.
            </p>
          </div>

          <div className="grid gap-4">
            {philosophyItems.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/70 bg-white/82 p-7 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon size={23} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
                    <p className="mt-3 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const options = [
  {
    id: '01',
    name: 'Clean Three Cards',
    description: 'Most consistent with the homepage cards and product section.',
    component: <Option01 />,
  },
  {
    id: '02',
    name: 'Sticky Text + Rows',
    description: 'Best if the page should continue the About timeline feeling.',
    component: <Option02 />,
  },
  {
    id: '03',
    name: 'Video Glass Panel',
    description: 'Most dramatic, using the same moving hero material.',
    component: <Option03 />,
  },
  {
    id: '04',
    name: 'Editorial Split Cards',
    description: 'Strong, simple, and premium with big typographic labels.',
    component: <Option04 />,
  },
  {
    id: '05',
    name: 'Vertical Principle Line',
    description: 'A calmer timeline-style continuation after the journey section.',
    component: <Option05 />,
  },
  {
    id: '06',
    name: 'Featured Vision Layout',
    description: 'Gives Vision more weight while keeping Mission and Value clear.',
    component: <Option06 />,
  },
  {
    id: '07',
    name: 'Image Glass Overlay',
    description: 'Uses the industrial image as a full background with glass cards on top.',
    component: <Option07 />,
  },
  {
    id: '08',
    name: 'Split Image Panel',
    description: 'Keeps the image as a strong left-side visual and places the philosophy points in structured rows.',
    component: <Option08 />,
  },
  {
    id: '09',
    name: 'Image Card Set',
    description: 'Each philosophy card gets its own image header for a clear card-based layout.',
    component: <Option09 />,
  },
  {
    id: '10',
    name: 'Background Image Layer',
    description: 'Uses the image subtly on the right while the text stays clean and readable.',
    component: <Option10 />,
  },
];

export function PhilosophyOptionsPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.35em] text-[#1d5fb8]">About Page Section</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-950">
            Philosophy<br />
            <span className="italic text-[#1d5fb8]">Variations.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">
            Preview-only concepts for the section that will appear after the About timeline animation.
          </p>
        </div>

        <div className="grid gap-16">
          {options.map((option) => {
            if (option.id === '07') {
              return (
                <div key={option.id} className="relative w-screen left-1/2 -translate-x-1/2">
                  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 mb-6">
                    <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-[#1d5fb8]">{option.id}</p>
                    <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-slate-950">{option.name}</h2>
                    <p className="max-w-xl text-sm font-medium leading-relaxed text-text-slate">{option.description}</p>
                  </div>
                  {option.component}
                </div>
              );
            }
            return (
              <PreviewShell key={option.id} id={option.id} name={option.name} description={option.description}>
                {option.component}
              </PreviewShell>
            );
          })}
        </div>
      </div>
    </div>
  );
}
