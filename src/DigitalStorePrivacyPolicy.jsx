import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// PrivacyPolicy_Indokona.jsx (Updated UI with Security Theme)

const sections = [
  {
    id: "intro",
    title: "Privacy Policy — Indokona Digital Store",
    content: `Last Updated: December 2025

Indokona Digital Store ("we", "us", "our"), powered by Indokona Credit Bazar Pvt. Ltd., is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you access or use our website, mobile app, reseller dashboard, or purchase digital products and subscriptions.

By using Indokona Digital Store, you agree to the terms outlined in this Privacy Policy.`,
    icon: "🛡️",
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
    icon: "👤",
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
    icon: "⚙️",
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
    icon: "🍪",
  },
  {
    id: "sharing",
    title: "4. Sharing of Information",
    content: `We share information only when necessary and with:
• Trusted payment gateways (for secure transactions)
• Third-party service providers (hosting, analytics, cloud storage)
• Legal authorities (only if required by law)

All partners operate under strict confidentiality and data protection agreements.`,
    icon: "🔗",
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
    icon: "🔒",
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
    icon: "✅",
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: `We retain your information as long as:
• Your account is active
• Your reseller plan is valid
• Required for legal, administrative, or security purposes

You may request early deletion anytime.`,
    icon: "🗄️",
  },
  {
    id: "children",
    title: "8. Children’s Privacy",
    content: `Indokona Digital Store is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.`,
    icon: "🚫",
  },
  {
    id: "links",
    title: "9. Third-Party Links",
    content: `Our platform may contain external links. We are not responsible for the privacy practices of third-party websites or apps.`,
    icon: "↗️",
  },
  {
    id: "updates",
    title: "10. Updates to This Policy",
    content: `We may update this Privacy Policy periodically. Changes will be posted on this page with a revised “Last Updated” date. Continued use of the platform means you accept the updated terms.`,
    icon: "📅",
  },
  {
    id: "contact",
    title: "11. Contact Information",
    content: `For any privacy-related concerns or support:

📧 Email: indokonaoutsourcing@gmail.com

📞 Phone: +91 96259 95155
🌐 Website: www.indokona.com`,
    icon: "📧",
  },
];

