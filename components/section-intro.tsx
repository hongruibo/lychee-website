type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-[52rem]";

  return (
    <div className={`space-y-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-[3.35rem]">
        {title}
      </h2>
      {body ? (
        <p className="max-w-3xl text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
