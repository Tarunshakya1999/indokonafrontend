import React, { useState } from "react";

export default function AcadmyTermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `By accessing, enrolling, or using any services offered by Indokona Idea to Empire Academy™, you agree to comply with all terms, conditions, policies, and guidelines mentioned on this platform. These Terms apply to all users, including visitors, students, members, mentors, affiliates, and partners.  
      You acknowledge that the Academy is an educational platform designed to provide training, guidance, mentorship, and digital tools for business transformation.  
      Your participation is voluntary and you are responsible for reviewing all policies, updates, and announcements shared by the Academy through email, LMS dashboard, WhatsApp, or other communication channels.  
      By accessing the content, you accept that unauthorized use, duplication, distribution, or resale of program material is strictly prohibited.  
      Continued use of this platform indicates your acceptance of any future modifications to these Terms.`
    },
  
    {
      id: 2,
      title: "Eligibility",
      content: `• Users must be 18 years or older to register, purchase, or access our programs.  
      • You agree that all personal and payment information provided during signup is accurate and lawful.  
      • Any fraudulent, misleading, or unauthorized use of identity, account details, or payment information may result in immediate account suspension.  
      • Users below 18 may participate only under the supervision of a parent or legal guardian.  
      • Indokona reserves the right to verify your identity anytime if suspicious activity is detected.`
    },
  
    {
      id: 3,
      title: "Service Description",
      content: `Indokona provides business transformation training, mentorship programs, online courses, digital tools, templates, community access, growth systems, and long-term support to help individuals build and scale their businesses.  
      Our services include video lessons, live calls, Q&A sessions, strategy breakdowns, assignments, downloadable resources, and real-time support.  
      However, the nature, duration, and format of services may change based on upgrades, improvements, or curriculum revisions without prior notice.  
      The Academy may add new modules, discontinue outdated lessons, or modify the structure as required to maintain high-quality education.`
    },
  
    {
      id: 4,
      title: "Payment Terms",
      content: `• All prices, plans, and payment structures are clearly mentioned on the official checkout pages.  
      • Payments once made are considered final unless covered under the refund policy.  
      • The Academy uses secure third-party payment gateways such as Razorpay, Stripe, or PayPal for protecting your transactions.  
      • You agree to provide valid payment details and authorize us to charge the selected payment method.  
      • Any chargeback, dispute, or unauthorized reversal may result in permanent account suspension.`
    },
  
    {
      id: 5,
      title: "Refund Policy",
      content: `We offer a 100% refund only under eligible conditions that are clearly defined on our official refund policy page.  
      Refunds are provided only if requested within the valid time period and if the student meets all necessary criteria.  
      Refunds will not be issued for partial usage, incomplete attendance, technical issues from the user's end, or lack of expected results.  
      Any misuse of the refund system or repeated refund requests may result in denial of future enrollments.  
      Refund approvals follow a strict verification process to ensure fairness and transparency.`
    },
  
    {
      id: 6,
      title: "Course Access & Usage",
      content: `• Access is granted to the registered email ID only. Sharing accounts, selling access, or logging in from unauthorized devices is strictly prohibited.  
      • The Academy monitors device activity, login patterns, and suspicious behaviour for security.  
      • Any violation may lead to permanent revocation of access without refund.  
      • Students must maintain confidentiality of course materials and are responsible for safeguarding their login credentials.`
    },
  
    {
      id: 7,
      title: "Intellectual Property Rights",
      content: `All course videos, documents, training scripts, strategies, templates, frameworks, branding content, and digital assets are the exclusive intellectual property of Indokona Credit Bazar Pvt. Ltd.  
      Users are not allowed to reproduce, share, distribute, modify, upload, resell, or publicly display any content without written permission.  
      Unauthorized distribution will result in legal action as per Indian IT and Copyright laws.`
    },
  
    {
      id: 8,
      title: "Mentorship & Community",
      content: `• Lifetime mentorship is included only as mentioned in the respective plan.  
      • Community access is provided to support learning, networking, and business discussions.  
      • Abusive language, spam, promotions, harassment, or illegal activities will lead to immediate removal.  
      • The Academy reserves full rights to moderate, remove, or restrict members for misconduct.`
    },
  
    {
      id: 9,
      title: "Program Certification",
      content: `Certification is awarded only after successful completion of course requirements, assignments, evaluations, or guidelines as specified inside the training.  
      Certificates are meant for skill validation and do not represent any government accreditation.  
      Any misuse of certificates for illegal purposes may lead to immediate termination and legal action.`
    },
  
    {
      id: 10,
      title: "No Guarantee of Earnings",
      content: `Indokona does not guarantee earnings, profit, growth, or business results.  
      Performance may vary based on skills, effort, market conditions, decision-making, and personal implementation.  
      The Academy provides educational content but the outcome fully depends on the user’s efforts and execution.  
      Any marketing examples or case studies used in the program are for demonstration only.`
    },
  
    {
      id: 11,
      title: "No Legal or Financial Advice",
      content: `The course may include business strategies, growth methods, or financial insights, but none of the content should be considered as legal, tax, investment, or financial advice.  
      Users should consult certified professionals before making any business or financial decisions.  
      The Academy is not responsible for any decisions taken based on the training content.`
    },
  
    {
      id: 12,
      title: "Third-Party Tools",
      content: `The Academy may use external platforms like Zoom, WhatsApp, Telegram, Google Forms, or LMS tools to deliver services.  
      Any changes, downtime, or issues caused by these third-party platforms are not under our control.  
      Users must follow the terms and conditions of these external services.`
    },
  
    {
      id: 13,
      title: "Limitation of Liability",
      content: `Indokona will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the program.  
      This includes lost profits, lost data, service interruptions, business losses, or emotional distress.  
      Users agree that the Academy's maximum liability is limited to the amount paid for the course.`
    },
  
    {
      id: 14,
      title: "Termination Policy",
      content: `We may suspend or terminate any account that violates our policies, misuses course material, engages in fraud, spreads misinformation, or harms the community.  
      Termination may occur without prior notice in severe cases.  
      Users removed due to misconduct will not be eligible for refunds.`
    },
  
    {
      id: 15,
      title: "Changes to Terms",
      content: `Indokona may update, modify, or revise these Terms at any time.  
      Users will be notified through email or dashboard announcements.  
      Continued use of the platform after updates constitutes acceptance of the new Terms.  
      Users are responsible for reviewing the Terms periodically.`
    }
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
                  href="mailto:indokonaoutsourcing@gmail.com"
                  className="link-light"
                >
                  indokonaoutsourcing@gmail.com
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
