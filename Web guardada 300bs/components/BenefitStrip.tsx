import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./Reveal";

export type Benefit = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

export function BenefitStrip({ items }: { items: Benefit[] }) {
  return (
    <div className="mt-16 grid gap-x-8 gap-y-9 border-t border-white/[0.06] pt-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((b, i) => (
        <Reveal key={b.title} delay={i * 0.06}>
          <div className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-surface text-lav">
              <b.icon className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-[0.95rem] font-medium text-ink">{b.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{b.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
