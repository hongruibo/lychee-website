import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { TeamSection } from "@/components/team-section";
import { aboutPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lychee Labs is building industrial intelligence for mission-critical advanced manufacturing, starting with battery and energy manufacturing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Industrial intelligence for mission-critical advanced manufacturing"
        description="Lychee Labs is building industrial intelligence for mission-critical advanced manufacturing, with battery and energy manufacturing as the initial beachhead."
      />

      <section className="section-frame">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/8 bg-white p-7 md:p-10">
            <SectionIntro
              eyebrow="Mission"
              title="Earlier visibility is economically material"
              body="Lychee Labs exists because signal in complex manufacturing is often fragmented, delayed, and too hard to act on in time. Battery and energy manufacturing are the initial beachhead because the operating penalty for delayed discovery is already severe. The company mission is broader: build the industrial-intelligence layer for high-stakes advanced manufacturing systems where earlier visibility changes operating outcomes."
            />
          </div>
          <div className="rounded-[2rem] border border-black/8 bg-[color:var(--surface-alt)] p-7 md:p-10">
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
        body="The company starts with battery and energy manufacturing because the need is immediate, the economics are concrete, and the product wedge is commercially legible."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </>
  );
}
