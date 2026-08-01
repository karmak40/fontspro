"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFavorites } from "@/lib/favorites";
import { TEXT_STYLES } from "@/lib/textStyles";
import { useInstallPrompt } from "@/lib/useInstallPrompt";

const PAGE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/styles", label: "Styles" },
  { href: "/emoji", label: "Emojis" },
  { href: "/aesthetics", label: "Aesthetics" },
];

const THEME_KEY = "fontpro-theme";

function readStoredTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function MenuDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { favorites, toggleFavorite } = useFavorites();
  const { canInstall, promptInstall } = useInstallPrompt();

  useEffect(() => {
    setTheme(readStoredTheme());
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be unavailable (private browsing); the toggle still
      // works for the rest of the session via the DOM attribute.
    }
  }

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col gap-8 overflow-y-auto border-r border-[var(--hairline)] bg-ink px-6 py-6 text-fg transition-transform duration-300 ease-out motion-reduce:transition-none sm:w-80 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg italic text-fg">
            Fontpro<span className="text-accent">.</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-[var(--hairline)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-mist transition-colors hover:text-fg"
          >
            Close
          </button>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
            Favorites
          </h2>
          {favorites.length === 0 ? (
            <p className="text-sm text-mist">No favorites yet.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {favorites.map((id) => {
                const style = TEXT_STYLES.find((s) => s.id === id);
                if (!style) return null;
                return (
                  <li key={id} className="flex items-center justify-between gap-2">
                    <Link
                      href={`/#${id}`}
                      onClick={onClose}
                      className="truncate text-lg text-fg transition-colors hover:text-accent"
                    >
                      {style.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(id)}
                      aria-label={`Remove ${style.label} from favorites`}
                      className="shrink-0 text-mist transition-colors hover:text-accent"
                    >
                      ✕
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
            Pages
          </h2>
          <nav className="flex flex-col gap-2">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-lg text-fg transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
            Appearance
          </h2>
          <button
            type="button"
            onClick={toggleTheme}
            className="self-start rounded-full border border-[var(--hairline)] px-4 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </section>

        {canInstall && (
          <section className="flex flex-col gap-3">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
              App
            </h2>
            <button
              type="button"
              onClick={promptInstall}
              className="self-start rounded-full border border-accent px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Install Fontpro
            </button>
          </section>
        )}

        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
            Support
          </h2>
          <a
            href="mailto:hello@fontpro.app"
            className="self-start text-lg text-fg transition-colors hover:text-accent"
          >
            Contact us
          </a>
        </section>
      </div>
    </>
  );
}
