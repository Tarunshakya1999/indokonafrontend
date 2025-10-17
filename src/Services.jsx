import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import Navbar from './Nav'; 
import "./App.css"; 
import Navbar from "./Nav"


const IndokonaServicesPage = () => {
  useEffect(() => {
    // 1. AOS Initialization
    AOS.init({ 
      duration: 800, 
      once: false, 
      easing: 'ease-out',
      offset: 50,
    });
    
    // 2. Critical Fix: Force refresh after the component mounts
    AOS.refresh(); 

    // Optional: Refresh on window resize for better performance
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const services = [
    { title: 'Pro Software', desc: 'Retailer / Distributor Management Panel, Banking & Fintech Modules, CRM Dashboard & Analytics', icon: '🧩', link: '/pro-software' },
    { title: 'Powerful AI Tools', desc: 'AI Content Generator, Voiceover, Auto Blog Writer, AI Poster Generator', icon: '🤖', link: '/ai-tools' },
    { title: 'Indokona Suite', desc: 'Admin Dashboard, Reseller Panel, Smart Billing, White Label Branding', icon: '💼', link: '/suite' },
    { title: 'Indokona Fintech', desc: 'AEPS, DMT, BBPS, Recharge, Virtual Cards, Loan, Insurance, CA Services', icon: '💳', link: '/fintech' },
    { title: 'Indokona SaaS', desc: 'Website Builder, Funnel Builder, AI Automation, WhatsApp CRM + Email Marketing', icon: '☁️', link: '/saas' },
    { title: 'Indokona Mind 2 Market', desc: 'AI Business Launcher, Auto Website & Funnel Generator, Branding + WhatsApp Integration', icon: '💡', link: '/mind2market' },
    { title: 'Powerful APIs', desc: 'AEPS, BBPS, DMT, Recharge, PAN, WhatsApp, Automation, Payment APIs', icon: '🔌', link: '/apis' },
    { title: 'Digital Products', desc: 'E-learning Portals, Webinar Kits, Templates, AI Resource Bundles', icon: '📦', link: '/digital-products' },
    { title: 'Website & Landing Page Builder', desc: 'Drag & Drop Website Builder, Funnel Page Creator, Templates', icon: '🌐', link: '/website-builder' },
    { title: 'WhatsApp API & Chatbot', desc: 'AI Chatbot for Sales, Auto Message Broadcasting, CRM Integration', icon: '💬', link: '/whatsapp-api' },
    { title: 'Full Automation Tools', desc: 'Business Workflow Automation, Lead Capture, Campaign Tracking', icon: '⚙️', link: '/automation' },
    { title: 'Semi Automation Tools', desc: 'Auto Posting, Auto Reply, Email & SMS Integration', icon: '🧠', link: '/semi-automation' },
    { title: 'Digital Indokona Store', desc: 'Marketplace, Subscription & Reseller Management, SaaS Tools', icon: '🏪', link: '/store' },
    { title: 'IT Services & Development', desc: 'Website, App, CRM, ERP, Custom Software, API, Cloud Solutions', icon: '💻', link: '/it-services' },
    { title: 'Cyber Security Solutions', desc: 'Protect your digital assets with penetration testing, data encryption, and secure authentication systems.', icon: '🛡️', link: '/cyber-security' },
    { title: 'Cloud Hosting & Deployment', desc: 'Get scalable, secure, and fast cloud hosting solutions with 24/7 uptime monitoring and maintenance.', icon: '☁️', link: '/cloud-hosting' }
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Navbar/>
      
      {/* Hero Section */}
      <header className="hero-section text-white text-center py-6" data-aos="fade-down">
        
        <div className="container">
       
          <p className="lead text-uppercase fw-semibold mb-2">The Digital Ecosystem</p>
          <h1 className="display-3 fw-bolder mb-3">Explore All Indokona Products & Services ✨</h1>
          <p className="lead fw-light opacity-75 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            From Fintech to SaaS, AI to Automation — Everything You Need to Scale Your Business Globally.
          </p>
          <a href="#services" className="btn btn-primary btn-lg px-5 shadow-lg fw-bold hero-btn">
            View All Services
          </a>
         
          
          
               
        </div>
      </header>
      
      {/* About Section - More Prominent and Focused */}
      <section id="about" className="py-5 text-center bg-white" data-aos="fade-up">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="fw-bolder mb-3 text-dark">Empowering Digital Businesses</h2>
          <p className="fs-5 text-secondary">
            Indokona offers a complete ecosystem of **digital business tools** — from advanced fintech solutions and robust automation to cutting-edge AI-driven SaaS platforms. We empower startups, agencies, and enterprises to launch, manage, and automate with unparalleled efficiency and a focus on growth.
          </p>
        </div>
      </section>

      {/* Services Grid Section - The Main Showcase */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bolder mb-2 section-title" data-aos="zoom-in">Our Core Services</h2>
          <p className="text-center text-muted mb-5 lead fw-normal" data-aos="zoom-in" data-aos-delay="100">
            A comprehensive portfolio of 16 innovative tools to drive your digital transformation.
          </p>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card card h-100 border-0 shadow-sm rounded-3 p-4 text-center d-flex flex-column transition-300">
                  <div className="icon-circle mb-3 mx-auto">{service.icon}</div>
                  <h5 className="fw-bolder mb-2 text-dark">{service.title}</h5>
                  <p className="text-secondary flex-grow-1 service-desc-min-height">{service.desc}</p>
                  <a href={service.link} className="btn btn-sm btn-outline-primary fw-semibold mt-3 learn-more-btn transition-300">
                    Explore
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support and CTA Section - Combined for Impact */}
      <section id="cta" className="py-6 text-white cta-gradient-section" data-aos="zoom-in" data-aos-duration="1200">
        <div className="container text-center position-relative">
          {/* Decorative Glow/Overlay */}
          <div className="cta-glow-overlay"></div>
          
          <div className="row justify-content-center position-relative z-1">
            <div className="col-lg-10">
              <span className="badge bg-light text-primary fw-bold text-uppercase mb-2 px-3 py-2">
                Start Your Growth Journey
              </span>
              <h2 className="fw-bolder mb-3 display-4 cta-title-shadow">
                Ready to Elevate Your Business with Indokona?
              </h2>
              <p className="lead mb-5 fw-light opacity-90 mx-auto" style={{ maxWidth: '800px' }}>
                Tap into the Indokona ecosystem and scale your business with our full suite of digital, AI, and fintech products.
              </p>
              
              <div className="d-flex justify-content-center flex-column flex-sm-row">
                {/* Main CTA Button - Animated */}
                <a 
                  href="#" 
                  className="btn btn-warning btn-lg px-5 fw-bolder shadow-lg cta-main-btn mb-3 mb-sm-0 me-sm-4"
                >
                  Schedule a Demo Now 🚀
                </a>
                
                {/* Secondary CTA Button - Clean Outline */}
                <a 
                  href="#" 
                  className="btn btn-outline-light btn-lg px-5 fw-bold cta-secondary-btn"
                >
                  Explore Success Stories →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section (Refund and Support) - Cleaner and more professional */}
      <section id="trust" className="py-5 bg-white">
        <div className="container">
          <div className="row text-center g-4">
            {/* Support Box */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="p-4 border rounded-3 h-100 shadow-sm transition-300 hover-shadow-lg">
                <h3 className="fw-bolder mb-3 text-dark">Dedicated 24/7 Support 🤝</h3>
                <p className="text-secondary">
                  Our expert support team is always available to ensure your journey with Indokona is seamless and successful, resolving issues promptly and effectively.
                </p>
                <a href="#" className="btn btn-link text-primary fw-bold p-0">
                  Get Instant Help →
                </a>
              </div>
            </div>
            {/* Refund Box */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="p-4 border rounded-3 h-100 shadow-sm transition-300 hover-shadow-lg">
                <h3 className="fw-bolder mb-3 text-dark">Risk-Free Guarantee: 100% Refund 🛡️</h3>
                <p className="text-secondary">
                  If our services don't meet the promise, you’re protected by our no-questions-asked refund policy. Your satisfaction is our guarantee.
                </p>
                <a href="#" className="btn btn-link text-primary fw-bold p-0">
                  Read Policy Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0 small opacity-75">
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default IndokonaServicesPage;