import { FAQS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Plus } from "./icons";

export function FAQ() {
  return (
    <section id="faq" className="bg-bg-2 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Preguntas"
          title="Lo que probablemente te estás preguntando"
          align="center"
        />

        <div className="faq mt-12">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group border-t border-line last:border-b">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5">
                  <span className="font-display text-lg text-ink sm:text-xl">
                    {item.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-2 text-ink">
                    <Plus className="faq-ind h-4 w-4" />
                  </span>
                </summary>
                <p className="faq-panel pb-6 pr-10 text-[0.97rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
