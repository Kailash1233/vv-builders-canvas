import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 26,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.96", "start 0.5"],
  });

  const d = Math.min(Math.max(delay, 0), 0.4) * 0.6;
  const opacity = useTransform(scrollYProgress, [d, d + 0.55], [0, 1]);
  const translateY = useTransform(scrollYProgress, [d, d + 0.55], [y, 0]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y: translateY }}>
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent ${className}`}
    >
      {children}
    </span>
  );
}
