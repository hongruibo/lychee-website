import { heroValueCards } from "@/lib/site";

export function ProofStrip() {
  return (
    <section className="section-frame">
      <div className="proof-grid grid gap-4 md:grid-cols-3">
        {heroValueCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 backdrop-blur-[6px]"
          >
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
