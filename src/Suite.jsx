import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import Footer from './Footer';

const IndokonaSuitePage = () => {
  const [popup, setPopup] = useState(null);

  const userPurchases = [
    { name: 'Manoj', city: 'Mumbai', plan: 'Pro Plan' },
    { name: 'Priya', city: 'Delhi', plan: 'Starter Plan' },
    { name: 'Ravi', city: 'Bangalore', plan: 'Enterprise Plan' },
    { name: 'Sneha', city: 'Hyderabad', plan: 'AI Business Builder' },
    { name: 'Karan', city: 'Chennai', plan: 'CRM System' },
    { name: 'Deepika', city: 'Pune', plan: 'Verified Posting Hub' },
  ];

  const modulesData = [
    { title: '1. USER VERIFICATION', purpose: 'केवल Genuine और Verified Businesses को ही Platform पर Allow करना।', features: ['Business KYC Form (PAN, Aadhaar, GST)', 'Auto Verification through Govt APIs'], aosClass: 'aos-slide-up', delay: 0.1 },
    { title: '2. VERIFIED POSTING HUB', purpose: 'एक FB/LinkedIn जैसा Verified Business Community बनाना।', features: ['Only verified users can post', 'Post Formats (Image Ad, Short Video, Listing)'], aosClass: 'aos-slide-up', delay: 0.2 },
    { title: '3. AI BUSINESS BUILDER', purpose: 'सिर्फ Brand Name डालते ही पूरा Business Setup तैयार करना।', features: ['AI Generates Logo, Tagline, Brand Colors', 'Social Media Kit'], aosClass: 'aos-slide-up', delay: 0.3 },
    { title: '4. ADS AUTOMATION HUB', purpose: '1 Click में Marketing Campaign तैयार और Launch करना।', features: ['AI Ad Copy + Hashtags Suggestion', '30 Days Marketing Calendar (Auto Schedule)'], aosClass: 'aos-slide-up', delay: 0.4 },
    { title: '5. CRM + LEAD MANAGEMENT', purpose: 'Businesses को internal management tools देना।', features: ['Lead Capture & Status Tracking', 'Quotation & Invoice Generator'], aosClass: 'aos-slide-up', delay: 0.5 },
    { title: '6. AI ASSISTANT & PROPOSAL', purpose: 'Smart Automation और Document Generation।', features: ['Auto Proposal Creator & Email Writer', 'Business Pitch Deck Generator'], aosClass: 'aos-slide-up', delay: 0.6 },
    { title: '7. ADMIN CONTROL PANEL', purpose: 'Platform की Legal, Payment और User Safety सुनिश्चित करना।', features: ['Verify/Reject Businesses & Content Moderation', 'Manage Paid Plans & Invoices'], aosClass: 'aos-slide-up', delay: 0.7 },
    { title: '8. INTEGRATION & WHITE-LABEL', purpose: 'Platform को scalable बनाना।', features: ['Payment Gateways (Razorpay, Stripe)', 'WhatsApp API Integration', 'White-Label Mode'], aosClass: 'aos-slide-up', delay: 0.8 },
  ];

  const targetUsers = [
    { name: 'Startups & Entrepreneurs', icon: 'bi-rocket-fill', aosClass: 'aos-zoom-in', delay: 0.1 },
    { name: 'Digital Agencies', icon: 'bi-graph-up', aosClass: 'aos-zoom-in', delay: 0.2 },
    { name: 'Freelancers', icon: 'bi-laptop', aosClass: 'aos-zoom-in', delay: 0.3 },
    { name: 'Local Businesses', icon: 'bi-shop', aosClass: 'aos-zoom-in', delay: 0.4 },
    { name: 'Coaches, Trainers', icon: 'bi-mortarboard-fill', aosClass: 'aos-zoom-in', delay: 0.5 },
    { name: 'E-commerce Sellers', icon: 'bi-bag-fill', aosClass: 'aos-zoom-in', delay: 0.6 },
  ];

  const legalCompliance = [
    'End-to-End Encryption (E2EE)',
    'No Third-Party Creative Upload Allowed',
    'Verified KYC Required for All Operations',
    'AI-Generated Material Ownership → Belongs to Business Owner',
    'Platform Terms Auto-Attached with Every Post',
    'Payment Gateway PCI-DSS Compliance',
  ];

  const testimonials = [
    { name: 'Rohit', company: 'Startup XYZ', feedback: 'Indokona Suite boosted our brand visibility in just 1 week!' },
    { name: 'Anjali', company: 'Digital Agency ABC', feedback: 'AI Business Builder is a game changer for clients.' },
    { name: 'Suresh', company: 'Local Shop LMN', feedback: 'Verified Posting Hub keeps our listings safe and authentic.' },
    { name: 'Priya', company: 'Freelancer', feedback: 'CRM & Lead Management saved me hours of work every day.' },
    { name: 'Karan', company: 'E-commerce Store', feedback: 'Integration & White-label helped us scale easily.' },
    { name: 'Deepika', company: 'Marketing Agency', feedback: 'Ads Automation Hub makes campaigns effortless!' },
  ];

  const faqData = [
    { q: 'What is Indokona Suite?', a: 'It is an all-in-one verified business operating system for India.' },
    { q: 'Who can use it?', a: 'Startups, freelancers, agencies, local businesses, coaches, and e-commerce sellers.' },
    { q: 'Is AI Business Builder reliable?', a: 'Yes, it generates brand assets instantly using advanced AI.' },
    { q: 'How secure is the platform?', a: 'End-to-end encryption, verified KYC, and PCI-DSS compliant payment gateways ensure security.' },
    { q: 'Can I integrate my existing tools?', a: 'Yes, it supports payment gateways, WhatsApp API, and White-label integration.' },
    { q: 'Is support available?', a: '24/7 customer support via chat and email is available.' },
  ];

  const pricingPlans = [
    { plan: 'Starter', price: '₹499/mo', features: ['Verified Posting Hub', 'Basic CRM', 'Limited AI Builder'], color: 'bg-primary text-white' },
    { plan: 'Pro', price: '₹1499/mo', features: ['All Starter Features', 'AI Business Builder', 'Ads Automation Hub'], color: 'bg-success text-white' },
    { plan: 'Enterprise', price: '₹4999/mo', features: ['All Pro Features', 'Admin Panel Access', 'White-label & Integrations'], color: 'bg-warning text-dark' },
  ];

  const pageStyles = `
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5; padding-top: 100px; }
    .marquee-bar { position: fixed; top: 0; left: 0; width: 100%; z-index: 1030; background-color: #28a745; color: white; padding: 5px 0; text-align: center; }
    .marquee-text { font-size: 1.2rem; font-weight: 700; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }
    .indokona-container { max-width: 1200px; margin: auto; padding: 20px; }
    .indokona-section { background-color: #fff; border-radius: 12px; padding: 40px; margin-bottom: 30px; box-shadow: 0 8px 15px rgba(0,0,0,0.08); border-left: 5px solid #007bff; }
    .section-heading { color: #007bff; font-weight: 700; border-bottom: 3px solid #28a745; padding-bottom: 10px; margin-bottom: 30px; }
    .aos-init { opacity: 0; transition: all 0.8s ease-in-out; }
    .aos-animate { opacity: 1; }
    .aos-slide-up { transform: translateY(50px); }
    .aos-slide-up.aos-animate { transform: translateY(0); }
    .aos-zoom-in { transform: scale(0.8); }
    .aos-zoom-in.aos-animate { transform: scale(1); }
    .conversion-popup { position: fixed; bottom: 20px; left: 20px; z-index: 2000; background-color: #343a40; color: #fff; padding: 15px; border-radius: 8px; display: flex; align-items: center; opacity: 0; transform: translateX(-100%); animation: slideIn 0.5s forwards, slideOut 0.5s 4.5s forwards; }
    .conversion-popup i { color: #28a745; font-size: 1.5rem; margin-right: 10px; }
    @keyframes slideIn { to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-100%); } }
  `;

  // AOS scroll effect that repeats
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.aos-init').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom >= 0) el.classList.add('aos-animate');
        else el.classList.remove('aos-animate');
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Popup logic
  useEffect(() => {
    const showPopup = () => {
      const random = userPurchases[Math.floor(Math.random() * userPurchases.length)];
      setPopup(random);
      setTimeout(() => setPopup(null), 5000);
    };
    const interval = setInterval(showPopup, 20000);
    setTimeout(showPopup, 5000);
    return () => clearInterval(interval);
  }, []);

  const FeatureModule = ({ title, purpose, features, aosClass, delay }) => (
    <div className={`col-lg-6 mb-4 aos-init ${aosClass}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="card feature-card h-100 p-3 shadow-sm border-primary">
        <div className="card-body">
          <h5 className="card-title text-success fw-bold">{title}</h5>
          <p className="card-text small text-muted">**Purpose:** {purpose}</p>
          <ul className="list-unstyled mt-3 small">
            {features.map((f,i) => <li key={i} className="mb-1"><i className="bi bi-check-circle-fill text-primary me-2"></i>{f}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <style>{pageStyles}</style>
      <div className="marquee-bar">
        <marquee behavior="scroll" direction="left" scrollamount="6" className="marquee-text">
          welcome to indokona suit – 🚀 India’s All-in-One Verified Business Operating System
        </marquee>
      </div>

      <div className="indokona-container">
        {/* Header */}
        <header className="text-center py-5 aos-init aos-slide-up">
          <h1 className="display-4 fw-bolder text-dark">
            <span className="text-primary">INDOKONA SUITE</span> – India’s All-in-One Verified Business Operating System
          </h1>
          <p className="lead text-muted mt-3">Developed by: **Indokona Credit Bazar Pvt. Ltd.** | Contact: **+91 8800905879**</p>
          <a href="#Modules" className="btn btn-lg btn-success mt-4">Explore Features</a>
        </header>

        {/* Modules */}
        <div className="indokona-section aos-init aos-slide-up" id="Modules">
          <h2 className="section-heading">🏗 SYSTEM ARCHITECTURE</h2>
          <div className="row g-4">{modulesData.map((m,i) => <FeatureModule key={i} {...m} />)}</div>
        </div>

        {/* Target Users */}
        <div className="indokona-section bg-warning bg-opacity-10 aos-init aos-slide-up" id="Users">
          <h2 className="section-heading text-warning">🎯 TARGET USERS</h2>
          <div className="row g-3 text-center">{targetUsers.map((u,i) => (
            <div key={i} className={`col-lg-3 col-md-4 col-sm-6 aos-init ${u.aosClass}`} style={{ transitionDelay: `${u.delay}s` }}>
              <div className="card h-100 p-3 shadow-sm">
                <i className={`bi ${u.icon} display-6 text-warning mb-2`}></i>
                <p className="fw-bold mb-0">{u.name}</p>
              </div>
            </div>
          ))}</div>
        </div>

        {/* Roadmap */}
        <div className="indokona-section aos-init aos-slide-up" id="Roadmap">
          <h2 className="section-heading text-info">🛣 ROADMAP & TIMELINE</h2>
          <ul className="list-group">
            {['Jan - MVP Launch','Feb - AI Features Added','Mar - Verified Posting Hub','Apr - Ads Automation Hub','May - CRM Integration','Jun - White-label & Enterprise Launch'].map((item,i)=>(
              <li key={i} className="list-group-item aos-init aos-slide-up" style={{ transitionDelay: `${i*0.2}s` }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Pricing Plans */}
        <div className="indokona-section aos-init aos-slide-up" id="Pricing">
          <h2 className="section-heading text-success">💰 PRICING PLANS</h2>
          <div className="row g-4">
            {pricingPlans.map((p,i)=>(
              <div key={i} className="col-md-4 aos-init aos-zoom-in" style={{ transitionDelay: `${i*0.2}s` }}>
                <div className={`card h-100 p-3 shadow-sm ${p.color}`}>
                  <h4 className="fw-bold">{p.plan}</h4>
                  <h5>{p.price}</h5>
                  <ul className="mt-3">{p.features.map((f,idx)=><li key={idx}>{f}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="indokona-section aos-init aos-slide-up" id="Testimonials">
          <h2 className="section-heading text-info">💬 TESTIMONIALS</h2>
          <div className="row g-3">{testimonials.map((t,i) => (
            <div key={i} className="col-md-4 aos-init aos-zoom-in" style={{ transitionDelay: `${i*0.2}s` }}>
              <div className="card h-100 p-3 shadow-sm">
                <p className="fst-italic">"{t.feedback}"</p>
                <p className="fw-bold mb-0 mt-2">{t.name}</p>
                <small className="text-muted">{t.company}</small>
              </div>
            </div>
          ))}</div>
        </div>

        {/* FAQ */}
        <div className="indokona-section aos-init aos-slide-up" id="FAQ">
          <h2 className="section-heading text-primary">❓ FREQUENTLY ASKED QUESTIONS</h2>
          {faqData.map((f,i)=>(
            <div key={i} className="mb-3 aos-init aos-slide-up" style={{ transitionDelay: `${i*0.2}s` }}>
              <h5 className="fw-bold">{f.q}</h5>
              <p className="text-muted">{f.a}</p>
            </div>
          ))}
        </div>

        {/* Legal Compliance */}
        <div className="indokona-section bg-danger bg-opacity-10 aos-init aos-slide-up" id="Security">
          <h2 className="section-heading text-danger">🧾 LEGAL & SECURITY COMPLIANCE</h2>
          <div className="row g-3">{legalCompliance.map((item,i) => (
            <div key={i} className="col-lg-6 aos-init aos-slide-up" style={{ transitionDelay: `${0.1 + i*0.1}s` }}>
              <div className="alert alert-danger p-3 mb-0 border-0 shadow-sm"><i className="bi bi-shield-lock-fill me-2"></i> {item}</div>
            </div>
          ))}</div>
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div className="conversion-popup">
          <i className="bi bi-patch-check-fill"></i>
          <p className="mb-0 fw-bold">{popup.name} from {popup.city} just purchased the {popup.plan}!</p>
        </div>
      )}
      <Footer/>
    </React.Fragment>
  );
};

export default IndokonaSuitePage;
