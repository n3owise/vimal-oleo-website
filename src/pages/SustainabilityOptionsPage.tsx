import type { ReactNode } from 'react';
import { BadgeCheck, Factory, Leaf, Recycle, ShieldCheck, Sparkles, Sprout, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const sustainabilityText =
  'At Vimal Oleo Group, we align growth with responsibility. We focus on eco-friendly solutions, responsible sourcing, waste reduction, and energy efficiency. By partnering with like-minded clients and suppliers, we strive to deliver value while protecting the environment for a sustainable future.';

const pillars = [
  { title: 'Eco-Friendly Solutions', icon: Leaf },
  { title: 'Responsible Sourcing', icon: ShieldCheck },
  { title: 'Waste Reduction', icon: Recycle },
  { title: 'Energy Efficiency', icon: Zap },
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            GROWTH WITH<br />
            <span className="text-primary">RESPONSIBILITY.</span>
          </h3>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="min-h-[190px] rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-[#1d5fb8]/[0.06]">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon size={23} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-xl font-black uppercase tracking-tight text-slate-950">{pillar.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option02() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-white shadow-2xl shadow-[#1d5fb8]/15 sm:px-10 lg:px-14">
      <img src="/philosophy-bg.avif" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e38]/90 via-[#0d47a1]/62 to-[#001e38]/30" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/80">[ SUSTAINABILITY ]</span>
          <h3 className="font-display text-[clamp(2rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
            RESPONSIBLE<br />
            <span className="text-white/72">INDUSTRY.</span>
          </h3>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-white/82">{sustainabilityText}</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[1.5rem] border border-white/28 bg-white/16 p-5 backdrop-blur-xl">
              <pillar.icon className="mb-8 text-white" size={24} strokeWidth={1.8} />
              <h4 className="font-display text-lg font-black uppercase tracking-tight text-white">{pillar.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option03() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-[#1d5fb8]/[0.06]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="px-6 py-16 sm:px-10 lg:px-14">
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            A LONG<br />
            <span className="text-primary">VIEW.</span>
          </h3>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
          <div className="mt-10 grid gap-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f4f6f9] p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <pillar.icon size={20} strokeWidth={1.8} />
                </span>
                <span className="font-display text-sm font-black uppercase tracking-tight text-slate-950">{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <img src="/philosophy-bg.avif" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001e38]/62 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/35 bg-white/18 p-6 text-white backdrop-blur-xl">
            <p className="font-display text-4xl font-black uppercase italic leading-none">Since 1980</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white/80">A long-living company built on reliability, relationships, and responsible growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Option04() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#eaf3ff] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            HOW WE<br />
            <span className="text-primary">MOVE FORWARD.</span>
          </h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="rounded-[1.75rem] border border-white/70 bg-white/76 p-6 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
              <p className="font-display text-xs font-black uppercase tracking-[0.28em] text-primary">{String(index + 1).padStart(2, '0')}</p>
              <pillar.icon className="mb-16 mt-8 text-primary" size={30} strokeWidth={1.7} />
              <h4 className="font-display text-xl font-black uppercase tracking-tight text-slate-950">{pillar.title}</h4>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
      </div>
    </div>
  );
}

function Option05() {
  const story = ['Growth', 'Responsibility', 'Partnership', 'Future'];

  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
            <h3 className={sectionHeadingClass}>
              THE NEXT<br />
              <span className="text-primary">CHAPTER.</span>
            </h3>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
        </div>
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f4f6f9] shadow-xl shadow-[#1d5fb8]/[0.06] lg:grid-cols-4">
          {story.map((item, index) => (
            <article key={item} className="min-h-[250px] border-b border-slate-200 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="font-display text-sm font-black uppercase tracking-[0.3em] text-primary">{String(index + 1).padStart(2, '0')}</p>
              <h4 className="mt-24 font-display text-2xl font-black uppercase italic tracking-tight text-slate-950">{item}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option06() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f4f6f9_42%,#eaf3ff_100%)]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary via-[#8fc2ff] to-primary" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            BALANCED<br />
            <span className="text-primary">PROGRESS.</span>
          </h3>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
          <Sprout className="mb-10 text-primary" size={34} strokeWidth={1.7} />
          <p className="text-xl font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <span key={pillar.title} className="rounded-full border border-slate-200 bg-white px-4 py-2 font-display text-xs font-black uppercase tracking-[0.12em] text-primary">
                {pillar.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Option07() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            RESPONSIBLE<br />
            <span className="text-primary">NETWORK.</span>
          </h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#1d5fb8]/[0.06] lg:col-span-2">
            <Factory className="mb-20 text-primary" size={34} strokeWidth={1.7} />
            <p className="max-w-3xl text-xl font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
          </article>
          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]">
              <h4 className="font-display text-4xl font-black uppercase italic tracking-tight text-primary">Clients</h4>
              <p className="mt-4 text-base font-medium leading-relaxed text-text-slate">Like-minded partnerships that value responsible supply.</p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#1d5fb8]/[0.06]">
              <h4 className="font-display text-4xl font-black uppercase italic tracking-tight text-primary">Suppliers</h4>
              <p className="mt-4 text-base font-medium leading-relaxed text-text-slate">Sourcing relationships aligned with long-term value.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function Option08() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            BUILT TO<br />
            <span className="text-primary">LAST.</span>
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {['Long-Living Company', 'Responsible Decisions', 'Sustainable Future'].map((title, index) => (
            <article key={title} className={cn('rounded-[1.75rem] p-7 shadow-xl', index === 1 ? 'bg-primary text-white shadow-primary/15' : 'border border-slate-200 bg-[#f4f6f9] text-slate-950 shadow-[#1d5fb8]/[0.06]')}>
              <Sparkles className={cn('mb-20', index === 1 ? 'text-white' : 'text-primary')} size={26} strokeWidth={1.7} />
              <h4 className="font-display text-3xl font-black uppercase italic tracking-tight">{title}</h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Option09() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-[#001e38] text-white">
      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
        <div className="px-6 py-16 sm:px-10 lg:px-14">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/72">[ SUSTAINABILITY ]</span>
          <h3 className="font-display text-[clamp(2rem,7vw,4.6rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
            VALUE<br />
            <span className="text-[#8fc2ff]">WITHOUT WASTE.</span>
          </h3>
        </div>
        <div className="grid divide-y divide-white/15 border-t border-white/15 lg:border-l lg:border-t-0">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="grid gap-6 p-7 sm:grid-cols-[4rem_1fr]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary">
                <pillar.icon size={23} strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-display text-2xl font-black uppercase tracking-tight text-white">{pillar.title}</h4>
                <p className="mt-2 text-base font-medium leading-relaxed text-white/70">Part of a practical sustainability approach that connects everyday operations with long-term responsibility.</p>
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
    <div className="overflow-hidden rounded-[2.5rem] bg-[#f4f6f9] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-[#1d5fb8]/[0.06] sm:p-10 lg:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <img src="/philosophy-bg.avif" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-transparent" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
            <h3 className={sectionHeadingClass}>
              FUTURE<br />
              <span className="text-primary">READY.</span>
            </h3>
            <p className="mt-7 text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f4f6f9] p-4">
                  <pillar.icon className="text-primary" size={20} strokeWidth={1.8} />
                  <span className="font-display text-xs font-black uppercase tracking-tight text-slate-950">{pillar.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const options = [
  {
    id: '01',
    name: 'Pillar Cards',
    description: 'Clean, practical, and closest to the homepage card language.',
    component: <Option01 />,
  },
  {
    id: '02',
    name: 'Industrial Image Story',
    description: 'Full image background with glass cards for a more cinematic company story.',
    component: <Option02 />,
  },
  {
    id: '03',
    name: 'Long View Split',
    description: 'Text-led section with a strong image panel and “Since 1980” story cue.',
    component: <Option03 />,
  },
  {
    id: '04',
    name: 'Forward Path',
    description: 'Light blue responsibility cards with a clear process-like rhythm.',
    component: <Option04 />,
  },
  {
    id: '05',
    name: 'Next Chapter',
    description: 'Editorial storytelling around growth, responsibility, partnerships, and future.',
    component: <Option05 />,
  },
  {
    id: '06',
    name: 'Balanced Progress',
    description: 'Gradient-led but still restrained, with one strong narrative panel.',
    component: <Option06 />,
  },
  {
    id: '07',
    name: 'Responsible Network',
    description: 'Company story focused on clients and suppliers as part of sustainability.',
    component: <Option07 />,
  },
  {
    id: '08',
    name: 'Built To Last',
    description: 'Simple company-longevity storytelling with one bold center card.',
    component: <Option08 />,
  },
  {
    id: '09',
    name: 'Value Without Waste',
    description: 'Darker operational section that feels serious and industrial.',
    component: <Option09 />,
  },
  {
    id: '10',
    name: 'Future Ready',
    description: 'Clean white card with the image used subtly in the background.',
    component: <Option10 />,
  },
];

export function SustainabilityOptionsPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.35em] text-[#1d5fb8]">About Page Section</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-950">
            Sustainability<br />
            <span className="italic text-[#1d5fb8]">Variations.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-slate">
            Preview-only concepts for the section that can come after Philosophy on the About page.
          </p>
        </div>

        <div className="grid gap-8">
          {options.map((option) => (
            <PreviewShell key={option.id} id={option.id} name={option.name} description={option.description}>
              {option.component}
            </PreviewShell>
          ))}
        </div>
      </div>
    </div>
  );
}
