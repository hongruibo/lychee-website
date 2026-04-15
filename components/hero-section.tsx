import Link from "next/link";

import { calendlyUrl } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="section-frame hero-section pt-10 md:pt-16">
      <div className="rounded-[2.25rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-[8px] md:px-10 md:py-24">
        <div className="hero-inner mx-auto max-w-[820px] space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            Industrial intelligence for mission-critical manufacturing
          </p>
          <h1 className="mx-auto max-w-4xl text-balance text-[3.5rem] font-semibold tracking-[-0.065em] text-[color:var(--ink)] md:text-[5rem]">
            Reduce battery manufacturing defects before scrap compounds
          </h1>
          <p className="mx-auto max-w-[760px] text-pretty text-[1.15rem] leading-8 text-[color:var(--muted)] md:text-[1.35rem]">
            Lychee Labs helps battery manufacturing teams detect elevated defect risk earlier - so they can reduce scrap, accelerate root-cause investigation, and recover yield before more revenue is lost.
          </p>
          <p className="mx-auto max-w-[720px] text-pretty text-base leading-7 text-[color:var(--muted)] md:text-lg">
            Built for battery manufacturing environments where delayed discovery can destroy millions in value before the root cause is clear.
          </p>
          <div className="hero-actions flex flex-wrap items-center justify-center gap-6 pt-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--canvas)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Scope A Pilot
            </a>
            <Link
              href="/use-cases"
              className="inline-flex items-center text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--ink)] underline-offset-4 transition-colors duration-200 hover:text-[color:var(--accent-strong)] hover:underline"
            >
              See use cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
