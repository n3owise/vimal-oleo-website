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
               <div>
                  <h4 className="font-display text-2xl font-bold uppercase text-slate-900 mb-2">{contactDetails.company}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed max-w-xs">{contactDetails.address.join(' ')}</p>
               </div>
               <div className="flex flex-col gap-2">
                 <a href={`tel:${contactDetails.landlineHref}`} className="font-display text-3xl font-black text-primary hover:opacity-80 transition-opacity w-fit">{contactDetails.landline}</a>
                 <a href={`mailto:${contactDetails.email}`} className="font-medium text-slate-900 break-all w-fit hover:text-primary transition-colors">{contactDetails.email}</a>
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
            <div>
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                 <Building2 size={24} />
               </div>
               <h3 className="font-display text-xl font-bold uppercase mb-4 text-slate-900">{contactDetails.company}</h3>
               <p className="text-slate-600 font-medium leading-relaxed max-w-[250px]">{contactDetails.address[1]}<br/>{contactDetails.address[2]}</p>
            </div>
            
            <div className="h-px bg-slate-200 w-full" />

            <div>
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                 <Phone size={24} />
               </div>
               <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Central Desk</h3>
               <p className="font-display text-2xl font-black text-slate-900 mb-2">{contactDetails.landline}</p>
               <p className="text-primary font-bold break-all">{contactDetails.email}</p>
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

              <div className="grid sm:grid-cols-2 gap-12">
                 <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-4">Location</p>
                    <p className="font-display font-bold text-lg mb-2">{contactDetails.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{contactDetails.address.join(', ')}</p>
                 </div>
                 <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-4">Contact</p>
                    <p className="font-display font-bold text-xl mb-2">{contactDetails.landline}</p>
                    <p className="text-slate-400 text-sm break-all">{contactDetails.email}</p>
                 </div>
              </div>
           </div>

           <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2rem] backdrop-blur-md">
              <form className="flex flex-col gap-6">
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
  return (
    <section className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        <div className="text-center mb-16">
          <h2 className={`${sectionHeadingClass} mb-6`}>
            HOW CAN WE <span className="text-primary">HELP?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600 leading-relaxed">
            {contactDetails.intro}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-5 p-2 gap-2">
            
            <div className="md:col-span-3 bg-slate-50 rounded-2xl p-8 sm:p-12">
               <h3 className="font-display text-2xl font-black uppercase text-slate-900 mb-8">Send us an email</h3>
               <form className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="bg-white border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-primary font-medium transition-colors" />
                    <input type="text" placeholder="Last Name" className="bg-white border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-primary font-medium transition-colors" />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-primary font-medium transition-colors" />
                 <textarea rows={4} placeholder="Your Message" className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-primary font-medium transition-colors resize-none" />
                 <button type="button" className="bg-slate-900 text-white px-8 py-4 font-display font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors">
                   Send Message
                 </button>
               </form>
            </div>

            <div className="md:col-span-2 bg-primary rounded-2xl p-8 sm:p-12 text-white flex flex-col justify-center">
               <div className="space-y-10">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Reach Us At</h4>
                    <p className="font-display font-bold text-2xl mb-1">{contactDetails.landline}</p>
                    <p className="font-medium text-white/90 break-all">{contactDetails.email}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Visit Us</h4>
                    <p className="font-display font-bold text-lg mb-1">{contactDetails.company}</p>
                    <p className="font-medium text-white/80 leading-relaxed text-sm">Mumbai - 400022</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Key Contacts</h4>
                    <div className="space-y-3">
                      {contactDetails.contacts.map(c => (
                        <div key={c.name} className="flex justify-between items-center text-sm border-t border-white/20 pt-2">
                           <span className="font-bold">{c.name}</span>
                           <span className="font-mono">{c.phone}</span>
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

              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <MapPin className="mb-4 h-6 w-6 text-slate-900" />
                    <h4 className="font-display font-bold text-lg mb-2">{contactDetails.company}</h4>
                    <p className="text-sm font-medium text-white/70">Mumbai - 400022</p>
                 </div>
                 <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <Phone className="mb-4 h-6 w-6 text-slate-900" />
                    <h4 className="font-display font-bold text-lg mb-2">Central Line</h4>
                    <p className="text-sm font-medium text-white/70">{contactDetails.landline}</p>
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
