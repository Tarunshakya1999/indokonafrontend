import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBolt,
  FaChartLine,
  FaUsers,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";
import "./index.css";

const IndokonaFintechPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const faqData = [
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
    {
      q: "What is the Training + Automation Add-on?",
      a: "This is a separate paid package to help scale your business using AI, CRM, and digital marketing automation.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center flex-column">
        <div data-aos="fade-up">
          <h1>🚀 Start, Build & Scale Your Fintech Business</h1>
          <p>
            From Retailer to White Label — Indokona Fintech brings technology,
            automation, and training to help you create a scalable fintech
            empire.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-light btn-animate">Become a Partner</button>
            <button className="btn btn-outline-light btn-animate">
              Download Brochure
            </button>
            <button className="btn btn-primary btn-animate">Request Demo</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container text-center">
          <h2 data-aos="fade-up">About Indokona Fintech</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-3">
            Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and
            scalable fintech platform empowering entrepreneurs to start at any
            level—Retailer, Distributor, Master Distributor, Admin, B2B, or
            White Label.
          </p>

          <div className="row mt-4">
            {[
              "Auto-Generated Authorization Letter",
              "Verified Digital Certificate",
              "Super Branding Kit (MRP ₹11,999 FREE)",
            ].map((text, i) => (
              <div
                className="col-md-4 mb-3"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="info-card glass-card p-4">
                  <FaCheckCircle className="text-success fs-2 mb-2" />
                  <h6>{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Plans */}
      <section className="py-5" id="plans">
        <div className="container text-center">
          <h2 data-aos="fade-up">Partnership Plans</h2>
          <div className="row mt-4">
            {[
              { icon: <FaUsers />, title: "Retailer Plan" },
              { icon: <FaChartLine />, title: "Distributor Plan" },
              { icon: <FaBuilding />, title: "Master Distributor" },
              { icon: <FaBolt />, title: "White Label" },
            ].map((plan, i) => (
              <div
                className="col-md-3"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="plan-card glass-card p-4">
                  <div className="icon mb-3 fs-1 text-primary">{plan.icon}</div>
                  <h5>{plan.title}</h5>
                  <p>Grow your fintech business step by step with Indokona.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-5 bg-light" id="pricing">
        <div className="container">
          <h2 className="text-center" data-aos="fade-up">
            Pricing & Plans
          </h2>
          <div className="table-responsive mt-4" data-aos="fade-up">
            <table className="table table-bordered align-middle text-center glass-card">
              <thead className="table-dark">
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

      {/* FAQ Section */}
      <section className="py-5" id="faq">
        <div className="container">
          <h3 className="text-center" data-aos="fade-up">
            Frequently Asked Questions
          </h3>
          <div className="accordion mt-4" id="faqAccordion">
            {faqData.map((item, i) => (
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
                    aria-expanded={i === 0}
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

      {/* CTA Section */}
      <section className="cta-section text-center text-white py-5">
        <div className="container" data-aos="zoom-in">
          <h2>🌐 Ready to start your fintech journey?</h2>
          <p>Join Indokona Fintech today and scale your fintech business.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-light btn-animate">Become a Partner</button>
            <button className="btn btn-outline-light btn-animate">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-3">
        <p>© 2025 Indokona Fintech | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default IndokonaFintechPage;
