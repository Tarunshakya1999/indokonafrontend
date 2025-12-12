import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Terms & Conditions — Indokona Digital Store
// Component Name: DigitalStoreDisclaimer (Updated UI)

const sections = [
  {
    id: "intro",
    title: "Terms & Conditions — Indokona Digital Store",
    content: `Last Updated: December 2025

By accessing and using Indokona Digital Store ("Platform"), you agree to follow these Terms and Conditions.
If you disagree with any part, please do not use our services.`,
  },
  {
    id: "eligibility",
    title: "1. Eligibility",
    content: `• You must be 18+ years to use the platform.
• You must provide accurate personal and business details.
• Using false identity or fake documents is strictly prohibited.`,
  },
  {
    id: "services",
    title: "2. Nature of Services",
    content: `Indokona Digital Store provides:
• Digital products
• Software subscriptions
• Tools for resellers
• Reseller dashboard and subdomain facility
• Branding kits & training
• Instant licenses and activations

All services are digital — no physical items are shipped.`,
  },
  {
    id: "account",
    title: "3. Account & Dashboard Usage",
    content: `Users and resellers agree to:
• Keep login credentials confidential
• Not misuse dashboard or access areas
• Not resell products outside permitted rights
• Use the platform ethically and legally
• Not perform chargebacks without valid reasons`,
  },
  {
    id: "payments",
    title: "4. Payments & Pricing",
    content: `• All prices are shown in INR.
• Payments once made for digital products are final.
• Reseller plan prices may change anytime without notice.
• We use secure payment gateways for transactions.`,
  },
  {
    id: "delivery",
    title: "5. Product Delivery",
    content: `• All digital goods are delivered instantly via email/dashboard.
• Some products may take up to 1–4 hours for manual activation.
• If delay occurs, support team will assist until resolved.`,
  },
  {
    id: "iprights",
    title: "6. Intellectual Property Rights",
    content: `• All products, images, training content, and branding belong to Indokona Credit Bazar Pvt. Ltd.
• Users may not copy, distribute, or sell our content without permission.`,
  },
  {
    id: "prohibited",
    title: "7. Prohibited Activities",
    content: `Users are not allowed to:
✗ Spread false claims or misrepresent services
✗ Use products for illegal activities
✗ Create misleading ads
✗ Abuse refund/chargeback systems
✗ Use bots to scrape data
✗ Impersonate Indokona staff

Such violations can lead to termination without refund.`,
  },
  {
    id: "earnings",
    title: "8. Earnings Disclaimer",
    content: `We provide tools, training, and opportunities, but:
Earnings depend on your skills, consistency, and marketing efforts.
We do not guarantee income, sales numbers, or fixed commissions.`,
  },
  {
    id: "termination",
    title: "9. Termination Policy",
    content: `Indokona may suspend or terminate accounts if:
• Fraudulent activity is detected
• Misuse of dashboard or product occurs
• False chargebacks are raised
• Violation of these Terms is found

No refund will be issued for banned accounts.`,
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: `Indokona is not responsible for:
• Loss of income due to user mistakes
• Third-party service downtime
• Misuse of product by the user
• Loss caused by incorrect business decisions`,
  },
  {
    id: "updates",
    title: "11. Updates to Terms",
    content: `We may update or modify these Terms anytime.
Continued use of the platform means you accept the updated Terms.`,
  },
  {
    id: "contact",
    title: "12. Contact Information",
    content: `📧 indokonaoutsourcing@gmail.com
📞 +91 96259 95155
🌐 www.indokona.com`,
  },
];

