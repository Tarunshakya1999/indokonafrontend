import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "./Axios";

// Images
import img from "./assets/img.png";
import img3 from "./assets/img3.jpg";
import Footer from "./Footer";
import tech4 from "./assets/tech4.jpg";
import par4 from "./assets/par4.jpg";
import mycase from "./assets/case.jpg";
import blog from "./assets/blog.jpg";
import learn from "./assets/learn.jpg";
import platform from "./assets/platform.jpg";

export default function Hero() {
  const [Data, setData] = useState([]);

  const getdata2 = async () => {
    try {
      const response = await axiosInstance.get("/api/hero/");
      setData(response.data);
    } catch (err) {
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
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getdata();
    getdata2();
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔹 Top Marquee – Slim premium bar */}
      <div
        className="d-flex align-items-center"
        style={{
          background:
            "linear-gradient(90deg, #22c55e 0%, #22d3ee 40%, #6366f1 100%)",
          color: "#e5e7eb",
          height: "40px",
          overflow: "hidden",
          position: "relative",
          fontSize: "0.9rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 0% 0%, rgba(15,23,42,0.6), transparent 55%)",
            opacity: 0.9,
          }}
        />
        <div
          className="container position-relative"
          style={{ zIndex: 1, whiteSpace: "nowrap" }}
        >
          <div
            className="d-inline-flex align-items-center marquee-text"
            style={{
              animation: "marqueeMove 18s linear infinite",
              gap: "2.5rem",
            }}
          >
            <span>👋 Welcome to Indokona – Next-gen Fintech + SaaS Ecosystem</span>
            <span>⚡ Automation • AI • Partner Network • SaaS Stack</span>
            <span>🚀 Build, Launch & Scale with Indokona Suite</span>
          </div>
        </div>
      </div>

      {/* 🟣 HERO SECTION – Dark Premium + Glassmorphic + Neon Buttons */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 0% 0%, #22c55e15 0, transparent 45%), radial-gradient(circle at 100% 100%, #22d3ee20 0, transparent 40%), linear-gradient(135deg, #020617 0%, #020617 40%, #020617 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glowing blobs */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.35), transparent 60%)",
            filter: "blur(4px)",
            top: "-80px",
            right: "-120px",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.35), transparent 65%)",
            bottom: "-140px",
            left: "-80px",
            filter: "blur(6px)",
            opacity: 0.85,
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#0f172a40 1px, transparent 1px), linear-gradient(90deg, #0f172a40 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            opacity: 0.35,
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 75%)",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center gy-5">
            {/* LEFT – Content */}
            <div className="col-lg-7" data-aos="fade-right">
              {/* Glass hero card */}
              <div
                style={{
                  borderRadius: "32px",
                  padding: "2rem",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.85))",
                  border: "1px solid rgba(148,163,184,0.5)",
                  boxShadow:
                    "0 24px 80px rgba(15,23,42,0.95), 0 0 0 1px rgba(148,163,184,0.25)",
                  backdropFilter: "blur(18px)",
                }}
              >
                {Data.length > 0 && (
                  <>
                    {/* Logo + chip */}
                    <div className="d-flex align-items-center mb-4 gap-3 flex-wrap">
                      <div
                        style={{
                          position: "relative",
                          width: "84px",
                          height: "84px",
                          borderRadius: "999px",
                          padding: "3px",
                          background:
                            "conic-gradient(from 220deg, #22c55e, #22d3ee, #6366f1, #22c55e)",
                          animation: "spinBorder 12s linear infinite",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "999px",
                            background:
                              "radial-gradient(circle at 30% 0%, #1f2937, #020617)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={Data[0].image}
                            alt={Data[0].name}
                            style={{
                              width: "78px",
                              height: "78px",
                              borderRadius: "999px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          className="badge rounded-pill mb-2"
                          style={{
                            background:
                              "linear-gradient(90deg, #22c55e20, #22d3ee20)",
                            border: "1px solid rgba(148,163,184,0.6)",
                            color: "#e2e8f0",
                            fontSize: "0.75rem",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          Fintech • SaaS • Automation
                        </div>
                        <h1
                          className="fw-bold mb-1"
                          style={{
                            fontSize: "2.6rem",
                            lineHeight: 1.08,
                            letterSpacing: "-0.04em",
                            color: "#e5e7eb",
                          }}
                        >
                          {Data[0].name}
                        </h1>
                        <p
                          className="mb-0"
                          style={{
                            color: "#a5b4fc",
                            fontSize: "1rem",
                            fontStyle: "italic",
                          }}
                        >
                          {Data[0].tagline}
                        </p>
                      </div>
                    </div>

                    {/* Support line */}
                    <p
                      className="mb-4"
                      style={{
                        color: "#9ca3af",
                        fontSize: "0.98rem",
                        maxWidth: "560px",
                      }}
                    >
                      {Data[0].supportline}
                    </p>
                  </>
                )}

                {/* CTA Buttons – Glassmorphic Neon */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {[
                    { name: "Indokona Suite", link: "/suite" },
                    { name: "Fintech Stack", link: "/fintech" },
                    { name: "SaaS Cloud", link: "/saas" },
                    { name: "M2M Automation", link: "/m2m" },
                  ].map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      className="btn-glass-neon"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <span>{btn.name}</span>
                    </a>
                  ))}
                </div>

                {/* Hero stats */}
                <div className="row g-3">
                  {[
                    {
                      label: "Partners",
                      value: "150+",
                      desc: "Distributors • Retailers • MSMEs",
                    },
                    {
                      label: "Automations",
                      value: "40+",
                      desc: "Workflows • Funnels • APIs",
                    },
                    {
                      label: "Since",
                      value: "2024",
                      desc: "Registered fintech technology company",
                    },
                  ].map((item, idx) => (
                    <div className="col-12 col-md-4" key={idx}>
                      <div className="stat-card">
                        <p className="stat-label">{item.label}</p>
                        <p className="stat-value">{item.value}</p>
                        <p className="stat-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT – Mockup / Illustration */}
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="d-flex flex-column gap-3"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              >
                {/* Floating card 1 */}
                <div className="hero-floating-card hero-floating-card-main">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="hero-chip">Live SaaS Dashboard</span>
                    <span className="hero-dot" />
                  </div>
                  <h5 className="mb-3" style={{ color: "#e5e7eb" }}>
                    Manage partners, funnels & APIs in one place.
                  </h5>
                  <div className="d-flex gap-2 mb-2">
                    <div className="pill pill-green">AI Funnels</div>
                    <div className="pill pill-cyan">Retailer CRM</div>
                    <div className="pill pill-indigo">Fintech APIs</div>
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      height: "80px",
                      borderRadius: "16px",
                      background:
                        "radial-gradient(circle at 10% 0, #22c55e30, transparent 60%), radial-gradient(circle at 90% 100%, #6366f130, transparent 60%)",
                      border: "1px solid rgba(75,85,99,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.9rem 1.1rem",
                    }}
                  >
                    <div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "0.78rem",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Active Channels
                      </p>
                      <p
                        className="mb-0"
                        style={{ color: "#e5e7eb", fontSize: "0.96rem" }}
                      >
                        Suite • Fintech • SaaS • M2M
                      </p>
                    </div>
                    <div
                      style={{
                        width: "72px",
                        height: "36px",
                        borderRadius: "999px",
                        border: "1px solid rgba(148,163,184,0.7)",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 2px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: "4px",
                          borderRadius: "999px",
                          background:
                            "linear-gradient(90deg, #22c55e40, #22d3ee25)",
                          opacity: 0.7,
                        }}
                      />
                      <div
                        style={{
                          width: "32px",
                          height: "28px",
                          borderRadius: "999px",
                          background: "#0f172a",
                          border: "1px solid rgba(148,163,184,0.7)",
                          transform: "translateX(34px)",
                          boxShadow:
                            "0 0 0 1px rgba(15,23,42,1), 0 0 18px rgba(45,212,191,0.55)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating card smalls */}
                <div className="d-flex flex-wrap gap-3">
                  <div className="hero-floating-card flex-fill">
                    <p className="chip-soft mb-1">Realtime</p>
                    <h6 className="mb-0" style={{ color: "#e5e7eb" }}>
                      Analytics & Reporting
                    </h6>
                    <p
                      className="mb-0"
                      style={{ color: "#9ca3af", fontSize: "0.8rem" }}
                    >
                      Track every partner, funnel & transaction.
                    </p>
                  </div>
                  <div className="hero-floating-card flex-fill">
                    <p className="chip-soft mb-1">APIs</p>
                    <h6 className="mb-0" style={{ color: "#e5e7eb" }}>
                      Plug & Play Fintech Stack
                    </h6>
                    <p
                      className="mb-0"
                      style={{ color: "#9ca3af", fontSize: "0.8rem" }}
                    >
                      Scale faster with secure integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 ABOUT US – Dark section with glass card */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 0% 50%, #22c55e18, transparent 60%), #020617",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="img-glass-wrap">
                <img
                  src={img}
                  alt="About Indokona"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="section-kicker">About Indokona</p>
              <h2 className="section-title mb-3">
                Building India&apos;s next-gen
                <span className="gradient-text"> fintech + SaaS </span>
                ecosystem.
              </h2>
              <p className="section-text">
                Established in <b>2024</b>,{" "}
                <b>Indokona Credit Bazar Pvt. Ltd.</b> is a registered fintech
                technology company focused on building a{" "}
                <span className="text-highlight">deeply integrated stack</span>{" "}
                of automation, AI and SaaS for India&apos;s businesses.
              </p>
              <p className="section-text">
                From <span className="text-highlight">startups</span> and{" "}
                <span className="text-highlight">retailers</span> to{" "}
                <span className="text-highlight">distributors</span> and{" "}
                <span className="text-highlight">partners</span>, Indokona
                simplifies onboarding, operations and scale.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="chip-soft">Fintech SaaS</span>
                <span className="chip-soft">Partner Network</span>
                <span className="chip-soft">Automation First</span>
              </div>

              <Link
                to="/about"
                className="btn btn-outline-light px-4 py-2 rounded-pill mt-2"
                style={{
                  borderColor: "rgba(148,163,184,0.7)",
                  color: "#e5e7eb",
                  fontWeight: 600,
                }}
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 TECHNOLOGY ECOSYSTEM */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 100% 50%, #22d3ee18, transparent 60%), #020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <p className="section-kicker">Technology Stack</p>
              <h2 className="section-title mb-3">
                A connected{" "}
                <span className="gradient-text">technology ecosystem</span>
              </h2>
              <ul className="list-unstyled mb-4">
                <li className="tech-item">
                  <span className="tech-icon">⚡</span>
                  <div>
                    <p className="tech-title">Indokona Suite</p>
                    <p className="tech-desc">Automation & Marketing tools</p>
                  </div>
                </li>
                <li className="tech-item">
                  <span className="tech-icon">🌐</span>
                  <div>
                    <p className="tech-title">Indokona Fintech</p>
                    <p className="tech-desc">
                      SaaS portals, journeys & fintech APIs
                    </p>
                  </div>
                </li>
                <li className="tech-item">
                  <span className="tech-icon">🤖</span>
                  <div>
                    <p className="tech-title">Indokona SaaS</p>
                    <p className="tech-desc">
                      AI chatbots, funnels & engagement
                    </p>
                  </div>
                </li>
              </ul>
              <a href="/services" className="btn-glass-outline">
                Explore full stack →
              </a>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <div className="img-glass-wrap">
                <img
                  src={tech4}
                  alt="Tech Ecosystem"
                  className="img-fluid"
                  style={{ borderRadius: "24px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 KEY FEATURES */}
      <section
        className="py-5"
        style={{
          background: "#020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <p className="section-kicker">Core Layer</p>
              <h2 className="section-title mb-3">
                Key features &{" "}
                <span className="gradient-text">product innovations</span>
              </h2>
              <div className="divider-line mb-4" />
              <ul className="list-unstyled">
                {[
                  "🤖 AI-powered chatbots & journeys",
                  "📈 Automated lead & sales funnels",
                  "🖥 Smart CRM dashboards",
                  "🔗 Digital onboarding APIs",
                  "🛠 Partner & retailer portals",
                  "📊 Real-time analytics & reporting",
                  "📝 Auto-generated certificates & docs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="feature-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <div className="img-glass-wrap">
                <img
                  src={img3}
                  alt="Features"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PARTNER OPPORTUNITIES */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, #6366f120, transparent 55%), #020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <p className="section-kicker">Partner Network</p>
              <h2 className="section-title mb-3">
                Partner with{" "}
                <span className="gradient-text">Indokona ecosystem</span>
              </h2>
              <div className="divider-line mb-4" />

              <h5 className="mini-heading mb-2">Partner formats</h5>
              <ul className="list-unstyled mb-3">
                {[
                  "🤝 White Label Solutions",
                  "📦 Master Distributor",
                  "📌 Distributor",
                  "🏪 Retailer",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="partner-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h5 className="mini-heading mb-2">What you get</h5>
              <ul className="list-unstyled mb-4">
                {[
                  "📱 Branded app & portals",
                  "📊 SaaS dashboard + CRM",
                  "🔗 Easy API integration",
                  "🛠 Ongoing tech & growth support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="partner-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/Xq4twuUwDPbEhCwt8"
                className="btn-glass-neon"
              >
                🚀 Start as a partner
              </a>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <div className="img-glass-wrap">
                <img
                  src={par4}
                  alt="Partner"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE INDOKONA */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, #22c55e18, transparent 60%), #020617",
        }}
      >
        <div className="container">
          <div
            className="p-4 p-md-5"
            data-aos="fade-up"
            style={{
              borderRadius: "28px",
              border: "1px solid rgba(148,163,184,0.7)",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
              boxShadow:
                "0 24px 90px rgba(15,23,42,0.95), 0 0 0 1px rgba(30,64,175,0.4)",
            }}
          >
            <h2 className="section-title text-center mb-3">
              Why choose <span className="gradient-text">Indokona</span>?
            </h2>
            <p
              className="section-text text-center mb-4"
              style={{ maxWidth: "760px", margin: "0 auto" }}
            >
              Indokona is a complete ecosystem for{" "}
              <span className="text-highlight">growth</span>,{" "}
              <span className="text-highlight">automation</span> and{" "}
              <span className="text-highlight">scale</span> — built for modern
              fintech, distributors, retailers and SaaS-led businesses.
            </p>

            <div className="row g-4">
              {[
                {
                  title: "Technology-first platform",
                  desc: "Built on modern stack with scalability, speed and reliability at core.",
                },
                {
                  title: "AI & scalable SaaS",
                  desc: "Leverage AI-driven funnels, chatbots and workflows across the journey.",
                },
                {
                  title: "Registered since 2024",
                  desc: "A compliant, registered fintech technology company building long term.",
                },
                {
                  title: "Strong partner network",
                  desc: "Work with a growing network of partners, distributors and retailers.",
                },
                {
                  title: "Secure infrastructure",
                  desc: "Enterprise-grade security and data protection for operations and APIs.",
                },
                {
                  title: "Constantly evolving",
                  desc: "New tools, journeys and automation layers shipping regularly.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="col-md-6 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 70}
                >
                  <div className="why-card h-100">
                    <h5 className="why-title">{card.title}</h5>
                    <p className="why-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <a href="/about" className="btn-glass-outline">
                Learn more about Indokona →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PLATFORM SHOWCASE */}
      <section
        className="py-5"
        style={{
          background: "#020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4 flex-lg-row-reverse">
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <div className="img-glass-wrap">
                <img
                  src={platform}
                  alt="Platform"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <p className="section-kicker">Platform View</p>
              <h2 className="section-title mb-3">
                Unified <span className="gradient-text">platform</span> for
                partners
              </h2>
              <p className="section-text mb-3">
                Mobile-first and desktop-ready dashboards for every stakeholder:
                distributors, retailers, partners and admins.
              </p>

              <ul className="list-unstyled mb-3">
                {[
                  "🛠 Retailer dashboards & journeys",
                  "📦 Distributor & channel panels",
                  "📊 Real-time analytics reports",
                  "🤖 AI-driven chatbot experiences",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="platform-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/qBnTqrLvheNZJ2hC6"
                className="btn-glass-neon"
              >
                👀 See platform in action
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CASE STUDIES */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 0% 100%, #22d3ee18, transparent 60%), #020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="img-glass-wrap">
                <img
                  src={mycase}
                  alt="Case Studies"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="section-kicker">Case Studies</p>
              <h2 className="section-title mb-3">
                Success stories from{" "}
                <span className="gradient-text">our network</span>
              </h2>
              <ul className="list-unstyled">
                {[
                  "📈 Distributor scaled 10x revenue with Indokona stack.",
                  "🚀 Retailer launched a digital business in under 7 days.",
                  "🤖 AI funnels boosted engagement by over 300%.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="platform-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 120}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 BLOG / KNOWLEDGE HUB */}
      <section
        className="py-5"
        style={{
          background: "#020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4 flex-lg-row-reverse">
            <div className="col-lg-6" data-aos="fade-left">
              <div className="img-glass-wrap">
                <img
                  src={blog}
                  alt="Blog"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <p className="section-kicker">Knowledge Hub</p>
              <h2 className="section-title mb-3">
                Stay updated with{" "}
                <span className="gradient-text">Indokona Insight</span>
              </h2>
              <p className="section-text mb-3">
                Learn what&apos;s next in fintech, SaaS and automation.
              </p>
              <ul className="list-unstyled mb-3">
                {[
                  "📊 SaaS & fintech trends",
                  "🤖 AI in business operations",
                  "🚀 Startup & MSME growth hacks",
                  "💡 Partner success playbooks",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="platform-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/blog" className="btn-glass-outline">
                📚 Read articles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 LEARNING & EMPLOYMENT HUB */}
      <section
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, #22c55e20, transparent 60%), #020617",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="img-glass-wrap">
                <img
                  src={learn}
                  alt="Learning"
                  className="img-fluid"
                  style={{
                    borderRadius: "24px",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="section-kicker">Learning & Careers</p>
              <h2 className="section-title mb-3">
                Learning &{" "}
                <span className="gradient-text">employment hub</span>
              </h2>
              <ul className="list-unstyled mb-3">
                {[
                  "📘 Training in digital marketing & SaaS tools",
                  "🤖 AI-powered learning programs",
                  "🎓 With Dream True Academy certifications",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="platform-chip"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://dreamtrueacademy.co.in/"
                className="btn-glass-neon"
              >
                🎓 Start learning today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 GLOBAL STYLES FOR THIS PAGE ONLY */}
      <style>
        {`
        /* Marquee */
        @keyframes marqueeMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Spinning gradient border */
        @keyframes spinBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gradient-text {
          background: linear-gradient(120deg, #22c55e, #22d3ee, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-kicker {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #9ca3af;
          margin-bottom: 0.4rem;
        }

        .section-title {
          color: #e5e7eb;
          font-weight: 700;
          letter-spacing: -0.04em;
          font-size: 2rem;
        }

        .section-text {
          color: #9ca3af;
          font-size: 0.98rem;
        }

        .text-highlight {
          color: #e5e7eb;
          font-weight: 600;
        }

        .divider-line {
          width: 110px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg,#22c55e,#22d3ee,#6366f1);
        }

        .img-glass-wrap {
          border-radius: 28px;
          padding: 6px;
          background: radial-gradient(circle at 0 0, #22c55e40, transparent 60%), radial-gradient(circle at 100% 100%, #22d3ee40, transparent 60%);
          box-shadow: 0 24px 80px rgba(15,23,42,0.9);
        }

        .img-glass-wrap img {
          box-shadow: 0 18px 60px rgba(15,23,42,0.9);
        }

        .btn-glass-neon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.6rem;
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.9);
          background: radial-gradient(circle at 0% 0%, rgba(34,197,94,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.18), transparent 55%), rgba(15,23,42,0.96);
          color: #e5e7eb;
          font-weight: 600;
          font-size: 0.95rem;
          gap: 0.4rem;
          box-shadow: 0 0 0 1px rgba(15,23,42,1), 0 0 24px rgba(34,197,94,0.6);
          text-decoration: none;
          overflow: hidden;
          transition: all 0.2s ease-out;
        }

        .btn-glass-neon::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(from 180deg, transparent, rgba(34,197,94,0.8), rgba(56,189,248,0.8), transparent);
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }

        .btn-glass-neon span {
          position: relative;
          z-index: 1;
        }

        .btn-glass-neon:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 32px rgba(34,197,94,0.8), 0 0 42px rgba(56,189,248,0.7);
        }

        .btn-glass-neon:hover::before {
          opacity: 0.6;
        }

        .btn-glass-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.6rem;
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.8);
          background: rgba(15,23,42,0.8);
          color: #e5e7eb;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-glass-outline:hover {
          background: radial-gradient(circle at 0 0, rgba(34,197,94,0.22), transparent 60%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.22), transparent 60%), rgba(15,23,42,0.96);
          transform: translateY(-2px);
          box-shadow: 0 0 32px rgba(15,23,42,0.9);
        }

        /* Stats */
        .stat-card {
          border-radius: 18px;
          padding: 0.9rem 1rem;
          background: radial-gradient(circle at 0 0, rgba(34,197,94,0.22), transparent 60%), rgba(15,23,42,0.95);
          border: 1px solid rgba(55,65,81,0.9);
          box-shadow: 0 16px 40px rgba(15,23,42,0.9);
        }

        .stat-label {
          color: #9ca3af;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.1rem;
        }

        .stat-value {
          color: #e5e7eb;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.1rem;
        }

        .stat-desc {
          color: #9ca3af;
          font-size: 0.8rem;
          margin-bottom: 0;
        }

        .hero-floating-card {
          border-radius: 22px;
          padding: 1rem 1.15rem;
          background: radial-gradient(circle at 0 0, rgba(34,197,94,0.16), transparent 55%), rgba(15,23,42,0.96);
          border: 1px solid rgba(75,85,99,0.9);
          color: #e5e7eb;
          box-shadow: 0 18px 55px rgba(15,23,42,0.9);
        }

        .hero-floating-card-main {
          transform: translateY(0);
          animation: floatCard 8s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-chip {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #a5b4fc;
        }

        .hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 18px rgba(34,197,94,0.9);
        }

        .pill {
          font-size: 0.75rem;
          border-radius: 999px;
          padding: 0.25rem 0.7rem;
          border: 1px solid rgba(148,163,184,0.7);
          color: #e5e7eb;
          background: rgba(15,23,42,0.9);
          white-space: nowrap;
        }

        .pill-green { border-color: rgba(34,197,94,0.9); }
        .pill-cyan { border-color: rgba(34,211,238,0.9); }
        .pill-indigo { border-color: rgba(79,70,229,0.9); }

        .chip-soft {
          font-size: 0.78rem;
          border-radius: 999px;
          padding: 0.3rem 0.8rem;
          color: #e5e7eb;
          background: rgba(15,23,42,0.9);
          border: 1px solid rgba(75,85,99,0.9);
        }

        .tech-item {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
          padding: 0.6rem 0;
        }

        .tech-icon {
          font-size: 1.35rem;
        }

        .tech-title {
          margin: 0;
          color: #e5e7eb;
          font-weight: 600;
          font-size: 0.98rem;
        }

        .tech-desc {
          margin: 0;
          color: #9ca3af;
          font-size: 0.86rem;
        }

        .feature-chip {
          margin-bottom: 0.65rem;
          border-radius: 16px;
          padding: 0.6rem 0.9rem;
          background: rgba(15,23,42,0.96);
          border: 1px solid rgba(55,65,81,0.9);
          color: #d1d5db;
          font-size: 0.9rem;
          box-shadow: 0 12px 40px rgba(15,23,42,0.9);
        }

        .partner-chip,
        .platform-chip {
          margin-bottom: 0.55rem;
          border-radius: 16px;
          padding: 0.6rem 0.9rem;
          background: rgba(15,23,42,0.96);
          border: 1px solid rgba(55,65,81,0.9);
          color: #d1d5db;
          font-size: 0.9rem;
        }

        .mini-heading {
          color: #e5e7eb;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .why-card {
          border-radius: 18px;
          padding: 1.1rem 1.1rem;
          background: rgba(15,23,42,0.98);
          border: 1px solid rgba(55,65,81,0.9);
          box-shadow: 0 18px 60px rgba(15,23,42,0.9);
        }

        .why-title {
          color: #e5e7eb;
          font-size: 0.98rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .why-desc {
          color: #9ca3af;
          font-size: 0.86rem;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.6rem;
          }
        }
      `}
      </style>

      <Footer />
    </>
  );
}