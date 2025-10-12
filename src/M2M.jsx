import React, { useEffect } from 'react';
import { Briefcase, Zap, Globe, FileText, Layout, Smartphone, LineChart, Code, Wrench, GraduationCap, Award, CheckCircle, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

// --- Configuration Data ---
const services = [
  { id: 1, icon: FileText, title: 'Business Registration & Legal Setup', description: 'We build your business on a strong legal foundation, ensuring full compliance from day one.', focus: 'Legal & Compliance' },
  { id: 2, icon: Layout, title: 'Branding & Creative Identity', description: 'Your brand’s story, identity, and first impression — crafted for immediate market connection.', focus: 'Visual & Narrative' },
  { id: 3, icon: Globe, title: 'Website & Landing Page Development', description: 'Your 24/7 digital storefront designed for maximum traffic and conversion efficiency.', focus: 'Digital Presence' },
  { id: 4, icon: Smartphone, title: 'Mobile App & Custom Software Solutions', description: 'Scale your operations by bringing your brand and services directly to every smartphone.', focus: 'Innovation & Mobility' },
  { id: 5, icon: LineChart, title: 'Digital Marketing & Promotion', description: 'Make your brand visible, trusted, and remembered across all major digital platforms.', focus: 'Visibility & Growth' },
  { id: 6, icon: Code, title: 'SaaS & Automation Tools', description: 'Grow faster with AI-powered business automation, minimizing manual effort and errors.', focus: 'Efficiency & AI' },
  { id: 7, icon: Wrench, title: 'Annual Maintenance (AMC)', description: 'We ensure your digital assets never stop performing, providing continuous security and updates.', focus: 'Reliability & Support' },
  { id: 8, icon: GraduationCap, title: 'Business Training & Mentorship', description: 'We train founders to operate like CEOs, equipping them with modern business acumen.', focus: 'Skill & Leadership' },
  { id: 9, icon: Award, title: 'Awards & Recognition Assistance', description: 'We help you build award-winning brands and gain national/international recognition.', focus: 'Credibility & Prestige' },
];

const packages = [
  { name: 'Starter Package', price: '₹9,999 – ₹14,999', idealFor: 'Freelancers & Individuals', inclusions: ['Logo design', 'MSME registration', '1-page business website', 'Basic email setup'] },
  { name: 'Pro Package', price: '₹24,999 – ₹39,999', idealFor: 'Startups & Shops', inclusions: ['Domain/Hosting for 1 year', '5-page E-commerce setup', 'Basic CRM integration', 'Social media integration'] },
  { name: 'Business Package', price: '₹49,999 – ₹79,999', idealFor: 'MSMEs & Growing Firms', inclusions: ['Corporate Website + Mobile App (Hybrid)', 'Full Legal Compliance check', 'Initial Digital Marketing Campaign', '1-year AMC'] },
  { name: 'Corporate Package', price: '₹100,000 – ₹300,000+', idealFor: 'Brands & Agencies', inclusions: ['Comprehensive Branding Suite', 'Custom ERP/HRMS software', 'Dedicated Relationship Manager', 'Advanced Funding Guidance'] },
  { name: 'White-Label SaaS Plan', price: '₹500,000+', idealFor: 'IT & Marketing Agencies', inclusions: ['Custom SaaS portal deployment', 'CRM + AI tools integration', 'Full White-label branding', 'Ongoing technical support'] },
];

// --- Sub-Components ---

const Header = () => (
  <header className="bg-white/95 sticky top-0 z-50 shadow-xl backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Zap className="w-8 h-8 text-indigo-600" />
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Mind To Market</span>
        <span className="hidden md:inline text-xs text-gray-500 border-l ml-3 pl-3">Powered by Indokona</span>
      </div>
      <a 
        href="#contact" 
        className="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition duration-300 shadow-md transform hover:scale-105"
      >
        Book a Consultation
      </a>
    </div>
  </header>
);

const ServiceDetailSection = ({ id, icon: Icon, title, description, details, isReversed = false }) => (
  <div 
    className={`py-20 bg-white border-b border-gray-100 ${isReversed ? 'lg:bg-indigo-50' : ''}`}
    id={`service-${id}`}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Content Column */}
        <div className="lg:py-12">
          <div className="inline-flex items-center p-4 bg-indigo-100 rounded-full mb-4">
            <Icon className="w-8 h-8 text-indigo-600" />
          </div>
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Service #{id} / {title}</p>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
            {title}
          </h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-4">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="font-medium">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Visual/Image Placeholder Column */}
        <div className={`hidden lg:block h-full min-h-[300px] rounded-2xl shadow-2xl overflow-hidden ${isReversed ? 'lg:order-first' : ''}`}>
          <div className="p-8 h-full bg-indigo-200/50 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-700/80">
                {title} Visualization Area
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Expanded details for all 9 services
const expandedServiceDetails = [
  { id: 1, icon: FileText, title: 'Business Registration & Legal Setup', description: 'We establish a rock-solid, legally compliant foundation for your venture, navigating complex governmental procedures (MCA, ROC, GST) so you can focus purely on business growth.', details: ['Company registration (Pvt. Ltd., LLP, OPC, Proprietorship, Partnership)', 'GST / PAN / TAN registration and filing assistance', 'MSME / Startup India / Udyam registration for benefits', 'Trademark & copyright filing and protection', 'Legal drafting (MOA, AOA, partnership deeds, contracts, NDAs)', 'Business banking & compliance consultancy'] },
  { id: 2, icon: Layout, title: 'Branding & Creative Identity', description: 'We craft a powerful visual and narrative identity that resonates with your target audience, establishing a memorable first impression across all media.', details: ['Premium logo design (flat, 3D, or animated options)', 'Comprehensive Brand style guide & visual system architecture', 'Corporate stationery, pitch decks, and investor decks', 'Marketing brochures, product catalogues, and sales collateral', 'Outdoor media design (Banners, posters, hoardings)', 'Detailed Product packaging & label design consultation'] },
  { id: 3, icon: Globe, title: 'Website & Landing Page Development', description: 'We build fast, secure, and dynamic digital storefronts engineered to maximize user engagement, conversion rates, and revenue.', details: ['Domain, cloud hosting, and robust SSL certificate setup', 'High-speed, dynamic corporate portals (React/Angular)', 'Custom high-conversion landing pages and A/B tested sales funnels', 'E-commerce platform build & payment gateway integration (Razorpay/Paytm)', 'Integrated Appointment booking systems & CRM dashboards', 'Secure Admin panels with lead tracking and advanced analytics'] },
  { id: 4, icon: Smartphone, title: 'Mobile App & Custom Software Solutions', description: 'From concept to deployment, we deliver bespoke software solutions that automate core processes and place your brand directly into the hands of your customers.', details: ['Android / iOS native and hybrid app development', 'Custom CRM, ERP, HRMS, and accounting systems development', 'White-label Software-as-a-Service (SaaS) platforms', 'AI chatbots integration & WhatsApp automation APIs', 'Managed cloud hosting & enterprise-grade data security protocols'] },
  { id: 5, icon: LineChart, title: 'Digital Marketing & Promotion', description: 'Our ROI-focused strategies ensure your brand achieves maximum visibility, authority, and sustained organic growth in a competitive digital landscape.', details: ['End-to-end Social media setup & management (Meta, LinkedIn, X)', 'Monthly content calendars, creative assets, and storytelling content', 'Optimized Paid ad campaigns (Meta, Google, YouTube, LinkedIn)', 'Technical SEO implementation & Google Business optimization', 'Strategic Influencer & affiliate partnership management', 'Advanced Email, SMS, and Push notification automation'] },
  { id: 6, icon: Code, title: 'SaaS & Automation Tools', description: 'Leverage our integrated, proprietary automation tools to simplify complex business tasks, allowing your team to focus on strategy and scaling.', details: ['Intuitive Website & store builder with drag-and-drop interface', 'High-performing Funnel & form builder for lead generation', 'Integrated CRM + WhatsApp automation for instant communication', 'Seamless Billing & invoicing tools with payment tracking', 'Proprietary AI content generator for marketing copy', 'Instant Payment link creator & real-time reporting dashboard'] },
  { id: 7, icon: Wrench, title: 'Annual Maintenance (AMC)', description: 'We offer proactive, preventative maintenance and support, guaranteeing the continuous peak performance and security of all your digital investments.', details: ['Comprehensive Website & mobile app maintenance plans', 'Scheduled Hosting, domain & SSL certificate renewals', 'Regular security audits, vulnerability testing, and backups', 'Quarterly content strategy & design refresh cycles', 'Guaranteed bug fixes, patch management, and system updates', 'Access to a Dedicated Relationship Manager (DRM)'] },
  { id: 8, icon: GraduationCap, title: 'Business Training & Mentorship', description: 'Our academy provides practical, CEO-level training and mentorship programs designed to cultivate leadership and modern technological fluency among founders.', details: ['Intensive Business launch bootcamps and startup clinics', 'Practical AI tools & automation workshops for operational efficiency', 'One-on-one Branding, sales, and strategy mentorship sessions', 'Official Digital marketing certifications (co-branded)', 'Career upskilling and corporate training via Dream True Academy'] },
  { id: 9, icon: Award, title: 'Awards & Recognition Assistance', description: 'We strategically guide your brand toward national and global accolades, enhancing market credibility and investor attractiveness.', details: ['Strategy and submission for National and International Award nominations', 'Guidance for MSME Excellence Awards applications', 'End-to-end ISO & Quality Certification support (9001, 27001 etc.)', 'Participation in Business and Entrepreneur Recognition Programs', 'Documentation and guidance for Record Book Applications (National & Global)'] },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      
      <main>
        
        {/* --- 1. Hero Section (Extended) --- */}
        <section className="relative pt-32 pb-48 bg-indigo-800 overflow-hidden shadow-2xl h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-snug">
              <span className="block text-indigo-300 text-3xl mb-4 font-medium">🌐 Mind To Market</span>
              From Idea to Empire.
            </h1>
            <p className="text-2xl md:text-4xl text-indigo-200 font-light max-w-4xl mx-auto mb-10">
              Your Complete Partner for A-to-Z Business Transformation, Compliance, and Digital Scaling.
            </p>
            <div className="mt-12 space-x-4">
              <a 
                href="#ecosystem" 
                className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-indigo-700 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                View 9-Point Ecosystem <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#packages" 
                className="hidden sm:inline-flex items-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-full shadow-lg text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Check Pricing
              </a>
            </div>
          </div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-repeat bg-[size:50px_50px] bg-[url('data:image/svg+xml;base64,...')]"></div>
        </section>

        {/* --- 2. Core Philosophy (3-Column Layout) --- */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
              Our Founding Principles: Scale, Legality, and Empowerment
            </h2>
            <div className="lg:grid lg:grid-cols-3 lg:gap-10 space-y-10 lg:space-y-0">
              
              <div className="p-8 rounded-xl border-4 border-t-indigo-500 shadow-2xl bg-gray-50 h-full">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center"><Zap className="w-6 h-6 text-indigo-600 mr-2" /> About Mind To Market</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Mind To Market is the **all-in-one business and brand launch platform**. We eliminate the need for juggling multiple agencies by consolidating every service—from **company registration and legal setup** to advanced **SaaS tools, CRM, software development, and nationwide marketing execution**—into a single, unified pipeline.
                </p>
                <p className="mt-4 text-base font-semibold text-gray-700">
                  <span className="text-indigo-600">Head Office:</span> Faridabad, Haryana, India. <span className="text-indigo-600">Parent:</span> Indokona Credit Bazar Pvt. Ltd.
                </p>
              </div>

              <div className="p-8 rounded-xl border-4 border-t-green-500 shadow-2xl bg-gray-50 h-full">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center"><Globe className="w-6 h-6 text-green-600 mr-2" /> Our Mission: Bridging the Gap</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower Indian entrepreneurs by bridging the gap between innovation and execution. We provide startups and MSMEs with the **same advanced tools, automation systems, and global frameworks** previously reserved only for large corporations, ensuring they start legally, digitally, and with global readiness.
                </p>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="font-bold text-green-700">🎯 Our Pledge:</p>
                  <p className="text-sm text-green-600">To create **100,000+ successful entrepreneurs by 2030** through our integrated ecosystem.</p>
                </div>
              </div>
              
              <div className="p-8 rounded-xl border-4 border-t-pink-500 shadow-2xl bg-gray-50 h-full">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center"><Briefcase className="w-6 h-6 text-pink-600 mr-2" /> Our Vision: Future of Business</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We envision Mind To Market as India’s most trusted and result-driven business transformation hub. Launching a revenue-generating brand will be **as easy as launching a website**. We aim to foster a global network of empowered entrepreneurs, recognized for quality and technological innovation.
                </p>
                <p className="mt-4 font-bold text-pink-600">
                  Goal: Launching a business should be as simple as launching a website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. Full Ecosystem Deep Dive (9 Scrolling Sections) --- */}
        <section className="bg-indigo-50" id="ecosystem">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
              The 9-Point Brand-Building Ecosystem
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-20">
              Each module is interconnected, providing a continuous flow from foundational setup to ongoing growth and maintenance.
            </p>
          </div>
          
          {/* Loop through all 9 services for massive vertical scroll */}
          {expandedServiceDetails.map((service, index) => (
            <ServiceDetailSection
              key={service.id}
              {...service}
              isReversed={index % 2 !== 0}
              details={service.details} // Passing the full details array
            />
          ))}
        </section>

        {/* --- 4. Metric Bar / CTA (Intermediary Section) --- */}
        <section className="py-24 bg-indigo-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <p className="text-4xl font-extrabold mb-4">
              Ready to be one of our 100,000 successful entrepreneurs?
            </p>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto text-indigo-200">
              Your idea has potential. We provide the systems, compliance, and technology to unlock it.
            </p>
            <a 
                href="#packages" 
                className="inline-flex items-center px-10 py-4 border border-transparent text-xl font-bold rounded-full shadow-lg text-indigo-700 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-110"
              >
                See Investment Plans Now <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </section>

        {/* --- 5. Packages Table & Deep Dive --- */}
        <section className="py-32 bg-white" id="packages">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
              Tailored Investment Packages
            </h2>
            
            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-2xl shadow-xl border-4 ${index === 2 ? 'border-indigo-600 bg-indigo-50 scale-105' : 'border-gray-100 bg-white'}`}
                >
                  <h3 className={`text-3xl font-extrabold mb-2 ${index === 2 ? 'text-indigo-800' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <p className="text-xl font-bold text-gray-700 mb-4">{pkg.price}</p>
                  <p className="text-sm uppercase tracking-widest text-indigo-500 font-medium mb-6">Ideal For: {pkg.idealFor}</p>
                  
                  <h4 className="font-bold text-gray-800 mb-3 border-t pt-3">Key Inclusions:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`mt-8 w-full py-3 font-bold rounded-full transition duration-300 shadow-md ${index === 2 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white'}`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. Why Choose Us (Extended Benefits) --- */}
        <section className="py-24 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
              The Mind To Market Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Unified A → Z Solution', text: 'We offer genuine one-stop business transformation. From initial company registration to launching an AI-powered SaaS tool, all services are managed in-house, ensuring zero communication gaps and maximum speed.', icon: CheckCircle },
                { title: 'Indokona Group Strength', text: 'Our platform is backed by the legal, financial, and compliance strength of our parent organization, Indokona Credit Bazar Pvt. Ltd., providing unparalleled stability and trust.', icon: CheckCircle },
                { title: 'In-House Expertise', text: 'We do not outsource. Our dedicated teams for design, development, marketing, and legal compliance work together, guaranteeing high quality and quick problem resolution.', icon: CheckCircle },
                { title: 'Global Compliance Ready', text: 'We provide ISO certification support and ensure adherence to Indian laws (MCA, ROC, IT Act) and global standards like GDPR and DPA, making your brand export-ready.', icon: CheckCircle },
                { title: 'Continuous Support & Mentorship', text: 'Our service includes end-to-end AMC, dedicated relationship managers, continuous training bootcamps, and guidance for funding and scaling strategies.', icon: CheckCircle },
                { title: 'ROI-Focused Transparency', text: 'Every action is measured for return on investment (ROI). We maintain a completely transparent and compliant business model, giving you clarity on every rupee spent.', icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="flex items-start p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                  <item.icon className="w-8 h-8 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-20">
                <p className="text-lg font-medium text-gray-700">
                    (Scanned certificates & award verifications are available for viewing on our official Trust Page.)
                </p>
            </div>
          </div>
        </section>


        {/* --- 7. Legal & Compliance Disclosure (Footer Component) --- */}
        <section className="py-16 bg-gray-900 text-gray-300 border-t border-indigo-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white mb-6 border-b border-indigo-600 pb-3">
              Regulatory & Compliance Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">Legal Adherence</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        We operate strictly under Indian law and comply with regulations set by MCA, ROC, and the IT Act. We also follow global privacy standards (GDPR & DPA) for international clients.
                    </p>
                    <p className="text-sm font-semibold text-white">Jurisdiction: Faridabad, Haryana.</p>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">Transparency Pledge</h3>
                    <ul className="text-sm space-y-1 text-gray-400">
                        <li>— CIN / ROC / GSTIN / Registered Address</li>
                        <li>— DPA / Privacy Policy / Terms & Conditions</li>
                        <li>— Refund & Cancellation Policy</li>
                        <li className="font-bold text-white mt-2">All company identifiers are published transparently.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">Service Agreement</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        All service engagements are subject to a formal legal agreement. This ensures clear scope definition, mutual protection, and quality assurance. Disputes, if any, shall be subject to Faridabad jurisdiction.
                    </p>
                </div>
            </div>
            
          </div>
        </section>
      </main>

      {/* --- 8. Footer / Contact --- */}
      <footer className="bg-gray-800 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-extrabold">Mind To Market</span>
              </div>
              <p className="text-sm text-gray-400">
                Turning innovative ideas into profitable, legally sound, and digitally optimized empires since 2025.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#ecosystem" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#packages" className="hover:text-white transition">Pricing Plans</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Sales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Connect</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-indigo-400" />support@mindtomarket.in</li>
                <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-indigo-400" />WhatsApp: +91 9xxxxxxxxx</li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-indigo-400" />www.mindtomarket.in</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Location</h4>
              <p className="text-sm text-gray-300 mb-3">Head Office:</p>
              <li className="flex items-start text-sm text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                  Faridabad, Haryana, India
              </li>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
            © 2025 Mind To Market — Powered by Indokona Credit Bazar Pvt. Ltd. All rights reserved. Registered under MCA (Government of India).
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;