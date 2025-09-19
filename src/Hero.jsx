import { useState, useEffect } from "react"; 
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";

// ✅ AOS
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Images
import img from "./assets/img.png";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import Footer from "./Footer";

export default function Hero() {
  const [Data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://indokonabackend-1.onrender.com/api/hero/"
      );
      setData(response.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getdata();
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        className="d-flex justify-content-center align-items-center vh-100 text-white"
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e3799)",
        }}
      >
        <div className="text-center" data-aos="zoom-in">
          {Data.length > 0 && (
            <>
              <div className="mb-4" data-aos="fade-down">
                <img
                  src={Data[0].image}
                  alt={Data[0].name}
                  className="rounded-circle border border-4 border-warning"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    boxShadow: "0 0 40px rgba(241,196,15,0.9)",
                  }}
                />
              </div>

              <h1 className="fw-bold display-4">
                {Data[0].name}
                <span style={{ color: "#f1c40f" }}> FinTech</span>
              </h1>

              <p className="fs-4 fst-italic mt-3 text-warning">
                {Data[0].tagline}
              </p>
              <p className="fs-6 text-light mb-4">{Data[0].supportline}</p>

              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {["Suite", "Fintech", "SAAS"].map((btn, i) => (
                  <a
                    key={i}
                    href="/services"
                    className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 20px rgba(241,196,15,0.9)")
                    }
                    onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                  >
                    {btn}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ✅ About Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <img src={img} alt="About" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3 text-primary">About Us</h2>
              <p className="text-muted fs-5">
                Established in 2014, <b>Indokona Credit Bazar Pvt. Ltd.</b> is a
                registered technology company building a next-gen fintech
                ecosystem. We empower businesses, startups, and entrepreneurs to
                leverage automation and AI for faster growth.
              </p>
              <p className="text-muted">
                Our journey started with a vision to make financial processes
                more transparent, efficient, and reliable.
              </p>
              <a
                href="/about"
                className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Technology Ecosystem */}
      <div className="container my-5">
        <div className="row align-items-center flex-column flex-lg-row">
          <div className="col-lg-6" data-aos="fade-up-right">
            <h2 className="fw-bold mb-3 text-primary">⿣ Our Technology Ecosystem</h2>
            <ul className="text-muted fs-5">
              <li>⚡ Indokona Suite – Automation & Marketing Tools</li>
              <li>🌐 Indokona Fintech – SaaS Portals & APIs</li>
              <li>🤖 Indokona SaaS – AI Chatbots & Funnels</li>
            </ul>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-up-left">
            <img src={img3} alt="Tech" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* ✅ Key Features */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-4 text-primary">
              ⿤ Key Features & Innovations
            </h2>
            <ul className="list-group list-group-flush fs-5 shadow-sm">
              <li className="list-group-item">🤖 AI-powered Chatbots</li>
              <li className="list-group-item">📈 Automated Lead Funnels</li>
              <li className="list-group-item">🖥 Smart CRM Dashboard</li>
              <li className="list-group-item">🔗 Digital Onboarding APIs</li>
              <li className="list-group-item">🛠 Partner & Retailer Portals</li>
              <li className="list-group-item">📊 Real-time Analytics</li>
              <li className="list-group-item">📝 Auto-generated Certificates</li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <img src={img3} alt="Features" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* ✅ Partner Opportunities */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <h2 className="fw-bold mb-3 text-primary">Partner Opportunities</h2>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">🤝 White Label Solutions</li>
              <li className="list-group-item">📦 Master Distributor</li>
              <li className="list-group-item">📌 Distributor</li>
              <li className="list-group-item">🏪 Retailer</li>
            </ul>
            <h3 className="fw-bold mb-3 text-primary">Benefits</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📱 Branded App & Portal</li>
              <li className="list-group-item">📊 SaaS Dashboard + CRM</li>
              <li className="list-group-item">🔗 Easy API Integration</li>
              <li className="list-group-item">🛠 Ongoing Tech Support</li>
            </ul>
            <a href="/partner" className="btn btn-warning mt-4">
              Start as a Partner Today
            </a>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0" data-aos="fade-left">
            <img src={img3} alt="Partner" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* ✅ Why Choose */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-left">
            <h2 className="fw-bold mb-3 text-primary">⿦ Why Choose Indokona?</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔ Technology-First Platform</li>
              <li className="list-group-item">✔ Scalable SaaS & AI</li>
              <li className="list-group-item">✔ Registered Since 2014</li>
              <li className="list-group-item">✔ Strong Partner Network</li>
              <li className="list-group-item">✔ Secure Infrastructure</li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0" data-aos="fade-right">
            <img src={img3} alt="Why Choose" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* ✅ Platform Showcase */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <img src={img3} alt="Platform" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-bold mb-3 text-primary">⿧ Platform Showcase</h2>
            <p className="text-muted fs-5">📱 Mobile & Desktop Mockups:</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🛠 Retailer Dashboard</li>
              <li className="list-group-item">📦 Distributor Panel</li>
              <li className="list-group-item">📊 Analytics Reports</li>
              <li className="list-group-item">🤖 AI-driven Chatbot</li>
            </ul>
            <a
              href="/platform"
              className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm mt-3"
            >
              👀 See Platform in Action
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Case Studies */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={img3} alt="Case Studies" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">⿨ Case Studies & Success Stories</h2>
            <ul className="fs-5">
              <li>
                <b>Case Study 1:</b> Distributor scaled 10x revenue with Indokona
              </li>
              <li>
                <b>Case Study 2:</b> Retailer launched digital business in 7 days
              </li>
              <li>
                <b>Case Study 3:</b> AI Funnel boosted engagement by 300%
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Blog / Knowledge Hub */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <img src={img3} alt="Blog" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-bold mb-3">⿩ Blog / Knowledge Hub</h2>
            <p className="fs-5">Latest updates on:</p>
            <ul className="fs-5">
              <li>📊 SaaS & Fintech Trends</li>
              <li>🤖 AI in Business</li>
              <li>🚀 Startup Growth</li>
              <li>💡 Partner Success Tips</li>
            </ul>
            <a href="/blog" className="btn btn-outline-primary mt-3">
              📚 Read Articles
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Learning Hub */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={img3} alt="Learning" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">🔟 Learning & Employment Hub</h2>
            <ul className="fs-5">
              <li>
                📘 Training in <b>Digital Marketing & SaaS Tools</b>
              </li>
              <li>🤖 AI-powered learning programs</li>
              <li>
                🎓 With <b>Dream True Academy</b> certifications
              </li>
            </ul>
            <a href="/learning" className="btn btn-success mt-3">
              🎓 Start Learning Today
            </a>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
