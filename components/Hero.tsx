"use client";

import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import {
  ArrowRight,
  Whatsapp,
  CheckCircle,
  Sparkles,
  Bolt,
  TrendingUp,
} from "./icons";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Diseño estratégico",
    text: "Webs modernas que transmiten confianza y profesionalismo.",
  },
  {
    icon: Bolt,
    title: "Sistemas inteligentes",
    text: "Automatizaciones que ahorran tiempo y no pierden clientes.",
  },
  {
    icon: TrendingUp,
    title: "Enfocado en resultados",
    text: "Tu web trabajando 24/7 para atraer más clientes y más ventas.",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-bg"
    >
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="glow left-1/2 top-[20%] h-[460px] w-[720px] -translate-x-1/2" />
      </div>

      {/* Emerging hands (built from /mano.webp: invert + screen blend) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        alt=""
        src="/mano.webp"
        className="hero-hand hero-hand-left"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        alt=""
        src="/mano.webp"
        className="hero-hand hero-hand-right"
      />

      {/* Vignette + bottom fade so the hands sink into darkness */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] [background:radial-gradient(120%_85%_at_50%_38%,transparent_42%,rgba(5,5,7,0.55)_78%,rgba(5,5,7,0.9)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-bg via-bg/70 to-transparent"
      />

      {/* Main centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-10 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">
            Diseño web estratégico para negocios que quieren destacar
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mx-auto mt-6 max-w-[20ch] text-[2.5rem] font-medium leading-[1.05] tracking-[-0.01em] text-ink [text-wrap:balance] sm:text-[3.25rem] lg:text-[3.9rem]">
            Tu negocio merece una{" "}
            <em className="text-grad-violet italic">presencia digital</em>{" "}
            seria.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Creamos páginas web modernas y sistemas automatizados que atraen,
            convierten y hacen crecer tu negocio.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="btn btn-outline group shadow-[0_0_44px_-14px_rgba(124,92,255,0.55)]"
            >
              <ArrowRight className="h-4 w-4 text-lav transition-transform duration-300 group-hover:translate-x-1" />
              Ver proyectos
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Whatsapp className="h-4 w-4" />
              Hablemos por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-violet" />
              Sitios rápidos
            </span>
            <span className="dot hidden sm:block" />
            <span>Diseños modernos</span>
            <span className="dot hidden sm:block" />
            <span>Resultados reales</span>
          </div>
        </Reveal>
      </div>

      {/* Feature row */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <hr className="hairline mb-10" />
        <div className="grid gap-8 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={0.1 + i * 0.08}
              className={
                i > 0
                  ? "sm:border-l sm:border-white/[0.06] sm:pl-8"
                  : undefined
              }
            >
              <div className="flex items-start gap-4 text-left">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-surface text-lav">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
