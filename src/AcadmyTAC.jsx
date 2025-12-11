import React, { useState } from 'react';

export default function AcadmyTermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `By accessing, enrolling, or using any services, programs, or training offered by Indokona Idea to Empire Academy™, you agree to these Terms & Conditions. If you do not agree, please do not use or access our platform.

"Indokona Idea to Empire Academy™" is owned and operated by Indokona Credit Bazar Pvt. Ltd., a CIN-registered and MSME-certified company incorporated in India.`
    },
    {
      id: 2,
      title: "Eligibility",
      content: `• Users must be 18 years or older to enroll.
• You must provide accurate information during registration.
• Indokona reserves the right to accept or reject any enrollment.`
    },
    {
      id: 3,
      title: "Service Description",
      content: `Indokona provides:
• Business transformation courses
• Coaching, mentorship & live sessions
• Digital tools, templates & resources
• Certification programs
• Community access
• Implementation support

📌 Note: All training is for educational purposes. We do not guarantee any specific income, earnings, or business outcome. Growth depends completely on personal effort, skill, consistency, and external market conditions.`
    },
    {
      id: 4,
      title: "Payment Terms",
      content: `• All prices are clearly mentioned on the website.
• Payments can be made via UPI, Bank Transfer, or EMI options.
• Services are non-transferable.
• GST may apply as per government regulations.`
    },
    {
      id: 5,
      title: "Refund Policy",
      content: `We offer a 100% Refund Guarantee, subject to the following conditions:

Refund is applicable only if:
• The student completes all modules
• Submits all required assignments
• Attends the required sessions
• Implements the system as instructed
• Still finds no measurable learning value

📌 Refunds are not applicable for:
• Partial course completion
• Missed live sessions
• Change of mind
• Personal issues (health, travel, exams, etc.)
• Technical issues due to user devices or internet

Indokona reserves the right to accept or reject any refund claim after verification.`
    },
    {
      id: 6,
      title: "Course Access & Usage",
      content: `• Access is granted only to the enrolled user.
• Sharing login, materials, or course content is strictly prohibited.
• Any misuse may lead to account suspension without refund.`
    },
    {
      id: 7,
      title: "Intellectual Property Rights",
      content: `All content including videos, templates, PDFs, branding assets, tools, course structure, and assignments are the intellectual property of Indokona Credit Bazar Pvt. Ltd.

You agree not to copy, distribute, resell, or modify any content.`
    },
    {
      id: 8,
      title: "Mentorship & Community",
      content: `• Lifetime mentorship means continuous guidance, not unlimited personal calls.
• Community access rules must be followed.
• Any harassment, spam, or abusive behaviour leads to immediate removal.`
    },
    {
      id: 9,
      title: "Program Certification",
      content: `Certification is awarded only after:
• Completing the full program
• Submitting the final project
• Meeting professional conduct guidelines

Indokona reserves the right to withhold certification if standards are not met.`
    },
    {
      id: 10,
      title: "No Guarantee of Earnings",
      content: `Indokona does not guarantee any specific income, sales numbers, business growth, or profits.

The program provides education and systems — results depend on the user.

This complies fully with Meta Ads Policy ("no unrealistic or misleading income claims").`
    },
    {
      id: 11,
      title: "No Legal or Financial Advice",
      content: `The course may include general information on business registration, taxation, and branding. This is not professional legal/tax/finance advice.

Please consult certified professionals for legal or tax matters.`
    },
    {
      id: 12,
      title: "Third-Party Tools & Services",
      content: `The Academy may suggest third-party tools, softwares, platforms, and payment gateways.

We are not responsible for their performance or pricing.`
    },
    {
      id: 13,
      title: "Limitation of Liability",
      content: `Indokona will not be liable for:
• Loss of data
• Loss of profits
• Business failure
• Personal disputes
• Delayed results
• Technical issues

Our responsibility is limited to providing the course and mentorship as stated.`
    },
    {
      id: 14,
      title: "Termination Policy",
      content: `We may suspend or terminate access if:
• User violates rules
• Misuses course content
• Commits fraud or abuse
• Attempts to resell materials

No refund will be provided in these cases.`
    },
    {
      id: 15,
      title: "Changes to Terms",
      content: `Indokona may update the Terms & Conditions at any time. Users will be notified of major changes via email/website notice.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-purple-500">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            📄 Terms & Conditions
          </h1>
          <p className="text-purple-300 text-lg">
            Indokona Idea to Empire Academy™
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Last Updated: January 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500 border-opacity-30 overflow-hidden">
          
          {/* Sections */}
          <div className="divide-y divide-purple-500 divide-opacity-20">
            {sections.map((section) => (
              <div key={section.id} className="transition-all duration-300">
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-purple-500 hover:bg-opacity-10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-bold text-lg">
                      {section.id}.
                    </span>
                    <h2 className="text-white font-semibold text-left text-lg">
                      {section.title}
                    </h2>
                  </div>
                  <svg
                    className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                      activeSection === section.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeSection === section.id && (
                  <div className="px-6 py-4 bg-black bg-opacity-20">
                    <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 mt-6">
            <h3 className="text-white font-bold text-xl mb-4">📞 Contact Information</h3>
            <div className="space-y-2 text-white">
              <p className="font-semibold">Indokona Idea to Empire Academy™</p>
              <p className="text-sm text-purple-100">Operated by: Indokona Credit Bazar Pvt. Ltd.</p>
              <p>📱 WhatsApp/Call: <a href="tel:+919625995155" className="underline hover:text-yellow-300">+91 9625995155</a></p>
              <p>📧 Email: <a href="mailto:academy@indokona.com" className="underline hover:text-yellow-300">academy@indokona.com</a></p>
              <p>🌐 Website: <a href="https://www.indokona.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">www.indokona.com</a></p>
              <p>📍 Corporate Office: Faridabad, Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>© 2025 Indokona Credit Bazar Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}