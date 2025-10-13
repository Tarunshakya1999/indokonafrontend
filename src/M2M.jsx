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
    danger: "#dc3545", // Meta Policy के लिए लाल
    info: "#17a2b8",
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
          <i
            // FIX: className uses template literals
            className={`fa-3x mb-3 text-primary ${iconClass}`} 
            style={{ color: COLORS.primary }}
          >
            <span style={{ fontSize: "2.5em" }}>{iconClass}</span>
          </i>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );

  const ModuleCard = ({ icon, title, items, color }) => (
    <div className="col-lg-6 mb-4">
      <div
        className="p-4 h-100"
        style={{
          backgroundColor: "#fff",
          borderRadius: BORDER_RADIUS,
          boxShadow: CARD_SHADOW,
          borderLeft: `4px solid ${color}`, // Dynamic border color
        }}
      >
        <h4 className="fw-bold mb-3" style={{ color: color }}>
          <i className={`fas ${icon} me-2`}></i>{title}
        </h4>
        <ul className="list-unstyled mb-0">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="badge me-2" style={{ backgroundColor: color }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
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
            MindToMarket™ integrates *Branding, Legal, Marketing, CRM, HR, and FinTech Automation*. Use simple **chat or voice commands* on mobile or web to run everything.
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

      {/* --- */}

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
        3. Features: कार्ड लेआउट (Additional Feature Added)
        ======================================================
      */}
      <section className="py-5" style={{ backgroundColor: COLORS.light }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Core Features that Drive Growth 🚀</h2>
          <div className="row">
            {/* Existing Features */}
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
              iconClass="⚖️" 
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
            {/* NEW FEATURE: FinTech */}
            <FeatureIcon
              iconClass="💰"
              title="FinTech & Expense Tracking"
              description="Automatic GST invoice generation, expense logging, and P&L statements directly via WhatsApp command."
            />
            <FeatureIcon
              iconClass="🔒"
              title="Security First Architecture"
              description="Zero external uploads allowed. All content is generated on the platform to ensure data integrity and security."
            />
            {/* NEW FEATURE: Compliance */}
            <FeatureIcon
              iconClass="🛡️"
              title="Meta Policy & Data Compliance"
              description="Built-in tools ensure all WhatsApp communications adhere strictly to Meta's Business and Commerce Policies."
            />
          </div>
        </div>
      </section>

      <hr />
      
      {/* ======================================================
        4. Detailed Modules: प्रीमियम लुक के लिए कार्ड्स (New Module Cards Added)
        ======================================================
      */}
      <section className="py-5" style={{ backgroundColor: COLORS.light }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Explore All Modules 🛠</h2>
          <div className="row g-4">
            {/* 1. Branding & Product Creation */}
            <ModuleCard
              icon="fa-magic"
              title="Branding & Product Creation"
              color={COLORS.primary}
              items={[
                "AI Brand Name & Multi-style Logo Generator",
                "Digital Visiting Card (vCard + QR)",
                "Auto Landing Page + Funnel Creator",
                "Automated Pitch Deck Generation",
              ]}
            />

            {/* 2. Marketing Automation */}
            <ModuleCard
              icon="fa-bullhorn"
              title="Marketing Automation"
              color={COLORS.success}
              items={[
                "WhatsApp Broadcast & Advanced Chatbot Flows",
                "Meta Ads Generator (Copy + Creatives)",
                "Auto Webinar System + Short Video/Reel Creator",
                "SEO Optimized Blog Post Writer",
              ]}
            />
            
            {/* NEW MODULE 3: CRM & Sales Pipeline */}
            <ModuleCard
              icon="fa-headset"
              title="CRM & Sales Pipeline"
              color={COLORS.info}
              items={[
                "Lead Auto-Capture from Ads, Forms, & Chat",
                "Lead-to-Billing Pipeline Tracking on Mobile",
                "Automated Follow-ups & Reminders via WhatsApp",
                "Sales Team Performance Dashboard",
              ]}
            />

            {/* NEW MODULE 4: HR & Operations */}
            <ModuleCard
              icon="fa-users-gear"
              title="HR & Operations"
              color={COLORS.secondary}
              items={[
                "Employee Onboarding & Document Management",
                "Automated Attendance & WFH Tracker",
                "Instant Salary Slip & Payroll Generation",
                "Recruitment Assistant (Resume Analysis)",
              ]}
            />
            
            {/* NEW MODULE 5: FinTech & Invoicing */}
             <ModuleCard
              icon="fa-indian-rupee-sign"
              title="FinTech & Invoicing"
              color={COLORS.accent}
              items={[
                "Automatic GST & Non-GST Invoice Generation",
                "P&L Statement & Expense Logging via Chat",
                "Payment Gateway Integration & Reconciliation",
                "Tax Compliance Document Prep",
              ]}
            />

             {/* NEW MODULE 6: Compliance & Policy (Meta Policy Focus) */}
             <ModuleCard
              icon="fa-shield-halved"
              title="Compliance & Policy"
              color={COLORS.danger}
              items={[
                "Guaranteed Meta Business Policy Adherence",
                "GDPR, CCPA & Indian Data Privacy Standards",
                "Zero-Upload Security Architecture for Data Integrity",
                "Automated Consent and Opt-out Management",
              ]}
            />

          </div>
        </div>
      </section>

      <hr />

      {/* ======================================================
        6. Meta Policy Assurance Section (New Section)
        ======================================================
      */}
      <section className="py-5" style={{ backgroundColor: COLORS.danger, color: COLORS.light }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">🛡️ Meta Policy Assurance: Safe & Secure</h2>
          <p className="lead mx-auto w-75 mb-5">
            Operating your business on WhatsApp requires strict adherence to **Meta's Business and Commerce Policies**. Our platform is engineered to keep you **100% compliant**, ensuring your account is never flagged or banned.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold"><i className="fas fa-check-circle me-2"></i>Automated Vetting</h5>
              <p className="small">AI automatically filters out content that violates Meta's guidelines before broadcast.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold"><i className="fas fa-check-circle me-2"></i>Opt-in Management</h5>
              <p className="small">Mandatory, trackable opt-in processes for every lead, maintaining user consent records.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold"><i className="fas fa-check-circle me-2"></i>Approved Templates</h5>
              <p className="small">Use only Meta-approved, high-quality message templates for all automated outreach.</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* ======================================================
        7. WhatsApp Commands: simplicity और आकर्षण
        ======================================================
      */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Your Business, One Simple Chat</h2>
          <p className="lead mb-5">Examples of commands you can use on WhatsApp to manage your entire operation.</p>
          <div className="row justify-content-center">
            {[
              "Create a landing page for my new course",
              "Analyze this resume and suggest salary",
              "Schedule Diwali posts for all social channels",
              "Generate GST invoice for Lead 401", // NEW COMMAND
              "Send payroll slips to all WFH employees", // NEW COMMAND
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
        8. Final CTA: दमदार और निर्णायक
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