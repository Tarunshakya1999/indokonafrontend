import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, Scale, Cpu, Award, Zap, ShieldAlert, Info } from 'lucide-react';

export default function AcademyDisclaimer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll('.disclaimer-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
  }, []);

  const disclaimers = [
    {
      title: "General Disclaimer",
      icon: Info,
      color: "blue",
      content: `The content, training, mentorship, and resources provided by Indokona Idea to Empire Academy™ are for educational purposes only.`,
      points: [
        "Any specific income",
        "Business success",
        "Revenue outcomes",
        "Sales results",
        "Achievement of financial goals"
      ],
      footer: "You are responsible for your own decisions, actions, and results."
    },
    {
      title: "Earnings Disclaimer",
      icon: TrendingUp,
      color: "purple",
      badge: "META AD SAFE",
      content: `All testimonials represent individual experiences. Your results may vary based on:`,
      points: [
        "Your dedication",
        "Skill level",
        "Implementation",
        "Market conditions",
        "External factors"
      ],
      footer: "We do not make any 'get rich quick', 'overnight success', or unrealistic earning claims."
    },
    {
      title: "Legal & Financial Disclaimer",
      icon: Scale,
      color: "orange",
      content: `Nothing in our program is legal, tax, or financial advice. For professional matters, consult certified experts such as:`,
      points: [
        "Chartered Accountants",
        "Lawyers",
        "Financial advisors",
        "Government authorities"
      ]
    },
    {
      title: "Technology Disclaimer",
      icon: Cpu,
      color: "green",
      content: `We use third-party tools and platforms. We are not responsible for:`,
      points: [
        "Downtime",
        "Bugs",
        "Delays",
        "Changes in third-party pricing",
        "Failure of external integrations"
      ]
    },
    {
      title: "Certification Disclaimer",
      icon: Award,
      color: "red",
      content: `Certification is provided only after:`,
      points: [
        "Meeting the required criteria",
        "Completing projects",
        "Following professional guidelines"
      ],
      footer: "Indokona reserves the right to withhold certification if standards are not met."
    }
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      purple: 'linear-gradient(135deg, #a855f7, #ec4899)',
      orange: 'linear-gradient(135deg, #f59e0b, #f97316)',
      green: 'linear-gradient(135deg, #10b981, #059669)',
      red: 'linear-gradient(135deg, #f43f5e, #dc2626)'
    };
    return gradients[color];
  };

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .disclaimer-container {
          min-height: 100vh;
          background: #000000;
          position: relative;
          overflow-x: hidden;
        }

        /* Animated Particles */
        .particles-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #a855f7);
          opacity: 0.2;
          animation: float infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Scroll Progress Bar */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #1f2937;
          z-index: 1000;
        }

        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(to right, #3b82f6, #a855f7, #ec4899);
          transition: width 0.3s ease;
        }

        /* Grid Background */
        .grid-background {
          position: fixed;
          inset: 0;
          opacity: 0.1;
          z-index: 1;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          z-index: 10;
          padding-top: 5rem;
          padding-bottom: 3rem;
        }

        .rotating-ring {
          position: absolute;
          inset: 0;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ring-border {
          width: 128px;
          height: 128px;
          border: 4px solid transparent;
          border-top-color: #3b82f6;
          border-right-color: #a855f7;
          border-radius: 50%;
        }

        .hero-icon {
          position: relative;
          z-index: 2;
        }

        .gradient-text {
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .hero-glow {
          position: absolute;
          inset: -1rem;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
          filter: blur(48px);
          z-index: -1;
        }

        .meta-badge {
          background: linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .pulse-icon {
          animation: pulse 2s ease-in-out infinite;
        }

        .holographic-line {
          height: 4px;
          width: 256px;
          margin: 3rem auto 0;
          border-radius: 9999px;
          background: linear-gradient(to right, transparent, #3b82f6, transparent);
          animation: pulse 2s ease-in-out infinite;
        }

        /* Disclaimer Sections */
        .disclaimer-section {
          transition: all 0.7s ease;
          position: relative;
          z-index: 10;
        }

        .disclaimer-section.active {
          opacity: 1;
          transform: scale(1);
        }

        .disclaimer-section.inactive {
          opacity: 0.6;
          transform: scale(0.95);
        }

        .disclaimer-card-wrapper {
          padding: 1px;
          border-radius: 1.5rem;
          transition: all 0.5s ease;
        }

        .disclaimer-card-wrapper.active {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .disclaimer-card-wrapper.inactive {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .disclaimer-card {
          background: #030712;
          border-radius: 1.5rem;
          padding: 3rem;
        }

        .icon-container {
          width: 80px;
          height: 80px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          position: relative;
        }

        .icon-container:hover {
          transform: rotate(12deg);
        }

        .icon-glow {
          position: absolute;
          inset: 0;
          filter: blur(24px);
          opacity: 0.5;
          z-index: -1;
        }

        .section-line {
          height: 4px;
          width: 128px;
          border-radius: 9999px;
        }

        .points-container {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid #1f2937;
        }

        .point-item {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 0.75rem;
          padding: 1rem;
          transition: background 0.3s ease;
        }

        .point-item:hover {
          background: rgba(31, 41, 55, 0.5);
        }

        .point-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .point-item:hover .point-dot {
          transform: scale(1.5);
        }

        .footer-box {
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 2px solid;
        }

        .decorative-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 128px;
          height: 128px;
          opacity: 0.1;
          filter: blur(48px);
          border-radius: 50%;
        }

        /* Company Footer */
        .company-footer {
          position: relative;
          z-index: 10;
          padding: 4rem 0;
        }

        .footer-card-wrapper {
          background: linear-gradient(to right, #2563eb, #7c3aed, #db2777);
          padding: 1px;
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }

        .footer-card {
          background: #030712;
          border-radius: 1.5rem;
          padding: 3rem;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 3rem !important;
          }
          .disclaimer-card {
            padding: 2rem;
          }
        }
      `}</style>

      <div className="disclaimer-container">
        {/* Animated Particles */}
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="scroll-progress">
          <div 
            className="scroll-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Grid Background */}
        <div className="grid-background"></div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <div className="text-center">
              <div className="position-relative d-inline-block mb-5">
                <div className="rotating-ring">
                  <div className="ring-border"></div>
                </div>
                <div className="hero-icon">
                  <ShieldAlert size={96} color="#a78bfa" strokeWidth={1.5} />
                </div>
              </div>

              <h1 className="display-1 fw-black mb-4 position-relative">
                <span className="gradient-text">DISCLAIMER</span>
                <div className="hero-glow"></div>
              </h1>

              <div className="d-flex flex-column align-items-center gap-4">
                <div className="meta-badge d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill">
                  <Zap size={20} color="#34d399" className="pulse-icon" />
                  <span className="text-success fw-bold">META-APPROVED & SAFE FOR ADS</span>
                </div>
                <p className="text-secondary fs-5">Last Updated: January 2025</p>
              </div>

              <div className="holographic-line"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              {disclaimers.map((disclaimer, index) => {
                const Icon = disclaimer.icon;
                const isActive = activeSection === index;
                return (
                  <div
                    key={index}
                    className={`disclaimer-section ${isActive ? 'active' : 'inactive'} mb-5`}
                  >
                    <div 
                      className={`disclaimer-card-wrapper ${isActive ? 'active' : 'inactive'}`}
                      style={{ background: getGradient(disclaimer.color) }}
                    >
                      <div className="disclaimer-card position-relative">
                        {/* Header */}
                        <div className="row align-items-center mb-4">
                          <div className="col-auto">
                            <div 
                              className="icon-container"
                              style={{ background: getGradient(disclaimer.color) }}
                            >
                              <Icon size={40} color="white" strokeWidth={2} />
                              <div 
                                className="icon-glow"
                                style={{ background: getGradient(disclaimer.color) }}
                              ></div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                              <h2 className="h2 fw-black text-white mb-0">
                                {disclaimer.title}
                              </h2>
                              {disclaimer.badge && (
                                <span className="badge bg-success bg-opacity-25 border border-success border-opacity-25 text-success">
                                  {disclaimer.badge}
                                </span>
                              )}
                            </div>
                            <div 
                              className="section-line"
                              style={{ background: getGradient(disclaimer.color) }}
                            ></div>
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <p className="text-white-50 fs-5 mb-4">
                            {disclaimer.content}
                          </p>

                          {disclaimer.points && (
                            <div className="points-container mb-4">
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <AlertTriangle size={20} color="#fbbf24" />
                                <span className="text-warning fw-bold text-uppercase small">We do NOT guarantee:</span>
                              </div>
                              <div className="row g-3">
                                {disclaimer.points.map((point, i) => (
                                  <div key={i} className="col-md-6">
                                    <div className="point-item d-flex align-items-center gap-3">
                                      <div 
                                        className="point-dot"
                                        style={{ background: getGradient(disclaimer.color) }}
                                      ></div>
                                      <span className="text-white-50 fw-medium">{point}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {disclaimer.footer && (
                            <div 
                              className="footer-box"
                              style={{ 
                                background: getGradient(disclaimer.color) + ', rgba(0,0,0,0.1)',
                                borderColor: disclaimer.color === 'blue' ? '#3b82f6' : 
                                           disclaimer.color === 'purple' ? '#a855f7' :
                                           disclaimer.color === 'orange' ? '#f59e0b' :
                                           disclaimer.color === 'green' ? '#10b981' : '#f43f5e'
                              }}
                            >
                              <p className="text-white fw-semibold fs-5 text-center mb-0">
                                {disclaimer.footer}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Decorative Corner */}
                        <div 
                          className="decorative-corner"
                          style={{ background: getGradient(disclaimer.color) }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Company Info Footer */}
        <div className="company-footer">
          <div className="container">
            <div className="footer-card-wrapper">
              <div className="footer-card text-center">
                <h3 className="h2 fw-black text-white mb-3">
                  Indokona Idea to Empire Academy™
                </h3>
                <p className="text-secondary fs-5 mb-4">
                  Operated by: Indokona Credit Bazar Pvt. Ltd.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 small text-secondary mb-4">
                  <span>📍 Faridabad, Haryana, India</span>
                  <span>•</span>
                  <span>📧 academy@indokona.com</span>
                  <span>•</span>
                  <span>🌐 www.indokona.com</span>
                </div>
                <div className="pt-4 border-top border-secondary border-opacity-25">
                  <p className="text-secondary small mb-0">
                    © 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}