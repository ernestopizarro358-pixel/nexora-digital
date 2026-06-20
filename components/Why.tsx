import { WHY } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section id="porque" className="bg-bg-2 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={WHY.eyebrow}
          title={WHY.title}
          intro={WHY.intro}
        />

        <ol className="mx-auto mt-14 max-w-4xl">
          {WHY.reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 0.06}
              className="flex gap-5 border-t border-line py-8 first:border-t-0 sm:gap-7"
            >
              <span className="num-badge">{i + 1}</span>
              <div className="pt-1">
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {r.title}
                </h3>
                <p className="measure mt-3 leading-relaxed text-muted">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="font-display mx-auto mt-12 max-w-3xl text-center text-2xl italic leading-snug text-ink sm:text-[1.9rem]">
            {WHY.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
