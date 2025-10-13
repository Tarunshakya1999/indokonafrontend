import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Add any custom CSS for hover effects etc.

const MindToMarketInfoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const COLORS = {
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#ffc107",
    light: "#f8f9fa",
    dark: "#212529",
    success: "#28a745",
    danger: "#dc3545",
    info: "#17a2b8",
  };

  const SectionTitle = ({ title }) => (
    <h2 className="display-6 fw-bold mb-4 text-center" data-aos="fade-up" style={{ color: COLORS.primary }}>
      {title}
    </h2>
  );

  const SubSection = ({ heading, children }) => (
    <div className="mb-5" data-aos="fade-up">
      <h5 className="fw-bold">{heading}</h5>
      <p>{children}</p>
    </div>
  );

  const ListSection = ({ heading, items }) => (
    <div className="mb-5" data-aos="fade-up">
      <h5 className="fw-bold">{heading}</h5>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );

  const PackageCard = ({ name, price, idealFor, inclusions }) => (
    <div className="col-md-4 mb-4" data-aos="fade-up">
      <div className="card h-100 shadow-sm border-0 p-3 hover-scale" style={{ borderRadius: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="text-muted mb-2"><strong>Price Range:</strong> {price}</p>
          <p className="text-muted mb-2"><strong>Ideal For:</strong> {idealFor}</p>
          <h6 className="fw-bold mt-3">Key Inclusions:</h6>
          <ul>
            {inclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold">🌐 Mind To Market — Powered by Indokona</h1>
        <p className="lead">From Idea to Empire — Your Complete Brand-Building Partner</p>
      </div>

      <SectionTitle title="About the Brand" />
      <p data-aos="fade-up">
        Mind To Market is an all-in-one business and brand launch platform that helps individuals, startups, MSMEs, and corporations build a complete, legally compliant business ecosystem.
        We go beyond simple branding or marketing — our strength lies in providing A-to-Z business transformation services, from company registration and legal setup to automation, SaaS tools, CRM, software, websites, and nationwide marketing execution.
      </p>
      <p data-aos="fade-up"><strong>Parent Company:</strong> Indokona Credit Bazar Pvt. Ltd.<br/>
      <strong>Head Office:</strong> Faridabad, Haryana, India</p>

      <SectionTitle title="Our Mission" />
      <p data-aos="fade-up">
        To empower Indian entrepreneurs with every resource they need to start, build, and scale their businesses — legally, digitally, and globally.
        Our mission is to bridge the gap between innovation and execution by giving startups and enterprises the same advanced tools, automation systems, and business frameworks used by global corporations.
      </p>
      <p data-aos="fade-up">
        We aim to create 100,000+ successful entrepreneurs by 2030 through our integrated business ecosystem that blends legal structure, digital branding, SaaS automation, funding guidance, and continuous mentorship — all under one roof.
      </p>

      <SectionTitle title="Our Vision" />
      <p data-aos="fade-up">
        To establish Mind To Market as India’s most trusted and result-driven business transformation hub, where every idea — big or small — gets the chance to become a market-ready, revenue-generating brand.
      </p>
      <p data-aos="fade-up">
        Our long-term vision is to create a global network of empowered entrepreneurs, powered by Indian innovation, recognized for their quality, technology, and contribution to society.
      </p>

      <SectionTitle title="Our Complete Brand-Building Ecosystem" />
      
      <ListSection heading="1️⃣ Business Registration & Legal Setup" items={[
        "Company registration (Pvt. Ltd., LLP, OPC, Proprietorship, Partnership)",
        "GST / PAN / TAN registration",
        "MSME / Startup India / Udyam registration",
        "Trademark & copyright filing",
        "Legal drafting (MOA, AOA, partnership deeds, contracts, NDAs)",
        "Business banking & compliance consultancy"
      ]} />

      <ListSection heading="2️⃣ Branding & Creative Identity" items={[
        "Premium logo design (flat, 3D, or animated)",
        "Brand style guide & visual system",
        "Corporate stationery (cards, letterheads, envelopes)",
        "Company profile & investor deck",
        "Marketing brochures & product catalogues",
        "Banners, posters, hoardings, and flyers",
        "Product packaging & label design"
      ]} />

      <ListSection heading="3️⃣ Website & Landing Page Development" items={[
        "Domain, hosting, and SSL setup",
        "Dynamic websites and corporate portals",
        "High-conversion landing pages and sales funnels",
        "E-commerce & payment gateway integration",
        "Appointment booking systems & CRM dashboards",
        "Admin panels with analytics and lead tracking"
      ]} />

      <ListSection heading="4️⃣ Mobile App & Custom Software Solutions" items={[
        "Android / iOS native apps",
        "Custom CRM, ERP, HRMS, and accounting systems",
        "White-label SaaS platforms",
        "AI chatbots & WhatsApp automation",
        "Cloud hosting & enterprise-grade data security"
      ]} />

      <ListSection heading="5️⃣ Digital Marketing & Promotion" items={[
        "Social media setup & management (Facebook, Instagram, LinkedIn, YouTube, X)",
        "Monthly content calendars & creative assets",
        "Paid ad campaigns (Meta, Google, YouTube)",
        "SEO & Google Business optimization",
        "Influencer & affiliate partnerships",
        "Email & SMS automation",
        "Short video creation & storytelling content"
      ]} />

      <ListSection heading="6️⃣ SaaS & Automation Tools" items={[
        "Website & store builder",
        "Funnel & form builder",
        "Integrated CRM + WhatsApp automation",
        "Billing & invoicing tools",
        "AI content generator",
        "Payment link creator & reporting dashboard"
      ]} />

      <ListSection heading="7️⃣ Annual Maintenance (AMC)" items={[
        "Website & app maintenance",
        "Hosting & SSL renewals",
        "Security audits & regular backups",
        "Content & design refresh",
        "Bug fixes & updates",
        "Dedicated relationship manager"
      ]} />

      <ListSection heading="8️⃣ Business Training & Mentorship" items={[
        "Business launch bootcamps",
        "AI tools & automation workshops",
        "Branding & sales mentorship",
        "Digital marketing certifications",
        "Career training via Dream True Academy"
      ]} />

      <ListSection heading="9️⃣ Awards & Recognition Assistance" items={[
        "National and International Award nominations",
        "MSME Excellence Awards",
        "ISO & Quality Certification support",
        "Business and Entrepreneur Recognition Programs",
        "Guidance for Record Book Applications (National & Global)"
      ]} />

      <SectionTitle title="Popular Packages" />
      <div className="row">
        <PackageCard name="Starter Package" price="₹9,999 – ₹14,999" idealFor="Freelancers & Individuals" inclusions={["Logo", "MSME registration", "1-page website"]} />
        <PackageCard name="Pro Package" price="₹24,999 – ₹39,999" idealFor="Startups & Shops" inclusions={["Domain", "hosting", "e-commerce", "CRM", "marketing"]} />
        <PackageCard name="Business Package" price="₹49,999 – ₹79,999" idealFor="MSMEs & Growing Firms" inclusions={["Website + App + Legal + Marketing"]} />
        <PackageCard name="Corporate Package" price="₹100,000 – ₹300,000+" idealFor="Brands & Agencies" inclusions={["Branding suite + Custom software + AMC"]} />
        <PackageCard name="White-Label SaaS Plan" price="₹500,000+" idealFor="IT & Marketing Agencies" inclusions={["SaaS portal + CRM + AI tools + White-label"]} />
      </div>

      <SectionTitle title="Why Choose Mind To Market" />
      <ul data-aos="fade-up">
        <li>✅ One-stop business transformation solution (A → Z)</li>
        <li>✅ Backed by Indokona Group’s legal and financial strength</li>
        <li>✅ In-house teams for design, development, marketing & compliance</li>
        <li>✅ ISO & government certification support</li>
        <li>✅ End-to-end AMC, mentorship & funding guidance</li>
        <li>✅ ROI-focused, compliant & transparent business model</li>
      </ul>

      <SectionTitle title="Legal & Compliance Disclosure" />
      <p data-aos="fade-up">
        We operate under Indian law and comply with MCA, ROC, IT Act, and global privacy standards (GDPR & DPA). All company identifiers, compliance numbers, and policies are displayed transparently.
      </p>

      <SectionTitle title="Contact & Sales" />
      <p data-aos="fade-up">
        📍 Address: Faridabad, Haryana, India <br/>
        📧 Email: support@mindtomarket.in <br/>
        🌐 Website: www.mindtomarket.in <br/>
        📱 WhatsApp: +91 9xxxxxxxxx <br/>
        Social: Facebook • Instagram • YouTube
      </p>

      <footer className="text-center mt-5 py-4" style={{ backgroundColor: COLORS.dark, color: "#fff" }}>
        © 2025 Mind To Market — Powered by Indokona Credit Bazar Pvt. Ltd. All rights reserved. Registered under MCA (Government of India).
      </footer>
    </div>
  );
};

export default MindToMarketInfoPage;
