import type { Metadata } from "next";

import { CursorTrail } from "@/components/cursor-trail";
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
  icons: {
    icon: "/logo/logo-white-black.jpeg",
    shortcut: "/logo/logo-white-black.jpeg",
    apple: "/logo/logo-white-black.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--canvas)] font-sans text-[color:var(--ink)] antialiased">
        <CursorTrail />
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_8%,rgba(41,89,129,0.08),transparent_24%),radial-gradient(circle_at_85%_14%,rgba(41,89,129,0.05),transparent_20%),linear-gradient(180deg,#fbfbf8_0%,#f4f4f0_100%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:112px_112px] opacity-45 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.6),transparent_96%)]" />
        <SiteHeader />
        <main className="pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
