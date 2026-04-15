import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { actionOutcomes, economicStats, productPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Earlier defect visibility from fragmented manufacturing data for battery manufacturing teams.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Earlier defect visibility from fragmented manufacturing data"
        description="Lychee Labs helps battery manufacturing teams turn scattered process and quality history into earlier risk signals and faster investigation."
      />

      <section className="section-frame">
        <SectionIntro eyebrow="Product pillars" title="Built around the actual operating problem" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-8 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Built for action, not just analytics"
            title="Earlier visibility only matters if it changes the operating response"
            body="This is not generic analytics. It is earlier warning and faster investigation in battery manufacturing settings where delayed discovery increases material loss, engineering drag, and operating exposure."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {actionOutcomes.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-5">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <SectionIntro
          eyebrow="Economic context"
          title="Earlier visibility is economically material"
          body="Battery manufacturing losses compound quickly when signal arrives late. The operating case is not abstract: earlier visibility supports reduced scrap, faster diagnosis, faster stabilization, and reduced operating loss."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {economicStats.map((stat) => (
            <a
              key={stat.value}
              href={stat.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 hover:border-[color:var(--accent-soft)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)]">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{stat.label}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {stat.source}
              </p>
            </a>
          ))}
        </div>
      </section>

      <CTASection
        title="Earlier risk visibility is most valuable when the line is expensive to stabilize."
        body="If you are working on yield, quality, or root-cause speed in battery manufacturing, Lychee Labs is built for that operating problem."
        ctaLabel="Scope A Pilot"
        ctaHref="/contact"
      />
    </>
  );
}
