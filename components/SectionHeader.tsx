import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-[1.08] tracking-[-0.01em] text-ink [text-wrap:balance] sm:text-[2.6rem] lg:text-[3rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
