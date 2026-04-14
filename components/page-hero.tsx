type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-frame pt-8">
      <div className="panel-shell grid gap-10 overflow-hidden px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)]">
            {description}
          </p>
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-[2rem] border border-black/8 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(32,92,76,0.09),transparent_55%)]" />
          <div className="absolute left-8 top-8 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Traceability layer
          </div>
          <div className="absolute inset-x-8 bottom-8 top-20">
            <div className="grid h-full grid-cols-4 gap-4">
              {["Process", "Quality", "History", "Action"].map((label, index) => (
                <div key={label} className="relative rounded-3xl border border-black/8 bg-[color:var(--surface-alt)] p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-sm font-medium text-[color:var(--ink)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(32,92,76,0.05),rgba(32,92,76,0.45),rgba(32,92,76,0.05))] lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
