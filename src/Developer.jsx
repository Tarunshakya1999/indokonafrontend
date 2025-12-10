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
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function TechServicesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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

  // AOS Code

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

    setLoading(true); // 🔥 start loading
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://indokonabackend-1.onrender.com/api/mycontactviewSet/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 201) {
        setSuccessMsg("✅ Message sent successfully! We'll contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setErrorMsg(data?.detail || "❌ Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Server error. Please try again later.");
    } finally {
      setLoading(false); // 🔥 stop loading
    }
  };
  const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <span className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </span>
    );
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

       /* ===========================
   CONTACT FORM – GLASS UI
   =========================== */

.ts-section {
  padding: 80px 0;
}

/* Form Card */
.ts-form {
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.08),
    rgba(255,255,255,0.02)
  );
  border-radius: 20px;
  padding: 2.2rem;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  backdrop-filter: blur(14px);
}

/* ===========================
   INPUTS / TEXTAREA / SELECT
   =========================== */

.ts-input,
.ts-textarea,
.ts-select {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #ffffff !important;      /* ✅ typing text white */
  border-radius: 0.85rem;
  padding: 0.9rem 1rem;
  font-size: 1rem;                /* ✅ consistent size */
  line-height: 1.4;
  transition: all 0.3s ease;
}

/* Placeholder */
.ts-input::placeholder,
.ts-textarea::placeholder {
  color: rgba(255,255,255,0.45);
}

/* Focus State */
.ts-input:focus,
.ts-textarea:focus,
.ts-select:focus {
  outline: none;
  color: #ffffff !important;
  background: rgba(255,255,255,0.06);
  border-color: rgba(124,58,237,0.75);
  box-shadow: 0 10px 28px rgba(124,58,237,0.25);
  transform: translateY(-1px);
}

/* ===========================
   SELECT DROPDOWN FIX
   =========================== */

.ts-select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

/* Dropdown Options */
.ts-select option {
  background: #ffffff;  
  color: #000000;         
  font-size: 1rem;
}

/* ===========================
   TEXTAREA
   =========================== */

.ts-textarea {
  resize: none;
  min-height: 120px;
}

/* ===========================
   BUTTON
   =========================== */

.ts-form .btn-primary {
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  border: none;
  border-radius: 0.9rem;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 12px 35px rgba(124,58,237,0.45);
  transition: all 0.3s ease;
}

.ts-form .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 45px rgba(124,58,237,0.6);
}

/* ===========================
   MOBILE RESPONSIVE
   =========================== */

@media (max-width: 576px) {
  .ts-form {
    padding: 1.6rem;
  }
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

/* WhatsApp Floating CTA */
.whatsapp-float {
  position: fixed;
  right: 20px;
  bottom: 450px;
  width: 55px;
  height: 55px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  z-index: 9999;
  cursor: pointer;
  transition: all 0.3s ease;
}

.whatsapp-float i {
  font-size: 28px;
  color: white;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6);
}


/* ================= CALL BUTTON ================= */
.ts-call-float {
  position: fixed !important;
  right: 22px;
  bottom: 370px; /* WhatsApp ke upar */
  width: 56px;
  height: 56px;
  background: #2563eb; /* Blue call color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: all 0.3s ease;
  transform: none !important;
}

.ts-call-float i {
  font-size: 26px;
  color: #fff;
}

.ts-call-float:hover {
  transform: scale(1.12) !important;
  box-shadow: 0 18px 45px rgba(37, 99, 235, 0.65);
}


.ts-instagram-float {
  position: fixed !important;
  right: 22px;
  bottom: 290px; /* Call ke upar */
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  cursor: pointer;
  background: linear-gradient(
    45deg,
    #f58529,
    #dd2a7b,
    #8134af,
    #515bd4
  );
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
  transform: none !important;
}

.ts-instagram-float i {
  font-size: 28px;
  color: #fff;
}

