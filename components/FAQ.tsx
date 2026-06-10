"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Plus, Minus, Whatsapp, ArrowRight, CheckCircle } from "./icons";

type QA = { q: string; a: ReactNode };

const FAQS: QA[] = [
  {
    q: "¿Por qué necesito una página web si ya tengo Instagram?",
    a: "Instagram es una excelente herramienta para generar visibilidad, pero depende de algoritmos y plataformas que no controlas. Una página web te permite mostrar tu negocio de forma profesional, centralizar tu información y generar confianza las 24 horas.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio?",
    a: "Sí. Las estrategias y estructuras se adaptan al tipo de negocio, ya sea un profesional independiente, una clínica, una academia, una inmobiliaria o cualquier empresa que necesite generar confianza y atraer clientes.",
  },
  {
    q: "¿Aparecerá mi web en Google?",
    a: "Sí. Todas las páginas se desarrollan con buenas prácticas de estructura y posicionamiento para que puedan ser indexadas correctamente por Google.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Lo ideal es contar con información básica sobre tu negocio, servicios, público objetivo y formas de contacto. Si todavía no tienes claro tu cliente ideal, propuesta de valor o posicionamiento, también te ayudaremos a definirlos durante el proceso.",
  },
  {
    q: "¿Cuánto tiempo tarda el desarrollo?",
    a: "La mayoría de proyectos se completan entre 2 y 6 semanas dependiendo del tipo de web y del plan elegido.",
  },
  {
    q: "¿Puedo solicitar cambios durante el desarrollo?",
    a: "Sí. Durante el proceso podrás solicitar ajustes y revisiones para asegurarnos de que el resultado final represente correctamente tu negocio.",
  },
  {
    q: "¿Qué pasa después de publicar la web?",
    a: "Una vez finalizado y entregado el proyecto, cualquier modificación, ampliación o nueva funcionalidad podrá realizarse como una actualización adicional del servicio.",
  },
  {
    q: "¿Qué incluye la administración del sitio?",
    a: "La administración incluye hosting, dominio, configuración técnica y supervisión básica para mantener tu sitio online y funcionando correctamente.",
  },
  {
    q: "¿Cuánto cuesta la administración mensual?",
    a: (
      <ul className="space-y-1.5">
        <li className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-1.5">
          <span>Presencia Digital</span>
          <span className="font-medium text-lavender">20 Bs/mes</span>
        </li>
        <li className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-1.5">
          <span>Crecimiento</span>
          <span className="font-medium text-lavender">60 Bs/mes</span>
        </li>
        <li className="flex items-center justify-between gap-4">
          <span>Autoridad IA</span>
          <span className="font-medium text-lavender">150 Bs/mes</span>
        </li>
      </ul>
    ),
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: QA;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-lav/25 bg-white/[0.03]"
          : "border-white/[0.07] bg-transparent hover:border-white/15"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-[0.95rem] font-medium text-ink">{item.q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
            isOpen
              ? "border-lav/40 bg-violet/15 text-lavender"
              : "border-white/15 text-muted"
          }`}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number>(-1); // todas cerradas al inicio

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="glow left-[6%] top-[10%] h-[420px] w-[460px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left — CTA */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">Estamos para ayudarte</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-[1.08] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
              Tu negocio merece una{" "}
              <span className="text-grad-violet">presencia digital seria</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Diseño estratégico, automatización y sistemas digitales pensados
              para transmitir confianza.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group mt-8"
            >
              <Whatsapp className="h-4 w-4" />
              Hablemos por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <CheckCircle className="h-4 w-4 text-violet" />
              Respuesta rápida y sin compromiso.
            </p>
          </Reveal>
        </div>

        {/* Right — FAQ */}
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Preguntas frecuentes</p>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.04, 0.2)}>
                <FaqItem
                  item={item}
                  index={i}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
