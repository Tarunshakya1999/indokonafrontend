import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
import "./index.css";

// ✅ AOS
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "./Axios";

// ✅ Images
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

  const hero = Data[0] || {};

  const stats = [
    { label: "Partners", value: "150+", note: "Distributors & retailers" },
    { label: "APIs", value: "40+", note: "Fintech & SaaS endpoints" },
    { label: "Automation", value: "10K+", note: "Workflows & triggers" },
  ];

  const ecosystem = [
    { label: "Indokona Fintech", short: "Fintech" },
    { label: "Indokona (Core)", short: "Core" },
    { label: "Indokona Suite", short: "Suite" },
    { label: "Indokona SaaS", short: "SaaS" },
    { label: "Indokona Mind 2 Market", short: "M2M" },
    { label: "Indokona Digital Store", short: "Store" },
    { label: "Indokona Business Wall", short: "Business Wall" },
    { label: "Indokona Idea to Empire Academy", short: "Academy" },
  ];

  const featureChips = [
    "AI chatbots & journeys",
    "Lead & sales funnels",
    "Digital onboarding flows",
    "Realtime analytics",
  ];

  return (
    <>
      <Navbar />

      {/* ✅ Animated Marquee (same as before) */}
      <div
        className="marquee-container mt-0 mb-0"
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

      {/* ⚡ NEW FUTURISTIC HERO (Tailwind style) */}
      <section
        className="position-relative"
        style={{ backgroundColor: "#030712" }}
      >
        <div className="min-vh-100 w-100 text-white position-relative overflow-hidden d-flex align-items-center">
          {/* 🔵 Gradient mesh background */}
          <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
            <div className="position-absolute" style={{
              top: "-160px",
              left: "-160px",
              width: "420px",
              height: "420px",
              background: "#1e40af55",
              filter: "blur(130px)",
              borderRadius: "999px"
            }} />
            <div className="position-absolute" style={{
              bottom: "-160px",
              right: "-160px",
              width: "460px",
              height: "460px",
              background: "#22c55e66",
              filter: "blur(150px)",
              borderRadius: "999px"
            }} />
            <div className="position-absolute" style={{
              top: "30%",
              right: "20%",
              width: "320px",
              height: "320px",
              background: "#38bdf820",
              filter: "blur(130px)",
              borderRadius: "999px"
            }} />
          </div>

          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center g-4">
              {/* LEFT: Logo + Text + CTAs */}
              <div className="col-lg-6" data-aos="fade-right">
                {/* Logo from API */}
                {hero.image && (
                  <div
                    className="mb-3 d-inline-flex align-items-center gap-3"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  >
                    <div
                      className="position-relative d-inline-block"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "-10px",
                          top: "50%",
                          width: "8px",
                          height: "8px",
                          background: "#22c55e",
                          borderRadius: "50%",
                          animation: "blink 1s infinite",
                          transform: "translateY(-50%)",
                        }}
                      ></span>
                      <span
                        style={{
                          position: "absolute",
                          right: "-10px",
                          top: "50%",
                          width: "8px",
                          height: "8px",
                          background: "#38bdf8",
                          borderRadius: "50%",
                          animation: "blink 1s infinite",
                          transform: "translateY(-50%)",
                        }}
                      ></span>
                      <img
                        src={hero.image}
                        alt={hero.name}
                        className="rounded-circle border border-3 border-warning"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          boxShadow: "0 0 25px rgba(234,179,8,0.7)",
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-uppercase mb-1"
                        style={{
                          letterSpacing: "0.2em",
                          fontSize: "0.7rem",
                          color: "#9ca3af"
                        }}>
                        Next-gen fintech • SaaS • Automation
                      </p>
                      <p
                        className="mb-0 fw-semibold"
                        style={{ color: "#e5e7eb", fontSize: "0.85rem" }}
                      >
                        Indokona Credit Bazar Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                )}

                <h1 className="fw-bold"
                  style={{
                    fontSize: "2.4rem",
                    lineHeight: 1.2,
                    color: "#e5e7eb"
                  }}
                >
                  {hero.name || "Build on"}
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#22c55e,#38bdf8,#6366f1)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      marginLeft: "8px",
                    }}
                  >
                    Indokona
                  </span>
                </h1>

                <p className="mt-3"
                  style={{ color: "#9ca3af", fontSize: "0.95rem", maxWidth: "480px" }}
                >
                  {hero.tagline ||
                    "India's automation-first fintech & SaaS ecosystem for distributors, retailers & startups."}
                </p>
                <p
                  className="mt-1"
                  style={{ color: "#94a3b8", fontSize: "0.9rem", maxWidth: "480px" }}
                >
                  {hero.supportline ||
                    "Launch journeys, APIs & partner platforms in days, not months."}
                </p>

                {/* Feature chips */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {featureChips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-pill"
                      style={{
                        border: "1px solid rgba(148,163,184,0.35)",
                        background: "rgba(15,23,42,0.65)",
                        fontSize: "0.7rem",
                        color: "#cbd5e1",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link
                    to="/suite"
                    className="btn rounded-pill px-4 py-2 fw-semibold"
                    style={{
                      border: "1px solid rgba(34,197,94,0.8)",
                      background: "#052e16",
                      color: "#bbf7d0",
                      boxShadow: "0 0 22px rgba(34,197,94,0.7)",
                    }}
                  >
                    Book a Demo
                  </Link>
                  <Link
                    to="/fintech"
                    className="btn rounded-pill px-4 py-2 fw-semibold"
                    style={{
                      border: "1px solid rgba(148,163,184,0.4)",
                      background: "rgba(15,23,42,0.6)",
                      color: "#e5e7eb",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Explore Ecosystem
                  </Link>
                </div>

                {/* Old Fintech / Suite / SAAS / M2M buttons as secondary */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {[
                    { name: "Indokona Fintech", link: "/fintech" },
                    { name: "Indokona Suite", link: "/suite" },
                    { name: "Indokona SAAS", link: "/saas" },
                    { name: "Indokona M2M", link: "/m2m" },
                  ].map((btn, i) => (
                    <Link
                      key={i}
                      to={btn.link}
                      className="btn btn-outline-light rounded-pill px-3 py-1 fw-semibold"
                      style={{
                        fontSize: "0.75rem",
                        borderColor: "rgba(148,163,184,0.5)",
                      }}
                    >
                      {btn.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT: 3D Dashboard Mockup (static) */}
              <div className="col-lg-6" data-aos="fade-left">
                <div className="position-relative mx-auto" style={{ maxWidth: "420px" }}>
                  {/* Outer glow */}
                  <div
                    className="position-absolute"
                    style={{
                      inset: "-24px",
                      borderRadius: "32px",
                      border: "1px solid #1e293b",
                      background:
                        "radial-gradient(circle at 0 0,#22c55e33,transparent 55%),radial-gradient(circle at 100% 100%,#38bdf833,transparent 55%)",
                      opacity: 0.9,
                    }}
                  ></div>
                  <div
                    className="position-absolute"
                    style={{
                      inset: "-40px",
                      borderRadius: "40px",
                      background:
                        "radial-gradient(circle at 0 0,rgba(34,197,94,0.28),transparent 55%),radial-gradient(circle at 100% 100%,rgba(56,189,248,0.3),transparent 55%)",
                      filter: "blur(28px)",
                      opacity: 0.8,
                    }}
                  ></div>

                  {/* Card */}
                  <div
                    className="position-relative rounded-4"
                    style={{
                      border: "1px solid rgba(249,250,251,0.16)",
                      background:
                        "linear-gradient(135deg,#020617,#020617,#020617)",
                      padding: "16px",
                      boxShadow: "0 26px 80px rgba(0,0,0,0.9)",
                      backdropFilter: "blur(18px)",
                    }}
                  >
                    {/* Top status */}
                    <div className="d-flex justify-content-between align-items-center mb-2"
                      style={{ fontSize: "0.7rem", color: "#9ca3af" }}
                    >
                      <span className="d-flex align-items-center gap-1">
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "999px",
                            background: "#22c55e",
                            boxShadow: "0 0 12px rgba(74,222,128,0.9)",
                          }}
                        ></span>
                        Live Workspace
                      </span>
                      <span>indokona.cloud</span>
                    </div>

                    {/* Grid inside card */}
                    <div className="row g-2">
                      {/* Left column */}
                      <div className="col-7">
                        <div
                          className="mb-2 rounded-3"
                          style={{
                            border: "1px solid rgba(248,250,252,0.18)",
                            background: "rgba(248,250,252,0.08)",
                            padding: "8px",
                          }}
                        >
                          <div
                            className="d-flex justify-content-between mb-1"
                            style={{
                              fontSize: "0.7rem",
                              color: "#9ca3af",
                            }}
                          >
                            <span>Partner performance</span>
                            <span style={{ color: "#4ade80" }}>+18.4%</span>
                          </div>
                          <div className="d-flex align-items-end gap-1"
                            style={{ height: "65px", overflow: "hidden" }}
                          >
                            {[40, 60, 45, 80, 65, 90].map((h, i) => (
                              <div
                                key={i}
                                style={{
                                  flex: 1,
                                  height: `${h}%`,
                                  borderRadius: "999px 999px 0 0",
                                  background:
                                    "linear-gradient(to top,#111827,#22c55ecc,#a7f3d0)",
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="d-flex gap-2">
                          <div
                            className="flex-fill rounded-3"
                            style={{
                              border: "1px solid rgba(248,250,252,0.18)",
                              background: "rgba(248,250,252,0.08)",
                              padding: "8px",
                              fontSize: "0.7rem",
                              color: "#9ca3af",
                            }}
                          >
                            <div className="d-flex justify-content-between mb-1">
                              <span>AI funnels</span>
                              <span style={{ color: "#4ade80" }}>
                                84% active
                              </span>
                            </div>
                            <div
                              style={{
                                height: "6px",
                                borderRadius: "999px",
                                overflow: "hidden",
                                background: "#020617",
                              }}
                            >
                              <div
                                style={{
                                  width: "84%",
                                  height: "100%",
                                  borderRadius: "999px",
                                  background:
                                    "linear-gradient(90deg,#22c55e,#38bdf8)",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div
                            className="flex-fill rounded-3"
                            style={{
                              border: "1px solid rgba(248,250,252,0.18)",
                              background: "rgba(248,250,252,0.08)",
                              padding: "8px",
                              fontSize: "0.7rem",
                              color: "#9ca3af",
                            }}
                          >
                            <div className="d-flex justify-content-between mb-1">
                              <span>APIs uptime</span>
                              <span style={{ color: "#7dd3fc" }}>99.9%</span>
                            </div>
                            <div className="d-flex gap-1" style={{ height: "24px" }}>
                              {["Fin", "Suite", "SaaS", "M2M"].map((t) => (
                                <span
                                  key={t}
                                  className="flex-fill d-flex align-items-center justify-content-center rounded-pill"
                                  style={{
                                    background: "#020617",
                                    fontSize: "0.65rem",
                                    color: "#e5e7eb",
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className="col-5">
                        <div
                          className="mb-2 rounded-3"
                          style={{
                            border: "1px solid rgba(248,250,252,0.18)",
                            background: "rgba(248,250,252,0.08)",
                            padding: "8px",
                            fontSize: "0.7rem",
                            color: "#9ca3af",
                          }}
                        >
                          <div className="d-flex justify-content-between mb-1">
                            <span>Network</span>
                            <span style={{ color: "#e5e7eb" }}>
                              Indokona Mesh
                            </span>
                          </div>
                          <div
                            className="position-relative"
                            style={{
                              height: "80px",
                              background: "#020617",
                              borderRadius: "10px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              className="position-absolute top-50 start-50 translate-middle"
                              style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "999px",
                                border: "1px solid #1f2937",
                              }}
                            ></div>
                            <div
                              className="position-absolute top-50 start-50 translate-middle"
                              style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "999px",
                                border: "1px solid #22c55e66",
                              }}
                            ></div>
                            <div
                              className="position-absolute top-50 start-50 translate-middle"
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "999px",
                                background: "#22c55e",
                                boxShadow:
                                  "0 0 18px rgba(74,222,128,0.9)",
                              }}
                            ></div>
                          </div>
                        </div>

                        <div
                          className="rounded-3"
                          style={{
                            border: "1px solid rgba(248,250,252,0.18)",
                            background: "rgba(248,250,252,0.08)",
                            padding: "8px",
                            fontSize: "0.7rem",
                            color: "#9ca3af",
                          }}
                        >
                          <div className="d-flex justify-content-between mb-1">
                            <span>Live events</span>
                            <span style={{ color: "#c4b5fd" }}>
                              +1,284 today
                            </span>
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {[
                              "Onboarding",
                              "Payout",
                              "Refund",
                              "KYC",
                              "Webhook",
                            ].map((t) => (
                              <span
                                key={t}
                                className="px-2 py-1 rounded-pill"
                                style={{
                                  background: "#020617",
                                  fontSize: "0.6rem",
                                  color: "#e5e7eb",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="position-absolute"
                    style={{
                      left: "-18px",
                      top: "14px",
                      animation: "float 6s ease-in-out infinite",
                    }}
                  >
                    <div
                      className="px-2 py-1 rounded-pill d-flex align-items-center gap-1"
                      style={{
                        background: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(248,250,252,0.15)",
                        color: "#e5e7eb",
                        fontSize: "0.7rem",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                      }}
                    >
                      <span>⚡</span> Automation engine
                    </div>
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      right: "-18px",
                      top: "33%",
                      animation:
                        "float 7s ease-in-out infinite 0.5s",
                    }}
                  >
                    <div
                      className="px-2 py-1 rounded-pill d-flex align-items-center gap-1"
                      style={{
                        background: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(248,250,252,0.15)",
                        color: "#e5e7eb",
                        fontSize: "0.7rem",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                      }}
                    >
                      <span>🤖</span> AI funnels
                    </div>
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      left: "-10px",
                      bottom: "18px",
                      animation:
                        "float 7s ease-in-out infinite 1.1s",
                    }}
                  >
                    <div
                      className="px-2 py-1 rounded-pill d-flex align-items-center gap-1"
                      style={{
                        background: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(248,250,252,0.15)",
                        color: "#e5e7eb",
                        fontSize: "0.7rem",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                      }}
                    >
                      <span>🔗</span> Fintech APIs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS ROW */}
            <div className="row mt-5" data-aos="fade-up">
              <div
                className="col-12 rounded-4 p-3"
                style={{
                  border: "1px solid rgba(248,250,252,0.12)",
                  background: "rgba(3,7,18,0.85)",
                  boxShadow: "0 22px 70px rgba(0,0,0,0.85)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="row g-4">
                  {stats.map((s) => (
                    <div key={s.label} className="col-12 col-md-4">
                      <p
                        className="text-uppercase mb-1"
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.18em",
                          color: "#9ca3af",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        className="mb-1 fw-semibold"
                        style={{ fontSize: "1.5rem", color: "#e5e7eb" }}
                      >
                        {s.value}
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "0.78rem", color: "#9ca3af" }}
                      >
                        {s.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ECOSYSTEM ORBIT + CARDS (8 PRODUCTS) */}
            <div className="row align-items-center mt-5 g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <p
                  className="text-uppercase mb-2"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.22em",
                    color: "#9ca3af",
                  }}
                >
                  Indokona ecosystem
                </p>
                <h2
                  className="fw-bold mb-2"
                  style={{ fontSize: "1.8rem", color: "#e5e7eb" }}
                >
                  One Stack. Many Layers.
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                    maxWidth: "420px",
                  }}
                >
                  Fintech rails, SaaS journeys, automation engines and digital
                  products – all connected through a single Indokona core for
                  India&apos;s partner network.
                </p>
              </div>

              {/* ORBIT */}
              <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-left">
                <div
                  className="position-relative"
                  style={{ width: "260px", height: "260px" }}
                >
                  <div
                    className="position-absolute inset-0 rounded-circle"
                    style={{ border: "1px solid #1f2937" }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      inset: "18px",
                      borderRadius: "999px",
                      border: "1px solid #22c55e55",
                    }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      inset: "46px",
                      borderRadius: "999px",
                      border: "1px solid #38bdf855",
                    }}
                  />
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center"
                    style={{
                      inset: "86px",
                      borderRadius: "999px",
                      background: "#020617",
                      boxShadow: "0 0 30px rgba(15,23,42,0.9)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#9ca3af",
                        fontWeight: 600,
                      }}
                    >
                      Indokona Core
                    </span>
                  </div>

                  {/* Orbiting pills */}
                  {ecosystem.map((item, index) => (
                    <div
                      key={item.label}
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        width: "120px",
                        height: "36px",
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        animation: "orbit 18s linear infinite",
                        animationDelay: `${index * 0.4}s`,
                      }}
                    >
                      <div
                        className="px-2 py-1 rounded-pill text-truncate"
                        title={item.label}
                        style={{
                          border: "1px solid rgba(248,250,252,0.16)",
                          background: "#020617",
                          fontSize: "0.72rem",
                          color: "#e5e7eb",
                          boxShadow:
                            "0 12px 30px rgba(0,0,0,0.8)",
                        }}
                      >
                        {item.short}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Layer cards */}
            <div className="row mt-4 g-3" data-aos="fade-up">
              {ecosystem.map((item, i) => (
                <div key={item.label} className="col-12 col-md-6 col-lg-3">
                  <div
                    className="h-100 rounded-4 p-3"
                    style={{
                      border: "1px solid rgba(148,163,184,0.4)",
                      background: "rgba(15,23,42,0.85)",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    <p
                      className="mb-1 fw-semibold"
                      style={{
                        fontSize: "0.95rem",
                        color: "#e5e7eb",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="mb-0"
                      style={{ fontSize: "0.8rem", color: "#9ca3af" }}
                    >
                      {i === 0 &&
                        "Fintech rails, portals & API infra for India-first journeys."}
                      {i === 1 &&
                        "The central orchestration & automation engine of Indokona."}
                      {i === 2 &&
                        "Automation, marketing & business tools for partners."}
                      {i === 3 &&
                        "Scalable SaaS journeys, CRM & workflow layers."}
                      {i === 4 &&
                        "Mind to Market: take ideas to live digital products & funnels."}
                      {i === 5 &&
                        "Digital storefront for subscriptions, licences & SaaS bundles."}
                      {i === 6 &&
                        "Business Wall for posts, reels & verified business branding."}
                      {i === 7 &&
                        "Idea to Empire Academy for learning, skills & certifications."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animations for hero */}
          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-6px); }
              }
              @keyframes blink {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0; }
              }
              @keyframes orbit {
                0% { transform: rotate(0deg) translateX(7rem) rotate(0deg); }
                100% { transform: rotate(360deg) translateX(7rem) rotate(-360deg); }
              }
            `}
          </style>
        </div>
      </section>

      {/* ✅ About Us (as-is) */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #fff5f7, #f0f0ff)",
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
                  (e.currentTarget.style.transform =
                    "scale(1.08) rotate(1deg)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1.02) rotate(0deg)")
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
                <b>Indokona Credit Bazar Pvt. Ltd.</b> is a registered fintech
                technology company building a{" "}
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

      {/* ✅ Technology Ecosystem (old, kept same) */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
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
                  </span>{" "}
                  –{" "}
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
                  (e.currentTarget.style.transform =
                    "scale(1.02) rotate(0deg)")
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ (BAAKI SAARE SECTIONS SAME AS YOUR CODE – Key Features, Partner, Why Choose, Platform, Case Studies, Blog, Learning, Extra CSS, Footer) */}

      {/* ... 👇 yahan se aapka existing code as-is (Key Features se lekar Footer tak) ... */}

      {/* ⚠️ To keep message short, maine upar sirf Hero + Ecosystem part rewrite kiya.
          Aap apne original file me:
          - Hero section ko is naye Hero se replace karo
          - Baaki sare sections (Key Features, Partner, Blog, Learning, Footer) JAISE HAI WAISE CHHOD DO
      */}

      <Footer />
    </>
  );
}