export function ProblemSection() {
  return (
    <section className="section-frame problem-section">
      <div className="section-shell rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 backdrop-blur-[8px] md:px-10 md:py-12">
        <div className="section-copy space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
            The problem
          </p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[color:var(--ink)] md:text-[3.35rem]">
            Battery factories discover defects too late - after millions have already been lost
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">
            In battery manufacturing, process drift can begin upstream while defects only become visible much later, after more material, labor, and cycle time have already been consumed. At factory scale, that delay becomes a multimillion-dollar revenue and margin problem. Lychee Labs helps teams surface defect risk earlier from fragmented process and quality data, so they can investigate sooner, intervene earlier, and reduce scrap, rework, and lost output before value is destroyed.
          </p>
        </div>
      </div>

      <div className="problem-cards mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Upstream process drift",
            body: "The earliest signals often begin before downstream failure is visible.",
          },
          {
            title: "Lost value accumulates",
            body: "Material, labor, cycle time, and engineering effort keep compounding before diagnosis is clear.",
          },
          {
            title: "Defect discovered too late",
            body: "Most workflows intervene after quality loss is visible, not when it is still preventable.",
          },
        ].map((card) => (
          <article key={card.title} className="problem-card min-h-44 rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
