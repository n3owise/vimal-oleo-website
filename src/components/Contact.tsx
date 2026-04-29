import { Dock, DockIcon } from '@/src/components/ui/dock';
import { sectionEyebrowClass, sectionHeadingClass } from '@/src/lib/section-styles';

const addressQuery = encodeURIComponent(
  'Vimal Oleo Chemicals, Plot No 203A, Shree Ramdarshan Building, Dr Babasaheb Ambedkar Road, Sion East, Mumbai 400022',
);

const contactActions = [
  {
    label: 'Call',
    href: 'tel:+912224010660',
    icon: 'dialer',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919819415552',
    iconSrc: 'https://api.iconify.design/logos:whatsapp-icon.svg',
  },
  {
    label: 'Email',
    href: 'mailto:vimaloleochemicals@gmail.com',
    iconSrc: 'https://api.iconify.design/logos:google-gmail.svg',
  },
  {
    label: 'Directions',
    href: `https://www.google.com/maps/search/?api=1&query=${addressQuery}`,
    iconSrc: 'https://api.iconify.design/logos:google-maps.svg',
  },
];

function BlueDialerIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1A73E8" />
      <path
        fill="#fff"
        d="M33.7 29.2c-1.4 0-2.8-.2-4.1-.7a2.3 2.3 0 0 0-2.3.5l-1.9 1.5a20 20 0 0 1-7.9-7.9l1.5-1.9c.5-.7.7-1.6.4-2.4-.4-1.3-.7-2.7-.7-4.1 0-1.2-1-2.2-2.2-2.2h-3.1c-1.2 0-2.4.5-2.4 2.2 0 12.8 10.4 23.2 23.2 23.2 1.6 0 2.2-1.4 2.2-2.4v-3.6c0-1.2-1-2.2-2.2-2.2h-.5Z"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden bg-slate-950">
        <img
          src="/factory.jpg"
          alt="Industrial Building and Factory"
          className="h-full w-full object-cover grayscale opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-primary/20 to-primary/10" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl rounded-[2.5rem] border border-white/40 bg-white/70 p-8 text-center shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className={sectionEyebrowClass}>[ CONTACT US ]</span>
          <h2 className={sectionHeadingClass}>
            LET’S GET<br />
            <span className="text-primary">IN TOUCH.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-text-slate sm:text-lg">
            We’d love to support your manufacturing goals with the right chemical solutions.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex h-24 w-full max-w-[22rem] items-center justify-center">
            <Dock direction="middle" className="bg-white/75" iconSize={44} iconMagnification={64} iconDistance={130}>
              {contactActions.map((action) => {
                return (
                  <DockIcon key={action.label} className="bg-white">
                    <a
                      href={action.href}
                      aria-label={action.label}
                      target={action.label === 'Directions' || action.label === 'WhatsApp' ? '_blank' : undefined}
                      rel={action.label === 'Directions' || action.label === 'WhatsApp' ? 'noreferrer' : undefined}
                      className="group relative flex h-full w-full items-center justify-center rounded-full outline-none"
                    >
                      <span className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2 translate-y-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-text-dark opacity-0 shadow-lg shadow-slate-900/10 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                        {action.label}
                      </span>
                      {'icon' in action ? (
                        <BlueDialerIcon />
                      ) : (
                        <img src={action.iconSrc} alt="" className="h-7 w-7 object-contain" />
                      )}
                    </a>
                  </DockIcon>
                );
              })}
            </Dock>
          </div>
        </div>
      </div>
    </section>
  );
}
