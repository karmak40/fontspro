import type { Metadata } from "next";
import Link from "next/link";
import { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "How to Use Fancy Text on TikTok & Instagram — Fontpro",
  description:
    "Why stylized Unicode text gets more attention on TikTok and Instagram, and how to use it well without overdoing it.",
};

export default function FancyTextGuidePage() {
  return (
    <div className="flex flex-1 flex-col bg-paper text-graphite">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-widest text-graphite/50 hover:text-graphite"
        >
          ← Back to posts
        </Link>

        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-graphite/50">
          Guide — July 31, 2026
        </p>
        <h1 className="mt-3 font-display text-4xl italic leading-tight text-graphite">
          How to Use Fancy Text on TikTok &amp; Instagram
        </h1>
        <p className="mt-4 text-lg text-graphite/80">
          A plain caption blends into an endless feed. A styled one doesn&rsquo;t.
          That&rsquo;s the entire reason fancy text generators exist, and why so
          many creators keep one bookmarked.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <LegalSection heading="What a fancy text generator actually does">
            <p>
              It swaps your regular letters for lookalike Unicode characters —
              bold, italic, script, circled, and a dozen other styles. There is
              no font to install: the characters themselves carry the style,
              so they paste as plain text into any bio, caption, or comment
              field.
            </p>
          </LegalSection>

          <LegalSection heading="Why stylized text gets more attention">
            <ul className="list-disc pl-5">
              <li>
                <strong>It stands out in a scroll.</strong> Next to a feed of
                identical system fonts, anything different is the first thing
                a thumb stops on.
              </li>
              <li>
                <strong>It signals effort.</strong> A styled bio or caption
                reads as more deliberate, which people tend to associate with
                a more polished profile.
              </li>
              <li>
                <strong>It builds a recognizable look.</strong> Using the same
                style consistently makes a profile easier to recognize at a
                glance.
              </li>
              <li>
                <strong>It sets a mood.</strong> Script, bold, and glitch
                styles each carry a different tone before anyone reads a word.
              </li>
              <li>
                <strong>It gets copied and shared.</strong> Distinctive text
                is more likely to get screenshotted or repeated by others.
              </li>
            </ul>
          </LegalSection>

          <LegalSection heading="Using Fontpro in four steps">
            <ol className="list-decimal pl-5">
              <li>Type your caption, name, or bio idea into the box above.</li>
              <li>
                Scroll through the styles — they update instantly as you
                type.
              </li>
              <li>Tap Copy on the one you like.</li>
              <li>
                Paste it into TikTok, Instagram, Discord, or wherever
                you&rsquo;re posting.
              </li>
            </ol>
            <p>
              One thing worth knowing: TikTok allows special characters in
              your display name and bio, but not in your @handle — keep that
              one plain.
            </p>
          </LegalSection>

          <LegalSection heading="A few tips before you post">
            <ul className="list-disc pl-5">
              <li>
                Use it sparingly — one styled word usually reads better than
                an entire styled sentence.
              </li>
              <li>Pair it with an emoji rather than stacking several styles.</li>
              <li>
                Preview it on a phone before posting. Some styles (flagged
                &ldquo;may not render everywhere&rdquo; in the generator above)
                show up as boxes on certain keyboards and apps.
              </li>
              <li>
                Rotate styles occasionally so your profile doesn&rsquo;t go
                stale.
              </li>
            </ul>
          </LegalSection>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:underline"
        >
          ← Back to the generator
        </Link>
      </div>
    </div>
  );
}
