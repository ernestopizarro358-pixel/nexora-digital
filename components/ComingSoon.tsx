import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import type { ComingSoonPlan } from "@/lib/content";
import { Countdown } from "./Countdown";
import { Reveal } from "./Reveal";
import { ArrowRight, Check, Clock, WhatsApp } from "./icons";

export function ComingSoon({ plan }: { plan: ComingSoonPlan }) {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Barra superior mínima */}
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-[0.18em] text-ink"
          >
            {SITE.brand}
          </Link>
          <Link
            href="/#planes"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">
            {plan.tag}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-4xl text-ink sm:text-5xl">
              {plan.name}
            </h1>
            <span className="chip border-line-2">Próximamente</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lead measure mt-5">{plan.tagline}</p>
        </Reveal>

        {/* Contador */}
        <Reveal delay={0.16}>
          <div className="mt-10">
            <p className="eyebrow eyebrow--plain mb-4">Lanzamiento en</p>
            <Countdown date={plan.launchDate} />
          </div>
        </Reveal>

        {/* Datos */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chip">
              Precio estimado · {plan.price} Bs
            </span>
            <span className="chip">
              <Clock className="h-4 w-4" />
              Desarrollo · {plan.devTime}
            </span>
          </div>
        </Reveal>

        {/* Lo que incluirá — difuminado y no interactuable */}
        <Reveal delay={0.24}>
          <div className="mt-12">
            <p className="eyebrow eyebrow--plain mb-4">Lo que incluirá</p>
            <ul
              className="blur-locked grid gap-3 sm:grid-cols-2"
              aria-hidden="true"
            >
              {plan.includes.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-on-accent">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-ink-soft">{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-faint">
              Lista completa revelada en el lanzamiento.
            </p>
          </div>
        </Reveal>

        {/* CTA — único elemento interactivo */}
        <Reveal delay={0.28}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(plan.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg w-full sm:w-auto"
            >
              <WhatsApp className="h-5 w-5" />
              Avísame cuando esté disponible
            </a>
            <Link href="/" className="btn btn-outline btn-lg w-full sm:w-auto">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Volver al inicio
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
