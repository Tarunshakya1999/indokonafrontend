import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function M2MRefundPolicy() {
  useEffect(() => {
    const css = `
      .hero-refund { background: linear-gradient(135deg,#0f172a 0%, #7c3aed 100%); color: #fff; padding: 48px 0; }
      .card-ghost { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
      .glow { box-shadow: 0 6px 30px rgba(99,102,241,0.12); }
      .accent { color: #7c3aed; }
      .fade-in { animation: fadeInUp .6s ease both; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
      .bg-panel { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }
      .toc a { color: #f8fafc; text-decoration: none; }
      .toc a:hover { text-decoration: underline; }
      .decor-dot { width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:8px; background:#7c3aed; }
      .toc-panel { position: sticky; top: 90px; }
      .meta-box { background: rgba(255,255,255,0.15); padding: 10px 14px; border-radius: 8px; }
      .print-hide { display: inline-block; }
      @media print { .print-hide { display: none !important; } }
    `;
    const style = document.createElement("style");
    style.dataset.source = "RefundPolicy.css.injected";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  const sections = [
    {
      id: "no-refund",
      title: "1. No Refund on Digital Services",
      content: `
      All digital subscriptions (Starter, Growth, Enterprise) are non-refundable because:
      • Tools activate instantly  
      • AI credits are consumed automatically  
      • Software modules unlock immediately  
      • Digital assets cannot be returned  
      `,
    },
    {
      id: "refund-conditions",
      title: "2. When Refunds Are Applicable",
      content: `
      Refund is allowed only in these cases:
      • Duplicate Payment  
      • Failed Payment but amount deducted  
      • Payment Gateway Error (Razorpay/Stripe/Paytm)  
      Refund Timeline: 7–14 working days.
      `,
    },
    {
      id: "dfy",
      title: "3. No Refund For DFY Services",
      content: `
      Once started, these services are non-refundable:
      • GST, Trademark, MSME, Pvt Ltd, FSSAI  
      • Website/App Development  
      • Branding & Design  
      • Ad Campaign Setup  
      • CRM & WhatsApp API Setup  
      `,
    },
    {
      id: "cancellation",
      title: "4. Subscription Cancellation",
      content: `
      Users may cancel anytime.  
      Cancellation stops NEXT cycle billing.  
      Current cycle amount is non-refundable.
      `,
    },
    {
      id: "delays",
      title: "5. Service Delivery Delay",
      content: `
      Delays caused by government portals, Meta/Google, 3rd-party APIs, hosting providers, or partner agencies do NOT qualify for refunds.
      `,
    },
    {
      id: "dispute",
      title: "6. Dispute Resolution",
      content: `
      Email: indokonaoutsourcing@gmail.com  
      Response time: 24–48 hours  
      Legal Jurisdiction: Faridabad, Haryana (India)
      `,
    },
  ];

  const handlePrint = () => window.print();

  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      {/* -------- HERO -------- */}
      <header className="hero-refund">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 fade-in">
              <h1 className="display-5 fw-bold">Refund Policy</h1>
              <p className="lead mb-1">
                Mind To Market™ — Indokona Credit Bazar Pvt. Ltd.
              </p>

              <div className="d-flex gap-2 align-items-center mt-3">
                <span className="meta-box small">Last Updated: 2025</span>
                <button
                  onClick={handlePrint}
                  className="btn btn-outline-light btn-sm ms-2 print-hide"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>

            <div className="col-md-4 text-md-end mt-4 mt-md-0 fade-in">
              <div className="footer-card">
                <div>Mind To Market™</div>
                <div>Indokona Credit Bazar Pvt. Ltd.</div>
                <div>Faridabad, Haryana, India</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`.footer-card {
  display: inline-block;
  padding: 18px 25px;
  border-radius: 16px;

  /* 🌈 Glassmorphism + Glow */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  /* ✨ Glow */
  box-shadow: 
    0 0 15px rgba(255, 255, 255, 0.2),
    0 0 25px rgba(80, 120, 255, 0.3);

  color: white;
  font-size: 15px;
  line-height: 1.6;
  font-weight: 500;
  text-align: right;

  transition: 0.3s ease-in-out;
}

/* Hover effect — premium SaaS level */
.footer-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.25),
    0 0 45px rgba(80, 120, 255, 0.45),
    0 0 70px rgba(80, 120, 255, 0.25);
}

/* Fade-in entry animation */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`}</style>
      </header>

      {/* -------- MAIN CONTENT -------- */}
      <main className="container py-5">
        <div className="row">
          {/* -------- TOC -------- */}
          <aside className="col-lg-3 mb-4">
            <div className="card bg-panel p-3 card-ghost">
              <div className="d-flex align-items-center mb-3">
                <span className="decor-dot"></span>
                <strong>Contents</strong>
              </div>
              <nav className="toc-panel">
                <ul className="list-unstyled toc mb-0">
                  {sections.map((s) => (
                    <li key={s.id} className="mb-2">
                      <a href={`#${s.id}`} className="d-block small text-light">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-3">
                <button
                  className="btn btn-sm btn-outline-light w-100 mb-2"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Back to top
                </button>
                <button
                  className="btn btn-sm btn-warning w-100"
                  onClick={handlePrint}
                >
                  Print / PDF
                </button>
              </div>
            </div>
          </aside>

          {/* -------- SECTIONS -------- */}
          <section className="col-lg-9">
            <div className="card p-4 card-ghost mb-4 fade-in">
              <h3 style={{ color: "white" }}>Quick Summary</h3>
              <p style={{ color: "white" }}>
                Refunds apply only in rare cases. All digital services are
                auto-activated and therefore non-refundable.
              </p>
            </div>

            {sections.map((s, idx) => (
              <article id={s.id} key={s.id} className="mb-4">
                <div className="card p-4 bg-light text-dark shadow-sm">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4>{s.title}</h4>
                    <div className="small text-muted">Section {idx + 1}</div>
                  </div>
                  <p style={{ whiteSpace: "pre-line" }}>{s.content}</p>
                </div>
              </article>
            ))}

            <footer className="text-muted small mt-4">
              © 2025 Mind To Market™ — Indokona Credit Bazar Pvt. Ltd.
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
