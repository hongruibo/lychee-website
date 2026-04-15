import { pilotMotionCards, plantFitCards } from "@/lib/site";

import { SectionIntro } from "./section-intro";

export function PilotReadinessSection() {
  return (
    <section className="section-frame">
      <div className="rounded-[2.1rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-10 backdrop-blur-[8px] md:px-10 md:py-12">
        <SectionIntro
          eyebrow="Pilot motion"
          title="Designed for a first pilot that plant teams can actually scope"
          body="Battery manufacturers need to know what gets deployed first, what data is required, and what the team gets back before they commit time and trust."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pilotMotionCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6"
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

        <div className="mt-12 border-t border-[color:var(--line)] pt-10">
          <SectionIntro
            eyebrow="Plant fit"
            title="Built to fit real plant systems and governance constraints"
            body="A credible battery-manufacturing deployment has to coexist with the stack that already runs the factory and handle data that is messy in practice."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {plantFitCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface-alt)] p-6"
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
        </div>
      </div>
    </section>
  );
}
