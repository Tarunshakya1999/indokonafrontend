import React from "react";
import "./PrivacyPolicy.css"; // Custom CSS file

const SuitePrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <style>{`/* Custom Fonts/Colors - Adjust these to match your brand */
:root {
    --indokona-primary: #007bff; /* A clean blue */
    --indokona-secondary: #6c757d;
    --indokona-bg-light: #f8f9fa;
    --indokona-text-dark: #343a40;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--indokona-bg-light);
    color: var(--indokona-text-dark);
}

.privacy-policy-container {
    max-width: 1200px; /* Wider container for a modern look */
    margin: 0 auto;
    padding: 0;
}

/* Header Styling */
.policy-header {
    background-color: var(--indokona-primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.policy-header h1 {
    font-size: 3.5rem;
}

.policy-last-updated {
    font-style: italic;
    opacity: 0.8;
}

/* Main Body Styling */
.policy-body {
    padding: 2rem;
}

.policy-title {
    color: var(--indokona-primary);
    border-bottom: 3px solid #ced4da;
    padding-bottom: 10px;
    margin-bottom: 30px !important;
    font-weight: 700;
}

.intro-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--indokona-secondary);
}

/* Card Styles for Information Collected */
.policy-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    min-height: 100%;
}

.policy-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.policy-card .card-title {
    color: var(--indokona-primary);
    font-weight: 600;
    margin-bottom: 15px;
    border-bottom: 1px dashed #e9ecef;
    padding-bottom: 10px;
}

.policy-list li {
    padding: 5px 0;
    font-size: 0.95rem;
}

.warning-card {
    border: 1px solid #ffc107; /* Yellow border for payment info */
    background-color: #fffbe6;
}

/* Usage Items (Section 2) */
.usage-item {
    background-color: #e6f3ff; /* Light blue background */
    color: var(--indokona-text-dark);
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 500;
    border-left: 5px solid var(--indokona-primary);
}

/* Detailed Cards (Section 3, 4, 5, 6) */
.policy-detail-card {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    height: 100%;
}

.detail-title {
    color: var(--indokona-primary);
    margin-bottom: 15px;
    font-weight: 600;
}

.protection-card {
    border: 1px solid #28a745; /* Green border for protection */
    background-color: #f1fcf4;
}

.rights-card .badge {
    font-size: 0.9rem;
    background-color: #007bff !important;
}

/* Footer */
.policy-footer {
    background-color: var(--indokona-text-dark);
    color: white;
}`}</style>
      {/* Header Section */}
      <header className="policy-header text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">🔐 PRIVACY POLICY</h1>
          <p className="lead text-muted">Indokona Suite</p>
          <p className="policy-last-updated">Last Updated: December 2025</p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="container policy-body my-5">
        <p className="intro-text mb-5">
          Indokona Suite (“Platform”), operated by Indokona Credit Bazar Pvt.
          Ltd., is an all-in-one verified business operating system for
          startups, agencies, creators, and enterprises across India. We are
          committed to protecting your privacy and ensuring transparent data
          practices.
        </p>

        {/* Section 1: Information We Collect */}
        <section className="policy-section mb-5">
          <h2 className="policy-title mb-4">1. Information We Collect</h2>
          <div className="row">
            {/* A. User & Business Information */}
            <div className="col-lg-4 mb-4">
              <div className="policy-card">
                <h5 className="card-title">A. User & Business Information</h5>
                <ul className="list-unstyled policy-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Full Name
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Email & Mobile Number
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Business Name & Address
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    GST, PAN, Aadhaar (for KYC verification)
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Website/Social Links
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Business Industry & Category
                  </li>
                </ul>
              </div>
            </div>

            {/* B. KYC & Verification Data */}
            <div className="col-lg-4 mb-4">
              <div className="policy-card">
                <h5 className="card-title">B. KYC & Verification Data</h5>
                <ul className="list-unstyled policy-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Government ID details
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Auto-verification results (govt-approved APIs)
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Uploaded documents (PAN/Aadhaar/GST)
                  </li>
                </ul>
              </div>
            </div>

            {/* C. Platform Usage Data */}
            <div className="col-lg-4 mb-4">
              <div className="policy-card">
                <h5 className="card-title">C. Platform Usage Data</h5>
                <ul className="list-unstyled policy-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    IP address, device information
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Login logs & CRM activity
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Posts, ads, proposals created
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    AI-generated content logs
                  </li>
                </ul>
              </div>
            </div>

            {/* D. Payment Information */}
            <div className="col-lg-12">
              <div className="policy-card warning-card">
                <h5 className="card-title">D. Payment Information</h5>
                <ul className="list-unstyled policy-list">
                  <li>
                    <i className="bi bi-currency-dollar text-warning me-2"></i>
                    Billing details & Subscription plan
                  </li>
                  <li>
                    <i className="bi bi-currency-dollar text-warning me-2"></i>
                    Payment gateway records (Razorpay/Stripe)
                  </li>
                </ul>
                <blockquote className="blockquote mt-3">
                  <p className="mb-0 text-danger fw-bold">
                    <i className="bi bi-shield-lock-fill me-2"></i>We do NOT
                    store card details.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="policy-section mb-5">
          <h2 className="policy-title mb-4">2. How We Use Your Information</h2>
          <div className="row">
            {[
              "Account creation & verified onboarding",
              "KYC authentication",
              "Access to CRM, ads automation, AI builder",
              "Generate proposals, pitch decks, documents",
              "Improve system accuracy & analytics",
              "Prevent fraud and content misuse",
              "Deliver customer support and notifications",
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-3">
                <div className="usage-item">
                  <i className="bi bi-arrow-right-circle-fill me-2"></i>
                  {item}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 alert alert-info fw-bold text-center">
            <i className="bi bi-megaphone-fill me-2"></i>We **never sell** your
            data to any third party.
          </p>
        </section>

        {/* Section 3, 4, 5, 6: Detailed Points */}
        <div className="row">
          {/* 3. Cookies */}
          <div className="col-lg-6 mb-4">
            <div className="policy-detail-card">
              <h4 className="detail-title">
                <i className="bi bi-cookie me-2"></i>3. Cookies & Tracking
              </h4>
              <p>We use cookies for:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">Secure login sessions</li>
                <li className="list-group-item">Dashboard personalization</li>
                <li className="list-group-item">
                  Analytics & platform performance
                </li>
              </ul>
              <small className="text-muted">
                Users may disable cookies but some features may stop working.
              </small>
            </div>
          </div>

          {/* 4. Sharing of Data */}
          <div className="col-lg-6 mb-4">
            <div className="policy-detail-card">
              <h4 className="detail-title">
                <i className="bi bi-share-fill me-2"></i>4. Sharing of Data
              </h4>
              <p>Data is shared **only** with:</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">Payment gateways</li>
                <li className="list-group-item">Government KYC APIs</li>
                <li className="list-group-item">Cloud hosting providers</li>
                <li className="list-group-item">WhatsApp API (optional)</li>
              </ul>
              <small className="text-success fw-bold">
                All partners obey strict confidentiality agreements.
              </small>
            </div>
          </div>

          {/* 5. Data Protection Measures */}
          <div className="col-lg-6 mb-4">
            <div className="policy-detail-card protection-card">
              <h4 className="detail-title">
                <i className="bi bi-incognito me-2"></i>5. Data Protection
                Measures
              </h4>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-lock-fill me-2"></i>End-to-End Encryption
                  (E2EE)
                </li>
                <li>
                  <i className="bi bi-lock-fill me-2"></i>Encrypted document
                  storage
                </li>
                <li>
                  <i className="bi bi-lock-fill me-2"></i>PCI-DSS compliant
                  payment processing
                </li>
                <li>
                  <i className="bi bi-lock-fill me-2"></i>Regular audits and
                  backups
                </li>
                <li>
                  <i className="bi bi-lock-fill me-2"></i>Access controls for
                  admin users
                </li>
              </ul>
            </div>
          </div>

          {/* 6. Your Rights */}
          <div className="col-lg-6 mb-4">
            <div className="policy-detail-card rights-card">
              <h4 className="detail-title">
                <i className="bi bi-person-check-fill me-2"></i>6. Your Rights
              </h4>
              <p>You may request:</p>
              <div className="d-flex flex-wrap">
                {[
                  "Access to your data",
                  "Correction",
                  "Deletion",
                  "Usage restrictions",
                  "Account termination",
                ].map((right, index) => (
                  <span key={index} className="badge bg-primary me-2 mb-2 p-2">
                    ✓ {right}
                  </span>
                ))}
              </div>
              <p className="mt-3">
                Email:{" "}
                <a
                  href="mailto:indokonaoutsourcing@gmail.com"
                  className="text-decoration-none fw-bold"
                >
                  indokonaoutsourcing@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section 7, 8, 9: Footer Details */}
        <section className="policy-section policy-footer-details mt-5 p-4 rounded bg-light">
          <h3 className="text-center mb-4 text-primary">
            Other Important Information
          </h3>
          <div className="row">
            {/* 7. Data Retention */}
            <div className="col-md-4 mb-3">
              <p className="fw-bold">
                <i className="bi bi-clock-history me-2"></i>7. Data Retention
              </p>
              <ul>
                <li>KYC data retained till account is active</li>
                <li>CRM & project data retained unless manually deleted</li>
                <li>Payment records retained for compliance</li>
              </ul>
            </div>

            {/* 8. Children’s Privacy */}
            <div className="col-md-4 mb-3">
              <p className="fw-bold">
                <i className="bi bi-exclamation-octagon-fill me-2"></i>8.
                Children’s Privacy
              </p>
              <p className="text-danger fw-bold">
                This platform is strictly for 18+ verified users only.
              </p>
            </div>

            {/* 9. Policy Updates */}
            <div className="col-md-4 mb-3">
              <p className="fw-bold">
                <i className="bi bi-arrow-repeat me-2"></i>9. Policy Updates
              </p>
              <p>This policy may be updated anytime.</p>
              <p className="text-info fst-italic">
                Continued use of the platform means you accept the changes.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 policy-footer mt-5">
        <p className="mb-0">
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.
        </p>
      </footer>
    </div>
  );
};

export default SuitePrivacyPolicy;
