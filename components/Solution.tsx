import { SOLUTION } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Solution() {
  return (
    <section id="solucion" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={SOLUTION.eyebrow}
          title={SOLUTION.title}
          intro={SOLUTION.text}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {SOLUTION.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card card-hover h-full p-7 sm:p-8">
                <span className="font-display text-3xl text-ink/25">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-4 text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
