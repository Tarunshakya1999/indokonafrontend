import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaDownload, FaPlay, FaCheckCircle } from "react-icons/fa";

export default function IndokonaFintechPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="indokona-page">
      {/* HERO / FIRST FOLD */}
      <header className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h1 className="display-5 fw-bold">
                🚀 Start, Build & Scale Your Fintech Business – From Retailer to
                White Label
              </h1>
              <p className="lead mt-3">
                Indokona Fintech brings you technology, automation, training,
                and tools to create not just a brand, but a scalable fintech
                empire.
              </p>

              <div className="d-flex gap-2 flex-wrap mt-4">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://forms.gle/Xq4twuUwDPbEhCwt8"
                >
                  Become a Partner Now
                </a>
                <a
                  className="btn btn-outline-secondary btn-lg"
                  href="/brochure.pdf"
                  download
                >
                  <FaDownload style={{ marginRight: 8 }} /> Download Brochure
                  PDF
                </a>
                <a
                  className="btn btn-outline-primary btn-lg"
                  href="https://forms.gle/qBnTqrLvheNZJ2hC6"
                >
                  <FaPlay style={{ marginRight: 8 }} /> Request Free Demo
                </a>
              </div>

              <ul className="list-unstyled mt-4">
                <li
                  className="d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FaCheckCircle className="me-2 text-success" /> Auto-Generated
                  Authorization Letter
                </li>
                <li
                  className="d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FaCheckCircle className="me-2 text-success" /> Verified
                  Digital Certificate
                </li>
                <li
                  className="d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaCheckCircle className="me-2 text-success" /> Super Branding
                  Kit (MRP ₹11,999 FREE)
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-center" data-aos="zoom-in">
              {/* Visual area: dashboard mockups + flow */}
              <div className="card shadow-sm p-3">
                <img
                  src={img2}
                  alt="dashboard mockup"
                  className="img-fluid mb-3"
                  style={{ maxHeight: 260 }}
                />
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <div className="badge bg-primary">Retailer →</div>
                  <div className="badge bg-info">Distributor →</div>
                  <div className="badge bg-warning text-dark">
                    Master Distributor →
                  </div>
                  <div className="badge bg-success">White Label</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2>About Indokona</h2>
              <p className="text-muted">
                Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and
                scalable fintech platform. We empower entrepreneurs to start at
                any level—Retailer, Distributor, Master Distributor, Admin, B2B,
                or White Label—and grow their network with ease.
              </p>

              <ul className="list-unstyled">
                <li>
                  <strong>✅ Auto-Generated Authorization Letter</strong>
                </li>
                <li>
                  <strong>✅ Verified Digital Certificate</strong>
                </li>
                <li>
                  <strong>
                    ✅ Unique Digital ID Card (with QR + Hologram)
                  </strong>
                </li>
                <li>
                  <strong>✅ Super Branding Kit (MRP ₹11,999 FREE)</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="card p-3 shadow-sm">
                <h5 className="mb-3">What's in the Super Branding Kit</h5>
                <ul>
                  <li>T-Shirt, Cap, Certificate, ID Card</li>
                  <li>Banner (5×3 ft), 10 Posters (5×2.5 ft)</li>
                  <li>Digital Visiting Card, Social Media Creatives</li>
                </ul>
                <img
                  src="/images/branding-kit.png"
                  alt="branding kit"
                  className="img-fluid mt-3"
                  style={{ maxHeight: 160 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PLANS */}
      <section className="py-5 bg-white" id="plans">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">
            Partnership Plans Explained
          </h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              { title: "Retailer Plan", note: "Basic Kit + Panel" },
              { title: "Distributor Plan", note: "Multi Retailer Onboarding" },
              {
                title: "Master Distributor Plan",
                note: "Manage Distributors & Retailers",
              },
              { title: "Admin Panel", note: "Advanced Monitoring" },
              { title: "B2B Fintech Solutions", note: "API + Hosting" },
              { title: "White Label Plan", note: "Complete Brand Setup" },
            ].map((p, i) => (
              <div
                className="col"
                key={p.title}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{p.title} ✅</h5>
                    <p className="card-text text-muted">{p.note}</p>
                    <a
                      href="#pricing"
                      className="stretched-link text-decoration-none"
                    >
                      See pricing
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL ADD-ON */}
      <section className="py-5 bg-light" id="addon">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right">
              <h3>Special Add-On (Training + Automation Tools)</h3>
              <p className="text-muted">
                Don’t Just Build a Brand – Learn How to Scale It! Indokona
                provides not just a White Label Platform, but also marketing
                training programs and full automation tools.
              </p>
              <ul>
                <li>✅ Marketing Training Programs</li>
                <li>✅ AI-driven CRM & Auto-Scheduler</li>
                <li>✅ Campaign Management, SEO & Social Automation</li>
              </ul>
              <p className="text-sm">
                Note: This package is separate from White Label cost.
              </p>
            </div>
            <div className="col-md-5" data-aos="fade-left">
              <div className="ratio ratio-16x9">
                <iframe
                  title="automation-demo"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL & COMPLIANCE */}
      <section className="py-5" id="legal">
        <div className="container">
          <h4 data-aos="fade-up">Legal & Compliance</h4>
          <ul>
            <li>Indokona is a Technology Service Provider only.</li>
            <li>
              Transactions are processed via Authorized Banks, NBFCs & Insurance
              Partners.
            </li>
            <li>We follow RBI, NPCI, UIDAI & IT Act 2000 guidelines.</li>
            <li>
              All Authorization Documents are for business representation.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-5 bg-primary text-white text-center" id="partner">
        <div className="container" data-aos="zoom-in">
          <h2>Ready to start your fintech journey?</h2>
          <p>👉 Become a Partner Today and grow with Indokona Fintech.</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <a
              className="btn btn-light btn-lg"
              href="https://forms.gle/Xq4twuUwDPbEhCwt8   "
            >
              Become a Partner
            </a>
            <a
              className="btn btn-outline-light btn-lg"
              href="https://forms.gle/qBnTqrLvheNZJ2hC6"
            >
              Request Demo
            </a>
            <a
              className="btn btn-outline-light btn-lg"
              href="/brochure.pdf"
              download
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-5" id="pricing">
        <div className="container">
          <h3 data-aos="fade-up">Pricing</h3>
          <div
            className="table-responsive"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <table className="table table-bordered mt-3">
              <thead className="table-light">
                <tr>
                  <th>Partner Type</th>
                  <th>One-Time Setup Cost</th>
                  <th>Renewal (Yearly)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Retailer</td>
                  <td>₹5,999/-</td>
                  <td>₹1,499/-</td>
                  <td>Basic Kit + Panel</td>
                </tr>
                <tr>
                  <td>Distributor</td>
                  <td>₹19,999/-</td>
                  <td>₹4,999/-</td>
                  <td>Multi Retailer Onboarding</td>
                </tr>
                <tr>
                  <td>Master Distributor</td>
                  <td>₹39,999/-</td>
                  <td>₹9,999/-</td>
                  <td>Manage Distributors & Retailers</td>
                </tr>
                <tr>
                  <td>Admin Panel</td>
                  <td>Custom Pricing</td>
                  <td>As per usage</td>
                  <td>Includes advanced monitoring</td>
                </tr>
                <tr>
                  <td>B2B API Access</td>
                  <td>Starts ₹49,999/-</td>
                  <td>As per volume</td>
                  <td>API + SaaS hosting</td>
                </tr>
                <tr>
                  <td>White Label</td>
                  <td>₹99,999/-</td>
                  <td>₹24,999/-</td>
                  <td>Complete Brand Setup + Full Control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPARISON CHART */}
      <section className="py-5 bg-white" id="compare">
        <div className="container">
          <h3 data-aos="fade-up">Comparison Chart</h3>
          <div
            className="table-responsive"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Feature / Plan</th>
                  <th>Retailer</th>
                  <th>Distributor</th>
                  <th>Master Distributor</th>
                  <th>Admin Panel</th>
                  <th>B2B</th>
                  <th>White Label</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct Transactions</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Onboard Retailers</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Onboard Distributors</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Control Over Commission</td>
                  <td>❌</td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Full</td>
                  <td>Full</td>
                  <td>Full</td>
                </tr>
                <tr>
                  <td>Branding & Domain</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Automation Tools Add-on</td>
                  <td>Optional</td>
                  <td>Optional</td>
                  <td>Optional</td>
                  <td>Optional</td>
                  <td>Optional</td>
                  <td>Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5 bg-light" id="testimonials">
        <div className="container">
          <h3 data-aos="fade-up">Success Stories</h3>
          <div className="row g-4 mt-3">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card p-3 h-100">
                <blockquote className="blockquote mb-0">
                  <p>
                    “I started as a Retailer with Indokona and within 6 months
                    scaled up to Distributor level. The authorization and
                    branding kit helped me gain trust in my market.”
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Rahul Verma, Distributor Partner
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="card p-3 h-100">
                <blockquote className="blockquote mb-0">
                  <p>
                    “White Label solution from Indokona gave me my own brand
                    identity. With training + automation toolkit, I grew my
                    fintech business 4x in 1 year.”
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Neha Sharma, White Label Owner
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5" id="faq">
        <div className="container">
          <h3 className="mb-4 text-center" data-aos="fade-up">
            Frequently Asked Questions
          </h3>

          <div className="accordion" id="faqAccordion">
            {[
              {
                q: "Is Indokona Fintech approved by RBI?",
                a: "Indokona is a Technology Service Provider. All transactions are processed via RBI-authorized Banks, NBFCs & Insurance Partners.",
              },
              {
                q: "How much can I earn as a Retailer or Distributor?",
                a: "Retailers earn ₹8–₹25 per transaction, Distributors & Master Distributors earn extra override commissions. Earnings depend on your network size.",
              },
              {
                q: "What documents are required?",
                a: "Aadhaar, PAN, 2 Photos, and Address Proof. For White Label, company documents may be required.",
              },
              {
                q: "What is the Super Branding Kit?",
                a: "A full marketing kit worth ₹11,999 FREE (T-Shirt, Cap, ID, Banner, Posters, Visiting Card, Digital Creatives).",
              },
            ].map((item, i) => (
              <div
                className="accordion-item"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded={i === 0 ? "true" : "false"}
                    aria-controls={`collapse${i}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${
                    i === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TRUST BADGES & FOOTER */}
      <footer className="py-5 bg-dark text-white" id="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8" data-aos="fade-up">
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <div>✔ Registered Pvt. Ltd. Company</div>
                <div>✔ ISO Standard IT Practices</div>
                <div>✔ Secure SSL Data Encryption</div>
                <div>✔ RBI/NPCI/UIDAI Guidelines Compliant</div>
              </div>
              <p className="mt-3 small">
                © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. —
                All rights reserved.
              </p>
            </div>
            <div className="col-md-4 text-md-end" data-aos="fade-left">
              <a className="btn btn-outline-light btn-sm me-2" href="#contact">
                Contact
              </a>
              <a className="btn btn-outline-light btn-sm" href="#privacy">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
Usage notes:
1) Place this file as IndokonaFintechPage.jsx inside your React app (e.g. src/components/).
2) Install dependencies: npm install aos bootstrap react-icons.
3) Ensure your app loads Bootstrap JS (for Accordion) by adding in index.html or importing bootstrap bundle in index.js:
   import 'bootstrap/dist/js/bootstrap.bundle.min';
4) Add images and brochure.pdf into your public folder or update src paths.
5) The AOS is initialized with once:true as requested, and animation durations are set globally in AOS.init.
*/
