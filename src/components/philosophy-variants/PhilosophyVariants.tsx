import React from 'react';
import { Eye, Factory, BadgeCheck } from 'lucide-react';

const items = [
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

function Card({ title, Icon, text, className = '' }: any) {
  return (
    <article className={`rounded-2xl bg-white p-4 shadow-sm ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon size={18} />
        </div>
        <div>
          <h4 className="font-display text-base font-black uppercase tracking-tight text-slate-900">{title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-text-slate">{text}</p>
        </div>
      </div>
    </article>
  );
}

export function Variant01() {
  // Polished stacked cards with left accent and subtle shadow
  return (
    <div className="space-y-4 px-4 py-6">
      {items.map((it, idx) => (
        <article
          key={it.title}
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 p-4 shadow-md transition-transform hover:-translate-y-1`}
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-r-full" style={{ background: idx === 0 ? 'linear-gradient(180deg,#0ea5a4,#06b6d4)' : idx === 1 ? 'linear-gradient(180deg,#2563eb,#7c3aed)' : 'linear-gradient(180deg,#16a34a,#86efac)' }} />
          <div className="pl-4">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/60 text-primary ring-1 ring-slate-100">
                <it.icon size={20} />
              </div>
              <div>
                <h4 className="font-display text-base font-extrabold uppercase tracking-tight text-slate-900">{it.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Variant02() {
  // Elevated pill cards with subtle divider and CTA feel
  return (
    <div className="space-y-4 px-4 py-6">
      {items.map((it) => (
        <div key={it.title} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-tr from-primary to-primary/70 text-white">
            <it.icon size={18} />
          </div>
          <div className="flex-1">
            <h4 className="font-display text-sm font-semibold tracking-tight text-slate-900">{it.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{it.text}</p>
          </div>
          <div className="text-xs font-medium text-primary">Learn more</div>
        </div>
      ))}
    </div>
  );
}

export function Variant03() {
  // Split feature rows with soft bg and icon panel
  return (
    <div className="space-y-4 px-4 py-6">
      {items.map((it, idx) => (
        <div key={it.title} className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-white to-slate-50 p-4 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/80 text-primary ring-1 ring-slate-100">
            <it.icon size={20} />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-slate-900">{it.title}</h4>
            <p className="mt-1 max-w-prose text-sm text-slate-600">{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Variant04() {
  // Image-backed cards with overlay title for richer visuals
  return (
    <div className="grid gap-4 grid-cols-1 px-4 py-6 sm:grid-cols-2">
      {items.map((it, idx) => (
        <article key={it.title} className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-36 w-full bg-slate-100">
            <img src="/philosophy-bg.avif" alt="" className="h-full w-full object-cover brightness-90" />
          </div>
          <div className="p-4 bg-gradient-to-t from-white/90 via-white/60 to-transparent">
            <h4 className="font-display text-sm font-extrabold text-slate-900">{it.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{it.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Variant05() {
  // Centered timeline with numbered markers
  return (
    <div className="px-4 py-6">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200" />
        <div className="space-y-8 pl-10">
          {items.map((it, idx) => (
            <div key={it.title} className="relative">
              <div className="absolute left-0 -mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white text-primary shadow">
                <span className="font-display text-sm font-bold">{idx + 1}</span>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-display text-sm font-bold text-slate-900">{it.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Variant06() {
  // Accordion with clear separators and chevron indicator
  return (
    <div className="px-4 py-6">
      {items.map((it) => (
        <details key={it.title} className="group mb-4 overflow-hidden rounded-xl bg-white shadow-md">
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <it.icon size={18} />
              </div>
              <h4 className="font-display text-sm font-semibold text-slate-900">{it.title}</h4>
            </div>
            <span className="transition-transform duration-200 group-open:rotate-45 text-slate-400">+</span>
          </summary>
          <div className="border-t p-4 text-sm text-slate-600">{it.text}</div>
        </details>
      ))}
    </div>
  );
}

export function Variant07() {
  // Glass-like horizontal rail with elevated cards
  return (
    <div className="overflow-x-auto px-4 py-6">
      <div className="flex w-max gap-4">
        {items.map((it) => (
          <article key={it.title} className="min-w-[240px] transform-gpu rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-primary/70 text-white">
                <it.icon size={18} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">{it.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{it.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Variant08() {
  // Compact two-column grid with colored icon circles
  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-6">
      {items.map((it, idx) => (
        <article key={it.title} className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white`} style={{ background: idx === 0 ? '#0ea5a4' : idx === 1 ? '#2563eb' : '#16a34a' }}>
            <it.icon size={16} />
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-slate-900">{it.title}</h4>
            <p className="mt-1 text-xs text-slate-600">{it.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Variant09() {
  // Alternating rows with soft colored panels for contrast
  return (
    <div className="space-y-4 px-4 py-6">
      {items.map((it, idx) => (
        <div key={it.title} className={`flex items-center gap-4 rounded-2xl p-4 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/80 text-primary ring-1 ring-slate-100">
            <it.icon size={18} />
          </div>
          <div>
            <h4 className="font-display text-base font-semibold text-slate-900">{it.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Variant10() {
  // Image header with bold overlay title and compact copy
  return (
    <div className="px-4 py-6">
      {items.map((it) => (
        <article key={it.title} className="mb-6 overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-36 w-full">
            <img src="/philosophy-bg.avif" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <h4 className="absolute left-4 bottom-4 font-display text-lg font-extrabold text-white">{it.title}</h4>
          </div>
          <div className="p-4 bg-white">
            <p className="text-sm text-slate-600">{it.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export const ALL_VARIANTS: Record<string, React.FC> = {
  '01': Variant01,
  '02': Variant02,
  '03': Variant03,
  '04': Variant04,
  '05': Variant05,
  '06': Variant06,
  '07': Variant07,
  '08': Variant08,
  '09': Variant09,
  '10': Variant10,
};

export const VARIANT_LIST = Object.keys(ALL_VARIANTS);

export default ALL_VARIANTS;
