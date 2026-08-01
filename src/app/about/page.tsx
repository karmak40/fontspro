import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "About — Fontpro" };

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About" title="A specimen book for Unicode">
      <p>
        Fontpro turns plain text into twenty Unicode alphabets — bold,
        script, fraktur, circled and more — so you can paste something a
        little more distinctive into Instagram, TikTok, Discord or anywhere
        else that only accepts plain text.
      </p>
      <p>
        There&rsquo;s no account to create and nothing to upload. Every
        conversion happens in your browser; the text you type never reaches
        our servers.
      </p>
    </InfoPage>
  );
}
