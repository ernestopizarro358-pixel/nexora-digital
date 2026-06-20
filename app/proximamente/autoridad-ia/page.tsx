import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { COMING_SOON } from "@/lib/content";

export const metadata: Metadata = {
  title: "Autoridad IA — Próximamente",
  description: "El plan Autoridad IA de NEXORA está por llegar.",
  robots: { index: false, follow: false },
};

export default function AutoridadIaPage() {
  return <ComingSoon plan={COMING_SOON.autoridadIa} />;
}
