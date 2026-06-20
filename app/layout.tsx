import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "NEXORA — Páginas web que hacen que te tomen en serio",
    template: "%s · NEXORA",
  },
  description:
    "Estudio de diseño web en Tarija, Bolivia. Creamos la página profesional que hace que un cliente confíe en ti antes de hablar contigo. Lista en ~3 días hábiles.",
  keywords: [
    "diseño web Tarija",
    "página web Bolivia",
    "presencia digital",
    "web para profesionales",
    "NEXORA",
  ],
  authors: [{ name: "NEXORA" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NEXORA — Páginas web que hacen que te tomen en serio",
    description:
      "La página profesional que hace que un cliente confíe en ti antes de hablar contigo. Tarija, Bolivia.",
    locale: "es_BO",
    type: "website",
    siteName: "NEXORA",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Activa los reveals solo cuando hay JS: sin JS el contenido
            queda visible (robustez + accesibilidad). Antes de pintar. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
