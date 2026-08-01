"use client";

import { useEffect, useMemo, useState } from "react";
import { TEXT_STYLES, TextStyle, isRenderRisky } from "@/lib/textStyles";
import { useFavorites } from "@/lib/favorites";

const CATEGORY_LABELS: Record<TextStyle["category"], string> = {
  letters: "Letterform styles",
  shapes: "Enclosed & shapes",
  effects: "Effects",
};

const CATEGORY_ORDER: TextStyle["category"][] = ["letters", "shapes", "effects"];

export default function TextGenerator({
  highlightStyleId,
}: {
  highlightStyleId?: string;
}) {
  const [input, setInput] = useState("your text here");
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!highlightStyleId) return;
    document
      .getElementById(highlightStyleId)
      ?.scrollIntoView({ block: "center" });
  }, [highlightStyleId]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const results = TEXT_STYLES.map((style) => ({
      style,
      output: input ? style.transform(input) : "",
    })).filter((r) => !q || r.style.label.toLowerCase().includes(q));
    return CATEGORY_ORDER.map((category) => ({
      category,
      items: results.filter((r) => r.style.category === category),
    })).filter((group) => group.items.length > 0);
  }, [input, query]);

  async function copy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1500);
    } catch {
      // Clipboard API can be unavailable (insecure context, permissions);
      // the text is still visible to select/copy manually.
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      <div className="p-6 sm:p-8">
        <label className="font-mono text-[11px] uppercase tracking-widest text-[var(--card-fg-muted)]">
          Your text
        </label>
        <div className="mt-2 rounded-xl border border-[var(--card-border)] bg-black/10 px-4 py-3 transition-colors focus-within:border-accent">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
            rows={2}
            className="w-full resize-none border-0 bg-transparent font-display text-2xl text-[var(--card-fg)] outline-none placeholder:text-[var(--card-fg-muted)] sm:text-3xl"
          />
        </div>
      </div>

      <div className="border-t border-[var(--card-border)] px-6 py-3 sm:px-8">
        <div className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-black/10 px-4 py-2 transition-colors focus-within:border-accent">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4 shrink-0 text-[var(--card-fg-muted)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <line x1="13" y1="13" x2="17.5" y2="17.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter styles..."
            className="w-full bg-transparent font-mono text-sm text-[var(--card-fg)] outline-none placeholder:text-[var(--card-fg-muted)]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear filter"
              className="shrink-0 text-[var(--card-fg-muted)] transition-colors hover:text-accent"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {grouped.length === 0 && (
        <p className="px-6 py-8 text-center text-sm text-[var(--card-fg-muted)] sm:px-8">
          No styles match &ldquo;{query}&rdquo;.
        </p>
      )}

      {grouped.map(({ category, items }) => (
        <div key={category}>
          <p className="border-t border-[var(--card-border)] px-6 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--card-fg-muted)] sm:px-8">
            {CATEGORY_LABELS[category]}
          </p>
          <ul className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
            {items.map(({ style, output }) => (
              <li
                key={style.id}
                id={style.id}
                className={`flex scroll-mt-6 flex-col justify-between gap-3 rounded-2xl border bg-black/10 p-4 transition-colors hover:border-accent/50 ${
                  style.id === highlightStyleId
                    ? "border-accent"
                    : "border-[var(--card-border)]"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--card-fg-muted)]">
                        {style.label}
                      </span>
                      {isRenderRisky(style.id) && (
                        <span
                          title="May show as boxes/tofu on some apps or keyboards"
                          className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium text-gold"
                        >
                          may not render everywhere
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(style.id)}
                      aria-pressed={isFavorite(style.id)}
                      aria-label={
                        isFavorite(style.id)
                          ? `Remove ${style.label} from favorites`
                          : `Add ${style.label} to favorites`
                      }
                      className={`shrink-0 text-base leading-none transition-colors ${
                        isFavorite(style.id)
                          ? "text-accent"
                          : "text-[var(--card-fg-muted)] hover:text-accent"
                      }`}
                    >
                      {isFavorite(style.id) ? "★" : "☆"}
                    </button>
                  </div>
                  <p className="mt-2 break-words text-lg text-[var(--card-fg)]">
                    {output || " "}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copy(style.id, output)}
                  disabled={!output}
                  className="self-start rounded-full border border-[var(--card-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--card-fg)] transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
                >
                  {copiedId === style.id ? "Copied" : "Copy"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
