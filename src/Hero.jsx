import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";
import { Link } from "react-router-dom";

// ✅ AOS
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "./Axios";

// ✅ Images
import img from "./assets/img.png";
import img3 from "./assets/img3.jpg";
import Footer from "./Footer";
import tech4 from "./assets/tech4.jpg";
import par4 from "./assets/par4.jpg"
import mycase from "./assets/case.jpg"
import blog from "./assets/blog.jpg"
import learn from "./assets/learn.jpg"
import platform from "./assets/platform.jpg"
export default function Hero() {
  const [Data, setData] = useState([]);

  const getdata2 = async () => {
    
    try {
      const response = await axiosInstance.get("/api/hero/");
      setData(response.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };

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
    getdata2();
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <>
      <Navbar />

      {/* ✅ Animated Marquee */}
      <div
        className="marquee-container mt-1 mb-0"
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          height: "40px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="marquee-text"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            paddingLeft: "100%",
            animation: "marqueeMove 15s linear infinite",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Hello Users, Welcome to Indokona!
        </div>

        <style>
          {`
      @keyframes marqueeMove {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
    `}
        </style>
      </div>

      {/* ✅ Hero Section */}
      <section
        className="d-flex justify-content-center align-items-center vh-100 text-white"
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e3799)",
        }}
      >
        <div className="text-center" data-aos="zoom-in">
          {Data.length > 0 && (
            <>
              <div className="mb-4" data-aos="fade-down">
                <img
                  src={Data[0].image}
                  alt={Data[0].name}
                  className="rounded-circle border border-4 border-warning"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    boxShadow: "0 0 40px rgba(241,196,15,0.9)",
                  }}
                />
              </div>

              <h1 className="fw-bold display-4">
                {Data[0].name}
                <span style={{ color: "#f1c40f" }}> FinTech</span>
              </h1>

              <p className="fs-4 fst-italic mt-3 text-warning">
                {Data[0].tagline}
              </p>
              <p className="fs-6 text-light mb-4">{Data[0].supportline}</p>

              {/* <div className="d-flex justify-content-center gap-3">
          {["Suite", "Fintech", "SAAS"].map((btn, i) => (
            <a
              key={i}
              href="/services"
              className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 0 20px rgba(241,196,15,0.9)")
              }
              onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
            >
              {btn}
            </a>
          ))}
        </div> */}

              <div className="d-flex justify-content-center gap-1">
                {[
                  { name: "Suite", link: "/suite" },
                  { name: "Fintech", link: "/fintech" },
                  { name: "SAAS", link: "/saas" },
                  { name: "M2M", link: "/m2m" }, // ✅ new button added
                ].map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 20px rgba(241,196,15,0.9)")
                    }
                    onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                  >
                    {btn.name}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ✅ About Us */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #fff5f7, #f0f0ff)", // Soft pastel pink → blue
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 193, 7,0.15), transparent 70%)",
            animation: "bgMove 15s linear infinite",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-lg-6 mb-4 text-center" data-aos="zoom-in">
              <img
                src={img}
                alt="About"
                className="img-fluid rounded-4 shadow-lg border border-3 border-white"
                style={{ transform: "scale(1.02)", transition: "0.4s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08) rotate(1deg)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02) rotate(0deg)")
                }
              />
            </div>

            {/* Text */}
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3 text-gradient display-5">
                🚀 About <span className="text-warning">Indokona</span>
              </h2>
              <p className="text-muted fs-5">
                Established in <b>2024</b>,{" "}
                <b>Indokona Credit Bazar Pvt. Ltd.</b> is a registered
                fintech technology company building a{" "}
                <span className="fw-bold text-dark">
                  next-gen fintech ecosystem
                </span>
                .
              </p>
              <p className="text-muted fs-5">
                We empower{" "}
                <span className="fw-bold text-dark">
                  businesses, startups, and entrepreneurs
                </span>{" "}
                to leverage automation and AI for faster growth.
              </p>
              <p className="text-muted">
                Our journey started with a vision to make financial processes
                more
                <span className="text-success fw-semibold"> transparent</span>,
                <span className="text-info fw-semibold"> efficient</span>, and
                <span className="text-danger fw-semibold"> reliable</span>.
              </p>

              <Link
                to="/about"
                className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill shadow-sm mt-3"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Technology Ecosystem */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)", // Aqua → Mint
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle at 70% 30%, rgba(255, 87, 34,0.15), transparent 70%)",
            animation: "bgMove 20s linear infinite",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4" data-aos="fade-up-right">
              <h2 className="fw-bold mb-4 text-gradient display-5">
                Our <span className="text-warning">Technology</span> Ecosystem
              </h2>
              <ul className="list-unstyled fs-5">
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-3 fs-3">⚡</span>
                  <span className="text-dark fw-semibold">
                    Indokona Suite
                  </span>{" "}
                  –{" "}
                  <span className="text-muted">
                    Automation & Marketing Tools
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-3 fs-3">🌐</span>
                  <span className="text-dark fw-semibold">
                    Indokona Fintech
                  </span>{" "}
                  – <span className="text-muted">SaaS Portals & APIs</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-3 fs-3">🤖</span>
                  <span className="text-dark fw-semibold">
                    Indokona SaaS
                  </span> –{" "}
                  <span className="text-muted">AI Chatbots & Funnels</span>
                </li>
              </ul>

              <a
                href="/services"
                className="btn btn-primary fw-bold px-4 py-2 rounded-pill shadow-sm mt-3"
              >
                Explore More →
              </a>
            </div>

            <div className="col-lg-6 text-center" data-aos="fade-up-left">
              <img
                src={tech4}
                alt="Tech"
                className="img-fluid rounded-4 shadow-lg border border-3 border-white"
                style={{ transform: "scale(1.02)", transition: "0.4s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1.08) rotate(-1deg)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02) rotate(0deg)")
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Key Features */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #fff3e0, #e1f5fe)", // Peach → Light Blue
          border: "1px solid #e2e8f0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(156,39,176,0.1), transparent 70%)",
            animation: "bgMove 18s linear infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        <div
          className="row align-items-center flex-lg-row-reverse position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left">
            <h2 className="fw-bold mb-3 text-gradient display-6">
              Key Features & Innovations
            </h2>
            <div className="mb-4">
              <div
                style={{
                  height: "4px",
                  width: "100px",
                  background:
                    "linear-gradient(90deg, #ff4081, #6610f2, #007bff)",
                  borderRadius: "2px",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
                }}
              ></div>
            </div>

            <ul className="list-group fs-5 border-0">
              {[
                "🤖 AI-powered Chatbots",
                "📈 Automated Lead Funnels",
                "🖥 Smart CRM Dashboard",
                "🔗 Digital Onboarding APIs",
                "🛠 Partner & Retailer Portals",
                "📊 Real-time Analytics",
                "📝 Auto-generated Certificates",
              ].map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 mb-3 rounded-4 shadow feature-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="fw-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <img
              src={img3}
              alt="Features"
              className="img-fluid rounded-4 shadow-lg feature-img"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Gradient Animation */}
      <style>
        {`
  @keyframes bgMove {
    0% { transform: translate(0, 0); }
    50% { transform: translate(20px, 20px); }
    100% { transform: translate(0, 0); }
  }

  .text-gradient {
    background: linear-gradient(90deg, #ff4081, #6610f2, #007bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .feature-item {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    cursor: pointer;
    border-left: 5px solid transparent;
  }
  .feature-item:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    background: rgba(255, 255, 255, 0.9);
    border-left: 5px solid #ff4081;
  }

  .feature-img {
    transition: transform 0.5s ease;
  }
  .feature-img:hover {
    transform: scale(1.05) rotate(-1deg);
  }
`}
      </style>

      {/* ✅ Partner Opportunities */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #f0f4ff, #fefefe)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ✅ Animated Gradient Background Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(0,123,255,0.15), rgba(102,16,242,0.15), rgba(255,0,128,0.15))",
            backgroundSize: "300% 300%",
            animation: "moveGradient 12s ease infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        <div
          className="row align-items-center position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold mb-3 text-primary display-6">
              🤝 Partner Opportunities
            </h2>
            <div className="mb-4">
              <div
                style={{
                  height: "4px",
                  width: "100px",
                  background:
                    "linear-gradient(90deg, #007bff, #6610f2, #ff0080)",
                  borderRadius: "2px",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
                }}
              ></div>
            </div>

            {/* Opportunities */}
            <ul className="list-unstyled fs-5">
              {[
                "🤝 White Label Solutions",
                "📦 Master Distributor",
                "📌 Distributor",
                "🏪 Retailer",
              ].map((item, i) => (
                <li
                  key={i}
                  className="partner-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Benefits */}
            <h3 className="fw-bold mb-3 text-primary mt-4">✨ Benefits</h3>
            <ul className="list-unstyled fs-5">
              {[
                "📱 Branded App & Portal",
                "📊 SaaS Dashboard + CRM",
                "🔗 Easy API Integration",
                "🛠 Ongoing Tech Support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="partner-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/partner"
              className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm mt-4"
              data-aos="zoom-in"
            >
              🚀 Start as a Partner Today
            </a>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={par4}
              alt="Partner"
              className="img-fluid rounded-4 shadow-lg partner-img"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Extra CSS */}
      <style>
        {`
  /* Animated Gradient Background */
  @keyframes moveGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Partner Items */
  .partner-item {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    cursor: pointer;
    border-left: 5px solid transparent;
  }
  .partner-item:hover {
    transform: translateY(-6px) scale(1.02);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    border-left: 5px solid #007bff;
  }

  /* Partner Image Hover Effect */
  .partner-img {
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }
  .partner-img:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  }
`}
      </style>

      {/* ✅ Why Choose Indokona */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 p-4"
            data-aos="fade-up"
            style={{
              border: "5px solid #0a3d62",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #f1c40f20, #1e379940)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <h2 className="fw-bold mb-4 text-primary text-center">
              ⿦ Why Choose Indokona?
            </h2>

            <p className="text-muted fs-5 mb-4 text-center">
              Indokona is not just a fintech platform; it's a complete ecosystem
              designed for growth, innovation, and seamless integration. Our
              platform empowers businesses, partners, and entrepreneurs to
              leverage technology with confidence.
            </p>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4" data-aos="fade-right">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      🚀 Technology-First Platform
                    </h5>
                    <p className="card-text text-muted">
                      Built on cutting-edge technology, Indokona ensures
                      efficiency, speed, and scalability for every user.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" data-aos="fade-up">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      🤖 AI & Scalable SaaS
                    </h5>
                    <p className="card-text text-muted">
                      Leverage AI-driven solutions and scalable SaaS tools to
                      automate processes and grow your business effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" data-aos="fade-left">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      📜 Registered Since 2024
                    </h5>
                    <p className="card-text text-muted">
                      Trust a platform that has been legally registered and
                      operational for nearly a decade, ensuring credibility and
                      reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" data-aos="fade-right">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      🤝 Strong Partner Network
                    </h5>
                    <p className="card-text text-muted">
                      Join a growing network of partners and businesses and
                      access exclusive opportunities for collaboration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" data-aos="fade-up">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      🔒 Secure Infrastructure
                    </h5>
                    <p className="card-text text-muted">
                      With enterprise-level security and data protection,
                      Indokona ensures your information and operations remain
                      safe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" data-aos="fade-left">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      💡 Innovative Solutions
                    </h5>
                    <p className="card-text text-muted">
                      Constantly evolving, Indokona brings innovative tools and
                      solutions that adapt to modern business challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <a
                href="/about"
                className="btn btn-warning text-dark fw-bold px-5 py-2 rounded-pill shadow-sm"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Platform Showcase */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #f8fbff, #ffffff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ✅ Animated Gradient Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(0,123,255,0.12), rgba(102,16,242,0.12), rgba(255,0,128,0.12))",
            backgroundSize: "300% 300%",
            animation: "gradientMove 14s ease infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        <div
          className="row align-items-center flex-lg-row-reverse position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Image Showcase */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center"
            data-aos="fade-left"
          >
            <img
              src={platform}
              alt="Platform"
              className="img-fluid rounded-4 shadow-lg showcase-img"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-bold mb-3 text-primary display-6">
              Platform Showcase
            </h2>

            <p className="text-muted fs-5">📱 Mobile & Desktop Mockups:</p>

            {/* List with animations */}
            <ul className="list-unstyled fs-5">
              {[
                "🛠 Retailer Dashboard",
                "📦 Distributor Panel",
                "📊 Analytics Reports",
                "🤖 AI-driven Chatbot",
              ].map((item, i) => (
                <li
                  key={i}
                  className="platform-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/platform"
              className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-glow mt-3"
              data-aos="zoom-in"
            >
              👀 See Platform in Action
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Extra CSS */}
      <style>
        {`
  /* Background Gradient Animation */
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Feature Items */
  .platform-item {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px);
    transition: all 0.4s ease;
    cursor: pointer;
    border-left: 4px solid transparent;
  }
  .platform-item:hover {
    transform: translateX(8px) scale(1.02);
    background: rgba(255, 255, 255, 0.95);
    border-left: 4px solid #007bff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  /* Image Animation */
  .showcase-img {
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }
  .showcase-img:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  }

  /* Glowing Button */
  .shadow-glow {
    box-shadow: 0 0 0 rgba(255,193,7,0.5);
    transition: all 0.4s ease;
  }
  .shadow-glow:hover {
    box-shadow: 0 0 20px rgba(255,193,7,0.8);
    transform: translateY(-3px) scale(1.05);
  }
`}
      </style>

      {/* ✅ Case Studies */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #fdfbfb, #ebedee)", // Soft premium gradient
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(0,123,255,0.15), rgba(102,16,242,0.15), rgba(255,193,7,0.15))",
            backgroundSize: "300% 300%",
            animation: "gradientMove 12s ease infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        {/* Content */}
        <div
          className="row align-items-center position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img
              src={mycase}
              alt="Case Studies"
              className="img-fluid rounded-4 shadow-lg showcase-img"
              style={{
                border: "6px solid rgba(255,255,255,0.7)",
                backdropFilter: "blur(6px)",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-4 text-gradient display-6">
              Case Studies & Success Stories
            </h2>
            <ul className="list-unstyled fs-5">
              {[
                "📈 Distributor scaled 10x revenue with Indokona",
                "🚀 Retailer launched digital business in 7 days",
                "🤖 AI Funnel boosted engagement by 300%",
              ].map((item, i) => (
                <li
                  key={i}
                  className="platform-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-5px) scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0) scale(1)")
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Gradient Animation + Gradient Text CSS */}
      <style>
        {`
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .text-gradient {
    background: linear-gradient(90deg, #007bff, #6610f2, #ff4081);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`}
      </style>

      {/* ✅ Blog / Knowledge Hub */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f9fbff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(0,255,255,0.12), rgba(0,123,255,0.12), rgba(102,16,242,0.12))",
            backgroundSize: "300% 300%",
            animation: "gradientMove 14s ease infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        <div
          className="row align-items-center flex-lg-row-reverse position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left">
            <img
              src={blog}
              alt="Blog"
              className="img-fluid rounded-4 shadow-lg showcase-img"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-bold mb-4 text-primary display-6">
              Blog / Knowledge Hub
            </h2>
            <p className="fs-5">✨ Latest updates on:</p>
            <ul className="list-unstyled fs-5">
              {[
                "📊 SaaS & Fintech Trends",
                "🤖 AI in Business",
                "🚀 Startup Growth",
                "💡 Partner Success Tips",
              ].map((item, i) => (
                <li
                  key={i}
                  className="platform-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/blog"
              className="btn btn-outline-primary px-4 rounded-pill shadow-glow mt-3"
              data-aos="zoom-in"
            >
              📚 Read Articles
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Learning Hub */}
      <div
        className="container my-5 py-5 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f5faff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(0,200,83,0.12), rgba(0,255,128,0.12), rgba(0,123,255,0.12))",
            backgroundSize: "300% 300%",
            animation: "gradientMove 14s ease infinite",
            zIndex: 0,
            borderRadius: "1rem",
          }}
        ></div>

        <div
          className="row align-items-center position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img
              src={learn}
              alt="Learning"
              className="img-fluid rounded-4 shadow-lg showcase-img"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-4 text-success display-6">
              Learning & Employment Hub
            </h2>
            <ul className="list-unstyled fs-5">
              {[
                "📘 Training in Digital Marketing & SaaS Tools",
                "🤖 AI-powered learning programs",
                "🎓 With Dream True Academy certifications",
              ].map((item, i) => (
                <li
                  key={i}
                  className="platform-item mb-3 p-3 rounded-4 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/learning"
              className="btn btn-success px-4 rounded-pill shadow-glow mt-3"
              data-aos="zoom-in"
            >
              🎓 Start Learning Today
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Extra CSS (shared for all sections) */}
      <style>
        {`
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .platform-item {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px);
    transition: all 0.4s ease;
    cursor: pointer;
    border-left: 4px solid transparent;
  }
  .platform-item:hover {
    transform: translateX(8px) scale(1.02);
    background: rgba(255, 255, 255, 0.95);
    border-left: 4px solid #007bff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  .showcase-img {
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }
  .showcase-img:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  }
  .shadow-glow {
    box-shadow: 0 0 0 rgba(255,193,7,0.5);
    transition: all 0.4s ease;
  }
  .shadow-glow:hover {
    box-shadow: 0 0 20px rgba(255,193,7,0.8);
    transform: translateY(-3px) scale(1.05);
  }
`}
      </style>

     
      <Footer />
    </>
  );
}
