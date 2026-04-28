import { motion } from 'framer-motion';
import type { SVGProps } from 'react';

import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Dock, DockIcon } from '@/src/components/ui/dock';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

type IconProps = SVGProps<SVGSVGElement>;

const contactCopy = {
  eyebrow: '[ CONTACT US ]',
  title: 'LET’S GET IN TOUCH.',
  body: 'We’d love to support your manufacturing goals with the right chemical solutions.',
  cta: 'Get in Touch Today',
};

const contactActions = [
  {
    label: 'Call',
    href: 'tel:+910000000000',
    icon: CallIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/910000000000',
    icon: WhatsAppIcon,
  },
  {
    label: 'Email',
    href: 'mailto:info@vimaloleo.com',
    icon: GmailIcon,
  },
  {
    label: 'Directions',
    href: 'https://maps.google.com',
    icon: DirectionsIcon,
  },
];

function CallIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="22" fill="#20C66B" />
      <path d="M17.8 14.5c-.7.2-2.9 1.2-3.4 3.4-.8 3.6 1.9 8.9 5.6 12.6 3.8 3.8 9.1 6.4 12.7 5.6 2.1-.5 3.2-2.7 3.4-3.4.2-.7-.1-1.4-.8-1.8l-4.7-2.7c-.7-.4-1.5-.3-2 .3l-1.8 1.8c-.4.4-1 .5-1.5.2-1.2-.7-2.5-1.7-3.7-2.9-1.2-1.2-2.2-2.5-2.9-3.7-.3-.5-.2-1.1.2-1.5l1.8-1.8c.6-.6.7-1.4.3-2l-2.7-4.7c-.4-.7-1.1-1-1.8-.8Z" fill="white" />
    </svg>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="22" fill="#25D366" />
      <path fill="#fff" d="M14.1 35.1 15.6 30A13.6 13.6 0 1 1 20 34.2l-5.9.9Zm6.2-3.4.4.2a11 11 0 1 0-2.6-2.5l.3.4-.8 2.7 2.7-.8Z" />
      <path fill="#fff" d="M30.9 26.7c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.7-.8c.2-.3.3-.4.5-.7.2-.3.1-.5 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.2 4.9 7.8 6.9 1.1.5 1.9.7 2.6.9 1.1.3 2 .3 2.8.2.9-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z" />
    </svg>
  );
}

function GmailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#4285F4" d="M42 13.6v20.8c0 2-1.6 3.6-3.6 3.6H34V20.5l8-6.9Z" />
      <path fill="#34A853" d="M6 13.6v20.8c0 2 1.6 3.6 3.6 3.6H14V20.5l-8-6.9Z" />
      <path fill="#EA4335" d="M14 20.5V10l10 7.8L34 10v10.5L24 28.3 14 20.5Z" />
      <path fill="#FBBC04" d="M6 13.6V11c0-2.4 2.8-3.8 4.7-2.3L14 10v10.5l-8-6.9Z" />
      <path fill="#C5221F" d="M42 13.6V11c0-2.4-2.8-3.8-4.7-2.3L34 10v10.5l8-6.9Z" />
    </svg>
  );
}

function DirectionsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#4285F4" d="M24 4c7.2 0 13 5.8 13 13 0 9.7-13 27-13 27S11 26.7 11 17C11 9.8 16.8 4 24 4Z" />
      <path fill="#34A853" d="M24 44s13-17.3 13-27c0-1.5-.2-2.9-.7-4.2L15.9 33.2C19.4 38.9 24 44 24 44Z" opacity=".95" />
      <circle cx="24" cy="17" r="5" fill="#fff" />
      <path fill="#FBBC04" d="M11.9 21.6 23.5 10 32 18.5 17.2 33.3c-2.4-3.8-4.5-7.9-5.3-11.7Z" opacity=".9" />
      <path fill="#EA4335" d="M15.8 7.9a13 13 0 0 1 18.4 0L24 18.1 15.8 7.9Z" opacity=".95" />
    </svg>
  );
}

function ContactDock({ variant = 'glass' }: { variant?: 'glass' | 'solid' | 'floating' | 'rail' }) {
  const dockClass = {
    glass: 'bg-white/75',
    solid: 'bg-slate-950 border-slate-800',
    floating: 'bg-white shadow-2xl',
    rail: 'bg-[#eef3f8] border-slate-200',
  }[variant];

  const iconClass = variant === 'solid' ? 'bg-white' : 'bg-white';

  return (
    <Dock className={dockClass} iconSize={46} iconMagnification={66} iconDistance={130}>
      {contactActions.map((action) => {
        const Icon = action.icon;
        return (
          <DockIcon key={action.label} className={iconClass}>
            <a href={action.href} title={action.label} aria-label={action.label} className="flex h-full w-full items-center justify-center rounded-full">
              <Icon className="h-7 w-7" />
            </a>
          </DockIcon>
        );
      })}
    </Dock>
  );
}

function ContactCta() {
  return (
    <motion.div className="inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <InteractiveHoverButton href="#contact-preview" className="h-[52px] border-[#001e38] px-8 text-[13px] uppercase text-[#001e38]">
        {contactCopy.cta}
      </InteractiveHoverButton>
    </motion.div>
  );
}

