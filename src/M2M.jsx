import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import {
    Zap, Bot, MessageSquare, Globe, Cpu, Users, Layers, Shield, TrendingUp, Handshake, BookOpen,
    IndianRupee, Rocket, Briefcase, Gem, Landmark, Lightbulb, CheckCircle, XCircle,
    Code, Trophy, Settings, BarChart3, Cloud, Banknote, ShoppingCart, Star
} from 'lucide-react';

// --- Configuration and Data (Updated for English) ---

const APP_NAME = "MIND TO MARKET™";
// SLOGAN updated to clearly explain the 'complete solution'
const SLOGAN = "Complete AI Ecosystem for Business Automation and Global Scaling";
const KEY_COMMAND = "“Click to Build. Chat to Run. Voice to Command. WhatsApp to Control.”";
const POWERED_BY = "Powered by: Indokona Credit Bazar Pvt. Ltd.";

// Core Value Propositions 
const coreValues = [
    { icon: Bot, title: "100% AI Ecosystem" },
    { icon: MessageSquare, title: "WhatsApp & Voice Controlled" },
    { icon: Briefcase, title: "End-to-End Legal & Compliance" },
    { icon: IndianRupee, title: "Built-in Fintech & Payments" },
    { icon: Globe, title: "Global Expansion Ready" },
];

