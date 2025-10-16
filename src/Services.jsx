import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav';

const IndokonaServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
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
      <Navbar />

      <header className="bg-dark text-white text-center py-5" data-aos="fade-down">
        <div className="container">
          <h1 className="display-4 fw-bold">Explore All Indokona Products & Services</h1>
          <p className="lead">From Software to SaaS, AI to Automation — Everything You Need to Grow</p>
        </div>
      </header>

      <section id="about" className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">About Indokona Services</h2>
          <p className="lead">
            Indokona Credit Bazar Pvt. Ltd. offers a complete ecosystem of digital business tools — from fintech and automation to marketing and AI-driven SaaS solutions. 
            We empower startups, agencies, and enterprises to launch, manage, and automate efficiently.
          </p>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Our 16 Services</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-4 col-lg-3" key={index} data-aos="flip-up" data-aos-delay={index * 80}>
                <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="fs-1 mb-3">{service.icon}</div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <a href={service.link} className="btn btn-outline-danger fw-semibold px-4 mt-3">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Customer Support</h2>
          <p className="lead">We’re here to help you 24/7. Our support team is dedicated to resolving your issues promptly and effectively, ensuring your experience with Indokona remains seamless and satisfying.</p>
          <div className="mt-4">
            <a href="#" className="btn btn-danger btn-lg px-4">Chat with Support</a>
            <a href="#" className="btn btn-outline-dark btn-lg ms-3 px-4">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="refund" className="py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-4 text-danger">100% Refund Policy</h2>
          <p className="lead">Your satisfaction is our top priority. If you’re not completely satisfied with our services, you’re protected by our 100% Refund Policy — no questions asked.</p>
          <ul className="list-unstyled mt-3">
            <li>✅ Full refund if the project isn’t delivered as promised</li>
            <li>✅ Transparent refund process with no hidden charges</li>
            <li>✅ Customer-first approach to ensure complete satisfaction</li>
          </ul>
        </div>
      </section>

      <section className="bg-dark text-white text-center py-5" id="contact" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Build with Indokona?</h2>
          <p>Let’s begin your journey of Automation, Innovation, and Growth — all under one trusted brand.</p>
          <a href="#" className="btn btn-warning btn-lg mt-3 px-5">Contact Us on WhatsApp</a>
        </div>
      </section>

      <footer className="bg-secondary text-white text-center py-3">
        <p className="mb-0">© {new Date().getFullYear()} Indokona. All Rights Reserved.</p>
      </footer>

      <style>{`
        .rounded-4 { border-radius: 1rem; }
        .card p { min-height: 90px; } /* ensure same height for button alignment */
      `}</style>
    </>
  );
};

export default IndokonaServicesPage;
