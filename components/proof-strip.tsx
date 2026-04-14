import { proofChips } from "@/lib/site";

export function ProofStrip() {
  return (
    <section className="section-frame">
      <div className="proof-grid grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {proofChips.map((chip) => (
          <div
            key={chip}
            className="proof-chip rounded-[999px] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-3 text-sm text-[color:var(--muted)] backdrop-blur-[6px]"
          >
            {chip}
          </div>
        ))}
      </div>
    </section>
  );
}
