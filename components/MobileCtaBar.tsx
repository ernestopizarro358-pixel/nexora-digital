"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsApp } from "./icons";

/**
 * Barra CTA fija inferior (solo móvil). Aparece tras un poco de
 * scroll y se esconde cerca del pie para no taparlo. Respeta el
 * safe-area-inset de los celulares con notch.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.offsetHeight - 220;
      setVisible(y > 480 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="px-4 py-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg w-full"
        >
          <WhatsApp className="h-5 w-5" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  );
}
