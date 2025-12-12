import React, { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  FileText,
  Bell,
  Mail,
  ShieldCheck,
  Server,
  KeyRound,
  ShieldAlert,
} from "lucide-react";

export default function AcadmyPrivacyPolicy() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const scrollHandler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // ------------- Policy Sections -------------
  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: Shield,
      color: ["#06b6d4", "#3b82f6"],
      content: `This Privacy Policy explains how Indokona Idea to Empire Academy™ collects, stores, and protects your data.

By using our site, services, programs, or mobile experiences, you fully agree to this policy.

We follow DPDP Act 2023 and global privacy standards.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: Database,
      color: ["#22c55e", "#10b981"],
      content: `a. Personal Information
• Name, Phone, Email
• Address (if required)
• Identity verification data

b. Business Information
• Business name & email

c. Payment Information
• Transaction ID
• Payment method
(We never store full UPI/card numbers.)

d. Technical Information
• IP address
• Device & browser info
• Cookies & analytics data`,
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: Eye,
      color: ["#fb923c", "#ef4444"],
      content: `• Account creation & course access
• Providing support
• Certification processing
• Sending important updates
• Fraud prevention
• Legal compliance

Your data is never sold.`,
    },

    // New extra section 1
    {
      id: 4,
      title: "Data Retention Policy",
      icon: Server,
      color: ["#0ea5e9", "#6366f1"],
      content: `We retain your data only as long as necessary for:

• Account usage
• Certification validation
• Legal compliance
• Security audits

You may request early deletion anytime.`,
    },

    {
      id: 5,
      title: "Cookies & Tracking",
      icon: FileText,
      color: ["#ec4899", "#a855f7"],
      content: `We use cookies for:
• Personalized experience
• Faster performance
• Analytics & improvements

You can disable cookies anytime.`,
    },
    {
      id: 6,
      title: "Data Sharing Policy",
      icon: Users,
      color: ["#facc15", "#fb923c"],
      content: `We share limited data with:
• Payment gateways
• Cloud hosting providers
• SMS/email providers
• Government authorities (when required)

We never sell or misuse your data.`,
    },

    {
      id: 7,
      title: "Data Protection & Security",
      icon: Lock,
      color: ["#6366f1", "#a855f7"],
      content: `We implement:
• AES 256-bit encryption
• Secure servers
• Firewalls & layered security
• Audit logs
• OTP verification

Still, no digital platform is 100% hack-proof.`,
    },

    // New extra section 2
    {
      id: 8,
      title: "Third-Party Tools We Use",
      icon: KeyRound,
      color: ["#0ea5e9", "#14b8a6"],
      content: `We may use:
• Google Analytics
• Razorpay Payments
• Meta Pixel
• Cloudflare Security

These tools follow strict privacy rules.`,
    },

    {
      id: 9,
      title: "Your Rights (DPDP Act 2023)",
      icon: ShieldCheck,
      color: ["#14b8a6", "#06b6d4"],
      content: `You may request:
• Data access 
• Correction
• Deletion
• Consent withdrawal
• Copy of your stored data

Email your request to privacy@indokona.com`,
    },
    {
      id: 10,
      title: "Children's Privacy",
      icon: Bell,
      color: ["#f43f5e", "#ec4899"],
      content: `Our academy services are strictly for 18+ users.`,
    },
    {
      id: 11,
      title: "Policy Updates",
      icon: FileText,
      color: ["#8b5cf6", "#a855f7"],
      content: `We may update this Privacy Policy anytime.

New changes will be posted on this page.`,
    },

    {
      id: 12,
      title: "Behaviour & Conduct",
      icon:  ShieldAlert,
      color: ["#8a3cf4", "#a565f6"],
      content: `Any abusive, harmful, or inappropriate messages sent to our team or other learners may result in account suspension without refund..

