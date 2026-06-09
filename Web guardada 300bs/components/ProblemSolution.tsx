"use client";

import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import {
  Instagram,
  Whatsapp,
  TikTok,
  Search,
  MessageCircle,
  Repeat,
  Sliders,
  ArrowRight,
} from "./icons";

const PAIN_POINTS = [
  "Solo te encuentran si publicas.",
  "Mensajes que se pierden o llegan tarde.",
  "No hay seguimiento, los clientes se enfrían.",
  "Dependes de plataformas que no son tuyas.",
];

const GAINS = [
  {
    icon: Search,
    title: "Te encuentran siempre",
    text: "Tu web trabaja 24/7, también cuando no estás publicando.",
  },
  {
    icon: MessageCircle,
    title: "No pierdes consultas",
    text: "Respuestas automáticas y seguimiento inteligente.",
  },
  {
    icon: Repeat,
    title: "Clientes que vuelven",
    text: "Los nutres y los conviertes en compradores fieles.",
  },
  {
    icon: Sliders,
    title: "Control total",
    text: "Tú tienes tu plataforma, tus datos y tus reglas.",
  },
];

const OUTCOMES = [
  {
    title: "Más clientes todos los meses",
    text: "Un sistema diseñado para atraer personas que sí compran.",
  },
  {
    title: "Más confianza y autoridad",
    text: "Te ven más profesional, te eligen y te recomiendan.",
  },
  {
    title: "Clientes que vuelven",
    text: "Los atiendes mejor y los conviertes en clientes fieles.",
  },
  {
    title: "Ventas más constantes",
    text: "Dejas de depender de historias y publicaciones que se pierden.",
  },
  {
    title: "Ventaja en un océano azul",
    text: "Muy pocos negocios en Tarija tienen esto. Tú puedes ser uno de los primeros.",
  },
];

function ChatBubble({
  text,
  time,
  tone = "in",
}: {
  text: string;
  time: string;
  tone?: "in" | "lost";
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`max-w-[80%] rounded-2xl rounded-tl-sm border px-3.5 py-2 text-sm ${
          tone === "lost"
            ? "border-red-500/15 bg-red-500/[0.06] text-muted"
            : "border-white/10 bg-white/[0.04] text-ink/90"
        }`}
      >
        {text}
      </div>
      <span className="pl-1 text-[0.65rem] text-muted/70">{time}</span>
    </div>
  );
}

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="glow left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="El problema"
          title={
            <>
              Publicar ya no es suficiente.
              <br className="hidden sm:block" /> Estás{" "}
              <span className="text-grad-violet">dejando clientes</span> y ni lo
              sabes.
            </>
          }
          subtitle="En Tarija y en Bolivia, la mayoría de negocios depende solo de redes sociales y WhatsApp. Así es muy fácil perder oportunidades todos los días."
        />

        {/* Before / After */}
        <div className="relative mt-16 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* BEFORE */}
          <Reveal className="h-full">
            <div className="card flex h-full flex-col p-6 sm:p-8">
              <p className="eyebrow !text-muted">Lo que te está pasando ahora</p>

              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-bg/40 p-5">
                <div className="mb-4 flex items-center gap-2.5">
                  {[Instagram, Whatsapp, TikTok].map((Icon, i) => (
                    <span
                      key={i}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                  ))}
                  <span className="ml-1 text-xs text-muted/70">
                    Todo depende de responder a mano
                  </span>
                </div>
                <div className="space-y-3">
                  <ChatBubble text="¿Sigue disponible?" time="11:32" />
                  <ChatBubble text="¿Cuánto cuesta?" time="15:47 · visto" />
                  <ChatBubble
                    text="Ya no necesito, gracias 🙁"
                    time="Ayer"
                    tone="lost"
                  />
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {PAIN_POINTS.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/60" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="rounded-xl border border-red-500/15 bg-red-500/[0.05] px-4 py-3 text-sm text-muted">
                  Resultado:{" "}
                  <span className="font-medium text-red-300/90">
                    oportunidades perdidas todos los días.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Center arrow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-lav/30 bg-bg text-lav shadow-[0_0_40px_-8px_rgba(124,92,255,0.6)]">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>

          {/* AFTER */}
          <Reveal delay={0.1} className="h-full">
            <div className="card card-hover flex h-full flex-col border-lav/20 p-6 shadow-[0_30px_80px_-40px_rgba(124,92,255,0.6)] sm:p-8">
              <p className="eyebrow">Lo que obtienes con NEXORA</p>

              {/* Mini browser mockup */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-panel to-bg">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 rounded-md bg-white/[0.04] px-2 py-0.5 text-[0.65rem] text-muted">
                    nexora.digital
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                    Un sistema web que{" "}
                    <span className="text-grad-violet">atrae</span>,{" "}
                    <span className="text-grad-violet">convierte</span> y hace{" "}
                    <span className="text-grad-violet">crecer</span> tu negocio.
                  </p>
                  <span className="btn btn-primary mt-4 h-9 px-4 text-xs">
                    Quiero mi página web
                  </span>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {GAINS.map((g) => (
                  <li
                    key={g.title}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet/15 text-lav">
                      <g.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{g.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        {g.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="rounded-xl border border-lav/20 bg-violet/[0.08] px-4 py-3 text-sm text-muted">
                  Resultado:{" "}
                  <span className="font-medium text-lavender">
                    más clientes, más ventas, más libertad.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Outcomes */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow text-center">Lo que logras</p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
            {OUTCOMES.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 0.06}
                className="bg-bg p-6"
              >
                <span className="font-display text-2xl text-violet/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[0.95rem] font-medium text-ink">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {o.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-panel via-surface to-panel p-7 sm:p-9 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl text-ink sm:text-[1.7rem]">
                Este es <span className="text-grad-violet">tu momento</span>.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Mientras otros siguen publicando, tú puedes construir un sistema
                que haga crecer tu negocio hoy. Da el siguiente paso antes que tu
                competencia.
              </p>
            </div>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shrink-0"
            >
              <Whatsapp className="h-4 w-4" />
              Hablemos por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
