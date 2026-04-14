import Link from "next/link";

import { navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-[color:var(--canvas)]/88 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-[color:var(--ink)] uppercase">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
          Lychee Labs
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-[color:var(--ink)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-black/10 bg-[color:var(--ink)] px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Book an intro
        </Link>
      </div>
    </header>
  );
}
