import Image from "next/image";
import Link from "next/link";

import {
  calendlyUrl,
  companyLinkedInUrl,
  companyTagline,
  navLinks,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-black/8 bg-white/88 backdrop-blur-[8px]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-14 lg:px-10">
        <div className="footer-top border-b border-black/6 pb-8">
          <div className="flex items-center gap-4">
            <span className="overflow-hidden rounded-full border border-black/10 bg-black shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
              <Image
                src="/logo/logo-white-black.jpeg"
                alt="Lychee Labs logo"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />
            </span>
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

      <div className="footer-bottom mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-t border-black/6 px-6 py-5 text-xs text-[color:var(--muted)] lg:px-10">
        <span>&copy; 2026 Lychee Labs</span>
      </div>
    </footer>
  );
}
