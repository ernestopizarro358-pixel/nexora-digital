"use client";

import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { BenefitStrip, type Benefit } from "./BenefitStrip";
import {
  Check,
  ArrowRight,
  Shield,
  Gauge,
  Monitor,
  Sparkles,
  Lock,
} from "./icons";

type Plan = {
  tag: string;
  name: string;
  desc: string;
  price: string;
  oldPrice?: string;
  offer?: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    tag: "Plan 1",
    name: "Presencia Digital",
    desc: "Para profesionales que necesitan verse serios desde el primer vistazo.",
    price: "150",
    oldPrice: "300",
    offer: "50% OFF · Por tiempo limitado",
    featured: true,
    features: [
      "Sitio web profesional",
      "Diseño responsive",
      "Información clara y estructurada",
      "WhatsApp integrado",
      "Formulario de contacto básico",
      "Diseño limpio y moderno",
    ],
  },
  {
    tag: "Plan 2",
    name: "Crecimiento",
    desc: "Para quienes quieren diferenciarse, atraer clientes y hacer crecer su negocio.",
    price: "950",
    features: [
      "Todo lo del plan Presencia Digital",
      "Copywriting estratégico",
      "Diseño más premium y animaciones",
      "Estructura optimizada para convertir",
      "Llamados a la acción estratégicos",
      "Optimización visual y de velocidad",
    ],
  },
  {
    tag: "Plan 3",
    name: "Autoridad IA",
    desc: "Un sistema completo que automatiza procesos y trabaja por ti.",
    price: "2.400",
    features: [
      "Todo lo del plan Crecimiento",
      "Email marketing automatizado",
      "Automatizaciones y flujos de WhatsApp",
      "Captación y gestión de leads",
      "IA básica aplicada a tu negocio",
      "Seguimiento automático de clientes",
      "Integraciones y formularios avanzados",
    ],
  },
];

const BENEFITS: Benefit[] = [
  {
    icon: Shield,
    title: "Soporte dedicado",
    text: "Te acompañamos en todo el proceso.",
  },
  {
    icon: Gauge,
    title: "Entrega rápida",
    text: "Cumplimos tiempos sin comprometer calidad.",
  },
  {
    icon: Monitor,
    title: "100% Responsive",
    text: "Perfecto en todos los dispositivos, siempre.",
  },
  {
    icon: Sparkles,
    title: "Diseño a medida",
    text: "Cada proyecto es único, como tu negocio.",
  },
];

export function Pricing() {
  return (
    <section
      id="planes"
      className="relative overflow-hidden bg-panel/40 py-24 sm:py-28 lg:py-32"
    >
      <div className="glow left-1/2 top-[12%] h-[420px] w-[760px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Elige tu nivel"
          title={
            <>
              Tu presencia digital define cómo{" "}
              <span className="text-grad-violet">te perciben</span>.
            </>
          }
          subtitle="Tres niveles pensados para cada etapa de crecimiento. Tú eliges hasta dónde quieres llegar."
        />

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`card relative flex h-full flex-col p-7 sm:p-8 ${
                  plan.featured
                    ? "border-lav/40 shadow-[0_30px_90px_-40px_rgba(124,92,255,0.8)] lg:-mt-4 lg:pb-12"
                    : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-lav/30 bg-gradient-to-r from-violet to-[#6d4ad6] px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-8px_rgba(124,92,255,0.9)]">
                    Recomendado
                  </span>
                )}

                <p className="eyebrow !text-muted">{plan.tag}</p>
                <h3 className="font-display mt-3 text-2xl font-medium text-ink">
                  {plan.name}
                </h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-muted">
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                          plan.featured
                            ? "bg-violet/20 text-lavender"
                            : "bg-white/[0.06] text-lav"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  {plan.offer && (
                    <span className="mb-3 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-amber-200">
                      {plan.offer}
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    {plan.oldPrice && (
                      <span className="font-display text-2xl font-medium text-muted/45 line-through">
                        {plan.oldPrice}
                      </span>
                    )}
                    <span className="font-display text-4xl font-semibold text-ink">
                      {plan.price}
                    </span>
                    <span className="text-lg font-medium text-lav">Bs</span>
                  </div>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted/70">
                    {plan.offer ? "Precio de lanzamiento · pago único" : "Pago único del proyecto"}
                  </p>

                  <a
                    href={waLink(
                      `Hola NEXORA 👋, me interesa el plan ${plan.name} (${plan.price} Bs). ¿Me dan más información?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-5 w-full group ${
                      plan.featured ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    Elegir este plan
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <BenefitStrip items={BENEFITS} />

        <Reveal>
          <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted/80">
            <Lock className="h-3.5 w-3.5" />
            Pago seguro · Garantía de satisfacción
          </p>
        </Reveal>
      </div>
    </section>
  );
}
