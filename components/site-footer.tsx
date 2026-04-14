import Link from "next/link";

import {
  companyTagline,
  founderEmail,
  linkedInUrl,
  navLinks,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        <div className="max-w-sm space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]">
            Lychee Labs
          </p>
          <p className="text-sm leading-6 text-[color:var(--muted)]">
            {companyTagline}.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Navigation
          </p>
          <div className="grid gap-3 text-sm text-[color:var(--muted)]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[color:var(--ink)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-[color:var(--muted)]">
            <a href={`mailto:${founderEmail}`} className="hover:text-[color:var(--ink)]">
              {founderEmail}
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ink)]">
              Linda Hong Cheng on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-t border-black/6 px-6 py-5 text-xs text-[color:var(--muted)] lg:px-10">
        <p>&copy; {new Date().getFullYear()} Lychee Labs</p>
        <p>Mission-critical industrial intelligence.</p>
      </div>
    </footer>
  );
}
