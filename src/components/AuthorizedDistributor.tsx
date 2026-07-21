import { sectionHeadingClass } from '@/src/lib/section-styles';

const distributorMarks = [
  {
    label: 'Jocil',
    sublabel: 'Authorised Distributor',
    logo: '/untitled folder/jocil.avif',
  },
  {
    label: '3F Industries',
    sublabel: 'Authorised Distributor',
    logo: '/untitled folder/3f.avif',
  },
];

function DistributorCard({ mark }: { mark: (typeof distributorMarks)[number] }) {
  return (
    <div className="flex min-h-[210px] flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{mark.sublabel}</p>
      <div className="flex min-h-0 flex-1 items-center justify-center py-5">
        <img src={mark.logo} alt={`${mark.label} logo`} className="max-h-24 max-w-[82%] object-contain" />
      </div>
    </div>
  );
}

function MobileDistributorMarks() {
  return (
    <div className="grid gap-3 sm:hidden">
      {distributorMarks.map((mark) => (
        <div key={mark.label} className="rounded-[1.75rem] bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-primary">{mark.sublabel}</p>
          <img src={mark.logo} alt={`${mark.label} logo`} className="mx-auto max-h-24 max-w-[9rem] object-contain" />
        </div>
      ))}
    </div>
  );
}

export function AuthorizedDistributor() {
  return (
    <section id="authorised-distributor" className="bg-[#f4f6f9] px-5 pb-24 pt-4 text-slate-950 sm:pt-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-w-0 rounded-[2rem] bg-surface p-7 sm:p-9">
          <h2 className={sectionHeadingClass}>
            AUTHORISED<br />
            <span className="text-primary">DISTRIBUTOR.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
            Official distributor support for Jocil Ltd and 3F Industries, backed by established product knowledge and dependable supply.
          </p>
        </div>

        <MobileDistributorMarks />

        <div className="hidden w-full min-w-0 items-center gap-4 sm:grid sm:grid-cols-2 lg:pl-36">
          {distributorMarks.map((mark) => (
            <div key={mark.label}>
              <DistributorCard mark={mark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}