// Master Blueprint Sections (The 13 Pillars of M2M) - Titles are already mostly technical/English
const masterBlueprintSections = [
    { id: 'tech', title: "1. CORE TECHNOLOGY ECOSYSTEM", icon: Cpu, items: [
        "Node.js + Python (FastAPI) microservices",
        "MongoDB + PostgreSQL hybrid data system",
        "Redis caching + RabbitMQ queue engine",
        "Secure Cloud Infra (AWS / Google Cloud / Azure)",
        "Dockerized deployments via Kubernetes",
        "React + Next.js + Tailwind CSS (PWA ready)",
        "AI Voice Command Interface (speech-to-action)",
        "WhatsApp, Telegram & SMS control panel",
    ] },
    { id: 'legal', title: "2. COMPLETE BRAND CREATION SUITE", icon: Briefcase, items: [
        "Company Formation (Pvt Ltd / LLP / MSME / NGO)",
        "ISO Certification / Trademark / Import Export Code",
        "Legal Drafting (MOA, AOA, Agreement, NDA)",
        "DSC & DIN Application + GST, PAN & TAN Setup",
        "ROC Filing & Annual Compliance + CA/CS Support",
        "Virtual CFO, HR & Payroll Automation",
    ] },
    { id: 'infra', title: "3. DIGITAL INFRASTRUCTURE & SOFTWARE DEVELOPMENT", icon: Code, items: [
        "Website / Landing Page / Funnel Builder",
        "Custom Web Portal for Retailer/Distributor/White Label",
        "Android + iOS App Development (Flutter / React Native)",
        "ERP / CRM / LMS / HRMS / Accounting Software (Modular)",
        "API & Payment Gateway Integrations",
        "Cloud Storage, Hosting & CDN Setup",
        "Cyber Security, SSL, Firewall & Backup System",
    ] },
    { id: 'design', title: "4. DESIGN & BRANDING STUDIO", icon: Gem, items: [
        "Logo, Mascot & Complete Brand Kit Creation",
        "Business Cards, Brochures, Certificates, Banners",
        "Social Media Creative Templates",
        "Ad Posters, Product Mockups, UI Screens",
        "AI Video Ads, Voiceover & Animated Reels",
    ] },
    { id: 'marketing', title: "5. DIGITAL MARKETING & PROMOTION ENGINE", icon: TrendingUp, items: [
        "SEO + SEM + Social Media Marketing",
        "AI Content Generator (Text + Video + Voice)",
        "YouTube / Facebook / Instagram / Google Ads Automation",
        "Email + WhatsApp + SMS Campaigns (End-to-End)",
        "Influencer & Affiliate Marketing System",
        "AI-driven Funnel Optimizer (Lead → Conversion tracking)",
    ] },
    { id: 'bos', title: "6. BUSINESS OPERATING SYSTEM (BOS)", icon: Settings, items: [
        "Smart Dashboard with 360° Analytics",
        "CRM, HRM, Inventory, Accounting & Customer Support",
        "Task Manager + Team Collaboration Chat",
        "WhatsApp Command Panel (Approve, Reject, Notify by Voice)",
        "Auto Performance Tracker & Business Health Report",
        "AI Virtual Assistant for each department",
    ] },
    { id: 'awards', title: "7. CLIENT SUCCESS & AWARD MANAGEMENT", icon: Trophy, items: [
        "National / International Award Nomination Handling",
        "ISO, Startup India & MSME Recognition",
        "Digital PR, Media Coverage & Verification Press",
        "Brand Wikipedia / Google Knowledge Panel Setup",
        "Public Listing Assistance (if eligible)",
        "Annual Maintenance & Legal Retainer Plan",
    ] },
    { id: 'fintech', title: "8. FINTECH & PAYMENT SOLUTIONS", icon: Banknote, items: [
        "Multi-Gateway Payments (Razorpay, Cashfree, Paytm, Stripe)",
        "Subscription Billing & Auto Invoice",
        "Credit Card / Loan / Insurance / Investment Partners",
        "E-wallet & Virtual Card API",
        "Business Banking Assistance (CA-certified Account setup)",
    ] },
    { id: 'compliance', title: "9. CLOUD + SECURITY + DATA COMPLIANCE", icon: Shield, items: [
        "256-bit SSL + End-to-End Encryption",
        "Data Hosting in India (as per RBI & MeitY norms)",
        "GDPR / DPA / CCPA Compliant Framework",
        "Two-Factor Authentication (2FA)",
        "ISO 27001 Data Security Compatible",
        "Meta Ads, Google, YouTube, Privacy & Cookie Policies Included",
    ] },
    { id: 'support', title: "10. AMC, SUPPORT & TRAINING SUITE", icon: BookOpen, items: [
        "24×7 Tech Support (Chat + WhatsApp + Voice)",
        "AMC (Annual Maintenance Contract)",
        "Cloud Backup + Regular Updates",
        "Training Webinars & LMS Portal for Clients",
        "Dedicated Business Growth Manager",
    ] },
    { id: 'partner', title: "11. PARTNER, FRANCHISE & WHITE LABEL SYSTEM", icon: Users, items: [
        "Multi-Tier Reseller Portal (Retailer / Distributor / Master)",
        "Whitelabel SaaS + Custom Branding",
        "Partner Commission Dashboard",
        "Referral & Affiliate Income System",
        "Global API Integration (Plug-and-Play for Partners)",
    ] },
    { id: 'trust', title: "12. TRUST & CREDIBILITY SEALS", icon: CheckCircle, items: [
        "London Book of World Records Certification",
        "International Achievers Award 2024",
        "National Achiever Award 2024",
        "MSME Registered | ISO Certified | DPIIT Verified",
        "ROC Registered Company under MCA (Govt. of India)",
    ] },
    { id: 'global', title: "13. GLOBAL EXPANSION ROADMAP", icon: Globe, items: [
        "Multi-language Interface (Hindi / English / Arabic / Spanish)",
        "Global Payment Gateway Integration",
        "Cloud CDN across 20+ countries",
        "AI Chat & Voice agents localized by region",
        "24x7 International Support System",
    ] },
];

