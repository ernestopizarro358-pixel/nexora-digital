import { PROBLEM } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={PROBLEM.eyebrow} title={PROBLEM.title} />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {PROBLEM.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="bg-bg">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <span className="font-display text-sm text-faint">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-4 text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="font-display mt-12 max-w-3xl border-l-2 border-ink pl-6 text-2xl leading-snug text-ink sm:text-[1.75rem]">
            {PROBLEM.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
