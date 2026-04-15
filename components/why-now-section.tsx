import { whyNowStats } from "@/lib/site";

export function WhyNowSection() {
  return (
    <section className="section-frame">
      <div className="rounded-[2.1rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 backdrop-blur-[8px] md:px-10 md:py-12">
        <div className="space-y-4 max-w-[52rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            Why now?
          </p>
          <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-[3.35rem]">
            Margin pressure is making defect reduction mandatory
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">
            Battery price compression is reducing tolerance for scrap, yield loss, and slow root-cause cycles. When prices fall and leaders push for higher manufacturing yields, earlier defect prevention becomes{" "}
            <strong className="font-semibold text-[color:var(--ink)]">economic necessity</strong>.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {whyNowStats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)]">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                {stat.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {stat.meta}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