// Pricing Data
const pricingPlans = [
    { name: "STARTUP PLAN", price: "₹10,000", period: "/ Month", tag: "🚀", color: "text-indigo-400", features: ["Single User Access", "All 13 Ecosystem Pillars Unlocked", "WhatsApp + Voice Control", "CRM + Marketing + Branding Tools", "1000 Email/SMS Credits Monthly"] },
    { name: "AGENCY PLAN", price: "₹20,000", period: "/ Month", tag: "🏢", color: "text-green-400", features: [
        "Team Access (Up to 10 Members)", 
        "Client Sub-Accounts (Up to 10)", 
        "Unlimited Email/SMS Credits", 
        "Priority WhatsApp Support"
    ] }, 
    { name: "ENTERPRISE PLAN", price: "₹30,000", period: "/ Month", tag: "🌐", color: "text-yellow-400", features: [
        "Unlimited Team & Sub-Accounts", 
        "White Label Branding (Your Logo)", 
        "Full AI Customization", 
        "API + Webhook Access", 
        "Custom Domain & Storage", 
        "24×7 VIP Technical Support", 
        "Early Access to Beta AI Tools"
    ] },
];

// Comparison Data
const comparisonData = [
    { feature: "Full AI Branding + Legal Compliance", m2m: true, others: [false, false, false, false, true] },
    { feature: "WhatsApp Voice Command BOS Control", m2m: true, others: [false, false, false, false, false] },
    { feature: "Built-in Fintech & E-wallet Solutions", m2m: true, others: [false, false, false, false, false] },
    { feature: "Award Nomination & PR Management", m2m: true, others: [false, false, false, false, false] },
    { feature: "Full Social Media Auto Post + Ads", m2m: true, others: [false, false, true, true, true] },
    { feature: "CRM + HR + Hiring + Billing + Inventory", m2m: true, others: [true, false, true, true, false] },
    { feature: "E-Learning + Certificate System", m2m: true, others: [false, true, false, false, false] },
    { feature: "Multi-Tier Reseller & White Label System", m2m: true, others: [false, false, false, false, false] },
    { feature: "Global Compliance (GDPR, CCPA, MeitY)", m2m: true, others: [false, false, false, false, false] },
];
const competitors = ["GoHighLevel", "Systeme.io", "HubSpot", "Zoho", "Canva"];

// --- Data for Social Proof Notifications (Fake Purchases) - 28 entries ---
const notifications = [
    { name: "Priya S.", plan: "STARTUP PLAN", location: "West Bengal", time: 3, color: "bg-indigo-600" },
    { name: "Rajesh K.", plan: "AGENCY PLAN", location: "Kerala", time: 5, color: "bg-green-600" },
    { name: "Fatima M.", plan: "ENTERPRISE PLAN", location: "Delhi NCR", time: 8, color: "bg-yellow-600" },
    { name: "Suresh B.", plan: "STARTUP PLAN", location: "Punjab", time: 10, color: "bg-indigo-600" },
    { name: "Vikas J.", plan: "AGENCY PLAN", location: "Tamil Nadu", time: 6, color: "bg-green-600" },
    { name: "Zoya H.", plan: "ENTERPRISE PLAN", location: "Gujarat", time: 12, color: "bg-yellow-600" },
    { name: "Alok V.", plan: "STARTUP PLAN", location: "Telangana", time: 4, color: "bg-indigo-600" },
    { name: "Neha L.", plan: "AGENCY PLAN", location: "Uttar Pradesh", time: 7, color: "bg-green-600" },
    { name: "Ramesh P.", plan: "STARTUP PLAN", location: "Maharashtra", time: 9, color: "bg-indigo-600" },
    { name: "Aisha T.", plan: "AGENCY PLAN", location: "Haryana", time: 11, color: "bg-green-600" },
    { name: "David X.", plan: "ENTERPRISE PLAN", location: "Goa", time: 2, color: "bg-yellow-600" },
    { name: "Kavita R.", plan: "STARTUP PLAN", location: "Bihar", time: 15, color: "bg-indigo-600" },
    { name: "Imran Q.", plan: "AGENCY PLAN", location: "Jammu & Kashmir", time: 1, color: "bg-green-600" },
    { name: "Smita W.", plan: "STARTUP PLAN", location: "Rajasthan", time: 13, color: "bg-indigo-600" },
    { name: "Rakesh D.", plan: "AGENCY PLAN", location: "Madhya Pradesh", time: 16, color: "bg-green-600" },
    { name: "Sangeeta B.", plan: "ENTERPRISE PLAN", location: "Assam", time: 18, color: "bg-yellow-600" },
    { name: "Manoj C.", plan: "STARTUP PLAN", location: "Odisha", time: 20, color: "bg-indigo-600" },
    { name: "Geetanjali P.", plan: "AGENCY PLAN", location: "Himachal Pradesh", time: 22, color: "bg-green-600" },
    { name: "Abdul N.", plan: "STARTUP PLAN", location: "Uttarakhand", time: 14, color: "bg-indigo-600" },
    { name: "Lisa J.", plan: "ENTERPRISE PLAN", location: "Chandigarh", time: 17, color: "bg-yellow-600" },
    { name: "Karan V.", plan: "AGENCY PLAN", location: "Andhra Pradesh", time: 19, color: "bg-green-600" },
    { name: "Deepika M.", plan: "STARTUP PLAN", location: "Jharkhand", time: 21, color: "bg-indigo-600" },
    { name: "Harish L.", plan: "ENTERPRISE PLAN", location: "Karnataka", time: 23, color: "bg-yellow-600" },
    { name: "Jenny Z.", plan: "STARTUP PLAN", location: "Mizoram", time: 25, color: "bg-indigo-600" },
    { name: "Balaji S.", plan: "AGENCY PLAN", location: "Puducherry", time: 27, color: "bg-green-600" },
    { name: "Meena H.", plan: "STARTUP PLAN", location: "Chhattisgarh", time: 29, color: "bg-indigo-600" },
    { name: "Chris W.", plan: "ENTERPRISE PLAN", location: "Sikkim", time: 24, color: "bg-yellow-600" },
    { name: "Sandeep V.", plan: "AGENCY PLAN", location: "Tripura", time: 26, color: "bg-green-600" },
];

