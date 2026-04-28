import { Children, cloneElement, isValidElement, useRef, type ReactElement, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';

import { cn } from '@/src/lib/utils';

type DockProps = {
  children: ReactNode;
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: 'middle' | 'top' | 'bottom';
};

type DockIconProps = {
  children: ReactNode;
  className?: string;
  key?: string;
  mouseX?: MotionValue<number>;
  size?: number;
  magnification?: number;
  distance?: number;
};

export function Dock({
  children,
  className,
  iconSize = 48,
  iconMagnification = 68,
  iconDistance = 140,
  direction = 'middle',
}: DockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <motion.div
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        'mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white/85 px-4 py-3 shadow-xl backdrop-blur',
        direction === 'top' && 'items-start',
        direction === 'bottom' && 'items-end',
        className,
      )}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child as ReactElement<DockIconProps>, {
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      })}
    </motion.div>
  );
}

export function DockIcon({
  children,
  className,
  mouseX,
  size = 48,
  magnification = 68,
  distance = 140,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const distanceCalc = useTransform(mouseX ?? useMotionValue(Number.POSITIVE_INFINITY), (value) => {
    if (!Number.isFinite(value)) return distance;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return distance;
    return value - (bounds.left + bounds.width / 2);
  });
  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);
  const width = useSpring(widthSync, { mass: 0.12, stiffness: 180, damping: 14 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        'flex aspect-square items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
