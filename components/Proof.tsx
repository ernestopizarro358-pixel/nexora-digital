import { DEMOS, TESTIMONIALS, FOUNDER } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BrowserMockup } from "./BrowserMockup";
import { ArrowUpRight } from "./icons";

export function Proof() {
  return (
    <section id="prueba" className="bg-bg-2 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="La prueba"
          title="Esto es exactamente lo que recibes"
          intro="Dos proyectos reales, en línea ahora mismo. Míralos como los vería un cliente tuyo."
        />

        {/* Demos como evidencia */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.name} delay={i * 0.08}>
              <article>
                <BrowserMockup demo={demo} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-ink">
                      {demo.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-faint">{demo.category}</p>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
                      {demo.desc}
                    </p>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline shrink-0"
                  >
                    Ver demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ----------------------------------------------------------
            TESTIMONIOS — se muestran solos cuando agregas alguno en
            lib/content.ts (TESTIMONIALS). Vacío = oculto.
           ---------------------------------------------------------- */}
        {TESTIMONIALS.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <span className="eyebrow">Lo que dicen</span>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <figure className="card h-full p-7">
                    <blockquote className="font-display text-lg leading-relaxed text-ink">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm">
                      <span className="font-medium text-ink">{t.name}</span>
                      <span className="block text-faint">{t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Fundador — trato directo (humaniza, sube confianza) */}
        <Reveal delay={0.05}>
          <figure className="card mt-20 flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:items-center sm:p-10 sm:text-left">
            <FounderAvatar />
            <div>
              <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                “{FOUNDER.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-faint">
                {FOUNDER.name && (
                  <span className="font-medium text-ink">{FOUNDER.name} · </span>
                )}
                {FOUNDER.role}
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function FounderAvatar() {
  if (FOUNDER.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={FOUNDER.photo}
        alt={FOUNDER.name || "Fundador de NEXORA"}
        className="h-20 w-20 shrink-0 rounded-full border border-line object-cover sm:h-24 sm:w-24"
      />
    );
  }
  return (
    <span className="font-display grid h-20 w-20 shrink-0 place-items-center rounded-full border border-line-2 bg-bg text-3xl text-ink sm:h-24 sm:w-24">
      N
    </span>
  );
}
