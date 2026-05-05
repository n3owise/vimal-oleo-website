import { contactDetails } from '@/src/lib/contact-data';
import { sectionHeadingClass } from '@/src/lib/section-styles';
import { Mail, MapPin, Phone, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Variant01() {
  return (
    <section className="bg-[#f4f6f9] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl text-center md:text-left">
          <h2 className={`${sectionHeadingClass} mb-6`}>
            CONTACT <span className="text-primary">US.</span>
          </h2>
          <p className="text-lg font-medium text-slate-600 leading-relaxed">
            {contactDetails.intro}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Address</p>
              </div>
              <div>
                <p className="font-display text-xl font-black uppercase italic tracking-tight text-slate-900">{contactDetails.company}</p>
                <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-slate-600">
                  {contactDetails.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </p>
              </div>
            </div>

            <div className="h-px bg-slate-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Contact Details</p>
              </div>
              <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black text-slate-900 transition-colors hover:text-primary">
                {contactDetails.landline}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black text-slate-900 transition-colors hover:text-primary">
                <Mail className="mr-2 inline h-4 w-4 text-primary" />
                {contactDetails.email}
              </a>
            </div>

            <div className="h-px bg-slate-200" />

            <div className="space-y-3">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Key Personnel</p>
              {contactDetails.contacts.map((person) => (
                <a
                  key={person.name}
                  href={`tel:${person.phone.replace(/-/g, '')}`}
                  className="flex items-center justify-between gap-4 border-b border-slate-200 py-3 text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span>
                    <span className="block font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Contact</span>
                    <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
                  </span>
                  <span className="text-sm font-black text-slate-600">{person.phone}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12 order-1 lg:order-2">
            <form className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-display text-sm font-bold uppercase tracking-wide text-slate-700">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input type="text" className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary" placeholder="John" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display text-sm font-bold uppercase tracking-wide text-slate-700">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input type="text" className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary" placeholder="Doe" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-display text-sm font-bold uppercase tracking-wide text-slate-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input type="email" className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display text-sm font-bold uppercase tracking-wide text-slate-700">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input type="tel" className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-display text-sm font-bold uppercase tracking-wide text-slate-700">Message</label>
                <textarea rows={4} className="w-full resize-none rounded-xl bg-slate-50 p-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary" placeholder="How can we help you?" />
              </div>

              <button type="button" className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Variant02() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-[-10%] top-0 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[100px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className={`${sectionHeadingClass.replace('text-slate-900', 'text-white')} mb-6`}>
            GET IN <span className="text-primary">TOUCH.</span>
          </h2>
          <p className="max-w-2xl text-lg font-medium text-slate-300 leading-relaxed">
            {contactDetails.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12 lg:col-span-5">
            <div className="space-y-8 text-white">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Address</p>
                </div>
                <div>
                  <p className="font-display text-xl font-black uppercase italic tracking-tight text-white">{contactDetails.company}</p>
                  <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-white/70">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Contact Details</p>
                </div>
                <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black text-white transition-colors hover:text-primary">
                  {contactDetails.landline}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black text-white transition-colors hover:text-primary">
                  <Mail className="mr-2 inline h-4 w-4 text-primary" />
                  {contactDetails.email}
                </a>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-3">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Key Personnel</p>
                {contactDetails.contacts.map((person) => (
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
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl sm:p-12 lg:col-span-7">
            <form className="flex h-full flex-col justify-center gap-8">
              <h3 className="font-display text-3xl font-black uppercase text-slate-900">Send us a message</h3>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <input type="text" className="border-b-2 border-slate-200 bg-transparent py-3 font-medium outline-none transition-colors placeholder:text-slate-400 focus:border-primary" placeholder="First Name" />
                <input type="text" className="border-b-2 border-slate-200 bg-transparent py-3 font-medium outline-none transition-colors placeholder:text-slate-400 focus:border-primary" placeholder="Last Name" />
                <input type="email" className="border-b-2 border-slate-200 bg-transparent py-3 font-medium outline-none transition-colors placeholder:text-slate-400 focus:border-primary" placeholder="Email Address" />
                <input type="tel" className="border-b-2 border-slate-200 bg-transparent py-3 font-medium outline-none transition-colors placeholder:text-slate-400 focus:border-primary" placeholder="Phone Number" />
              </div>

              <textarea rows={4} className="mt-4 resize-none border-b-2 border-slate-200 bg-transparent py-3 font-medium outline-none transition-colors placeholder:text-slate-400 focus:border-primary" placeholder="Your Message" />

              <button type="button" className="mt-8 self-start rounded-full bg-slate-900 px-8 py-4 font-display font-bold uppercase tracking-wide text-white transition-all hover:bg-primary active:scale-95">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Variant03() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <h2 className={`${sectionHeadingClass} mb-6`}>
          LET'S <span className="text-primary">CONNECT.</span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-600 mb-16">
          {contactDetails.intro}
        </p>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sm:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            
            <div className="space-y-8 text-left">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Address</p>
                </div>
                <div>
                  <p className="font-display text-xl font-black uppercase italic tracking-tight text-slate-900">{contactDetails.company}</p>
                  <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-slate-600">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Contact Details</p>
                </div>
                <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black text-slate-900 transition-colors hover:text-primary">
                  {contactDetails.landline}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black text-slate-900 transition-colors hover:text-primary">
                  <Mail className="mr-2 inline h-4 w-4 text-primary" />
                  {contactDetails.email}
                </a>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="space-y-3">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Key Personnel</p>
                {contactDetails.contacts.map((person) => (
                  <a
                    key={person.name}
                    href={`tel:${person.phone.replace(/-/g, '')}`}
                    className="flex items-center justify-between gap-4 border-b border-slate-200 py-3 text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    <span>
                      <span className="block font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Contact</span>
                      <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
                    </span>
                    <span className="text-sm font-black text-slate-600">{person.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="font-display text-2xl font-black uppercase text-slate-900">Send a message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <div className="overflow-hidden rounded-xl bg-slate-100 p-1 focus-within:bg-primary/5 focus-within:ring-1 focus-within:ring-primary">
                    <input type="text" className="w-full bg-transparent px-4 py-3 font-medium outline-none" placeholder="Your Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
                  <div className="overflow-hidden rounded-xl bg-slate-100 p-1 focus-within:bg-primary/5 focus-within:ring-1 focus-within:ring-primary">
                    <input type="email" className="w-full bg-transparent px-4 py-3 font-medium outline-none" placeholder="Your Email" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <div className="overflow-hidden rounded-xl bg-slate-100 p-1 focus-within:bg-primary/5 focus-within:ring-1 focus-within:ring-primary">
                    <textarea rows={4} className="w-full resize-none bg-transparent px-4 py-3 font-medium outline-none" placeholder="How can we help?" />
                  </div>
                </div>

                <button type="button" className="w-full rounded-xl bg-primary py-5 font-display text-base font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-900">
                  Send Notification
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Variant04() {
  return (
    <section className="bg-[#f0f4f8] p-4 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-white shadow-2xl">
        <div className="grid lg:grid-cols-[400px_1fr]">
          
          <div className="bg-primary p-10 text-white sm:p-14">
            <h2 className="font-display text-4xl font-black uppercase tracking-tight mb-4">Contact Info</h2>
            <p className="text-white/80 font-medium leading-relaxed mb-12">
              Reach out directly to our team using the details below. We look forward to hearing from you.
            </p>

            <div className="space-y-10">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Address</p>
                </div>
                <div>
                  <p className="font-display text-xl font-black uppercase italic tracking-tight">{contactDetails.company}</p>
                  <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-white/70">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Contact Details</p>
                </div>
                <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black transition-colors hover:text-slate-100">
                  {contactDetails.landline}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black transition-colors hover:text-slate-100">
                  <Mail className="mr-2 inline h-4 w-4" />
                  {contactDetails.email}
                </a>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-3">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Key Personnel</p>
                {contactDetails.contacts.map((person) => (
                  <a
                    key={person.name}
                    href={`tel:${person.phone.replace(/-/g, '')}`}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3 transition-colors hover:bg-white/5"
                  >
                    <span>
                      <span className="block font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Contact</span>
                      <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
                    </span>
                    <span className="text-sm font-black text-white/70">{person.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10 sm:p-14 lg:p-20">
             <div className="mb-10 max-w-2xl">
               <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight leading-none mb-6">Send an Inquiry</h2>
             </div>

             <form className="grid gap-y-8 gap-x-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-display text-sm font-extrabold uppercase text-slate-900">Name</label>
                  <input type="text" className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-primary transition-colors font-medium text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-sm font-extrabold uppercase text-slate-900">Company</label>
                  <input type="text" className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-primary transition-colors font-medium text-slate-900" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="font-display text-sm font-extrabold uppercase text-slate-900">Email</label>
                  <input type="email" className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-primary transition-colors font-medium text-slate-900" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="font-display text-sm font-extrabold uppercase text-slate-900">Message</label>
                  <textarea rows={4} className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-primary transition-colors font-medium text-slate-900 resize-none mt-2" />
                </div>

                <div className="sm:col-span-2 mt-4">
                  <button type="button" className="rounded-full bg-slate-900 text-white px-10 py-4 font-display font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-3">
                    Submit Message <Send size={18} />
                  </button>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Variant05() {
  return (
    <section className="bg-slate-950 py-24 sm:py-32 relative">
      {/* Abstract Map/Network effect */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className={`${sectionHeadingClass.replace('text-slate-900', 'text-white')} mb-6`}>
            PARTNER WITH <span className="text-primary border-b-4 border-primary pb-2 inline-block">US.</span>
          </h2>
          <p className="text-lg font-medium text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {contactDetails.intro}
          </p>
        </div>

        <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl">
           <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
             
             <div className="space-y-8 text-white">
               <div className="space-y-5">
                 <div className="flex items-center gap-3">
                   <MapPin className="h-5 w-5 text-primary" />
                   <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Address</p>
                 </div>
                 <div>
                   <p className="font-display text-xl font-black uppercase italic tracking-tight text-white">{contactDetails.company}</p>
                   <p className="mt-3 w-full text-sm font-semibold uppercase leading-relaxed text-white/70">
                     {contactDetails.address.map((line) => (
                       <span key={line} className="block">{line}</span>
                     ))}
                   </p>
                 </div>
               </div>

               <div className="h-px bg-white/10" />

               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <Phone className="h-5 w-5 text-primary" />
                   <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Contact Details</p>
                 </div>
                 <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black text-white transition-colors hover:text-slate-100">
                   {contactDetails.landline}
                 </a>
                 <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black text-white transition-colors hover:text-slate-100">
                   <Mail className="mr-2 inline h-4 w-4 text-primary" />
                   {contactDetails.email}
                 </a>
               </div>

               <div className="h-px bg-white/10" />

               <div className="space-y-3">
                 <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Key Personnel</p>
                 {contactDetails.contacts.map((person) => (
                   <a
                     key={person.name}
                     href={`tel:${person.phone.replace(/-/g, '')}`}
                     className="flex items-center justify-between gap-4 border-b border-white/10 py-3 transition-colors hover:bg-white/5"
                   >
                     <span>
                       <span className="block font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Contact</span>
                       <span className="mt-1 block font-display text-lg font-black uppercase italic leading-none tracking-tight">{person.name}</span>
                     </span>
                     <span className="text-sm font-black text-white/70">{person.phone}</span>
                   </a>
                 ))}
               </div>
             </div>

             <form className="space-y-6">
                <h3 className="font-display text-2xl font-black uppercase text-white">Send Inquiry</h3>
                <input type="text" placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
                <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
                <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary resize-none" />
                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 font-display font-black tracking-widest uppercase transition-colors">
                  Send Secure Message
                </button>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
}


