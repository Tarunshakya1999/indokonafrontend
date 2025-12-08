import React, { useState, useEffect } from "react";
import axios from "axios";
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
    { icon: <Globe />, title: "Website Development", desc: "Responsive, modern websites that drive results" },
    { icon: <Smartphone />, title: "Mobile Applications", desc: "iOS & Android apps with seamless user experience" },
    { icon: <Zap />, title: "Website CRM", desc: "Customer relationship management systems" },
    { icon: <Search />, title: "SEO Services", desc: "Rank higher on Google and drive organic traffic" },
    { icon: <TrendingUp />, title: "Digital Marketing", desc: "Complete digital marketing strategies that convert" },
    { icon: <Globe />, title: "Google Listing", desc: "Optimize your Google My Business presence" },
    { icon: <Palette />, title: "Graphics & Logo Design", desc: "Stunning visuals that represent your brand" },
    { icon: <Zap />, title: "API Integration", desc: "Seamless third-party integrations" },
  ];
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ];

  useEffect(() => {
    // small animate in
    setTimeout(() => setIsVisible(true), 80);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // change endpoint if needed
      await axios.post("https://indokonabackend-1.onrender.com/api/contact/", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="ts-root">
      {/* Inline CSS for this component */}
      <style>{`
        /* ---------- Layout + Theme ---------- */
        .ts-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          background: linear-gradient(135deg, #0f1724 0%, #3b0764 45%, #0f1724 100%);
          min-height: 100vh;
          color: #e6eef8;
        }

        .ts-navbar {
          background: rgba(15, 23, 36, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .ts-brand {
          display:flex; align-items:center; gap:.5rem; font-weight:700; color:#fff;
        }

        .ts-hero {
          padding-top: 6.5rem;
          padding-bottom: 4.5rem;
          text-align: center;
        }

        .ts-hero h1 {
          font-size: 2.8rem;
          line-height: 1.03;
          margin-bottom: .6rem;
          color: #ffffff;
        }

        @media(min-width:768px){
          .ts-hero h1 { font-size: 4rem; }
        }

        .ts-gradient-text {
          display:inline-block;
          background: linear-gradient(90deg,#A78BFA,#F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight:800;
        }

        .ts-cta .btn-cta {
          background: linear-gradient(90deg,#7c3aed 0%, #ec4899 100%);
          border: none;
          box-shadow: 0 10px 30px rgba(124,58,237,0.12);
          padding: .9rem 1.6rem;
          font-weight:700;
        }
        .btn-outline-soft {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          color: #fff;
        }

        /* Stats */
        .ts-stats .stat-number {
          font-weight:800;
          font-size:1.8rem;
          background: linear-gradient(90deg,#A78BFA,#F472B6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Cards / services */
        .ts-card {
          background: rgba(255,255,255,0.04);
          border-radius: 14px;
          padding: 1.3rem;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .ts-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(2,6,23,0.5);
          background: rgba(255,255,255,0.06);
        }
        .ts-icon-circle {
          width:56px;height:56px;border-radius:12px;
          background: linear-gradient(180deg, rgba(124,58,237,0.12), rgba(236,72,153,0.06));
          display:flex;align-items:center;justify-content:center;margin-bottom:.75rem;
        }
        .ts-icon-circle svg { width:28px;height:28px;color:#b794f4; }

        /* Why choose us icons */
        .ts-feature-icon {
          width:72px;height:72px;border-radius:50%;
          background: rgba(124,58,237,0.12);
          display:flex;align-items:center;justify-content:center;margin:0 auto .8rem;
        }

        /* Contact form */
        .ts-form {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .ts-input, .ts-textarea, .ts-select {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          color: #fff;
          border-radius: .6rem;
          padding: .75rem .9rem;
        }
        .ts-input::placeholder, .ts-textarea::placeholder {
          color: rgba(255,255,255,0.45);
        }
        .ts-input:focus, .ts-textarea:focus, .ts-select:focus {
          outline: none;
          box-shadow: 0 6px 20px rgba(124,58,237,0.12);
          border-color: rgba(124,58,237,0.7);
        }

        /* Footer */
        .ts-footer { background: rgba(10,12,18,0.6); color: #bfc9da; }

        /* small helpers */
        .ts-section { padding-top: 3.5rem; padding-bottom: 3.5rem; }
        .ts-muted { color: rgba(255,255,255,0.65); }
        .ts-fade-up { opacity: 0; transform: translateY(10px); transition: all .7s ease; }
        .ts-fade-up.visible { opacity: 1; transform: translateY(0); }

        /* responsive tweaks */
        @media(min-width:992px){
          .ts-card { padding: 1.6rem; border-radius: 16px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar ts-navbar fixed-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between w-100 py-2">
            <div className="d-flex align-items-center ts-brand">
              <Code size={28} color="#a78bfa" />
              <span className="ms-2">TechSolutions</span>
            </div>

            <div className="d-none d-md-flex align-items-center gap-4">
              <a href="#services" className="text-decoration-none ts-muted">Services</a>
              <a href="#about" className="text-decoration-none ts-muted">About</a>
              <a href="#contact" className="text-decoration-none ts-muted">Contact</a>
            </div>

            <button
              className="btn btn-sm d-md-none border-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="toggle menu"
            >
              {isMenuOpen ? <X size={20} color="#fff" /> : <Menu size={20} color="#fff" />}
            </button>
          </div>

          {/* mobile menu */}
          {isMenuOpen && (
            <div className="d-md-none bg-dark rounded p-3 mt-2">
              <a href="#services" className="d-block py-2 text-white">Services</a>
              <a href="#about" className="d-block py-2 text-white">About</a>
              <a href="#contact" className="d-block py-2 text-white">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <header className={`ts-hero ${isVisible ? "ts-fade-up visible" : "ts-fade-up"}`}>
        <div className="container">
          <h1>
            Transform Your Business <span className="ts-gradient-text d-block">Digitally</span>
          </h1>
          <p className="lead ts-muted mx-auto" style={{ maxWidth: 900 }}>
            From websites to mobile apps, SEO to digital marketing — we build solutions that drive growth.
          </p>

          <div className="d-flex gap-3 justify-content-center mt-4 ts-cta">
            <a href="#contact" className="btn btn-cta d-inline-flex align-items-center">
              Get Free Consultation <ArrowRight size={16} className="ms-2" />
            </a>
            <a href="#services" className="btn btn-outline-soft d-inline-flex align-items-center">
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
            <p className="ts-muted">Comprehensive digital solutions for your business</p>
          </div>

          <div className="row gy-4">
            {services.map((svc, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="ts-card h-100">
                  <div className="ts-icon-circle">
                    {/* render icon */}
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
              <div className="ts-feature-icon mb-3">{React.cloneElement(<Award />, { size: 28 })}</div>
              <h5>Quality First</h5>
              <p className="ts-muted">We never compromise on quality. Every project is delivered with perfection.</p>
            </div>

            <div className="col-12 col-md-4 text-center mb-4">
              <div className="ts-feature-icon mb-3">{React.cloneElement(<Users />, { size: 28 })}</div>
              <h5>Client Focused</h5>
              <p className="ts-muted">Your success is our priority. We work closely with you at every step.</p>
            </div>

            <div className="col-12 col-md-4 text-center mb-4">
              <div className="ts-feature-icon mb-3">{React.cloneElement(<Zap />, { size: 28 })}</div>
              <h5>Fast Delivery</h5>
              <p className="ts-muted">Quick turnaround times without sacrificing quality.</p>
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
              <p className="ts-muted">Let's discuss your project and grow your business together</p>
            </div>

            <form className="ts-form" onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control ts-input"
                    required
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
                    required
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
                  <select name="service" value={formData.service} onChange={handleChange} className="form-select ts-select" required>
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
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-cta d-flex align-items-center justify-content-center gap-2">
                  Send Message <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ts-footer py-4 mt-4">
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Code size={20} color="#a78bfa" />
            <span className="ms-2 fw-bold">TechSolutions</span>
          </div>
          <p className="ts-muted mb-1">Building digital solutions that transform businesses</p>
          <small className="text-muted">© {new Date().getFullYear()} TechSolutions. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
