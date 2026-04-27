import { motion } from 'framer-motion';
import { BadgeCheck, Factory, Handshake, Warehouse } from 'lucide-react';

const aboutHighlights = [
  {
    icon: Handshake,
    title: "Trusted importers & distributors since 1980",
  },
  {
    icon: BadgeCheck,
    title: "Authorised distributors for Jocil Ltd & 3F Industries",
  },
  {
    icon: Warehouse,
    title: "Dedicated warehousing for fast & reliable delivery",
  },
  {
    icon: Factory,
    title: "Serving industries from cosmetics to PVC",
  },
];

export function Reliability() {
  return (
    <section className="py-24 bg-surface text-text-main overflow-hidden border-b border-slate-100" id="about">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.3em] block mb-4 italic font-mono">
                [ ABOUT US ]
              </span>
              <h2 className="text-[clamp(2rem,8vw,5rem)] sm:text-[6vw] font-display font-black leading-[0.85] tracking-tighter mb-8 italic text-slate-900">
                OVER 40 YEARS OF<br />
                CHEMICAL<br />
                <span className="text-primary NOT-italic">EXCELLENCE.</span>
              </h2>
              <p className="text-lg text-text-slate font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Since 1980, Vimal Oleo Chemicals has built a trusted reputation in sourcing and distributing top-grade oleo chemicals across industries.
              </p>
              <div className="mx-auto max-w-4xl text-left lg:mx-0">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  {aboutHighlights.map((item, i) => (
                    <div key={item.title} className="grid grid-cols-[3.75rem_1fr] border-b border-slate-100 last:border-b-0">
                      <div className="flex items-center justify-center bg-primary/10 text-primary">
                        <item.icon className="shrink-0" size={24} strokeWidth={1.9} />
                      </div>
                      <div className="flex items-center p-4">
                        <span className="text-xs font-black uppercase leading-snug tracking-tight text-slate-900">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative mx-auto aspect-square max-w-lg"
            >
              {/* Background accent block */}
              <div className="absolute top-8 right-8 bottom-8 left-8 border-2 border-primary/20 rounded-[40px]" />

              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                  alt="Industrial warehouse"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-8 right-6 bg-white border border-slate-100 p-8 sm:p-10 rounded-2xl shadow-xl z-20 max-w-[220px]">
                <p className="text-5xl font-display font-black leading-none mb-2 tracking-tighter text-primary">46+</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-slate">Years of Reliability</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
