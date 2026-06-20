import { waLink } from "@/lib/site";
import { FINAL_CTA } from "@/lib/content";
import { Reveal } from "./Reveal";
import { WhatsApp } from "./icons";

export function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink py-24 text-bg sm:py-32"
    >
      <div className="grain opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bg/55">
            {FINAL_CTA.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {FINAL_CTA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-bg/70">
            {FINAL_CTA.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex justify-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark btn-lg"
            >
              <WhatsApp className="h-5 w-5" />
              {FINAL_CTA.ctaLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-7 max-w-md text-sm text-bg/55">
            {FINAL_CTA.scarcity}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
