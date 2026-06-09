"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { BenefitStrip, type Benefit } from "./BenefitStrip";
import {
  Whatsapp,
  Mail,
  FileText,
  Sparkles,
  Shield,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
} from "./icons";

const SECONDARY = [
  {
    icon: Whatsapp,
    title: "Automatización WhatsApp",
    text: "Responde automáticamente, organiza consultas y nunca pierdas un cliente.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    text: "Campañas automatizadas que nutren a tu audiencia y aumentan conversiones.",
  },
  {
    icon: FileText,
    title: "Formularios Inteligentes",
    text: "Captura datos clave de tus clientes de forma simple, efectiva y profesional.",
  },
  {
    icon: Sparkles,
    title: "IA para Negocios",
    text: "Soluciones de IA que optimizan tareas, ahorran tiempo y mejoran resultados.",
  },
];

const BENEFITS: Benefit[] = [
  {
    icon: Shield,
    title: "Más confianza",
    text: "Transmite profesionalismo desde el primer segundo.",
  },
  {
    icon: Clock,
    title: "Más tiempo",
    text: "Automatiza tareas y enfócate en lo que realmente importa.",
  },
  {
    icon: TrendingUp,
    title: "Más resultados",
    text: "Estrategias enfocadas en generar oportunidades reales.",
  },
  {
    icon: Users,
    title: "Más crecimiento",
    text: "Sistemas diseñados para escalar contigo.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-panel/40 py-24 sm:py-28 lg:py-32"
    >
      <div className="glow right-[10%] top-[15%] h-[360px] w-[460px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Lo que hacemos"
          title={
            <>
              Mucho más que una{" "}
              <span className="text-grad-violet">página web</span>.
            </>
          }
          subtitle="Creamos sistemas digitales pensados para transmitir profesionalismo, automatizar procesos y ayudarte a destacar."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* Featured */}
          <Reveal className="lg:row-span-2">
            <article className="card card-hover relative flex h-full flex-col overflow-hidden p-7 sm:p-8">
              <div className="glow -left-10 top-0 h-[260px] w-[260px] opacity-80" />
              <div className="relative">
                <span className="inline-flex items-center rounded-full border border-lav/25 bg-violet/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-lavender">
                  Servicio principal
                </span>

                {/* Browser illustration */}
                <div className="mt-7 overflow-hidden rounded-xl border border-lav/15 bg-bg/60">
                  <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-lav/40" />
                    <span className="h-2 w-2 rounded-full bg-lav/25" />
                    <span className="h-2 w-2 rounded-full bg-lav/15" />
                  </div>
                  <div className="space-y-2.5 p-4">
                    <div className="h-2.5 w-1/3 rounded-full bg-lav/40" />
                    <div className="flex gap-2.5">
                      <div className="h-12 w-1/2 rounded-lg bg-gradient-to-br from-violet/30 to-violet/5" />
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-4/5 rounded-full bg-white/10" />
                        <div className="h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="h-7 w-28 rounded-md bg-gradient-to-r from-violet to-[#6d4ad6]" />
                  </div>
                </div>

                <h3 className="font-display mt-7 text-2xl font-medium text-ink sm:text-[1.7rem]">
                  Diseño Web Premium
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Sitios web modernos, rápidos y estratégicos que transmiten
                  confianza y convierten visitantes en clientes.
                </p>
                <a
                  href="#proyectos"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-lavender transition-colors hover:text-ink"
                >
                  Saber más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </Reveal>

          {/* Secondary 2x2 */}
          {SECONDARY.map((s, i) => (
            <Reveal key={s.title} delay={0.08 + i * 0.06}>
              <article className="card card-hover group flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface text-lav transition-colors group-hover:border-lav/30 group-hover:text-lavender">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-xl font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
                <ArrowRight className="mt-4 h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-lav" />
              </article>
            </Reveal>
          ))}
        </div>

        <BenefitStrip items={BENEFITS} />
      </div>
    </section>
  );
}