export default function DigitalStoreTermsAndConditions() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);

  useEffect(() => {
    // Observer setup for active TOC item
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Higher rootMargin on top to activate section sooner
      { root: null, rootMargin: "-10% 0px -80% 0px", threshold: 0 } 
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Smooth scroll behaviour for better UX
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = prev || "auto");
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="policy-page-container" ref={containerRef}>
      <style>{`
        /* --- Custom CSS Styles for Modern UI --- */
        .policy-page-container {
          background-color: #f4f7f9; /* Light, soft background */
          padding: 2rem 1rem;
          min-height: 100vh;
          font-family: 'Arial', sans-serif; /* Clean, modern font */
        }
        .policy-card {
          max-width: 1200px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* Soft, noticeable shadow */
          padding: 3rem;
        }

        /* Header Styling */
        .policy-header h1 {
            color: #1a202c; /* Dark text for professionalism */
            font-weight: 800;
            margin-bottom: 0.5rem;
        }
        .policy-header p {
            color: #4a5568; /* Muted subtext */
            font-size: 1rem;
        }

        /* Table of Contents (TOC) */
        .toc-sticky {
          position: sticky;
          top: 80px; /* Space from the top */
          padding-left: 0.5rem;
          border-left: 3px solid #e2e8f0; /* Subtle separator line */
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        }
        .toc-title {
            color: #2d3748;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            margin-bottom: 1rem;
        }
        .toc-link {
          text-decoration: none;
          color: #4a5568;
          padding: 6px 0;
          display: block;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border-left: 3px solid transparent; /* Prepare for active state */
        }
        .toc-link:hover {
            color: #007bff; /* Primary color on hover */
        }
        .toc-link.active {
          font-weight: 700;
          color: #007bff; /* Primary color for active link */
          border-left: 3px solid #007bff; /* Highlight bar */
          padding-left: 10px;
        }

        /* Section Content */
        .policy-section h4 {
            color: #1a202c;
            font-weight: 700;
            padding-top: 1.5rem; /* Space when scrolling to section */
            margin-top: -1.5rem; /* Compensate for padding to keep section top correct */
        }
        .content-box {
          background-color: #f7fafc; /* Very light background for contrast */
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          line-height: 1.6;
          color: #2d3748;
          white-space: pre-wrap; /* Keeps formatting */
          font-family: 'Arial', sans-serif; /* Ensure content font is clean */
        }
        
        /* Footer */
        .policy-footer {
            padding-top: 2rem;
            margin-top: 2rem;
            border-top: 1px solid #e2e8f0;
        }
        .policy-footer a {
            color: #007bff;
            text-decoration: none;
            transition: color 0.2s;
        }
        .policy-footer a:hover {
            color: #0056b3;
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) { 
            .policy-card { 
                padding: 1.5rem;
            }
            .toc-sticky { 
                position: static; 
                margin-bottom: 1rem; 
                border-left: none;
                padding-left: 0;
            }
            .policy-page-container {
                 padding: 1rem;
            }
        }
      `}</style>

      <div className="policy-card">
        <div className="d-flex align-items-start">
          
          {/* Left Column: Desktop Table of Contents */}
          <div className="d-none d-lg-block pe-5" style={{ width: 300 }}>
            <div className="toc-sticky">
              <h6 className="toc-title">ON THIS PAGE</h6>
              <nav className="nav flex-column">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`toc-link ${active === s.id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(s.id);
                    }}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="flex-grow-1">
            <header className="mb-5 policy-header">
              <h1>Terms & Conditions</h1>
              <p>Indokona Digital Store — Last Updated: **December 2025**</p>
            </header>

            {sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-5 policy-section">
                <h4>{s.title}</h4>
                <div className="content-box">
                  {/* Using a regular div with pre-wrap for better rendering */}
                  <div style={{ whiteSpace: "pre-wrap" }}>{s.content}</div>
                </div>
              </section>
            ))}

            <footer className="policy-footer">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                <small className="text-muted">
                  © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. All rights reserved.
                </small>
                <div className="mt-2 mt-md-0">
                  <a href="mailto:indokonaoutsourcing@gmail.com" className="me-3 fw-semibold">
                    Email Support
                  </a>
                  <a href="tel:+919625995155" className="fw-semibold">
                    Phone Support
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* Mobile Table of Contents - Hidden when TOC is in the side panel */}
        <div className="d-lg-none mt-4">
          <details>
            <summary className="fw-bold">Contents</summary>
            <div className="mt-2 border rounded p-3 bg-light">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`d-block py-1 ps-2 toc-link ${active === s.id ? "active" : "text-dark"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(s.id);
                    // Close the <details> element after clicking for a clean UX
                    const details = e.currentTarget.closest("details");
                    if (details) details.removeAttribute("open");
                  }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}