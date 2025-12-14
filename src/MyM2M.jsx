import React, { useState } from 'react';
import { Menu, X, ChevronRight, Check, Mail, Phone, MapPin, Globe, Zap, Shield, Users, Briefcase, GraduationCap, Building2, Sparkles, BarChart3, ShoppingCart, Bot, FileText, Award, TrendingUp, MessageSquare, CreditCard, Headphones } from 'lucide-react';

const MindToMarket = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const modules = [
    {
      id: 1,
      icon: <Sparkles className="module-icon" />,
      title: "AI Branding & Identity Suite",
      description: "Professional branding tools powered by AI",
      gradient: "gradient-purple-pink",
      features: [
        "AI Logo Maker & Color Psychology",
        "Auto Visiting Card & ID Card Generator",
        "Brand Voice & Audio Logo Builder",
        "Business Profile PDF & Pitch Deck",
        "Festival Poster & Brochure Generator",
        "Digital Business Card with QR"
      ]
    },
    {
      id: 2,
      icon: <FileText className="module-icon" />,
      title: "Legal & Business Setup",
      description: "Complete legal registration and compliance",
      gradient: "gradient-blue-cyan",
      features: [
        "Pvt Ltd/LLP/OPC Registration",
        "MSME/ISO/GST/Trademark/FSSAI",
        "ROC Compliance & Annual Filing",
        "Auto Legal Document Builder",
        "Award Registration Support"
      ]
    },
    {
      id: 3,
      icon: <ShoppingCart className="module-icon" />,
      title: "AI Product Creation & Launcher",
      description: "Launch products faster with automation",
      gradient: "gradient-green-emerald",
      features: [
        "AI Product Name + Content Generator",
        "Auto Website & Landing Page Builder",
        "Funnel Builder + E-Commerce Ready",
        "Competitor & Market Analyzer",
        "Product Explainer Video Generator"
      ]
    },
    {
      id: 4,
      icon: <Bot className="module-icon" />,
      title: "Automation & Workflow System",
      description: "Streamline operations with AI bots",
      gradient: "gradient-orange-red",
      features: [
        "WhatsApp AI Bot + CRM Integration",
        "Email, SMS & Voice Automation",
        "Auto Reminder & Lead Scoring",
        "Task & Project Management",
        "Payment + Invoice Automation"
      ]
    },
    {
      id: 5,
      icon: <BarChart3 className="module-icon" />,
      title: "AI CRM & Business Intelligence",
      description: "Smart CRM with predictive analytics",
      gradient: "gradient-indigo-purple",
      features: [
        "Lead Capture from All Channels",
        "Predictive Sales Forecast",
        "Auto Quotation Generator",
        "Employee Performance Tracker",
        "Voice-Based CRM Commands"
      ]
    },
    {
      id: 6,
      icon: <GraduationCap className="module-icon" />,
      title: "Education & LMS System",
      description: "Complete learning management solution",
      gradient: "gradient-yellow-orange",
      features: [
        "Auto Course Builder",
        "Student Portal + Fee Management",
        "Certificate & Result Generator",
        "Internship & Placement Tracker",
        "Webinar Integration"
      ]
    },
    {
      id: 7,
      icon: <Globe className="module-icon" />,
      title: "Web & App Development Studio",
      description: "Custom development with cloud hosting",
      gradient: "gradient-teal-green",
      features: [
        "Custom Website & App Development",
        "SaaS Platform Setup",
        "UI/UX Design Studio",
        "Secure Cloud Hosting (AWS/Azure)",
        "24x7 Technical Support"
      ]
    },
    {
      id: 8,
      icon: <TrendingUp className="module-icon" />,
      title: "Social Media & Marketing Suite",
      description: "Automated digital marketing tools",
      gradient: "gradient-pink-rose",
      features: [
        "AI Ad Launcher (Meta, Google)",
        "Auto Caption & Hashtag Generator",
        "Social Media Auto Scheduler",
        "Influencer Collaboration",
        "SEO + Google Business Optimization"
      ]
    },
    {
      id: 9,
      icon: <CreditCard className="module-icon" />,
      title: "Finance, Billing & Compliance",
      description: "Automated financial management",
      gradient: "gradient-cyan-blue",
      features: [
        "Auto Invoice & GST Generator",
        "Ledger & Payment Tracker",
        "Expense & Profit Analysis",
        "Legal & ROC Compliance Dashboard",
        "AI Tax Calculator"
      ]
    },
    {
      id: 10,
      icon: <MessageSquare className="module-icon" />,
      title: "AI Assistant & Support System",
      description: "Multilingual AI support 24/7",
      gradient: "gradient-violet-purple",
      features: [
        "Voice & Text AI Assistant",
        "WhatsApp Command Center",
        "Auto Ticket Support System",
        "Multilingual Interface",
        "AI Agents for All Departments"
      ]
    },
    {
      id: 11,
      icon: <Users className="module-icon" />,
      title: "Verified Business Network (B2B)",
      description: "Connect with verified businesses",
      gradient: "gradient-emerald-teal",
      features: [
        "Verified Business Listing",
        "Lead Exchange Hub",
        "Vendor & Distributor Finder",
        "Business Card Scan to CRM",
        "AI SEO Optimizer"
      ]
    },
    {
      id: 12,
      icon: <Headphones className="module-icon" />,
      title: "24X7 Technical Support & DFY",
      description: "Complete done-for-you services",
      gradient: "gradient-red-orange",
      features: [
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "Full DFY Legal Registration",
        "DFY AI Branding & Content",
        "White-Glove Onboarding"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "₹9,999",
      period: "/month",
      description: "Perfect for Freelancers & Small Businesses",
      features: [
        "AI Branding Tools",
        "Basic Legal Setup Support",
        "WhatsApp AI Bot",
        "CRM (Up to 500 Leads)",
        "Website Builder",
        "Email Support",
        "3 Social Media Accounts",
        "Basic Analytics"
      ],
      borderClass: "border-primary",
      popular: false
    },
    {
      name: "Growth Plan",
      price: "₹19,999",
      period: "/month",
      badge: "MOST POPULAR",
      description: "Ideal for MSMEs & Startups",
      features: [
        "Everything in Starter",
        "Complete Legal Registration",
        "Advanced Automation",
        "CRM (Unlimited Leads)",
        "LMS System",
        "Marketing Suite",
        "Priority Support",
        "AI Analytics Dashboard",
        "10 Social Media Accounts",
        "E-Commerce Integration"
      ],
      borderClass: "border-purple",
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "₹29,999",
      period: "/month",
      description: "For Agencies & Corporates",
      features: [
        "Everything in Growth",
        "Dedicated Account Manager",
        "Custom Development",
        "White-Label Solutions",
        "API Access",
        "Advanced Security",
        "24/7 Phone Support",
        "Unlimited Everything",
        "Done-For-You Services",
        "Priority Feature Requests"
      ],
      borderClass: "border-success",
      popular: false
    }
  ];

  const trustedBy = [
    { icon: <Briefcase />, text: "Entrepreneurs" },
    { icon: <Zap />, text: "Startups" },
    { icon: <Building2 />, text: "MSMEs" },
    { icon: <GraduationCap />, text: "Educational Institutes" },
    { icon: <Users />, text: "Corporates" }
  ];

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          min-height: 100vh;
          color: #fff;
        }

        /* Navbar Styles */
        .navbar-custom {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo-box {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link-custom {
          color: #d1d5db !important;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s;
          margin: 0 4px;
        }

        .nav-link-custom:hover {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link-custom.active {
          background: #9333ea;
          color: #fff !important;
        }

        /* Hero Section */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 50px;
          font-size: 14px;
          color: #d8b4fe;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin: 24px 0;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .btn-gradient {
          background: linear-gradient(135deg, #9333ea, #ec4899);
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          color: #fff;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-gradient:hover {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
          transform: translateY(-2px);
          color: #fff;
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          color: #fff;
          transition: all 0.3s;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        /* Cards */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        /* Module Cards */
        .module-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s;
          height: 100%;
        }

        .module-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        .module-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all 0.3s;
        }

        .module-card:hover .module-icon-box {
          transform: scale(1.1);
        }

        .module-icon {
          width: 32px;
          height: 32px;
          color: #fff;
        }

        /* Gradients */
        .gradient-purple-pink { background: linear-gradient(135deg, #a855f7, #ec4899); }
        .gradient-blue-cyan { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
        .gradient-green-emerald { background: linear-gradient(135deg, #22c55e, #10b981); }
        .gradient-orange-red { background: linear-gradient(135deg, #f97316, #ef4444); }
        .gradient-indigo-purple { background: linear-gradient(135deg, #6366f1, #a855f7); }
        .gradient-yellow-orange { background: linear-gradient(135deg, #eab308, #f97316); }
        .gradient-teal-green { background: linear-gradient(135deg, #14b8a6, #22c55e); }
        .gradient-pink-rose { background: linear-gradient(135deg, #ec4899, #f43f5e); }
        .gradient-cyan-blue { background: linear-gradient(135deg, #06b6d4, #3b82f6); }
        .gradient-violet-purple { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
        .gradient-emerald-teal { background: linear-gradient(135deg, #10b981, #14b8a6); }
        .gradient-red-orange { background: linear-gradient(135deg, #ef4444, #f97316); }

        /* Pricing Cards */
        .pricing-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
          height: 100%;
          position: relative;
        }

        .pricing-card.popular {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(147, 51, 234, 0.3);
        }

        .pricing-card:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .pricing-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #9333ea, #ec4899);
          padding: 4px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
        }

        .border-primary { border-color: #3b82f6 !important; }
        .border-purple { border-color: #a855f7 !important; }
        .border-success { border-color: #22c55e !important; }

        /* Contact Section */
        .contact-info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
        }

        .contact-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .form-control-custom {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          padding: 12px 16px;
        }

        .form-control-custom:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #9333ea;
          color: #fff;
          box-shadow: none;
        }

        .form-control-custom::placeholder {
          color: #6b7280;
        }

        /* Trusted By */
        .trusted-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* Footer */
        .footer-custom {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 32px 0;
          color: #9ca3af;
        }

        /* Check Icon */
        .check-icon {
          width: 20px;
          height: 20px;
          color: #4ade80;
          flex-shrink: 0;
        }

        .check-icon-sm {
          width: 16px;
          height: 16px;
          color: #4ade80;
          flex-shrink: 0;
        }
      `}</style>

      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#" onClick={() => setActiveTab('home')}>
              <div className="logo-box">
                <Sparkles size={24} color="#fff" />
              </div>
              <div>
                <div className="text-white fw-bold">Mind To Market™</div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>Idea to Empire</div>
              </div>
            </a>
            
            <button 
              className="navbar-toggler border-0 text-white" 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                {['Home', 'Modules', 'Pricing', 'Contact'].map((item) => (
                  <li className="nav-item" key={item}>
                    <a
                      className={`nav-link nav-link-custom ${activeTab === item.toLowerCase() ? 'active' : ''}`}
                      href="#"
                      onClick={() => {
                        setActiveTab(item.toLowerCase());
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        {activeTab === 'home' && (
          <div className="container py-5">
            {/* Hero */}
            <div className="text-center mb-5">
              <div className="hero-badge mb-4">
                <Globe size={16} />
                <span>Your Vision, Our Technology</span>
              </div>
              <h1 className="hero-title">Mind To Market™</h1>
              <p className="display-6 text-light mb-3">Idea to Empire</p>
              <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '800px' }}>
                Your one-stop AI + SaaS Ecosystem for Branding, Legal, Marketing, and Automation—run your entire business from chat or voice commands.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-gradient" onClick={() => setActiveTab('pricing')}>
                  Get Started <ChevronRight size={20} />
                </button>
                <button className="btn btn-glass" onClick={() => setActiveTab('modules')}>
                  Explore Modules
                </button>
              </div>
            </div>

            {/* Core Values */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="glass-card">
                  <Award size={48} className="mb-3" style={{ color: '#a855f7' }} />
                  <h4 className="mb-3">Our Vision</h4>
                  <p className="text-light">
                    To technologically empower every small and large business in India, enabling them to take their ideas to the Global Market.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glass-card">
                  <Zap size={48} className="mb-3" style={{ color: '#ec4899' }} />
                  <h4 className="mb-3">Our Mission</h4>
                  <p className="text-light">
                    "One Platform — Infinite Possibilities" - Legal Registration, Automation, Marketing, Branding, Training, and AI Support all in one place.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glass-card">
                  <Shield size={48} className="mb-3" style={{ color: '#06b6d4' }} />
                  <h4 className="mb-3">Our Objective</h4>
                  <p className="text-light">
                    To fully support every Entrepreneur, Startup, MSME, or Company on their entire journey from 'Idea to Empire'.
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted By */}
            <div className="text-center">
              <h3 className="mb-4">Trusted By</h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {trustedBy.map((item, idx) => (
                  <div key={idx} className="trusted-badge">
                    <span style={{ color: '#a855f7' }}>{item.icon}</span>
                    <span className="text-white fw-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modules Section */}
        {activeTab === 'modules' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">12 Powerful Modules</h2>
              <p className="lead text-secondary">All integrated into one seamless platform</p>
            </div>

            <div className="row g-4">
              {modules.map((module) => (
                <div key={module.id} className="col-md-6 col-lg-4">
                  <div className="module-card">
                    <div className={`module-icon-box ${module.gradient}`}>
                      {module.icon}
                    </div>
                    <h5 className="mb-2">{module.title}</h5>
                    <p className="text-secondary mb-3">{module.description}</p>
                    <ul className="list-unstyled">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 mb-2">
                          <Check className="check-icon-sm mt-1" />
                          <span className="text-light" style={{ fontSize: '14px' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {activeTab === 'pricing' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">Simple, Transparent Pricing</h2>
              <p className="lead text-secondary">Choose the plan that fits your business needs</p>
            </div>

            <div className="row g-4 mb-5">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <div className={`pricing-card ${plan.borderClass} ${plan.popular ? 'popular' : ''}`}>
                    {plan.badge && (
                      <div className="pricing-badge">{plan.badge}</div>
                    )}
                    <h4 className="fw-bold mb-2">{plan.name}</h4>
                    <div className="mb-3">
                      <span className="display-5 fw-bold">{plan.price}</span>
                      <span className="text-secondary">{plan.period}</span>
                    </div>
                    <p className="text-secondary mb-4">{plan.description}</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-start gap-2 mb-2">
                          <Check className="check-icon" />
                          <span className="text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={plan.popular ? 'btn btn-gradient w-100' : 'btn btn-glass w-100'}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Standards */}
            <div className="text-center">
              <h4 className="mb-4">Security Standards</h4>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['SSL Encryption', 'ISO 27001 Ready', 'GDPR Compliant', 'Auto Backup'].map((item, idx) => (
                  <div key={idx} className="trusted-badge">
                    <Shield size={20} style={{ color: '#4ade80' }} />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-secondary">Just a WhatsApp Away - Your Vision, Our Technology</p>
            </div>

            <div className="row g-4">
              {/* Contact Info */}
              <div className="col-lg-6">
                <div className="contact-info-card mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon-box" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>
                      <Mail size={24} style={{ color: '#a855f7' }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <p className="text-secondary mb-0">indokonaoutsourcing@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon-box" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
                      <Phone size={24} style={{ color: '#22c55e' }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <p className="text-secondary mb-0">+91 8800905879</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon-box" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                      <MapPin size={24} style={{ color: '#3b82f6' }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Location</h6>
                      <p className="text-secondary mb-0">Faridabad, Haryana, India</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon-box" style={{ background: 'rgba(6, 182, 212, 0.2)' }}>
                      <Globe size={24} style={{ color: '#06b6d4' }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Website</h6>
                      <p className="text-secondary mb-0">www.indokona.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="glass-card">
                  <h4 className="mb-4">Send Us a Message</h4>
                  <form>
                    <div className="mb-3">
                      <label className="form-label text-light">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-custom"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-light">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-custom"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-light">Phone</label>
                      <input
                        type="tel"
                        className="form-control form-control-custom"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-light">Message</label>
                      <textarea
                        rows="4"
                        className="form-control form-control-custom"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-gradient w-100"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Message sent successfully! We will contact you soon.');
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="footer-custom">
          <div className="container">
            <div className="text-center">
              <p className="mb-2">
                © 2025 Mind To Market™ - AI-Powered Business Automation Platform
              </p>
              <p style={{ fontSize: '14px' }}>
                All rights reserved | Terms & Conditions | Privacy Policy | Refund Policy
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MindToMarket;