.ts-instagram-float:hover {
  transform: scale(1.12) rotate(8deg) !important;
  box-shadow: 0 18px 45px rgba(221, 42, 123, 0.65);
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
      <div>
        {/* WhatsApp */}
        <a
          href="https://wa.me/918800905879"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          title="Chat Us Now"
        >
          <i
            className="bi bi-whatsapp"
            style={{ fontSize: "28px", color: "white" }}
          ></i>
        </a>
        {/*  Call */}
        <a href="tel:9625995155" className="ts-call-float" title="Call Now">
          <i className="bi bi-telephone-fill"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/indokonaofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="ts-instagram-float"
          title="Follow on Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      <section className="ts-section ts-stats">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="h3">Our Growing Numbers</h2>
            <p className="ts-muted">Real impact. Real growth.</p>
          </div>

          <div className="row text-center gy-4">
            <div className="col-6 col-md-3">
              <Counter target={120000} suffix="+" />
              <div className="ts-muted">Monthly Visitors</div>
            </div>

            <div className="col-6 col-md-3">
              <Counter target={750} suffix="+" />
              <div className="ts-muted">Websites Delivered</div>
            </div>

            <div className="col-6 col-md-3">
              <Counter target={98} suffix="%" />
              <div className="ts-muted">Client Retention</div>
            </div>

            <div className="col-6 col-md-3">
              <Counter target={24} suffix="/7" />
              <div className="ts-muted">Support Availability</div>
            </div>
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

      <section className="ts-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2 className="h3 mb-3">Who We Are</h2>
              <p className="ts-muted">
                Indokona Tech Solutions is not just another IT company. We are a
                team of passionate developers, designers, marketers, and
                strategists who believe technology should simplify business, not
                complicate it.
              </p>
              <p className="ts-muted">
                Over the years, we have worked with startups, small businesses,
                enterprises, and local brands to help them go digital, increase
                visibility, and generate consistent leads using modern
                technology.
              </p>
              <p className="ts-muted">
                Our mission is simple — provide affordable, scalable, and
                result-driven digital solutions that help businesses grow in the
                real world.
              </p>
            </div>

            <div className="col-md-6">
              <div className="ts-card">
                <h5>Our Core Values</h5>
                <ul className="ts-muted mt-3">
                  <li>✅ Transparency & Trust</li>
                  <li>✅ Long-term Client Relationships</li>
                  <li>✅ Quality over Quantity</li>
                  <li>✅ Modern & Secure Technology</li>
                  <li>✅ Continuous Support & Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h3">Our Work Process</h2>
            <p className="ts-muted">
              A simple, transparent & effective workflow
            </p>
          </div>

          <div className="row gy-4">
            {[
              {
                title: "1. Requirement Analysis",
                desc: "We understand your business goals, target audience, competitors, and challenges before writing a single line of code.",
              },
              {
                title: "2. Planning & Strategy",
                desc: "We create a detailed roadmap including design, technology stack, timelines, and milestones.",
              },
              {
                title: "3. Design & Development",
                desc: "Our team builds visually appealing, fast, and secure solutions using modern frameworks.",
              },
              {
                title: "4. Testing & Quality Check",
                desc: "We test performance, responsiveness, security, and user experience thoroughly.",
              },
              {
                title: "5. Deployment & Support",
                desc: "After launch, we provide continuous support, maintenance, and upgrades.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="ts-card h-100">
                  <h5>{item.title}</h5>
                  <p className="ts-muted mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <h2 className="h3 text-center mb-4">
            How Our Services Help Your Business
          </h2>

          <div className="ts-card mb-4">
            <h5>Website Development</h5>
            <p className="ts-muted">
              A website is your digital office. We create responsive, fast,
              SEO-friendly websites that not only look beautiful but also
              convert visitors into customers.
            </p>
            <p className="ts-muted">
              From landing pages to large business websites, our solutions are
              optimized for speed, performance, and search engines.
            </p>
          </div>

          <div className="ts-card mb-4">
            <h5>Mobile App Development</h5>
            <p className="ts-muted">
              Mobile apps help businesses stay connected with customers 24/7. We
              develop secure and scalable Android & iOS applications with smooth
              UI/UX.
            </p>
          </div>

          <div className="ts-card mb-4">
            <h5>SEO & Digital Marketing</h5>
            <p className="ts-muted">
              Ranking on Google is not luck — it’s strategy. Our SEO services
              improve visibility, traffic, and conversions using ethical
              techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <h2 className="h3 text-center mb-4">Frequently Asked Questions</h2>

          {[
            {
              q: "How long does a project take?",
              a: "Project duration depends on requirements. Small websites take 7–10 days, while large systems may take several weeks.",
            },
            {
              q: "Do you provide support after delivery?",
              a: "Yes, we provide full post-launch support and maintenance.",
            },
            {
              q: "Is my data secure?",
              a: "Absolutely. We follow best security practices and modern encryption standards.",
            },
            {
              q: "Do you work with startups?",
              a: "Yes, we love working with startups and early-stage businesses.",
            },
          ].map((item, i) => (
            <div key={i} className="ts-card mb-3">
              <h6>{item.q}</h6>
              <p className="ts-muted mb-0">{item.a}</p>
            </div>
          ))}
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

        {/* ✅ Success / Error Messages */}
        {successMsg && (
          <div className="alert alert-success text-center">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="alert alert-danger text-center">
            {errorMsg}
          </div>
        )}

        {/* ✅ FORM */}
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
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="spinner-border spinner-border-sm"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  </div>
</section>

      <section className="ts-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h3">Technology That Powers Your Business</h2>
            <p className="ts-muted">
              We use modern, secure, and scalable technologies
            </p>
          </div>

          <div className="row gy-4">
            {[
              {
                icon: <Code />,
                title: "Modern Codebase",
                desc: "Clean, scalable, and maintainable code using React, Django, Node & APIs.",
              },
              {
                icon: <Globe />,
                title: "Cloud & Hosting",
                desc: "Fast cloud deployment with uptime monitoring and security.",
              },
              {
                icon: <Search />,
                title: "SEO Optimized",
                desc: "Search-engine-friendly architecture from day one.",
              },
              {
                icon: <TrendingUp />,
                title: "Business Growth",
                desc: "Technology that directly improves leads and revenue.",
              },
              {
                icon: <Palette />,
                title: "UI / UX Design",
                desc: "User-first designs that improve engagement.",
              },
              {
                icon: <Zap />,
                title: "High Performance",
                desc: "Lightning-fast speed and optimized performance.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="ts-card h-100 text-center">
                  <div className="ts-feature-icon mb-3">
                    {React.cloneElement(item.icon, { size: 30 })}
                  </div>
                  <h5>{item.title}</h5>
                  <p className="ts-muted">{item.desc}</p>
                </div>
              </div>
            ))}
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
