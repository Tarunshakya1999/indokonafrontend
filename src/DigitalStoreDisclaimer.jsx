import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Disclaimer_Indokona.jsx (Modern Meta-Compliance UI)

const disclaimerSections = [
  {
    id: "guarantee",
    title: "1. No Guaranteed Income",
    content: (
      <>
        <p>
          Indokona Digital Store does not guarantee any specific income or
          financial results. Earnings depend entirely on:
        </p>
        <ul className="check-list">
          <li>Your skills</li>
          <li>Marketing efforts</li>
          <li>Sales performance</li>
          <li>User behavior</li>
        </ul>
        <p>
          We only provide tools, training, and reseller systems — results vary
          for each person.
        </p>
      </>
    ),
    icon: "💸",
  },
  {
    id: "advice",
    title: "2. No Financial or Investment Advice",
    content: (
      <>
        <p>
          Nothing on our website, dashboard, ads, or messages should be
          considered:
        </p>
        <ul className="check-list">
          <li>Financial advice</li>
          <li>Investment advice</li>
          <li>Guarantee of business success</li>
        </ul>
        <p>All decisions are made by the user.</p>
      </>
    ),
    icon: "🧠",
  },
  {
    id: "accuracy",
    title: "3. Accuracy of Information",
    content: (
      <>
        <p>
          We try to publish accurate information, but the following may change
          anytime without notice:
        </p>
        <ul className="check-list">
          <li>Digital product availability</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </>
    ),
    icon: "📋",
  },
  {
    id: "thirdparty",
    title: "4. Third-Party Products & Services",
    content: (
      <>
        <p>
          Some products depend on third-party platforms. We are not
          responsible for:
        </p>
        <ul className="cross-list">
          <li>Their policies</li>
          <li>Their downtime</li>
          <li>Their pricing changes</li>
          <li>Their service limitations</li>
        </ul>
      </>
    ),
    icon: "🤝",
  },
  {
    id: "earnings",
    title: "5. Affiliate & Reseller Earnings",
    content: (
      <>
        <p>Reseller earnings are based on:</p>
        <ul className="check-list">
          <li>Sales made</li>
          <li>Commissions applicable</li>
          <li>Plan benefits chosen</li>
        </ul>
        <p>No earning amount is guaranteed.</p>
      </>
    ),
    icon: "📈",
  },
  {
    id: "legal",
    title: "6. Legal Compliance",
    content: (
      <>
        <p>Users must follow:</p>
        <ul className="check-list">
          <li>Indian IT Act</li>
          <li>Digital Goods Compliance</li>
          <li>Meta Ads Policies</li>
          <li>Consumer Protection Rules</li>
        </ul>
        <p>Any misuse may lead to account suspension.</p>
      </>
    ),
    icon: "⚖️",
  },
  {
    id: "liability",
    title: "7. Liability Limitation",
    content: (
      <>
        <p>Indokona is not liable for:</p>
        <ul className="cross-list">
          <li>Loss of profits</li>
          <li>Business losses</li>
          <li>Wrong marketing strategies</li>
          <li>Account misuse</li>
          <li>Third-party service failures</li>
        </ul>
        <p>Use the platform at your own responsibility.</p>
      </>
    ),
    icon: "🚫",
  },
  {
    id: "contact",
    title: "8. Contact for Clarification",
    content: (
      <>
        <p>For legal or policy-related questions:</p>
        <p className="contact-details">
          📧 <a href="mailto:indokonaoutsourcing@gmail.com">indokonaoutsourcing@gmail.com</a>
        </p>
        <p className="contact-details">
          📞 <a href="tel:+919625995155">+91 96259 95155</a>
        </p>
      </>
    ),
    icon: "📞",
  },
];

const SectionCard = ({ section, delay }) => {
  const [inView, setInView] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    // Simple Intersection Observer for animation trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Trigger animation only once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-box mb-4 p-4 rounded-3 d-flex align-items-start ${inView ? 'animated-section' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="section-icon me-3 flex-shrink-0">
        <span className="display-6" role="img" aria-label={section.title}>{section.icon}</span>
      </div>
      <div>
        <h4 className="section-title fw-bold" id={section.id}>{section.title}</h4>
        <div className="section-content mt-2">{section.content}</div>
      </div>
    </div>
  );
};

export default function DigitalStoreDisclaimer() {
  return (
    <div className="container py-5 disclaimer-page-new">
      <style>{`
        /* --- Disclaimer Custom UI --- */
        .disclaimer-page-new {
            background-color: #f4f7fa; /* Light, clean background */
            font-family: 'Poppins', sans-serif;
        }

        .disclaimer-card {
            max-width: 950px;
            margin: 0 auto;
            background: linear-gradient(145deg, #ffffff 0%, #f9f9ff 100%);
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            overflow: hidden;
            border: 1px solid #e0e6ed;
        }

        .main-title {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(90deg, #1c76c1, #00b894); /* Blue-Green Gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        }

        .sub-intro {
            color: #555;
            font-style: italic;
            border-left: 4px solid #00b894; /* Green Compliance Accent */
            padding-left: 15px;
        }

        /* Section Styling */
        .section-box {
            background: #ffffff;
            border: 1px solid #e0e6ed;
            border-left: 6px solid #1c76c1; /* Blue Primary Accent */
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            opacity: 0; /* Hidden initially for animation */
            transform: translateY(20px);
        }

        .section-box:hover {
            border-left: 6px solid #00b894; /* Hover changes to Green accent */
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* Fade-in Animation */
        .animated-section {
            animation: fadeInSlide 0.8s forwards;
        }

        @keyframes fadeInSlide {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section-title {
            color: #1c76c1;
            font-size: 1.25rem;
        }

        /* List Styling (Important for policy pages) */
        .check-list, .cross-list {
            list-style: none;
            padding-left: 0;
            margin-top: 10px;
        }

        .check-list li::before {
            content: "✓";
            color: #00b894; /* Green Check */
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }

        .cross-list li::before {
            content: "✗";
            color: #c11c1c; /* Red Cross */
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
        
        .contact-details a {
            color: #1c76c1;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s;
        }
        .contact-details a:hover {
            color: #00b894;
        }
      `}</style>
      
      <div className="disclaimer-card">
        <header className="text-center mb-5">
          <h1 className="main-title">
            ⭐ Digital Store Disclaimer
          </h1>
          <p className="text-muted mt-2">Last Updated: December 2025</p>
          <p className="sub-intro mt-4">
            **Meta Compliance Note:** This disclaimer is written according to
            Facebook/Instagram (Meta) Ads Policy standards to ensure transparency
            regarding earnings and financial advice.
          </p>
        </header>

        <div className="disclaimer-content">
          {disclaimerSections.map((s, index) => (
            <SectionCard key={s.id} section={s} delay={index * 150} />
          ))}
        </div>

        <footer className="pt-4 mt-5 border-top text-center text-muted">
            Indokona Digital Store | Powered by Indokona Credit Bazar Pvt. Ltd.
        </footer>
      </div>
    </div>
  );
}