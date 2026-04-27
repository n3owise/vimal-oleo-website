import type { HTMLAttributes } from 'react';
import { cn } from '@/src/lib/utils';

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'marquee group flex overflow-hidden [--duration:40s] [--gap:1.5rem]',
        vertical ? 'flex-col' : 'flex-row',
        pauseOnHover && 'marquee-pause-on-hover',
        className
      )}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'marquee-content flex shrink-0 justify-around gap-[var(--gap)]',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            reverse && 'marquee-reverse'
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
