import Link from "next/link";

export default function BlogPromoCard() {
  return (
    <Link
      href="/blog/fancy-text-generator-stylish-text-tiktok-instagram"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 backdrop-blur-xl transition-colors hover:border-accent/50"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-ink">
            New
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--card-fg-muted)]">
            2026 guide
          </span>
        </div>
        <p className="mt-1 truncate font-display text-lg italic text-[var(--card-fg)]">
          Fancy Text Generator Guide
        </p>
        <p className="text-sm text-[var(--card-fg-muted)]">
          Stylish text for TikTok, Instagram &amp; more
        </p>
      </div>
      <span className="shrink-0 font-mono text-lg text-[var(--card-fg-muted)] transition-colors group-hover:text-accent">
        →
      </span>
    </Link>
  );
}
