import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { TeamSection } from "@/components/team-section";
import { aboutPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lychee Labs builds industrial intelligence for mission-critical manufacturing, with an initial focus on battery and energy environments.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Industrial intelligence for mission-critical advanced manufacturing"
        description="Lychee Labs is building industrial intelligence for mission-critical advanced manufacturing, with an initial focus on battery and energy manufacturing."
      />

      <section className="section-frame">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-7 md:p-10">
            <SectionIntro
              eyebrow="Mission"
              title="Earlier visibility is economically material"
              body="Lychee Labs exists because signal in complex manufacturing is often fragmented, delayed, and too hard to act on in time. In battery and energy manufacturing, earlier visibility is economically material: it can help reduce waste, lost output, and margin erosion before problems compound. The company is building the intelligence layer for high-stakes manufacturing environments where delay destroys value."
            />
          </div>
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
              Current focus
            </p>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              {aboutPreview}
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

      <CTASection
        title="Lychee Labs is building the control-layer view that complex manufacturing often lacks."
        body="The company is focused on battery and energy manufacturing because the need is immediate, the economics are concrete, and earlier visibility can change operating outcomes."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </>
  );
}
