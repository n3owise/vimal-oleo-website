import { motion } from 'framer-motion';
import { BadgeCheck, Building2, CheckCircle2, FileCheck2, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

const trustMarks = [
  {
    label: 'RSPO',
    sublabel: 'Certified Grades',
    icon: Leaf,
  },
  {
    label: 'Jocil',
    sublabel: 'Authorised Distributor',
    icon: Building2,
  },
  {
    label: '3F',
    sublabel: 'Authorised Distributor',
    icon: BadgeCheck,
  },
];

const previewImages = {
  lab: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=85&w=1400',
  oil: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=85&w=1400',
  nature: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=85&w=1400',
};

function TrustHeading({ option, align = 'center' }: { option: string; align?: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-5xl text-center' : 'max-w-4xl text-left'}>
      <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">
        [ OPTION {option} ]
      </span>
      <h2 className="font-display text-[clamp(2.4rem,8vw,5.7rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-900">
        CERTIFIED FOR<br />
        <span className="text-primary">TRUST.</span>
      </h2>
      <p className={`${align === 'center' ? 'mx-auto' : ''} mt-6 max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg`}>
        We ensure consistent quality and compliance through globally recognised standards. RSPO-certified grades available across products.
      </p>
    </div>
  );
}

function MarkCard({ mark, dark = false }: { mark: (typeof trustMarks)[number]; dark?: boolean }) {
  const Icon = mark.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl border p-5 shadow-sm ${
        dark ? 'border-white/10 bg-white/10 text-white' : 'border-slate-200 bg-white text-slate-950'
      }`}
    >
      <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'}`}>
        <Icon size={24} strokeWidth={1.9} />
      </div>
      <p className="font-display text-4xl font-black italic leading-none tracking-tighter">{mark.label}</p>
      <p className={`mt-2 text-[10px] font-black uppercase tracking-[0.2em] ${dark ? 'text-white/55' : 'text-text-slate'}`}>
        {mark.sublabel}
      </p>
    </motion.div>
  );
}

function DistributorLine() {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-center">
      <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
        Jocil Ltd. / Jayalakshmi Oil & Chemical Industries
      </span>
      <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
        3F Industries Ltd.
      </span>
    </div>
  );
}

function VariationOne() {
  return (
    <section id="option-1" className="bg-surface px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.72fr_1.45fr_0.72fr]">
        <img src={previewImages.oil} alt="" className="h-full min-h-[560px] rounded-[2rem] object-cover shadow-xl" />
        <div className="flex min-h-[560px] flex-col items-center justify-center rounded-[2rem] bg-[#eaf1fb] p-8 text-center">
          <TrustHeading option="01" />
          <div className="mt-14 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            {trustMarks.map((mark) => (
              <div key={mark.label}>
                <MarkCard mark={mark} />
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-primary">
            RSPO-certified grades available across products.
          </p>
        </div>
        <img src={previewImages.lab} alt="" className="h-full min-h-[560px] rounded-[2rem] object-cover shadow-xl" />
      </div>
    </section>
  );
}

function VariationTwo() {
  return (
    <section id="option-2" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <TrustHeading option="02" align="left" />
          <div className="mt-10">
            <DistributorLine />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {trustMarks.map((mark, index) => (
            <motion.div
              key={mark.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: index % 2 ? 30 : -20, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
            >
              <MarkCard mark={mark} dark />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariationThree() {
  return (
    <section id="option-3" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <TrustHeading option="03" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {trustMarks.map((mark, index) => {
            const Icon = mark.icon;
            return (
              <motion.article
                key={mark.label}
                whileHover={{ rotateX: 4, y: -8 }}
                className="relative min-h-[360px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-7 shadow-xl"
              >
                <img src={[previewImages.nature, previewImages.oil, previewImages.lab][index]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
                <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon size={26} strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="font-display text-6xl font-black italic leading-none tracking-tighter text-slate-950">{mark.label}</p>
                    <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-text-slate">{mark.sublabel}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariationFour() {
  return (
    <section id="option-4" className="bg-[#eef3f8] px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-6 shadow-2xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary">
            <img src={previewImages.lab} alt="" className="h-[560px] w-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/70">Compliance Network</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed">RSPO-certified grades available across products, backed by authorised distribution partners.</p>
            </div>
          </div>
          <div>
            <TrustHeading option="04" align="left" />
            <div className="mt-10 space-y-4">
              {trustMarks.map((mark) => {
                const Icon = mark.icon;
                return (
                  <div key={mark.label} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-black uppercase italic leading-none tracking-tighter text-slate-950">{mark.label}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-text-slate">{mark.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationFive() {
  return (
    <section id="option-5" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <TrustHeading option="05" />
        <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-navy-dark p-6 text-white sm:p-10">
          <div className="absolute inset-0 opacity-30">
            <img src={previewImages.nature} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative grid gap-5 lg:grid-cols-3">
            {trustMarks.map((mark, index) => (
              <div key={mark.label} className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/55">0{index + 1}</span>
                  <CheckCircle2 className="text-primary" />
                </div>
                <p className="font-display text-5xl font-black italic leading-none tracking-tighter">{mark.label}</p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-white/65">{mark.sublabel}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-6 rounded-[2rem] border border-white/15 bg-white p-6 text-slate-950">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" />
                <p className="font-display text-2xl font-black uppercase italic tracking-tighter">Authorised distributors of Jocil Ltd. and 3F Industries Ltd.</p>
              </div>
              <FileCheck2 className="hidden text-primary sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustPreview() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      <section className="grid min-h-[70svh] place-items-center px-6 py-20 text-center">
        <div>
          <span className="mb-5 block font-mono text-[12px] font-black uppercase italic tracking-[0.3em] text-primary">
            [ Certified Section Concepts ]
          </span>
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase italic leading-[0.78] tracking-tighter text-slate-950">
            Certified For <span className="text-primary">Trust</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-relaxed text-text-slate sm:text-lg">
            Five separate section directions. Choose one option number and I’ll implement that exact style after Industries on the homepage.
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

      <VariationOne />
      <VariationTwo />
      <VariationThree />
      <VariationFour />
      <VariationFive />
    </main>
  );
}
