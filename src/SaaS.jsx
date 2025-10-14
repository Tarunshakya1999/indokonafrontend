// src/App.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Data for Popups, Features, and Testimonials ---

const popupsData = [
  { name: "Priya", city: "Delhi", service: "CRM Automation" },
  { name: "Manoj", city: "Mumbai", service: "AI Ad Launcher" },
  { name: "Amit", city: "Bangalore", service: "Website Builder" },
  { name: "Neha", city: "Chennai", service: "Workflow Automation" },
  { name: "Riya", city: "Kolkata", service: "Social Scheduler" },
  { name: "Raj", city: "Hyderabad", service: "Landing Page Builder" },
  { name: "Sanya", city: "Pune", service: "Payment Solutions" },
  { name: "Vikram", city: "Ahmedabad", service: "AI Team Management" },
];

const featuresData = [
  { icon: '🤖', title: 'AI-Powered Automation', description: 'Intelligent workflows designed to handle repetitive tasks automatically.' },
  { icon: '☁️', title: 'Secure Cloud Infrastructure', description: 'Industry-leading data security and 99.9% uptime reliability.' },
  { icon: '📱', title: 'Mobile-Ready Dashboard', description: 'Manage your entire business anytime, anywhere, on any device.' },
  { icon: '🔗', title: 'Seamless Integration', description: 'All 30+ tools work together right out of the box with zero hassle.' },
];

const testimonialsData = [
  { quote: "INDOKONA's CRM tool saved us 20 hours a week on lead management alone. A true game-changer for our agency!", name: "Anjali M.", city: "Mumbai" },
  { quote: "The AI Ad Launcher is incredibly effective. It's affordable, and the results are consistently better than manual campaigns.", name: "Sunil K.", city: "Pune" },
  { quote: "Finally, an all-in-one platform that doesn't require a developer. Easy to use and incredibly powerful for our startup.", name: "Gaurav P.", city: "Delhi" },
];

// --- Reusable Components ---

const Popup = ({ user }) => (
  // Added a brief fade-out class to make the exit smoother
  <div className="popup-alert">
    🚀 **{user.name}** from **{user.city}** purchased **{user.service}**!
  </div>
);

const FeatureCard = ({ icon, title, description, aos }) => (
  <div className="col-lg-3 col-md-6 mb-4" data-aos={aos}>
    <div className="card feature-card h-100 p-3 text-center">
      <div className="display-4 mb-3">{icon}</div>
      <h5 className="card-title fw-bold">{title}</h5>
      <p className="card-text text-muted">{description}</p>
    </div>
  </div>
);

const Section = ({ title, subtitle, children, aos, className = "", style = {} }) => (
  <section className={`py-5 ${className}`} data-aos={aos} style={style}>
    <div className="container">
      {subtitle && <p className="text-center text-primary fw-bold text-uppercase mb-1">{subtitle}</p>}
      <h2 className={`mb-4 text-center ${className.includes('bg-') ? 'text-white' : ''}`}>{title}</h2>
      <div>{children}</div>
    </div>
  </section>
);

// --- Main SAAS App Component ---

