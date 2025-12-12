import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Single-file Privacy Policy React component using Bootstrap + custom CSS
// Save as PrivacyPolicy.jsx and import in your App (e.g. <PrivacyPolicy />)

export default function M2MPrivacyPolicy() {
  useEffect(() => {
    const css = `
      .hero-privacy { background: linear-gradient(135deg,#051937 0%, #0f172a 100%); color: #fff; padding: 48px 0; }
      .card-ghost { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); }
      .glow { box-shadow: 0 6px 30px rgba(14,165,233,0.06); }
      .toc a { color: #e6f7ff; text-decoration: none; }
      .toc a:hover { text-decoration: underline; }
      .section-title { color: #022c43; }
      .accent { color: #06b6d4; }
      .fade-in { animation: fadeInUp .6s ease both; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
      .decor-dot { width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:8px; }
      .bg-panel { background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005)); }
      .small-muted { color: rgba(255,255,255,0.7); }
      .meta-box { background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px; }
      .toc-panel { position: sticky; top: 90px; }
      @media print { .print-hide { display: none !important; } }
    `;
    const style = document.createElement('style');
    style.dataset.source = 'PrivacyPolicy.css.injected';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const sections = [
    { id: 'intro', title: 'Introduction', content: `This Privacy Policy explains how Mind To Market™, operated by Indokona Credit Bazar Pvt. Ltd., collects, uses, stores, and protects your information when you use our Platform, Website, WhatsApp Services, and AI + SaaS tools. By accessing our services, you consent to this Privacy Policy.` },
    { id: 'info-collect', title: 'Information We Collect', content: `We collect Personal Information (Name, Email, Phone, Business Name, Location, WhatsApp Number, GST/Business Registration details), Usage Data (device details, browser type, IP address, log data, analytics), Files & Inputs (uploaded documents, AI inputs, media shared), and Payment Information processed via third-party gateways. We do not store card/bank details on our servers.` },
    { id: 'how-use', title: 'How We Use Your Information', content: `We use data to create/manage accounts, provide AI + SaaS services, process legal registrations via partners, automate branding/marketing/CRM tasks, send WhatsApp and email notifications, improve service quality, ensure security, and provide support and onboarding.` },
    { id: 'sharing', title: 'Sharing of Information', content: `We do NOT sell or rent your data. Information may be shared with verified partner agencies (legal/registration), payment gateways, technical providers (AWS, Meta, WhatsApp Cloud API), and compliance authorities when legally required. All partners adhere to confidentiality rules.` },
    { id: 'ai-usage', title: 'AI Data Usage', content: `Inputs given to AI tools may be used to improve system accuracy, provide faster results and reduce errors. Personal/private documents are not used for training outside the platform.` },
    { id: 'whatsapp', title: 'WhatsApp & Communication Consent', content: `By using our platform, you consent to receiving WhatsApp messages, email notifications, SMS alerts, service updates and transaction confirmations. These are required for service delivery. You can opt out anytime except for essential notifications.` },
    { id: 'security', title: 'Data Security', content: `We use SSL encryption, secure cloud hosting, auto backups, access control and AI threat detection. Despite best efforts, no system is 100% hack-proof; we follow industry standards to minimize risk.` },
    { id: 'retention', title: 'Data Retention', content: `Your data is stored while your account is active. After cancellation, non-essential data may be deleted within 90 days as per company policy.` },
    { id: 'user-rights', title: 'User Rights', content: `You can request data access, correction, deletion, or unsubscribe from communications by emailing indokonaoutsourcing@gmail.com.` },
    { id: 'third-party', title: 'Third-Party Links', content: `Our platform may link to external websites. We are not responsible for their privacy practices.` },
    { id: 'changes', title: 'Changes to Policy', content: `We may update this policy. Continued usage means acceptance of updated terms.` },
    { id: 'contact', title: 'Contact', content: `Email: indokonaoutsourcing@gmail.com\nPhone / WhatsApp: +91 8800905879\nWebsite: www.indokona.com\nHead Office: Faridabad, Haryana, India` }
  ];

  const handlePrint = () => window.print();

  return (
    <div className="bg-dark text-light" style={{ minHeight: '100vh' }}>
      <header className="hero-privacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 fade-in">
              <h1 className="display-5 fw-bold">Privacy Policy</h1>
              <p className="lead mb-1">Mind To Market™ — Indokona Credit Bazar Pvt. Ltd.</p>
              <div className="d-flex gap-2 align-items-center mt-3">
                <span className="meta-box small-muted">Last Updated: 2025</span>
                <button onClick={handlePrint} className="btn btn-outline-light btn-sm ms-2 print-hide">Print / Save PDF</button>
                <a className="btn btn-info btn-sm ms-2" href="mailto:indokonaoutsourcing@gmail.com">Contact</a>
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

      <main className="container py-5">
        <div className="row">
          <aside className="col-lg-3 mb-4">
            <div className="card bg-panel p-3 card-ghost">
              <div className="d-flex align-items-center mb-3">
                <div className="decor-dot" style={{ background: '#06b6d4' }}></div>
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
                <button className="btn btn-sm btn-info w-100" onClick={handlePrint}>Print / PDF</button>
              </div>
            </div>
          </aside>

          <section className="col-lg-9">
            <div className="card p-4 card-ghost mb-4 fade-in">
              <h3 className="section-title">Quick Summary</h3>
              <p className="text-muted">This Privacy Policy explains what data we collect, how we use it, and your rights. Please read carefully.</p>
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
              <p className="small text-muted">© 2025 Mind To Market™ — All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </main>

      <a href="mailto:indokonaoutsourcing@gmail.com" className="position-fixed bottom-0 end-0 m-4 btn btn-lg btn-info shadow-lg print-hide" style={{ borderRadius: 999 }}>Contact</a>
    </div>
  );
}
