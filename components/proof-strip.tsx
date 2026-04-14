import { proofChips } from "@/lib/site";

export function ProofStrip() {
  return (
    <section className="section-frame">
      <div className="grid gap-3 px-1 md:grid-cols-2 xl:grid-cols-4">
        {proofChips.map((chip) => (
          <div key={chip} className="rounded-full border border-black/8 bg-white px-5 py-3 text-sm text-[color:var(--muted)] shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            {chip}
          </div>
        ))}
      </div>
    </section>
  );
}
