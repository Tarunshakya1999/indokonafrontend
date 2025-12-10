import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "./assets/about.jpg";
import Navbar from "./Nav";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f8f9fa", paddingBottom: "100px" }}>
        {/* Hero Section */}
        <div
          className="text-center text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: "linear-gradient(135deg, #003366, #0066cc)",
            minHeight: "60vh",
            backgroundSize: "cover",
          }}
        >
          <h1
            className="fw-bold display-4 mb-3"
            data-aos="fade-up"
            style={{ letterSpacing: "2px" }}
          >
            ABOUT US
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="300">
            India’s Most Transparent Fintech Platform
          </p>
        </div>

        <div className="container py-5">
          {/* Intro Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold mb-3 text-primary">
                India’s Most Transparent Fintech Platform
              </h2>
              <p style={{ fontSize: "1.1rem" }}>
                Indokona Credit Bazar Pvt. Ltd. is India’s most trusted and
                scalable fintech platform. We empower financial growth through
                innovation, transparency, and collaboration. Our platform
                connects millions of users and partners across India, delivering
                smart, secure, and seamless financial services.
              </p>
              <p style={{ fontSize: "1.1rem" }}>
                With multiple partner levels — from Retailer to Combo Plan — we
                ensure every stakeholder grows with us in a transparent,
                technology-driven ecosystem.
              </p>
            </div>
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src={about}
                alt="About Indokona Fintech"
                className="img-fluid rounded shadow-lg"
                style={{
                  borderRadius: "20px",
                  transform: "scale(1.02)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1.02)")}
              />
            </div>
          </div>

          <hr className="my-5" />

          {/* Sections */}
          {[
            {
              title: "Our Mission",
              text: `Our mission is to revolutionize India’s fintech landscape by offering 
              transparency, scalability, and user-centric financial solutions. We simplify 
              payments, lending, insurance, and investments while maintaining accessibility 
              and affordability.`,
            },
            {
              title: "Our Vision",
              text: `We envision a transparent and secure fintech network that promotes 
              financial inclusion. Our goal is to empower every individual and business 
              through innovation and trust.`,
            },
            {
              title: "Core Values",
              list: [
                "Transparency – Clear, accountable processes.",
                "Innovation – Evolving with cutting-edge technology.",
                "Integrity – Ethical actions in every transaction.",
                "Empowerment – Supporting partners’ growth.",
                "Collaboration – Building a unified financial network.",
              ],
            },
            {
              title: "Our Services",
              list: [
                "Digital Payments & Money Transfers",
                "Recharge, Bill Payment & Utility Services",
                "Retailer & Distributor Partnerships",
                "Loan Assistance & Credit Management",
                "Micro Insurance & Investment Opportunities",
                "Razorpay Payment Gateway Integration",
              ],
            },
            {
              title: "Technology & Innovation",
              text: `We leverage modern frameworks like Django, React, and scalable cloud 
              infrastructure to ensure secure, real-time transactions. AI-driven analytics 
              continuously improve user experience and partner performance.`,
            },
            {
              title: "Achievements",
              list: [
                "10,000+ Active Partners",
                "1 Million+ Transactions Processed",
                "24/7 Dedicated Partner Support",
                "Recognized Among India’s Top Fintech Platforms",
              ],
            },
            {
              title: "Partner with Us",
              text: `Join India’s fastest-growing fintech ecosystem. Whether you’re a retailer, 
              distributor, or entrepreneur — Indokona Fintech gives you tools to grow and earn.`,
            },
            {
              title: "Future Roadmap",
              text: `We’re integrating AI-powered credit scoring, investment portfolios, and 
              blockchain security for a smarter, transparent financial future.`,
            },
            {
              title: "Customer Testimonials",
              list: [
                `"Indokona Fintech helped me expand my business faster than I imagined!" – Rajesh Kumar`,
                `"The platform is smooth, secure, and extremely reliable!" – Sunita Sharma`,
              ],
            },
          ].map((section, index) => (
            <section
              key={index}
              className="my-5 p-4 rounded shadow-sm bg-white"
              data-aos="fade-up"
            >
              <h3 className="fw-bold text-primary mb-3">{section.title}</h3>
              {section.text && (
                <p style={{ fontSize: "1.05rem" }}>{section.text}</p>
              )}
              {section.list && (
                <ul style={{ fontSize: "1.05rem" }}>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Contact Section */}
          <section
            className="my-5 p-4 rounded text-center text-white"
            style={{
              background: "linear-gradient(135deg, #004d99, #00b3b3)",
            }}
            data-aos="zoom-in"
          >
            <h3 className="fw-bold mb-3">Contact Us</h3>

            <p style={{ fontSize: "1.1rem" }}>
            <i class="fa-solid fa-location-dot"></i> <b>Head Office:</b> Indokona Credit Bazar Pvt. Ltd.,Office No: 1 Main Ismilepur Road Faridabad Haryana 121003,
              India
              <br />
              <i class="fa-solid fa-phone"></i> <b>Phone:</b>{" "}
              <a href="tel:+919625995155" className="contact-link">
                +91-9625995155
              </a>
              <br />
              <i class="fa-solid fa-message"></i> <b>Email:</b>{" "}
              <a
                href="mailto:indokonaoutsourcing@gmail.com"
                className="contact-link"
              >
                indokonaoutsourcing@gmail.com
              </a>
            </p>

            {/* Inline CSS */}
            <style jsx>{`
              .contact-link {
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                transition: all 0.3s ease;
              }

              .contact-link:hover {
                color: #ffeb3b;
                text-decoration: underline;
              }
            `}</style>
          </section>

          <p className="text-center text-muted mt-4">
            © 2025 Indokona Fintech | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
