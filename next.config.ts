import type { NextConfig } from "next";

/* ============================================================
   Content-Security-Policy
   ------------------------------------------------------------
   Estricta y funcional con Next + next/font + Tailwind.
   - object-src 'none', base-uri 'self', frame-ancestors 'self'
     y form-action 'self' cortan los vectores XSS más comunes.
   - SIN 'unsafe-eval'.
   - 'unsafe-inline' se mantiene solo donde Next lo exige (su
     script de arranque y los <style> de fuentes/Tailwind). Para
     una CSP con nonce haría falta middleware por request, lo que
     desactiva el render estático (peor LCP) — no compensa aquí.

   👉 Si activas un VIDEO de YouTube (lib/content.ts), añade las
      líneas marcadas "YOUTUBE" a script-src y frame-src.
   ============================================================ */
// React usa eval() SOLO en desarrollo (HMR/depuración). En producción
// nunca lo hace, así que 'unsafe-eval' se añade únicamente en dev.
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`, // + https://www.youtube.com  ← YOUTUBE
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "frame-src 'self'", // + https://www.youtube-nocookie.com  ← YOUTUBE
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
