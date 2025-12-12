import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DigitalStoreDisclaimer() {
  return (
    <div className="container py-5 disclaimer-page">
      <style>{`.disclaimer-page {
  animation: fadeIn 0.7s ease-in-out;
}

.gradient-card {
  background: linear-gradient(135deg, #ffffff 0%, #f3f6ff 100%);
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

.gradient-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.12);
}

.title-text {
  font-size: 2rem;
  background: linear-gradient(90deg, #007bff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro-text {
  font-size: 1.1rem;
  font-weight: 500;
}

.section-box {
  background: #ffffff;
  border-left: 6px solid #0d6efd;
  transition: all 0.25s ease;
}

.section-box:hover {
  background: #f8faff;
  transform: translateX(5px);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
}

.section-title {
  color: #0d6efd;
}

.contact-box {
  background: #eef4ff;
  border-left: 6px solid #6f42c1;
  transition: all 0.25s ease;
}

.contact-box:hover {
  background: #e4eaff;
  transform: translateX(5px);
}

.fade-in {
  opacity: 0;
  animation: fadeInAnimation 0.8s forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`}</style>
      <div className="card shadow-lg p-4 border-0 rounded-4 fade-in">
        <h1 className="text-center fw-bold mb-3 text-primary">
          📕 Disclaimer (Meta-Approved)
        </h1>
        <p className="text-center text-muted">Last Updated: December 2025</p>

        <p className="mt-4">
          This disclaimer is written according to Facebook/Instagram (Meta) Ads
          Policy standards.
        </p>

        <div className="mt-4">
          <h4 className="fw-bold">1. No Guaranteed Income</h4>
          <p>
            Indokona Digital Store does not guarantee any specific income or
            financial results. Earnings depend entirely on:
          </p>
          <ul>
            <li>Your skills</li>
            <li>Marketing efforts</li>
            <li>Sales performance</li>
            <li>User behavior</li>
          </ul>
          <p>
            We only provide tools, training, and reseller systems — results vary
            for each person.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">2. No Financial or Investment Advice</h4>
          <p>
            Nothing on our website, dashboard, ads, or messages should be
            considered:
          </p>
          <ul>
            <li>Financial advice</li>
            <li>Investment advice</li>
            <li>Guarantee of business success</li>
          </ul>
          <p>All decisions are made by the user.</p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">3. Accuracy of Information</h4>
          <p>
            We try to publish accurate information, but the following may change
            anytime without notice:
          </p>
          <ul>
            <li>Digital product availability</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">4. Third-Party Products & Services</h4>
          <p>
            Some products depend on third-party platforms. We are not
            responsible for:
          </p>
          <ul>
            <li>Their policies</li>
            <li>Their downtime</li>
            <li>Their pricing changes</li>
            <li>Their service limitations</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">5. Affiliate & Reseller Earnings</h4>
          <p>Reseller earnings are based on:</p>
          <ul>
            <li>Sales made</li>
            <li>Commissions applicable</li>
            <li>Plan benefits chosen</li>
          </ul>
          <p>No earning amount is guaranteed.</p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">6. Legal Compliance</h4>
          <p>Users must follow:</p>
          <ul>
            <li>Indian IT Act</li>
            <li>Digital Goods Compliance</li>
            <li>Meta Ads Policies</li>
            <li>Consumer Protection Rules</li>
          </ul>
          <p>Any misuse may lead to account suspension.</p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">7. Liability Limitation</h4>
          <p>Indokona is not liable for:</p>
          <ul>
            <li>Loss of profits</li>
            <li>Business losses</li>
            <li>Wrong marketing strategies</li>
            <li>Account misuse</li>
            <li>Third-party service failures</li>
          </ul>
          <p>Use the platform at your own responsibility.</p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">8. Contact for Clarification</h4>
          <p>For legal or policy-related questions:</p>
          <p>📧 indokonaoutsourcing@gmail.com</p>
          <p>📞 +91 96259 95155</p>
        </div>
      </div>
    </div>
  );
}
