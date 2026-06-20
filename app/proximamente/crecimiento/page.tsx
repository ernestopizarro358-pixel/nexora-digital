import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { COMING_SOON } from "@/lib/content";

export const metadata: Metadata = {
  title: "Crecimiento — Próximamente",
  description: "El plan Crecimiento de NEXORA está por llegar.",
  robots: { index: false, follow: false },
};

export default function CrecimientoPage() {
  return <ComingSoon plan={COMING_SOON.crecimiento} />;
}
