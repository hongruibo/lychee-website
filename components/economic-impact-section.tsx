import { economicImpactStats } from "@/lib/site";

import { SectionIntro } from "./section-intro";

export function EconomicImpactSection() {
  return (
    <section className="section-frame">
      <div className="rounded-[2.25rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-6 py-10 shadow-[var(--shadow-soft)] backdrop-blur-[8px] md:px-10 md:py-12">
        <SectionIntro
          eyebrow="Economic stakes"
          title="Why earlier visibility matters economically"
          body="Battery manufacturing is one of the harshest proving grounds in industry. Scrap can stay painfully high during ramp, cycle times delay defect visibility, and even a 1-point improvement can be worth millions per year at factory scale."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {economicImpactStats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-[1.85rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-4xl font-semibold tracking-[-0.06em] text-[color:var(--ink)] md:text-[3.2rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                {stat.title}
              </p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                {stat.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-base font-medium text-[color:var(--ink)] md:text-lg">
          Delayed discovery is not just a quality problem. It is a throughput, margin, and capital-efficiency problem.
        </p>
      </div>
    </section>
  );
}
