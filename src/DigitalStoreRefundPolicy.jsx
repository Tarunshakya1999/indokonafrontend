import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// RefundPolicy_Indokona.jsx
// Single-file React component using Bootstrap + local CSS.
// Drop this file into your React project and render <RefundPolicy_Indokona />.

const sections = [
  {
    id: "intro",
    title: "Refund Policy — Indokona Digital Store",
    content: `Last Updated: December 2025

Indokona Digital Store, powered by Indokona Credit Bazar Pvt. Ltd., digital products, reseller plans, and software subscriptions provide instant access and downloadable services. As per standard digital marketplace practice, we follow a transparent, fair, and customer-friendly refund policy.`,
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
  },
  {
    id: "service",
    title: "3. Service Issues & Resolution",
    content: `If any service doesn’t work as promised:
• We will provide free re-activation, fix, replacement, or alternate product (whichever is applicable).
• Our team will support you until the issue is fully resolved.`,
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
  },
  {
    id: "contact",
    title: "6. Contact for Support",
    content: `For any concerns or technical issues, reach out anytime.
We are committed to offering 100% transparent support.`,
  },
];

export default function DigitalStoreRefundPolicy() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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
                <h2>Refund Policy</h2>
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
