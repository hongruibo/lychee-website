import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { detailedUseCases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Use cases for battery manufacturing teams using Lychee Labs for earlier risk visibility and faster diagnosis.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="Use cases for battery manufacturing teams"
        description="These workflows focus on earlier defect visibility, faster diagnosis, and better operating context in battery manufacturing environments."
      />

      <section className="section-frame">
        <SectionIntro
          eyebrow="Battery workflows"
          title="Operationally specific use cases"
          body="Each workflow is framed around what teams are trying to reduce: delayed discovery, diagnostic drag, instability during ramp, and cross-system blind spots."
        />

        <div className="mt-10 grid gap-5">
          {detailedUseCases.map((item) => (
            <article key={item.title} className="grid gap-6 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Use case
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
                  {item.title}
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">What it is</p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.what}</p>
                </div>
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">Why it matters</p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.why}</p>
                </div>
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">Who owns it</p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.owner}</p>
                </div>
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">Operational consequence reduced</p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.consequence}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="These workflows are built for battery manufacturing teams where delayed visibility is expensive."
        body="The same operating logic matters wherever fragmented process and quality data slow diagnosis, stabilization, and recovery."
        ctaLabel="Scope A Pilot"
        ctaHref="/contact"
      />
    </>
  );
}
