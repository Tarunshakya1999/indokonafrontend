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
                🚀 Start, Build & Scale Your Fintech Business – From Retailer to White Label
              </h1>
              <p className="lead mt-3">
                Indokona Fintech brings you technology, automation, training, and tools to create not just a brand, but a scalable fintech empire.
              </p>

              <div className="d-flex gap-2 flex-wrap mt-4">
                <a className="btn btn-primary btn-lg" href="https://forms.gle/Xq4twuUwDPbEhCwt8">
                  Become a Partner Now
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="/brochure.pdf" download>
                  <FaDownload style={{ marginRight: 8 }} /> Download Brochure PDF
                </a>
                <a className="btn btn-outline-primary btn-lg" href="https://forms.gle/qBnTqrLvheNZJ2hC6">
                  <FaPlay style={{ marginRight: 8 }} /> Request Free Demo
                </a>
              </div>

              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <FaCheckCircle className="me-2 text-success" /> Auto-Generated Authorization Letter
                </li>
                <li className="d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <FaCheckCircle className="me-2 text-success" /> Verified Digital Certificate
                </li>
                <li className="d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <FaCheckCircle className="me-2 text-success" /> Super Branding Kit (MRP ₹11,999 FREE)
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-center" data-aos="zoom-in">
              <div className="card shadow-sm p-3">
                <img
                  src="/images/dashboard-mockup-1.png"
                  alt="dashboard mockup"
                  className="img-fluid mb-3"
                  style={{ maxHeight: 260 }}
                />
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <div className="badge bg-primary">Retailer →</div>
                  <div className="badge bg-info">Distributor →</div>
                  <div className="badge bg-warning text-dark">Master Distributor →</div>
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
                Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and scalable fintech platform. We empower entrepreneurs to start at any level—Retailer, Distributor, Master Distributor, Admin, B2B, or White Label—and grow their network with ease.
              </p>
              <ul className="list-unstyled">
                <li><strong>✅ Auto-Generated Authorization Letter</strong></li>
                <li><strong>✅ Verified Digital Certificate</strong></li>
                <li><strong>✅ Unique Digital ID Card (with QR + Hologram)</strong></li>
                <li><strong>✅ Super Branding Kit (MRP ₹11,999 FREE)</strong></li>
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

      {/* FAQ FIXED SECTION */}
      <section className="py-5" id="faq">
        <div className="container">
          <h3 data-aos="fade-up">Frequently Asked Questions</h3>
          <div className="accordion mt-3" id="faqAccordion">
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
                data-aos-delay={i * 80}
              >
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded={i === 0}
                    aria-controls={`collapse${i}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
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

      {/* FOOTER */}
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
                © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. — All rights reserved.
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
