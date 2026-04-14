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
    "Lychee Labs builds industrial intelligence for mission-critical manufacturing, with an initial focus on battery and energy manufacturing.",
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
        <meta name="theme-color" content="#0b0f11" />
        <Script id="lychee-theme-init" strategy="beforeInteractive">
          {`
            try {
              var saved = window.localStorage.getItem('lychee-theme');
              var theme = saved === 'light' ? 'light' : 'dark';
              var themeColor = theme === 'light' ? '#f4f4f0' : '#0b0f11';
              document.documentElement.dataset.theme = theme;
              var metaTheme = document.querySelector('meta[name="theme-color"]');
              if (metaTheme) metaTheme.setAttribute('content', themeColor);
            } catch (error) {
              document.documentElement.dataset.theme = 'dark';
              var metaTheme = document.querySelector('meta[name="theme-color"]');
              if (metaTheme) metaTheme.setAttribute('content', '#0b0f11');
            }
          `}
        </Script>
      </head>
      <body className="bg-[color:var(--canvas)] font-sans text-[color:var(--ink)] antialiased">
        <a href="#main-content" className="skip-link">
          Skip To Content
        </a>
        <CursorTrail />
        <div className="app-background pointer-events-none fixed inset-0 -z-20" />
        <div className="app-grid pointer-events-none fixed inset-0 -z-10" />
        <SiteHeader />
        <main id="main-content" className="pb-16 pt-24 md:pt-28">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