export default function DigitalStorePrivacyPolicy() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    // IntersectionObserver to highlight active section and trigger animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            entry.target.classList.add('visible'); // Trigger fade-in animation
          } else {
            // Optional: Hide element when it leaves the viewport (for repeating animation)
            // entry.target.classList.remove('visible');
          }
        });
      },
      // Root margin adjusted for better visibility tracking
      { root: null, rootMargin: "-10% 0px -80% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure smooth scroll behavior is enabled
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    return () => (html.style.scrollBehavior = "");
  }, []);

  return (
    <div className="policy-page-container-privacy" ref={containerRef}>
      <style>{`
        /* --- Custom CSS Styles for Privacy UI (Security Theme) --- */
        .policy-page-container-privacy {
            background-color: #f0f4f8; /* Soft blue-grey background */
            padding: 2rem 1rem;
            min-height: 100vh;
            font-family: 'Segoe UI', 'Roboto', 'Helvetica', sans-serif;
        }
        .policy-card-privacy {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px; /* Slightly more rounded */
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            padding: 3.5rem;
        }

        /* Header */
        .policy-header-privacy h1 {
            color: #1a5692; /* Strong primary blue */
            font-weight: 800;
            border-bottom: 4px solid #38a169; /* Green accent for Trust */
            padding-bottom: 10px;
            margin-bottom: 0.5rem;
        }

        /* Table of Contents (TOC) */
        .toc-sticky-privacy {
            position: sticky;
            top: 80px;
            padding-left: 0.5rem;
            border-left: 3px solid #d4e0eb;
            max-height: calc(100vh - 100px);
            overflow-y: auto;
        }
        .toc-title-privacy {
            color: #4a5568;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }
        .toc-link-privacy {
            text-decoration: none;
            color: #4a5568;
            padding: 8px 0;
            display: block;
            font-size: 0.95rem;
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
        }
        .toc-link-privacy:hover {
            color: #38a169; /* Trust green on hover */
        }
        .toc-link-privacy.active {
            font-weight: 700;
            color: #1a5692; /* Active blue */
            border-left: 3px solid #1a5692; 
            padding-left: 10px;
        }

        /* Section Content */
        .policy-section-privacy {
            padding-top: 2rem;
            margin-top: -2rem; /* Scroll adjustment */
            opacity: 0; 
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        /* Animation: Fade in on appearance */
        .policy-section-privacy.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .policy-section-privacy h4 {
            color: #1a5692;
            font-weight: 700;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        .policy-icon-privacy {
            font-size: 1.6rem;
            margin-right: 12px;
            color: #38a169; /* Icon color */
            animation: bounceIn 1s ease-out; /* Simple bounce animation on load */
        }
        
        .content-box-privacy {
            background-color: #f7fcff; /* Very light blue background for content */
            border: 1px solid #c4e1f7;
            border-left: 5px solid #1a5692; /* Blue accent bar */
            border-radius: 8px;
            padding: 25px;
            line-height: 1.8;
            color: #2d3748;
            white-space: pre-wrap;
        }
        
        /* Keyframes for bounce animation (used once per section load) */
        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); }
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) { 
            .policy-card-privacy { 
                padding: 1.5rem;
            }
            .toc-sticky-privacy { 
                position: static; 
                border-left: none;
            }
            .policy-page-container-privacy {
                 padding: 1rem;
            }
        }
      `}</style>

      <div className="policy-card-privacy">
        
        {/* Left Column: Desktop Table of Contents */}
        <div className="d-none d-lg-block pe-5" style={{ width: 300 }}>
          <div className="toc-sticky-privacy">
            <h6 className="toc-title-privacy">POLICY CONTENTS</h6>
            <nav className="nav flex-column">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`toc-link-privacy ${active === s.id ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(s.id);
                  }}
                >
                  {s.icon} {s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="flex-grow-1">
          <header className="mb-5 policy-header-privacy">
            <h1>Privacy Policy</h1>
            <p className="text-muted">Indokona Digital Store — Last Updated: **December 2025**</p>
          </header>

          {sections.map((s) => (
            <PolicySectionPrivacy key={s.id} section={s} />
          ))}

          <footer className="pt-3 mt-5 border-top">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <small className="text-muted">
                © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. All rights reserved.
              </small>
              <div className="mt-2 mt-md-0">
                <a href="mailto:indokonaoutsourcing@gmail.com" className="me-3 text-primary fw-semibold">
                  Email Support
                </a>
                <a href="tel:+919625995155" className="text-primary fw-semibold">
                  Phone Support
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Mobile Table of Contents */}
      <div className="d-lg-none mt-4">
        <details>
          <summary className="fw-bold">Policy Contents</summary>
          <div className="mt-2 border rounded p-3 bg-white">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`d-block py-2 ps-2 toc-link-privacy ${active === s.id ? "active" : "text-dark"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(s.id);
                  const details = e.currentTarget.closest("details");
                  if (details) details.removeAttribute("open");
                }}
              >
                {s.icon} {s.title}
              </a>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}

// Custom component to handle Section Animation for Privacy Policy
const PolicySectionPrivacy = ({ section }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // IntersectionObserver for visibility check and animation trigger
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // observer.unobserve(entry.target); // Optional: Run animation only once
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const sectionClasses = `policy-section-privacy ${isVisible ? 'visible' : ''}`;

    return (
        <section 
            key={section.id} 
            id={section.id} 
            className={sectionClasses} 
            ref={sectionRef}
        >
            <h4>
                <span className="policy-icon-privacy">{section.icon}</span>
                {section.title}
            </h4>
            <div className="content-box-privacy">
                <div style={{ whiteSpace: "pre-wrap" }}>{section.content}</div>
            </div>
        </section>
    );
};