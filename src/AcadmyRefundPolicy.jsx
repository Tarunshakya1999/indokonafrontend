import React, { useState, useEffect } from 'react';
import { DollarSign, CheckCircle, XCircle, AlertTriangle, FileCheck, Clock, ShieldCheck, Ban } from 'lucide-react';

export default function AcademyRefundPolicy() {
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
    { icon: CheckCircle, text: 'Complete 100% of the course modules', color: 'success' },
    { icon: CheckCircle, text: 'Attend required mentorship sessions', color: 'success' },
    { icon: CheckCircle, text: 'Submit all assignments & final project', color: 'success' },
    { icon: CheckCircle, text: 'Implement the steps as instructed', color: 'success' },
    { icon: CheckCircle, text: 'Still believe the course provided no learning value', color: 'success' }
  ];

  const nonEligibleCases = [
    { icon: XCircle, text: 'Change of mind', color: 'danger' },
    { icon: XCircle, text: 'Not attending classes or calls', color: 'danger' },
    { icon: XCircle, text: 'Personal issues (health, travel, exams, job, etc.)', color: 'danger' },
    { icon: XCircle, text: 'Device or internet issues of the user', color: 'danger' },
    { icon: XCircle, text: 'Incomplete assignments', color: 'danger' },
    { icon: XCircle, text: 'Payment made by mistake', color: 'danger' },
    { icon: XCircle, text: 'Wrong email/phone entered by user', color: 'danger' },
    { icon: XCircle, text: 'Downloaded course content already used', color: 'danger' }
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #4a1810 50%, #0a0a0a 100%);
          position: relative;
          overflow-x: hidden;
        }

        .cursor-effect {
          position: fixed;
          width: 256px;
          height: 256px;
          background: rgba(249, 115, 22, 0.3);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 1;
          mix-blend-mode: multiply;
        }

        .pattern-bg {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);
        }

        .hero-section {
          position: relative;
          padding: 4rem 0;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(234, 88, 12, 0.2), transparent);
        }

        .icon-glow {
          position: relative;
        }

        .icon-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #f97316, #dc2626);
          filter: blur(40px);
          opacity: 0.5;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .bounce-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(to right, #fb923c, #f87171, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
        }

        .tab-button {
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
          transition: all 0.3s ease;
          border: none;
          background: rgba(31, 41, 55, 0.5);
          color: #9ca3af;
          cursor: pointer;
          position: relative;
          z-index: 100;
        }

        .tab-button:hover {
          background: #1f2937;
          color: white;
          transform: scale(1.05);
        }

        .tab-button.active {
          background: linear-gradient(to right, #f97316, #dc2626);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.5);
        }

        .card-hover {
          transition: all 0.5s ease;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .card-hover:hover {
          transform: scale(1.05);
        }

        .card-eligible {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.4);
          transition: all 0.3s ease;
        }

        .card-eligible:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3);
        }

        .card-not-eligible {
          background: linear-gradient(to right, rgba(220, 38, 38, 0.3), rgba(236, 72, 153, 0.3));
          border: 2px solid rgba(220, 38, 38, 0.4);
          transition: all 0.3s ease;
        }

        .card-not-eligible:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
        }

        .process-step {
          transition: all 0.3s ease;
        }

        .process-icon {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.5);
          position: relative;
        }

        .process-icon:hover {
          transform: scale(1.1) rotate(12deg);
        }

        .process-number {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          color: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.875rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .abuse-card {
          background: linear-gradient(135deg, rgba(234, 179, 8, 0.3), rgba(249, 115, 22, 0.3));
          border: 2px solid rgba(234, 179, 8, 0.4);
        }

        .abuse-item {
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.3);
          transition: background 0.3s ease;
        }

        .abuse-item:hover {
          background: rgba(220, 38, 38, 0.2);
        }

        .cta-card {
          background: linear-gradient(to right, #ea580c, #dc2626, #db2777);
          padding: 1px;
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .cta-inner {
          background: #111827;
          border-radius: 1.5rem;
          padding: 3rem;
        }

        .cta-button {
          background: linear-gradient(to right, #f97316, #dc2626);
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: 0.75rem;
          font-weight: bold;
          font-size: 1.25rem;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cta-button:hover {
          background: linear-gradient(to right, #ea580c, #b91c1c);
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.5);
          color: white;
        }

        .progress-bar-animated {
          background: linear-gradient(to right, #f97316, #dc2626, #ec4899);
          transition: width 0.3s ease;
        }

        .tab-content-area {
          position: relative;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5rem !important;
          }
          .hero-section h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      <div className="app-container">
        <div 
          className="cursor-effect"
          style={{ 
            left: mousePosition.x - 128, 
            top: mousePosition.y - 128,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        <div className="pattern-bg"></div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-gradient"></div>
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="text-center">
              <div className="icon-glow d-inline-block position-relative mb-4">
                <DollarSign className="bounce-icon" size={96} color="#fb923c" strokeWidth={1.5} />
              </div>
              <h1 className="display-1 gradient-text mb-3">
                Refund Policy
              </h1>
              <p className="display-6 fw-bold text-white mb-3">
                Indokona Idea to Empire Academy™
              </p>
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill" 
                   style={{ background: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                <Clock size={16} color="#fed7aa" />
                <span className="text-white small">Last Updated: January 2025</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-5 mx-auto" style={{ maxWidth: '672px' }}>
              <div className="progress" style={{ height: '8px', background: '#1f2937' }}>
                <div 
                  className="progress-bar progress-bar-animated"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          {/* Tab Navigation */}
          <div className="d-flex flex-wrap gap-3 mb-5 justify-content-center">
            {['overview', 'eligible', 'not-eligible', 'process', 'abuse'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                type="button"
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="tab-content-area">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-hover h-100 p-4" 
                       style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(220, 38, 38, 0.1))', backdropFilter: 'blur(10px)' }}>
                    <ShieldCheck size={64} color="#fb923c" className="mb-3" />
                    <h2 className="h3 fw-bold text-white mb-3">100% Refund Guarantee</h2>
                    <p className="text-white-50 fs-5">
                      We provide a complete refund guarantee based on fair usage and course completion conditions. Your satisfaction matters to us!
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-hover h-100 p-4" 
                       style={{ background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(236, 72, 153, 0.1))', backdropFilter: 'blur(10px)' }}>
                    <AlertTriangle size={64} color="#f87171" className="mb-3" />
                    <h2 className="h3 fw-bold text-white mb-3">Fair Usage Policy</h2>
                    <p className="text-white-50 fs-5">
                      Refund is processed only according to the rules listed in this policy. Please read carefully before making a request.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Eligible Tab */}
            {activeTab === 'eligible' && (
              <div>
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold text-white mb-3">✔ Refund Eligibility Criteria</h2>
                  <p className="text-warning fs-5">You can request a refund ONLY IF you meet ALL of these conditions:</p>
                  <div className="mt-4 d-inline-block px-4 py-3 rounded-3" 
                       style={{ background: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                    <p className="text-white fw-semibold mb-0">Request must be submitted within 7 days after course completion</p>
                  </div>
                </div>
                <div className="row g-4">
                  {eligibilityCriteria.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="col-md-6 col-lg-4">
                        <div className="card card-eligible h-100 p-4">
                          <Icon size={48} color="#4ade80" strokeWidth={2} className="mb-3" />
                          <p className="text-white fw-semibold fs-5 mb-0">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Not Eligible Tab */}
            {activeTab === 'not-eligible' && (
              <div>
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold text-white mb-3">✘ Refund NOT Applicable</h2>
                  <p className="text-danger fs-5">Refund is NOT granted in the following cases:</p>
                </div>
                <div className="row g-3">
                  {nonEligibleCases.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="col-md-6">
                        <div className="card card-not-eligible p-4 d-flex flex-row align-items-center gap-3">
                          <Icon size={40} color="#f87171" strokeWidth={2} className="flex-shrink-0" />
                          <p className="text-white fw-medium fs-5 mb-0">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Process Tab */}
            {activeTab === 'process' && (
              <div>
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold text-white mb-3">Refund Process</h2>
                  <p className="text-warning fs-5">Follow these steps to request your refund</p>
                </div>
                <div className="row g-5">
                  {refundSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="col-lg-2 col-md-4 col-6">
                        <div className="text-center process-step">
                          <div className="position-relative d-inline-block mb-3">
                            <div className="process-icon">
                              <Icon size={40} color="white" strokeWidth={2} />
                            </div>
                            <div className="process-number">
                              {step.num}
                            </div>
                          </div>
                          <h3 className="h5 fw-bold text-white mb-2">{step.title}</h3>
                          <p className="text-secondary">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Abuse Tab */}
            {activeTab === 'abuse' && (
              <div>
                <div className="card abuse-card p-5 mb-4">
                  <div className="d-flex gap-4 flex-column flex-md-row">
                    <Ban size={64} color="#facc15" strokeWidth={2} className="flex-shrink-0" />
                    <div>
                      <h2 className="h3 fw-bold text-white mb-3">Abuse of Refund System</h2>
                      <p className="text-white-50 fs-5 mb-4">
                        Refund request may be rejected if:
                      </p>
                      <div className="d-flex flex-column gap-3">
                        {abuseCases.map((item, index) => (
                          <div key={index} className="abuse-item rounded-3 p-3 d-flex align-items-center gap-3">
                            <AlertTriangle size={24} color="#f87171" className="flex-shrink-0" />
                            <p className="text-white fw-medium mb-0">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card p-5 text-center" 
                     style={{ background: 'linear-gradient(to right, #ea580c, #dc2626)', transform: 'scale(1)', transition: 'transform 0.3s ease' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <ShieldCheck size={64} color="white" className="mx-auto mb-3" />
                  <h3 className="h3 fw-bold text-white mb-3">Final Decision</h3>
                  <p className="text-white fs-5 mb-0">
                    Refund approval or rejection is solely at the discretion of Indokona Credit Bazar Pvt. Ltd.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-5">
            <div className="cta-card">
              <div className="cta-inner text-center">
                <h3 className="display-6 fw-bold text-white mb-3">Need Help with Refund?</h3>
                <p className="text-white-50 fs-5 mb-4">Contact us for any questions about our refund policy</p>
                <a href="mailto:refund@indokona.com" className="cta-button">
                  <FileCheck size={24} />
                  refund@indokona.com
                </a>
                <p className="text-secondary small mt-4 mb-0">Operated by: Indokona Credit Bazar Pvt. Ltd. | Faridabad, Haryana, India</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center">
            <p className="text-secondary small mb-0">© 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}