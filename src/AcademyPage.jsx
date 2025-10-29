import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * AcademyPage.jsx
 * - Uses Bootstrap for layout & styling
 * - Initializes AOS with once: false
 * - Shows sequential fake purchase popups (toasts)
 */

const fakePurchases = [
  {
    name: "Ravi",
    city: "Pune",
    course: "Entrepreneurship & Business Launch Program",
  },
  {
    name: "Priya",
    city: "Lucknow",
    course: "Digital Marketing & Branding Mastery",
  },
  {
    name: "Amit",
    city: "Delhi",
    course: "AI Tools & Automation Skill Program",
  },
  {
    name: "Neha",
    city: "Mumbai",
    course: "Content Creation & Social Media Monetization",
  },
];

const AcademyPage = () => {
  const [toasts, setToasts] = useState([]);
  const toastIndex = useRef(0);
  const toastTimer = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
    });

    // Start showing fake popups one by one
    toastTimer.current = setInterval(() => {
      if (toastIndex.current >= fakePurchases.length) {
        // restart cycle after a short pause (optional)
        toastIndex.current = 0;
      }
      const next = fakePurchases[toastIndex.current];
      showToast(next);
      toastIndex.current += 1;
    }, 10000); // every 10s show a new toast

    return () => {
      clearInterval(toastTimer.current);
    };
  }, []);

  const showToast = (data) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, ...data }]);
    // auto remove after 3.6s
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 4600);
  };

  const closeToast = (id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  };

  return (
    <div
      style={{ background: "#f5f7fb", minHeight: "100vh", paddingBottom: 80 }}
    >
      {/* Hero */}
      <section
        className="container py-5"
        style={{
          transform: "translateZ(0)",
        }}
      >
        <div className="row align-items-center g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className="card border-0 rounded-4 shadow-lg p-4"
              style={{ background: "linear-gradient(135deg,#ffffff,#f9fbff)" }}
            >
              <h1 className="display-5 fw-bold text-primary">
                🌐 Indokona Idea to Empire Academy
              </h1>
              <p className="lead text-muted mb-3">
                <strong>💡 Transforming Every Idea into a Real Empire</strong>
                <br />
                Powered by Indokona Credit Bazar Pvt. Ltd.
              </p>

              <p className="mb-3">
                Indokona Idea to Empire Academy एक visionary educational और
                business development initiative है — जिसका उद्देश्य भारत के
                युवाओं, महिलाओं और professionals को digital age में self-made
                entrepreneur बनाना है।
              </p>

              <a href="#programs" className="btn btn-primary rounded-pill me-3">
                Explore Programs
              </a>
              <a
                href="#contact"
                className="btn btn-outline-primary rounded-pill"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div
              className="rounded-4 overflow-hidden shadow-lg"
              style={{ background: "#0d6efd", color: "#fff", padding: 28 }}
            >
              <h4 className="fw-bold">Why join Indokona Academy?</h4>
              <ul className="list-unstyled mt-3">
                <li>⭐ Trusted Division of Indokona Credit Bazar Pvt. Ltd.</li>
                <li>⭐ 24x7 Mentor Support & Lifetime Learning Access</li>
                <li>⭐ Real Projects — Learn & Earn Model</li>
                <li>⭐ Affordable & Practical Courses</li>
              </ul>
              <div className="mt-3">
                <small className="d-block">
                  📞 Helpline:{" "}
                  <a
                    href="tel:+919625995155"
                    className="text-decoration-none fw-bold text-light"
                    aria-label="Call helpline +91 96259 95155"
                  >
                    +91-96259-95155
                  </a>
                </small>

                <small>📧 indokonaoutsourcing@gmail.com</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Mission */}
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="card rounded-4 p-4 shadow-sm">
              <h3 className="fw-bold">
                🎯 About the Academy / अकादमी के बारे में
              </h3>
              <p>
                Indokona Idea to Empire Academy एक visionary educational और
                business development initiative है — जहाँ हर व्यक्ति अपने idea,
                passion और skill को एक successful empire में बदल सकता है.
              </p>

              <blockquote className="blockquote ps-3 border-start border-3 border-primary">
                “हर विचार में साम्राज्य बनने की क्षमता है — बस सही मार्गदर्शन और
                मंच चाहिए।”
              </blockquote>

              <h5 className="mt-4">🧭 Our Mission / हमारा मिशन</h5>
              <p>
                हमारा उद्देश्य है भारत में 1 लाख+ युवाओं को modern business,
                digital tools और creative strategies की training देकर
                financially independent बनाना।
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in">
            <div className="card rounded-4 p-4 shadow-sm text-center">
              <h5 className="fw-bold">🏆 Highlights</h5>
              <p className="mb-1">🟢 Lifetime Access</p>
              <p className="mb-1">🟢 Mentor Support</p>
              <p className="mb-1">🟢 Business Tools Included</p>
              <a
                href="#programs"
                className="btn btn-outline-primary mt-3 rounded-pill"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="container mb-5">
        <h3 className="fw-bold mb-4" data-aos="fade-up">
          🚀 Our Core Programs / हमारे प्रमुख कोर्स
        </h3>
        <div className="row g-4">
          {[
            {
              title: "Entrepreneurship & Business Launch Program",
              desc: "Idea validation, business planning और legal setup guidance",
            },
            {
              title: "Digital Marketing & Branding Mastery",
              desc: "अपने brand को build, promote और monetize करना सीखें",
            },
            {
              title: "AI Tools & Automation Skill Program",
              desc: "Artificial Intelligence का इस्तेमाल कर future-ready बनें",
            },
            {
              title: "Content Creation & Social Media Monetization",
              desc: "YouTube, Instagram और Facebook से कमाई करना सीखें",
            },
            {
              title: "Startup & Freelance Mentorship",
              desc: "Zero investment से online business grow करने की पूरी roadmap",
            },
            {
              title: "Certificate & Professional Courses",
              desc: "Entrepreneurship, Business Communication, और Marketing में प्रमाणित कोर्सेज",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={i * 120}
            >
              <div className="card h-100 rounded-4 shadow-sm p-3">
                <div className="card-body">
                  <h6 className="fw-bold">{p.title}</h6>
                  <p className="text-muted small">{p.desc}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <button className="btn btn-sm btn-primary rounded-pill w-100">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose / Who can join */}
      <section className="container mb-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <div className="card rounded-4 p-4 shadow-sm mb-4">
              <h5 className="fw-bold">🏆 Why Choose Indokona Academy</h5>
              <ul className="mb-0">
                <li>Trusted Division of Indokona Credit Bazar Pvt. Ltd.</li>
                <li>24x7 Mentor Support & Lifetime Learning Access</li>
                <li>Affordable, Practical & Result-Oriented Courses</li>
                <li>Business Tools + Digital Marketing Kit Included</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card rounded-4 p-4 shadow-sm mb-4">
              <h5 className="fw-bold">👨‍🎓 Who Can Join</h5>
              <ul className="mb-0">
                <li>Students looking for digital income sources</li>
                <li>Housewives & freelancers who want to work from home</li>
                <li>Business owners seeking online growth</li>
                <li>Anyone who wants to start their brand or company</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mb-5">
        <h3 className="fw-bold mb-4" data-aos="fade-up">
          💬 Testimonials
        </h3>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card rounded-4 p-4 shadow-sm">
              <p className="mb-1">
                “Indokona Academy ने मुझे freelancing से ₹50,000 महीना कमाना
                सिखाया — बेहद practical training।”
              </p>
              <small className="text-muted">— S. Khan, Lucknow</small>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card rounded-4 p-4 shadow-sm">
              <p className="mb-1">
                “मेरे YouTube channel को 3 महीने में monetize कराने में Indokona
                की guidance ने बहुत मदद की।”
              </p>
              <small className="text-muted">— A. Sharma, Delhi</small>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section id="contact" className="container mb-5" data-aos="fade-up">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card rounded-4 p-4 shadow-sm">
              <h5 className="fw-bold">📞 Contact Details</h5>
              <p className="mb-1">
                Website:{" "}
                <a
                  href="https://www.indokona.com/academy"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.indokona.com/academy
                </a>
              </p>
              <p className="mb-1">Email: indokonaoutsourcing@gmail.com</p>
              <p className="mb-1">Helpline: +91-9625995155</p>
              <p className="mb-0">
                Head Office: Ismailpur, Faridabad, Haryana – 121003
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card rounded-4 p-4 shadow-sm">
              <h5 className="fw-bold">📜 FAQs</h5>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Q1. Course Duration कितना होता है?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Programs 4 से 12 सप्ताह; कुछ advanced certifications 3-6
                      महीने तक।
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      Q2. Certificate कैसे मिलेगा?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Course पूरा करने पर digital certificate और project
                      verification दिया जाएगा।
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Q3. क्या courses online हैं?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      हाँ — सभी courses 100% online हैं, mobile और laptop दोनों
                      से access किए जा सकते हैं।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4">
        <div className="container text-center text-muted small">
          <div>
            © {new Date().getFullYear()} Indokona Idea to Empire Academy |
            Powered by Indokona Credit Bazar Pvt. Ltd.
          </div>
          <div>
            Tagline: “Learn. Build. Lead. — Transform Your Idea into an Empire
            with Indokona Academy.”
          </div>
        </div>
      </footer>

      {/* Toasts / Fake popups container (top-right) */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 2000 }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className="toast show shadow-lg mb-2"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ minWidth: 300, borderRadius: 12, overflow: "hidden" }}
            data-aos="zoom-in"
          >
            <div className="toast-header">
              <strong className="me-auto">🌐 Indokona Academy</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close ms-2 mb-1"
                onClick={() => closeToast(t.id)}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              <div>
                <strong>{t.name}</strong> purchased Our course from{" "}
                <strong>{t.city}</strong>
              </div>
              <div className="mt-2 small text-muted">Course: {t.course}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Small inline styles for nicer look (optional) */}
      <style jsx>{`
        .card {
          border-radius: 14px !important;
        }
        .toast {
          background: linear-gradient(135deg, #ffffff, #f6fbff);
          border: 1px solid rgba(13, 110, 253, 0.08);
        }
        .btn-primary {
          box-shadow: 0 6px 18px rgba(13, 110, 253, 0.12);
        }
        .accordion-button {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default AcademyPage;
