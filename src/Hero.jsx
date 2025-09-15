import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";

// ✅ Correct way to import images
import img from "./assets/img.png";
import img3 from "./assets/img3.jpg";

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

      {/* ✅ About Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={img}
                alt="About Indokona Fintech"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Side Text */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3 text-primary">About Us</h2>

              <p className="text-muted fs-5">
                Established in 2014, <b>Indokona Credit Bazar Pvt. Ltd.</b> is a
                registered technology company building a next-gen fintech
                ecosystem. We empower businesses, startups, and entrepreneurs to
                leverage automation and AI for faster growth.
              </p>

              <p className="text-muted">
                Our journey started with a vision to make financial processes
                more transparent, efficient, and reliable. Over the years, we
                have created a strong foundation of trust, innovation, and
                customer-centric services that bridge the gap between technology
                and finance.
              </p>

              <p className="text-muted">
                We focus on simplifying complex financial operations using
                digital platforms, cloud solutions, and secure infrastructure.
                From automated workflows to AI-driven insights, our solutions
                are designed to help businesses make smarter decisions in less
                time.
              </p>

              <p className="text-muted">
                With an experienced team of professionals, we continuously
                research emerging technologies like blockchain, machine
                learning, and big data analytics to integrate them into our
                ecosystem responsibly and effectively.
              </p>

              <a
                href="/about"
                className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Technology Ecosystem Section */}
      <div className="container my-5">
        <div className="row">
          {/* Text Side */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 text-primary">⿣ Our Technology Ecosystem</h2>
            <ul className="text-muted fs-5">
              <li>
                <b>Indokona Suite</b> – Digital marketing & automation solutions
                (WhatsApp, FB, Insta, Telegram, Email, Scheduler, Lead Generation).
              </li>
              <li>
                <b>Indokona Fintech</b> – SaaS-based B2B/B2C portals, white-label
                solutions, digital onboarding & transaction connectors.
              </li>
              <li>
                <b>Indokona SaaS</b> – AI-driven agency-level platform: chatbots, AI
                funnels, AI landing pages, full automation.
              </li>
            </ul>
          </div>

          {/* Image Side */}
          <div className="col-lg-6">
            <img
              src={img3}
              alt="Technology Ecosystem"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
