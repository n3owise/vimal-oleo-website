import { motion } from 'framer-motion';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

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

function PreviewHeader({ option, title }: { option: string; title: string }) {
  return (
    <div className="mb-5">
      <span className="mb-2 block font-mono text-[10px] font-black uppercase tracking-[0.24em] text-primary">
        [ Option {option} ]
      </span>
      <h2 className="font-display text-2xl font-black uppercase italic leading-none tracking-tighter text-slate-950">
        {title}
      </h2>
    </div>
  );
}

function LogoImage({ mark, className = '' }: { mark: (typeof trustMarks)[number]; className?: string }) {
  return <img src={mark.logo} alt={`${mark.label} logo`} className={`object-contain ${className}`} />;
}

function OptionOne() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
      <PreviewHeader option="01" title="Compact Trust List" />
      <div className="divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-100">
        {trustMarks.map((mark) => (
          <div key={mark.label} className="grid grid-cols-[5.5rem_1fr] items-center gap-4 bg-white p-4">
            <div className="flex h-16 items-center justify-center rounded-2xl bg-slate-50">
              <LogoImage mark={mark} className="max-h-11 max-w-[4.5rem]" />
            </div>
            <div>
              <p className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-primary">{mark.sublabel}</p>
              <p className="mt-1 font-display text-lg font-black uppercase italic leading-none tracking-tight text-slate-950">{mark.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OptionTwo() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
      <PreviewHeader option="02" title="Logo Strip" />
      <div className="rounded-[1.75rem] bg-slate-50 p-4">
        <div className="grid grid-cols-3 gap-3">
          {trustMarks.map((mark) => (
            <div key={mark.label} className="flex min-h-28 flex-col items-center justify-between rounded-2xl bg-white p-3 text-center shadow-sm">
              <p className="text-[7px] font-black uppercase tracking-[0.14em] text-primary">{mark.sublabel}</p>
              <LogoImage mark={mark} className="max-h-12 max-w-[4.2rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionThree() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
      <PreviewHeader option="03" title="Featured RSPO + Partners" />
      <div className="rounded-[1.75rem] bg-slate-50 p-4">
        <div className="mb-3 rounded-3xl bg-white p-5 text-center shadow-sm">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-primary">Certified Grades</p>
          <LogoImage mark={trustMarks[0]} className="mx-auto max-h-24 max-w-[9rem]" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {trustMarks.slice(1).map((mark) => (
            <div key={mark.label} className="rounded-3xl bg-white p-4 text-center shadow-sm">
              <p className="mb-4 text-[8px] font-black uppercase tracking-[0.16em] text-primary">Authorised Distributor</p>
              <LogoImage mark={mark} className="mx-auto max-h-16 max-w-[6.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionFour() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
      <PreviewHeader option="04" title="Stacked Mini Cards" />
      <div className="space-y-3">
        {trustMarks.map((mark) => (
          <div key={mark.label} className="flex min-h-[92px] items-center gap-4 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
              <LogoImage mark={mark} className="max-h-12 max-w-[5rem]" />
            </div>
            <div>
              <p className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-primary">{mark.sublabel}</p>
              <p className="mt-1 text-sm font-bold text-text-slate">Globally recognised supply confidence.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OptionFive() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
      <PreviewHeader option="05" title="Badge Grid" />
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 rounded-[1.75rem] bg-primary p-5 text-center text-white shadow-lg">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-white/80">Certified Grades</p>
          <div className="rounded-3xl bg-white p-5">
            <LogoImage mark={trustMarks[0]} className="mx-auto max-h-20 max-w-[8rem]" />
          </div>
        </div>
        {trustMarks.slice(1).map((mark) => (
          <div key={mark.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-center shadow-sm">
            <p className="mb-4 text-[8px] font-black uppercase tracking-[0.15em] text-primary">Authorised</p>
            <LogoImage mark={mark} className="mx-auto max-h-14 max-w-[5.8rem]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustMobilePreview() {
  return (
    <main className="min-h-screen bg-surface px-4 py-10 text-slate-950">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <span className={sectionEyebrowClass}>[ MOBILE PREVIEW ]</span>
          <h1 className={sectionHeadingClass}>
            TRUST SECTION<br />
            <span className="text-primary">OPTIONS.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-sm font-medium leading-relaxed text-text-slate">
            Five mobile-only layout ideas for the Certified for Trust logo area. This page does not change the homepage.
          </p>
        </div>

        <div className="space-y-8">
          {[OptionOne, OptionTwo, OptionThree, OptionFour, OptionFive].map((Option, index) => (
            <motion.div
              key={index}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <Option />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
