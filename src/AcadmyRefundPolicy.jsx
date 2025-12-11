import React, { useState, useEffect } from 'react';
import { DollarSign, CheckCircle, XCircle, AlertTriangle, FileCheck, Clock, ShieldCheck, Ban } from 'lucide-react';

export default function AcadmyRefundPolicy() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const eligibilityCriteria = [
    { icon: CheckCircle, text: 'Complete 100% of the course modules', color: 'text-green-400' },
    { icon: CheckCircle, text: 'Attend required mentorship sessions', color: 'text-green-400' },
    { icon: CheckCircle, text: 'Submit all assignments & final project', color: 'text-green-400' },
    { icon: CheckCircle, text: 'Implement the steps as instructed', color: 'text-green-400' },
    { icon: CheckCircle, text: 'Still believe the course provided no learning value', color: 'text-green-400' }
  ];

  const nonEligibleCases = [
    { icon: XCircle, text: 'Change of mind', color: 'text-red-400' },
    { icon: XCircle, text: 'Not attending classes or calls', color: 'text-red-400' },
    { icon: XCircle, text: 'Personal issues (health, travel, exams, job, etc.)', color: 'text-red-400' },
    { icon: XCircle, text: 'Device or internet issues of the user', color: 'text-red-400' },
    { icon: XCircle, text: 'Incomplete assignments', color: 'text-red-400' },
    { icon: XCircle, text: 'Payment made by mistake', color: 'text-red-400' },
    { icon: XCircle, text: 'Wrong email/phone entered by user', color: 'text-red-400' },
    { icon: XCircle, text: 'Downloaded course content already used', color: 'text-red-400' }
  ];

  const refundSteps = [
    { num: '1', title: 'Submit Request', desc: 'Email refund@indokona.com', icon: FileCheck },
    { num: '2', title: 'Fill Form', desc: 'Complete verification form', icon: FileCheck },
    { num: '3', title: 'Review', desc: 'Team reviews your progress', icon: Clock },
    { num: '4', title: 'Decision', desc: '7-14 business days', icon: ShieldCheck },
    { num: '5', title: 'Refund', desc: 'Processed to original method', icon: DollarSign }
  ];

  const abuseCases = [
    'User shows abusive behavior',
    'Proven misuse of course materials',
    'Multiple refund requests for different programs',
    'Attempt to resell or copy our content'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-orange-950 to-gray-950 relative overflow-hidden">
      {/* Animated Cursor Effect */}
      <div 
        className="fixed w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none transition-all duration-300"
        style={{ 
          left: mousePosition.x - 128, 
          top: mousePosition.y - 128,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-2xl opacity-50 animate-pulse"></div>
              <DollarSign className="w-24 h-24 text-orange-400 relative animate-bounce" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mb-4">
              Refund Policy
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              Indokona Idea to Empire Academy™
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-200 text-sm">Last Updated: January 2025</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {['overview', 'eligible', 'not-eligible', 'process', 'abuse'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 transform
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105 shadow-lg shadow-orange-500/50' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white hover:scale-105'
                }
              `}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
              <ShieldCheck className="w-16 h-16 text-orange-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">100% Refund Guarantee</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We provide a complete refund guarantee based on fair usage and course completion conditions. Your satisfaction matters to us!
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
              <AlertTriangle className="w-16 h-16 text-red-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Fair Usage Policy</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Refund is processed only according to the rules listed in this policy. Please read carefully before making a request.
              </p>
            </div>
          </div>
        )}

        {/* Eligible Tab */}
        {activeTab === 'eligible' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">✔ Refund Eligibility Criteria</h2>
              <p className="text-orange-300 text-lg">You can request a refund ONLY IF you meet ALL of these conditions:</p>
              <div className="mt-4 inline-block bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-orange-500/30">
                <p className="text-white font-semibold">Request must be submitted within 7 days after course completion</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityCriteria.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border-2 border-green-500/40 rounded-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className={`w-12 h-12 ${item.color} mb-4`} strokeWidth={2} />
                    <p className="text-white font-semibold text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Not Eligible Tab */}
        {activeTab === 'not-eligible' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">✘ Refund NOT Applicable</h2>
              <p className="text-red-300 text-lg">Refund is NOT granted in the following cases:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {nonEligibleCases.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-xl border-2 border-red-500/40 rounded-xl p-5 flex items-center gap-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                  >
                    <Icon className={`w-10 h-10 ${item.color} flex-shrink-0`} strokeWidth={2} />
                    <p className="text-white font-medium text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Refund Process</h2>
              <p className="text-orange-300 text-lg">Follow these steps to request your refund</p>
            </div>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transform -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                {refundSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-2xl shadow-orange-500/50">
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm shadow-lg">
                          {step.num}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Abuse Tab */}
        {activeTab === 'abuse' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-xl border-2 border-yellow-500/40 rounded-3xl p-8">
              <div className="flex items-start gap-6">
                <Ban className="w-16 h-16 text-yellow-400 flex-shrink-0" strokeWidth={2} />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Abuse of Refund System</h2>
                  <p className="text-gray-300 text-lg mb-6">
                    Refund request may be rejected if:
                  </p>
                  <div className="space-y-4">
                    {abuseCases.map((item, index) => (
                      <div 
                        key={index}
                        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 hover:bg-red-500/20 transition-colors"
                      >
                        <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                        <p className="text-white font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/50">
              <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-3">Final Decision</h3>
              <p className="text-orange-100 text-lg">
                Refund approval or rejection is solely at the discretion of Indokona Credit Bazar Pvt. Ltd.
              </p>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help with Refund?</h3>
              <p className="text-gray-300 text-lg mb-6">Contact us for any questions about our refund policy</p>
              <a 
                href="mailto:refund@indokona.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
              >
                <FileCheck className="w-6 h-6" />
                refund@indokona.com
              </a>
              <p className="text-gray-400 text-sm mt-6">Operated by: Indokona Credit Bazar Pvt. Ltd. | Faridabad, Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">© 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}