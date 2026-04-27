import { motion } from 'framer-motion';
import { BadgeCheck, Boxes, Handshake, Ship } from 'lucide-react';

const stats = [
  {
    icon: Ship,
    value: "JNPT",
    label: "Strategic Supply",
    description: "Warehousing strategically located near JNPT port for faster delivery."
  },
  {
    icon: BadgeCheck,
    value: "Authorised",
    label: "Direct Partners",
    description: "Authorised partners of top global manufacturers like Jocil & 3F."
  },
  {
    icon: Handshake,
    value: "Transparent",
    label: "Client Support",
    description: "Transparent processes and personalised support for every client."
  },
  {
    icon: Boxes,
    value: "Diverse",
    label: "Quality Portfolio",
    description: "Diverse, quality-assured portfolio across all major oleo chemicals."
  }
];

export function Stats() {
  const OptionLabel = ({ children }: { children: string }) => (
    <p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-primary">
      {children}
    </p>
  );

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative z-20" id="why-us">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase text-primary font-bold tracking-[0.2em] mb-4 block">
            THE VIMAL ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-slate-900">
            WHY CHOOSE VIMAL OLEO?
          </h2>
        </div>
        <div className="mx-auto max-w-5xl space-y-14">
          <div>
            <OptionLabel>Option 01</OptionLabel>
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={`option-1-${stat.value}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-surface p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/15">
                    <stat.icon size={22} strokeWidth={1.9} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-2xl font-black leading-none tracking-tighter text-slate-900">{stat.value}</span>
                      <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-primary">{stat.label}</span>
                    </div>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-text-slate">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <OptionLabel>Option 02</OptionLabel>
            <div className="grid grid-cols-2 gap-3 rounded-[2rem] bg-navy-dark p-3 shadow-2xl">
              {stats.map((stat) => (
                <div key={`option-2-${stat.value}`} className="min-h-[168px] rounded-3xl border border-white/10 bg-white/5 p-4 text-white">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <stat.icon size={21} strokeWidth={1.9} />
                  </div>
                  <span className="block font-display text-xl font-black leading-none tracking-tighter">{stat.value}</span>
                  <span className="mt-1 block font-mono text-[8px] font-black uppercase tracking-[0.18em] text-primary">{stat.label}</span>
                  <p className="mt-4 text-[10px] font-medium leading-relaxed text-white/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <OptionLabel>Option 03</OptionLabel>
            <div className="relative border-l-2 border-primary/20 pl-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={`option-3-${stat.value}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pb-6 last:pb-0"
                >
                  <div className="absolute -left-[30px] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm">
                    <stat.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="block text-2xl font-black tracking-tighter text-slate-900">{stat.value}</span>
                    <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.2em] text-primary">{stat.label}</span>
                    <p className="mt-3 text-xs font-medium leading-relaxed text-text-slate">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <OptionLabel>Option 04</OptionLabel>
            <div className="space-y-3">
              {stats.map((stat) => (
                <div key={`option-4-${stat.value}`} className="rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <stat.icon size={18} strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black leading-none tracking-tight text-slate-900">{stat.value}</span>
                      <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.18em] text-primary">{stat.label}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <OptionLabel>Option 05</OptionLabel>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              {stats.map((stat, index) => (
                <div key={`option-5-${stat.value}`} className="grid grid-cols-[3.75rem_1fr] border-b border-slate-100 last:border-b-0">
                  <div className="flex flex-col items-center justify-center bg-primary/10 px-3 py-5 text-primary">
                    <stat.icon size={20} strokeWidth={1.9} />
                    <span className="mt-2 font-mono text-[9px] font-black">0{index + 1}</span>
                  </div>
                  <div className="p-5">
                    <span className="block text-2xl font-black tracking-tighter text-slate-900">{stat.value}</span>
                    <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.2em] text-primary">{stat.label}</span>
                    <p className="mt-3 text-xs font-medium leading-relaxed text-text-slate">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
