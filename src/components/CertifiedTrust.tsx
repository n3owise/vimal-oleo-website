import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const trustMarks = [
  {
    label: 'RSPO',
    sublabel: 'Certified Grades',
    logo: '/untitled folder/RSPO.avif',
  },
  {
    label: 'Jocil',
    sublabel: 'Authorised Distributor',
    logo: '/untitled folder/jocil.avif',
  },
  {
    label: '3F',
    sublabel: 'Authorised Distributor',
    logo: '/untitled folder/3f.avif',
  },
];

function LogoMarkCard({ mark }: { mark: (typeof trustMarks)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="flex min-h-[210px] flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
        {mark.sublabel}
      </p>
      <div className="flex min-h-0 flex-1 items-center justify-center py-5">
        <img
          src={mark.logo}
          alt={`${mark.label} logo`}
          className="max-h-24 max-w-[82%] object-contain"
        />
      </div>
    </motion.div>
  );
}

export function CertifiedTrust() {
  return (
    <section id="certified-trust" className="bg-[#eef3f8] px-5 py-24 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-[2rem] bg-surface p-7 sm:p-9"
        >
          <Sparkles className="absolute right-6 top-6 text-primary/20" size={68} strokeWidth={1.5} />
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
            [ CERTIFIED FOR TRUST ]
          </span>
          <h2 className="font-display text-[clamp(2.4rem,8vw,5.7rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-900">
            CERTIFIED FOR<br />
            <span className="text-primary">TRUST.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
            We ensure consistent quality and compliance through globally recognised standards. RSPO-certified grades available across products.
          </p>
        </motion.div>

        <div className="grid items-center gap-4 sm:grid-cols-3">
          {trustMarks.map((mark, index) => (
            <motion.div
              key={mark.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
            >
              <LogoMarkCard mark={mark} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
