"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  const iconHref =
    theme === "dark"
      ? "/logo/logo-white-black.jpeg"
      : "/logo/logo-black-white.jpeg";
  const themeColor = theme === "dark" ? "#0b0f11" : "#f4f4f0";

  document
    .querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]')
    .forEach((node) => {
      node.href = iconHref;
    });

  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((node) => {
      node.content = themeColor;
    });
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    setMounted(true);
    applyTheme(initialTheme);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
      onClick={() => {
        const updatedTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
        window.localStorage.setItem("lychee-theme", updatedTheme);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-alt)] text-[color:var(--ink)] transition-colors duration-200 hover:border-[color:var(--line-strong)] hover:bg-[color:var(--surface)]"
    >
      <span className="text-base" aria-hidden="true">
        {mounted && theme === "dark" ? "◐" : "◑"}
      </span>
    </button>
  );
}
