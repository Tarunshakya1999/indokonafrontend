import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Single-file Privacy Policy React component using Bootstrap + custom CSS
// Save as PrivacyPolicy.jsx and import in your App (e.g. <PrivacyPolicy />)

export default function M2MPrivacyPolicy() {
  useEffect(() => {
    const css = `
      .hero-privacy { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); 
        color: #fff; 
        padding: 60px 0; 
        position: relative; 
        overflow: hidden; 
      }
      .hero-privacy::before { 
        content: ''; 
        position: absolute; 
        top: 0; left: 0; right: 0; bottom: 0; 
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat; 
        opacity: 0.3; 
      }
      .card-ghost { 
        background: rgba(255,255,255,0.05); 
        border: 1px solid rgba(255,255,255,0.1); 
        backdrop-filter: blur(10px); 
      }
      .glow { 
        box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2); 
        transition: box-shadow 0.3s ease; 
      }
      .glow:hover { 
        box-shadow: 0 12px 40px rgba(102, 126, 234, 0.3); 
      }
      .toc a { 
        color: #e6f7ff; 
        text-decoration: none; 
        transition: color 0.3s ease; 
      }
      .toc a:hover { 
        color: #a78bfa; 
        text-decoration: underline; 
      }
      .section-title { 
        color: #1e293b; 
        font-weight: 600; 
      }
      .accent { 
        color: #8b5cf6; 
      }
      .fade-in { 
        animation: fadeInUp 0.8s ease both; 
      }
      .fade-in:nth-child(odd) { 
        animation-delay: 0.1s; 
      }
      .fade-in:nth-child(even) { 
        animation-delay: 0.2s; 
      }
      @keyframes fadeInUp { 
        from { opacity: 0; transform: translateY(20px); } 
        to { opacity: 1; transform: translateY(0); } 
      }
      .decor-dot { 
        width: 12px; 
        height: 12px; 
        border-radius: 50%; 
        display: inline-block; 
        margin-right: 10px; 
        background: linear-gradient(45deg, #667eea, #764ba2); 
      }
      .bg-panel { 
        background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); 
      }
      .small-muted { 
        color: rgba(255,255,255,0.8); 
      }
      .meta-box { 
        background: rgba(255,255,255,0.1); 
        padding: 10px 15px; 
        border-radius: 12px; 
        border: 1px solid rgba(255,255,255,0.2); 
      }
      .toc-panel { 
        position: sticky; 
        top: 100px; 
      }
      .section-card { 
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); 
        border: none; 
        border-radius: 16px; 
        transition: transform 0.3s ease, box-shadow 0.3s ease; 
      }
      .section-card:hover { 
        transform: translateY(-5px); 
        box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
      }
      .icon-accent { 
        color: #8b5cf6; 
        margin-right: 8px; 
      }
      @media print { 
        .print-hide { display: none !important; } 
      }
    `;
    const style = document.createElement('style');
    style.dataset.source = 'PrivacyPolicy.css.injected';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: '📄', content: `This Privacy Policy explains how Mind To Market™, operated by Indokona Credit Bazar Pvt. Ltd., collects, uses, stores, and protects your information when you use our Platform, Website, WhatsApp Services, and AI + SaaS tools. By accessing our services, you consent to this Privacy Policy.` },
    { id: 'info-collect', title: 'Information We Collect', icon: '🔍', content: `We collect Personal Information (Name, Email, Phone, Business Name, Location, WhatsApp Number, GST/Business Registration details), Usage Data (device details, browser type, IP address, log data, analytics), Files & Inputs (uploaded documents, AI inputs, media shared), and Payment Information processed via third-party gateways. We do not store card/bank details on our servers.` },
    { id: 'how-use', title: 'How We Use Your Information', icon: '⚙️', content: `We use data to create/manage accounts, provide AI + SaaS services, process legal registrations via partners, automate branding/marketing/CRM tasks, send WhatsApp and email notifications, improve service quality, ensure security, and provide support and onboarding.` },
    { id: 'sharing', title: 'Sharing of Information', icon: '🤝', content: `We do NOT sell or rent your data. Information may be shared with verified partner agencies (legal/registration), payment gateways, technical providers (AWS, Meta, WhatsApp Cloud API), and compliance authorities when legally required. All partners adhere to confidentiality rules.` },
    { id: 'ai-usage', title: 'AI Data Usage', icon: '🤖', content: `Inputs given to AI tools may be used to improve system accuracy, provide faster results and reduce errors. Personal/private documents are not used for training outside the platform.` },
    { id: 'whatsapp', title: 'WhatsApp & Communication Consent', icon: '💬', content: `By using our platform, you consent to receiving WhatsApp messages, email notifications, SMS alerts, service updates and transaction confirmations. These are required for service delivery. You can opt out anytime except for essential notifications.` },
    { id: 'security', title: 'Data Security', icon: '🔒', content: `We use SSL encryption, secure cloud hosting, auto backups, access control and AI threat detection. Despite best efforts, no system is 100% hack-proof; we follow industry standards to minimize risk.` },
    { id: 'retention', title: 'Data Retention', icon: '📅', content: `Your data is stored while your account is active. After cancellation, non-essential data may be deleted within 90 days as per company policy.` },
    { id: 'user-rights', title: 'User Rights', icon: '🛡️', content: `You can request data access, correction, deletion, or unsubscribe from communications by emailing indokonaoutsourcing@gmail.com.` },
    { id: 'third-party', title: 'Third-Party Links', icon: '🔗', content: `Our platform may link to external websites. We are not responsible for their privacy practices.` },
    { id: 'changes', title: 'Changes to Policy', icon: '📝', content: `We may update this policy. Continued usage means acceptance of updated terms.` },
    { id: 'contact', title: 'Contact', icon: '📞', content: `Email: indokonaoutsourcing@gmail.com\nPhone / WhatsApp: +91 8800905879\nWebsite: www.indokona.com\nHead Office: Faridabad, Haryana, India` }
  ];

  const handlePrint = () => window.print();

  return (
    <div className="bg-dark text-light" style={{ minHeight: '100vh' }}>
      <header className="hero-privacy">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-md-8 fade-in">
              <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
              <p className="lead mb-3">Mind To Market™ — Indokona Credit Bazar Pvt. Ltd.</p>
              <div className="d-flex gap-3 align-items-center mt-4">
                <span className="meta-box small-muted">Last Updated: 2025</span>
                <button onClick={handlePrint} className="btn btn-outline-light btn-sm print-hide">Print / Save PDF</button>
                <a className="btn btn-info btn-sm" href="mailto:indokonaoutsourcing@gmail.com">Contact</a>
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0 fade-in">
              <div className="card card-ghost p-4 glow" style={{ display: 'inline-block', borderRadius: '16px' }}>
                <div className="fw-bold fs-5">Mind To Market™</div>
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
            <div className="card bg-panel p-4 card-ghost" style={{ borderRadius: '16px' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="decor-dot"></div>
                <strong>Contents</strong>
              </div>
              <nav className="toc-panel">
                <ul className="list-unstyled toc mb-0">
                  {sections.map(s => (
                    <li key={s.id} className="mb-2">
                      <a href={`#${s.id}`} className="d-block small text-light">{s.icon} {s.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-4">
                <button className="btn btn-sm btn-outline-light w-100 mb-2" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>Back to top</button>
                <button className="btn btn-sm btn-info w-100" onClick={handlePrint}>Print / PDF</button>
              </div>
            </div>
          </aside>

          <section className="col-lg-9">
            <div className="card p-4 card-ghost mb-4 fade-in" style={{ borderRadius: '16px' }}>
              <h3 className="section-title">Quick Summary</h3>
              <p className="text-muted">This Privacy Policy explains what data we collect, how we use it, and your rights. Please read carefully.</p>
            </div>

            {sections.map((s, idx) => (
              <article id={s.id} key={s.id} className="mb-4 fade-in">
                <div className="card p-4 section-card shadow-sm">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="mb-0 d-flex align-items-center">
                      <span className="icon-accent">{s.icon}</span>
                      {s.title}
                    </h4>
                    <div className="small text-muted">Section {idx + 1}</div>
                  </div>
                  <hr />
                  <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{s.content}</p>
                </div>
              </article>
            ))}

            <div className="mt-5 text-center">
              <p className="small text-muted">© 2025 Mind To Market™ — All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </main>

      <a href="mailto:indokonaoutsourcing@gmail.com" className="position-fixed bottom-0 end-0 m-4 btn btn-lg btn-info shadow-lg print-hide" style={{ borderRadius: '50%' }}>📧</a>
    </div>
  );
}
