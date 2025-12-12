import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Terms & Conditions — Indokona Digital Store
// Component Name: DigitalStoreDisclaimer

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
    // Observe which section is visible to highlight TOC item
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    // Attach observer after DOM mounts
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Smooth scroll behaviour
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = prev || "auto");
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="p-4 bg-light" ref={containerRef}>
      <style>{`
        .policy-card { max-width: 1100px; margin: 0 auto; }
        .toc-sticky { position: sticky; top: 90px; }
        .toc-link { text-decoration: none; color: #333; }
        .toc-link.active { font-weight: 700; color: #0d6efd; }
        pre { white-space: pre-wrap; }
        @media (max-width: 991px) { .toc-sticky { position: static; margin-bottom: 1rem; } }
      `}</style>

      <div className="policy-card card shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <div className="d-none d-lg-block pe-4" style={{ width: 260 }}>
              <div className="toc-sticky">
                <h5 className="mb-3">On this page</h5>
                <nav className="nav flex-column">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`toc-link nav-link p-1 ${active === s.id ? "active" : ""}`}
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

            <div className="flex-grow-1">
              <header className="mb-4">
                <h2>Terms & Conditions</h2>
                <p className="text-muted">Indokona Digital Store — Last Updated: December 2025</p>
              </header>

              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-4">
                  <h4>{s.title}</h4>
                  <div className="border rounded p-3 bg-white">
                    <pre className="mb-0" style={{ fontFamily: "inherit", fontSize: 15 }}>{s.content}</pre>
                  </div>
                </section>
              ))}

              <footer className="pt-3 mt-4 border-top">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <small className="text-muted">© {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. All rights reserved.</small>
                  <div>
                    <a href="mailto:indokonaoutsourcing@gmail.com" className="me-3">Email Support</a>
                    <a href="tel:+919625995155">Phone</a>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Mobile Table of Contents */}
          <div className="d-lg-none mt-3">
            <details>
              <summary className="fw-semibold">Contents</summary>
              <div className="mt-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`d-block py-1 ${active === s.id ? "fw-bold text-primary" : "text-dark"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      // Use the same scroll helper for mobile
                      handleScrollTo(s.id);
                      // Close the <details> element after clicking (UX friendly)
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
    </div>
  );
}
