import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
// Note: Bootstrap CSS and Bootstrap Icons must be imported in your project's index.js/App.js for classes/icons to work.

const IndokonaPage = () => {
    // ===============================================
    // 1. STATE & DATA DEFINITIONS
    // ===============================================
    const [popup, setPopup] = useState(null);

    const userPurchases = [
        { name: 'Manoj', city: 'Mumbai', plan: 'Pro Plan' },
        { name: 'Priya', city: 'Delhi', plan: 'Starter Plan' },
        { name: 'Ravi', city: 'Bangalore', plan: 'Enterprise Plan' },
        { name: 'Sneha', city: 'Hyderabad', plan: 'AI Business Builder' },
        { name: 'Karan', city: 'Chennai', plan: 'CRM System' },
        { name: 'Deepika', city: 'Pune', plan: 'Verified Posting Hub' },
    ];
    
    const modulesData = [
        { title: '1. USER VERIFICATION', purpose: 'केवल Genuine और Verified Businesses को ही Platform पर Allow करना।', features: ['Business KYC Form (PAN, Aadhaar, GST)', 'Auto Verification through Govt APIs'], aosClass: 'aos-slide-up', delay: 0.1, navId: 'Modules' },
        { title: '2. VERIFIED POSTING HUB', purpose: 'एक FB/LinkedIn जैसा Verified Business Community बनाना।', features: ['Only verified users can post', 'Post Formats (Image Ad, Short Video, Listing)'], aosClass: 'aos-slide-up', delay: 0.2, navId: 'Modules' },
        { title: '3. AI BUSINESS BUILDER', purpose: 'सिर्फ Brand Name डालते ही पूरा Business Setup तैयार करना।', features: ['AI Generates Logo, Tagline, Brand Colors', 'Social Media Kit'], aosClass: 'aos-slide-up', delay: 0.3, navId: 'Modules' },
        { title: '4. ADS AUTOMATION HUB', purpose: '1 Click में Marketing Campaign तैयार और Launch करना।', features: ['AI Ad Copy + Hashtags Suggestion', '30 Days Marketing Calendar (Auto Schedule)'], aosClass: 'aos-slide-up', delay: 0.4, navId: 'Modules' },
        { title: '5. CRM + LEAD MANAGEMENT', purpose: 'Businesses को internal management tools देना।', features: ['Lead Capture & Status Tracking', 'Quotation & Invoice Generator'], aosClass: 'aos-slide-up', delay: 0.5, navId: 'Modules' },
        { title: '6. AI ASSISTANT & PROPOSAL', purpose: 'Smart Automation और Document Generation।', features: ['Auto Proposal Creator & Email Writer', 'Business Pitch Deck Generator'], aosClass: 'aos-slide-up', delay: 0.6, navId: 'Modules' },
        { title: '7. ADMIN CONTROL PANEL', purpose: 'Platform की Legal, Payment और User Safety सुनिश्चित करना।', features: ['Verify/Reject Businesses & Content Moderation', 'Manage Paid Plans & Invoices'], aosClass: 'aos-slide-up', delay: 0.7, navId: 'Modules' },
        { title: '8. INTEGRATION & WHITE-LABEL', purpose: 'Platform को scalable बनाना।', features: ['Payment Gateways (Razorpay, Stripe)', 'WhatsApp API Integration', 'White-Label Mode'], aosClass: 'aos-slide-up', delay: 0.8, navId: 'Modules' },
    ];
    
    const targetUsers = [
        { name: 'Startups & Entrepreneurs', icon: 'bi-rocket-fill', aosClass: 'aos-zoom-in', delay: 0.1 },
        { name: 'Digital Agencies', icon: 'bi-graph-up', aosClass: 'aos-zoom-in', delay: 0.2 },
        { name: 'Freelancers', icon: 'bi-laptop', aosClass: 'aos-zoom-in', delay: 0.3 },
        { name: 'Local Businesses', icon: 'bi-shop', aosClass: 'aos-zoom-in', delay: 0.4 },
        { name: 'Coaches, Trainers', icon: 'bi-mortarboard-fill', aosClass: 'aos-zoom-in', delay: 0.5 },
        { name: 'E-commerce Sellers', icon: 'bi-bag-fill', aosClass: 'aos-zoom-in', delay: 0.6 },
    ];

    // FIX: Missing `legalCompliance` variable is defined here.
    const legalCompliance = [
        'End-to-End Encryption (E2EE)',
        'No Third-Party Creative Upload Allowed',
        'Verified KYC Required for All Operations',
        'AI-Generated Material Ownership → Belongs to Business Owner',
        'Platform Terms Auto-Attached with Every Post',
        'Payment Gateway PCI-DSS Compliance',
    ];

    const navLinks = [
        { name: 'Home', href: '#top' },
        { name: 'Modules', href: '#Modules' },
        { name: 'Pricing', href: '#Pricing' },
        { name: 'Security', href: '#Security' },
        { name: 'Contact', href: '#Contact' },
    ];

    // ===============================================
    // 2. CSS STYLES (Including AOS and Popup Keyframes)
    // ===============================================
    const pageStyles = `
        /* Global Styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5; 
            line-height: 1.6;
            padding-top: 100px; /* Space for fixed Marquee (50px) + Navbar (50px) */
        }

        /* Nav Bar Styling */
        .fixed-navbar {
            position: fixed;
            top: 50px; 
            left: 0;
            width: 100%;
            z-index: 1020;
            background-color: #007bff; 
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        /* Marquee Specific Styling */
        .marquee-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1030; 
            background-color: #28a745 !important; 
            color: white !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            padding: 5px 0;
        }
        .marquee-text {
            font-size: 1.2rem;
            font-weight: 700;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        /* Main Container Styling */
        .indokona-container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
        }

        /* Section Styling */
        .indokona-section {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
            border-left: 5px solid #007bff;
        }

        .section-heading {
            color: #007bff;
            font-weight: 700;
            border-bottom: 3px solid #28a745;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }

        /* --- AOS (Animation on Scroll) CSS --- */
        .aos-init {
            opacity: 0;
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .aos-animate {
            opacity: 1;
        }

        /* Specific AOS effects */
        .aos-slide-up { transform: translateY(50px); }
        .aos-slide-up.aos-animate { transform: translateY(0); }
        
        .aos-zoom-in { transform: scale(0.8); }
        .aos-zoom-in.aos-animate { transform: scale(1); }
        /* --- End AOS CSS --- */


        /* --- Fake Popup Styling --- */
        .conversion-popup {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 2000;
            background-color: #343a40; 
            color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            opacity: 0;
            transform: translateX(-100%);
            animation: slideIn 0.5s forwards, slideOut 0.5s 4.5s forwards; 
        }
        .conversion-popup i {
            color: #28a745; 
            font-size: 1.5rem;
            margin-right: 10px;
        }

        @keyframes slideIn {
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-100%); }
        }
        /* --- End Fake Popup Styling --- */
    `;

    // ===============================================
    // 3. EFFECT HOOKS (AOS and Popup Logic)
    // ===============================================

    // Logic for AOS (Animation on Scroll)
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.aos-init');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                // Check if element is at least 80% visible in viewport
                if (rect.top < window.innerHeight * 0.8) {
                    el.classList.add('aos-animate');
                }
            });
        };

        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Logic for Fake Conversion Popup
    useEffect(() => {
        const showRandomPopup = () => {
            const randomPurchase = userPurchases[Math.floor(Math.random() * userPurchases.length)];
            setPopup(randomPurchase);

            // Hide the popup after 5 seconds
            setTimeout(() => {
                setPopup(null);
            }, 5000); 
        };

        // Show a popup every 10 seconds
        const intervalId = setInterval(showRandomPopup, 20000); 

        // Initial popup after a short delay
        setTimeout(showRandomPopup, 5000); 

        return () => clearInterval(intervalId);
    }, []);


    // ===============================================
    // 4. HELPER COMPONENTS
    // ===============================================
    const FeatureModule = ({ title, purpose, features, aosClass, delay }) => (
        <div 
            className={`col-lg-6 mb-4 aos-init ${aosClass}`} 
            style={{ transitionDelay: `${delay}s` }}
        >
            <div className="card feature-card h-100 p-3 shadow-sm border-primary">
                <div className="card-body">
                    <h5 className="card-title text-success fw-bold">{title}</h5>
                    <p className="card-text small text-muted">**Purpose:** {purpose}</p>
                    <ul className="list-unstyled mt-3 small">
                        {features.map((f, i) => (
                            <li key={i} className="mb-1"><i className="bi bi-check-circle-fill text-primary me-2"></i>{f}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
    

    // ===============================================
    // 5. JSX RENDER
    // ===============================================
    return (
        <React.Fragment>
           
            <style>{pageStyles}</style>
            

            {/* A. Marquee Tag (Fixed Top Bar) */}
            
            <div className="marquee-bar">
                
                <marquee behavior="scroll" direction="left" scrollamount="6" className="marquee-text mb-0">
                    welcome to indokona suit – 🚀 India’s All-in-One Verified Business Operating System
                </marquee>
            </div>
            
           

            <div className="indokona-container">
                
                {/* C. Hero Section */}
                <header className="text-center py-5 aos-init aos-slide-up">
                    <h1 className="display-4 fw-bolder text-dark">
                        <span className="text-primary">INDOKONA SUITE</span> – India’s All-in-One Verified Business Operating System
                    </h1>
                    <p className="lead text-muted mt-3">Developed by: **Indokona Credit Bazar Pvt. Ltd.** | Contact: **+91 8800905879**</p>
                    <a href="#Modules" className="btn btn-lg btn-success mt-4 animate-pulse">Explore Features</a>
                </header>
                
                {/* D. Core Objective */}
                <div className="indokona-section text-center bg-info bg-opacity-10 aos-init aos-slide-up">
                    <h2 className="text-info section-heading mb-0">🎯 CORE OBJECTIVE</h2>
                    <blockquote className="blockquote fs-4 fw-normal text-dark mt-3">
                        “Business ko **legally verified, digitally ready** aur **marketing optimized** banana – बिना किसी third party tool के.”
                    </blockquote>
                </div>

                {/* E. System Architecture (Modules) */}
                <div className="indokona-section aos-init aos-slide-up" id="Modules">
                    <h2 className="section-heading"><i className="bi bi-toggles me-2"></i>🏗 SYSTEM ARCHITECTURE (Top-Level Modules)</h2>
                    <div className="row g-4">
                        {modulesData.map((module, index) => (
                            <FeatureModule 
                                key={index}
                                title={module.title}
                                purpose={module.purpose}
                                features={module.features}
                                aosClass={module.aosClass}
                                delay={module.delay} 
                            />
                        ))}
                    </div>
                </div>

                {/* F. Target Users */}
                <div className="indokona-section bg-warning bg-opacity-10 aos-init aos-slide-up" id="Users">
                    <h2 className="section-heading text-warning"><i className="bi bi-people-fill me-2"></i>🎯 TARGET USERS</h2>
                    <div className="row g-3 text-center">
                        {targetUsers.map((user, index) => (
                            <div 
                                key={index} 
                                className={`col-lg-3 col-md-4 col-sm-6 aos-init ${user.aosClass}`} 
                                style={{ animationDelay: `${user.delay}s` }}
                            >
                                <div className="card h-100 p-3 shadow-sm">
                                    <i className={`bi ${user.icon} display-6 text-warning mb-2`}></i>
                                    <p className="fw-bold mb-0">{user.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* G. Pricing Structure */}
                <div className="indokona-section aos-init aos-zoom-in" id="Pricing">
                    <h2 className="section-heading"><i className="bi bi-gem me-2"></i>🪙 PRICING STRUCTURE (Suggested)</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
                        
                        <div className="col aos-init aos-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="card h-100 shadow-sm border-light"><div className="card-header bg-light">Free</div><div className="card-body"><h5 className="card-title">₹0</h5><p className="card-text small">Basic Profile & Community View</p><span className="badge bg-secondary">Limited Access</span></div></div>
                        </div>
                         
                        <div className="col aos-init aos-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="card h-100 shadow-lg border-warning"><div className="card-header bg-warning text-dark fw-bold">Starter</div><div className="card-body"><h5 className="card-title">₹1,999/month</h5><p className="card-text small">Verified Business Posting + AI Branding Tools</p><span className="badge bg-warning text-dark">Partial Access</span></div></div>
                        </div>
                        
                        <div className="col aos-init aos-slide-up" style={{ animationDelay: '0.5s' }}>
                            <div className="card h-100 shadow-lg border-primary"><div className="card-header bg-primary text-white fw-bold">Pro (Most Popular)</div><div className="card-body"><h5 className="card-title">₹4,999/month</h5><p className="card-text small">CRM + Ads Automation + 30-Day Calendar</p><span className="badge bg-primary">Full Access</span></div></div>
                        </div>
                        
                        <div className="col aos-init aos-slide-up" style={{ animationDelay: '0.7s' }}>
                            <div className="card h-100 shadow-lg border-success"><div className="card-header bg-success text-white fw-bold">Enterprise</div><div className="card-body"><h5 className="card-title">₹24,999 One Time</h5><p className="card-text small">All + White Label + API</p><span className="badge bg-success animate-pulse">Lifetime</span></div></div>
                        </div>

                    </div>
                </div>

                {/* H. Why Indokona is Different (Comparison Table) */}
                <div className="indokona-section aos-init aos-slide-up">
                    <h2 className="section-heading"><i className="bi bi-star-fill me-2"></i>💡 WHY INDOKONA SUITE IS DIFFERENT</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-center align-middle">
                            <thead className="table-primary">
                                <tr>
                                    <th>Feature</th>
                                    <th>Indokona Suite</th>
                                    <th>Others</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="fw-bold">Legal Verification</td><td className="text-success fw-bold">✅ Yes</td><td className="text-danger fw-bold">❌ No</td></tr>
                                <tr><td className="fw-bold">AI Branding + Business Setup</td><td className="text-success fw-bold">✅ Yes</td><td className="text-danger fw-bold">❌ Limited</td></tr>
                                <tr><td className="fw-bold">Verified Business Posting</td><td className="text-success fw-bold">✅ Yes</td><td className="text-danger fw-bold">❌ No</td></tr>
                                <tr><td className="fw-bold">Inbuilt CRM + Automation</td><td className="text-success fw-bold">✅ Yes</td><td className="text-danger fw-bold">✅ Partial</td></tr>
                                <tr><td className="fw-bold">White Label Ready</td><td className="text-success fw-bold">✅ Yes</td><td className="text-danger fw-bold">❌ No</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* I. Legal & Security Compliance */}
                {/* This section caused the previous error, now corrected by defining legalCompliance */}
                <div className="indokona-section bg-danger bg-opacity-10 aos-init aos-slide-up" id="Security" style={{ borderLeftColor: '#dc3545' }}>
                    <h2 className="section-heading text-danger"><i className="bi bi-lock-fill me-2"></i>🧾 LEGAL & SECURITY COMPLIANCE</h2>
                    <div className="row g-3">
                        {legalCompliance.map((item, index) => (
                            <div 
                                key={index} 
                                className="col-lg-6 aos-init aos-slide-up" 
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                <div className="alert alert-danger p-3 mb-0 border-0 shadow-sm">
                                    <i className="bi bi-shield-lock-fill me-2"></i> {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* J. Vision Statement (Footer) */}
                <footer className="text-center py-4 mt-4 bg-dark text-white rounded aos-init aos-slide-up" id="Contact">
                    <h4 className="fw-light">🔔 VISION STATEMENT</h4>
                    <p className="fst-italic lead">
                        “Indokona Suite aims to become India’s most trusted **verified business ecosystem** —
                        where every brand can build, grow, and promote itself without external dependency.”
                    </p>
                    <p className="small mt-3 mb-0">Website: <a href="www.indokona.com" className="text-info">www.indokona.com</a></p>
                </footer>
            </div>
            
            {/* K. Fake Conversion Popup (Floating Element) */}
            {popup && (
                <div className="conversion-popup">
                    <i className="bi bi-patch-check-fill"></i>
                    <p className="mb-0 fw-bold">
                        {popup.name} from {popup.city} just purchased the {popup.plan}!
                    </p>
                </div>
            )}
        </React.Fragment>
    );
};

export default IndokonaPage;