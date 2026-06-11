// Central source of truth for contact + links.
// WhatsApp number is REAL per client brief: 59177170368.

const WA_MESSAGE = encodeURIComponent(
  "Hola NEXORA 👋, vi su página web y quiero más información."
);

export const SITE = {
  brand: "NEXORA",
  whatsappNumber: "59177170368",
  whatsappDisplay: "+591 77170368",
  whatsappUrl: `https://wa.me/59177170368?text=${WA_MESSAGE}`,
  instagram: "https://instagram.com/nexorabo",
  instagramHandle: "@nexorabo",
  arianaDemoUrl: "https://ariana-fisioteapia.vercel.app/",
  camiloDemoUrl: "https://lic-camilo.vercel.app/",
  location: "Tarija, Bolivia",
} as const;

/** Build a wa.me link with a custom prefilled message. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
] as const;
