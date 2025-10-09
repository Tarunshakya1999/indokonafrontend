// Indokona Fintech Services Page (React + Bootstrap)
// File: FintechServices.jsx
// Usage:
// 1. Install Bootstrap in your React project: `npm install bootstrap`
// 2. Place this file in src/components/FintechServices.jsx
// 3. Import in your app: `import FintechServices from './components/FintechServices'`
// 4. Ensure you import Bootstrap CSS once in your index.js or App.js: `import 'bootstrap/dist/css/bootstrap.min.css'`

import React, { useState } from 'react';

export default function FintechServices() {
  const services = [
    {
      id: 1,
      title: 'Payments & Checkout',
      desc: 'Seamless payments with card, UPI, wallets and netbanking. Pre-built checkout UI, webhooks and server-side verification.',
      bullets: [
        'Hosted checkout or embedded modal',
        'Auto-retry + 3D Secure support',
        'Webhook events for payment success/failure'
      ]
    },
    {
      id: 2,
      title: 'Payouts & Vendor Settlements',
      desc: 'Automate vendor payouts to bank accounts, UPI or wallets with scheduled/instant options and reconciliations.',
      bullets: ['Bulk payouts', 'Scheduled disbursements', 'Payout status + retry mechanism']
    },
    {
      id: 3,
      title: 'KYC & User Onboarding',
      desc: 'KYC flows (Aadhaar/PAN/Docs) and risk checks for seamless onboarding and regulatory compliance.',
      bullets: ['Document upload', 'OCR & verification', 'KYC status webhooks']
    },
    {
      id: 4,
      title: 'Lending & Credit Scoring',
      desc: 'Micro-lending primitives: loan offers, EMI schedules, risk profiling and repayment tracking.',
      bullets: ['Loan origination APIs', 'EMI schedule generator', 'Repayment webhooks']
    }
  ];

  const pricing = [
    { tier: 'Starter', price: '₹499', points: ['UP to 2,500 transactions/mo', 'Email support', 'Basic docs'] },
    { tier: 'Growth', price: '₹2,499', points: ['UP to 25,000 transactions/mo', 'Priority support', 'Webhook + API logs'] },
    { tier: 'Enterprise', price: 'Custom', points: ['Unlimited transactions', 'SLA & Onboarding', 'Dedicated RM'] }
  ];

  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // This demo doesn't post anywhere. In your app, post to your backend endpoint here.
    console.log('Contact request', contact);
    setSubmitted(true);
  }

  return (
    <div className="container my-5">
      {/* Hero */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-7">
          <h1 className="display-5">Indokona Fintech</h1>
          <p className="lead text-muted">Payments, payouts, KYC, lending — modular fintech building blocks to power your product.</p>
          <div className="d-flex gap-2">
            <a className="btn btn-primary btn-lg" href="#contact">Get Started</a>
            <a className="btn btn-outline-secondary btn-lg" href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="col-lg-5 text-center mt-4 mt-lg-0">
          <div className="border rounded p-4 bg-light">
            <h5 className="mb-3">Trusted by startups & enterprises</h5>
            <p className="small text-muted mb-0">PCI-ready integrations, monitoring, and developer-friendly SDKs.</p>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="mb-5">
        <h2 className="h3 mb-4">Core Services</h2>
        <div className="row g-4">
          {services.map(s => (
            <div key={s.id} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text text-muted small">{s.desc}</p>
                  <ul className="list-unstyled mt-auto mb-3 small">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2 me-2 mt-1" viewBox="0 0 16 16">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-sm btn-outline-primary mt-2" href="#contact">Talk to sales</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations + Security */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="h4">Integrations & SDKs</h2>
          <p className="text-muted">APIs and SDKs for web, mobile (Android/iOS), and server libraries (Python, Node, Java). Webhooks, sandbox and production environments, and detailed API docs.</p>
          <ul className="small text-muted">
            <li>REST APIs with JSON + SDKs</li>
            <li>Sandbox environment for safe testing</li>
            <li>Rich event webhooks + retry rules</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="h4">Security & Compliance</h2>
          <p className="text-muted">We follow industry best-practices: PCI-DSS readiness, TLS 1.2+, encrypted secrets, role-based access and audit logs.</p>
          <div className="row g-2">
            <div className="col-6">
              <div className="p-3 border rounded h-100">
                <strong>PCI</strong>
                <div className="small text-muted">Guidance & readiness</div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border rounded h-100">
                <strong>2FA</strong>
                <div className="small text-muted">Admin access protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-5">
        <h2 className="h3 mb-4">Pricing</h2>
        <div className="row g-4">
          {pricing.map((p, idx) => (
            <div key={idx} className="col-md-4">
              <div className={`card h-100 ${p.tier === 'Enterprise' ? 'border-primary' : ''}`}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.tier}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">{p.price}</h6>
                  <ul className="small">
                    {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                  <div className="mt-auto">
                    <a href="#contact" className="btn btn-primary w-100">Choose {p.tier}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="mb-5">
        <h2 className="h3 mb-3">FAQ</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                How long does onboarding take?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
              <div className="accordion-body small text-muted">Onboarding varies: sandbox access is immediate; live business verification typically completes within 2–7 business days depending on documents provided.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                Do you support refunds?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
              <div className="accordion-body small text-muted">Yes — refunds are supported via API for successful payments. Refunds may take a few business days depending on the payer's bank.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead form */}
      <section id="contact" className="mb-5">
        <h2 className="h3 mb-3">Talk to Sales</h2>
        {submitted ? (
          <div className="alert alert-success">Thanks! We received your request. Our team will contact you shortly.</div>
        ) : (
          <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input name="name" value={contact.name} onChange={handleChange} required type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input name="email" value={contact.email} onChange={handleChange} required type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input name="phone" value={contact.phone} onChange={handleChange} type="tel" className="form-control" />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea name="message" value={contact.message} onChange={handleChange} className="form-control" rows="4" />
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Request a Demo</button>
            </div>
          </form>
        )}
      </section>

      <footer className="border-top pt-4 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="small text-muted">© {new Date().getFullYear()} Indokona</div>
          <div>
            <a className="small me-3" href="#">Privacy</a>
            <a className="small" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
