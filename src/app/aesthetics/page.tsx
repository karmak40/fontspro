import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Aesthetics — Fontpro" };

export default function AestheticsPage() {
  return (
    <InfoPage eyebrow="Coming soon" title="Aesthetic text presets">
      <p>
        Vaporwave spacing, symbol borders, and other aesthetic text presets
        are planned for a future update.
      </p>
    </InfoPage>
  );
}
