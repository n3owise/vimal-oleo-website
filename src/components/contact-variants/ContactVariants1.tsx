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

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12">
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

          <div className="flex flex-col gap-10 lg:pt-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-black uppercase text-slate-900">{contactDetails.company}</h3>
                  <div className="mt-2 font-medium text-slate-600 leading-relaxed uppercase">
                    {contactDetails.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-400">Landline</h3>
                  <p className="mt-1 font-display text-lg font-bold text-slate-900">{contactDetails.landline}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-400">Email</h3>
                  <p className="mt-1 font-display text-lg font-bold text-slate-900 break-all">{contactDetails.email}</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-slate-200" />

            <div>
              <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-widest text-slate-400">Direct Contacts</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactDetails.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <span className="font-display font-bold uppercase text-slate-900">{contact.name}</span>
                    <span className="font-medium text-primary">{contact.phone}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <div>
                <MapPin className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl font-black uppercase tracking-tight">{contactDetails.company}</h3>
                <p className="mt-3 text-sm font-medium uppercase leading-relaxed text-slate-300">
                  {contactDetails.address.map((line, i) => <span key={i} className="block">{line}</span>)}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-bold">{contactDetails.landline}</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-8">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-bold break-all">{contactDetails.email}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">Key Contacts</p>
                {contactDetails.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between">
                    <span className="font-display font-bold uppercase">{contact.name}</span>
                    <span className="text-sm font-medium text-primary">{contact.phone}</span>
                  </div>
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
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
          {contactDetails.intro}
        </p>

        <div className="my-16 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold uppercase text-slate-900">Visit Us</h3>
            <p className="text-sm font-medium uppercase text-slate-600">{contactDetails.company}</p>
            <p className="mt-1 text-sm font-medium text-slate-600 uppercase">Mumbai - 400022</p>
          </div>
          
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold uppercase text-slate-900">Call Us</h3>
            <p className="text-sm font-medium text-slate-600 uppercase">Landline</p>
            <p className="mt-1 font-bold text-primary">{contactDetails.landline}</p>
          </div>

          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold uppercase text-slate-900">Email Us</h3>
            <p className="text-sm font-bold text-primary break-all">{contactDetails.email}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sm:p-16">
          <form className="grid gap-8 sm:grid-cols-2 text-left">
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
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
              <div className="space-y-2">
                <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-500">Phone</label>
                <div className="overflow-hidden rounded-xl bg-slate-100 p-1 focus-within:bg-primary/5 focus-within:ring-1 focus-within:ring-primary">
                  <input type="tel" className="w-full bg-transparent px-4 py-3 font-medium outline-none" placeholder="Your Phone" />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="flex-1 space-y-2">
                <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                <div className="h-[calc(100%-24px)] overflow-hidden rounded-xl bg-slate-100 p-1 focus-within:bg-primary/5 focus-within:ring-1 focus-within:ring-primary">
                  <textarea className="h-full w-full resize-none bg-transparent px-4 py-3 font-medium outline-none" placeholder="How can we help?" />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button type="button" className="w-full rounded-xl bg-primary py-5 font-display text-base font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-900">
                Send Notification
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 sm:mt-24">
           <h3 className="mb-8 font-mono text-sm font-bold uppercase tracking-widest text-slate-400">Direct Department Contacts</h3>
           <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {contactDetails.contacts.map((contact) => (
                <div key={contact.name} className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm hover:border-primary transition-colors">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-display font-bold uppercase text-slate-900">{contact.name}</span>
                  <span className="text-slate-300">|</span>
                  <span className="font-medium text-slate-600">{contact.phone}</span>
                </div>
              ))}
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
              <div>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Address</h4>
                <p className="font-medium leading-relaxed uppercase">{contactDetails.company}<br />{contactDetails.address.map((line, i) => <span key={i} className="block">{line}</span>)}</p>
              </div>

              <div>
                 <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Reach Us</h4>
                 <p className="font-bold text-xl mb-1">{contactDetails.landline}</p>
                 <p className="font-medium text-white/90 break-all">{contactDetails.email}</p>
              </div>

              <div>
                 <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Key Personnel</h4>
                 <div className="space-y-3">
                   {contactDetails.contacts.map((contact) => (
                     <div key={contact.name} className="flex justify-between border-b border-white/20 pb-3">
                       <span className="font-display font-bold uppercase">{contact.name}</span>
                       <span className="font-mono text-sm block">{contact.phone}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          <div className="p-10 sm:p-14 lg:p-20">
             <div className="mb-10 max-w-2xl">
               <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight leading-none mb-6">Send an Inquiry</h2>
               <p className="text-slate-600 font-medium leading-relaxed">{contactDetails.intro}</p>
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
                  <label className="font-display text-sm font-extrabold uppercase text-slate-900">How can we help?</label>
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
          <p className="text-lg font-medium text-slate-400 leading-relaxed">
            {contactDetails.intro}
          </p>
        </div>

        <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl">
           <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-3">
                <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
                <input type="email" placeholder="Email Address" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary" />
              </div>
              <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none focus:border-primary resize-none" />
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 font-display font-black tracking-widest uppercase transition-colors">
                Send Secure Message
              </button>
           </form>

           <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 text-white">
             <div>
                <p className="font-mono text-xs font-bold uppercase text-primary mb-2">Location</p>
                <p className="font-medium text-sm leading-relaxed text-slate-300">{contactDetails.company}<br/>Mumbai - 400022</p>
             </div>
             <div>
                <p className="font-mono text-xs font-bold uppercase text-primary mb-2">General Connect</p>
                <p className="font-bold mb-1">{contactDetails.landline}</p>
                <p className="text-sm font-medium text-slate-300 break-all">{contactDetails.email}</p>
             </div>
             <div className="sm:col-span-2">
                <p className="font-mono text-xs font-bold uppercase text-primary mb-3">Direct Lines</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {contactDetails.contacts.map((c) => (
                    <div key={c.name}>
                      <span className="font-bold block">{c.name}</span>
                      <span className="text-slate-400">{c.phone}</span>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
