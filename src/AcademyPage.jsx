import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AcademyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: false, mirror: false });
    window.scrollTo(0, 0);
  }, []);

  const openGmail = (e) => {
    // Try to open Gmail compose in desktop browsers, fallback to mailto
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=academy@indokona.com&su=Enrollment%20Enquiry&body=Hi%20Indokona%20Team,%0A%0AI%20want%20to%20know%20more%20about%20your%20courses.%0A%0ARegards,";
    // On mobile, let the OS choose default mail app
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      e.preventDefault();
      // Try opening Gmail; if pop blocked or unavailable user can use default mail
      window.location.href = gmailUrl;
      setTimeout(() => (window.location.href = "mailto:academy@indokona.com"), 800);
    }
    // otherwise normal anchor will open default mail app
  };

  return (
    <div style={{ background: "#f6f9ff", minHeight: "100vh" }}>
      <div className="container py-5">
        {/* HERO */}
        <section className="row align-items-center mb-5">
          <div className="col-lg-7" data-aos="fade-right">
            <h1 className="display-4 fw-bold text-primary">Indokona Idea to Empire Academy™</h1>
            <p className="lead text-muted">From Idea to Empire — Empowering the Next Generation of Indian Entrepreneurs</p>

            <p className="mt-4">
              <strong>Turn Your Idea into a Scalable Empire 🚀</strong>
            </p>
            <p>
              Join India’s most practical business transformation program — learn startup fundamentals, branding, automation, and revenue systems so you can launch, grow and sustain a profitable business.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#programs" className="btn btn-primary rounded-pill px-4 py-2">Enroll Now</a>
              <a href="#brochure" className="btn btn-outline-primary rounded-pill px-4 py-2">Download Brochure</a>
            </div>

            <div className="mt-4 small text-muted">
              <div className="mb-1">📞 Helpline: <a href="tel:+919625995155" className="text-decoration-none fw-bold">+91-96259-95155</a></div>
              <div>📧 Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=academy@indokona.com" onClick={openGmail} className="text-decoration-none fw-bold">academy@indokona.com</a></div>
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left">
            <div className="card shadow-lg rounded-4 p-4" style={{ background: "linear-gradient(135deg,#ffffff,#f3fbff)" }}>
              <h5 className="fw-bold">Why this program?</h5>
              <ul className="mb-0">
                <li>Corporate-level curriculum built for Indian entrepreneurs</li>
                <li>AI-driven tools & automation templates</li>
                <li>Done-for-you branding & DFY templates</li>
                <li>Lifetime mentorship & community</li>
              </ul>
              <div className="mt-3">
                <small className="text-muted">Trusted by professionals across India • Hybrid mode</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-5" data-aos="fade-up">
          <div className="card rounded-4 p-4 shadow-sm">
            <h3 className="fw-bold">🏛 About the Academy</h3>
            <p>
              Indokona Idea to Empire Academy™, powered by Indokona Credit Bazar Pvt. Ltd., is India’s corporate-level business transformation platform built to convert ideas into profitable and scalable empires.
            </p>

            <p>
              Our purpose is simple yet powerful: <em>“To transform every idea into a profitable and scalable business empire.”</em> We combine legal guidance, automation, branding, sales funnels and growth playbooks to convert learners into entrepreneurs.
            </p>

            <div className="row g-3 mt-3">
              <div className="col-md-4">
                <div className="p-3 rounded-3" style={{ background: "#fff" }}>
                  <strong>Parent Company</strong>
                  <div className="text-muted small">Indokona Credit Bazar Pvt. Ltd.</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-3 rounded-3" style={{ background: "#fff" }}>
                  <strong>Founded</strong>
                  <div className="text-muted small">2024 • CIN Registered • MSME Certified</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-3 rounded-3" style={{ background: "#fff" }}>
                  <strong>Headquarters</strong>
                  <div className="text-muted small">Faridabad, Haryana, India</div>
                </div>
              </div>
            </div>

            <hr />

            <h5 className="fw-semibold">Founder’s Message — Ruby Fatima</h5>
            <p className="fst-italic">
              “Every idea has the potential to become an empire — it just needs the right system and direction.”
            </p>

            <p>
              With expertise in Business Strategy, Legal Structuring and Automation, the Idea to Empire Framework™ is a practical blueprint that helps entrepreneurs launch, grow and monetize real brands. We focus on implementation — not just theory.
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-5">
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="card rounded-4 p-4 shadow-sm h-100">
                <h4 className="fw-bold">🎯 Our Mission</h4>
                <p>
                  To create <strong>One Million Certified Empire Builders™ by 2030</strong> — empowering India’s youth with practical business education so they can launch, automate and scale profitable brands.
                </p>
                <p>
                  We provide actionable mentorship, legal setup help, automation templates and sales funnels so learners can build working businesses during the program.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="80">
              <div className="card rounded-4 p-4 shadow-sm h-100">
                <h4 className="fw-bold">🌍 Our Vision</h4>
                <p>
                  To build India’s most trusted entrepreneurial ecosystem — where every individual can learn, launch and lead their own digital empire.
                </p>

                <p>
                  We believe in long-term impact. Our alumni network will be a living directory of entrepreneurs, freelancers and service providers who help each other scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PROGRAMS (expanded) */}
        <section id="programs" className="mb-5">
          <h3 className="fw-bold mb-4" data-aos="fade-up">🚀 Our Core Programs</h3>

          <div className="row g-4">
            {[
              {
                title: "Entrepreneurship & Business Launch Program",
                desc: "Idea validation, business planning, legal setup and a go-to-market roadmap. Learners build a real business during the program."
              },
              {
                title: "Digital Marketing & Branding Mastery",
                desc: "From personal branding to funnel creation — practical ad campaigns, organic growth strategies and creator monetization."
              },
              {
                title: "AI Tools & Automation Skill Program",
                desc: "Practical AI automations for lead-gen, invoices, content, and customer support — build systems that work 24x7."
              },
              {
                title: "Content Creation & Social Media Monetization",
                desc: "YouTube, Instagram & Shorts strategy, editing templates and a monetization playbook."
              },
              {
                title: "Startup & Freelance Mentorship",
                desc: "Discover freelancing pipelines, client funnels and recurring revenue models."
              },
              {
                title: "Certificate & Professional Courses",
                desc: "Accredited certifications, verification QR and portfolio-ready projects."
              }
            ].map((p, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={i * 80}>
                <div className="card h-100 rounded-4 p-3 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h6 className="fw-bold">{p.title}</h6>
                    <p className="text-muted small flex-grow-1">{p.desc}</p>
                    <div className="mt-3">
                      <button className="btn btn-sm btn-primary rounded-pill w-100">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4" data-aos="fade-up" data-aos-delay={300}>
            <h5 className="fw-semibold">🔑 Learning Outcomes</h5>
            <ul>
              <li>Build your own registered & branded business</li>
              <li>Become a Certified Business Creator & Empire Builder™</li>
              <li>Master automation, branding & client management</li>
              <li>Access lifetime mentorship & business community</li>
            </ul>
          </div>
        </section>

        {/* Deep-dive module list to increase scroll length */}
        <section className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold">🧭 Course Structure — Detailed Modules Snapshot</h4>
          <div className="mt-3">
            {[1,2,3,4,5,6,7,8,9,10].map((m) => (
              <div key={m} className="card rounded-3 p-3 mb-3 shadow-sm" data-aos="fade-right" data-aos-delay={m*30}>
                <h6 className="fw-bold mb-1">{m}. {[
                  "Foundation — From Idea to Vision",
                  "Registration — Business & Legal Setup",
                  "Brand Identity — Logo, Design & Digital Presence",
                  "Automation — Smart Tools & CRM Integration",
                  "Marketing — Lead Generation & Sales Funnels",
                  "Client Management — DFY Model & Retention",
                  "Certification — Branding & Authority",
                  "Ethics — Refund Policy & Professional Conduct",
                  "Growth — Networking & Expansion",
                  "Final Project — Brand Launch & Certification"
                ][m-1]}</h6>
                <p className="small text-muted mb-0">This module includes hands-on templates, sample documents and a checklist to ensure you complete the milestone.</p>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <h5 className="fw-semibold">🎓 Bonus Modules</h5>
            <p className="small text-muted">Leadership • Finance • Global Expansion • Investor Pitch Coaching</p>
          </div>
        </section>

        {/* Pricing table */}
        <section className="mb-5" data-aos="fade-up">
          <h3 className="fw-bold">💰 Course Fee & Structure</h3>

          <div className="table-responsive shadow-sm rounded-4 overflow-hidden mt-3">
            <table className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th>Plan</th>
                  <th>Duration</th>
                  <th>Mode</th>
                  <th>Fee (₹)</th>
                  <th>Highlights</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basic Plan","1 Month","Online","4,999","Foundation + Branding"],
                  ["Pro Plan","3 Months","Hybrid","9,999","Full Course + Mentorship"],
                  ["Elite Plan","6 Months","Advanced","14,999","Certification + Growth + DFY Setup"],
                  ["Starter","1 Month","Online","15,999","Idea-to-Brand + Templates + Certificate"],
                  ["Professional","3 Months","Hybrid","45,999","Marketing + Setup + Authorization Letter"],
                  ["Empire Builder","6 Months","Advanced","79,999","Full DFY System + ID Card + Lifetime Mentorship"]
                ].map((row, i) => (
                  <tr key={i} data-aos="fade-left" data-aos-delay={i*60}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 small text-muted">Payment Options: UPI / Bank Transfer / EMI • 100% Refund Guarantee (as per course completion policy)</p>
        </section>

        {/* Success Path */}
        <section className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold">🚀 Success Path (Your Empire-Building Journey)</h4>
          <ol>
            <li>Learn the Framework — practical lessons & hands-on tasks</li>
            <li>Register Your Brand — legal & tax readiness</li>
            <li>Build Digital Presence — website, socials & content</li>
            <li>Automate & Scale — AI tools, CRM & ads</li>
            <li>Get Certified as an Empire Builder™ — launch your brand</li>
          </ol>

          <p className="text-muted">Each step contains milestone assignments, checklists and mentor reviews.</p>
        </section>

        {/* Testimonials + Social Proof */}
        <section className="mb-5" data-aos="fade-up">
          <h3 className="fw-bold">💬 Student Testimonials</h3>
          <div className="row g-4 mt-3">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card rounded-4 p-4 shadow-sm">
                <p className="mb-1">“Indokona helped me build my brand in 60 days — I didn’t just learn business, I became one.”</p>
                <small className="text-muted">— Priya Sharma, Certified Empire Builder™</small>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="card rounded-4 p-4 shadow-sm">
                <p className="mb-1">“This is not just a course; it’s a complete business creation journey.”</p>
                <small className="text-muted">— Amit Patel, Entrepreneur & Graduate</small>
              </div>
            </div>
          </div>

          <div className="mt-4" data-aos="fade-up">
            <h6 className="fw-semibold">More Success Stories</h6>
            <p className="small text-muted">Graduates have launched service startups, e-commerce brands, and digital agencies after completing the program.</p>
          </div>
        </section>

        {/* Legal, Partnerships & Contact */}
        <section className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold">⚖ Legal & Accreditation</h4>
          <p>
            Indokona Idea to Empire Academy™ operates under Indokona Credit Bazar Pvt. Ltd., complying with corporate and educational standards. All certificates are digitally issued and verifiable via QR.
          </p>

          <h5 className="mt-3">🤝 Partnerships & Collaborations</h5>
          <p className="small text-muted">We work with entrepreneurs, startups and educational institutions to expand our mission — contact us at <a href="mailto:academy@indokona.com">academy@indokona.com</a>.</p>

          <h5 className="mt-3">📞 Contact & Office</h5>
          <p className="mb-1">WhatsApp / Call: <a href="tel:+919625995155">+91 96259 95155</a></p>
          <p className="mb-0">Website: <a href="https://www.indokona.com" target="_blank" rel="noreferrer">www.indokona.com</a></p>
        </section>

        {/* Brochure CTA */}
        <section id="brochure" className="mb-5" data-aos="zoom-in">
          <div className="card rounded-4 p-4 shadow-lg text-center">
            <h4 className="fw-bold">Ready to Build Your Empire?</h4>
            <p className="mb-3">Download the course brochure or enroll now — limited seats in hybrid cohorts.</p>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-primary rounded-pill" href="/brochure.pdf">Download Brochure</a>
              <a className="btn btn-outline-primary rounded-pill" href="#programs">Enroll Now</a>
            </div>
          </div>
        </section>

        {/* Long extra content to increase scroll length (articles, tips, mini-guides) */}
        <section className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold">📚 Free Mini-Guides & Practical Tips</h4>
          {[0,1,2,3,4,5,6,7,8,9].map((i) => (
            <article key={i} className="card mb-3 p-3 shadow-sm" data-aos="fade-right" data-aos-delay={i*60}>
              <h6 className="fw-bold">Mini Guide {i+1}: {[
                "Validating Your Idea Fast",
                "Low-Cost Brand Launch Checklist",
                "First 30 Days Marketing Plan",
                "How to Set Up Easy Automation",
                "Building a Portfolio that Converts",
                "Selling Your First Service Offer",
                "Getting Your First 10 Customers",
                "Managing Cashflow for Small Startups",
                "Hiring Freelancers Smartly",
                "Scaling from 0 to 5L MRR"
              ][i]}</h6>
              <p className="small text-muted mb-0">{"Short practical action steps and checklists to apply immediately — repeated with varying actionable advice to lengthen the page for scrolling and reading."}</p>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className="py-4 mt-5" data-aos="fade-up">
          <div className="text-center small text-muted">
            <div>© {new Date().getFullYear()} Indokona Idea to Empire Academy™ | Powered by Indokona Credit Bazar Pvt. Ltd.</div>
            <div>Tagline: “Learn. Build. Lead. — Transform Your Idea into an Empire with Indokona Academy.”</div>
          </div>
        </footer>
      </div>

      {/* small styles */}
      <style jsx>{`
        .card { border-radius: 12px !important; }
        .lead { font-size: 1.05rem; }
        a.btn { text-decoration: none; }
      `}</style>
    </div>
  );
};

export default AcademyPage;