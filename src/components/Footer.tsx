import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col relative z-20">
      {/* Pre-footer active status bar from theme */}
      <div className="h-16 bg-navy-dark text-white flex items-center px-6 md:px-12 justify-between border-b border-white/5">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Dist. Network: ACTIVE</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
            ISO 9001:2015 • HALAL • RSPO COMPLIANT
          </div>
        </div>
      </div>

      <footer className="bg-navy-dark text-white py-24 border-b border-white/5" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  <span>V</span>
                </div>
                <div>
                  <h1 className="text-xl font-display font-black tracking-tighter uppercase">VIMAL OLEO CHEMICALS</h1>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold">PREMIUM OLEOCHEMICALS</p>
                </div>
              </div>
              <h2 className="text-4xl font-display font-black tracking-tighter leading-tight mb-6 text-balance max-w-md">
                LET'S GET<br />IN TOUCH.
              </h2>
              <p className="text-slate-400 font-medium mb-12 max-w-sm">
                We'd love to support your manufacturing goals with the right chemical solutions.
              </p>
              <div className="flex gap-4">
                {[Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy-dark transition-all duration-500">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] font-mono font-bold text-primary uppercase tracking-[0.3em] mb-10">[ CONNECT ]</p>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <Phone className="text-primary" size={20} />
                    <div className="space-y-1">
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Sales HQ</p>
                      <p className="text-sm font-bold tracking-tight text-slate-200">+91 [Insert Phone]</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Mail className="text-primary" size={20} />
                    <div className="space-y-1">
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Direct Inquiry</p>
                      <p className="text-sm font-bold tracking-tight text-slate-200">vimal_oc@yahoo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-[11px] font-mono font-bold text-primary uppercase tracking-[0.3em] mb-10">[ AUTHORISED DISTRIBUTORS ]</p>
                <ul className="grid grid-cols-1 gap-4">
                  <li className="text-xs font-bold text-slate-400 uppercase tracking-tight">Jocil Ltd.</li>
                  <li className="text-xs font-bold text-slate-400 uppercase tracking-tight">3F Industries Ltd.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="h-24 bg-navy-dark text-white flex flex-col md:flex-row items-center px-6 md:px-12 justify-between gap-4 py-6 text-center">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
          ©2024 VIMAL OLEO CHEMICALS / Trusted since 1980 / RSPO-Certified Supply
        </div>
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
        >
          GO.TOP
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowUp size={14} className="text-white" />
          </div>
        </button>
      </div>
    </section>
  );
}