// --- New Data for Fake Rating Notifications ---
const ratingNotifications = [
    { name: "Sanjay M.", rating: 5, location: "Mumbai", review: "Life-changing ecosystem! 🔥", time: 3, color: "bg-yellow-600" },
    { name: "Pooja B.", rating: 5, location: "Bangalore", review: "Automation is 100% efficient!", time: 5, color: "bg-yellow-600" },
    { name: "Ravi G.", rating: 5, location: "Hyderabad", review: "Best BOS for enterprise growth.", time: 8, color: "bg-yellow-600" },
    { name: "Shalini K.", rating: 5, location: "Kolkata", review: "Legal and tech, all in one. Amazing!", time: 10, color: "bg-yellow-600" },
    { name: "Arjun L.", rating: 5, location: "Pune", review: "Voice command feature is a game changer.", time: 6, color: "bg-yellow-600" },
    { name: "Megha D.", rating: 5, location: "Ahmedabad", review: "Global expansion is now easy. 5 Stars!", time: 12, color: "bg-yellow-600" },
    { name: "Gopal V.", rating: 5, location: "Chennai", review: "Fintech integration works flawlessly.", time: 4, color: "bg-yellow-600" },
    { name: "Tanya H.", rating: 5, location: "Jaipur", review: "Great support and training.", time: 7, color: "bg-yellow-600" },
    { name: "Nikhil P.", rating: 5, location: "Surat", review: "Affordable and powerful.", time: 9, color: "bg-yellow-600" },
    { name: "Anjali S.", rating: 5, location: "Lucknow", review: "My business scaled instantly!", time: 11, color: "bg-yellow-600" },
];


// --- Utility Components ---

// Star rating renderer
const StarRating = ({ rating, size = 'w-4 h-4' }) => (
    <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <Star 
                key={i} 
                className={`${size} fill-yellow-400 text-yellow-400`} // FIX 1: Template literals for className
            />
        ))}
    </div>
);


