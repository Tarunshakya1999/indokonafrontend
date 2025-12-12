import React, { useState, useEffect } from "react";
import { Shield, Lock, Eye, Database, Users, FileText, Bell, Mail } from "lucide-react";

export default function AcadmyPrivacyPolicy() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const scrollHandler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: Shield,
      color: "#06b6d4,#3b82f6",
      content: `This Privacy Policy explains how Indokona Idea to Empire Academy™ collects and uses your data.

By using our website or services, you agree to this policy.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: Database,
      color: "#22c55e,#10b981",
      content: `a. Personal Information
• Name
• Phone Number
• Email
• Address (if required)
• ID details (if needed)

b. Business Information
• Business name
• Business email

c. Payment Information
• Transaction ID
• Payment method
(We do NOT store full UPI/card numbers.)

d. Technical Info
• IP address
• Device type
• Cookies
• Analytics`,
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: Eye,
      color: "#fb923c,#ef4444",
      content: `• Course access
• Certification
• Sending updates
• Improving services
• Payment verification
• Legal compliance

We do NOT sell your data.`,
    },
    {
      id: 4,
      title: "Cookies & Tracking",
      icon: FileText,
      color: "#ec4899,#a855f7",
      content: `We use cookies for:
• Performance optimization
• Personalization
• Better user experience

You can disable cookies anytime.`,
    },
    {
      id: 5,
      title: "Data Sharing",
      icon: Users,
      color: "#facc15,#fb923c",
      content: `We share data only with:
• Payment gateways
• Hosting providers
• SMS/Email providers
• Legal authorities (if required)

We NEVER sell data.`,
    },
    {
      id: 6,
      title: "Data Protection",
      icon: Lock,
      color: "#6366f1,#a855f7",
      content: `We use encryption, secure servers & access control to protect your data.

But no system is 100% secure.`,
    },
    {
      id: 7,
      title: "Your Rights (DPDP Act 2023)",
      icon: Shield,
      color: "#14b8a6,#06b6d4",
      content: `You may request:
• Data access
• Data correction
• Data deletion
• Opt-out of messages

Email: privacy@indokona.com`,
    },
    {
      id: 8,
      title: "Children's Privacy",
      icon: Bell,
      color: "#f43f5e,#ec4899",
      content: `Our program is only for 18+ users.`,
    },
    {
      id: 9,
      title: "Changes to Policy",
      icon: FileText,
      color: "#8b5cf6,#a855f7",
      content: `We may update this policy anytime.`,
    },
  ];

  return (
    <>
      {/* CSS */}
      <style>{`
        .bg-main {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a);
        }

        .glowball {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.18;
          animation: pulse 5s infinite alternate;
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: 0.15; }
          to { transform: scale(1.2); opacity: 0.25; }
        }

        .header-box {
          background: linear-gradient(to right, #0891b2, #2563eb, #7c3aed);
        }

        .policy-card {
          border-radius: 22px;
          transition: 0.4s;
          padding: 2px;
        }

        .policy-inner {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 25px;
          min-height: 270px;
          backdrop-filter: blur(12px);
          transition: 0.3s ease;
        }

        .policy-inner:hover {
          transform: scale(1.03);
        }

        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .content-box {
          max-height: 160px;
          overflow-y: auto;
          padding-right: 5px;
        }

        .content-box::-webkit-scrollbar {
          width: 6px;
        }
        .content-box::-webkit-scrollbar-thumb {
          background: #22d3ee;
          border-radius: 10px;
        }

        .contact-box {
          background: linear-gradient(to right, #0891b2, #2563eb, #7c3aed);
          border-radius: 25px;
          padding: 2px;
        }

        .contact-inner {
          background: rgba(0,0,0,0.4);
          padding: 50px 30px;
          border-radius: 22px;
          backdrop-filter: blur(10px);
        }

      `}</style>

      <div className="bg-main position-relative overflow-hidden">

        {/* Color Glow Balls */}
        <div className="glowball" style={{ top: "10%", left: "10%", background: "#22d3ee" }}></div>
        <div className="glowball" style={{ top: "50%", right: "10%", background: "#a855f7" }}></div>
        <div className="glowball" style={{ bottom: "10%", left: "40%", background: "#ec4899" }}></div>

        {/* Header */}
        <div
          className="header-box py-5 text-center"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        >
          <Shield size={80} className="text-white mb-3" />
          <h1 className="text-white fw-bold display-5 mb-2">🔒 Privacy Policy</h1>
          <p className="text-light fs-5">Indokona Idea to Empire Academy™</p>
          <p className="text-light">DPDP Act 2023 Compliant</p>
          <p className="bg-white bg-opacity-25 text-white d-inline-block px-4 py-1 rounded-pill mt-3">
            Updated: January 2025
          </p>
        </div>

        {/* Main */}
        <div className="container py-5">
          <div className="row g-4">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div className="col-md-6 col-lg-4" key={sec.id}>
                  <div
                    className="policy-card"
                    style={{
                      background: `linear-gradient(135deg, ${sec.color})`,
                    }}
                  >
                    <div
                      className="policy-inner"
                      onMouseEnter={() => setActiveCard(sec.id)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div
                        className="icon-box"
                        style={{
                          background: `linear-gradient(135deg, ${sec.color})`,
                        }}
                      >
                        <Icon className="text-white" size={28} />
                      </div>

                      <h4 className="text-white fw-bold mb-2">
                        {sec.id}. {sec.title}
                      </h4>

                      <div className="content-box text-light small">
                        {sec.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="contact-box my-5">
            <div className="contact-inner text-center text-white">
              <Mail size={40} className="text-info mb-3" />

              <h3 className="fw-bold mb-3">Contact for Privacy</h3>
              <p className="mb-3">Have questions about your data? We're here to help!</p>

              <a
                href="mailto:privacy@indokona.com"
                className="btn btn-info text-white fw-semibold px-4 py-2"
              >
                privacy@indokona.com
              </a>

              <p className="mt-4 text-light">
                Operated by: <br />
                <span className="fw-semibold">Indokona Credit Bazar Pvt. Ltd.</span>
              </p>
              <p className="text-info small">📍 Faridabad, Haryana, India</p>
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
