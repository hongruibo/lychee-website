import { useCaseCards } from "@/lib/site";

import { SectionIntro } from "./section-intro";

type UseCaseCardsProps = {
  title?: string;
  eyebrow?: string;
  label?: string;
};

export function UseCaseCards({
  title = "Where teams use Lychee Labs",
  eyebrow = "Use cases",
  label = "Core workflows for battery manufacturing and adjacent energy systems",
}: UseCaseCardsProps) {
  return (
    <section className="section-frame">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionIntro eyebrow={eyebrow} title={title} />
        <p className="text-sm text-[color:var(--muted)]">{label}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {useCaseCards.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 backdrop-blur-[6px]">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
