export type Variant = {
  id: string;
  name: string;
  description: string;
  buttonClass: string;
  iconClass: string;
  iconBars: string[];
  panelClass: string;
  panelAccentClass: string;
  activeIndex: number;
  mode: string;
};

export const variants: Variant[] = [
  {
    id: '01',
    name: 'Glass Bar',
    description: 'A slim pill with three lines and a soft glass dropdown.',
    buttonClass: 'rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]',
    iconClass: 'text-primary',
    iconBars: ['w-5', 'w-3.5', 'w-5'],
    panelClass: 'bg-white/92 border-white/70 shadow-2xl shadow-[#1d5fb8]/10 backdrop-blur-xl',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-[#1d5fb8]/20 to-transparent',
    activeIndex: 2,
    mode: 'dropdown',
  },
  {
    id: '02',
    name: 'Stacked Stroke',
    description: 'A hand-drawn feel with offset bars and a clean open card.',
    buttonClass: 'rounded-[1.1rem] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5 translate-y-[1px] -rotate-6', 'w-4', 'w-5 translate-y-[-1px] rotate-6'],
    panelClass: 'bg-[#f4f6f9] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/10 via-[#8fc2ff]/20 to-transparent',
    activeIndex: 1,
    mode: 'card',
  },
  {
    id: '03',
    name: 'Editorial Bracket',
    description: 'Structured, with bracket-like framing and a premium list panel.',
    buttonClass: 'rounded-[0.95rem] border border-slate-200 bg-white shadow-[0_14px_28px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-4', 'w-6', 'w-4'],
    panelClass: 'bg-white border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-white to-transparent',
    activeIndex: 0,
    mode: 'bracket',
  },
  {
    id: '04',
    name: 'Underline Drawer',
    description: 'Minimal closed icon with a wide bottom-sheet drawer.',
    buttonClass: 'rounded-[1rem] border border-white/40 bg-white/70 shadow-[0_10px_28px_rgba(29,95,184,0.12)] backdrop-blur-xl',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5', 'w-5', 'w-3.5'],
    panelClass: 'bg-[#eaf3ff] border-white/70 shadow-2xl shadow-[#1d5fb8]/10',
    panelAccentClass: 'bg-gradient-to-r from-white via-[#eaf3ff] to-[#b9d5ff]/20',
    activeIndex: 3,
    mode: 'bottom-sheet',
  },
  {
    id: '05',
    name: 'Split Line',
    description: 'Two long bars and one short bar, with a crisp floating panel.',
    buttonClass: 'rounded-[0.95rem] border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.07)]',
    iconClass: 'text-slate-900',
    iconBars: ['w-6', 'w-3.5', 'w-6'],
    panelClass: 'bg-white border-slate-200 shadow-2xl shadow-slate-900/8',
    panelAccentClass: 'bg-gradient-to-r from-[#0d47a1]/12 via-transparent to-transparent',
    activeIndex: 1,
    mode: 'side-panel-right',
  },
  {
    id: '06',
    name: 'Capsule Toggle',
    description: 'A longer capsule shape with a tidy, spacious menu panel.',
    buttonClass: 'rounded-full border border-white/30 bg-[#f4f6f9] shadow-[0_12px_28px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-4', 'w-6', 'w-4'],
    panelClass: 'bg-white/95 border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.08] backdrop-blur-xl',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/15 via-[#eaf3ff] to-transparent',
    activeIndex: 2,
    mode: 'capsule-dropdown',
  },
  {
    id: '07',
    name: 'Minimal Mark',
    description: 'Thin lines, lots of whitespace, and a gentle open sheet.',
    buttonClass: 'rounded-[0.85rem] border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.05)]',
    iconClass: 'text-[#1d5fb8]',
    iconBars: ['w-5 opacity-90', 'w-5 opacity-65', 'w-5 opacity-90'],
    panelClass: 'bg-[#f8fbff] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.05]',
    panelAccentClass: 'bg-gradient-to-r from-[#eaf3ff] via-transparent to-transparent',
    activeIndex: 0,
    mode: 'center-modal',
  },
  {
    id: '08',
    name: 'Ribbon Drawer',
    description: 'A stretched button with a ribbon-like menu expansion.',
    buttonClass: 'rounded-[1.1rem] border border-[#b9d5ff] bg-white shadow-[0_14px_28px_rgba(29,95,184,0.08)]',
    iconClass: 'text-primary',
    iconBars: ['w-6', 'w-4', 'w-6'],
    panelClass: 'bg-white border-[#dbeafe] shadow-xl shadow-[#1d5fb8]/[0.08]',
    panelAccentClass: 'bg-gradient-to-r from-[#8fc2ff]/20 via-white to-transparent',
    activeIndex: 2,
    mode: 'side-panel-left',
  },
  {
    id: '09',
    name: 'Corner Editorial',
    description: 'A refined square-ish trigger and an orderly menu list.',
    buttonClass: 'rounded-[0.9rem] border border-slate-200 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.06)]',
    iconClass: 'text-slate-900',
    iconBars: ['w-3.5', 'w-6', 'w-3.5'],
    panelClass: 'bg-white border-slate-200 shadow-2xl shadow-[#1d5fb8]/[0.06]',
    panelAccentClass: 'bg-gradient-to-r from-transparent via-[#eaf3ff] to-[#1d5fb8]/10',
    activeIndex: 3,
    mode: 'corner-menu',
  },
  {
    id: '10',
    name: 'Clean Corporate',
    description: 'The safest version: simple, neat, and brand-aligned.',
    buttonClass: 'rounded-[1rem] border border-slate-200 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.06)]',
    iconClass: 'text-primary',
    iconBars: ['w-5', 'w-5', 'w-5'],
    panelClass: 'bg-[#f4f6f9] border-slate-200 shadow-xl shadow-[#1d5fb8]/[0.05]',
    panelAccentClass: 'bg-gradient-to-r from-[#1d5fb8]/10 via-[#eaf3ff] to-transparent',
    activeIndex: 1,
    mode: 'fullscreen',
  },
];

export default variants;
