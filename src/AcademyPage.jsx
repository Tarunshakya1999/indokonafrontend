import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

// --- Custom Corporate Color Palette ---
const PrimaryDark = "#052c65"; // Deep Navy Blue (Corporate Trust)
const AccentGold = "#ffc107"; // Gold/Orange (Empire/Premium Feel)
const LightGray = "#f8f9fa"; // Minimalist background


const fakePurchases = [
  {
    name: "Ravi K.",
    city: "Pune",
    course: "Entrepreneurship & Business Launch Program",
  },
  {
    name: "Priya S.",
    city: "Lucknow",
    course: "Digital Marketing & Branding Mastery",
  },
  {
    name: "Amit V.",
    city: "Delhi",
    course: "AI Tools & Automation Skill Program",
  },
  {
    name: "Neha T.",
    city: "Mumbai",
    course: "Content Creation & Social Media Monetization",
  },

  {
    name: "Sonali Shakya",
    city: "Farrukabad",
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
      duration: 800,
      easing: "ease-in-out-quad",
      once: false,
      mirror: true,
    });

    // Start showing fake popups one by one
    toastTimer.current = setInterval(() => {
      if (toastIndex.current >= fakePurchases.length) {
        toastIndex.current = 0;
      }
      const next = fakePurchases[toastIndex.current];
      showToast(next);
      toastIndex.current += 1;
    }, 12000); // Increased interval for professional feel

    return () => {
      clearInterval(toastTimer.current);
    };
  }, []);

  const showToast = (data) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, ...data }]);
    // auto remove after 5s
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 5000);
  };

  const closeToast = (id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  };

  return (
    <div
      style={{ background: LightGray, minHeight: "100vh", paddingBottom: 80 }}
    >
      {/* --- Hero Section (Premium Look) --- */}
      <section
        className="container-fluid py-5"
        style={{
          background: `linear-gradient(135deg, ${PrimaryDark}, #1a498a)`,
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <h1
                className="display-4 fw-bolder mb-3"
                style={{ color: AccentGold }}
              >
                Indokona Idea to Empire Academy
              </h1>
              <p className="lead text-light mb-4 opacity-75">
                **💡 Corporate Blueprint for Digital Leadership**
                <br />
                **A Premier Educational Division of Indokona Credit Bazar Pvt.
                Ltd.**
              </p>

              <p className="mb-4 fs-6 text-light opacity-90">
                **हमारा संकल्प:** हर उद्यमी विचार को एक संगठित, लाभदायक और
                डिजिटल रूप से मजबूत साम्राज्य में बदलना। हम भारत के
                महत्वाकांक्षी प्रोफेशनल्स को विश्व-स्तरीय **डिजिटल टूल्स और
                बिज़नेस स्ट्रेटेजी** में प्रशिक्षित करते हैं।
              </p>

              <div className="mt-4">
                <a
                  href="#programs"
                  className="btn btn-warning btn-lg rounded-pill me-3 fw-bold shadow-lg"
                >
                  View Executive Programs
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg rounded-pill"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              {/* Value Box */}
              <div
                className="rounded-4 overflow-hidden shadow-xl p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: `1px solid ${AccentGold}`,
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: AccentGold }}>
                  Core Pillars of Success
                </h4>
                <ul className="list-unstyled mt-3 fs-6">
                  <li className="mb-2">✔️ **Lifetime** Strategic Mentorship</li>
                  <li className="mb-2">
                    ✔️ Certified **Industry Expertise** Modules
                  </li>
                  <li className="mb-2">✔️ **Real-World** Capstone Projects</li>
                  <li className="mb-2">
                    ✔️ Access to **Exclusive** Business Tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      // Assume PrimaryDark (#052c65) and AccentGold (#ffc107) are defined in
      the scope
      {/* --- About & Corporate Vision (Enhanced & English) --- */}
      <section className="container py-5 mb-5">
        <div className="row g-5">
          <div className="col-lg-12" data-aos="fade-up">
            {/* Enhanced Card Styling with subtle gradient for a premium look */}
            <div
              className="card rounded-5 p-5 shadow-xl border-0"
              style={{
                background: `linear-gradient(135deg, #ffffff, #f0f4f8)`, // Light gradient background
                border: `1px solid ${PrimaryDark}10`, // Very subtle border
              }}
            >
              <h2
                className="fw-bolder mb-3 display-6"
                style={{ color: PrimaryDark }}
              >
                🎯 Our Vision: Empowering the Digital Entrepreneur
              </h2>

              {/* Main Vision Statement */}
              <p
                className="lead text-dark mb-4 fst-italic border-start border-4 ps-3"
                style={{ borderColor: AccentGold }}
              >
                Indokona Academy is a platform for **Business and Educational
                Excellence**. Our objective is not just to teach, but to build a
                new generation of **strong and self-reliant entrepreneurs** who
                can establish their dominance in the digital economy.
              </p>

              <div className="row mt-5 pt-3 border-top border-light">
                {/* Strategic Mission Card */}
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: `${PrimaryDark}05`,
                      border: `1px solid ${PrimaryDark}15`,
                    }}
                  >
                    <h5 className="fw-bold mb-3" style={{ color: AccentGold }}>
                      <span className="me-2 fs-4">🧭</span> Strategic Mission
                    </h5>
                    <p className="text-secondary">
                      Our goal is to train **1,00,000+ Indian youth, small
                      business owners, and professionals** in **cutting-edge AI,
                      digital marketing, and sustainable business** models,
                      making them **Financially Independent** global
                      competitors.
                    </p>
                  </div>
                </div>

                {/* Impact & Growth Card */}
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: `${PrimaryDark}05`,
                      border: `1px solid ${PrimaryDark}15`,
                    }}
                  >
                    <h5 className="fw-bold mb-3" style={{ color: AccentGold }}>
                      <span className="me-2 fs-4">📈</span> Impact & Growth
                      Strategy
                    </h5>
                    <p className="text-secondary">
                      Our program extends from **Idea Validation** to **Legal
                      Structuring** and **Revenue Scaling**, ensuring you gain a
                      comprehensive understanding of running a successful and
                      **Corporate-Ready** business from the ground up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Core Programs / Executive Courses --- */}
      <section id="programs" className="container mb-5">
        <h2
          className="fw-bolder mb-5 text-center"
          style={{ color: PrimaryDark }}
          data-aos="fade-up"
        >
          🚀 Executive Education Programs
        </h2>
        <div className="row g-4">
          {[
            {
              title: "Strategic Business Launch & Corporate Structuring",
              desc: "Idea to Registered Entity: Business planning, legal compliance, and fundraising strategies.",
              icon: "🏢",
            },
            {
              title: "Advanced Digital Marketing & Performance Branding",
              desc: "Data-driven marketing, SEO, PPC, and building an authoritative online corporate brand.",
              icon: "📊",
            },
            {
              title: "AI & Business Process Automation Mastery",
              desc: "Leveraging Artificial Intelligence tools for efficiency, productivity, and market analysis.",
              icon: "⚙️",
            },
            {
              title: "High-Value Content & Social Commerce Monetization",
              desc: "Developing professional video/written content and converting social media presence into direct revenue streams.",
              icon: "💰",
            },
            {
              title: "Certified Financial Modeling for Startups",
              desc: "Budgeting, financial forecasting, investment pitch preparation, and wealth management basics.",
              icon: "💼",
            },
            {
              title: "Leadership & Professional Communication",
              desc: "Enhancing corporate communication, negotiation skills, and team management for scalability.",
              icon: "👨‍🏫",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            >
              <div
                className="card h-100 rounded-4 p-4 shadow-lg border-top border-4"
                style={{
                  borderColor: AccentGold,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <div className="card-body">
                  <h4 className="mb-3" style={{ color: PrimaryDark }}>
                    {p.icon}
                  </h4>
                  <h5 className="fw-bold" style={{ color: PrimaryDark }}>
                    {p.title}
                  </h5>
                  <p className="text-secondary small mt-3">{p.desc}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <button className="btn btn-warning rounded-pill w-100 fw-bold shadow-sm">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- Why Choose Us (Tabular Layout) --- */}
      <section className="container mb-5">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h2
              className="fw-bolder mb-4 text-center"
              style={{ color: PrimaryDark }}
            >
              Why Indokona Academy? The Corporate Edge
            </h2>
            <div className="card rounded-5 shadow-lg p-4 border-0">
              <div className="row g-4 text-center">
                <div className="col-md-3">
                  <h1 style={{ color: AccentGold }}>24/7</h1>
                  <p className="fw-bold text-dark">Dedicated Mentor Support</p>
                </div>
                <div className="col-md-3">
                  <h1 style={{ color: AccentGold }}>100%</h1>
                  <p className="fw-bold text-dark">Practical & Project-Based</p>
                </div>
                <div className="col-md-3">
                  <h1 style={{ color: AccentGold }}>LIFETIME</h1>
                  <p className="fw-bold text-dark">Access to Course Updates</p>
                </div>
                <div className="col-md-3">
                  <h1 style={{ color: AccentGold }}>B. Tools</h1>
                  <p className="fw-bold text-dark">
                    Proprietary Software Access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Testimonials / Success Stories --- */}
      <section className="container mb-5">
        <h3
          className="fw-bolder mb-4 text-center"
          style={{ color: PrimaryDark }}
          data-aos="fade-up"
        >
          🌟 Corporate Success Stories
        </h3>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div
              className="card rounded-4 p-4 shadow-lg border-start border-5"
              style={{ borderColor: AccentGold }}
            >
              <p className="mb-2 fst-italic text-dark">
                **“Indokona Academy की Strategic Mentorship** ने मुझे 3 महीने
                में अपना Freelancing वेंचर **Corporate Firm** में बदलने में मदद
                की, अब ₹1,00,000+ का मासिक रेवेन्यू है।”
              </p>
              <small className="text-muted mt-2 fw-bold">
                — S. Khan, CEO, Digital Leap Services, Lucknow
              </small>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div
              className="card rounded-4 p-4 shadow-lg border-start border-5"
              style={{ borderColor: AccentGold }}
            >
              <p className="mb-2 fst-italic text-dark">
                **“Advanced AI & Automation Program** ने हमारे छोटे बिज़नेस की
                परिचालन क्षमता (Operational Efficiency) को **40%** तक बढ़ा दिया।
                यह ट्रेनिंग हर बिज़नेस ओनर के लिए अनिवार्य है।”
              </p>
              <small className="text-muted mt-2 fw-bold">
                — A. Sharma, Founder, Tech Solutions, Delhi
              </small>
            </div>
          </div>
        </div>
      </section>
      {/* --- Contact & Footer --- */}
      <section id="contact" className="container mb-5" data-aos="fade-up">
        <div className="row g-4">
          <div className="col-lg-6">
            <div
              className="card rounded-4 p-4 shadow-lg h-100"
              style={{ background: LightGray }}
            >
              <h5 className="fw-bold" style={{ color: PrimaryDark }}>
                📞 Corporate Contact Desk
              </h5>
              <p className="mb-1 text-dark fw-bold">
                🌐 Website:{" "}
                <a
                  href="https://www.indokona.com/academy"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: PrimaryDark }}
                >
                  www.indokona.com/academy
                </a>
              </p>
              <p className="mb-1 text-dark fw-bold">
                📧 Email: indokonaoutsourcing@gmail.com
              </p>
              <p className="mb-1 text-dark fw-bold">
                ☎️ Helpline: +91-9625995155 (Monday - Saturday, 10 AM to 6 PM
                IST)
              </p>
              <p className="mb-0 text-muted small">
                📍 Head Office: Corporate Tower, Ismailpur, Faridabad, Haryana –
                121003
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card rounded-4 p-4 shadow-lg h-100">
              <h5 className="fw-bold" style={{ color: PrimaryDark }}>
                📜 Executive FAQs
              </h5>
              <div className="accordion accordion-flush" id="faqAccordion">
                {/* ... FAQs structure remains similar for functionality ... */}
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header" id="faqOne">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      style={{ color: PrimaryDark }}
                    >
                      Q1. Program Enrollment Criteria क्या है?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-secondary">
                      हमारे Executive Programs के लिए न्यूनतम शैक्षिक योग्यता की
                      आवश्यकता नहीं है, लेकिन एक दृढ़ व्यावसायिक दृष्टिकोण
                      (Strong Business Acumen) और सीखने की इच्छा अनिवार्य है।
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header" id="faqTwo">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      style={{ color: PrimaryDark }}
                    >
                      Q2. Program Completion पर Certification क्या होगा?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-secondary">
                      सफल समापन पर आपको **Indokona Credit Bazar Pvt. Ltd. द्वारा
                      प्रमाणित Executive Certification** प्रदान किया जाएगा, जो
                      उद्योग में मान्य है।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="py-4 mt-5"
        style={{ background: PrimaryDark, color: "white" }}
      >
        <div className="container text-center small">
          <div className="mb-1 fw-bold">
            © {new Date().getFullYear()} **Indokona Idea to Empire Academy** |
            Premier Division of Indokona Credit Bazar Pvt. Ltd.
          </div>
          <div className="fw-light opacity-75">
            **Motto**: Build Your Empire. Lead the Future.
          </div>
        </div>
      </footer>
      {/* --- Toasts (Sales Notifications) --- */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 2000 }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className="toast show shadow-lg mb-2 border border-warning"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ minWidth: 320, borderRadius: 12, overflow: "hidden" }}
            data-aos="zoom-in"
          >
            <div
              className="toast-header"
              style={{ background: PrimaryDark, color: "white" }}
            >
              <strong className="me-auto fw-bold text-light">
                🌟 Executive Enrollment!
              </strong>
              <small style={{ color: AccentGold }}>just now</small>
              <button
                type="button"
                className="btn-close ms-2 mb-1"
                onClick={() => closeToast(t.id)}
                aria-label="Close"
                style={{ filter: "invert(1)" }}
              ></button>
            </div>
            <div className="toast-body bg-white">
              <div className="text-dark">
                **{t.name}** enrolled in a program from{" "}
                <span className="fw-bold" style={{ color: PrimaryDark }}>
                  {t.city}
                </span>
                .
              </div>
              <div className="mt-2 small text-muted fst-italic">
                Program: {t.course}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* --- Custom CSS for Corporate Aesthetics --- */}
      <style jsx>{`
        .card {
          border-radius: 20px !important;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
        }
        .btn-warning {
          background-color: ${AccentGold} !important;
          border-color: ${AccentGold} !important;
          color: ${PrimaryDark} !important;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
        }
        .btn-outline-light {
          border: 2px solid white !important;
          color: white !important;
        }
        .btn-outline-light:hover {
          background-color: white !important;
          color: ${PrimaryDark} !important;
        }
      `}</style>
    </div>
  );
};

export default AcademyPage;
