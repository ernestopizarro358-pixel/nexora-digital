"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, CheckCircle, Lock } from "./icons";

function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-bg shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mx-auto -translate-x-3 rounded-md bg-white/[0.04] px-3 py-0.5 text-[0.65rem] text-muted">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="glow left-1/2 top-[8%] h-[380px] w-[680px] -translate-x-1/2 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Proyectos"
          title={
            <>
              Tu negocio también podría verse{" "}
              <span className="text-grad-violet">así</span>.
            </>
          }
          subtitle="Experiencias digitales diseñadas para transmitir confianza, destacar y convertir más visitas en clientes."
        />

        <div className="mt-16 space-y-6 lg:space-y-8">
          {/* DEMO 01 — Ariana (real) */}
          <Reveal>
            <article className="card grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <span className="eyebrow !text-lav">Demo 01</span>
                  <span className="h-px w-8 bg-lav/30" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-0.5 text-[0.65rem] font-medium text-emerald-300/90">
                    <CheckCircle className="h-3 w-3" />
                    Proyecto real
                  </span>
                </div>
                <h3 className="font-display mt-4 text-[1.9rem] font-medium leading-tight text-ink sm:text-[2.2rem]">
                  Ariana Fisioterapia
                </h3>
                <p className="mt-1 text-sm font-medium text-lav">
                  Salud y bienestar
                </p>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  Diseño cercano y profesional que genera confianza y convierte
                  visitas en consultas reservadas. Una presencia clara para una
                  fisioterapeuta independiente.
                </p>
                <a
                  href={SITE.arianaDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline group mt-7"
                >
                  Ver demo
                  <ArrowUpRight className="h-4 w-4 text-lav transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <a
                  href={SITE.arianaDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-500 hover:-translate-y-1"
                >
                  <BrowserChrome url="ariana-fisioterapia.vercel.app">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src="/demo-ariana.png"
                        alt="Vista previa de la página web de Ariana Fisioterapia"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </BrowserChrome>
                </a>
              </div>
            </article>
          </Reveal>

          {/* DEMO 02 — Lic. Camilo (real) */}
          <Reveal delay={0.05}>
            <article className="card grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div className="order-1">
                <a
                  href={SITE.camiloDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-500 hover:-translate-y-1"
                >
                  <BrowserChrome url="lic-camilo.vercel.app">
                    <div className="flex aspect-[16/10] w-full flex-col bg-gradient-to-br from-[#faf8f5] via-[#f1f0e8] to-[#e3e9e2] p-5 sm:p-7">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="grid h-6 w-6 place-items-center rounded-full bg-[#4e6b5c] text-[0.7rem] text-[#faf8f5]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            C
                          </span>
                          <span className="text-[0.7rem] font-medium text-[#3a4a42]">
                            Lic. Camilo{" "}
                            <span className="text-[#8fa89a]">· Sucre</span>
                          </span>
                        </div>
                        <span className="rounded-full bg-[#4e6b5c] px-2.5 py-1 text-[0.55rem] font-medium text-[#faf8f5]">
                          WhatsApp
                        </span>
                      </div>

                      <div className="mt-auto">
                        <p className="text-[0.55rem] font-medium uppercase tracking-[0.22em] text-[#8fa89a]">
                          Psicólogo en Sucre, Bolivia
                        </p>
                        <h4 className="font-display mt-2 text-2xl leading-[1.05] text-[#2f3d36] sm:text-[1.95rem]">
                          Un lugar seguro para{" "}
                          <span className="italic text-[#4e6b5c]">
                            empezar a sentirte mejor.
                          </span>
                        </h4>
                        <div className="mt-3.5 flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#4e6b5c] px-3 py-1.5 text-[0.6rem] font-medium text-[#faf8f5]">
                            Escribir por WhatsApp
                          </span>
                          <span className="rounded-full border border-[#8fa89a]/50 px-3 py-1.5 text-[0.6rem] text-[#4e6b5c]">
                            Ver en qué puedo ayudarte
                          </span>
                        </div>
                      </div>
                    </div>
                  </BrowserChrome>
                </a>
              </div>

              <div className="order-2">
                <div className="flex items-center gap-3">
                  <span className="eyebrow !text-lav">Demo 02</span>
                  <span className="h-px w-8 bg-lav/30" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-0.5 text-[0.65rem] font-medium text-emerald-300/90">
                    <CheckCircle className="h-3 w-3" />
                    Proyecto real
                  </span>
                </div>
                <h3 className="font-display mt-4 text-[1.9rem] font-medium leading-tight text-ink sm:text-[2.2rem]">
                  Lic. Camilo
                </h3>
                <p className="mt-1 text-sm font-medium text-lav">
                  Psicología y bienestar
                </p>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  Una presencia cálida y profesional para un psicólogo en Sucre.
                  Diseño que transmite calma, confianza y cercanía desde el primer
                  momento.
                </p>
                <a
                  href={SITE.camiloDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline group mt-7"
                >
                  Ver demo
                  <ArrowUpRight className="h-4 w-4 text-lav transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted/80">
            <Lock className="h-3.5 w-3.5" />
            Ariana Fisioterapia y Lic. Camilo son proyectos reales desarrollados
            por NEXORA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
