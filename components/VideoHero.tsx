"use client";

import { useState } from "react";
import { VIDEO } from "@/lib/content";
import { Play } from "./icons";

/**
 * Video del hero con carga diferida.
 * - "placeholder": poster monocromo elegante (no parece un hueco roto).
 * - "youtube"/"file": muestra poster + botón play; el iframe/video se
 *   carga SOLO al hacer clic (mejor rendimiento y privacidad).
 */
export function VideoHero() {
  const [playing, setPlaying] = useState(false);
  const isReal = VIDEO.kind === "youtube" || VIDEO.kind === "file";

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-bg-2 shadow-[var(--shadow-lift)]">
      {playing && VIDEO.kind === "youtube" && (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0`}
          title={VIDEO.label}
          allow="accelerated-encoding; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}

      {playing && VIDEO.kind === "file" && (
        <video
          className="absolute inset-0 h-full w-full bg-black object-contain"
          src={VIDEO.fileSrc}
          poster={VIDEO.poster || undefined}
          controls
          autoPlay
          playsInline
        />
      )}

      {!playing && (
        <PosterLayer
          interactive={isReal}
          onPlay={() => isReal && setPlaying(true)}
        />
      )}
    </div>
  );
}

function PosterLayer({
  interactive,
  onPlay,
}: {
  interactive: boolean;
  onPlay: () => void;
}) {
  const content = (
    <>
      {/* Fondo: poster propio o gradiente monocromo */}
      {VIDEO.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={VIDEO.poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#ffffff_0%,#f0efeb_55%,#e4e2dc_100%)]" />
      )}
      <div className="grain" aria-hidden />

      {/* Monograma de marca, muy sutil */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute inset-0 flex items-center justify-center text-[34vw] leading-none text-ink/[0.04] sm:text-[18rem]"
      >
        N
      </span>

      {/* Botón / glifo play */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span
          className={`grid h-16 w-16 place-items-center rounded-full border border-ink/20 bg-bg/70 backdrop-blur-sm transition-transform duration-300 sm:h-20 sm:w-20 ${
            interactive ? "group-hover:scale-105" : ""
          }`}
        >
          <Play className="ml-1 h-6 w-6 text-ink sm:h-7 sm:w-7" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
          {interactive ? VIDEO.label : "Video de presentación · muy pronto"}
        </span>
      </div>
    </>
  );

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Reproducir: ${VIDEO.label}`}
        className="group absolute inset-0 h-full w-full cursor-pointer"
      >
        {content}
      </button>
    );
  }

  return <div className="absolute inset-0">{content}</div>;
}
