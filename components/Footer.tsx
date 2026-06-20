import { SITE, NAV_LINKS, waLink } from "@/lib/site";
import { Instagram, MapPin, WhatsApp } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg/10 bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <span className="font-display text-2xl font-semibold tracking-[0.18em]">
              {SITE.brand}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bg/60">
              Páginas web que hacen que te tomen en serio. Diseño profesional
              para profesionales y emprendedores.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-bg/60">
              <MapPin className="h-4 w-4" />
              {SITE.location}
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Secciones">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bg/45">
              Secciones
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bg/70 transition-colors hover:text-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bg/45">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-bg/70 transition-colors hover:text-bg"
                >
                  <WhatsApp className="h-4 w-4" />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-bg/70 transition-colors hover:text-bg"
                >
                  <Instagram className="h-4 w-4" />
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-bg/10 pt-6 text-xs text-bg/45 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.brand}. Todos los derechos reservados.
          </p>
          <p>Hecho con cuidado en Tarija, Bolivia.</p>
        </div>
      </div>
    </footer>
  );
}
