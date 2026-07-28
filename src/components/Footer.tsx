import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const footerDetails = {
  company: 'VIMAL OLEO CHEMICALS',
  address: [
    'PLOT NO 203A, SHREE RAMDARSHAN BUILDING,',
    'OFFICE NO-1, GROUND FLOOR, DR BABASAHEB AMBEDKAR ROAD,',
    'NEAR UNION BANK OF INDIA, SION EAST, MUMBAI - 400022',
  ],
  landline: '+91-022-24010660',
  landlineHref: '+912224010660',
  email: 'vimaloleochemicals@gmail.com',
  contacts: [
    { name: 'HEMANG SHAH', phone: '+91-9819415552' },
    { name: 'KUNAL SHAH', phone: '+91-9819055155' },
    { name: 'MAHESH SHAH', phone: '+91-9820988222' },
  ],
};

function BrandMark() {
  return (
    <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-xl">
      <img src="/final-logo.png" alt="Vimal Oleo Chemicals" className="h-14 w-auto object-contain" />
    </div>
  );
}

function AddressBlock() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-primary" />
        <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Address</p>
      </div>
      <div>
        <p className="font-display text-xl font-black uppercase italic tracking-tight text-white">{footerDetails.company}</p>
        <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-white/68 lg:whitespace-nowrap">
          {footerDetails.address.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-primary" />
        <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/55">Contact Details</p>
      </div>
      <a href={`tel:${footerDetails.landlineHref}`} className="block text-base font-black text-white transition-colors hover:text-primary">
        {footerDetails.landline}
      </a>
      <a href={`mailto:${footerDetails.email}`} className="block break-all text-base font-black text-white transition-colors hover:text-primary">
        <Mail className="mr-2 inline h-4 w-4 text-primary" />
        {footerDetails.email}
      </a>
    </div>
  );
}

function PeopleList() {
  return (
    <div className="space-y-3">
      {footerDetails.contacts.map((person) => (
        <a
          key={person.name}
          href={`tel:${person.phone.replace(/-/g, '')}`}
          className="flex items-center justify-between gap-4 border-b border-white/10 py-3 text-white transition-colors hover:bg-white/5"
        >
          <span>
            <span className="block font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Contact</span>
            <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
          </span>
          <span className="text-sm font-black text-white/70">{person.phone}</span>
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-footer" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute left-[-12rem] top-10 h-[26rem] w-[26rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.75fr_0.9fr]">
          <div className="space-y-10">
            <BrandMark />
            <AddressBlock />
          </div>
          <ContactBlock />
          <PeopleList />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vimal Oleo Chemicals</p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 text-white/45 transition-colors hover:text-white"
          >
            Go Top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-primary">
              <ArrowUp size={14} className="text-white" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
