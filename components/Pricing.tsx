import Link from "next/link";
import { PLANS, SCARCITY, type Plan } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Check, Lock, WhatsApp } from "./icons";

export function Pricing() {
  return (
    <section id="planes" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Los planes"
          title="Empieza por lo esencial. Crece cuando quieras."
          intro="Hoy solo necesitas una cosa: una presencia digital seria. Los demás planes llegan pronto, para cuando estés listo para escalar."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;
  const soon = plan.status === "soon";

  return (
    <div
      className={`card relative flex h-full flex-col p-7 sm:p-8 ${
        featured
          ? "border-ink shadow-[var(--shadow-lift)] lg:-mt-3 lg:pb-10"
          : ""
      } ${soon ? "bg-bg-2" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
          {plan.tag}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
            featured
              ? "bg-ink text-on-accent"
              : "border border-line-2 text-faint"
          }`}
        >
          {plan.badge}
        </span>
      </div>

      <h3 className="font-display mt-5 text-2xl text-ink">{plan.name}</h3>
      <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-muted">
        {plan.desc}
      </p>

      {/* Precio */}
      <div className="mt-5 flex items-baseline gap-2.5">
        {plan.oldPrice && (
          <span className="font-display text-2xl text-faint line-through">
            {plan.oldPrice}
          </span>
        )}
        <span className="font-display text-5xl text-ink">{plan.price}</span>
        <span className="text-lg font-medium text-muted">Bs</span>
      </div>
      <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-faint">
        {featured ? "Precio de lanzamiento · pago único" : "Precio estimado"}
      </p>

      {featured && plan.valueLine && (
        <p className="mt-4 rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink-soft">
          {plan.valueLine}
        </p>
      )}

      {/* Features */}
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                soon ? "bg-bg text-faint" : "bg-ink text-on-accent"
              }`}
            >
              {soon ? (
                <Lock className="h-3 w-3" />
              ) : (
                <Check className="h-3 w-3" strokeWidth={2.5} />
              )}
            </span>
            <span className={soon ? "text-muted" : "text-ink-soft"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        {featured && (
          <p className="mb-4 text-center text-xs text-faint">
            Solo para los primeros {SCARCITY.remaining} proyectos.
          </p>
        )}

        {plan.ctaExternal ? (
          <a
            href={plan.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg group w-full"
          >
            <WhatsApp className="h-5 w-5" />
            {plan.ctaLabel}
          </a>
        ) : (
          <Link href={plan.ctaHref} className="btn btn-outline group w-full">
            {plan.ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