function ContactHeader({ option, align = 'center' }: { option: string; align?: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-5xl text-center' : 'max-w-4xl text-left'}>
      <span className={sectionEyebrowClass}>[ OPTION {option} ]</span>
      <h2 className={sectionHeadingClass}>
        LET’S GET<br />
        <span className="text-primary">IN TOUCH.</span>
      </h2>
      <p className={`${align === 'center' ? 'mx-auto' : ''} mt-6 max-w-2xl text-base font-medium leading-relaxed text-text-slate sm:text-lg`}>
        {contactCopy.body}
      </p>
    </div>
  );
}

function VariationOne() {
  return (
    <section id="option-1" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <ContactHeader option="01" />
        <div className="mt-10 flex flex-col items-center gap-8">
          <ContactCta />
          <ContactDock variant="glass" />
        </div>
      </div>
    </section>
  );
}

function VariationTwo() {
  return (
    <section id="option-2" className="bg-[#eef3f8] px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-8 shadow-xl sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <ContactHeader option="02" align="left" />
          <div className="mt-10">
            <ContactCta />
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-surface p-8 text-center">
          <p className="mb-8 font-mono text-[11px] font-black uppercase tracking-[0.24em] text-primary">Direct Channels</p>
          <ContactDock variant="floating" />
        </div>
      </div>
    </section>
  );
}

function VariationThree() {
  return (
    <section id="option-3" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">[ OPTION 03 ]</span>
            <h2 className="font-display text-[clamp(2rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
              LET’S GET<br />
              <span className="text-primary">IN TOUCH.</span>
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/70 sm:text-lg">{contactCopy.body}</p>
            <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <ContactCta />
              <ContactDock variant="solid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationFour() {
  return (
    <section id="option-4" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <ContactHeader option="04" />
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {contactActions.map((action) => {
            const Icon = action.icon;
            return (
              <a key={action.label} href={action.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-2">
                <Icon className="mb-10 h-12 w-12" />
                <p className="font-display text-3xl font-black uppercase italic leading-none tracking-tighter text-slate-950">{action.label}</p>
              </a>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <ContactCta />
        </div>
      </div>
    </section>
  );
}

function VariationFive() {
  return (
    <section id="option-5" className="bg-[#eef3f8] px-5 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 sm:p-12">
            <ContactHeader option="05" align="left" />
            <div className="mt-10">
              <ContactCta />
            </div>
          </div>
          <div className="flex min-h-[420px] flex-col items-center justify-center gap-10 bg-primary p-8 text-white">
            <p className="max-w-sm text-center font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/70">Choose your preferred contact route</p>
            <ContactDock variant="rail" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationSix() {
  return (
    <section id="option-6" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#eef3f8] p-8 sm:p-10">
            <ContactHeader option="06" align="left" />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 rounded-[2rem] border border-slate-200 p-8">
            <ContactDock variant="glass" />
            <ContactCta />
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationSeven() {
  return (
    <section id="option-7" className="bg-[#eef3f8] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ContactHeader option="07" align="left" />
          <ContactCta />
        </div>
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl">
          <div className="flex min-h-[240px] items-center justify-center rounded-[2rem] bg-surface">
            <ContactDock variant="floating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationEight() {
  return (
    <section id="option-8" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12">
            <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-primary">[ OPTION 08 ]</span>
            <h2 className="font-display text-[clamp(2rem,8vw,5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-white">
              LET’S GET<br />
              <span className="text-primary">IN TOUCH.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/70 sm:text-lg">{contactCopy.body}</p>
            <div className="mt-10">
              <ContactCta />
            </div>
          </div>
          <div className="flex min-h-[420px] items-center justify-center bg-white p-8">
            <ContactDock variant="glass" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationNine() {
  return (
    <section id="option-9" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <ContactHeader option="09" />
        <div className="mx-auto mt-12 max-w-5xl rounded-full border border-slate-200 bg-white px-5 py-5 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <ContactDock variant="rail" />
            <ContactCta />
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationTen() {
  return (
    <section id="option-10" className="bg-[#eef3f8] px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[2.5rem] bg-primary p-8 text-white sm:p-10">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase italic tracking-[0.3em] text-white/70">[ OPTION 10 ]</span>
          <h2 className="font-display text-[clamp(2rem,7vw,4.5rem)] font-black uppercase italic leading-[0.85] tracking-tighter">
            CONTACT<br />
            <span className="text-white/70">CHANNELS.</span>
          </h2>
        </div>
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
          <p className="max-w-3xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">{contactCopy.body}</p>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <ContactCta />
            <ContactDock variant="floating" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPreview() {
  return (
    <main id="contact-preview" className="min-h-screen bg-surface text-text-main">
      <section className="grid min-h-[70svh] place-items-center px-6 py-20 text-center">
        <div>
          <span className={sectionEyebrowClass}>[ CONTACT SECTION CONCEPTS ]</span>
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase italic leading-[0.78] tracking-tighter text-slate-950">
            Contact <span className="text-primary">Variations</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-relaxed text-text-slate sm:text-lg">
            Ten contact section styles with four dock treatments for Call, WhatsApp, Email, and Directions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
              <a key={option} href={`#option-${option}`} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 shadow-sm">
                Option {String(option).padStart(2, '0')}
              </a>
            ))}
          </div>
        </div>
      </section>

      <VariationOne />
      <VariationTwo />
      <VariationThree />
      <VariationFour />
      <VariationFive />
      <VariationSix />
      <VariationSeven />
      <VariationEight />
      <VariationNine />
      <VariationTen />
    </main>
  );
}
