import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Database, Users, FileText, Bell, Mail } from 'lucide-react';

export default function AcadmyPrivacyPolicy() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: Shield,
      color: "from-cyan-400 to-blue-500",
      content: `This Privacy Policy explains how Indokona Idea to Empire Academy™ ("we", "us", "our") collects, uses, stores, and protects your personal data.

By accessing our website, courses, or services, you agree to the practices described in this policy.`
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      content: `a. Personal Information
• Name
• Phone Number
• Email Address
• Address (if required for certification/shipping)
• Identity details (if required for verification)

b. Business Information
• Business name
• Business email
• GST/Registration details (optional)

c. Payment Information
• Transaction ID
• Payment method
• Billing details
(We do NOT store your full card/UPI numbers.)

d. Technical Information
• IP address
• Device type
• Browser type
• Cookies data
• Usage analytics`
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: Eye,
      color: "from-orange-400 to-red-500",
      content: `We use your data for:
• Course access & onboarding
• Certification processing
• Sending updates & support messages
• Improving our website/services
• Payment verification
• Mentorship & community communication
• Legal and security compliance

We do not sell or rent your data.`
    },
    {
      id: 4,
      title: "Cookies & Tracking",
      icon: FileText,
      color: "from-pink-400 to-purple-500",
      content: `We use cookies to:
• Improve user experience
• Track site performance
• Optimize learning platform
• Personalize content

You may disable cookies in browser settings.`
    },
    {
      id: 5,
      title: "Data Sharing",
      icon: Users,
      color: "from-yellow-400 to-orange-500",
      content: `We may share data only with:
• Payment gateways
• Email/SMS service providers
• Hosting & cloud service providers
• Government authorities if legally required

We never sell user data to third parties.`
    },
    {
      id: 6,
      title: "Data Protection",
      icon: Lock,
      color: "from-indigo-400 to-purple-500",
      content: `We use encryption, secure servers, and access control to protect your data.

However, no online system is 100% secure.`
    },
    {
      id: 7,
      title: "Your Rights (Under DPDP Act 2023)",
      icon: Shield,
      color: "from-teal-400 to-cyan-500",
      content: `You may request:
• Data access
• Data correction
• Data deletion
• Withdrawal from marketing messages

Send requests to privacy@indokona.com.`
    },
    {
      id: 8,
      title: "Children's Privacy",
      icon: Bell,
      color: "from-rose-400 to-pink-500",
      content: `Our program is only for 18+ users.`
    },
    {
      id: 9,
      title: "Changes to Policy",
      icon: FileText,
      color: "from-violet-400 to-purple-500",
      content: `We may update this policy anytime. Updates will be posted on our website.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ top: '10%', left: '10%', animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ top: '50%', right: '10%', animationDuration: '6s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ bottom: '10%', left: '30%', animationDuration: '5s' }}
        ></div>
      </div>

      {/* Parallax Header */}
      <div 
        className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 py-20 px-4"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block animate-bounce mb-4">
            <Shield className="w-20 h-20 text-white mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
            🔒 Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 font-semibold mb-2">
            Indokona Idea to Empire Academy™
          </p>
          <p className="text-lg text-blue-200">
            DPDP Act 2023 Compliant
          </p>
          <div className="mt-4 inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full">
            <p className="text-sm text-white">Last Updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={() => setActiveCard(section.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`
                  relative bg-gradient-to-br ${section.color} p-1 rounded-2xl
                  transform transition-all duration-500 hover:scale-105 hover:rotate-1
                  ${activeCard === section.id ? 'shadow-2xl shadow-cyan-500/50' : 'shadow-lg'}
                `}>
                  <div className="bg-slate-900 rounded-xl p-6 h-full">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center w-14 h-14 rounded-xl
                      bg-gradient-to-br ${section.color} mb-4
                      transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110
                    `}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {section.id}. {section.title}
                    </h3>

                    {/* Content */}
                    <div className={`
                      text-gray-300 text-sm leading-relaxed whitespace-pre-line
                      transition-all duration-500
                      ${activeCard === section.id ? 'max-h-96 opacity-100' : 'max-h-48 opacity-90'}
                      overflow-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-800
                    `}>
                      {section.content}
                    </div>

                    {/* Hover Effect Border */}
                    <div className={`
                      absolute inset-0 rounded-xl border-2 border-transparent
                      bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-20
                      transition-opacity duration-500 pointer-events-none
                    `}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 p-1 rounded-3xl shadow-2xl shadow-cyan-500/30">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-10 h-10 text-cyan-400 animate-pulse" />
                    <h3 className="text-3xl font-bold text-white">Contact for Privacy</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Have questions about your data? We're here to help!
                  </p>
                  <a 
                    href="mailto:privacy@indokona.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                  >
                    <Mail className="w-5 h-5" />
                    privacy@indokona.com
                  </a>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-gray-400 text-sm mb-2">Operated by:</p>
                  <p className="text-white font-semibold text-lg">Indokona Credit Bazar Pvt. Ltd.</p>
                  <p className="text-cyan-400 text-sm mt-2">📍 Faridabad, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900 bg-opacity-80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-cyan-500 border-opacity-30">
            <p className="text-gray-400 text-sm">
              © 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-cyan-400 text-xs mt-2">
              Your privacy is our priority 🔐
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}