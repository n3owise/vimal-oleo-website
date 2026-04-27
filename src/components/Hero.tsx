import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface px-4 pb-14 pt-4 sm:px-8 sm:pb-20 sm:pt-6 lg:px-14">
      <div className="relative min-h-[calc(100svh-2rem)] overflow-hidden rounded-[2rem] bg-primary shadow-2xl sm:min-h-[calc(100svh-3rem)] sm:rounded-[2.35rem] lg:min-h-[calc(100svh-5rem)]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <video
            aria-label="Flowing oleo chemical background"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-[82%_center] sm:object-center"
          >
            <source src="/hero-flowing-elements.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-surface/85 via-surface/60 to-transparent" />
          <div className="absolute inset-0 bg-white/[0.06]" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100svh-2rem)] items-center px-6 pb-16 pt-32 sm:min-h-[calc(100svh-3rem)] sm:px-10 sm:pt-36 lg:min-h-[calc(100svh-5rem)] lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-8 space-y-1">
              <h1 className="text-[clamp(2rem,8vw,4.75rem)] font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[6vw]">
                High-Quality Oleo Chemicals.<br />
                <span className="text-primary italic">Delivered with Reliability.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-10 md:flex-row md:items-center">
              <a
                href="#products"
                className="w-fit rounded-full bg-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
              >
                Explore Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
