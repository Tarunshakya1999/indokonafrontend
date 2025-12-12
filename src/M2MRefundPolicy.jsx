import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function M2MRefundPolicy() {
  return (
    <div className="refund-wrapper py-5">
      <div className="refund-card shadow-lg">
        <h1 className="title">💰 Refund Policy — Mind To Market™</h1>
        <p className="updated-text">Last Updated: 2025</p>

        <p>
          This Refund Policy applies to all subscriptions, modules, tools, and
          DFY services offered by <strong>Mind To Market™</strong>.
        </p>

        <h4 className="section-title">1. No Refund on Digital Services</h4>
        <p>
          All subscriptions (Starter, Growth, Enterprise) are
          <strong> non-refundable</strong>, because:
        </p>
        <ul className="styled-list">
          <li>AI tools and credits activate instantly</li>
          <li>Software modules unlock instantly</li>
          <li>
            Onboarding, support & server resources are consumed immediately
          </li>
          <li>Digital services cannot be returned</li>
        </ul>

        <h4 className="section-title">2. When Refunds Are Applicable</h4>
        <p>Refunds are issued only under these conditions:</p>

        <h6 className="sub-heading">A. Duplicate Payment</h6>
        <p>
          If a user is charged twice accidentally, refund is processed after
          verification.
        </p>

        <h6 className="sub-heading">B. Failed Payment</h6>
        <p>
          Money deducted but service not activated — refund issued automatically
          or manually.
        </p>

        <h6 className="sub-heading">C. Billing Gateway Error</h6>
        <p>
          If Razorpay/Stripe/Paytm causes a billing glitch, refund is issued
          after verification.
        </p>
        <p className="highlight-text">Refund timeline: 7–14 working days.</p>

        <h4 className="section-title">3. No Refund For DFY Services</h4>
        <p>Once these services start, refunds cannot be issued:</p>
        <ul className="styled-list">
          <li>
            Legal Registration (GST, Trademark, MSME, Pvt Ltd, FSSAI, etc.)
          </li>
          <li>Document Drafting</li>
          <li>Branding Assets</li>
          <li>Website/App Development</li>
          <li>Ad Campaign Setup</li>
          <li>CRM & WhatsApp API Setup</li>
          <li>AI Content Creation</li>
        </ul>

        <h4 className="section-title">4. Subscription Cancellation</h4>
        <p>
          Users may cancel subscription anytime. Cancellation stops next billing
          cycle, but no refund for current month/year.
        </p>

        <h4 className="section-title">5. Service Delivery Delay</h4>
        <ul className="styled-list">
          <li>Partner agencies</li>
          <li>Govt. portals</li>
          <li>Meta/WhatsApp API</li>
          <li>Hosting providers</li>
          <li>Third-party APIs</li>
        </ul>
        <p>These delays do not qualify for refunds.</p>

        <h4 className="section-title">6. Dispute Resolution</h4>
        <p>
          For billing issues email us:
          <br />
          <strong>📩 indokonaoutsourcing@gmail.com</strong>
        </p>
        <p>Response time: 24–48 hours.</p>
        <p>
          <strong>Legal jurisdiction:</strong> Faridabad, Haryana (India).
        </p>

        <footer className="footer">
          © 2025 Mind To Market™ — Indokona Credit Bazar Pvt. Ltd.
        </footer>
      </div>
      <style>{`/* Background */
.refund-wrapper {
  background: linear-gradient(135deg, #eef2ff, #f8f9ff);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* Card */
.refund-card {
  background: #ffffff;
  width: 100%;
  max-width: 900px;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #e6e9ff;
  transition: all 0.3s ease;
}

.refund-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.07);
}

/* Title */
.title {
  text-align: center;
  font-weight: 800;
  color: #3a4ed5;
  margin-bottom: 10px;
  font-size: 2rem;
}

.updated-text {
  text-align: center;
  color: #7481a3;
  margin-bottom: 30px;
}

/* Section title */
.section-title {
  margin-top: 40px;
  font-weight: 700;
  color: #3a4ed5;
  border-left: 5px solid #3a4ed5;
  padding-left: 10px;
}

/* Sub headings */
.sub-heading {
  margin-top: 20px;
  font-weight: 600;
  color: #1e2a48;
}

/* Lists */
.styled-list {
  list-style: none;
  margin: 15px 0;
  padding-left: 0;
}

.styled-list li {
  background: #f3f5ff;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-left: 4px solid #3a4ed5;
  transition: all 0.2s ease;
}

.styled-list li:hover {
  background: #e8ebff;
}

/* Highlight */
.highlight-text {
  font-weight: 600;
  color: #2a3bb3;
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #e2e6ff;
  color: #5c6b99;
  font-size: 0.9rem;
}
`}</style>
    </div>
  );
}
