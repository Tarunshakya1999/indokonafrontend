import React from "react";

const MindToMarketPage = () => {
  // आधुनिक कलर पैलेट और शैडो स्टाइल
  const COLORS = {
    primary: "#007bff", // प्राइमरी ब्लू
    secondary: "#6c757d",
    accent: "#ffc107", // हाइलाइट्स के लिए एक्सेंट गोल्ड/येलो
    light: "#f8f9fa",
    dark: "#212529",
    success: "#28a745",
  };

  const CARD_SHADOW = "0 0.5rem 1rem rgba(0, 0, 0, 0.05)"; // हल्का शैडो
  const BORDER_RADIUS = "0.75rem"; // गोल कोने

  const FeatureIcon = ({ iconClass, title, description }) => (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="card h-100 p-4 border-0"
        style={{ borderRadius: BORDER_RADIUS, boxShadow: CARD_SHADOW }}
      >
        <div className="card-body text-center">
          {/* आइकन के लिए प्लेसहोल्डर */}
          {/* FIX 1: className must use template literals (backticks) for dynamic strings */}
          <i
            className={`fa-3x mb-3 text-primary ${iconClass}`} 
            style={{ color: COLORS.primary }}
          >
            {/* The iconClass is an emoji/string here, so rendering it directly is fine. 
                Removing redundant `fa-` class since the content is a simple string/emoji. */}
            <span style={{ fontSize: "2.5em" }}>{iconClass}</span>
          </i>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0" style={{ scrollBehavior: "smooth" }}>
      {/* ======================================================
        1. Hero Section: दमदार बैकग्राउंड और CTA
        ======================================================
      */}
      <section
        className="py-6 py-lg-7 text-white text-center"
        style={{
          backgroundColor: COLORS.dark,
          backgroundImage: "linear-gradient(135deg, #0f4c75 0%, #367c9c 100%)", // ग्रेडिएंट
        }}
      >
        <div className="container py-5">
          <p className="lead text-uppercase fw-bold" style={{ letterSpacing: "2px", color: COLORS.accent }}>
            India’s First All-in-One AI SaaS
          </p>
          <h1 className="display-3 fw-bolder mb-4">
            Run Your Entire Business from <span style={{ color: COLORS.accent }}>WhatsApp</span> — AI-Powered, Platform-Driven
          </h1>
          <p className="lead w-75 mx-auto mb-5 opacity-75">
            MindToMarket™ integrates *Branding, Legal, Marketing, CRM, HR, and Growth Automation. Use simple **chat or voice commands* on mobile or web to run everything.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <button
              className="btn btn-warning btn-lg fw-bold px-4 py-2 text-dark border-0"
              style={{ borderRadius: "50px", boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)" }}
            >
              🚀 Free Live Demo
            </button>
            <button
              className="btn btn-outline-light btn-lg fw-bold px-4 py-2"
              style={{ borderRadius: "50px" }}
            >
              💬 WhatsApp AI Demo
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================
        2. Overview & Target Audience
        ======================================================
      */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">The Operating System for Modern Indian Business</h2>
          <p className="lead mx-auto w-75 text-muted">
            *MindToMarket™* is the smart platform that allows anyone—*startups, MSMEs, franchise owners, or freelancers—to execute complex branding, marketing, and operations *instantly. Just speak or type your request, and the system executes.
          </p>
          <div className="row mt-5">
            <div className="col-md-4">
              <h3 className="h4 fw-bold text-primary">Zero Code</h3>
              <p className="text-muted">No technical knowledge required. Pure command execution.</p>
            </div>
            <div className="col-md-4">
              <h3 className="h4 fw-bold text-primary">Mobile First</h3>
              <p className="text-muted">Run your entire business from your phone via WhatsApp.</p>
            </div>
            <div className="col-md-4">
              <h3 className="h4 fw-bold text-primary">All-in-One</h3>
              <p className="text-muted">Replaces 10+ expensive tools with a single, seamless platform.</p>
            </div>
          </div>
        </div>
      </section>

      <hr />
      
      {/* ======================================================
        3. Features: कार्ड लेआउट
        ======================================================
      */}
      <section className="py-5" style={{ backgroundColor: COLORS.light }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Core Features that Drive Growth 🚀</h2>
          <div className="row">
            {/* FeatureIcon कंपोनेंट का उपयोग */}
            <FeatureIcon
              iconClass="💬"
              title="WhatsApp-First AI Control"
              description="Execute all business commands—from creating ads to tracking payroll—via chat or voice."
            />
            <FeatureIcon
              iconClass="🎨"
              title="Instant AI Branding Kit"
              description="Generate a complete brand kit: name, logo, letterhead, and visiting card in a single click."
            />
            <FeatureIcon
              iconClass="⚖️" // Fixed the icon to a proper emoji for better rendering
              title="Legal & Registration Hub"
              description="Automated guidance and form generation for Trademark, GST, MSME, DPIIT Startup, and company registration."
            />
            <FeatureIcon
              iconClass="📈"
              title="Full Marketing SaaS"
              description="Automated WhatsApp, Email, Meta Ads, Funnels, and Auto-calls, all managed by AI."
            />
            <FeatureIcon
              iconClass="💼"
              title="Complete CRM + HR Suite"
              description="Seamless Lead-to-Billing pipeline and full employee automation: WFH tracker, docs, and payroll."
            />
            <FeatureIcon
              iconClass="🔒"
              title="Security First Architecture"
              description="Zero external uploads allowed. All content is generated on the platform to ensure data integrity and security."
            />
          </div>
        </div>
      </section>

      <hr />
      
      {/* ======================================================
        4. How It Works: विज़ुअल स्टेप्स
        ======================================================
      */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">The 5-Step MindToMarket™ Flow</h2>
          <div className="row">
            {/* FIX 2: Corrected col-lg-2-4 to col-lg-2 or another standard Bootstrap column to ensure correct layout,
                 assuming a 5-step process needs custom spacing or you intended col-lg-2 and it's a grid of 6 steps. 
                 Since there are 5 steps, I'll use col-lg-2 for each to fit them well, with the 5th item taking up a bit more space.
                 Using col-lg-2 to ensure 5 items fit well (2 columns are left empty or you'd use col-lg-5th-of-12 or a custom class).
                 For simplicity with standard Bootstrap, I'll use `col-lg-3` and center the row, or use `col-lg-2` and rely on default spacing.
                 I'll use `col-lg` for auto-sizing 5 columns within a centered row.
                 Changing `col-lg-2-4` to `col-12 col-md-4 col-lg-2` for better responsiveness/layout.
                 Since it's 5 items, using a custom layout with d-flex and justify-content-around for even spacing is better. */}
            {[
              {
                step: 1,
                title: "Register & Profile",
                desc: "Sign-up via WhatsApp or Web. Complete KYC and fill your detailed business profile.",
              },
              {
                step: 2,
                title: "Voice/Chat Command",
                desc: 'Simply type or speak your goal. E.g., "Create a 5-day email sequence for a new course."',
              },
              {
                step: 3,
                title: "AI Instant Execution",
                desc: "The system generates the full asset (email sequence, landing page, ad copy) instantly.",
              },
              {
                step: 4,
                title: "Publish & Confirm",
                desc: "Review the content on your phone and confirm publication with a single WhatsApp reply.",
              },
              {
                step: 5,
                title: "Track & Scale",
                desc: "Leads, conversions, sales, and employee activity are automatically tracked in the CRM.",
              },
            ].map((item) => (
              <div key={item.step} className="col-12 col-md-4 col-lg mb-4">
                <div className="text-center p-3">
                  <div
                    className="p-3 mb-3 d-inline-flex align-items-center justify-content-center fw-bold text-white h2"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: COLORS.primary,
                      boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                    }}
                  >
                    {item.step}
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />
      
      {/* ======================================================
        5. Detailed Modules: प्रीमियम लुक के लिए कार्ड्स
        ======================================================
      */}
      <section className="py-5" style={{ backgroundColor: COLORS.light }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Explore All Modules 🛠</h2>
          <div className="row g-4">
            {/* Branding & Product Creation */}
            <div className="col-md-6">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: BORDER_RADIUS,
                  boxShadow: CARD_SHADOW,
                  // FIX 3: Dynamic style property values must use template literals
                  borderLeft: `4px solid ${COLORS.primary}`, // रंगीन बॉर्डर
                }}
              >
                <h4 className="fw-bold text-primary mb-3">
                  <i className="fas fa-magic me-2"></i>Branding & Product Creation
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <span className="badge bg-primary me-2">✓</span>AI Brand Name & Multi-style Logo Generator
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-primary me-2">✓</span>Digital Visiting Card (vCard + QR)
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-primary me-2">✓</span>Auto Landing Page + Funnel Creator
                  </li>
                </ul>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="col-md-6">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: BORDER_RADIUS,
                  boxShadow: CARD_SHADOW,
                  // FIX 3: Dynamic style property values must use template literals
                  borderLeft: `4px solid ${COLORS.success}`,
                }}
              >
                <h4 className="fw-bold text-success mb-3">
                  <i className="fas fa-bullhorn me-2"></i>Marketing Automation
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <span className="badge bg-success me-2">✓</span>WhatsApp Broadcast & Advanced Chatbot Flows
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-success me-2">✓</span>Meta Ads Generator (Copy + Creatives)
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-success me-2">✓</span>Auto Webinar System + Short Video/Reel Creator
                  </li>
                </ul>
              </div>
            </div>
            
            {/* अन्य मॉड्यूल (CRM, HR, E-Learning) भी इसी आकर्षक कार्ड फॉर्मेट का पालन करेंगे। */}

          </div>
        </div>
      </section>

      <hr />

      {/* ======================================================
        6. WhatsApp Commands: simplicity और आकर्षण
        ======================================================
      */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Your Business, One Simple Chat</h2>
          <p className="lead mb-5">Examples of commands you can use on WhatsApp to manage your entire operation.</p>
          <div className="row justify-content-center">
            {[
              "Create a landing page for my new product",
              "Analyze this resume and suggest salary",
              "Schedule Diwali posts for all social channels",
            ].map((command, index) => (
              <div key={index} className="col-md-auto mb-3">
                <span
                  className="p-3 d-inline-block fw-bold"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <i className="fab fa-whatsapp me-2"></i>"{command}"
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 fs-5 fw-light">
            Every command receives **AI confirmation* before execution—direct on your WhatsApp chat.*
          </p>
        </div>
      </section>

      <hr />

      {/* ======================================================
        7. Final CTA: दमदार और निर्णायक
        ======================================================
      */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h2 className="display-4 fw-bolder">Ready to Automate Your Success?</h2>
          <p className="lead opacity-75 mb-4">Join the thousands of Indian businesses running smarter, not harder.</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <button
              className="btn btn-warning btn-lg fw-bold px-4 py-2 text-dark"
              style={{ borderRadius: "50px" }}
            >
              Get Early Access & Free Trial
            </button>
            <button
              className="btn btn-outline-light btn-lg fw-bold px-4 py-2"
              style={{ borderRadius: "50px" }}
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      <footer className="text-center py-3" style={{ backgroundColor: COLORS.dark, color: "rgba(255, 255, 255, 0.5)" }}>
        <small>© 2025 MindToMarket™ — Indokona Credit Bazar Pvt. Ltd. | <a href="#" className="text-white-50">Privacy</a> | <a href="#" className="text-white-50">Terms</a></small>
      </footer>
    </div>
  );
};

export default MindToMarketPage;