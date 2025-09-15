import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";

export default function Hero() {
  const [Data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://indokonabackend-1.onrender.com/api/hero/"
      );
      setData(response.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        className="d-flex justify-content-center align-items-center vh-100 text-white"
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e3799)",
        }}
      >
        <div className="text-center">
          {Data.length > 0 && (
            <>
              {/* ✅ Circle Logo */}
              <div className="mb-4">
                <img
                  src={Data[0].image}
                  alt={Data[0].name}
                  className="rounded-circle shadow-lg border border-4 border-warning"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    boxShadow: "0 0 30px rgba(241, 196, 15, 0.6)",
                  }}
                />
              </div>

              {/* ✅ Website Name */}
              <h1 className="fw-bold display-4">
                {Data[0].name}
                <span style={{ color: "#f1c40f" }}> FinTech</span>
              </h1>

              {/* ✅ Tagline */}
              <p className="fs-4 fst-italic mt-3 text-warning">
                {Data[0].tagline}
              </p>

              {/* ✅ Supportline */}
              <p className="fs-6 text-light mb-4">{Data[0].supportline}</p>

              {/* ✅ CTA Buttons */}
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="/services"
                  className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                >
                  Suite
                </a>
                <a
                  href="/signup"
                  className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                >
                  Fintech
                </a>
                <a
                  href="/signup"
                  className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                >
                  SAAS
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">About Indokona</h2>
          <p>
            Established in 2014, Indokona Credit Bazar Pvt. Ltd. is a registered
            technology company building a <b>next-gen fintech ecosystem</b>.
          </p>
          <p>
            We empower <b>businesses, startups, and entrepreneurs</b> to
            leverage automation and AI for faster growth.
          </p>
          <div className="mt-3">
            <p>
              <b>CIN:</b> U66190HR2014PTC118000 | <b>PAN:</b> AAHCI4766P |{" "}
              <b>TAN:</b> RTKI05099D
            </p>
            <p>📍 Registered Office: Faridabad, Haryana</p>
          </div>
        </div>
      </section>

      {/* ✅ Ecosystem */}
      <section className="py-5 text-white" style={{ background: "#1e3799" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Technology Ecosystem</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-dark rounded shadow">
                <h5>Indokona Suite</h5>
                <p>
                  Digital marketing & automation solutions (WhatsApp, FB, Insta,
                  Telegram, Email, Scheduler, Lead Gen).
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-dark rounded shadow">
                <h5>Indokona Fintech</h5>
                <p>
                  SaaS-based B2B/B2C portals, white-label solutions, digital
                  onboarding & transaction connectors.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-dark rounded shadow">
                <h5>Indokona SaaS</h5>
                <p>
                  AI-driven platform: chatbots, funnels, landing pages, full
                  automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Features */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Key Features & Innovations</h2>
          <div className="row g-4">
            {[
              "AI-powered Chatbots 🤖",
              "Automated Lead Funnels 📈",
              "Smart CRM Dashboard 🖥",
              "Digital Onboarding APIs 🔗",
              "Partner & Retailer Portals 🛠",
              "Real-time Analytics 📊",
              "Auto-generated Certificates 📝",
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="p-3 border rounded shadow-sm bg-white">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Partner Opportunities */}
      <section className="py-5 text-white" style={{ background: "#0a3d62" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Partner Opportunities</h2>
          <p>
            Launch your own <b>technology-enabled digital business</b> with us.
          </p>
          <ul className="list-unstyled">
            <li>✅ White Label Solutions</li>
            <li>✅ Master Distributor</li>
            <li>✅ Distributor</li>
            <li>✅ Retailer</li>
            <li>✅ Franchise / Outlet</li>
          </ul>
          <p className="mt-3">
            Benefits: Branded App, SaaS Dashboard, Easy API Integration, Tech
            Support
          </p>
          <a href="/partner" className="btn btn-warning fw-bold rounded-pill">
            🚀 Start as a Partner Today
          </a>
        </div>
      </section>

      {/* ✅ Why Choose */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Indokona?</h2>
          <ul className="list-unstyled">
            <li>✔ Technology-First Platform</li>
            <li>✔ Scalable SaaS & AI Solutions</li>
            <li>✔ Transparent & Legally Registered Since 2014</li>
            <li>✔ Strong Partner Network Across India</li>
            <li>✔ Secure & Compliant Infrastructure</li>
            <li>✔ 24×7 Tech Support</li>
          </ul>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>
            © 2025 Indokona Credit Bazar Pvt. Ltd. | CIN: U66190HR2014PTC118000
          </p>
          <p>PAN: AAHCI4766P | TAN: RTKI05099D | Faridabad, Haryana</p>
          <div className="mt-3">
            <a href="/" className="text-white mx-2">
              Home
            </a>
            <a href="/about" className="text-white mx-2">
              About
            </a>
            <a href="/blog" className="text-white mx-2">
              Blog
            </a>
            <a href="/contact" className="text-white mx-2">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
