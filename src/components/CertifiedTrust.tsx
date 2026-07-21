import { sectionHeadingClass } from '@/src/lib/section-styles';

const trustMarks = [
  {
    label: 'RSPO',
    sublabel: 'Certified Grades',
    logo: '/untitled folder/RSPO.avif',
  },
  {
    label: 'Halal',
    sublabel: 'Certified',
    logo: '/untitled folder/halal.png',
  },
  {
    label: 'Kosher',
    sublabel: 'Certified',
    logo: '/untitled folder/kosher.png',
  },
  {
    label: 'EUDR',
    sublabel: 'Compliant',
    logo: '/untitled folder/eudr.png',
  },
];

export function CertifiedTrust() {
  return (
    <section id="certified-trust" className="bg-white px-5 py-24 text-slate-950">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className={sectionHeadingClass}>
          CERTIFIED FOR<br />
          <span className="text-primary">TRUST.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
          We ensure consistent quality and compliance through globally recognised standards. RSPO and EUDR certified grades available across products.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-4 items-center justify-items-center gap-4 sm:gap-8 lg:gap-14">
          {trustMarks.map((mark) => (
            <div key={mark.label} className="flex min-w-0 flex-col items-center gap-4">
              <img
                src={mark.logo}
                alt={`${mark.label} logo`}
                className="max-h-14 max-w-full object-contain sm:max-h-20 lg:max-h-24"
              />
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.2em]">
                {mark.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
