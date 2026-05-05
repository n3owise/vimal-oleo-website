import { LayoutTemplate } from 'lucide-react';

export function ContactOptionsPage() {
  const variants = Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1).padStart(2, '0'),
    title: `Variation ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-black uppercase text-slate-900 mb-8">
          Contact Us Variations
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((v) => (
            <a
              key={v.id}
              href={`/contact-variants/${v.id}`}
              className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <LayoutTemplate size={28} />
              </div>
              <span className="font-display text-xl font-bold uppercase text-slate-700 group-hover:text-primary transition-colors">
                {v.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
