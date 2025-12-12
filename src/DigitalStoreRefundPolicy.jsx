import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// RefundPolicy_Indokona (Updated UI with Animations)

const sections = [
  {
    id: "intro",
    title: "Refund Policy — Indokona Digital Store",
    content: `Last Updated: December 2025

Indokona Digital Store, powered by Indokona Credit Bazar Pvt. Ltd., digital products, reseller plans, and software subscriptions provide instant access and downloadable services. As per standard digital marketplace practice, we follow a transparent, fair, and customer-friendly refund policy.`,
    isImportant: true,
  },
  {
    id: "digital",
    title: "1. Digital Products & Software Subscriptions",
    content: `All digital products and software subscriptions delivered by Indokona Digital Store come with instant activation or instant download access.

Therefore:
✅ Once a product is activated, downloaded, or accessed, refunds cannot be issued.
(This follows digital-goods industry standards.)

Refunds will be accepted only if:
• Duplicate payment occurred
• The product was not delivered due to a technical error
• The product you purchased is unavailable or discontinued
• Wrong item was delivered and activation wasn’t done`,
    icon: "🛒",
  },
  {
    id: "reseller",
    title: "2. Reseller Plans (Basic, Pro, Gold, Diamond)",
    content: `Reseller plans unlock instant benefits (dashboard, branding tools, commissions, subdomain, etc.).

So:
All reseller plan purchases are final and non-refundable.

Refunds are allowed only if:
• Payment was deducted but plan not activated
• Duplicate transactions occurred
• Technical issues prevented access for more than 48 hours`,
    icon: "👑",
  },
  {
    id: "service",
    title: "3. Service Issues & Resolution",
    content: `If any service doesn’t work as promised:
• We will provide free re-activation, fix, replacement, or alternate product (whichever is applicable).
• Our team will support you until the issue is fully resolved.`,
    icon: "🔧",
  },
  {
    id: "process",
    title: "4. Refund Process (If Eligible)",
    content: `To request a refund:

📧 Email: indokonaoutsourcing@gmail.com

📞 Support: +91 96259 95155

Include:
• Full Name
• Email / Mobile
• Order ID / Payment Screenshot
• Reason for refund

Refunds (if approved) will be processed within 5–7 business days.`,
    icon: "💰",
  },
  {
    id: "norefund",
    title: "5. No Refund Cases (Strict)",
    content: `Refund is NOT provided if:
✗ You changed your mind after activation
✗ Product or software was already accessed
✗ Wrong purchase due to misunderstanding
✗ You expected features not mentioned on our website
✗ Reseller plan benefits were already unlocked`,
    icon: "🛑",
    isStrict: true,
  },
  {
    id: "contact",
    title: "6. Contact for Support",
    content: `For any concerns or technical issues, reach out anytime.
We are committed to offering 100% transparent support.`,
    icon: "💬",
  },
];

