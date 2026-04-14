import type { Metadata } from "next";
import Script from "next/script";

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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="lychee-theme-init" strategy="beforeInteractive">
          {`
            try {
              var saved = window.localStorage.getItem('lychee-theme');
              var theme = saved === 'light' ? 'light' : 'dark';
              document.documentElement.dataset.theme = theme;
            } catch (error) {
              document.documentElement.dataset.theme = 'dark';
            }
          `}
        </Script>
      </head>
      <body className="bg-[color:var(--canvas)] font-sans text-[color:var(--ink)] antialiased">
        <CursorTrail />
        <div className="app-background pointer-events-none fixed inset-0 -z-20" />
        <div className="app-grid pointer-events-none fixed inset-0 -z-10" />
        <SiteHeader />
        <main className="pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
