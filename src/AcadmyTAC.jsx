import React, { useState } from "react";

export default function AcadmyTermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 1, title: "Introduction", content: `By accessing, enrolling, ...` },
    { id: 2, title: "Eligibility", content: `• Users must be 18 years...` },
    { id: 3, title: "Service Description", content: `Indokona provides: ...` },
    { id: 4, title: "Payment Terms", content: `• All prices are...` },
    { id: 5, title: "Refund Policy", content: `We offer a 100% refund...` },
    { id: 6, title: "Course Access & Usage", content: `• Access is granted...` },
    { id: 7, title: "Intellectual Property Rights", content: `All content...` },
    { id: 8, title: "Mentorship & Community", content: `• Lifetime mentorship...` },
    { id: 9, title: "Program Certification", content: `Certification is awarded...` },
    { id: 10, title: "No Guarantee of Earnings", content: `Indokona does not...` },
    { id: 11, title: "No Legal or Financial Advice", content: `The course may...` },
    { id: 12, title: "Third-Party Tools", content: `The Academy may...` },
    { id: 13, title: "Limitation of Liability", content: `Indokona will not...` },
    { id: 14, title: "Termination Policy", content: `We may suspend...` },
    { id: 15, title: "Changes to Terms", content: `Indokona may update...` }
  ];

  return (
    <>
      {/* CSS inside the same JSX file */}
      <style>{`
        .terms-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #4c1d95, #0f172a);
        }

        .terms-header {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #9333ea;
        }

        .terms-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          border: 1px solid rgba(147, 51, 234, 0.4);
          overflow: hidden;
        }

        .terms-btn {
          background: transparent;
          border: none;
          color: white;
          transition: 0.3s;
          font-size: 17px;
        }

        .terms-btn:hover {
          background: rgba(147, 51, 234, 0.1);
        }

        .section-number {
          color: #c084fc;
          font-size: 22px;
          font-weight: bold;
        }

        .rotate-icon {
          transition: transform 0.3s ease;
          font-size: 20px;
        }

        .rotate {
          transform: rotate(180deg);
        }

        .terms-content {
          background: rgba(0, 0, 0, 0.25);
        }

        .contact-section {
          background: linear-gradient(to right, #9333ea, #ec4899);
        }

        .link-light:hover {
          color: yellow !important;
        }
      `}</style>

      <div className="terms-bg">

        {/* Header */}
        <div className="terms-header">
          <div className="container py-4">
            <h1 className="text-white fw-bold display-6 mb-1">📄 Terms & Conditions</h1>
            <p className="text-light">Indokona Idea to Empire Academy™</p>
            <p className="text-secondary small">Last Updated: January 2025</p>
          </div>
        </div>

        {/* Main */}
        <div className="container py-5">
          <div className="terms-card">

            {sections.map((section) => (
              <div key={section.id} className="border-bottom border-secondary">
                <button
                  className="w-100 text-start p-4 d-flex justify-content-between align-items-center terms-btn"
                  onClick={() =>
                    setActiveSection(activeSection === section.id ? null : section.id)
                  }
                >
                  <div className="d-flex align-items-center">
                    <span className="section-number">{section.id}.</span>
                    <h5 className="ms-3 mb-0 text-white">{section.title}</h5>
                  </div>

                  <i
                    className={`bi bi-chevron-down text-light rotate-icon ${
                      activeSection === section.id ? "rotate" : ""
                    }`}
                  ></i>
                </button>

                {activeSection === section.id && (
                  <div className="p-4 terms-content">
                    <p className="text-light">{section.content}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Contact */}
            <div className="p-4 contact-section">
              <h4 className="text-white fw-bold mb-3">📞 Contact Information</h4>

              <p className="text-white fw-semibold">Indokona Idea to Empire Academy™</p>
              <p className="text-light small">Operated by: Indokona Credit Bazar Pvt. Ltd.</p>

              <p className="text-white">
                📱 WhatsApp/Call:{" "}
                <a href="tel:+919625995155" className="link-light">
                  +91 9625995155
                </a>
              </p>

              <p className="text-white">
                📧 Email:{" "}
                <a
                  href="mailto:academy@indokona.com"
                  className="link-light"
                >
                  academy@indokona.com
                </a>
              </p>

              <p className="text-white">
                🌐 Website:
                <a
                  href="https://www.indokona.com"
                  className="link-light ms-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.indokona.com
                </a>
              </p>

              <p className="text-white">📍 Corporate Office: Faridabad, Haryana</p>
            </div>
          </div>

          <p className="text-center text-secondary small mt-4">
            © 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
