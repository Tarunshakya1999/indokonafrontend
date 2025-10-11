import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const IndokonaFintechPage = () => {
  return (
    <div className="container-fluid p-0">

      {/* 1️⃣ Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Indokona Fintech</h1>
          <p className="lead">
            Start, Build & Scale Your Fintech Business – From Retailer to White Label
          </p>
          <p>
            Indokona Fintech brings you technology, automation, training, and tools
            to create not just a brand, but a scalable fintech empire.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-warning">Become a Partner Now</button>
            <button className="btn btn-outline-light">Download Brochure PDF</button>
            <button className="btn btn-primary">Request Free Demo</button>
          </div>
          <div className="mt-5">
            <img src="hero-visual.png" alt="Dashboard Mockup" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      {/* 2️⃣ About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Indokona</h2>
          <p className="text-center">
            Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and scalable fintech platform.
            We empower entrepreneurs to start at any level — Retailer, Distributor, Master Distributor,
            Admin, B2B, or White Label — and grow their network with ease.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Auto-Generated Authorization Letter</li>
            <li className="list-group-item">✅ Verified Digital Certificate</li>
            <li className="list-group-item">✅ Unique Digital ID Card (with QR + Hologram)</li>
            <li className="list-group-item">
              ✅ Super Branding Kit (MRP ₹11,999 FREE) – Includes Brand T-Shirt, Cap, Certificate,
              ID Card, Banner, Posters, Visiting Card, Social Media Creatives
            </li>
          </ul>
          <div className="text-center mt-4">
            <img src="about-image.png" alt="About Indokona" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      {/* 3️⃣ Partnership Plans */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Partnership Plans</h2>
          <div className="row g-4">
            {[
              "Retailer Plan",
              "Distributor Plan",
              "Master Distributor Plan",
              "Admin Panel",
              "B2B Fintech Solutions",
              "White Label Plan",
            ].map((plan, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-lg border-0">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{plan}</h5>
                    <p className="card-text">Get full details, demo access, and pricing on call.</p>
                    <img
                      src={`plan-${index + 1}.png`}
                      alt={plan}
                      className="img-fluid rounded mb-3"
                    />
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <a href="#" className="btn btn-primary btn-sm">Demo</a>
                      <a href="#" className="btn btn-outline-secondary btn-sm">Download PDF</a>
                      <a href="#" className="btn btn-warning btn-sm">Contact Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Training + Automation */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Training + Automation Tools</h2>
          <p>
            🌟 Don’t Just Build a Brand – Learn How to Scale It! Indokona provides not just a White Label Platform, but also:
          </p>
          <ul className="list-unstyled">
            <li>✅ Marketing Training Programs</li>
            <li>✅ Full Automation Tools – AI-driven CRM, Auto-Scheduler, SEO, Social Media Automation</li>
          </ul>
          <p className="fw-bold">
            💰 Note: This package is separate from White Label cost.
          </p>
          <img src="training.png" alt="Training" className="img-fluid mt-3" />
        </div>
      </section>

      {/* 5️⃣ Legal & Compliance */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Legal & Compliance</h2>
          <ul>
            <li>• Indokona is a Technology Service Provider only.</li>
            <li>• Transactions are processed via Authorized Banks, NBFCs & Insurance Partners.</li>
            <li>• We follow RBI, NPCI, UIDAI & IT Act 2000 guidelines.</li>
            <li>• All Authorization Documents are for business representation.</li>
          </ul>
        </div>
      </section>

      {/* 6️⃣ CTA Section */}
      <section className="text-center py-5 bg-dark text-white">
        <h2>Ready to start your fintech journey?</h2>
        <p>👉 Become a Partner Today and grow with Indokona Fintech.</p>
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <button className="btn btn-warning">Become a Partner</button>
          <button className="btn btn-outline-light">Request Demo</button>
          <button className="btn btn-primary">Download Brochure</button>
        </div>
      </section>

      {/* 7️⃣ Footer */}
      <footer className="bg-secondary text-white text-center py-3">
        <p className="mb-0">© 2025 Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved.</p>
      </footer>

      {/* 8️⃣ Pricing Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Pricing Plans</h2>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Partner Type</th>
                <th>One-Time Setup Cost</th>
                <th>Renewal (Yearly)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Retailer", "On Call", "On Deal", "Basic Kit + Panel"],
                ["Distributor", "On Call", "On Deal", "Multi Retailer Onboarding"],
                ["Master Distributor", "On Call", "On Deal", "Manage Distributors & Retailers"],
                ["Admin Panel", "Custom", "On Deal", "Includes advanced monitoring"],
                ["B2B API Access", "On Call", "As per Volume", "API + SaaS hosting"],
                ["White Label", "On Call", "On Deal", "Complete Brand Setup + Full Control"],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9️⃣ Comparison Chart */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Comparison Chart</h2>
          <img src="comparison-chart.png" alt="Comparison" className="img-fluid mx-auto d-block" />
        </div>
      </section>

      {/* 🔟 Testimonials */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Success Stories / Testimonials</h2>
          <blockquote className="blockquote mt-4">
            “I started as a Retailer with Indokona and within 6 months scaled up to Distributor level.”
            <footer className="blockquote-footer mt-2">Rahul Verma, Distributor Partner</footer>
          </blockquote>
          <blockquote className="blockquote mt-4">
            “White Label solution from Indokona gave me my own brand identity and 4x growth.”
            <footer className="blockquote-footer mt-2">Neha Sharma, White Label Owner</footer>
          </blockquote>
        </div>
      </section>

      {/* 1️⃣1️⃣ FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {[
              ["Is Indokona Fintech approved by RBI?", "Indokona is a Technology Service Provider. Transactions via RBI-authorized partners."],
              ["How much can I earn?", "Retailers earn ₹8–₹25 per transaction, distributors earn extra commissions."],
              ["What documents are required?", "Aadhaar, PAN, 2 Photos, and Address Proof."],
              ["What is the Super Branding Kit?", "A marketing kit worth ₹11,999 FREE (T-Shirt, Cap, Banner, Creatives)."],
              ["What is the Training + Automation Add-on?", "A separate package for AI-based CRM & marketing automation tools."],
            ].map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                    aria-expanded="false"
                    aria-controls={`faq${index}`}
                  >
                    {faq[0]}
                  </button>
                </h2>
                <div
                  id={`faq${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1️⃣2️⃣ Trust & Compliance Badges */}
      <section className="py-5 text-center">
        <h2>Trust & Compliance</h2>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
          <span className="badge bg-success">✔ Registered Pvt. Ltd. Company</span>
          <span className="badge bg-primary">✔ ISO Standard IT Practices</span>
          <span className="badge bg-info">✔ Secure SSL Data Encryption</span>
          <span className="badge bg-warning">✔ RBI/NPCI/UIDAI Guidelines Compliant</span>
        </div>
      </section>

    </div>
  );
};

export default IndokonaFintechPage;
