import Link from "next/link";

type CTASectionProps = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CTASection({
  title,
  body,
  ctaLabel,
  ctaHref,
}: CTASectionProps) {
  return (
    <section className="section-frame">
      <div className="rounded-[2rem] border border-black/8 bg-[color:var(--ink)] px-6 py-12 text-white md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/72">{body}</p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
