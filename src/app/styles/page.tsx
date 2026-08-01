import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { LANDING_PAGES } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: "Text Styles — Fontpro",
  description: "Every text style generator, one link each.",
};

export default function StylesIndexPage() {
  return (
    <InfoPage eyebrow="Styles" title="Every style, one link each">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {LANDING_PAGES.map((page) => (
          <Link
            key={page.slug}
            href={`/styles/${page.slug}`}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 backdrop-blur-xl transition-colors hover:border-accent/50"
          >
            <span className="font-display text-lg italic text-[var(--card-fg)]">
              {page.title}
            </span>
          </Link>
        ))}
      </div>
    </InfoPage>
  );
}
