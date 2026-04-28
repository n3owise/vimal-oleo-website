import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Mail, MapPin, Phone, UserRound } from 'lucide-react';

import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const footerDetails = {
  company: 'VIMAL OLEO CHEMICALS',
  address: [
    'PLOT NO 203A, SHREE RAMDARSHAN BUILDING, OFFICE NO-1, GROUND FLOOR,',
    'DR BABASAHEB AMBEDKAR ROAD, NEAR UNION BANK OF INDIA,',
    'SION EAST, MUMBAI - 400022',
  ],
  landline: '+91-022-24010660',
  email: 'vimaloleochemicals@gmail.com',
  contacts: [
    { name: 'HEMANG SHAH', phone: '+91-9819415552' },
    { name: 'KUNAL SHAH', phone: '+91-9819055155' },
    { name: 'MAHESH SHAH', phone: '+91-9820988222' },
  ],
};

const navItems = ['Home', 'About Us', 'Products', 'Industries', 'Contact Us'];

function BrandMark({ dark = false, stacked = false }: { dark?: boolean; stacked?: boolean }) {
  return (
    <div className={`inline-flex items-center ${dark ? 'rounded-2xl bg-white/95 px-4 py-3 shadow-lg' : ''}`}>
      <img
        src={stacked ? '/vimal-oleo-logo.svg' : '/final-logo.png'}
        alt="Vimal Oleo Chemicals"
        className={stacked ? 'h-24 w-auto object-contain' : 'h-14 w-auto object-contain'}
      />
    </div>
  );
}

function AddressBlock({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className={compact ? 'space-y-3' : 'space-y-5'}>
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-primary" />
        <p className={`font-mono text-[11px] font-black uppercase tracking-[0.24em] ${dark ? 'text-white/50' : 'text-slate-500'}`}>Address</p>
      </div>
      <div>
        <p className={`font-display text-xl font-black uppercase italic tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{footerDetails.company}</p>
        <p className={`mt-3 max-w-xl text-sm font-semibold uppercase leading-relaxed ${dark ? 'text-white/68' : 'text-slate-600'}`}>
          {footerDetails.address.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

function ContactBlock({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? 'text-white' : 'text-slate-950';
  const muted = dark ? 'text-white/55' : 'text-slate-500';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-primary" />
        <p className={`font-mono text-[11px] font-black uppercase tracking-[0.24em] ${muted}`}>Contact Details</p>
      </div>
      <a href={`tel:${footerDetails.landline.replace(/-/g, '')}`} className={`block text-base font-black ${textColor}`}>{footerDetails.landline}</a>
      <a href={`mailto:${footerDetails.email}`} className={`block break-all text-base font-black ${textColor}`}>{footerDetails.email}</a>
    </div>
  );
}

function PeopleList({ dark = false, card = false }: { dark?: boolean; card?: boolean }) {
  return (
    <div className={card ? 'grid gap-3 sm:grid-cols-3' : 'space-y-3'}>
      {footerDetails.contacts.map((person) => (
        <a
          key={person.name}
          href={`tel:${person.phone.replace(/-/g, '')}`}
          className={`${card ? 'rounded-2xl border p-4' : 'flex items-center justify-between gap-4 border-b py-3'} ${
            dark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-950 hover:bg-slate-50'
          } transition-colors`}
        >
          <span>
            <span className={`block font-mono text-[10px] font-black uppercase tracking-[0.2em] ${dark ? 'text-white/45' : 'text-slate-500'}`}>Contact</span>
            <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
          </span>
          <span className={`text-sm font-black ${dark ? 'text-white/70' : 'text-primary'}`}>{person.phone}</span>
        </a>
      ))}
    </div>
  );
}

function NavStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className={`rounded-full border px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] ${
            dark ? 'border-white/10 text-white/65 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-primary'
          } transition-colors`}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

function FooterBottom({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 border-t pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between ${
      dark ? 'border-white/10 text-white/40' : 'border-slate-200 text-slate-500'
    }`}>
      <p>© 2026 Vimal Oleo Chemicals</p>
      <p>Trusted Oleo Chemical Supply</p>
    </div>
  );
}

