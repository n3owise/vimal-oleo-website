import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/src/lib/utils';

type InteractiveHoverButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
};

export function InteractiveHoverButton({
  children = 'Button',
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <a
      className={cn(
        'group relative inline-flex h-12 min-w-44 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-950 bg-white px-7 py-2 text-center text-sm font-bold tracking-[0.08em] text-slate-950 transition-colors duration-500 ease-out',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-slate-950 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <span className="relative z-10 inline-block translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 z-10 flex translate-x-10 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        {children}
        <ArrowRight size={16} strokeWidth={2.2} />
      </span>
    </a>
  );
}