Any attempt to hack, modify, or misuse the platform will lead to permanent account ban.`,
    },
  ];

  return (
    <>
      {/* ---------- CSS + Animations ---------- */}
      <style>{`
        body { background: #0f172a !important; }

        .bg-main {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 20%, #1e3a8a, #0f172a);
          position: relative;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #38bdf8;
          border-radius: 50%;
          animation: floatUp 6s linear infinite;
          opacity: 0.7;
        }

        @keyframes floatUp {
          from { transform: translateY(0); opacity: 0.4; }
          to { transform: translateY(-120vh); opacity: 0; }
        }

        /* Card Hover 3D Effect */
        .policy-inner {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 25px;
          min-height: 280px;
          transition: 0.5s ease;
          transform-style: preserve-3d;
        }

        .policy-inner:hover {
          transform: rotateX(6deg) rotateY(-6deg) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.15);
        }

        /* Glowing Animated Border */
        .policy-card {
          padding: 2px;
          border-radius: 22px;
          background-size: 200% 200%;
          animation: borderFlow 4s linear infinite;
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Scrollbar Styling */
        .content-box {
          max-height: 170px;
          overflow-y: auto;
        }
        .content-box::-webkit-scrollbar {
          width: 6px;
        }
        .content-box::-webkit-scrollbar-thumb {
          background: #22d3ee;
          border-radius: 10px;
        }

        /* Header Parallax */
        .header-box {
          background: linear-gradient(135deg, #0891b2, #2563eb, #7c3aed);
          padding: 70px 10px;
          box-shadow: inset 0 0 40px rgba(255,255,255,0.15);
        }

        /* Contact Box */
        .contact-box {
          padding: 2px;
          border-radius: 25px;
          background: linear-gradient(to right, #22d3ee,#2563eb,#a855f7);
        }
        .contact-inner {
          background: rgba(255,255,255,0.07);
          padding: 45px 30px;
          border-radius: 22px;
        }
      `}</style>

      <div className="bg-main overflow-hidden">

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: 5 + Math.random() * 5 + "s",
            }}
          ></div>
        ))}

        {/* Parallax Header */}
        <div
          className="header-box text-center text-white"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        >
          <Shield size={80} />
          <h1 className="fw-bold display-5 mt-3">🔒 Privacy Policy</h1>
          <p className="fs-5">Indokona Idea to Empire Academy™</p>
          <p className="">DPDP Act 2023 Compliant</p>
          <p className="bg-white bg-opacity-25 px-4 py-1 rounded-pill d-inline-block mt-3">
            Updated: January 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          <div className="row g-4">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div className="col-md-6 col-lg-4" key={sec.id}>
                  <div
                    className="policy-card"
                    style={{
                      background: `linear-gradient(135deg, ${sec.color[0]}, ${sec.color[1]})`,
                    }}
                  >
                    <div
                      className="policy-inner"
                      onMouseEnter={() => setActiveCard(sec.id)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Icon */}
                      <div
                        className="icon-box mb-3"
                        style={{
                          width: 65,
                          height: 65,
                          borderRadius: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${sec.color[0]}, ${sec.color[1]})`,
                        }}
                      >
                        <Icon className="text-white" size={30} />
                      </div>

                      <h4 className="text-white fw-bold">{sec.id}. {sec.title}</h4>
                      <div className="content-box text-light small mt-2">{sec.content}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="contact-box my-5">
            <div className="contact-inner text-center text-white">
              <Mail size={45} className="text-info mb-3" />
              <h3 className="fw-bold mb-3">Contact for Privacy</h3>
              <p className="mb-2">Have questions about your data? We're here to help!</p>

              <a
                href="mailto:privacy@indokona.com"
                className="btn btn-info text-white fw-semibold px-4 py-2"
              >
                privacy@indokona.com
              </a>

              <p className="mt-4">
                Operated by:
                <br />
                <span className="fw-semibold">Indokona Credit Bazar Pvt. Ltd.</span>
              </p>
              <p className="text-info small">📍 Faridabad, Haryana, India</p>
            </div>
          </div>

          <p className="text-center text-secondary small">
            © 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
