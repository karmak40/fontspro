import Link from "next/link";
import TextGenerator from "@/components/TextGenerator";
import HeroSpecimen from "@/components/HeroSpecimen";
import BlogPromoCard from "@/components/BlogPromoCard";
import { LANDING_PAGES } from "@/lib/landingPages";

export default function Home() {
  return (
    <>
      <section className="px-6 pt-10 pb-6 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl italic leading-tight text-fg sm:text-4xl">
            Turn plain text into <HeroSpecimen />
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-mist">
            Type below, then tap Copy on the style you like
          </p>
        </div>
      </section>

      <section className="flex flex-1 justify-center px-6 pb-16">
        <div className="flex w-full max-w-3xl flex-col gap-4">
          <TextGenerator />
          <BlogPromoCard />

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 px-1 font-mono text-[11px] uppercase tracking-widest text-mist">
            <span className="text-[var(--card-fg-muted)]">Popular:</span>
            {LANDING_PAGES.slice(0, 5).map((page) => (
              <Link
                key={page.slug}
                href={`/styles/${page.slug}`}
                className="transition-colors hover:text-accent"
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
