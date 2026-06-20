import { waLink } from "@/lib/site";
import { HERO } from "@/lib/content";
import { Reveal } from "./Reveal";
import { VideoHero } from "./VideoHero";
import { ArrowRight, Check, WhatsApp } from "./icons";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* halo de fondo muy suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(11,11,12,0.05),transparent)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow eyebrow--plain justify-center">
            {HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mt-6 text-balance text-[2.6rem] leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            {HERO.titleLead}{" "}
            <em className="italic text-ink">{HERO.titleEm}</em>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lead measure mx-auto mt-6">{HERO.subtitle}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg w-full sm:w-auto"
            >
              <WhatsApp className="h-5 w-5" />
              {HERO.ctaPrimary}
            </a>
            <a href="#porque" className="btn btn-outline btn-lg w-full sm:w-auto">
              {HERO.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {HERO.chips.map((chip) => (
              <li key={chip} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-ink" />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl px-5 sm:mt-16 sm:px-8">
        <Reveal delay={0.1}>
          <VideoHero />
        </Reveal>
      </div>
    </section>
  );
}
