import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service — Fontpro" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 31, 2026">
      <p className="text-[15px] leading-relaxed text-graphite/80">
        These Terms govern your use of Fontpro (the &ldquo;Service&rdquo;), a
        free browser-based tool for converting text into stylized Unicode
        characters. By using the Service you agree to these Terms.
      </p>

      <LegalSection heading="1. The Service">
        <p>
          Fontpro runs entirely in your browser. There is no account to
          create and no sign-up required. Any text you type is converted
          locally on your device and is never transmitted to or stored on our
          servers.
        </p>
      </LegalSection>

      <LegalSection heading="2. Acceptable use">
        <p>You agree not to use Fontpro to:</p>
        <ul className="list-disc pl-5">
          <li>Harass, impersonate, or defame another person;</li>
          <li>
            Generate content that is unlawful, hateful, or violates the terms
            of the platform you paste it into (Instagram, TikTok, Discord,
            etc.);
          </li>
          <li>Attempt to disrupt or overload the Service.</li>
        </ul>
        <p>
          Some platforms may flag, block, or refuse to render stylized
          Unicode text — that is outside our control.
        </p>
      </LegalSection>

      <LegalSection heading="3. Your content">
        <p>
          You retain all rights to the text you type. We do not claim
          ownership of it, and — because it never leaves your browser — we
          have no access to it either.
        </p>
      </LegalSection>

      <LegalSection heading="4. Intellectual property">
        <p>
          The Fontpro name, logo, design, and underlying code are owned by
          Fontpro and may not be copied or redistributed without
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="5. Rendering disclaimer">
        <p>
          Not every Unicode style is supported by every font, app, or
          operating system. Styles we know are commonly unsupported are
          flagged in the app, but we cannot guarantee correct rendering
          everywhere.
        </p>
      </LegalSection>

      <LegalSection heading="6. Disclaimer of warranty & limitation of liability">
        <p>
          The Service is provided &ldquo;as is&rdquo; without warranties of
          any kind. To the maximum extent permitted by law, Fontpro is
          not liable for any damages arising from your use of the Service.
        </p>
      </LegalSection>

      <LegalSection heading="7. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Continued use of the
          Service after a change constitutes acceptance of the new Terms.
        </p>
      </LegalSection>

      <LegalSection heading="8. Governing law">
        <p>These Terms are governed by the laws of Switzerland.</p>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <p>
          Questions about these Terms? Contact{" "}
          <a
            href="mailto:hello@fontpro.app"
            className="underline decoration-graphite/30 underline-offset-2 hover:text-accent"
          >
            hello@fontpro.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
