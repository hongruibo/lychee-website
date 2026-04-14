import Link from "next/link";

import {
  calendlyUrl,
  companyLinkedInUrl,
  companyTagline,
  navLinks,
} from "@/lib/site";
import { LogoMark } from "./logo-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-[color:var(--line)] bg-[color:var(--surface)] backdrop-blur-[8px]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-14 lg:px-10">
        <div className="footer-top border-b border-[color:var(--line-subtle)] pb-8">
          <div className="flex items-center gap-4">
            <LogoMark size={48} />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]">
                Lychee Labs
              </p>
              <p className="footer-tagline mt-2 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
                {companyTagline}.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-grid grid gap-10 py-10 md:grid-cols-2 lg:max-w-3xl">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Company
            </h4>
            <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[color:var(--ink)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Contact
            </h4>
            <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              <a href={calendlyUrl} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ink)]">
                Book an intro
              </a>
              <a href={companyLinkedInUrl} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ink)]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-t border-[color:var(--line-subtle)] px-6 py-5 text-xs text-[color:var(--muted)] lg:px-10">
        <span>&copy; 2026 Lychee Labs</span>
      </div>
    </footer>
  );
}
