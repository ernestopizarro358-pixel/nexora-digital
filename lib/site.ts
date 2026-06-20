// ============================================================
// NEXORA — Contacto, enlaces y datos de marca (fuente única).
// Edita aquí WhatsApp, Instagram y URLs de los demos.
// ============================================================

const DEFAULT_WA_MESSAGE =
  "Hola NEXORA 👋, vi su página y quiero más información sobre el plan Presencia Digital.";

export const SITE = {
  brand: "NEXORA",
  // URL pública para metadata/OG. Cambia cuando tengas el dominio final.
  url: "https://nexora.com.bo",
  location: "Tarija, Bolivia",

  // WhatsApp REAL del cliente
  whatsappNumber: "59177170368",
  whatsappDisplay: "+591 77170368",

  // Redes
  instagram: "https://instagram.com/nexorabo",
  instagramHandle: "@nexorabo",

  // Demos reales (verificados en vivo)
  demos: {
    ariana: "https://ariana-fisioteapia.vercel.app/",
    camilo: "https://lic-camilo.vercel.app/",
  },
} as const;

/** Construye un enlace wa.me con mensaje pre-rellenado. */
export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/** Navegación de la home (una sola página). */
export const NAV_LINKS = [
  { label: "El porqué", href: "#porque" },
  { label: "Cómo lo hacemos", href: "#solucion" },
  { label: "Ejemplos", href: "#prueba" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
] as const;
