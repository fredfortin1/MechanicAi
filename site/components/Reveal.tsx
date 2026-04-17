"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  eager?: boolean;
};

export function Reveal({ children, delay = 0, y = 24, className, eager = false }: RevealProps) {
  const reduce = useReducedMotion();
  const animateProps = eager
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 } };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...animateProps}
    >
      {children}
    </motion.div>
  );
}

type MaskProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  eager?: boolean;
};

export function MaskReveal({ children, delay = 0, className, eager = false }: MaskProps) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{children}</span>;
  const animateProps = eager
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once: true, amount: 0.1 } };
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className ?? ""}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        {...animateProps}
      >
        {children}
      </motion.span>
    </span>
  );
}
