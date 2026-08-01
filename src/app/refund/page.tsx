import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy — Fontpro" };

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="July 31, 2026">
      <p className="text-[15px] leading-relaxed text-graphite/80">
        The Fontpro text generator is free to use, with no purchase required.
        At the time of writing, we do not sell anything. The policy below is
        a template for if and when we introduce optional paid features, such
        as an ad-free tier or an API plan.
      </p>

      <LegalSection heading="1. Subscriptions">
        <p>
          If you purchase a paid subscription, you may cancel at any time.
          Cancelling stops future billing but does not automatically refund
          the current billing period.
        </p>
        <p>
          You may request a full refund within 14 days of your first
          purchase if you are not satisfied. Contact{" "}
          <a
            href="mailto:hello@fontpro.app"
            className="underline decoration-graphite/30 underline-offset-2 hover:text-accent"
          >
            hello@fontpro.app
          </a>{" "}
          with your order details.
        </p>
      </LegalSection>

      <LegalSection heading="2. Usage-based products (e.g. API credits)">
        <p>
          Credits or usage that have already been consumed are not
          refundable. Unused, unexpired balances may be refunded within 14
          days of purchase.
        </p>
      </LegalSection>

      <LegalSection heading="3. How to request a refund">
        <p>
          Email{" "}
          <a
            href="mailto:hello@fontpro.app"
            className="underline decoration-graphite/30 underline-offset-2 hover:text-accent"
          >
            hello@fontpro.app
          </a>{" "}
          with the email address or order ID used for the purchase. Approved
          refunds are returned to the original payment method within 5–10
          business days.
        </p>
      </LegalSection>

      <LegalSection heading="4. Chargebacks">
        <p>
          Please contact us before filing a chargeback with your bank or
          card provider — we can usually resolve billing issues faster
          directly.
        </p>
      </LegalSection>

      <LegalSection heading="5. Changes to this policy">
        <p>
          If we introduce paid features, this page will be updated with the
          specific terms that apply to them.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
