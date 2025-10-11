import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaDownload, FaPlay, FaCheckCircle } from "react-icons/fa";
import power from "./assets/power.png"; // replace with your image path
import "./index.css"; // custom CSS
import Navbar from "./Nav";

export default function IndokonaFintechPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="indokona-page">

      {/* HERO / FIRST FOLD */}
      <header className="hero-section text-white d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-3">
                🚀 Start, Build & Scale Your Fintech Business
              </h1>
              <p className="lead mb-4">
                Indokona Fintech brings you technology, automation, and tools to create a scalable fintech empire.
              </p>

              <div className="d-flex gap-2 flex-wrap mb-4">
                <a className="btn btn-gradient-primary btn-lg" href="https://forms.gle/Xq4twuUwDPbEhCwt8">
                  Become a Partner
                </a>
                <a className="btn btn-outline-light btn-lg" href="/brochure.pdf" download>
                  <FaDownload className="me-2" /> Brochure
                </a>
                <a className="btn btn-outline-light btn-lg" href="https://forms.gle/qBnTqrLvheNZJ2hC6">
                  <FaPlay className="me-2" /> Free Demo
                </a>
              </div>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="200">
                  <FaCheckCircle className="me-2 text-success" /> Auto-Generated Authorization Letter
                </li>
                <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="300">
                  <FaCheckCircle className="me-2 text-success" /> Verified Digital Certificate
                </li>
                <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay="400">
                  <FaCheckCircle className="me-2 text-success" /> Super Branding Kit (MRP ₹11,999 FREE)
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-center" data-aos="zoom-in">
              <div className="card shadow-lg border-0 p-3 hero-card">
                <img src={power} alt="dashboard mockup" className="img-fluid mb-3 rounded" style={{ maxHeight: 280 }} />
                <div className="d-flex justify-content-center gap-2 mt-2 flex-wrap">
                  <span className="badge bg-primary">Retailer →</span>
                  <span className="badge bg-info">Distributor →</span>
                  <span className="badge bg-warning text-dark">Master Distributor →</span>
                  <span className="badge bg-success">White Label</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="py-5 bg-light" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2>About Indokona</h2>
              <p className="text-muted mb-3">
                Indokona Credit Bazar Pvt. Ltd. is India’s most transparent and scalable fintech platform. We empower entrepreneurs to start at any level—Retailer, Distributor, Master Distributor, Admin, B2B, or White Label—and grow their network with ease.
              </p>
              <ul className="list-unstyled text-muted">
                <li>✅ Auto-Generated Authorization Letter</li>
                <li>✅ Verified Digital Certificate</li>
                <li>✅ Unique Digital ID Card (with QR + Hologram)</li>
                <li>✅ Super Branding Kit (MRP ₹11,999 FREE)</li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="card shadow-sm p-4">
                <h5 className="mb-3">What's in the Super Branding Kit</h5>
                <ul>
                  <li>T-Shirt, Cap, Certificate, ID Card</li>
                  <li>Banner (5×3 ft), 10 Posters (5×2.5 ft)</li>
                  <li>Digital Visiting Card, Social Media Creatives</li>
                </ul>
                <img src="/images/branding-kit.png" alt="branding kit" className="img-fluid mt-3 rounded" style={{ maxHeight: 180 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PLANS */}
      <section className="py-5" id="plans">
        <div className="container">
          <h2 className="mb-5 text-center" data-aos="fade-up">Partnership Plans</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              { title: "Retailer Plan", note: "Basic Kit + Panel" },
              { title: "Distributor Plan", note: "Multi Retailer Onboarding" },
              { title: "Master Distributor Plan", note: "Manage Distributors & Retailers" },
              { title: "Admin Panel", note: "Advanced Monitoring" },
              { title: "B2B Fintech Solutions", note: "API + Hosting" },
              { title: "White Label Plan", note: "Complete Brand Setup" },
            ].map((p, i) => (
              <div className="col" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="card h-100 shadow-lg border-0 hover-scale">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{p.title} ✅</h5>
                    <p className="card-text text-muted">{p.note}</p>
                    <a href="#pricing" className="stretched-link text-decoration-none text-primary">See pricing</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-5 bg-gradient text-white text-center" id="partner">
        <div className="container" data-aos="zoom-in">
          <h2>Ready to start your fintech journey?</h2>
          <p className="lead">👉 Become a Partner Today and grow with Indokona Fintech.</p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a className="btn btn-light btn-lg shadow-sm" href="https://forms.gle/Xq4twuUwDPbEhCwt8">Become a Partner</a>
            <a className="btn btn-outline-light btn-lg shadow-sm" href="https://forms.gle/qBnTqrLvheNZJ2hC6">Request Demo</a>
            <a className="btn btn-outline-light btn-lg shadow-sm" href="/brochure.pdf" download>Download Brochure</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-5 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-2 small">✔ Registered Pvt. Ltd. Company | ISO Standard IT Practices | Secure SSL | RBI/NPCI/UIDAI Compliant</p>
          <p className="small">© {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. — All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
