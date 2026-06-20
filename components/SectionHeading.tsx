import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} ${
        centered ? "max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      <Reveal>
        <span className={`eyebrow ${centered ? "eyebrow--plain" : ""}`}>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-balance text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`lead mt-5 ${centered ? "mx-auto" : ""} measure`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
