import Image from "next/image";
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
      <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(10,13,14,0.97),rgba(17,22,25,0.94))] px-6 py-12 text-white md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="overflow-hidden rounded-full border border-white/10 bg-black">
                <Image
                  src="/logo/logo-white-black.jpeg"
                  alt="Lychee Labs logo"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] object-cover"
                />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/66">
                Lychee Labs
              </span>
            </div>
            <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/72">{body}</p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white px-5 py-3 text-sm font-medium text-[#101516] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
