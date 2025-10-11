// src/components/IndokonaFintechPage.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";

const IndokonaFintechPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="indokona-page">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="text-center bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="fw-bold display-5 mb-3">
            🚀 Start, Build & Scale Your Fintech Business – From Retailer to White Label & Combo Plan
          </h1>
          <p className="lead mb-4">
            Indokona Fintech brings you technology, automation, training, and tools to create not just a brand, but a scalable fintech empire.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg">Become a Partner Now</button>
            <button className="btn btn-outline-primary btn-lg">Download Brochure PDF</button>
            <button className="btn btn-success btn-lg">Request Free Demo</button>
          </div>
          <div className="mt-5" data-aos="zoom-in">
            <img
              src="/dashboard-mockup.png"
              alt="Fintech Dashboard"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">About Indokona</h2>
          <p className="text-center lead mb-5">
            Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and scalable fintech platform.
            We empower entrepreneurs to start at any level—Retailer, Distributor, Master Distributor,
            Admin, B2B, White Label or Combo Plan—and grow their network with ease.
          </p>
          <div className="row text-start">
            {[
              "Auto-Generated Authorization Letter",
              "Verified Digital Certificate",
              "Unique Digital ID Card (with QR + Hologram)",
              "Super Branding Kit (MRP ₹11,999 FREE)"
            ].map((item, i) => (
              <div key={i} className="col-md-6 mb-3 d-flex align-items-start">
                <FaCheckCircle className="text-success me-2 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PARTNERSHIP PLANS ---------------- */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Partnership Plans Explained</h2>
          <div className="row g-4">
            {[
              { title: "Retailer Plan", desc: "Access to Retailer Dashboard + AEPS, BBPS, Recharge, DMT, Insurance, Loan Enquiries." },
              { title: "Distributor Plan", desc: "Manage & Onboard Retailers, get extra commissions & bonuses." },
              { title: "Master Distributor Plan", desc: "Manage Distributors & Retailers with higher commission slabs." },
              { title: "Admin Panel", desc: "Real-time monitoring, AI fraud detection, business analytics." },
              { title: "B2B Fintech Solutions", desc: "API Access + CRM tools + SaaS hosting." },
              { title: "White Label Plan", desc: "Launch your own fintech portal with full control & support." },
            ].map((plan, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{plan.title}</h5>
                    <p>{plan.desc}</p>
                    <p className="text-success fw-semibold">🎁 Free Super Branding Kit Included</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COMBO PLAN ---------------- */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">🌟 Indokona Combo Plan – All-in-One Business Powerhouse</h2>
          <p className="text-center lead mb-5">
            Indokona Combo Plan combines Fintech + SaaS + Automation & Digital Marketing Suite in one complete package.
            Manage your fintech operations, SaaS business, and brand automation from a single platform.
          </p>

          <div className="row g-4">
            {[
              {
                title: "Indokona Fintech (White Label)",
                points: [
                  "Launch Your Own Branded Fintech Portal (Logo + Domain)",
                  "Multi-Level User Management: Retailer → Distributor → Admin",
                  "Complete Control Over Commissions",
                  "Direct Transactions: AEPS, BBPS, DMT, Loans, Cards",
                  "White Label License + CEO ID + Digital Seal"
                ]
              },
              {
                title: "Indokona SaaS (Software as a Service)",
                points: [
                  "Cloud-based tools: CRM, ERP, Accounting, POS, Analytics",
                  "Multi-client management with scalable architecture",
                  "Secure & GDPR-compliant infrastructure",
                  "Sell SaaS subscriptions easily"
                ]
              },
              {
                title: "Indokona Suite (Branding + Automation)",
                points: [
                  "AI-driven CRM, Scheduler, Campaign Manager",
                  "SEO + Social Media Automation",
                  "Custom Landing Pages & Digital Creatives",
                  "Business Intelligence Dashboard"
                ]
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <ul className="list-unstyled">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-success me-2" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h4 className="fw-bold">💡 Single Investment, Triple Advantage!</h4>
            <p>
              With Indokona Combo Plan, you don’t just start a business—you own a complete ecosystem.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary">Explore Combo Plan</button>
              <button className="btn btn-success">Request Free Demo</button>
              <button className="btn btn-outline-primary">Download Brochure PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PRICING SECTION ---------------- */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Pricing</h2>
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Partner Type</th>
                  <th>Setup Cost</th>
                  <th>Renewal</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Retailer", "₹5,999/-", "₹1,499/-", "Basic Kit + Panel"],
                  ["Distributor", "₹19,999/-", "₹4,999/-", "Multi Retailer Onboarding"],
                  ["Master Distributor", "₹39,999/-", "₹9,999/-", "Manage Distributors & Retailers"],
                  ["Admin Panel", "Custom", "As per usage", "Advanced Monitoring"],
                  ["B2B API Access", "Starts ₹49,999/-", "As per volume", "API + SaaS hosting"],
                  ["White Label", "₹99,999/-", "₹24,999/-", "Complete Brand Setup + Full Control"],
                  ["Combo Plan", "₹1,49,999/-", "₹39,999/-", "Fintech + SaaS + Suite – All-in-One Solution"]
                ].map((r, i) => (
                  <tr key={i}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-dark text-light text-center py-4">
        <p className="mb-0">
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default IndokonaFintechPage;
