import React, { useEffect, useState } from "react";
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS (make sure to include it globally in index.js too)

const MindToMarketPage = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false,     // Whether animation should happen only once - while scrolling down
            mirror: false,  // Whether elements should animate out while scrolling past them
        });
        AOS.refresh(); // Recalculate positions on component updates
    }, []);
    
    const whatsappMessage = "Hello Mind To Market Team, I saw your 12 core features and want a Free Demo. Please share details and pricing for the Growth Plan.";

    const content2 = {
        // ... (rest of the content)
        contact: {
            email: "indokonaoutsourcing@gmail.com",
            phone: "+91 8800905879", // <-- Your number is correctly set here
            website: "www.indokona.com",
            headOffice: "Faridabad, Haryana, India"
        },
        // ... (rest of the content)
    };


    const COLORS = {
        primary: "#007bff",
        secondary: "#6c757d",
        accent: "#ffc107",
        light: "#f8f9fa",
        dark: "#212529",
        success: "#28a745",
        danger: "#dc3545",
        info: "#17a2b8",
        purple: "#6f42c1",
        teal: "#20c997"
    };

    const CARD_SHADOW = "0 0.5rem 1rem rgba(0, 0, 0, 0.05)";
    const BORDER_RADIUS = "0.75rem";

    const content = {
        header: {
            tagline: "🌐 Mind To Market™ — Idea to Empire",
            moto: "Your Vision, Our Technology — Just a WhatsApp Away."
        },
        about: {
            title: "About Us",
            desc: "Mind To Market™ is India's premier AI + SaaS-based Business Automation & Branding Ecosystem, designed to take your vision to the market. We are a unified platform providing Branding, Legal Setup, Automation, Marketing, Website, Software Development, and AI Integration — all in one place.",
            objective: "Our Objective:",
            objectiveDesc: "To fully support every Entrepreneur, Startup, MSME, or Company on their entire journey from 'Idea to Empire' — from Legal setup to Global Branding."
        },
        vision: {
            title: "Our Vision",
            desc: "To technologically empower every small and large business in India, enabling them to take their ideas to the Global Market."
        },
        mission: {
            title: "Our Mission",
            slogan: "“One Platform — Infinite Possibilities”",
            desc: "We aim to make Legal Registration, Automation, Marketing, Branding, Training, and AI Support all available on a single platform. This ensures any Business can grow from a Startup to a Corporate entity without needing technical knowledge."
        },
        features: [
            {
                title: "1. AI Branding & Identity Suite", icon: 'fa-palette', color: COLORS.primary, 
                description: "Quickly establish your professional identity. Generate logos, brand documents, and pitch decks instantly using AI-powered design tools.",
                items: [
                    "AI Logo Maker & Color Psychology System", "Auto Visiting Card, Letterhead, ID Card Generator",
                    "Brand Voice & Audio Logo Builder", "Auto Business Profile PDF & Pitch Deck Generator",
                    "Festival Poster & Brochure Auto Generator", "Digital Business Card with QR Integration",
                    "Brand Verification & Award Application Assistance"
                ]
            },
            {
                title: "2. Legal & Business Setup Services", icon: 'fa-scale-balanced', color: COLORS.success,
                description: "Handle all required business registration and compliance filings. Automate legal document creation to ensure regulatory adherence.",
                items: [
                    "Pvt Ltd / LLP / OPC / Proprietorship Registration", "MSME / ISO / GST / Trademark / FSSAI Registration",
                    "ROC Compliance & Annual Filing", "MCA Report Management System",
                    "Auto Legal Document Builder (NDA, Agreement, MoU, etc.)", "National & International Award Registration Support"
                ]
            },
            {
                title: "3. AI Product Creation & Market Launcher", icon: 'fa-brain', color: COLORS.accent,
                description: "Launch products faster by automating content, pricing, and marketing assets. Create websites, funnels, and explainer videos instantly.",
                items: [
                    "AI Product Name + Content + Price Generator", "Auto Website & Landing Page Builder",
                    "Funnel Builder + E-Commerce Ready Catalog", "Competitor & Market Analyzer",
                    "Auto Product Explainer Video Generator"
                ]
            },
            {
                title: "4. Automation & Workflow System", icon: 'fa-robot', color: COLORS.info,
                description: "Streamline daily operations using AI bots for WhatsApp, Email, and SMS. Automate reminders, lead scoring, and invoicing.",
                items: [
                    "WhatsApp AI Bot + Broadcast + CRM Integration", "Email, SMS & Voice Call Automation",
                    "Auto Reminder, Follow-up & Lead Scoring", "Task & Project Workflow Management",
                    "AI Business Suggestion Engine", "Payment Collection + Invoice Automation"
                ]
            },
            {
                title: "5. AI CRM & Business Intelligence", icon: 'fa-chart-bar', color: COLORS.purple,
                description: "Manage leads, track sales pipelines, and forecast revenue using real-time analytics. Capture leads from all channels and use voice commands for CRM tasks.",
                items: [
                    "Lead Capture from WhatsApp, Website, & Social Media", "Smart Pipeline with Predictive Sales Forecast",
                    "Auto Quotation & Proposal Generator", "Employee Performance Tracker",
                    "Voice-Based CRM Command", "Real-Time AI Analytics Dashboard"
                ]
            },
            {
                title: "6. Education & LMS System", icon: 'fa-graduation-cap', color: COLORS.teal,
                description: "For educational businesses, automate course creation, student management, attendance, and certification processes.",
                items: [
                    "Auto Course Builder with Video/Notes", "Student Portal + Fee + Attendance System",
                    "Certificate, Hall Ticket, Result Generator", "Internship & Placement Tracker",
                    "Webinar Integration (Zoom/Meet)", "AI Course Promotion Tools"
                ]
            },
            {
                title: "7. Web & App Development Studio", icon: 'fa-globe', color: COLORS.secondary,
                description: "Get custom websites, mobile apps, SaaS platforms, and secure cloud hosting, complete with 24x7 technical support.",
                items: [
                    "Custom Website, App, & Portal Development", "SaaS Platform Setup",
                    "UI/UX Design Studio", "Secure Cloud Hosting (AWS / Azure)",
                    "Domain + Email + SSL Setup", "24x7 AMC & Technical Support"
                ]
            },
            {
                title: "8. Social Media & Marketing Suite", icon: 'fa-mobile-screen-button', color: COLORS.danger,
                description: "Automate your digital ads (Meta, Google), social posting, and content creation. Use AI for captions, reels, and SEO optimization.",
                items: [
                    "AI Ad Launcher (Meta, Google, LinkedIn, YouTube)", "Auto Poster, Caption & Hashtag Generator",
                    "WhatsApp, Instagram, Facebook Auto Scheduler", "Influencer & PR Collaboration Management",
                    "SEO + Google Business Optimization", "AI Voice & Video Reel Creator"
                ]
            },
            {
                title: "9. Finance, Billing & Compliance Tools", icon: 'fa-file-invoice-dollar', color: COLORS.primary,
                description: "Simplify financial tasks with automated billing, GST invoice generation, expense tracking, and P&L analysis.",
                items: [
                    "Auto Invoice, Billing & GST Generator", "Ledger & Payment Tracker",
                    "Expense & Profit Analysis", "Legal & ROC Compliance Dashboard",
                    "AI Tax Calculator"
                ]
            },
            {
                title: "10. AI Assistant & Support System", icon: 'fa-microchip', color: COLORS.success,
                description: "Get instant, multilingual support via Voice/Text AI. Use the WhatsApp Command Center to execute business tasks instantly.",
                items: [
                    "Voice & Text AI Assistant", "WhatsApp Command Center",
                    "Auto Ticket Support System", "Multilingual Interface (Hindi, English, etc.)",
                    "HR, Legal, Sales & Marketing AI Agents"
                ]
            },
            {
                title: "11. Verified Business Network (B2B)", icon: 'fa-earth-africa', color: COLORS.info,
                description: "Expand your reach by listing your business, finding vendors/distributors, and participating in lead exchange with a verified network.",
                items: [
                    "Verified Business Listing + Portfolio", "Lead Exchange & Collaboration Hub",
                    "Vendor, Distributor & Franchise Finder", "Business Card Scan → CRM Auto Add",
                    "AI SEO Optimizer + Auto Product Posting"
                ]
            },
            {
                title: "12. 24X7 Technical Support & Done-For-You Services", icon: 'fa-handshake-angle', color: COLORS.purple,
                description: "We handle the complexity so you can focus on strategy. Get round-the-clock technical assistance and complete Done-For-You execution for all platform services.",
                items: [
                    "24/7 Priority WhatsApp & Phone Support", 
                    "Dedicated Account Manager (Growth/Enterprise Plans)",
                    "Full Done-For-You (DFY) Legal Registration", 
                    "DFY AI Branding & Content Generation",
                    "DFY Ad Campaign Setup & Monitoring",
                    "White-Glove Onboarding & Training"
                ]
            },
        ],
        community: {
            title: "Community & Growth Features", icon: 'fa-people-group', color: COLORS.accent, items: [
                "Entrepreneur Community & Mentorship", "AI Habit Tracker + Productivity Tools",
                "Gamified Rewards & Ranking System", "Affiliate & Reseller Panel For Indokona Users",
                "AI Mentor Mode + Template Marketplace",
                "Full Supported Environment And Tech Support Also"
            ]
        },
        pricing: [
            { plan: "Starter Plan", price: "₹9,999 / month", bestFor: "Freelancers & Small Businesses" },
            { plan: "Growth Plan", price: "₹19,999 / month", bestFor: "MSMEs & Startups", isBest: true },
            { plan: "Enterprise Plan", price: "₹29,999 / month", bestFor: "Agencies & Corporates" }
        ],
        contact: {
            email: "indokonaoutsourcing@gmail.com",
            phone: "+91 8800905879",
            website: "www.indokona.com",
            headOffice: "Faridabad, Haryana, India"
        },
        legal: {
            title: "Legal & Compliance Notice",
            notes: [
                "Mind To Market™ is an AI-powered automation platform.",
                "We do not directly provide funding or loans.",
                "All legal services are executed through registered partner agencies.",
                "The platform fully complies with Meta Policy, MCA, and Govt. of India norms."
            ]
        },
        trustedBy: [
            "Entrepreneurs", "Startups", "MSMEs", "Educational Institutes", "Corporates"
        ],
        security: [
            "SSL Encryption",
            "ISO 27001 Ready Infrastructure",
            "GDPR & DPA Compliant",
            "AI Fake Detection & Auto Backup"
        ]
    };

    // --- Component Functions ---

    const FeatureIcon = ({ iconClass, title, children }) => (
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up"> {/* AOS animation */}
            <div
                className="card h-100 p-4 border-0"
                style={{ borderRadius: BORDER_RADIUS, boxShadow: CARD_SHADOW }}
            >
                <div className="card-body text-center">
                    <i
                        className={`fas fa-3x mb-3 text-primary ${iconClass}`}
                        style={{ color: COLORS.primary }}
                    >
                    </i>
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text text-muted">{children}</p>
                </div>
            </div>
        </div>
    );

    const ModuleCard = ({ icon, title, description, items, color }) => (
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100"> {/* AOS animation */}
            <div
                className="p-4 h-100"
                style={{
                    backgroundColor: "#fff",
                    borderRadius: BORDER_RADIUS,
                    boxShadow: CARD_SHADOW,
                    borderLeft: `5px solid ${color}`,
                }}
            >
                <h4 className="fw-bold mb-3" style={{ color: COLORS.dark }}>
                    <i className={`fas ${icon} me-2`} style={{ color: color }}></i>{title}
                </h4>
                <p className="small text-muted mb-3">{description}</p>
                <ul className="list-unstyled mb-0 small">
                    {items.map((item, index) => (
                        <li key={index} className="mb-1 text-dark">
                            <i className="fas fa-check me-2" style={{ color: color }}></i>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    // Sales Notification Popup Component
    const SalesNotification = () => {
        const [notification, setNotification] = useState(null);

        const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Pune"];
        const products = ["Growth Plan", "Enterprise Plan", "AI Branding Suite", "Legal Setup Service", "Marketing Suite"];

        const showNotification = () => {
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            const timeAgo = Math.floor(Math.random() * 8) + 1; // 1 to 8 minutes ago
            
            const message = `Someone from ${randomCity} purchased the ${randomProduct} ${timeAgo} minutes ago.`;
            setNotification(message);

            setTimeout(() => setNotification(null), 5000); // Hide after 5 seconds
        };

        useEffect(() => {
            const initialTimer = setTimeout(showNotification, 3000); 
            const interval = setInterval(showNotification, Math.random() * 10000 + 10000); 

            return () => {
                clearTimeout(initialTimer);
                clearInterval(interval);
            };
        }, []);

        if (!notification) return null;

        return (
            <div
                className="toast show align-items-center text-white bg-dark border-0"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '20px', // Position on left
                    zIndex: 1050,
                    borderRadius: '5px',
                    padding: '10px 15px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
            >
                <div className="d-flex">
                    <div className="toast-body small fw-bold">
                        <i className="fas fa-shopping-bag me-2 text-warning"></i>
                        {notification}
                    </div>
                </div>
            </div>
        );
    };

    // New: Rating Notification Popup Component
    const RatingNotification = () => {
        const [ratingNotification, setRatingNotification] = useState(null);

        const cities = ["Pune", "Hyderabad", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Nagpur", "Indore"];
        const ratings = ["5.0 out of 5 stars", "Excellent feedback", "Highly Recommended", "Great experience"];

        const showRatingNotification = () => {
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
            const timeAgo = Math.floor(Math.random() * 15) + 2; // 2 to 15 minutes ago
            
            const message = `User from ${randomCity} gave us an ${randomRating} ${timeAgo} minutes ago.`;
            setRatingNotification(message);

            setTimeout(() => setRatingNotification(null), 6000); // Hide after 6 seconds
        };

        useEffect(() => {
            const initialTimer = setTimeout(showRatingNotification, 6000); // Start slightly after sales notification
            const interval = setInterval(showRatingNotification, Math.random() * 15000 + 15000); // Every 15 to 30 seconds

            return () => {
                clearTimeout(initialTimer);
                clearInterval(interval);
            };
        }, []);

        if (!ratingNotification) return null;

        return (
            <div
                className="toast show align-items-center text-white bg-info border-0" // Using info color for ratings
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px', // Position on right
                    zIndex: 1050,
                    borderRadius: '5px',
                    padding: '10px 15px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
            >
                <div className="d-flex">
                    <div className="toast-body small fw-bold">
                        <i className="fas fa-star me-2 text-warning"></i> {/* Star icon for rating */}
                        {ratingNotification}
                    </div>
                </div>
            </div>
        );
    };
    
    // --- JSX Structure ---

    return (
        <div className="container-fluid p-0" style={{ scrollBehavior: "smooth" }}>
            
            {/* Sales Notification */}
            <SalesNotification />
            {/* Rating Notification */}
            <RatingNotification />

            {/* ======================================================
            1. Hero Section: Powerful Background and CTA
            ======================================================
            */}
            <section
                className="py-6 py-lg-7 text-white text-center"
                style={{
                    backgroundColor: COLORS.dark,
                    backgroundImage: "linear-gradient(135deg, #0f4c75 0%, #367c9c 100%)",
                }}
                data-aos="fade-down" // AOS animation for hero
            >
                <div className="container py-5">
                    <p className="lead text-uppercase fw-bold" style={{ letterSpacing: "2px", color: COLORS.accent }}>
                        {content.header.tagline}
                    </p>
                    <h1 className="display-3 fw-bolder mb-4">
                        {content.header.moto.split('—')[0]}<span style={{ color: COLORS.accent }}>{content.header.moto.split('—')[1]}</span>
                    </h1>
                    <p className="lead w-75 mx-auto mb-5 opacity-75">
                        Your one-stop AI + SaaS Ecosystem for **Branding, Legal, Marketing, and Automation**—run your entire business from chat or voice commands.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a 
                            href={`https://wa.me/${content.contact.phone.replace(/[^0-9]/g, '')}`} 
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-warning btn-lg fw-bold px-4 py-2 text-dark border-0"
                            style={{ borderRadius: "50px", boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)" }}
                            data-aos="zoom-in" data-aos-delay="500" // AOS for CTA button
                        >
                            <i className="fab fa-whatsapp me-2"></i> Free WhatsApp Demo
                        </a>
                        <button
                            className="btn btn-outline-light btn-lg fw-bold px-4 py-2"
                            style={{ borderRadius: "50px" }}
                            data-aos="zoom-in" data-aos-delay="600" // AOS for CTA button
                        >
                            🚀 Explore Pricing
                        </button>
                    </div>
                </div>
            </section>

            <hr/>

            {/* ======================================================
            2. About Us, Vision, Mission (Extended Content)
            ======================================================
            */}
            <section className="py-5 bg-white">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-5" data-aos="fade-up">🎯 Our Core Values</h2>
                    <div className="row">
                        {/* About Us */}
                        <FeatureIcon iconClass="fa-building" title={content.about.title}>
                            <p className="fw-bold">{content.about.desc}</p>
                            <p className="text-dark small mt-3">**{content.about.objective}** {content.about.objectiveDesc}</p>
                        </FeatureIcon>
                        
                        {/* Our Vision */}
                        <FeatureIcon iconClass="fa-eye" title={content.vision.title}>
                            {content.vision.desc}
                        </FeatureIcon>

                        {/* Our Mission */}
                        <FeatureIcon iconClass="fa-crosshairs" title={content.mission.title}>
                            <p className="fw-bold text-primary">{content.mission.slogan}</p>
                            {content.mission.desc}
                        </FeatureIcon>
                    </div>
                </div>
            </section>

            <hr/>
            
            {/* ======================================================
            3. Detailed Modules: Core Features (Explained)
            ======================================================
            */}
            <section className="py-5" style={{ backgroundColor: COLORS.light }}>
                <div className="container">
                    <h2 className="text-center display-5 fw-bold mb-5" data-aos="fade-up">⚙ Core Features & Services (12 Modules)</h2>
                    <p className="text-center lead mb-4 text-muted" data-aos="fade-up" data-aos-delay="100">All 12 modules are integrated into the Mind To Market™ platform for seamless business management.</p>
                    <div className="row g-4">
                        {content.features.map((module, index) => (
                            <ModuleCard
                                key={index}
                                icon={module.icon}
                                title={module.title}
                                description={module.description}
                                items={module.items}
                                color={module.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <hr/>

            {/* ======================================================
            4. Community & Growth Features
            ======================================================
            */}
             <section className="py-5 bg-primary text-white">
                <div className="container text-center" data-aos="fade-up">
                    <h2 className="display-5 fw-bold mb-4">💼 {content.community.title}</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                {content.community.items.map((item, index) => (
                                    <div key={index} className="col-md-4 mb-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <div className="d-flex align-items-center justify-content-start p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <i className="fas fa-star me-3 fs-5" style={{ color: COLORS.accent }}></i>
                                            <span className="text-start">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>

            {/* ======================================================
            5. Pricing Plans
            ======================================================
            */}
            <section id="pricing" className="container my-5">
                <h2 className="text-center display-5 fw-bold mb-5" data-aos="fade-up">💰 Pricing Plans</h2>
                <div className="row justify-content-center">
                    {content.pricing.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className={`card h-100 shadow-lg ${plan.isBest ? 'border-primary border-3' : 'border-0'}`}>
                                <div className={`card-header text-center ${plan.isBest ? 'bg-primary text-white' : 'bg-light'}`}>
                                    <h4 className="fw-bold mb-0">{plan.plan}</h4>
                                    {plan.isBest && <span className="badge bg-warning text-dark mt-1">MOST POPULAR</span>}
                                </div>
                                <div className="card-body text-center">
                                    <h1 className="display-4 fw-bold text-primary mb-3">{plan.price.split(' ')[0]}</h1>
                                    <p className="lead text-muted">{plan.price.split(' ').slice(1).join(' ')}</p>
                                    <hr />
                                    <p className="fw-bold text-dark">{plan.bestFor}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <button className={`btn btn-block ${plan.isBest ? 'btn-primary' : 'btn-outline-primary'} fw-bold`}>
                                        Select Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr/>

            {/* ======================================================
            6. Trusted By & Security Section
            ======================================================
            */}
            <section id="trusted-security" className="bg-light py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h3 className="text-dark fw-bold mb-3">🧾 Trusted By</h3>
                            <div className="d-flex flex-wrap" data-aos="fade-right" data-aos-delay="100">
                                {content.trustedBy.map((item, index) => (
                                    <span key={index} className="badge bg-primary text-white fs-6 m-1 p-2 shadow-sm">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h3 className="text-dark fw-bold mb-3">🔐 Security Standards</h3>
                            <ul className="list-unstyled" data-aos="fade-left" data-aos-delay="100">
                                {content.security.map((item, index) => (
                                    <li key={index} className="mb-1">
                                        <i className="fas fa-lock me-2 text-success"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>

            {/* ======================================================
            7. Footer / Contact & Legal Section
            ======================================================
            */}
            <footer className="bg-dark text-white pt-5 pb-3" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        {/* Contact Info */}
                        <div className="col-lg-4 mb-4">
                            <h5 className="fw-bold">📞 Contact Us</h5>
                            <p className="mb-1"><i className="fas fa-envelope me-2 text-warning"></i> Email: <a href={`mailto:${content.contact.email}`} className="text-white text-decoration-none">{content.contact.email}</a></p>
                            <p className="mb-1"><i className="fab fa-whatsapp me-2 text-warning"></i> Phone / WhatsApp: <a href={`https://wa.me/${content.contact.phone.replace(/[^0-9]/g, '')}`} className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">{content.contact.phone}</a></p>
                            <p className="mb-1"><i className="fas fa-globe me-2 text-warning"></i> Website: <a href={`http://${content.contact.website}`} className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">{content.contact.website}</a></p>
                            <p><i className="fas fa-map-marker-alt me-2 text-warning"></i> Head Office: {content.contact.headOffice}</p>
                        </div>

                        {/* Legal Notice */}
                        <div className="col-lg-8 mb-4">
                            <h5 className="fw-bold">⚖ {content.legal.title}</h5>
                            <small className="d-block text-muted">
                                <ul className="list-unstyled">
                                    {content.legal.notes.map((note, index) => (
                                        <li key={index} className="text-white-50">- {note}</li>
                                    ))}
                                </ul>
                            </small>
                        </div>
                    </div>
                    <hr className="bg-secondary" />
                    <div className="text-center pb-2">
                        <small>&copy; {new Date().getFullYear()} Mind To Market™. All rights reserved.</small>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MindToMarketPage;