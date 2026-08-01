import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Emojis — Fontpro" };

export default function EmojiPage() {
  return (
    <InfoPage eyebrow="Coming soon" title="Emoji picker">
      <p>
        A searchable emoji picker, styled to match the rest of Fontpro, is on
        the way — copy an emoji the same way you copy a styled font today.
      </p>
    </InfoPage>
  );
}
