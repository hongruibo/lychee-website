import Link from "next/link";

import { calendlyUrl } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="section-frame hero-section pt-10 md:pt-16">
      <div className="space-y-10 rounded-[2.25rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-[8px] md:px-10 md:py-24">
        <div className="hero-inner mx-auto max-w-[820px] space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            Industrial intelligence for mission-critical manufacturing
          </p>
          <h1 className="mx-auto max-w-4xl text-balance text-[3.5rem] font-semibold tracking-[-0.065em] text-[color:var(--ink)] md:text-[5rem]">
            Early-warning software for battery manufacturing
          </h1>
          <p className="mx-auto max-w-[760px] text-pretty text-[1.15rem] leading-8 text-[color:var(--muted)] md:text-[1.35rem]">
            Lychee Labs helps battery manufacturing teams use fragmented process and quality data to predict defect risk earlier, accelerate root-cause investigation, and stabilize production faster.
          </p>
          <p className="mx-auto max-w-[720px] text-pretty text-base leading-7 text-[color:var(--muted)] md:text-lg">
            Built for battery manufacturing environments where delayed discovery can destroy millions in value before the root cause is even clear.
          </p>
          <div className="hero-actions flex flex-wrap items-center justify-center gap-6 pt-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-[color:var(--canvas)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book an intro
            </a>
            <Link
              href="/use-cases"
              className="inline-flex items-center text-sm font-medium text-[color:var(--ink)] underline-offset-4 transition-colors duration-200 hover:text-[color:var(--accent-strong)] hover:underline"
            >
              See use cases
            </Link>
          </div>
        </div>

        <div className="hero-visual relative mx-auto min-h-[24rem] w-full max-w-[1120px] overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(53,91,129,0.08),transparent_22%),radial-gradient(circle_at_80%_25%,rgba(41,89,129,0.08),transparent_20%),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:auto,auto,92px_92px,92px_92px]" />
          <div className="absolute left-6 top-6 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-alt)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] md:left-8 md:top-8">
            Battery-first wedge
          </div>

          <div className="absolute inset-x-6 bottom-6 top-20 md:inset-x-8 md:bottom-8 md:top-24">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface-soft)]">
              <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(15,23,42,0.05),rgba(41,89,129,0.28),rgba(15,23,42,0.05))]" />
              <div className="absolute left-[10%] top-[22%] h-16 w-16 rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--surface-alt)] shadow-[var(--shadow-soft)]" />
              <div className="absolute left-[29%] top-[43%] h-10 w-10 rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--surface-alt)]" />
              <div className="absolute left-[45%] top-[20%] h-24 w-24 rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--surface-alt)]" />
              <div className="absolute right-[28%] top-[48%] h-12 w-12 rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--surface-alt)]" />
              <div className="absolute right-[10%] top-[26%] h-20 w-20 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)]/10 shadow-[0_10px_35px_rgba(41,89,129,0.08)]" />

              <div className="absolute left-[14%] top-[28%] h-px w-[20%] rotate-[14deg] bg-[linear-gradient(90deg,rgba(41,89,129,0.1),rgba(41,89,129,0.35))]" />
              <div className="absolute left-[36%] top-[43%] h-px w-[18%] -rotate-[18deg] bg-[linear-gradient(90deg,rgba(41,89,129,0.1),rgba(41,89,129,0.3))]" />
              <div className="absolute left-[52%] top-[40%] h-px w-[22%] rotate-[12deg] bg-[linear-gradient(90deg,rgba(41,89,129,0.1),rgba(41,89,129,0.32))]" />

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-3">
                {[
                  ["Process topology", "Upstream-to-downstream context"],
                  ["Signal paths", "Fragmented history made legible"],
                  ["Quality nodes", "Earlier action before delayed loss"],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {title}
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--ink)]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
