import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXORA — Tu negocio merece una presencia digital seria",
  description:
    "Creamos páginas web modernas y sistemas automatizados que atraen, convierten y hacen crecer tu negocio en Tarija y toda Bolivia.",
  keywords: [
    "diseño web Tarija",
    "página web Bolivia",
    "diseño web premium",
    "presencia digital",
    "automatización WhatsApp",
    "sistemas digitales",
    "NEXORA",
  ],
  authors: [{ name: "NEXORA" }],
  openGraph: {
    title: "NEXORA — Tu negocio merece una presencia digital seria",
    description:
      "Sistemas digitales que transmiten confianza, atraen clientes y hacen crecer tu negocio.",
    locale: "es_BO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