const Button = ({ children, primary = false, className = '' }) => (
    <a href="#pricing" className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-[1.03] ${primary ? 'bg-indigo-600 text-white hover:bg-indigo-700 ring-4 ring-indigo-400/50' : 'bg-green-400 text-gray-900 hover:bg-green-500 ring-4 ring-green-400/50'} ${className}`}>
        {children}
    </a>
);

const FeatureCard = ({ title, items, icon: Icon, isPrimary = false, id }) => (
    <div id={id} className={`bg-gray-800 p-6 rounded-2xl shadow-2xl transition duration-500 ease-in-out hover:bg-gray-700/50 border ${isPrimary ? 'border-green-700/80' : 'border-gray-700'} flex flex-col h-full`}>
        <div className={`flex items-center mb-4 ${isPrimary ? 'text-green-400' : 'text-indigo-400'}`}>
            <Icon className="w-7 h-7 mr-3" />
            <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        </div>
        <ul className="space-y-3 text-gray-300 text-sm flex-grow">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${isPrimary ? 'text-green-500' : 'text-indigo-500'}`} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

// --- 1. Social Proof Notification (Left) ---
const SocialProofNotification = () => {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const showNextNotification = () => {
            const nextNotification = notifications[index];
            setCurrentNotification(nextNotification);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 4000); 

            setIndex((prevIndex) => (prevIndex + 1) % notifications.length);
        };

        const initialTimer = setTimeout(() => {
            showNextNotification();
            
            const intervalId = setInterval(showNextNotification, 7000); 

            return () => clearInterval(intervalId);
        }, 3000);

        return () => clearTimeout(initialTimer);
    }, [index]);


    if (!currentNotification) {
        return null;
    }

    const { name, plan, location, time, color } = currentNotification;

    return (
        <div 
            className={`fixed bottom-4 left-4 z-[100] transition-all duration-700 ease-in-out transform 
                ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
                max-w-xs w-full`}
        >
            <div className={`bg-gray-700 p-4 rounded-xl shadow-2xl border-l-4 ${color} flex items-center space-x-3 backdrop-blur-sm bg-opacity-95`}>
                <ShoppingCart className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                    <p className="text-sm font-bold text-white leading-snug">
                        <span className="text-yellow-300">{name}</span> just purchased the <span className="text-green-400">{plan}</span>.
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                        From: *{location}* ({time} minutes ago)
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 2. New Fake Rating Notification (Right) ---
const FakeRatingNotification = () => {
    const [currentRating, setCurrentRating] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Function to show the next rating notification
        const showNextRating = () => {
            const nextRating = ratingNotifications[index];
            setCurrentRating(nextRating);
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 4000); 

            // Move to the next index, cycling back to 0
            setIndex((prevIndex) => (prevIndex + 1) % ratingNotifications.length);
        };

        // Start cycling after a slightly different initial delay to offset the left popup
        const initialTimer = setTimeout(() => {
            showNextRating();
            
            // Set up the main interval (7 seconds cycle time)
            const intervalId = setInterval(showNextRating, 7000); 

            return () => clearInterval(intervalId);
        }, 5000); // 5-second initial delay

        return () => clearTimeout(initialTimer);
    }, [index]);


    if (!currentRating) {
        return null;
    }

    const { name, rating, location, review, time } = currentRating;

    return (
        <div 
            className={`fixed bottom-4 right-4 z-[100] transition-all duration-700 ease-in-out transform 
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
                max-w-xs w-full`}
        >
            <div className="bg-gray-700 p-4 rounded-xl shadow-2xl border-r-4 border-yellow-500 flex items-start space-x-3 backdrop-blur-sm bg-opacity-95">
                <StarRating rating={rating} size="w-5 h-5" />
                <div>
                    <p className="text-sm font-semibold text-white leading-snug">
                        *5 Star Review* by <span className="text-yellow-300">{name}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 italic">
                        "{review}"
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">
                        From: *{location}* ({time} minutes ago)
                    </p>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---

const App2 = () => {
    // Component for Navigation Bar
    const NavBar = () => (
        <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-extrabold tracking-widest text-white">
                    <span className="text-indigo-500">MIND</span> <span className="text-green-400">TO</span> MARKET™
                </div>
                <nav className="hidden md:flex space-x-6 text-gray-300 font-medium">
                    <a href="#ecosystem" className="hover:text-green-400 transition duration-150">Ecosystem</a>
                    <a href="#pricing" className="hover:text-green-400 transition duration-150">Pricing</a>
                    <a href="#compare" className="hover:text-green-400 transition duration-150">Compare</a>
                </nav>
                <Button primary={false} className="hidden md:flex">Get Started Now <Zap className="w-4 h-4 ml-2" /></Button>
            </div>
        </header>
    );

    // Component for Hero Section
    const HeroSection = () => (
        <section className="relative pt-20 pb-28 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-indigo-600/20 text-indigo-400 rounded-full border border-indigo-600/50 animate-pulse">
                    <span className="mr-2 text-green-400">🧠</span> {SLOGAN}
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-6 text-white tracking-tighter">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400 pb-2">AI + Automation</span>
                    <span className="block text-4xl md:text-5xl font-semibold mt-4 text-gray-200">Harnessing the power of AI to take your business from *Idea to Global Growth*.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 font-medium text-gray-400 max-w-4xl mx-auto">
                    {POWERED_BY}
                </p>
                <p className="text-2xl md:text-3xl font-bold mb-12 text-yellow-300 bg-gray-800/70 p-4 rounded-xl max-w-3xl mx-auto border border-yellow-500/50 shadow-xl">
                    {KEY_COMMAND}
                </p>
                <div className="flex justify-center space-x-4">
                    <Button primary={true}>Start Your Free Trial <Rocket className="w-5 h-5 ml-2" /></Button>
                    <Button primary={false} className="bg-gray-700 text-white hover:bg-gray-600 ring-4 ring-gray-600/50">Watch Master Demo</Button>
                </div>
            </div>
            {/* Background elements for visual effect */}
            <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
                    <defs>
                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(79, 70, 229)", stopOpacity: 0.8}} />
                            <stop offset="100%" style={{stopColor: "rgb(52, 211, 153)", stopOpacity: 0.8}} />
                        </linearGradient>
                    </defs>
                    <path d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,149.3C840,139,960,149,1080,133.3C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="url(#g1)"></path>
                </svg>
            </div>
        </section>
    );

    // Component for Vision & Core Values (Simplified to highlight new focus)
    const VisionAndCoreValues = () => (
        <section className="py-16 bg-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-10">💎 Core Value Proposition (Complete Ecosystem)</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {coreValues.map((value, index) => (
                        <div key={index} className="p-5 bg-gray-800 rounded-xl border border-green-600/50 shadow-xl transition transform hover:scale-[1.05] hover:shadow-green-500/30">
                            <value.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                            <p className="text-lg font-semibold text-white">{value.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );


    // Component for Master Blueprint Sections
    const EcosystemSection = () => (
        <section id="ecosystem" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-400">MIND TO MARKET™ Ecosystem</span> — 13 Pillars of Total Business Automation
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A fully integrated *AI-Powered* system that handles everything from your business *Idea to Global Scale*.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {masterBlueprintSections.map((section, index) => (
                        <FeatureCard
                            key={index}
                            id={section.id}
                            title={section.title}
                            items={section.items}
                            icon={section.icon}
                            isPrimary={index === 0 || index === 5 || index === 8} // Highlight key sections like Tech, BOS, Compliance
                        />
                    ))}
                </div>
            </div>
        </section>
    );

    // Component for Pricing Plans
    const PricingSection = () => (
        <section id="pricing" className="py-24 bg-gray-800 border-t border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <IndianRupee className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                    <h2 className="text-5xl font-extrabold text-white mb-4">💰 PRICING PLANS</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose Your Power Level — *All 13 Ecosystem Pillars* are unlocked in every plan.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`p-8 rounded-3xl shadow-2xl transition transform hover:scale-[1.03] ${index === 1 ? 'bg-indigo-900 border-4 border-green-500' : 'bg-gray-900 border-2 border-gray-700'}`}>
                            <div className="text-center">
                                <p className={`text-5xl font-extrabold mb-3 ${plan.color}`}>{plan.tag}</p>
                                <h3 className="text-3xl font-extrabold text-white mb-2">{plan.name}</h3>
                                <p className="text-4xl font-bold text-white my-6">
                                    <span className="text-5xl font-extrabold">{plan.price}</span>
                                    <span className="text-gray-400 text-xl font-normal">{plan.period}</span>
                                </p>
                            </div>
                            <ul className="space-y-4 text-gray-300 mb-10 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-lg">
                                        <CheckCircle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${index === 1 ? 'text-green-400' : 'text-indigo-400'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button primary={index === 1} className="w-full">
                                {index === 1 ? 'Go Agency (Recommended)' : 'Choose Plan'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // Component for Comparison Table
    const ComparisonSection = () => (
        <section id="compare" className="py-20 bg-gray-900 border-t border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <BarChart3 className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                    <h2 className="text-4xl font-extrabold text-white mb-4">🏆 Why MIND TO MARKET™ Outperforms Everyone?</h2>
                    <p className="text-xl text-gray-300">Compare this fully *AI-Powered* Business OS with any tool available in the market.</p>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/80 sticky top-0">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider min-w-[300px]">
                                    Key Feature (M2M Focus)
                                </th>
                                <th scope="col" className="px-6 py-4 text-center text-sm font-extrabold text-green-400 uppercase tracking-wider">
                                    M2M
                                </th>
                                {competitors.map((comp, index) => (
                                    <th key={index} scope="col" className="px-6 py-4 text-center text-sm font-medium text-gray-400 uppercase tracking-wider min-w-[120px]">
                                        {comp}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-700 bg-gray-900">
                            {comparisonData.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-800 transition duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{row.feature}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                                    </td>
                                    {row.others.map((hasFeature, colIndex) => (
                                        <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-center">
                                            {hasFeature ? (
                                                <CheckCircle className="w-5 h-5 mx-auto text-indigo-500" />
                                            ) : (
                                                <XCircle className="w-5 h-5 mx-auto text-red-500 opacity-50" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );

    // Component for Final Verdict and CTA
    const FinalCTA = () => (
        <section className="py-20 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Handshake className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-4xl font-extrabold text-white mb-4">
                    The Only Tool You'll Ever Need.
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Stop paying for 10+ disconnected tools. Consolidate your entire business onto one AI-driven, WhatsApp-controlled platform.
                </p>
                <Button primary={true} className="w-full sm:w-auto">
                    🚀 Launch Your Business with M2M Today
                </Button>
            </div>
        </section>
    );

    const Footer = () => (
        <footer className="bg-gray-900 py-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} {APP_NAME}. {POWERED_BY}
                </p>
                <p className="mt-2 space-x-4">
                    <a href="#compliance" className="hover:text-white transition">Privacy Policy</a>
                    <span className="text-gray-700">|</span>
                    <a href="#compliance" className="hover:text-white transition">Terms of Service</a>
                </p>
                <p className="mt-2 text-xs text-red-400">
                    *Compliance Note: All WhatsApp communications adhere strictly to Meta's Business and Commerce Policy guidelines.
                </p>
            </div>
        </footer>
    );


    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <NavBar />
            <main>
                <HeroSection />
                <VisionAndCoreValues />
                <EcosystemSection />
                <PricingSection />
                <ComparisonSection />
                <FinalCTA />
            </main>
            <Footer />
            {/* FIX 3: Integrated notifications into the main component return */}
            <SocialProofNotification />
            <FakeRatingNotification />
        </div>
    );
};

export default App2;