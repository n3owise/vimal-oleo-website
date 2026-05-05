import { BadgeCheck, Eye, Factory } from 'lucide-react';
import { sectionHeadingClass } from '@/src/lib/section-styles';

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
    mobileTitle: 'Values',
    icon: BadgeCheck,
    text: 'We are guided by our values of quality, customer focus, innovation, reliability, and sustainability, which shape every decision and action.',
  },
];

const mobileAccentColor = '#0D47A1';
const mobileIconBackground = '#ddecff';

export function OurPhilosophy() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden bg-slate-950">
        <img
          src="/philosophy-bg.avif"
          alt=""
          className="h-full w-full object-cover grayscale opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-primary/20 to-primary/10" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl rounded-[2.5rem] border border-white/40 bg-white/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-12">
        <div className="mb-12 max-w-3xl">
          <h3 className={sectionHeadingClass}>
            OUR<br />
            <span className="text-primary">PHILOSOPHY.</span>
          </h3>
        </div>

        <div className="grid gap-5 lg:hidden">
          {philosophyItems.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-white/60 bg-white/85 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: mobileIconBackground, color: mobileAccentColor }} aria-hidden="true">
                  <item.icon size={20} strokeWidth={1.85} />
                </span>
                <h4 className="font-display text-[1.25rem] font-black uppercase leading-none tracking-tight text-slate-950">
                  {item.mobileTitle ?? item.title}
                </h4>
              </div>

              <div className="pt-1">
                <p className="text-[0.94rem] font-medium leading-relaxed text-text-slate">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {philosophyItems.map((item) => (
            <article key={item.title} className="min-h-[285px] rounded-[1.75rem] border border-white/60 bg-white/60 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-slate-950">{item.title}</h4>
              <p className="mt-5 text-base font-medium leading-relaxed text-text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
