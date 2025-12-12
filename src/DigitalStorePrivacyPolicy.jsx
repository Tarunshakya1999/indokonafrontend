import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// PrivacyPolicy_Indokona.jsx
// Single-file React component using Bootstrap + local CSS.
// Default export a component you can drop into your React app.

const sections = [
  {
    id: "intro",
    title: "Privacy Policy — Indokona Digital Store",
    content: `Last Updated: December 2025

Indokona Digital Store ("we", "us", "our"), powered by Indokona Credit Bazar Pvt. Ltd., is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you access or use our website, mobile app, reseller dashboard, or purchase digital products and subscriptions.

By using Indokona Digital Store, you agree to the terms outlined in this Privacy Policy.`,
  },
  {
    id: "information",
    title: "1. Information We Collect",
    content: `1.1 Personal Information

We collect personal details provided by you during signup, purchase, or communication, including:
• Full Name
• Email Address
• Mobile Number
• Address (if required for billing)
• Business/Brand Name (for resellers)
• GST details (optional)
• Payment transaction details (processed via secure payment partners)

1.2 Automatically Collected Information

When you visit our platform, we automatically collect:
• IP Address
• Device information (browser type, OS, etc.)
• Usage data (pages visited, actions taken)
• Cookies and tracking technologies
• Log files & analytics information

1.3 Reseller-Specific Information

For resellers, we also collect:
• Sales data
• Referral data
• Dashboard activity
• Earnings reports
• Sub-domain usage (if applicable)`,
  },
  {
    id: "use",
    title: "2. How We Use Your Information",
    content: `We use your information to:
✓ Create and manage your account or reseller dashboard
✓ Process orders, payments, and product activation
✓ Provide instant access to digital products
✓ Offer customer support and training
✓ Improve platform performance and security
✓ Send important updates, promotional offers, and training reminders
✓ Prevent fraud, misuse, and unauthorized access
✓ Comply with legal obligations

We never sell your information to third parties.`,
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    content: `We use cookies to:
• Improve user experience
• Store login sessions
• Analyze website performance
• Personalize dashboard content
• Track reseller sales and referrals

You may disable cookies through your browser settings, but certain features may stop working.`,
  },
  {
    id: "sharing",
    title: "4. Sharing of Information",
    content: `We share information only when necessary and with:
• Trusted payment gateways (for secure transactions)
• Third-party service providers (hosting, analytics, cloud storage)
• Legal authorities (only if required by law)

All partners operate under strict confidentiality and data protection agreements.`,
  },
  {
    id: "security",
    title: "5. Data Protection & Security",
    content: `We implement advanced security measures, including:
• SSL encryption
• Secure payment gateways
• Firewall & DDoS protection
• Role-based access control
• Regular security audits

However, no online system is 100% secure. Users are advised to protect their login credentials.`,
  },
  {
    id: "rights",
    title: "6. Your Rights",
    content: `You have the right to:
✓ Access your personal data
✓ Update or correct your information
✓ Request data deletion
✓ Opt-out of marketing emails & notifications
✓ Request account deactivation

To exercise your rights, email us at: indokonaoutsourcing@gmail.com`,
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: `We retain your information as long as:
• Your account is active
• Your reseller plan is valid
• Required for legal, administrative, or security purposes

You may request early deletion anytime.`,
  },
  {
    id: "children",
    title: "8. Children’s Privacy",
    content: `Indokona Digital Store is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.`,
  },
  {
    id: "links",
    title: "9. Third-Party Links",
    content: `Our platform may contain external links. We are not responsible for the privacy practices of third-party websites or apps.`,
  },
  {
    id: "updates",
    title: "10. Updates to This Policy",
    content: `We may update this Privacy Policy periodically. Changes will be posted on this page with a revised “Last Updated” date. Continued use of the platform means you accept the updated terms.`,
  },
  {
    id: "contact",
    title: "11. Contact Information",
    content: `For any privacy-related concerns or support:

📧 Email: indokonaoutsourcing@gmail.com

📞 Phone: +91 96259 95155
🌐 Website: www.indokona.com`,
  },
];

export default function DigitalStorePrivacyPolicy() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);
  const headingRefs = useRef({});

  useEffect(() => {
    // IntersectionObserver to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Add smooth scroll behavior for browsers that don't honor CSS
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    return () => (html.style.scrollBehavior = "");
  }, []);

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
                        const el = document.getElementById(s.id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
                <h2>Privacy Policy</h2>
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

          {/* Mobile TOC (collapsible) */}
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
                      const el = document.getElementById(s.id);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
