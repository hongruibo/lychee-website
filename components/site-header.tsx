import Link from "next/link";

import { calendlyUrl, navLinks } from "@/lib/site";
import { LogoMark } from "./logo-mark";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1000]">
      <div className="site-shell pt-3">
        <div className="nav-shell flex w-full flex-col rounded-[1.35rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-[20px] transition-[background-color,border-color,box-shadow] duration-300">
        <div className="flex min-h-16 items-center justify-between gap-5 px-4 md:px-6">
          <Link
            href="/"
            className="brand-mark flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)]"
            translate="no"
          >
            <LogoMark size={34} priority />
            Lychee Labs
          </Link>

          <nav className="main-nav hidden items-center gap-8 text-[13px] font-medium text-[color:var(--muted)] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-1 py-1 transition-colors duration-200 hover:text-[color:var(--ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-primary inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--ink)] px-4 py-2.5 text-[13px] font-medium text-[color:var(--canvas)] transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-96"
            >
              Book an intro
            </a>
          </div>

          <details className="group md:hidden">
            <summary className="list-none rounded-full border border-[color:var(--line)] bg-[color:var(--surface-alt)] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink)] transition-colors duration-200 hover:border-[color:var(--line-strong)]">
              Menu
            </summary>
            <div className="absolute right-3 top-[4.65rem] z-50 w-[min(18rem,calc(100vw-1.5rem))] rounded-[1.5rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-strong)]/94 p-4 shadow-[var(--shadow-strong)] backdrop-blur-[18px]">
              <nav className="grid gap-1 text-sm text-[color:var(--ink)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[color:var(--surface-alt)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center justify-center">
                  <ThemeToggle />
                </div>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-4 py-3 text-sm font-medium text-[color:var(--canvas)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Book an intro
                </a>
              </nav>
            </div>
          </details>
        </div>
        </div>
      </div>
    </header>
  );
}
