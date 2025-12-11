import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mylogo from "./assets/mylogo.jpg";
import wwe from "./assets/wwe.jpg"

export default function IndokonaAcademy() {
  const observerRef = useRef(null);
  // ✅ Username state
  const [username, setUsername] = useState(null);
  // ✅ Navigation hook
  const navigate = useNavigate();

  useEffect(() => {
    // Custom scroll animation - better than AOS!
    const animateOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        } else {
          entry.target.classList.remove("animated");
        }
      });
    };

    // LOgin,Signup,logout

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Change navbar on scroll
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".custom-nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    observerRef.current = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/");
  };

  return (
    <div className="overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }
        
        /* Custom Scroll Animations */
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        [data-animate].animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-animate="fade-right"] {
          transform: translateX(-50px);
        }
        
        [data-animate="fade-right"].animated {
          transform: translateX(0);
        }
        
        [data-animate="fade-left"] {
          transform: translateX(50px);
        }
        
        [data-animate="fade-left"].animated {
          transform: translateX(0);
        }
        
        [data-animate="zoom-in"] {
          transform: scale(0.8);
        }
        
        [data-animate="zoom-in"].animated {
          transform: scale(1);
        }
        
        [data-animate="flip-left"] {
          transform: perspective(1000px) rotateY(-20deg);
        }
        
        [data-animate="flip-left"].animated {
          transform: perspective(1000px) rotateY(0);
        }
        
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          animation: float 20s infinite linear;
        }
        
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-100px); }
        }
        
        .hero-emoji {
          font-size: 15rem;
          opacity: 0.9;
          animation: bounce 3s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        
        .btn-custom {
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          border: none;
          padding: 15px 40px;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }
        
        .btn-custom:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
          color: white;
        }
        
        .section-title {
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }
        
        .card-custom {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          background: white;
        }
        
        .card-custom:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto 1.5rem;
        }
        
        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        
        .pricing-card.featured {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: scale(1.05);
        }
        
        .pricing-card:hover {
          transform: translateY(-10px) scale(1.02);
        }
        
        .pricing-card.featured:hover {
          transform: translateY(-10px) scale(1.07);
        }
        
        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 5px 30px rgba(0,0,0,0.08);
          height: 100%;
        }
        
        .leader-card {
          text-align: center;
          padding: 2rem;
        }
        
        .leader-avatar {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          font-weight: 700;
          transition: transform 0.3s ease;
        }
        
        .leader-card:hover .leader-avatar {
          transform: scale(1.1) rotate(5deg);
        }
        
        .module-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          margin: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .module-badge:hover {
          transform: scale(1.05);
        }
        
        .stats-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 5rem 0;
        }
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 5rem 0;
        }
        
        .navbar-custom {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
        
        .footer {
          background: #2d3748;
          color: white;
          padding: 3rem 0;
        }
        
        .footer a {
          transition: color 0.3s ease;
        }
        
        .footer a:hover {
          color: #667eea !important;
        }
        


        /* 🌟 Premium Navbar Look */
.custom-nav {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;
}

/* Gradient Brand Text */
.brand-text {
  font-size: 1.6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Smooth Scroll Shadow */
.custom-nav.scrolled {
  background: rgba(255,255,255,0.95);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Nav Link Style */
.nav-item-custom {
  font-weight: 600;
  position: relative;
  padding: 8px 12px !important;
  color: #2d2d2d !important;
}

/* Underline animation */
.nav-item-custom::after {
  content: "";
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  transition: 0.3s;
  border-radius: 3px;
}

.nav-item-custom:hover::after {
  width: 80%;
}

/* Mobile icon color fix */
.navbar-toggler-icon {
  filter: invert(1);
}


.floating-logo {
  animation: float 1s ease-in-out infinite;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  padding: 8px;
  background: #ffffff;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}


#box:hover {
 
  transform: scale(1.06);
  transition: .3s;
}


      
      
`}</style>

      <nav className="navbar navbar-expand-lg shadow-sm fixed-top custom-nav">
        <div className="container py-2">
          <a className="navbar-brand fw-bold brand-text" href="/">
            🌐 Indokona Academy
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li>
                <a className="nav-link nav-item-custom" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link nav-item-custom" href="#course">
                  Course
                </a>
              </li>
              <li>
                <a className="nav-link nav-item-custom" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="nav-link nav-item-custom" href="#contact">
                  Contact
                </a>
              </li>

              {/* ✅ Show when NOT logged in */}
              {!username && (
                <>
                  <li>
                    <Link className="nav-link nav-item-custom" to="/login2">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn btn-custom rounded-pill px-5 gap-2"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}

              {/* ✅ Show when logged in */}
              {username && (
                <>
                  <li className="nav-item text-dark fw-bold">
                    Welcome, {username} 👋
                  </li>

                  <li>
                    <button
                      className="btn btn-danger rounded-pill px-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ marginTop: "70px" }}>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6" data-animate="fade-right">
              <h1 className="display-3 fw-bold mb-4">
                Turn Your Idea into a Scalable Empire 
              </h1>
              <p className="lead mb-4">
                Join India's Most Powerful Business Transformation Program
              </p>
              <h4 className="mb-4">Learn. Build. Earn. Grow.</h4>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  className="btn btn-custom text-white btn-lg"
                  href="https://forms.gle/3gMjQTSvo4s8v9Uw9"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center" data-animate="fade-left">
              <div className="hero-emoji">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">About the Academy</h2> <br />
            <img
              src={wwe}
              alt=""
              height={300}
              width={300}
              className="floating-logo"
              style={{ borderRadius: "90%",backgroundSize:"cover" }}
            />
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto" data-animate="fade-up">
              <p className="lead text-center">
                <strong>Indokona Idea to Empire Academy™</strong>, powered by
                Indokona Credit Bazar Pvt. Ltd., is India's first
                Corporate-Level Business Transformation Platform designed to
                turn innovative ideas into profitable and scalable business
                empires.
              </p>
              <div
                className="text-center my-4 p-4 bg-white rounded-3 shadow-sm"
                data-animate="zoom-in"
              >
                <h4 className="text-primary mb-3">
                  "To transform every idea into a profitable and scalable
                  business empire."
                </h4>
                <p className="mb-0">
                  At Indokona, we don't just teach business — we build
                  entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-4" data-animate="fade-right">
              <div className="card-custom p-4 h-100">
                <h4 className="fw-bold mb-3">💼 Corporate Background</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Parent Company:</strong> Indokona Credit Bazar Pvt.
                    Ltd.
                  </li>
                  <li className="mb-2">
                    <strong>Founded by:</strong> Ruby Fatima
                  </li>
                  <li className="mb-2">
                    <strong>Incorporated:</strong> 2024 | CIN Registered | MSME
                    Certified
                  </li>
                  <li className="mb-2">
                    <strong>Headquarters:</strong> Faridabad, Haryana, India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-animate="fade-left">
              <div className="card-custom p-4 h-100">
                <h4 className="fw-bold mb-3">🎯 Our Mission</h4>
                <p className="mb-3">
                  "To create One Million Certified Empire Builders™ by 2030."
                </p>
                <h4 className="fw-bold mb-3">🌍 Our Vision</h4>
                <p className="mb-0">
                  "To build India's most trusted entrepreneurial ecosystem —
                  where every individual can learn, launch, and lead their own
                  digital empire."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Leadership Team</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4" data-animate="flip-left">
              <div className="leader-card">
                <div className="leader-avatar">RF</div>
                <h4 className="fw-bold">Ruby Fatima</h4>
                <p className="text-muted mb-2">Founder & Program Director</p>
                <p className="fst-italic mb-3">
                  "Every idea has the potential to become an empire — it just
                  needs the right system and direction."
                </p>
               
              </div>
            </div>
            <div className="col-md-4 mb-4" data-animate="flip-left">
              <div className="leader-card">
                <div className="leader-avatar">RF</div>
                <h4 className="fw-bold">Ruby Fatima</h4>
                <p className="text-muted mb-2">CEO & Director</p>
                <p className="fst-italic mb-3">
                  "Empowerment begins when knowledge meets execution."
                </p>
              
              </div>
            </div>
            <div className="col-md-4 mb-4" data-animate="flip-left">
              <div className="leader-card">
                <div className="leader-avatar">RV</div>
                <h4 className="fw-bold">Raveena</h4>
                <p className="text-muted mb-2">Co-Director</p>
                <p className="fst-italic mb-3">
                  "Professional Branding + Practical Learning = Empowered
                  Entrepreneurs."
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indokona */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Why Indokona Academy?</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "🎯",
                title: "Corporate-Level Curriculum",
                desc: "Industry-standard education designed for real-world success",
              },
              {
                icon: "🧩",
                title: "AI-Driven Tools",
                desc: "Business automation and smart technology integration",
              },
              {
                icon: "💼",
                title: "Real Projects",
                desc: "Work on actual business projects with measurable results",
              },
              {
                icon: "🌍",
                title: "Global Recognition",
                desc: "Internationally recognized certification and credentials",
              },
              {
                icon: "🤝",
                title: "Lifetime Mentorship",
                desc: "Continuous support and growing business network",
              },
              {
                icon: "📘",
                title: "100% Valuable Course",
                desc: "Build your whole empire by choose our courses",
              },
            ].map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4" data-animate="zoom-in">
                <div className="card-custom text-center p-4 h-100">
                  <div className="feature-icon">{item.icon}</div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section id="course" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Course Structure</h2>
            <p className="lead">
              Idea to Empire — Business Transformation & Certification Course
            </p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" data-animate="fade-up">
              <div className="card-custom p-4 mb-4">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <strong>Duration:</strong> 3 Months (Fast-Track)
                  </div>
                  <div className="col-md-3 mb-3">
                    <strong>Language:</strong> Hindi + English
                  </div>
                  <div className="col-md-3 mb-3">
                    <strong>Mode:</strong> Hybrid (Online + Mentorship)
                  </div>
                  <div className="col-md-3 mb-3">
                    <strong>Type:</strong> Professional + Implementation
                  </div>
                </div>
              </div>

              <div className="container my-5 text-center" data-animate="fade-up">
              <h4 
  className="fw-bold mb-4 text-center py-2 px-4 shadow-lg"
  style={{
    background: "red",
    color: "white",
    borderRadius: "15px",
    display: "flex",
    border: "3px solid rgba(0,0,0,0.2)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    justifyContent:"center",
    alignItems:"center"
  }}
>
   Course Modules
</h4>


  <div className="row g-4 justify-content-center">
    {[
      "Foundation — From Idea to Vision",
      "Registration — Business & Legal Setup",
      "Brand Identity — Logo & Design",
      "Automation — Smart Tools & CRM",
      "Marketing — Lead Generation",
      "Client Management — DFY Model",
      "Certification — Branding & Authority",
      "Ethics — Professional Conduct",
      "Growth — Networking & Expansion",
      "Final Project — Brand Launch",
      "Business Finance — Budgeting Tax",
      "Sales Mastery — Closing Techniques",
    ].map((module, idx) => (
      <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card h-100 shadow-sm rounded-4 border-0  bg-primary text-light"id="box">
          <div className="card-body d-flex align-items-center justify-content-center">
            <p className="mb-0 fw-semibold">{module}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


              <div className="bg-light p-4 rounded-3" data-animate="zoom-in">
                <h5 className="fw-bold mb-3">🎓 Learning Outcomes</h5>
                <ul>
                  <li>✅ Build your own registered & branded business</li>
                  <li>
                    ✅ Become a Certified Business Creator & Empire Builder™
                  </li>
                  <li>✅ Master automation, branding & client management</li>
                  <li>✅ Access lifetime mentorship & business community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Course Pricing</h2>
            <p className="lead">
              Choose the plan that fits your entrepreneurial journey
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Starter",
                duration: "1 Month",
                price: "₹15,999",
                features: [
                  "Idea-to-Brand Framework",
                  "Templates & Tools",
                  "Course Certificate",
                  "Basic Support",
                ],
              },
              {
                name: "Professional",
                duration: "3 Months",
                price: "₹45,999",
                features: [
                  "Everything in Starter",
                  "Marketing Strategy",
                  "Business Setup Guide",
                  "Authorization Letter",
                  "Priority Support",
                ],
                featured: true,
              },
              {
                name: "Empire Builder",
                duration: "6 Months",
                price: "₹79,999",
                features: [
                  "Everything in Professional",
                  "Full DFY System",
                  "ID Card & Certificate",
                  "Lifetime Mentorship",
                  "24/7 Support",
                  "Business Network Access",
                ],
              },
            ].map((plan, idx) => (
              <div key={idx} className="col-md-4 mb-4" data-animate="zoom-in">
                <div
                  className={`pricing-card ${plan.featured ? "featured" : ""}`}
                >
                  {plan.featured && (
                    <div className="badge bg-warning text-dark position-absolute top-0 end-0 m-3">
                      Most Popular
                    </div>
                  )}
                  <h3 className="fw-bold mb-2">{plan.name}</h3>
                  <p className="mb-3">{plan.duration}</p>
                  <h2 className="display-4 fw-bold mb-4">{plan.price}</h2>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${
                      plan.featured ? "btn-light" : "btn-custom"
                    } text-${plan.featured ? "primary" : "white"} w-100`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4" data-animate="fade-up">
            <p className="text-muted">
              💳 Payment Options: UPI / Bank Transfer / EMI
            </p>
            <p className="text-muted">
              📜 100% Refund Guarantee (as per course completion policy)
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Success Stories</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 mb-4" data-animate="fade-right">
              <div className="testimonial-card">
                <div className="mb-3">⭐⭐⭐⭐⭐</div>
                <p className="mb-3">
                  "Indokona helped me build my brand in 60 days — I didn't just
                  learn business, I became one."
                </p>
                <p className="fw-bold mb-0">— Priya Sharma</p>
                <small className="text-muted">Certified Empire Builder™</small>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-animate="fade-left">
              <div className="testimonial-card">
                <div className="mb-3">⭐⭐⭐⭐</div>
                <p className="mb-3">
                  "This is not just a course; it's a complete business creation
                  journey."
                </p>
                <p className="fw-bold mb-0">— Amit Patel</p>
                <small className="text-muted">Entrepreneur & Graduate</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4" data-animate="zoom-in">
              <div className="stat-number">1M+</div>
              <p className="lead">Target Empire Builders by 2030</p>
            </div>
            <div className="col-md-3 mb-4" data-animate="zoom-in">
              <div className="stat-number">100%</div>
              <p className="lead">Practical Implementation</p>
            </div>
            <div className="col-md-3 mb-4" data-animate="zoom-in">
              <div className="stat-number">24/7</div>
              <p className="lead">Lifetime Support</p>
            </div>
            <div className="col-md-3 mb-4" data-animate="zoom-in">
              <div className="stat-number">10+</div>
              <p className="lead">Course Modules</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll" className="cta-section">
        <div className="container text-center">
          <div data-animate="zoom-in">
            <h2 className="display-4 fw-bold mb-4">
              Ready to Build Your Empire? 🚀
            </h2>
            <p className="lead mb-4">
              Let's turn your dream into reality today.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                className="btn btn-outline-light btn-lg"
                href="https://forms.gle/3gMjQTSvo4s8v9Uw9"
              >
                Hey User Enroll Now
              </a>

              <button className="btn btn-outline-light btn-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-animate="fade-up">
            <h2 className="section-title">Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div
                className="card-custom p-5 text-center"
                data-animate="fade-up"
              >
                <h4 className="fw-bold mb-4">Get in Touch</h4>
                <p className="mb-3">
                  📱 WhatsApp / Call:{" "}
                  <a href="tel:+919625995155" className="text-decoration-none">
                    +91 9625995155
                  </a>
                </p>
                <p className="mb-3">
                  📧 Email:{" "}
                  <a
                    href="mailto:academy@indokona.com"
                    className="text-decoration-none"
                  >
                    academy@indokona.com
                  </a>
                </p>
                <p className="mb-3">
                  🌐 Website:{" "}
                  <a
                    href="https://www.indokona.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    www.indokona.com
                  </a>
                </p>
                <p className="mb-0">
                  🏢 Corporate Office: Indokona Credit Bazar Pvt. Ltd.,
                  Faridabad, Haryana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h5 className="fw-bold mb-3">Indokona Idea to Empire Academy™</h5>
              <p>
                "Every learner who joins us is not just a student — but a future
                Empire Builder."
              </p>
              <p className="mb-0">— Team Indokona</p>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/acadmytac" className="text-white text-decoration-none">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/acadmyprivacypolicy" className="text-white text-decoration-none">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/acadmyrefundpolicy"
                    className="text-white text-decoration-none"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/acadmydisclaimer"
                    className="text-white text-decoration-none"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Legal</h6>
              <p className="small mb-2">
                Registered under Indokona Credit Bazar Pvt. Ltd.
              </p>
              <p className="small mb-2">CIN & MSME Certified</p>
              <p className="small mb-0">© 2024 All Rights Reserved</p>
            </div>
          </div>
          <hr
            className="my-4"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          />
          <div className="text-center">
            <p className="mb-0 small">
              Indokona Idea to Empire Academy™ — India's Leading Business
              Transformation Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
