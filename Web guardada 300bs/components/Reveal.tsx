"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "span" | "section" | "article";
};

/**
 * Subtle scroll-reveal: fade + small rise, once. Gentle easing.
 * Premium feel without scroll-jacking. Not gated by reduced-motion
 * (functional micro-animation, per cross-platform guidance).
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  style,
  as = "div",
}: RevealProps) {
  // Runtime renders the chosen tag; cast to a single concrete motion
  // component so prop type-checking stays consistent across tags.
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
