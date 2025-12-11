import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, Scale, Cpu, Award, Zap, ShieldAlert, Info } from 'lucide-react';

export default function AcadmyDisclaimer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll('.disclaimer-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
  }, []);

  const disclaimers = [
    {
      title: "General Disclaimer",
      icon: Info,
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/50",
      content: `The content, training, mentorship, and resources provided by Indokona Idea to Empire Academy™ are for educational purposes only.`,
      points: [
        "Any specific income",
        "Business success",
        "Revenue outcomes",
        "Sales results",
        "Achievement of financial goals"
      ],
      footer: "You are responsible for your own decisions, actions, and results."
    },
    {
      title: "Earnings Disclaimer",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/50",
      badge: "META AD SAFE",
      content: `All testimonials represent individual experiences. Your results may vary based on:`,
      points: [
        "Your dedication",
        "Skill level",
        "Implementation",
        "Market conditions",
        "External factors"
      ],
      footer: "We do not make any 'get rich quick', 'overnight success', or unrealistic earning claims."
    },
    {
      title: "Legal & Financial Disclaimer",
      icon: Scale,
      color: "from-amber-500 to-orange-500",
      glowColor: "shadow-amber-500/50",
      content: `Nothing in our program is legal, tax, or financial advice. For professional matters, consult certified experts such as:`,
      points: [
        "Chartered Accountants",
        "Lawyers",
        "Financial advisors",
        "Government authorities"
      ]
    },
    {
      title: "Technology Disclaimer",
      icon: Cpu,
      color: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/50",
      content: `We use third-party tools and platforms. We are not responsible for:`,
      points: [
        "Downtime",
        "Bugs",
        "Delays",
        "Changes in third-party pricing",
        "Failure of external integrations"
      ]
    },
    {
      title: "Certification Disclaimer",
      icon: Award,
      color: "from-rose-500 to-red-500",
      glowColor: "shadow-rose-500/50",
      content: `Certification is provided only after:`,
      points: [
        "Meeting the required criteria",
        "Completing projects",
        "Following professional guidelines"
      ],
      footer: "Indokona reserves the right to withhold certification if standards are not met."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            {/* Rotating Ring */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"></div>
            </div>
            <div className="relative">
              <ShieldAlert className="w-24 h-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              DISCLAIMER
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"></div>
          </h1>

          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-green-500/30">
              <Zap className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-green-300 font-bold">META-APPROVED & SAFE FOR ADS</span>
            </div>
            <p className="text-gray-400 text-lg">Last Updated: January 2025</p>
          </div>

          {/* Holographic Line */}
          <div className="mt-12 h-1 w-64 mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 space-y-16">
        {disclaimers.map((disclaimer, index) => {
          const Icon = disclaimer.icon;
          return (
            <div
              key={index}
              className={`disclaimer-section transition-all duration-700 ${
                activeSection === index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
              }`}
            >
              <div className={`relative bg-gradient-to-br ${disclaimer.color} p-1 rounded-3xl ${disclaimer.glowColor} ${
                activeSection === index ? 'shadow-2xl' : 'shadow-lg'
              } transition-all duration-500`}>
                <div className="bg-gray-950 rounded-3xl p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${disclaimer.color} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${disclaimer.color} blur-xl opacity-50 -z-10`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                          {disclaimer.title}
                        </h2>
                        {disclaimer.badge && (
                          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold">
                            {disclaimer.badge}
                          </span>
                        )}
                      </div>
                      <div className={`h-1 w-32 rounded-full bg-gradient-to-r ${disclaimer.color}`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {disclaimer.content}
                    </p>

                    {disclaimer.points && (
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                        <div className="flex items-center gap-2 mb-4">
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400 font-bold uppercase text-sm">We do NOT guarantee:</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {disclaimer.points.map((point, i) => (
                            <div 
                              key={i}
                              className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-4 hover:bg-gray-800/50 transition-colors group"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${disclaimer.color} group-hover:scale-150 transition-transform`}></div>
                              <span className="text-gray-300 font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {disclaimer.footer && (
                      <div className={`bg-gradient-to-r ${disclaimer.color} bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border-2 border-opacity-30 ${disclaimer.color.split(' ')[0].replace('from-', 'border-')}`}>
                        <p className="text-white font-semibold text-lg text-center">
                          {disclaimer.footer}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${disclaimer.color} opacity-10 blur-3xl rounded-full`}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Company Info Footer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl shadow-purple-500/30">
          <div className="bg-gray-950 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Indokona Idea to Empire Academy™
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Operated by: Indokona Credit Bazar Pvt. Ltd.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📍 Faridabad, Haryana, India</span>
              <span>•</span>
              <span>📧 academy@indokona.com</span>
              <span>•</span>
              <span>🌐 www.indokona.com</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}