import { economicStats, sourceLinks } from "@/lib/site";

import { SectionIntro } from "./section-intro";

export function ProblemSection() {
  return (
    <section className="section-frame problem-section">
      <div className="section-shell grid gap-10 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 backdrop-blur-[8px] md:px-10 md:py-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="section-copy space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            The problem
          </p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-[3.35rem]">
            Battery teams often discover problems after millions have already been lost
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">
            In battery manufacturing, process drift can begin upstream while defects only become visible much later, after more material, labor, and cycle time have already been consumed. At factory scale, that delay becomes a multimillion-dollar revenue and margin problem. Lychee Labs helps teams surface defect risk earlier from fragmented process and quality data, so they can investigate sooner, intervene earlier, and reduce scrap, rework, and lost output before value is destroyed.
          </p>
        </div>

        <aside className="stat-callouts rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            Economic stakes
          </p>
          <div className="mt-6 grid gap-4">
            {economicStats.map((stat) => (
              <a
                key={stat.value}
                href={stat.href}
                target="_blank"
                rel="noreferrer"
                className="stat-card rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-[color:var(--accent-soft)]"
              >
                <span className="stat-value block text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-[2.4rem]">
                  {stat.value}
                </span>
                <span className="stat-caption mt-2 block text-sm leading-6 text-[color:var(--muted)]">
                  {stat.label}
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Source: {stat.source}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-6 border-t border-[color:var(--line)] pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Supporting sources
            </p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
              {sourceLinks.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ink)]">
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="problem-cards mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Delayed visibility",
            body: "Problems often appear only after substantial value has already been added.",
          },
          {
            title: "Fragmented data",
            body: "Critical process, batch, and quality history is split across systems, files, and teams.",
          },
          {
            title: "Slow diagnosis",
            body: "Engineering time is lost reconstructing likely causes while scrap and delay continue to accumulate.",
          },
        ].map((card) => (
          <article key={card.title} className="problem-card min-h-44 rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
