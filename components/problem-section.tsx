import { economicStats, sourceLinks } from "@/lib/site";

import { SectionIntro } from "./section-intro";

export function ProblemSection() {
  return (
    <section className="section-frame">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <SectionIntro
            eyebrow="Problem"
            title="Battery teams often discover problems after millions have already been lost"
            body="In battery manufacturing, process drift can begin upstream while defects only become visible much later, after additional material, labor, and cycle time have already been consumed. At factory scale, that delay becomes a multimillion-dollar operating problem. McKinsey has highlighted both extreme scrap during early ramp-up and the heavy daily cost of lost production at gigafactory scale. Lychee Labs helps teams surface defect risk earlier from fragmented process and quality data, so they can investigate sooner, intervene faster, and reduce the cost of delayed discovery."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Delayed visibility",
                body: "The problem often starts upstream long before downstream quality signals make it obvious.",
              },
              {
                title: "Fragmented data",
                body: "Process, inspection, and quality context are usually split across tools, teams, and time windows.",
              },
              {
                title: "Slow diagnosis",
                body: "Even when defects appear, finding the most likely cause path can still take too long.",
              },
            ].map((card) => (
              <article key={card.title} className="rounded-[1.75rem] border border-black/8 bg-white p-6">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            Operating context
          </p>
          <div className="mt-6 grid gap-4">
            {economicStats.map((stat) => (
              <a
                key={stat.value}
                href={stat.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-black/8 bg-[color:var(--surface-alt)] p-5 transition-colors duration-200 hover:border-[color:var(--accent-soft)]"
              >
                <p className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{stat.label}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Source: {stat.source}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-6 border-t border-black/6 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Source links
            </p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
              {sourceLinks.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ink)]">
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
