import Image from "next/image";
import type { Demo } from "@/lib/content";

function prettyDomain(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function BrowserMockup({ demo }: { demo: Demo }) {
  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group block overflow-hidden"
      aria-label={`Ver el demo en vivo de ${demo.name}`}
    >
      {/* Cromo del navegador */}
      <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full border border-line-2" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-2" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-2" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md border border-line bg-bg px-3 py-1 text-xs text-faint">
          {prettyDomain(demo.url)}
        </span>
      </div>

      {/* Ventana */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-2">
        {demo.image ? (
          <Image
            src={demo.image}
            alt={`Captura del sitio de ${demo.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderPreview demo={demo} />
        )}
      </div>
    </a>
  );
}

/** Vista previa monocroma cuando aún no hay captura real. */
function PlaceholderPreview({ demo }: { demo: Demo }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[radial-gradient(120%_120%_at_30%_0%,#ffffff,#ecebe6)] p-6 sm:p-8">
      {/* faux nav */}
      <div className="flex items-center justify-between">
        <span className="font-display text-sm tracking-wide text-ink">
          {demo.name}
        </span>
        <span className="hidden gap-3 sm:flex">
          <span className="h-1.5 w-8 rounded-full bg-ink/15" />
          <span className="h-1.5 w-8 rounded-full bg-ink/15" />
          <span className="h-1.5 w-10 rounded-full bg-ink/30" />
        </span>
      </div>

      {/* contenido */}
      <div className="my-auto max-w-[18rem]">
        {demo.previewHeadline && (
          <p className="font-display text-xl leading-tight text-ink sm:text-2xl">
            {demo.previewHeadline}
          </p>
        )}
        <span className="mt-3 block h-1.5 w-40 rounded-full bg-ink/12" />
        <span className="mt-2 block h-1.5 w-32 rounded-full bg-ink/12" />
        <span className="mt-5 inline-block h-7 w-28 rounded-md bg-ink" />
      </div>
    </div>
  );
}
