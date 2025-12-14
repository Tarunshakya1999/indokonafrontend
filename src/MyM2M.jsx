import React, { useState } from 'react';
import { Menu, X, ChevronRight, Check, Mail, Phone, MapPin, Globe, Zap, Shield, Users, Briefcase, GraduationCap, Building2, Sparkles, BarChart3, ShoppingCart, Bot, FileText, Award, TrendingUp, MessageSquare, CreditCard, Headphones } from 'lucide-react';

const MindToMarket = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const modules = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Branding & Identity Suite",
      description: "Professional branding tools powered by AI",
      color: "from-purple-500 to-pink-500",
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
      icon: <FileText className="w-8 h-8" />,
      title: "Legal & Business Setup",
      description: "Complete legal registration and compliance",
      color: "from-blue-500 to-cyan-500",
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
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "AI Product Creation & Launcher",
      description: "Launch products faster with automation",
      color: "from-green-500 to-emerald-500",
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
      icon: <Bot className="w-8 h-8" />,
      title: "Automation & Workflow System",
      description: "Streamline operations with AI bots",
      color: "from-orange-500 to-red-500",
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
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI CRM & Business Intelligence",
      description: "Smart CRM with predictive analytics",
      color: "from-indigo-500 to-purple-500",
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
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & LMS System",
      description: "Complete learning management solution",
      color: "from-yellow-500 to-orange-500",
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
      icon: <Globe className="w-8 h-8" />,
      title: "Web & App Development Studio",
      description: "Custom development with cloud hosting",
      color: "from-teal-500 to-green-500",
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
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media & Marketing Suite",
      description: "Automated digital marketing tools",
      color: "from-pink-500 to-rose-500",
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
      icon: <CreditCard className="w-8 h-8" />,
      title: "Finance, Billing & Compliance",
      description: "Automated financial management",
      color: "from-cyan-500 to-blue-500",
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
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Assistant & Support System",
      description: "Multilingual AI support 24/7",
      color: "from-violet-500 to-purple-500",
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
      icon: <Users className="w-8 h-8" />,
      title: "Verified Business Network (B2B)",
      description: "Connect with verified businesses",
      color: "from-emerald-500 to-teal-500",
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
      icon: <Headphones className="w-8 h-8" />,
      title: "24X7 Technical Support & DFY",
      description: "Complete done-for-you services",
      color: "from-red-500 to-orange-500",
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
      color: "border-blue-500",
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
      color: "border-purple-500",
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
      color: "border-green-500",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
 
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Mind To Market™</h1>
                <p className="text-xs text-gray-400">Idea to Empire</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['Home', 'Modules', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === item.toLowerCase()
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['Home', 'Modules', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                    activeTab === item.toLowerCase()
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      {activeTab === 'home' && (
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Your Vision, Our Technology</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mind To Market™
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Idea to Empire
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Your one-stop AI + SaaS Ecosystem for Branding, Legal, Marketing, and Automation—run your entire business from chat or voice commands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('pricing')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                Get Started <ChevronRight />
              </button>
              <button
                onClick={() => setActiveTab('modules')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Explore Modules
              </button>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-300">
                To technologically empower every small and large business in India, enabling them to take their ideas to the Global Market.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
              <Zap className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-300">
                "One Platform — Infinite Possibilities" - Legal Registration, Automation, Marketing, Branding, Training, and AI Support all in one place.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Objective</h3>
              <p className="text-gray-300">
                To fully support every Entrepreneur, Startup, MSME, or Company on their entire journey from 'Idea to Empire'.
              </p>
            </div>
          </div>

          {/* Trusted By */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Trusted By</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {trustedBy.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-purple-400">{item.icon}</span>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modules Section */}
      {activeTab === 'modules' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              12 Powerful Modules
            </h2>
            <p className="text-xl text-gray-400">
              All integrated into one seamless platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-white">{module.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-gray-400 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Section */}
      {activeTab === 'pricing' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur border-2 ${plan.color} rounded-xl p-8 hover:bg-white/10 transition-all relative ${
                  plan.popular ? 'scale-105 shadow-2xl shadow-purple-500/30' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">{plan.badge}</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          {/* Security Standards */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Security Standards</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['SSL Encryption', 'ISO 27001 Ready', 'GDPR Compliant', 'Auto Backup'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-400">
                Just a WhatsApp Away - Your Vision, Our Technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-400">indokonaoutsourcing@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-400">+91 8800905879</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-400">Faridabad, Haryana, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Website</h4>
                      <p className="text-gray-400">www.indokona.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Message sent successfully! We will contact you soon.');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              © 2025 Mind To Market™ - AI-Powered Business Automation Platform
            </p>
            <p className="text-sm">
              All rights reserved | Terms & Conditions | Privacy Policy | Refund Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MindToMarket;