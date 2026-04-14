import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-frame pt-8">
      <div className="panel-shell grid gap-12 overflow-hidden px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            Industrial intelligence for mission-critical manufacturing
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-[color:var(--ink)] md:text-7xl">
            Early-warning software for battery manufacturing
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)]">
            Lychee Labs helps battery manufacturing teams use fragmented process and quality data to predict defect risk earlier, accelerate root-cause investigation, and stabilize production faster.
          </p>
          <p className="max-w-2xl text-pretty border-l border-[color:var(--accent-soft)] pl-4 text-base leading-7 text-[color:var(--muted)]">
            Built for battery manufacturing environments where delayed discovery can destroy millions in value before the root cause is even clear.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book an intro
            </Link>
            <Link
              href="/use-cases"
              className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors duration-200 hover:border-black/20 hover:bg-black/[0.02]"
            >
              See use cases
            </Link>
          </div>
        </div>

        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,247,245,0.98))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(32,92,76,0.1),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute left-8 top-8 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Battery-first wedge
          </div>
          <div className="absolute inset-x-8 top-24 grid gap-4">
            <div className="grid grid-cols-[1.4fr_0.8fr] gap-4">
              <div className="rounded-[1.75rem] border border-black/8 bg-white/80 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Fragmented signals
                </p>
                <div className="mt-6 grid grid-cols-6 gap-2">
                  {[34, 52, 40, 61, 43, 68, 39, 57, 46, 71, 44, 62].map((height, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[color:var(--accent)]/60"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-black/8 bg-[color:var(--surface-alt)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Root-cause focus
                </p>
                <div className="mt-10 space-y-3 text-sm text-[color:var(--ink)]">
                  <p>Coating drift</p>
                  <p>Formation variance</p>
                  <p>Inspection mismatch</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white/85 p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <span>Stabilization path</span>
                <span>Earlier action</span>
              </div>
              <div className="relative h-28 overflow-hidden rounded-2xl bg-[color:var(--surface-alt)]">
                <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-black/6" />
                <div className="absolute left-10 top-8 h-12 w-12 rounded-full border border-[color:var(--accent-soft)] bg-white" />
                <div className="absolute left-[32%] top-6 h-16 w-16 rounded-full border border-[color:var(--accent-soft)] bg-white" />
                <div className="absolute right-[28%] top-9 h-10 w-10 rounded-full border border-[color:var(--accent-soft)] bg-white" />
                <div className="absolute right-10 top-7 h-14 w-14 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)]/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