function PreviewIntro() {
  return (
    <section className="bg-surface px-5 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <span className={sectionEyebrowClass}>[ FOOTER PREVIEW ]</span>
        <h1 className={sectionHeadingClass}>
          FOOTER STYLE<br />
          <span className="text-primary">VARIATIONS.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
          Ten separate footer concepts using the current Vimal Oleo theme. None of these are added to the home page yet.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {Array.from({ length: 10 }, (_, index) => (
            <a key={index} href={`#option-${index + 1}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary">
              Option {String(index + 1).padStart(2, '0')}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionLabel({ number, dark = false }: { number: string; dark?: boolean }) {
  return (
    <span className={`mb-6 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] ${dark ? 'text-primary' : 'text-primary'}`}>
      [ OPTION {number} ]
    </span>
  );
}

function FooterOne() {
  return (
    <section id="option-1" className="bg-[#eef3f8] px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <OptionLabel number="01" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.9fr]">
          <div className="space-y-10">
            <BrandMark />
            <AddressBlock />
          </div>
          <ContactBlock />
          <PeopleList />
        </div>
        <div className="mt-10">
          <FooterBottom />
        </div>
      </footer>
    </section>
  );
}

function FooterTwo() {
  return (
    <section id="option-2" className="bg-surface px-5 py-20">
      <footer className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-slate-950 text-white shadow-2xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-primary p-8 sm:p-10">
            <OptionLabel number="02" dark />
            <BrandMark dark />
            <h2 className="mt-16 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-white">
              LET’S<br />SOURCE<br />BETTER.
            </h2>
          </div>
          <div className="space-y-10 p-8 sm:p-10">
            <AddressBlock dark />
            <div className="grid gap-8 md:grid-cols-2">
              <ContactBlock dark />
              <PeopleList dark />
            </div>
            <FooterBottom dark />
          </div>
        </div>
      </footer>
    </section>
  );
}

function FooterThree() {
  return (
    <section id="option-3" className="bg-[#eef3f8] px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10">
        <OptionLabel number="03" />
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
            <BrandMark dark />
            <p className="mt-24 font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/45">Mumbai based oleo chemical supplier</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-surface p-6">
              <AddressBlock compact />
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-surface p-6">
              <ContactBlock />
              <div className="mt-7">
                <PeopleList />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <NavStrip />
        </div>
      </footer>
    </section>
  );
}

function FooterFour() {
  return (
    <section id="option-4" className="bg-surface px-5 py-20">
      <footer className="mx-auto max-w-7xl border-y border-slate-200 py-12">
        <OptionLabel number="04" />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <BrandMark />
            <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-slate-950">
              VIMAL<br /><span className="text-primary">OLEO.</span>
            </h2>
          </div>
          <div className="grid gap-6">
            <AddressBlock />
            <div className="grid gap-6 md:grid-cols-2">
              <ContactBlock />
              <PeopleList />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <FooterBottom />
        </div>
      </footer>
    </section>
  );
}

function FooterFive() {
  return (
    <section id="option-5" className="bg-[#eef3f8] px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <OptionLabel number="05" />
        <div className="flex justify-center">
          <BrandMark />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <AddressBlock />
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-slate-200 p-6 text-left">
            <ContactBlock />
          </div>
          <PeopleList card />
        </div>
        <div className="mt-10">
          <FooterBottom />
        </div>
      </footer>
    </section>
  );
}

function FooterSix() {
  return (
    <section id="option-6" className="bg-surface px-5 py-20">
      <footer className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-xl">
        <div className="border-b border-slate-200 bg-primary px-8 py-8 text-white sm:px-10">
          <OptionLabel number="06" dark />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <BrandMark dark />
            <NavStrip dark />
          </div>
        </div>
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr_1fr]">
          <AddressBlock />
          <ContactBlock />
          <PeopleList />
        </div>
      </footer>
    </section>
  );
}

function FooterSeven() {
  return (
    <section id="option-7" className="bg-[#eef3f8] px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] bg-white p-6 shadow-xl sm:p-8">
        <OptionLabel number="07" />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-surface p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="relative">
              <BrandMark />
              <div className="mt-16">
                <AddressBlock />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <ContactBlock />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <PeopleList />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

function FooterEight() {
  return (
    <section id="option-8" className="bg-surface px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <OptionLabel number="08" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <BrandMark dark />
            <div className="mt-16">
              <AddressBlock dark />
            </div>
          </div>
          <div className="grid content-between gap-8">
            <div className="rounded-[2rem] border border-slate-200 p-7">
              <ContactBlock />
            </div>
            <PeopleList card />
            <NavStrip />
          </div>
        </div>
      </footer>
    </section>
  );
}

function FooterNine() {
  return (
    <section id="option-9" className="bg-[#eef3f8] px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <OptionLabel number="09" />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <BrandMark />
          <NavStrip />
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          <motion.div whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-slate-200 bg-surface p-5 lg:col-span-2">
            <AddressBlock compact />
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-slate-200 bg-surface p-5">
            <ContactBlock />
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-slate-200 bg-surface p-5 lg:col-span-2">
            <PeopleList />
          </motion.div>
        </div>
      </footer>
    </section>
  );
}

function FooterTen() {
  return (
    <section id="option-10" className="bg-slate-950 px-5 py-20">
      <footer className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-[#07111f] p-8 text-white shadow-2xl sm:p-10">
        <OptionLabel number="10" dark />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr]">
          <div>
            <BrandMark dark />
            <h2 className="mt-12 font-display text-[clamp(2.5rem,7vw,5.75rem)] font-black uppercase italic leading-[0.82] tracking-tighter text-white">
              CONNECT<br />
              WITH <span className="text-primary">VIMAL.</span>
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              { icon: Building2, label: 'Head Office', content: `${footerDetails.company} / ${footerDetails.address.join(' ')}` },
              { icon: Phone, label: 'Landline', content: footerDetails.landline },
              { icon: Mail, label: 'Email', content: footerDetails.email },
              { icon: UserRound, label: 'Direct Contacts', content: footerDetails.contacts.map((person) => `${person.name} ${person.phone}`).join(' / ') },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/40">{item.label}</p>
                    <p className="mt-1 text-sm font-bold uppercase leading-relaxed text-white/75">{item.content}</p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 text-white/30 sm:block" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <FooterBottom dark />
        </div>
      </footer>
    </section>
  );
}

export function FooterPreview() {
  return (
    <main className="min-h-screen bg-surface">
      <PreviewIntro />
      <FooterOne />
      <FooterTwo />
      <FooterThree />
      <FooterFour />
      <FooterFive />
      <FooterSix />
      <FooterSeven />
      <FooterEight />
      <FooterNine />
      <FooterTen />
    </main>
  );
}
