import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function M2MRefundPolicy() {
  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <div className="bg-white p-5 rounded shadow-lg border">
        <h1 className="text-center mb-4 fw-bold text-primary">
          💰 Refund Policy — Mind To Market™
        </h1>
        <p className="text-center text-muted">Last Updated: 2025</p>

        <p className="mt-4">
          This Refund Policy applies to all subscriptions, modules, tools, and
          DFY services offered by <strong>Mind To Market™</strong>.
        </p>

        <h4 className="mt-5 fw-bold text-primary">1. No Refund on Digital Services</h4>
        <p>
          All subscriptions (Starter, Growth, Enterprise) are
          <strong> non-refundable</strong>, because:
        </p>
        <ul>
          <li>AI tools and credits activate instantly</li>
          <li>Software modules unlock instantly</li>
          <li>Onboarding, support & server resources are consumed immediately</li>
          <li>Digital services cannot be returned</li>
        </ul>

        <h4 className="mt-5 fw-bold text-primary">2. When Refunds Are Applicable</h4>
        <p>Refunds are issued only under these conditions:</p>
        <h6 className="fw-semibold text-dark">A. Duplicate Payment</h6>
        <p>If a user is charged twice accidentally, refund is processed after verification.</p>
        <h6 className="fw-semibold text-dark">B. Failed Payment</h6>
        <p>Money deducted but service not activated — refund issued automatically or manually.</p>
        <h6 className="fw-semibold text-dark">C. Billing Gateway Error</h6>
        <p>
          If Razorpay/Stripe/Paytm causes a billing glitch, refund is issued after
          100% verification.
        </p>
        <p className="fw-semibold">Refund timeline: 7–14 working days.</p>

        <h4 className="mt-5 fw-bold text-primary">3. No Refund For DFY Services</h4>
        <p>Once these services start, refunds cannot be issued:</p>
        <ul>
          <li>Legal Registration (GST, Trademark, MSME, Pvt Ltd, FSSAI, etc.)</li>
          <li>Document Drafting</li>
          <li>Branding Assets (Logos, Posters, PDFs)</li>
          <li>Website/App Development</li>
          <li>Ad Campaign Setup</li>
          <li>CRM & WhatsApp API Setup</li>
          <li>AI Content Creation</li>
        </ul>
        <p>Because work begins instantly.</p>

        <h4 className="mt-5 fw-bold text-primary">4. Subscription Cancellation</h4>
        <p>
          Users may cancel subscription anytime. Cancellation stops the next
          cycle billing, but no refund for the current month/year.
        </p>

        <h4 className="mt-5 fw-bold text-primary">5. Service Delivery Delay</h4>
        <p>Delays caused by:</p>
        <ul>
          <li>Partner agencies</li>
          <li>Govt. portals (MCA, GST, Trademark)</li>
          <li>Meta/WhatsApp API</li>
          <li>Hosting provider</li>
          <li>Third-party API</li>
        </ul>
        <p>do not qualify for refunds.</p>

        <h4 className="mt-5 fw-bold text-primary">6. Dispute Resolution</h4>
        <p>
          Any billing-related issue must be emailed to:
          <br />
          <strong>📩 indokonaoutsourcing@gmail.com</strong>
        </p>
        <p>We respond within 24–48 hours.</p>
        <p>
          <strong>Legal jurisdiction:</strong> Faridabad, Haryana (India).
        </p>

        <footer className="text-center mt-5 pt-4 border-top">
          © 2025 Mind To Market™ — Indokona Credit Bazar Pvt. Ltd. All Rights
          Reserved.
        </footer>
      </div>
    </div>
  );
}
