import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  TrendingUp,
  Search,
  Palette,
  Zap,
  ArrowRight,
  Users,
  Award,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function TechServicesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    {
      icon: <Code />,
      title: "Software Development",
      desc: "Custom software solutions tailored to your business needs",
    },
    {
      icon: <Globe />,
      title: "Website Development",
      desc: "Responsive, modern websites that drive results",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      desc: "iOS & Android apps with seamless user experience",
    },
    {
      icon: <Zap />,
      title: "Website CRM",
      desc: "Customer relationship management systems",
    },
    {
      icon: <Search />,
      title: "SEO Services",
      desc: "Rank higher on Google and drive organic traffic",
    },
    {
      icon: <TrendingUp />,
      title: "Digital Marketing",
      desc: "Complete digital marketing strategies that convert",
    },
    {
      icon: <Globe />,
      title: "Google Listing",
      desc: "Optimize your Google My Business presence",
    },
    {
      icon: <Palette />,
      title: "Graphics & Logo Design",
      desc: "Stunning visuals that represent your brand",
    },
    {
      icon: <Zap />,
      title: "API Integration",
      desc: "Seamless third-party integrations",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(".ts-parallax");
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://indokonabackend-1.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="ts-root">
      <style>{`
        /* ---------- Layout + Theme ---------- */
        .ts-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          background: linear-gradient(135deg, #0f1724 0%, #3b0764 45%, #0f1724 100%);
          min-height: 100vh;
          color: #e6eef8;
          overflow-x: hidden;
        }

        /* Animated gradient background */
        .ts-root::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 50%);
          animation: rotate 20s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Floating particles */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .ts-navbar {
          background: rgba(15, 23, 36, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .ts-navbar.scrolled {
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .ts-brand {
          display:flex; align-items:center; gap:.5rem; font-weight:700; color:#fff;
          transition: transform 0.3s ease;
        }

        .ts-brand:hover {
          transform: scale(1.05);
        }

        .ts-hero {
          padding-top: 6.5rem;
          padding-bottom: 4.5rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .ts-hero h1 {
          font-size: 2.8rem;
          line-height: 1.08;
          margin-bottom: .6rem;
          color: #ffffff;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @media(min-width:768px){
          .ts-hero h1 { font-size: 4.5rem; }
        }

        .ts-gradient-text {
          display:inline-block;
          background: linear-gradient(90deg,#A78BFA,#F472B6,#A78BFA);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight:800;
          animation: shimmer 3s linear infinite;
        }

        .ts-cta .btn-cta {
          background: linear-gradient(90deg,#7c3aed 0%, #ec4899 100%);
          border: none;
          box-shadow: 0 10px 30px rgba(124,58,237,0.3);
          padding: .9rem 1.6rem;
          font-weight:700;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .ts-cta .btn-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .ts-cta .btn-cta:hover::before {
          left: 100%;
        }

        .ts-cta .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(124,58,237,0.5);
        }

        .btn-outline-soft {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          transition: all 0.3s ease;
        }

        .btn-outline-soft:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(167,139,250,0.5);
          transform: translateY(-3px);
        }

        /* Stats */
        .ts-stats .stat-number {
          font-weight:800;
          font-size:1.8rem;
          background: linear-gradient(90deg,#A78BFA,#F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: countUp 0.8s ease-out;
        }

        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Cards / services */
        .ts-card {
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 1.3rem;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .ts-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .ts-card:hover::before {
          opacity: 1;
        }

        .ts-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(124,58,237,0.3);
          background: rgba(255,255,255,0.08);
          border-color: rgba(167,139,250,0.3);
        }

        .ts-icon-circle {
          width:56px;height:56px;border-radius:12px;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1));
          display:flex;align-items:center;justify-content:center;margin-bottom:.75rem;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .ts-card:hover .ts-icon-circle {
          transform: rotateY(360deg) scale(1.1);
          background: linear-gradient(135deg, rgba(124,58,237,0.4), rgba(236,72,153,0.2));
        }

        .ts-icon-circle svg { 
          width:28px;height:28px;color:#b794f4;
          transition: all 0.3s ease;
        }

        .ts-card:hover .ts-icon-circle svg {
          color: #F472B6;
          filter: drop-shadow(0 0 8px rgba(244,114,182,0.5));
        }

        /* Why choose us icons */
        .ts-feature-icon {
          width:80px;height:80px;border-radius:50%;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1));
          display:flex;align-items:center;justify-content:center;margin:0 auto .8rem;
          transition: all 0.5s ease;
          position: relative;
        }

        .ts-feature-icon::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: pulse 2s infinite;
        }

        .ts-feature-icon:hover::before {
          opacity: 0.3;
        }

        .ts-feature-icon:hover {
          transform: scale(1.1) rotateZ(10deg);
        }

        /* Contact form */
        .ts-form {
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }

        .ts-input, .ts-textarea, .ts-select {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          border-radius: .8rem;
          padding: .85rem 1rem;
          transition: all 0.3s ease;
        }

        .ts-input::placeholder, .ts-textarea::placeholder {
          color: rgba(255,255,255,0.45);
        }

        .ts-input:focus, .ts-textarea:focus, .ts-select:focus {
          outline: none;
          box-shadow: 0 8px 25px rgba(124,58,237,0.2);
          border-color: rgba(124,58,237,0.7);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        /* Footer */
        .ts-footer { 
          background: rgba(10,12,18,0.8); 
          color: #bfc9da;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* small helpers */
        .ts-section { 
          padding-top: 4rem; 
          padding-bottom: 4rem;
          position: relative;
          z-index: 1;
        }
        .ts-muted { color: rgba(255,255,255,0.65); }
        
        .ts-fade-up { 
          opacity: 0; 
          transform: translateY(30px); 
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .ts-fade-up.visible { 
          opacity: 1; 
          transform: translateY(0); 
        }

        /* Stagger animation for cards */
        .ts-card {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .ts-card:nth-child(1) { animation-delay: 0.1s; }
        .ts-card:nth-child(2) { animation-delay: 0.2s; }
        .ts-card:nth-child(3) { animation-delay: 0.3s; }
        .ts-card:nth-child(4) { animation-delay: 0.4s; }
        .ts-card:nth-child(5) { animation-delay: 0.5s; }
        .ts-card:nth-child(6) { animation-delay: 0.6s; }
        .ts-card:nth-child(7) { animation-delay: 0.7s; }
        .ts-card:nth-child(8) { animation-delay: 0.8s; }
        .ts-card:nth-child(9) { animation-delay: 0.9s; }

        /* Parallax effect */
        .ts-parallax {
          transition: transform 0.1s ease-out;
        }

        /* Floating animation for hero elements */
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        /* Glow effect on hover for links */
        a.text-decoration-none {
          position: relative;
          transition: all 0.3s ease;
        }

        a.text-decoration-none::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #A78BFA, #F472B6);
          transition: width 0.3s ease;
        }

        a.text-decoration-none:hover::after {
          width: 100%;
        }

        a.text-decoration-none:hover {
          color: #fff !important;
        }

        /* responsive tweaks */
        @media(min-width:992px){
          .ts-card { padding: 1.8rem; border-radius: 18px; }
          .ts-form { padding: 2.5rem; }
        }

        .ts-footer {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #e5e7eb;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-icon {
  color: #a78bfa;
}

.ts-muted {
  color: #9ca3af;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #a78bfa;
  padding-left: 5px;
} 

      `}</style>

      {/* NAVBAR */}
      <nav className="navbar ts-navbar fixed-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between w-100 py-2">
            <div className="d-flex align-items-center ts-brand">
              <Code size={28} color="#a78bfa" />
              <span className="ms-2">Indokona Tech Solutions</span>
            </div>

            <div className="d-none d-md-flex align-items-center gap-4">
              <a href="#services" className="text-decoration-none ts-muted">
                Services
              </a>
              <a href="#about" className="text-decoration-none ts-muted">
                About
              </a>
              <a href="#contact" className="text-decoration-none ts-muted">
                Contact
              </a>
            </div>

            <button
              className="btn btn-sm d-md-none border-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} color="#fff" />
              ) : (
                <Menu size={20} color="#fff" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="d-md-none bg-dark rounded p-3 mt-2">
              <a href="#services" className="d-block py-2 text-white">
                Services
              </a>
              <a href="#about" className="d-block py-2 text-white">
                About
              </a>
              <a href="#contact" className="d-block py-2 text-white">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <header
        className={`ts-hero ${isVisible ? "ts-fade-up visible" : "ts-fade-up"}`}
      >
        <div className="container">
          <h1 className="ts-parallax" data-speed="0.2">
            Transform Your Business{" "}
            <span className="ts-gradient-text d-block float-animation">
              Digitally
            </span>
          </h1>
          <p
            className="lead ts-muted mx-auto ts-parallax"
            style={{ maxWidth: 900 }}
            data-speed="0.15"
          >
            From websites to mobile apps, SEO to digital marketing — we build
            solutions that drive growth.
          </p>

          <div className="d-flex gap-3 justify-content-center mt-4 ts-cta">
            <a
              href="#contact"
              className="btn btn-cta d-inline-flex align-items-center"
            >
              Get Free Consultation <ArrowRight size={16} className="ms-2" />
            </a>
            <a
              href="#services"
              className="btn btn-outline-soft d-inline-flex align-items-center"
            >
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="ts-section ts-stats">
        <div className="container">
          <div className="row text-center">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3 mb-3">
                <div className="stat-number">{s.number}</div>
                <div className="ts-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="ts-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="h3">Our Services</h2>
            <p className="ts-muted">
              Comprehensive digital solutions for your business
            </p>
          </div>

          <div className="row gy-4">
            {services.map((svc, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="ts-card h-100">
                  <div className="ts-icon-circle">
                    {React.cloneElement(svc.icon, { size: 22 })}
                  </div>
                  <h5 className="mb-2">{svc.title}</h5>
                  <p className="ts-muted mb-0">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="ts-section bg-transparent">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h3">Why Choose Us?</h2>
            <p className="ts-muted">We deliver excellence in every project</p>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 text-center mb-4">
              <div className="ts-feature-icon mb-3">
                {React.cloneElement(<Award />, { size: 28 })}
              </div>
              <h5>Quality First</h5>
              <p className="ts-muted">
                We never compromise on quality. Every project is delivered with
                perfection.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center mb-4">
              <div className="ts-feature-icon mb-3">
                {React.cloneElement(<Users />, { size: 28 })}
              </div>
              <h5>Client Focused</h5>
              <p className="ts-muted">
                Your success is our priority. We work closely with you at every
                step.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center mb-4">
              <div className="ts-feature-icon mb-3">
                {React.cloneElement(<Zap />, { size: 28 })}
              </div>
              <h5>Fast Delivery</h5>
              <p className="ts-muted">
                Quick turnaround times without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ts-section">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="text-center mb-4">
              <h2 className="h3">Get Started Today</h2>
              <p className="ts-muted">
                Let's discuss your project and grow your business together
              </p>
            </div>

            <div className="ts-form">
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control ts-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-control ts-input"
                  />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="form-control ts-input"
                  />
                </div>
                <div className="col-md-6">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select ts-select"
                  >
                    <option value="">Select Service</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="seo">SEO</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="design">Graphics/Logo Design</option>
                    <option value="software">Software Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="form-control ts-textarea"
                />
              </div>

              <div className="d-grid">
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ts-footer pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row text-center text-md-start align-items-center">
            {/* Brand */}
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <Code size={22} className="footer-icon" />
                <h5 className="ms-2 mb-0 fw-bold">Indokona Tech Solutions</h5>
              </div>
              <p className="ts-muted small">
                Building digital solutions that transform businesses.
              </p>
            </div>

            {/* Links */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="fw-semibold mb-3">Legal Links</h6>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/terms&conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/refundpolicy">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="col-md-4 text-center text-md-end">
              <small className="text-light d-block mb-1">
                © {new Date().getFullYear()} Indokona Tech Solutions
              </small>
              <small className="ts-muted">All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
