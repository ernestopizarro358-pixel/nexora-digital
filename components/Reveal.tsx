"use client";

import {
  createElement,
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Etiqueta a renderizar (div por defecto; "li", "article", etc.). */
  as?: ElementType;
  className?: string;
  /** Retardo en segundos para escalonar (stagger). */
  delay?: number;
};

/**
 * Revela su contenido al entrar en viewport (IntersectionObserver + CSS).
 * Sin JS el contenido es visible; con reduced-motion aparece sin transición.
 */
export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.04, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Red de seguridad: si no dispara (layouts raros), revela igual.
    const safety = window.setTimeout(() => el.classList.add("is-in"), 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children
  );
}
