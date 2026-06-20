"use client";

import { useEffect, useState } from "react";

type Remaining = { d: number; h: number; m: number; s: number } | null;

function getRemaining(target: number): Remaining {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

/** Cuenta regresiva a una fecha. Si ya pasó, muestra "Muy pronto". */
export function Countdown({ date }: { date: string }) {
  const target = new Date(`${date}T00:00:00`).getTime();
  const [t, setT] = useState<Remaining>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(getRemaining(target));
    const id = window.setInterval(() => setT(getRemaining(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (mounted && t === null) {
    return <p className="font-display text-3xl text-ink">Muy pronto</p>;
  }

  const units = [
    { label: "Días", v: t?.d },
    { label: "Horas", v: t?.h },
    { label: "Min", v: t?.m },
    { label: "Seg", v: t?.s },
  ];

  return (
    <div className="flex gap-2.5 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="card min-w-[64px] px-3 py-3 text-center sm:min-w-[82px]"
        >
          <span className="font-display block text-3xl tabular-nums text-ink sm:text-4xl">
            {mounted && u.v != null ? String(u.v).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.15em] text-faint">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
