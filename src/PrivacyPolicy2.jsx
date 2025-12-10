import React from "react";

// Assuming you have imported Bootstrap CSS in your main app file

export default function PrivacyPolicy2() {
  return (
    <>
   
    <div className="container my-5 policy-container">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-info">
          🔒 Privacy Policy
        </h1>
        <p className="lead text-muted">
          Indokona Tech Solutions | Last Updated: <span className="badge bg-secondary">2025</span>
        </p>
        <hr />
        <p className="alert alert-info border-info">
          At Indokona Tech Solutions, we are committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </header>

      {/* Main Policy Sections */}
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* 1. Information We Collect */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              1. Information We Collect
            </div>
            <div className="card-body">
              <p>We collect information that identifies, relates to, describes, or is capable of being associated with you ("Personal Data").</p>
              
              <h6 className="fw-bold mt-3">A. Personal Data You Disclose to Us</h6>
              <p>This includes information you voluntarily provide when contacting us, expressing interest in our services (Software Development, SEO, etc.), or participating in activities on the website.</p>
              <ul>
                <li>Contact Data: Name, email address, phone number, company name.</li>
                <li>Project Data: Details about your project requirements, goals, budget, and scope.</li>
                <li>Financial Data: Payment information (used by our third-party payment processors).</li>
              </ul>
              
              <h6 className="fw-bold mt-3">B. Automatically Collected Data</h6>
              <p>When you visit our website, we automatically collect certain non-personal information.</p>
              <ul>
                <li>Usage Data: IP address, browser type, device information, operating system, referring URLs, and time spent on pages.</li>
                <li>Tracking Technologies: We use Cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
              </ul>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              2. How We Use Your Information
            </div>
            <div className="card-body">
              <p>We use the information collected for various business purposes, including:</p>
              <ul>
                <li>Service Provision: To deliver and manage the development, design, and marketing services you request.</li>
                <li>Communication: To respond to your inquiries, send administrative updates, and provide customer support.</li>
                <li>Marketing: To send you promotional information about our services (you can opt-out at any time).</li>
                <li>Security & Fraud Prevention: To maintain the security of our website and services.</li>
                <li>Analytics: To analyze usage trends and measure the effectiveness of our content.</li>
              </ul>
            </div>
          </section>

          {/* 3. Sharing Your Information */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              3. Sharing Your Information
            </div>
            <div className="card-body">
              <p>We only share your information in the following limited circumstances:</p>
              <ul>
                <li>Vendors and Service Providers: We may share data with third-party vendors (e.g., hosting providers, payment processors, email marketing tools) who perform services for us or on our behalf.</li>
                <li>Legal Requirements: When legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li>Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li>With Your Consent: We may disclose your personal data for any other purpose with your consent.</li>
              </ul>
            </div>
          </section>

          {/* 4. Data Retention */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              4. Data Retention
            </div>
            <div className="card-body">
              <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            </div>
          </section>
          
          {/* 5. Security Measures */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              5. Security Measures
            </div>
            <div className="card-body">
              <p>We implement a variety of **security measures** designed to protect the security of your Personal Data. However, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the complete security of data transmitted over the Internet.</p>
            </div>
          </section>
          
          {/* 6. Your Privacy Rights */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              6. Your Privacy Rights
            </div>
            <div className="card-body">
              <p>Depending on your location, you may have the following rights concerning your data:</p>
              <ul>
                <li>Right to Access: The right to request copies of your Personal Data.</li>
                <li>Right to Correction: The right to request that we correct any information you believe is inaccurate.</li>
                <li>Right to Deletion: The right to request that we erase your Personal Data, under certain conditions.</li>
                <li>Opt-out of Marketing: You can always opt-out of our marketing communications by following the unsubscribe instructions in those emails.</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us using the details below.</p>
            </div>
          </section>
          
          {/* 7. Changes to This Policy */}
          <section className="card shadow-sm mb-4">
            <div className="card-header bg-light fw-bold h5 text-info">
              7. Changes to This Policy
            </div>
            <div className="card-body">
              <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this policy frequently.</p>
            </div>
          </section>

          {/* 8. Contact Information (Highlight) */}
          <section className="card shadow-lg bg-info text-white mt-5">
            <div className="card-body text-center">
              <h3 className="card-title mb-3">8. Contact Us 📧</h3>
              <p className="card-text">
                If you have questions or comments about this Privacy Policy, you may contact us at:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="fw-bold">Email:</span> <a href="mailto:indokonaoutsourcing@gmail.com" className="text-warning">indokonaoutsourcing@gmail.com</a>
                </li>
                <li>
                  <span className="fw-bold">Website:</span> <a href="http://www.indokona.com" target="_blank" rel="noopener noreferrer" className="text-warning">www.indokona.com</a>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>

    <style>{`/* Custom Styles for Privacy Policy */

.policy-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* Custom styles for the card headers */
.card-header {
    /* Use a color related to info/blue for confidentiality */
    background-color: #f1f1f1 !important; 
    border-bottom: 2px solid var(--bs-info); /* Blue border */
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
}

/* Style for the initial alert box */
.alert-info {
    border-left: 5px solid var(--bs-info); /* Use a solid blue line */
    background-color: #e9f7fe; 
    padding: 15px;
}

/* General list styling */
.card-body ul {
    padding-left: 20px;
    margin-bottom: 1rem;
}

/* Make list items look clean */
.list-group-item {
    border: none;
    padding: 0.5rem 0;
}`}</style>
    </>
  );
}