import { motion } from 'framer-motion';
import { MapPin, Ship, Anchor, Truck, Globe2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function JNPTMap() {
  return (
    <section className="pt-12 pb-0 bg-white relative overflow-hidden" id="location">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Globe2 className="text-primary" size={20} />
              </div>
              <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                GLOBAL LOGISTICS HUB
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter text-slate-900 leading-[0.85] mb-8">
              STRATEGIC<br />
              ACCESS AT<br />
              <span className="text-primary">JNPT PORT.</span>
            </h2>
            
            <p className="text-lg text-text-slate font-medium leading-relaxed max-w-md mb-12">
              Our facilities are strategically located near Mumbai's JNPT Port, ensuring rapid clearance and seamless distribution across the Indian subcontinent.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Ship, label: "Sea Access", detail: "JNPT Terminal" },
                { icon: Truck, label: "Distribution", detail: "Pan-India" },
                { icon: Anchor, label: "Warehouse", detail: "Dedicated" },
                { icon: MapPin, label: "Location", detail: "Navi Mumbai" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                    <item.icon size={18} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-slate-900">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual Representation of the "3D" Light Map */}
            <motion.div 
              initial={{ opacity: 0, rotateX: 20, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-[500px] mx-auto perspective-1000"
            >
              {/* Map Base */}
              <div className="absolute inset-0 rounded-[3rem] bg-slate-50 border border-slate-200 shadow-2xl relative overflow-hidden group">
                {/* Dot Grid Pattern for Map-ish look */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Animated Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border border-primary/30 animate-ping" />
                  <div className="absolute inset-0 w-20 h-20 rounded-full border border-primary/20 animate-[ping_3s_linear_infinite]" />
                </div>

                {/* Central Point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 z-10">
                    <MapPin className="text-primary fill-primary/10" size={28} />
                  </div>
                  <div className="mt-4 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    JNPT Terminal
                  </div>
                  <p className="mt-2 text-[10px] font-mono text-slate-400">18.9497° N, 72.9515° E</p>
                </div>

                {/* Decorative Lines/Paths */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 500">
                  <motion.path 
                    d="M100 100 L250 250 L400 350" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <motion.path 
                    d="M400 50 L250 250 L50 450" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Floaties */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                     <Ship className="text-teal-500" size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Status</p>
                    <p className="text-xs font-bold text-slate-900">Live Clearance</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                     <Truck className="text-amber-500" size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Network</p>
                    <p className="text-xs font-bold text-slate-900">Express Transit</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

