import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import "./index.css";

const Navbar = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{ background: "linear-gradient(90deg, #0a3d62, #1e3799)", zIndex: 1030 }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white fs-4 d-flex align-items-center" to="/">
          <i className="fa-solid fa-lock me-2"></i>
          Indokona
          <span style={{ color: "#f1c40f", marginLeft: "6px" }}>FinTech</span>
        </Link>

        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link cool-link d-flex align-items-center" to="/"><FaHome className="me-2" /> Home</Link></li>
            <li className="nav-item"><Link className="nav-link cool-link d-flex align-items-center" to="/about"><FaInfoCircle className="me-2" /> About</Link></li>
            <li className="nav-item"><Link className="nav-link cool-link d-flex align-items-center" to="/services"><FaServicestack className="me-2" /> Services</Link></li>
            <li className="nav-item"><Link className="nav-link cool-link d-flex align-items-center" to="/contact"><FaEnvelope className="me-2" /> Contact</Link></li>
          </ul>

          {username ? (
            <div className="ms-lg-3 d-flex align-items-center">
              <span className="text-white me-3 fw-bold">Welcome, {username}</span>
              <button onClick={handleLogout} className="btn btn-danger rounded-pill px-4 fw-bold d-flex align-items-center">
                <FaSignOutAlt className="me-2" /> Logout
              </button>
            </div>
          ) : (
            <div className="ms-lg-3 d-flex">
              <Link to="/login" className="btn btn-outline-light rounded-pill px-4 me-2 d-flex align-items-center"><FiLogIn className="me-2" /> Login</Link>
              <Link to="/register" className="btn btn-warning rounded-pill px-4 fw-bold d-flex align-items-center"><FaUserPlus className="me-2" /> Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// -------------------------------------------
// MindToMarketPage Component
// -------------------------------------------
const MindToMarketPage = () => {
  const COLORS = {
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#ffc107",
    light: "#f8f9fa",
    dark: "#212529",
    success: "#28a745",
    danger: "#dc3545",
    info: "#17a2b8",
  };

  const CARD_SHADOW = "0 0.5rem 1rem rgba(0, 0, 0, 0.05)";
  const BORDER_RADIUS = "0.75rem";

  const FeatureIcon = ({ iconClass, title, description }) => (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 p-4 border-0" style={{ borderRadius: BORDER_RADIUS, boxShadow: CARD_SHADOW }}>
        <div className="card-body text-center">
          <div style={{ fontSize: "2.5em" }}>{iconClass}</div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );

  const ModuleCard = ({ icon, title, items, color }) => (
    <div className="col-lg-6 mb-4">
      <div className="p-4 h-100" style={{ backgroundColor: "#fff", borderRadius: BORDER_RADIUS, boxShadow: CARD_SHADOW, borderLeft: `4px solid ${color}` }}>
        <h4 className="fw-bold mb-3" style={{ color: color }}><i className={`fas ${icon} me-2`}></i>{title}</h4>
        <ul className="list-unstyled mb-0">
          {items.map((item, index) => (
            <li key={index} className="mb-2"><span className="badge me-2" style={{ backgroundColor: color }}>✓</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <Navbar /> {/* ✅ Navbar added here */}

      <div className="container-fluid p-0" style={{ scrollBehavior: "smooth" }}>
        {/* Hero Section */}
        <section className="py-6 py-lg-7 text-white text-center" style={{ backgroundColor: COLORS.dark, backgroundImage: "linear-gradient(135deg, #0f4c75 0%, #367c9c 100%)" }}>
          <div className="container py-5">
            <p className="lead text-uppercase fw-bold" style={{ letterSpacing: "2px", color: COLORS.accent }}>India’s First All-in-One AI SaaS</p>
            <h1 className="display-3 fw-bolder mb-4">Run Your Entire Business from <span style={{ color: COLORS.accent }}>WhatsApp</span> — AI-Powered, Platform-Driven</h1>
            <p className="lead w-75 mx-auto mb-5 opacity-75">MindToMarket™ integrates Branding, Legal, Marketing, CRM, HR, and FinTech Automation. Use simple chat or voice commands on mobile or web to run everything.</p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button className="btn btn-warning btn-lg fw-bold px-4 py-2 text-dark border-0" style={{ borderRadius: "50px", boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)" }}>🚀 Free Live Demo</button>
              <button className="btn btn-outline-light btn-lg fw-bold px-4 py-2" style={{ borderRadius: "50px" }}>💬 WhatsApp AI Demo</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: COLORS.light }}>
          <div className="container">
            <h2 className="text-center display-5 fw-bold mb-5">Core Features that Drive Growth 🚀</h2>
            <div className="row">
              <FeatureIcon iconClass="💬" title="WhatsApp-First AI Control" description="Execute all business commands—from creating ads to tracking payroll—via chat or voice." />
              <FeatureIcon iconClass="🎨" title="Instant AI Branding Kit" description="Generate a complete brand kit: name, logo, letterhead, and visiting card in a single click." />
              <FeatureIcon iconClass="⚖️" title="Legal & Registration Hub" description="Automated guidance and form generation for Trademark, GST, MSME, DPIIT Startup, and company registration." />
              <FeatureIcon iconClass="📈" title="Full Marketing SaaS" description="Automated WhatsApp, Email, Meta Ads, Funnels, and Auto-calls, all managed by AI." />
              <FeatureIcon iconClass="💼" title="Complete CRM + HR Suite" description="Seamless Lead-to-Billing pipeline and full employee automation." />
              <FeatureIcon iconClass="💰" title="FinTech & Expense Tracking" description="Automatic GST invoice generation, expense logging, and P&L statements directly via WhatsApp command." />
              <FeatureIcon iconClass="🔒" title="Security First Architecture" description="Zero external uploads allowed. All content is generated on the platform to ensure data integrity and security." />
              <FeatureIcon iconClass="🛡️" title="Meta Policy & Data Compliance" description="Built-in tools ensure all WhatsApp communications adhere strictly to Meta's Business and Commerce Policies." />
            </div>
          </div>
        </section>

        {/* Add other sections (Modules, Meta Policy, WhatsApp Commands, CTA, Footer) here like previous code */}

      </div>
    </>
  );
};

export default MindToMarketPage;
