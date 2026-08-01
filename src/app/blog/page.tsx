import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Blog — Fontpro" };

export default function BlogPage() {
  return (
    <InfoPage eyebrow="Blog" title="Guides">
      <Link
        href="/blog/fancy-text-generator-stylish-text-tiktok-instagram"
        className="group flex flex-col gap-1 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 backdrop-blur-xl transition-colors hover:border-accent/50"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--card-fg-muted)]">
          Guide — July 31, 2026
        </span>
        <span className="font-display text-xl italic text-[var(--card-fg)]">
          How to Use Fancy Text on TikTok &amp; Instagram
        </span>
        <span className="text-sm text-[var(--card-fg-muted)]">
          Why stylized text gets more attention, and how to use it well.
        </span>
      </Link>
    </InfoPage>
  );
}
