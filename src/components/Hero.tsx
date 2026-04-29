import { motion } from 'framer-motion';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface px-4 pb-14 pt-4 sm:px-8 sm:pb-20 sm:pt-6 lg:px-14">
      <div className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden rounded-[2rem] bg-primary shadow-2xl [clip-path:inset(0_round_2rem)] [contain:paint] sm:min-h-[calc(100svh-3rem)] sm:rounded-[2.35rem] sm:[clip-path:inset(0_round_2.35rem)] lg:min-h-[calc(100svh-5rem)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden rounded-[inherit] [backface-visibility:hidden] [transform:translateZ(0)]"
        >
          <video
            aria-label="Flowing oleo chemical background"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-[82%_center] [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform] sm:object-center"
          >
            <source src="/hero-flowing-elements.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-surface/85 via-surface/60 to-transparent" />
          <div className="absolute inset-0 bg-white/[0.06]" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100svh-2rem)] items-start sm:items-center px-6 pb-16 pt-36 sm:min-h-[calc(100svh-3rem)] sm:px-10 sm:pt-36 lg:min-h-[calc(100svh-5rem)] lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-8 space-y-1">
              <h1 className="text-[clamp(1.8rem,6.6vw,4rem)] font-black uppercase leading-[0.92] tracking-tighter text-slate-900 sm:text-[5vw]">
                High-Quality<br />
                Oleo Chemicals.<br />
                <span className="text-primary italic">Delivered with<br />
                Reliability.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-10 md:flex-row md:items-center">
              <motion.div
                className="inline-flex w-fit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <InteractiveHoverButton
                href="#products"
                className="h-[52px] border-[#001e38] px-8 text-[13px] uppercase text-[#001e38]"
              >
                Explore Products
                </InteractiveHoverButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
