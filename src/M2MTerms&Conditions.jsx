import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Single-file Terms & Conditions React component using Bootstrap + custom CSS
// Save as TermsPage.jsx and import in your App (e.g. <TermsPage />)

export default function M2MTermsPage() {
  useEffect(() => {
    const css = `
      .hero-terms { background: linear-gradient(135deg,#0f172a 0%, #6b21a8 100%); color: #fff; padding: 48px 0; }
      .card-ghost { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
      .glow { box-shadow: 0 6px 30px rgba(99,102,241,0.12); }
      .toc a { color: #f8fafc; text-decoration: none; }
      .toc a:hover { text-decoration: underline; }
      .section-title { color: #0b1020; }
      .accent { color: #7c3aed; }
      .fade-in { animation: fadeInUp .6s ease both; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
      .decor-dot { width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:8px; }
      .bg-panel { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }
      .small-muted { color: rgba(15,23,42,0.6); }
      .print-hide { display: inline-block; }
      @media print { .print-hide { display: none !important; } }
      /* subtle table of contents sticky */
      .toc-panel { position: sticky; top: 90px; }
      /* nice code-like block for meta info */
      .meta-box { background: rgba(0,0,0,0.02); padding: 10px 14px; border-radius: 8px; }
    `;
    const style = document.createElement('style');
    style.dataset.source = 'TermsPage.css.injected';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const sections = [
    { id: 'intro', title: 'Welcome & Acceptance', content: `Welcome to Mind To Market™ — Idea to Empire, operated by Indokona Credit Bazar Pvt. Ltd. By accessing or using our Platform, Website, WhatsApp Services, AI Tools, SaaS System, or any related modules, you agree to comply with these Terms & Conditions. If you do not agree to these Terms, please discontinue usage of the platform.` },
    { id: 'definitions', title: 'Definitions', content: `"Platform" refers to all digital services offered under Mind To Market™, including AI Tools, SaaS Applications, CRM, Legal Services, Branding Tools, Web/App Modules, and WhatsApp Automation Systems. "User" includes any Entrepreneur, Startup, MSME, Institute, or Company using the platform. "Services" means all 12 modules, features, tools, and support systems listed on the website.` },
    { id: 'eligibility', title: 'Eligibility', content: `You must be at least 18 years old, and legally competent under Indian Laws. Businesses must provide accurate registration details for compliance.` },
    { id: 'scope', title: 'Service Scope', content: `Mind To Market™ provides AI + SaaS based automation, branding, marketing, legal-document automation, and business management tools. We do NOT provide loans, funding, or financial guarantees. Some services like Company Registration, Trademark, GST, Legal Documentation are delivered through registered partner agencies. The platform acts as a technology enabler only.` },
    { id: 'responsibilities', title: 'User Responsibilities', content: `Users agree to provide accurate information, use tools ethically and legally, not misuse the AI/automation system for spam, fraud, or prohibited activities, and maintain confidentiality of login credentials. Any misuse may result in account suspension.` },
    { id: 'ai-disclaimer', title: 'AI-Generated Content Disclaimer', content: `Our AI tools generate logos, brand content, legal drafts, websites, ads, documents, and market insights. These outputs are suggestive and must be reviewed by the user. Mind To Market™ is not liable for AI-generated errors, market results, legal accuracy, or misinterpretation of outputs. User must review content before publishing/using.` },
    { id: 'legal-docs', title: 'Legal Documents & Compliance', content: `Auto-generated legal drafts (NDA, Agreements, MoU, Policies) are templates only. For legally binding use, User must verify them with a licensed legal professional. Our platform follows Meta Policy, MCA Rules, and Govt. of India compliance, but final responsibility of legal filings lies with the User/Partner Agency.` },
    { id: 'payments', title: 'Subscription & Payment Terms', content: `All plans (Starter, Growth, Enterprise) are billed on a Monthly Subscription basis, or Annual prepaid basis (if chosen). By subscribing you agree to recurring billing. Access continues until the subscription is cancelled. Non-payment may suspend access to modules. No physical product is shipped. All services are digital.` },
    { id: 'refunds', title: 'Refund Policy', content: `All subscription payments are non-refundable because services, AI credits, and digital assets get activated instantly. In case of a double payment or technical error, refunds are processed within 7–14 working days after verification. DFY Services and Legal Registrations are not refundable after processing begins.` },
    { id: 'availability', title: 'Service Availability', content: `We aim for 99% uptime, but maintenance, server downtime, and third-party API issues (WhatsApp, Meta, Google, AWS, Razorpay) may temporarily affect service delivery. Mind To Market™ is not responsible for external outages.` },
    { id: 'privacy', title: 'Data Privacy', content: `All user data is stored securely with SSL, encryption, auto backup, and ISO-standard practices. We do not sell user data. Data is used only for service fulfillment and support. (See full Privacy Policy for details.)` },
    { id: 'marketing', title: 'Marketing & Communication Consent', content: `By using the platform, you consent to receiving WhatsApp updates, Email notifications, SMS reminders, Service alerts, Transactional messages as part of service delivery. You may opt out anytime except mandatory notifications.` },
    { id: 'ip', title: 'Intellectual Property', content: `All software, designs, modules, dashboards, AI systems, and materials under Mind To Market™ belong to Indokona Credit Bazar Pvt. Ltd. User-created content (logos, posters, websites) belongs to the user. Unauthorized copying or selling of the platform is strictly prohibited.` },
    { id: 'liability', title: 'Limitation of Liability', content: `Mind To Market™ is not responsible for business losses, ad performance, marketing results, legal actions caused by user mistakes, incorrect filings by partner agencies, misuse of tools, or a user's failure to follow compliance. Maximum liability is limited to one month’s subscription fee.` },
    { id: 'termination', title: 'Termination', content: `We may terminate or suspend access for policy violations, abuse of tools, fraudulent activity, non-payment, or misuse of WhatsApp automation. User may terminate subscription anytime via request.` },
    { id: 'governing', title: 'Governing Law', content: `These terms are governed by Indian Law, and disputes fall under Faridabad, Haryana jurisdiction.` },
    { id: 'changes', title: 'Changes to Terms', content: `Mind To Market™ reserves the right to update Terms & Conditions at any time. Continued use after updates means acceptance of new terms.` },
    { id: 'contact', title: 'Contact Information', content: `Email: indokonaoutsourcing@gmail.com Phone / WhatsApp: +91 8800905879 Website: www.indokona.com Head Office: Faridabad, Haryana, India` },
  ];

  const handlePrint = () => window.print();

  return (
    <div className="bg-dark text-light" style={{ minHeight: '100vh' }}>
      {/* HERO */}
      <header className="hero-terms">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 fade-in">
              <h1 className="display-5 fw-bold">Terms &amp; Conditions</h1>
              <p className="lead mb-1">Mind To Market™ — Idea to Empire (Meta Approved)</p>
              <div className="d-flex gap-2 align-items-center mt-3">
                <span className="meta-box small-muted">Last Updated: 2025</span>
                <button onClick={handlePrint} className="btn btn-outline-light btn-sm ms-2 print-hide">Print / Save PDF</button>
                <a className="btn btn-warning btn-sm ms-2" href="mailto:indokonaoutsourcing@gmail.com">Contact</a>
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0 fade-in">
              <div className="card card-ghost p-3 glow" style={{ display: 'inline-block' }}>
                <div className="fw-bold">Mind To Market™</div>
                <div className="small">Indokona Credit Bazar Pvt. Ltd.</div>
                <div className="small text-muted mt-2">Faridabad, Haryana, India</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container py-5">
        <div className="row">
          {/* TOC */}
          <aside className="col-lg-3 mb-4">
            <div className="card bg-panel p-3 card-ghost">
              <div className="d-flex align-items-center mb-3">
                <div className="decor-dot" style={{ background: '#7c3aed' }}></div>
                <strong>Contents</strong>
              </div>
              <nav className="toc-panel">
                <ul className="list-unstyled toc mb-0">
                  {sections.map(s => (
                    <li key={s.id} className="mb-2">
                      <a href={`#${s.id}`} className="d-block small text-light">{s.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-3">
                <button className="btn btn-sm btn-outline-light w-100 mb-2" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>Back to top</button>
                <button className="btn btn-sm btn-warning w-100" onClick={handlePrint}>Print / PDF</button>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="col-lg-9">
            <div className="card p-4 card-ghost mb-4 fade-in">
              <h3 className="section-title">Quick Summary</h3>
              <p className="text-muted">Mind To Market™ provides AI + SaaS automation and business tools. These Terms govern your access and use. Please read carefully.</p>
            </div>

            {sections.map((s, idx) => (
              <article id={s.id} key={s.id} className="mb-4">
                <div className="card p-4 bg-light text-dark shadow-sm">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="mb-0">{s.title}</h4>
                    <div className="small text-muted">Section {idx + 1}</div>
                  </div>
                  <hr />
                  <p style={{ whiteSpace: 'pre-line' }}>{s.content}</p>
                </div>
              </article>
            ))}

            <div className="mt-5 text-center">
              <p className="small text-muted">© 2025 Mind To Market™ — Indokona Credit Bazar Pvt. Ltd. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Contact */}
      <a href="mailto:indokonaoutsourcing@gmail.com" className="position-fixed bottom-0 end-0 m-4 btn btn-lg btn-primary shadow-lg print-hide" style={{ borderRadius: 999 }}>Contact</a>
    </div>
  );
}
