import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { EconomicImpactSection } from "@/components/economic-impact-section";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProofStrip } from "@/components/proof-strip";
import { SectionIntro } from "@/components/section-intro";
import { StepGrid } from "@/components/step-grid";
import { UseCaseCards } from "@/components/use-case-cards";
import { WhyNowSection } from "@/components/why-now-section";
import { aboutPreview, founderName, founderPreview, linkedInUrl, teamRoles, whyLychee } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EconomicImpactSection />
      <ProofStrip />
      <ProblemSection />
      <WhyNowSection />
      <StepGrid />
      <UseCaseCards />

      <section className="section-frame">
        <SectionIntro
          eyebrow="Why Lychee"
          title="Built for high-consequence industrial reality"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {whyLychee.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <SectionIntro
          eyebrow="Teams"
          title="For manufacturing, process, and quality teams"
          body="Designed for industrial teams responsible for yield, throughput, stability, and diagnosis speed."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {teamRoles.map((role) => (
            <div
              key={role}
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--ink)]"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-8 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro eyebrow="About Lychee Labs" title="Industrial intelligence for manufacturing environments where delay destroys value" body={aboutPreview} />
          <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              Founder
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[color:var(--accent-strong)]"
              >
                {founderName}
              </a>
            </h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{founderPreview}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-medium text-[color:var(--ink)]"
            >
              See founder and company background
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="If you’re working on battery manufacturing yield, stability, or diagnosis speed, let’s talk."
        body="For pilot discussions, technical introductions, and customer conversations."
        ctaLabel="Book an intro"
        ctaHref="/contact"
      />
    </>
  );
}
