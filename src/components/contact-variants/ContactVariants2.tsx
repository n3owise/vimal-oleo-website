import { contactDetails } from '@/src/lib/contact-data';
import { sectionHeadingClass } from '@/src/lib/section-styles';
import { Mail, MapPin, Phone, Building2 } from 'lucide-react';

export function Variant06() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-none">
              Start The <br/><span className="text-primary italic">Conversation</span>
            </h2>
            <p className="text-xl font-medium text-slate-600 leading-relaxed max-w-lg mb-12">
              {contactDetails.intro}
            </p>

            <div className="space-y-8 pl-8 border-l-4 border-slate-200">
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
          </div>

          <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="font-display text-2xl font-bold uppercase text-slate-900 mb-8">Drop us a line</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-slate-700">
                  <option>Technical Information</option>
                  <option>Product Samples</option>
                  <option>Pricing Details</option>
                  <option>Partnership Opportunities</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" />
              </div>

              <button className="w-full bg-slate-900 text-white font-display font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-primary transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Variant07() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className={`${sectionHeadingClass} mb-6`}>
            CONNECT WITH <span className="text-primary">TEAM.</span>
          </h2>
          <p className="text-lg font-medium text-slate-600">
            {contactDetails.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          
          <div className="flex flex-col gap-12">
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

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12">
              <h3 className="font-display text-2xl font-bold uppercase mb-8 text-slate-900">Send an Inquiry</h3>
              <form className="grid sm:grid-cols-2 gap-6">
                 <input type="text" placeholder="Full Name" className="bg-white border border-slate-200 rounded-xl px-4 py-4 font-medium outline-none focus:border-primary" />
                 <input type="text" placeholder="Company Name" className="bg-white border border-slate-200 rounded-xl px-4 py-4 font-medium outline-none focus:border-primary" />
                 <input type="email" placeholder="Email Address" className="bg-white border border-slate-200 rounded-xl px-4 py-4 font-medium outline-none focus:border-primary sm:col-span-2" />
                 <textarea rows={4} placeholder="Your Message" className="bg-white border border-slate-200 rounded-xl px-4 py-4 font-medium outline-none focus:border-primary sm:col-span-2 resize-none" />
                 <div className="sm:col-span-2 flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-400 max-w-xs">We typically respond to all inquiries within 24 business hours.</p>
                    <button type="button" className="bg-primary hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider transition-colors shrink-0">
                      Submit
                    </button>
                 </div>
              </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export function Variant08() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
           
           <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase mb-8 leading-tight">
                Require <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Assistance?</span>
              </h2>
              <p className="text-lg font-medium text-slate-400 leading-relaxed mb-16 max-w-md">
                {contactDetails.intro}
              </p>

              <div className="space-y-8">
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
           </div>

           <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2rem] backdrop-blur-md">
              <form className="flex flex-col gap-6">
                 <h3 className="font-display text-2xl font-black uppercase text-white mb-4">Send Message</h3>
                 <div className="space-y-1">
                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary focus:bg-white/10 transition-all font-medium" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                   <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary focus:bg-white/10 transition-all font-medium" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Inquiry Type</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary focus:bg-white/10 transition-all font-medium" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Details</label>
                   <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary focus:bg-white/10 transition-all font-medium resize-none" />
                 </div>
                 <button className="w-full mt-4 bg-primary text-white font-display font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-colors">
                   Submit Message
                 </button>
              </form>
           </div>

        </div>
      </div>
    </section>
  );
}

