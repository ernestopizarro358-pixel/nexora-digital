export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="NEXORA — inicio"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-[0.7rem] bg-gradient-to-br from-violet to-[#6d4ad6] shadow-[0_8px_24px_-8px_rgba(124,92,255,0.8)]">
        <span className="font-display text-[1.35rem] font-semibold leading-none text-white">
          N
        </span>
      </span>
      <span className="text-[1.05rem] font-medium uppercase tracking-[0.34em] text-ink">
        Nexora
      </span>
    </a>
  );
}
