import { Leaf, Recycle, ShieldCheck, Zap } from 'lucide-react';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const sustainabilityText =
  'At Vimal Oleo Group, we align growth with responsibility. We focus on eco-friendly solutions, responsible sourcing, waste reduction, and energy efficiency. By partnering with like-minded clients and suppliers, we strive to deliver value while protecting the environment for a sustainable future.';

const pillars = [
  { title: 'Eco-Friendly Solutions', icon: Leaf },
  { title: 'Responsible Sourcing', icon: ShieldCheck },
  { title: 'Waste Reduction', icon: Recycle },
  { title: 'Energy Efficiency', icon: Zap },
];

export function SustainabilityChapter() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className={sectionEyebrowClass}>[ SUSTAINABILITY ]</span>
          <h3 className={sectionHeadingClass}>
            THE NEXT<br />
            <span className="text-primary">CHAPTER.</span>
          </h3>
        </div>

        <div className="rounded-[2.5rem] bg-[#eaf3ff] px-6 py-12 sm:px-10 lg:px-14">
          <p className="mx-auto max-w-4xl text-center text-lg font-medium leading-relaxed text-text-slate">{sustainabilityText}</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.75rem] border border-white/70 bg-white/76 p-6 shadow-xl shadow-[#1d5fb8]/10 backdrop-blur-xl">
                <pillar.icon className="mb-10 mt-6 text-primary" size={30} strokeWidth={1.7} />
                <h4 className="font-display text-xl font-black uppercase tracking-tight text-slate-950">{pillar.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
