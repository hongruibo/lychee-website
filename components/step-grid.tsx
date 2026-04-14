import { steps } from "@/lib/site";

import { SectionIntro } from "./section-intro";

export function StepGrid() {
  return (
    <section className="section-frame">
      <SectionIntro
        eyebrow="How it works"
        title="From fragmented history to earlier action"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((item) => (
          <article key={item.step} className="rounded-[1.75rem] border border-black/8 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              {item.step}
            </p>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
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