const SAAS = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    // 1. Initialize AOS
    AOS.init({ duration: 1000, once: false }); 

    // 2. Setup Popup Interval
    const popupInterval = setInterval(() => {
      const randomUser = popupsData[Math.floor(Math.random() * popupsData.length)];
      setPopup(randomUser);
      // Popup hides after 4 seconds
      setTimeout(() => setPopup(null), 4000); 
    }, 8000); // Popup appears every 8 sec

    // 3. Cleanup function
    return () => clearInterval(popupInterval);
  }, []);

  return (
    <div>
      {/* Inline CSS (Expanded and improved styling) */}
      <style>{`
        /* Primary Colors & Typography */
        :root {
          --primary-color: #007bff; /* Vibrant Blue */
          --secondary-color: #f8f9fa; /* Light Gray for background */
          --success-color: #28a745; /* Green for Marquee */
          --dark-color: #343a40;
        }

        body {
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* Marquee Styling (NEW) */
        .marquee-container {
            background-color: var(--success-color);
            color: white;
            padding: 8px 0;
            width: 100%;
            z-index: 1000;
        }
        .marquee-text {
            font-size: 1.1rem;
            font-weight: 600;
        }

        /* Popup styling */
        .popup-alert {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: var(--primary-color);
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          z-index: 9999;
          animation: popup-fade 0.5s ease-in-out;
        }
        @keyframes popup-fade {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);
        }

        /* Section Backgrounds */
        .bg-light-gray {
          background-color: var(--secondary-color);
        }

        /* Blockquote styling */
        blockquote {
          font-size: 1.35rem;
          border-left: 6px solid var(--primary-color);
          padding-left: 20px;
          color: var(--dark-color);
          background-color: #e9f5ff; /* Light blue background */
          padding: 15px 20px 15px 30px;
          border-radius: 0 10px 10px 0;
        }

        /* Feature Card styling */
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          border-bottom: 5px solid transparent;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
          border-bottom: 5px solid var(--primary-color);
        }

        /* Testimonial styling */
        .testimonial-card {
          border: 1px solid #ddd;
          padding: 25px;
          border-radius: 12px;
          min-height: 220px;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: background 0.3s;
        }
        .testimonial-card:hover {
            background-color: #f0f7ff;
        }
        .testimonial-quote {
            font-style: italic;
            font-size: 1.05rem;
            color: #555;
            margin-bottom: 15px;
        }
        
      `}</style>

      {/* Marquee Section (MOVED TO THE VERY TOP) */}
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <span className="marquee-text">
            🚀 **BIG ANNOUNCEMENT:** WELCOME TO INDOKONA SAAS: Your One-Stop Solution for CRM, AI Automation, Website Building, and more! | Trusted by 1000+ Businesses 🇮🇳
          </span>
        </marquee>
      </div>

      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5 py-md-5" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }} data-aos="fade-down">
        <div className="container">
          <h1 className="display-3 fw-bolder mb-3">INDOKONA SaaS: The All-in-One Growth Platform</h1>
          <p className="lead fs-4">Empowering 🇮🇳 Businesses with Next-Generation Automation, AI & Integrated SaaS Tools.</p>
          <a href="#products" className="btn btn-light btn-lg mt-4 fw-bold shadow-sm" data-aos="zoom-in" data-aos-delay="500">
            Explore 30+ Tools Today!
          </a>
        </div>
      </section>
      
      {/* Popups */}
      {popup && <Popup user={popup} />}

      {/* Feature Cards Section */}
      <Section title="Why INDOKONA is Different" subtitle="The Future of Business Automation" aos="fade-up" className="bg-light-gray">
        <div className="row text-center">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              aos={`zoom-in-up`}
            />
          ))}
        </div>
      </Section>
      
      {/* --- Horizontal line break for better visual separation --- */}
      <hr className="my-0"/>

      {/* About Section (Extended) */}
      <Section title="About INDOKONA (SAAS)" subtitle="Building India's Digital Backbone" aos="fade-up">
        <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
                <p>
                    INDOKONA (SAAS) is the flagship innovation of **Indokona Credit Bazar Pvt. Ltd.**, a registered Indian company headquartered in Faridabad, Haryana. Our foundation is built on the premise of making technology democratically accessible.
                </p>
                <p>
                    We’ve engineered a complete cloud-based automation ecosystem—a digital engine that allows entrepreneurs, startups, agencies, and enterprises to effortlessly manage, automate, and scale operations using **30+ fully integrated tools**.
                </p>
                <p className="fw-bold">
                    Our commitment is to simplicity, affordability, and performance. Run your entire digital enterprise from a single, intuitive dashboard.
                </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <h5 className="text-primary mb-3">Key Differentiators:</h5>
                <ul>
                    <li>**Local Focus, Global Standards:** Developed in India, built to international compliance.</li>
                    <li>**Holistic Integration:** Unlike piecemeal solutions, our tools talk to each other seamlessly.</li>
                    <li>**AI-First Approach:** Leveraging Artificial Intelligence for smart, predictive automation.</li>
                </ul>
            </div>
        </div>
      </Section>
      
      <hr className="my-0"/>
      
      {/* Vision & Mission Section (Combined & Stylized) */}
      <Section title="Our Guiding Principles" subtitle="Vision & Mission" aos="zoom-in" className="bg-light-gray">
        <div className="row">
            <div className="col-md-6 mb-4" data-aos="fade-right">
                <h3 className="text-primary">Vision:</h3>
                <blockquote className="blockquote">
                    “To become India’s leading SaaS automation ecosystem — empowering one million entrepreneurs with intelligent, scalable, and affordable digital tools to compete globally.”
                </blockquote>
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <h3 className="text-primary">Mission:</h3>
                <blockquote className="blockquote">
                    “To deliver world-class SaaS and AI-driven tools that simplify digital operations, promote entrepreneurship, and enable complete, end-to-end automation across all industries.”
                </blockquote>
            </div>
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
            <h4 className="fw-bold text-muted">Core Values:</h4>
            <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
                <span className="badge bg-primary fs-6 p-2">💡 Innovation</span>
                <span className="badge bg-primary fs-6 p-2">🤝 Integrity</span>
                <span className="badge bg-primary fs-6 p-2">🚀 Empowerment</span>
                <span className="badge bg-primary fs-6 p-2">⚙ Reliability</span>
            </div>
        </div>
      </Section>
      
      <hr className="my-0"/>
      
      {/* How It Works Section */}
      <Section title="How INDOKONA Powers Your Growth" subtitle="Simple Steps to Digital Excellence" aos="slide-up">
        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="flip-right">
            <div className="p-4 border rounded shadow-sm h-100">
              <div className="display-4 text-primary fw-bolder mb-3">1</div>
              <h4 className="text-dark">Setup & Integration</h4>
              <p className="text-muted">Choose your desired tools (CRM, builder, AI) and activate them instantly. No setup fees, no coding required.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-right" data-aos-delay="200">
            <div className="p-4 border rounded shadow-sm h-100">
              <div className="display-4 text-primary fw-bolder mb-3">2</div>
              <h4 className="text-dark">Automate & Manage</h4>
              <p className="text-muted">Use AI-workflows to automate marketing, sales, and team management tasks from one central dashboard.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-right" data-aos-delay="400">
            <div className="p-4 border rounded shadow-sm h-100">
              <div className="display-4 text-primary fw-bolder mb-3">3</div>
              <h4 className="text-dark">Scale & Analyze</h4>
              <p className="text-muted">Gain real-time insights with analytics. Scale your business by adding more tools and resources instantly.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <hr className="my-0"/>
      
      {/* Products & Services Section (Detailed List) */}
      <Section title="Our Ecosystem: 30+ Tools" subtitle="All the Software You Need, In One Place" aos="fade-right" className="bg-light-gray">
        <div className="row">
            <div className="col-lg-4" data-aos="fade-up">
                <h5 className="text-primary mb-3">Marketing & Sales Automation:</h5>
                <ul className="list-unstyled">
                    <li>✔️ AI Ad Launcher & Campaign Manager</li>
                    <li>✔️ Comprehensive CRM System & Lead Funnels</li>
                    <li>✔️ Social Media Scheduler & Analytics</li>
                    <li>✔️ WhatsApp Cloud API & Bulk Messaging</li>
                </ul>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <h5 className="text-primary mb-3">Website & Digital Presence:</h5>
                <ul className="list-unstyled">
                    <li>✔️ Drag-and-Drop Website & Landing Page Builder</li>
                    <li>✔️ Dedicated Digital Shop/e-Commerce Creator</li>
                    <li>✔️ Payment Gateway Integration & Billing Solutions</li>
                    <li>✔️ Private Social Network & Community Tools</li>
                </ul>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <h5 className="text-primary mb-3">Operations & Management:</h5>
                <ul className="list-unstyled">
                    <li>✔️ Human + AI Team Management & Payroll</li>
                    <li>✔️ Workflow & Process Automation (No-Code)</li>
                    <li>✔️ LMS (Learning Management System) for Training</li>
                    <li>✔️ Certificate Generator & Document Management</li>
                </ul>
            </div>
        </div>
      </Section>
      
      <hr className="my-0"/>

      {/* Testimonials Grid */}
      <Section title="What Our Clients Say" subtitle="Trusted by 1000+ Businesses" aos="zoom-in-up">
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <div className="col-lg-4 mb-4" key={index} data-aos={`fade-up`} data-aos-delay={index * 150}>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  ❝ {testimonial.quote} ❞
                </div>
                <p className="fw-bold mb-0"> - {testimonial.name}</p>
                <small className="text-muted">{testimonial.city}</small>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <hr className="my-0"/>
      
      {/* Technology Stack */}
      <Section title="Technology & Security" subtitle="Built on Modern, Reliable Infrastructure" aos="fade-up" className="bg-light-gray">
        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <h5 className="text-primary">Infrastructure & Performance:</h5>
            <ul className="list-unstyled">
                <li>**Cloud:** Secure, scalable, distributed infrastructure.</li>
                <li>**Uptime:** Guaranteed 99.9% server availability.</li>
                <li>**Speed:** Global CDN integration for lightning-fast load times.</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <h5 className="text-primary">Security & Compliance:</h5>
            <ul className="list-unstyled">
                <li>**Data:** SSL Certified, multi-layer encryption.</li>
                <li>**Compliance:** ISO-Compliant Operational Standards.</li>
                <li>**Banking:** Verified Business Banking Partner: **Axis Bank Ltd**.</li>
            </ul>
          </div>
        </div>
      </Section>

      <hr className="my-0"/>
      
      {/* Company Profile & Credibility (Combined) */}
      <Section title="Corporate Details" aos="fade-up">
        <div className="row">
            <div className="col-md-6" data-aos="fade-right">
                <h5 className="text-primary mb-3">Legal & Corporate Status:</h5>
                <p><strong>Registered Entity:</strong> Indokona Credit Bazar Pvt. Ltd.</p>
                <p><strong>Headquarters:</strong> Faridabad, Haryana, India</p>
                <p><strong>Founded By:</strong> Ruby Fatima A</p>
                <p><strong>Registered Type:</strong> Private Limited (Under MCA, Govt. of India)</p>
                <p><strong>Status:</strong> Legally incorporated & financially compliant.</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <h5 className="text-primary mb-3">Trust & Credibility:</h5>
                <ul className="list-unstyled">
                    <li>✅ Legally Registered Company under MCA</li>
                    <li>✅ Secure Cloud Infrastructure (SSL Certified & GDPR Compliant)</li>
                    <li>✅ Transparent Subscription Model — No hidden charges</li>
                    <li>✅ 24×7 Premium Customer Assistance & Tech Support</li>
                </ul>
            </div>
        </div>
      </Section>

      <hr className="my-0"/>
      
      {/* Target Audience & Why Choose (Combined) */}
      <Section title="Who We Serve" subtitle="From Solopreneurs to Enterprises" aos="fade-down" className="bg-light-gray">
        <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
                <h5 className="text-primary">Target Audience:</h5>
                <ul className="list-unstyled">
                    <li>**Startups & MSMEs:** Looking for an affordable, scalable digital foundation.</li>
                    <li>**Agencies & Freelancers:** Needing a White-Label platform to serve clients.</li>
                    <li>**Coaching Institutes:** Requiring a full LMS and certification system.</li>
                    <li>**Retailers & Distributors:** Seeking digital shop and payment solutions.</li>
                </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
                <h5 className="text-primary">Why Choose INDOKONA (SAAS)?</h5>
                <ul className="list-unstyled">
                    <li>**✔ Value:** 30+ Tools under One Affordable Roof (Eliminates multiple subscriptions).</li>
                    <li>**✔ Intelligence:** AI-Driven Automations that learn and optimize.</li>
                    <li>**✔ Simplicity:** Instant Setup, No Coding, Total Cloud Backup.</li>
                    <li>**✔ Scalability:** Flexible Monthly & White-Label Plans for all sizes.</li>
                </ul>
            </div>
        </div>
      </Section>
      
      <hr className="my-0"/>

      {/* Contact Section (Improved) */}
      <Section title="Ready to Scale Your Business?" subtitle="Contact Our Growth Team" aos="zoom-in-up">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="p-4 p-md-5 bg-primary text-white rounded shadow-lg text-center">
                    <h3 className="mb-4">Get Started Today!</h3>
                    <p className="fs-5">📧 Email: **indokonaoutsourcing@gmail.com**</p>
                    <p className="fs-5 mb-4">📞 Phone: **+91 96259 95155**</p>
                    <p className="mb-0">🏢 Address: Indokona Credit Bazar Pvt. Ltd., Faridabad, Haryana, India</p>
                </div>
            </div>
        </div>
      </Section>

      {/* Footer (Dark Background) */}
      <footer className="text-center py-4 bg-dark text-white">
        <p className="mb-0 fs-6">
            &copy; {new Date().getFullYear()} INDOKONA (SAAS) | An Initiative of Indokona Credit Bazar Pvt. Ltd. | Simplifying Business through Automation, SaaS, and AI
        </p>
      </footer>
    </div>
  );
};

export default SAAS;