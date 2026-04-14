import Link from "next/link";

import { calendlyUrl, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1000] px-3 pt-3 md:px-5">
      <div className="nav-shell mx-auto flex w-full max-w-[1380px] flex-col rounded-[1.35rem] border border-white/55 bg-white/68 shadow-[0_10px_40px_rgba(17,24,39,0.05)] backdrop-blur-[20px] transition-[background-color,border-color,box-shadow] duration-300">
        <div className="flex min-h-16 items-center justify-between gap-5 px-4 md:px-6">
          <Link
            href="/"
            className="brand-mark flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_20px_rgba(41,89,129,0.2)]" />
            Lychee Labs
          </Link>

          <nav className="main-nav hidden items-center gap-8 text-[13px] font-medium text-[color:var(--muted)] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[color:var(--ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta hidden md:block">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-primary inline-flex items-center rounded-full border border-black/8 bg-[color:var(--ink)] px-4 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book an intro
            </a>
          </div>

          <details className="group md:hidden">
            <summary className="list-none rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Menu
            </summary>
            <div className="absolute right-3 top-[4.65rem] z-50 w-[min(18rem,calc(100vw-1.5rem))] rounded-[1.5rem] border border-white/65 bg-white/92 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-[18px]">
              <nav className="grid gap-1 text-sm text-[color:var(--ink)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-black/[0.03]"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-4 py-3 text-sm font-medium text-white"
                >
                  Book an intro
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