export function Variant09() {
  const shortIntro = contactDetails.intro.split(' ').slice(0, 28).join(' ') + '...';

  return (
    <section className="bg-[#fafafa] pt-32 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        <div className="text-center mb-16">
          <h2 className={`${sectionHeadingClass} mb-6`}>
            HOW CAN WE <span className="text-primary">HELP?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600 leading-relaxed">
            {shortIntro}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-5 p-2 gap-2">
            
            <div className="md:col-span-3 bg-slate-50 rounded-2xl p-8 sm:p-16 flex flex-col justify-center">
               <h3 className="font-display text-2xl font-black uppercase text-slate-900 mb-10">Send us an email</h3>
               <form className="space-y-8">
                 <div className="grid sm:grid-cols-2 gap-8">
                    <input type="text" placeholder="First Name" className="bg-white border-b-2 border-slate-200 px-4 py-4 outline-none focus:border-primary font-medium transition-colors" />
                    <input type="text" placeholder="Last Name" className="bg-white border-b-2 border-slate-200 px-4 py-4 outline-none focus:border-primary font-medium transition-colors" />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full bg-white border-b-2 border-slate-200 px-4 py-4 outline-none focus:border-primary font-medium transition-colors" />
                 <textarea rows={5} placeholder="Your Message" className="w-full bg-white border-b-2 border-slate-200 px-4 py-4 outline-none focus:border-primary font-medium transition-colors resize-none" />
                 <button type="button" className="bg-slate-900 text-white px-8 py-4 font-display font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors">
                   Send Message
                 </button>
               </form>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
              <div className="w-full max-w-sm bg-primary rounded-3xl p-8 sm:p-10 text-white border-4 border-white/5 shadow-xl">
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60">Reach Us At</p>
                  <div className="mt-3">
                    <span className="block text-lg font-bold uppercase leading-relaxed text-white/90">{contactDetails.landline}</span>
                    <a href={`mailto:${contactDetails.email}`} className="block mt-3 text-sm font-medium uppercase text-white/90">{contactDetails.email}</a>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60">Visit Us</p>
                  <p className="mt-3 font-display text-lg font-black uppercase tracking-tight">{contactDetails.company}</p>
                  <div className="mt-2">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block text-sm font-medium uppercase leading-relaxed text-white/90">{line}</span>
                    ))}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address.join(', '))}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-block text-sm font-bold underline text-white/90"
                  >
                    Open in Google Maps
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60 mb-3">Key Contacts</p>
                  <div className="space-y-3">
                    {contactDetails.contacts.map((c) => (
                      <div key={c.name} className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="block text-sm font-medium uppercase leading-relaxed text-white/90">{c.name}</span>
                        <a href={`tel:${c.phone.replace(/-/g, '')}`} className="text-sm font-medium uppercase leading-relaxed text-white/90">{c.phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export function Variant10() {
  return (
    <section className="bg-primary py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black opacity-[0.05] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10 text-white">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className={`${sectionHeadingClass.replace('text-slate-900', 'text-white')} mb-6`}>
                CONTACT <span className="text-slate-900">US.</span>
              </h2>
              <p className="text-xl font-medium text-white/80 leading-relaxed mb-12 max-w-lg">
                {contactDetails.intro}
              </p>

              <div className="space-y-8">
                 <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-slate-900" />
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
                      <Phone className="h-5 w-5 text-slate-900" />
                      <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/50">Contact Details</p>
                    </div>
                    <a href={`tel:${contactDetails.landlineHref}`} className="block text-base font-black text-white transition-colors hover:text-slate-100">
                      {contactDetails.landline}
                    </a>
                    <a href={`mailto:${contactDetails.email}`} className="block break-all text-base font-black text-white transition-colors hover:text-slate-100">
                      <Mail className="mr-2 inline h-4 w-4 text-slate-900" />
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

           <div className="bg-white rounded-[2rem] p-8 sm:p-12 text-slate-900 shadow-2xl">
              <h3 className="font-display text-2xl font-black uppercase mb-8">Send Request</h3>
              <form className="space-y-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                   <input type="text" className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-primary font-medium" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                   <input type="email" className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-primary font-medium" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400">How can we help?</label>
                   <textarea rows={3} className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-primary font-medium resize-none mt-2" />
                 </div>
                 <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-display font-bold uppercase tracking-widest hover:bg-primary transition-colors mt-4">
                    Submit Inquiry
                 </button>
              </form>
           </div>
        </div>

      </div>
    </section>
  );
}

