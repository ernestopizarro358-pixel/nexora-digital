import { SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { Instagram, Whatsapp } from "./icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-panel/30">
      <div className="glow left-1/2 bottom-[-60%] h-[300px] w-[700px] -translate-x-1/2 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between lg:gap-6">
          <Logo />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Instagram className="h-4 w-4" />
              {SITE.instagramHandle}
            </a>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Whatsapp className="h-4 w-4" />
              {SITE.whatsappDisplay}
            </a>
          </nav>

          <p className="text-xs text-muted/70">© 2026 Nexora Digital</p>
        </div>
      </div>
    </footer>
  );
}
