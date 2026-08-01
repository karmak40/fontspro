import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy — Fontpro" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 31, 2026">
      <p className="text-[15px] leading-relaxed text-graphite/80">
        Fontpro is designed so there is very little of your data for us to
        talk about. This page explains exactly what that means.
      </p>

      <LegalSection heading="1. The text you type">
        <p>
          The text you enter into the generator is converted entirely in your
          browser using JavaScript. It is never sent to our servers, logged,
          or stored anywhere outside your device.
        </p>
      </LegalSection>

      <LegalSection heading="2. Accounts">
        <p>
          Fontpro does not require an account, email address, or password. We
          do not collect any information to identify you personally.
        </p>
      </LegalSection>

      <LegalSection heading="3. Local storage">
        <p>
          Preferences such as favorited styles may be saved using your
          browser&rsquo;s local storage. This data stays on your device,
          never reaches us, and is removed if you clear your browser data.
        </p>
      </LegalSection>

      <LegalSection heading="4. Analytics & advertising">
        <p>
          We may use privacy-conscious analytics to understand aggregate
          traffic (e.g. which pages are visited), and we may show ads served
          by third-party networks such as Google AdSense. These networks can
          set cookies and use device information for ad personalization,
          under their own privacy policies — for example,{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline decoration-graphite/30 underline-offset-2 hover:text-accent"
          >
            Google&rsquo;s Privacy Policy
          </a>
          . You can opt out of personalized advertising through your
          browser or device settings.
        </p>
      </LegalSection>

      <LegalSection heading="5. Children's privacy">
        <p>
          Fontpro is not directed at children under 13, and we do not
          knowingly collect personal information from anyone, regardless of
          age.
        </p>
      </LegalSection>

      <LegalSection heading="6. Changes to this policy">
        <p>
          If this policy changes, we&rsquo;ll update the date at the top of
          this page.
        </p>
      </LegalSection>

      <LegalSection heading="7. Contact">
        <p>
          Questions about this policy? Contact{" "}
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