export default function DigitalStoreRefundPolicy() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);

  // Function to handle smooth scroll
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    // Observer setup for active TOC item
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only change active if more than 10% of the element is visible, 
          // and stop before the footer (adjusted rootMargin)
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Higher rootMargin on top (-10%) to activate section sooner
      { root: null, rootMargin: "-10% 0px -80% 0px", threshold: 0.1 } 
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure smooth scrolling behavior is enabled
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    return () => (html.style.scrollBehavior = "");
  }, []);

  return (
    <div className="policy-page-container-refund" ref={containerRef}>
      <style>{`
        /* --- Custom CSS Styles for Modern Refund UI --- */
        .policy-page-container-refund {
            background-color: #e6e9f0; /* Soft background */
            padding: 2rem 1rem;
            min-height: 100vh;
            font-family: 'Inter', 'Arial', sans-serif;
        }
        .policy-card-refund {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
            padding: 3rem;
            display: flex; /* Flex container for TOC and content */
        }

        /* Header */
        .policy-header-refund h1 {
            color: #1c3c50; /* Dark Navy */
            font-weight: 900;
            border-left: 5px solid #ff4757; /* Red accent for Refund */
            padding-left: 15px;
            margin-bottom: 0.5rem;
        }

        /* Table of Contents (TOC) */
        .toc-sticky-refund {
            position: sticky;
            top: 80px;
            padding-left: 0.5rem;
            border-left: 3px solid #ced4da;
            max-height: calc(100vh - 100px);
            overflow-y: auto;
        }
        .toc-title-refund {
            color: #495057;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            margin-bottom: 1rem;
        }
        .toc-link-refund {
            text-decoration: none;
            color: #495057;
            padding: 8px 0;
            display: block;
            font-size: 0.95rem;
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
        }
        .toc-link-refund:hover {
            color: #ff4757; /* Red accent on hover */
        }
        .toc-link-refund.active {
            font-weight: 700;
            color: #ff4757; /* Red accent for active link */
            border-left: 3px solid #ff4757; 
            padding-left: 10px;
        }

        /* Section Content */
        .policy-section-refund {
            padding-top: 1.5rem;
            margin-top: -1.5rem; /* Scroll adjustment */
            opacity: 0; /* Initial opacity for fade-in animation */
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        /* Animation: Fade in on appearance */
        .policy-section-refund.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .policy-section-refund h4 {
            color: #1c3c50;
            font-weight: 700;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        .policy-icon {
            font-size: 1.5rem;
            margin-right: 10px;
            animation: pulse 2s infinite; /* Gentle animation for icons */
        }

        .content-box-refund {
            background-color: #fffafa; /* Very light pink/red tint for attention */
            border: 1px solid #f8d7da; /* Light red border */
            border-radius: 8px;
            padding: 20px;
            line-height: 1.7;
            color: #3f5567;
            white-space: pre-wrap;
            box-shadow: 0 2px 10px rgba(255, 71, 87, 0.05);
        }
        
        /* Strict No Refund Section Highlight */
        .strict-section .content-box-refund {
            background-color: #ffebeb; 
            border: 2px solid #ff4757; /* Bold red border */
            font-weight: 600;
        }
        .strict-section h4 {
            color: #ff4757;
        }

        /* Keyframes for animation */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) { 
            .policy-card-refund { 
                padding: 1.5rem;
            }
            .toc-sticky-refund { 
                position: static; 
                border-left: none;
            }
            .policy-page-container-refund {
                 padding: 1rem;
            }
        }
      `}</style>

      <div className="policy-card-refund">
        
        {/* Left Column: Desktop Table of Contents */}
        <div className="d-none d-lg-block pe-5" style={{ width: 300 }}>
          <div className="toc-sticky-refund">
            <h6 className="toc-title-refund">POLICY CONTENTS</h6>
            <nav className="nav flex-column">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`toc-link-refund ${active === s.id ? "active" : ""}`}
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
          <header className="mb-5 policy-header-refund">
            <h1>Refund Policy</h1>
            <p className="text-muted">Indokona Digital Store — Last Updated: **December 2025**</p>
          </header>

          {sections.map((s) => (
            // Use Intersection Observer for the fade-in animation
            <PolicySection key={s.id} section={s} handleScrollTo={handleScrollTo} />
          ))}

          <footer className="pt-3 mt-5 border-top">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <small className="text-muted">
                © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. All rights reserved.
              </small>
              <div className="mt-2 mt-md-0">
                <a href="mailto:indokonaoutsourcing@gmail.com" className="me-3 text-danger fw-semibold">
                  Email Support
                </a>
                <a href="tel:+919625995155" className="text-danger fw-semibold">
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
                className={`d-block py-2 ps-2 toc-link-refund ${active === s.id ? "active" : "text-dark"}`}
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

// Custom component to handle Section Animation
const PolicySection = ({ section }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally disconnect observer after first view
                    // observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const sectionClasses = `policy-section-refund ${section.isStrict ? 'strict-section' : ''} ${isVisible ? 'visible' : ''}`;

    return (
        <section 
            key={section.id} 
            id={section.id} 
            className={sectionClasses} 
            ref={sectionRef}
        >
            <h4>
                <span className="policy-icon">{section.icon}</span>
                {section.title}
            </h4>
            <div className="content-box-refund">
                <div style={{ whiteSpace: "pre-wrap" }}>{section.content}</div>
            </div>
        </section>
    );
};