import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lycheelabs.io"),
  title: {
    default: "Lychee Labs | Industrial Intelligence for Mission-Critical Manufacturing",
    template: "%s | Lychee Labs",
  },
  description:
    "Lychee Labs builds industrial intelligence for mission-critical advanced manufacturing, starting with battery and energy manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--canvas)] font-sans text-[color:var(--ink)] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(32,92,76,0.08),transparent_28%),linear-gradient(180deg,#fafaf8_0%,#f5f6f2_100%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-40 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_95%)]" />
        <SiteHeader />
        <main className="pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
