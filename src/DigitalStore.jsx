import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaStore,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import CustomNavbar from "./Navbar2";

// Component for the Indo-Mini-Store landing page
const MyStore = () => {
  // Reseller Plans Data
  const plans = [
    {
      level: "Basic Reseller",
      price: "₹999",
      color: "success",
      features: [
        "Simple login access to reseller dashboard",
        "Resell any software on a commission basis",
        "Commissions credited instantly",
      ],
    },
    {
      level: "Pro Reseller",
      price: "₹1,999",
      color: "primary",
      features: [
        "Set your own selling price (control profit margin)",
        "Advanced reseller dashboard",
        "New referral methods + 1-hour training",
      ],
    },
    {
      level: "Gold Reseller",
      price: "₹2,999",
      color: "warning",
      features: [
        "Full resale rights on all software",
        "Create your own sub-brand (e.g., digiministore/tarun)",
        "Self price control + marketing support & paid add-ons",
      ],
    },
    {
      level: "Diamond Reseller",
      price: "₹4,999",
      color: "danger",
      features: [
        "All Gold features, plus:",
        "Free sub-domain (e.g., yourname.indokona.in)",
        "Complete branding kit (visiting card, poster, banner)",
        "1-on-1 training and lifetime support",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .scroll-banner span {
          display: inline-block;
          padding-left: 100%;
          animation: scrollText 12s linear infinite;
        }
        
        /* Animation */
        @keyframes scrollText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }`}</style>
      <div className="indo-mini-store-page">
        <CustomNavbar />
        {/* --- Hero Section --- */}
        <header
          className="py-5 bg-light border-bottom"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="scroll-banner">
            <span>
              ✨ Welcome To Indokona Digital Store — Premium Digital Products ✨
            </span>
          </div>
          <Container>
            <Row className="align-items-center">
              <Col md={8}>
                <h1 className="display-4 fw-bold text-dark">
                  Indokona Digital Store 🏪
                </h1>
                <p className="lead text-muted mt-3">
                  India’s most trusted digital marketplace, empowering
                  entrepreneurs to earn smartly by reselling premium digital
                  products and software subscriptions.
                </p>
                <div className="mt-4">
                  <Button variant="success" size="lg" className="me-3">
                    Join Now
                  </Button>
                  <Button variant="outline-dark" size="lg">
                    Start Selling
                  </Button>
                </div>
              </Col>
              <Col md={4} className="text-center d-none d-md-block">
                <FaStore size={150} className="text-success" />
              </Col>
            </Row>
          </Container>
        </header>
        {/* --- About & Vision/Mission Section --- */}
        <section className="py-5">
          <Container>
            {/* About */}
            <Row className="mb-5" data-aos="fade-up" data-aos-once="false">
              <Col md={12}>
                <h2 className="text-center mb-4">
                  About Indokona Digital Store
                </h2>
                <p
                  className="text-center mx-auto"
                  style={{ maxWidth: "800px" }}
                >
                  Indokona Digital Store, powered by Indokona Credit Bazar Pvt.
                  Ltd., is a platform where entrepreneurs, freelancers, and
                  digital creators come together. We offer instant access,
                  transparent pricing, and **lifetime earning opportunities**,
                  enabling every Indian to build their own digital business from
                  anywhere.
                </p>
                <p className="text-center text-muted fw-bold">
                  Made in Digital India — Elevate Your Brand with Indokona.
                </p>
              </Col>
            </Row>

            {/* Vision & Mission */}
            <Row className="g-4" data-aos="fade-up" data-aos-once="false">
              <Col md={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <h3 className="card-title text-success">
                      <FaEye className="me-2" /> Vision
                    </h3>
                    <p className="card-text">
                      To empower **10 lakh+ Indians** to become digital
                      entrepreneurs by providing cutting-edge tools, practical
                      training, and high-value earning opportunities in the
                      online software market.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <h3 className="card-title text-primary">
                      <FaBullseye className="me-2" /> Mission
                    </h3>
                    <p className="card-text">
                      To simplify digital commerce and make premium software
                      subscriptions accessible to everyone — while helping
                      resellers build their brand, grow income, and achieve
                      **financial independence**.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --- Why Trust & Benefits Section --- */}
        <section className="py-5 bg-light border-top">
          <Container>
            <Row className="mb-5">
              <Col md={12}>
                <h2 className="text-center mb-4">
                  <FaHandshake className="me-2" /> Why Trust Indokona?
                </h2>
              </Col>
            </Row>
            <Row
              className="g-4 text-center mb-5"
              data-aos="fade-up"
              data-aos-once="false"
            >
              {[
                "Registered under Indokona Credit Bazar Pvt. Ltd.",
                "100% digital & transparent processes",
                "Instant product access & activation",
                "High earning opportunities for every partner",
                "Dedicated support & practical training",
              ].map((item, index) => (
                <Col xs={6} md={2} key={index}>
                  <div className="p-3 bg-white shadow-sm rounded h-100">
                    <p className="mb-0 fw-bold text-success">✅ {item}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="mt-5">
              <Col md={12}>
                <h2 className="text-center mb-4">
                  <FaStar className="me-2" /> Reseller Benefits
                </h2>
              </Col>
            </Row>
            <Row className="g-4" data-aos="fade-up" data-aos-once="false">
              {[
                "Access to 100+ trending software & digital products",
                "Launch your own digital store instantly",
                "Earn high commissions on every sale",
                "24/7 partner support and training sessions",
                "Personal dashboard with sales & payments reports",
                "Brand identity tools: logos, banners, visiting cards",
              ].map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="border-0 h-100 bg-white shadow-sm p-3">
                    <p className="mb-0">
                      <span className="fw-bold text-primary">•</span> {item}
                    </p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* --- Reseller Plans Section --- */}
        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5 fw-bold">
              💼 Reseller Plans (Clear, Simple & Powerful)
            </h2>
            <Row className="g-4">
              {plans.map((plan, index) => (
                <Col
                  lg={3}
                  md={6}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                >
                  <Card
                    className={`shadow-lg border-3 border-${plan.color} h-100`}
                  >
                    <Card.Header
                      className={`bg-${plan.color} text-white text-center py-3`}
                    >
                      <h4 className="mb-0 fw-bold">{plan.level}</h4>
                    </Card.Header>
                    <Card.Body className="d-flex flex-column">
                      <h1 className="text-center display-5 fw-bold mb-3">
                        {plan.price}
                      </h1>
                      <ul className="list-unstyled mb-4 flex-grow-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="my-2">
                            <span className={`text-${plan.color} fw-bold me-2`}>
                              ✓
                            </span>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto text-center">
                        <Button variant={plan.color} className="w-75">
                          Choose {plan.level}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* --- Why Join & Call to Action --- */}
        <section className="py-5 bg-dark text-white">
          <Container>
            <h2 className="text-center mb-5">
              <FaRocket className="me-2" /> Why Join as a Reseller?
            </h2>
            <Row className="g-4 mb-5" data-aos="fade-up" data-aos-once="false">
              {[
                "Unlimited earning potential — scale your income as you sell more",
                "Skill growth — sales, branding, digital marketing training included",
                "Build your brand — get a store identity, subdomain & marketing assets",
                "Fast ROI — recover plan cost with few sales",
                "Full support — training, tools, and personal mentorship",
              ].map((item, index) => (
                <Col md={4} key={index}>
                  <div className="p-3 border rounded h-100">
                    <p className="mb-0 fw-light">
                      <span className="text-warning fw-bold">»</span> {item}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>

            <hr className="my-5 bg-secondary" />

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h2 className="fw-bold mb-3">Start Your Journey Today</h2>
              <p className="lead mb-4">
                Join the fastest-growing reseller community in India and start
                earning from home with Indokona Digital Store.
                <br />
                **No experience required — we train you to succeed!**
              </p>
              <Button variant="success" size="lg" className="me-3">
                Join Now
              </Button>
              <Button variant="outline-light" size="lg" className="me-3">
                Login
              </Button>
              <Button variant="primary" size="lg">
                Start Selling
              </Button>
            </div>
          </Container>
        </section>
        <footer className="premium-footer py-5 mt-5">
          <Container>
            <Row className="gy-4 align-items-center">
              {/* Tagline */}
              <Col md={6}>
                <p className="mb-0 footer-tagline">
                  Made in <span className="india-text">Digital India</span> —
                  Elevate Your Brand with
                  <span className="brand-text"> Indokona</span>.
                </p>
              </Col>

              {/* Links */}
              <Col md={6} className="text-md-end footer-links-col">
                <ul className="footer-links">
                  <li>
                    <Link to="/digitalstorereterms&conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalstoreprivacypolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/digitalstorerefundpolicy">Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/digitalstoredisclaimer">Disclaimer</Link>
                  </li>
                </ul>
              </Col>
            </Row>

            <hr className="footer-divider my-4" />

            <Row className="gy-3">
              {/* Stay connected */}
              <Col md={12} className="text-md-end">
                <h5 className="fw-bold stay-connected-title">
                  📱 Stay Connected
                </h5>
                <p className="mb-1">
                  Website:{" "}
                  <a href="https://www.indokona.com" className="footer-url">
                    www.indokona.com
                  </a>
                </p>
                <p className="mb-1">
                  Support:{" "}
                  <span className="fw-bold text-light">+91 96259 95155</span>
                </p>
                <p className="mb-1">
                  Email:{" "}
                  <span className="footer-email">
                    indokonaoutsourcing@gmail.com
                  </span>
                </p>
                <p className="mb-0 coming-soon">
                  App: Android & iOS — coming soon 🚀
                </p>
              </Col>
            </Row>
          </Container>
        </footer>{" "}
      </div>
      <style>{`.premium-footer {
  background: linear-gradient(135deg, #0d0f1a, #1b1f33);
  color: #d9e2ff;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

/* Soft glow edges */
.premium-footer::before {
  content: "";
  position: absolute;
  top: -40px;
  left: -40px;
  width: 160px;
  height: 160px;
  background: rgba(0, 123, 255, 0.15);
  border-radius: 50%;
  filter: blur(60px);
}
.premium-footer::after {
  content: "";
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 160px;
  height: 160px;
  background: rgba(111, 66, 193, 0.2);
  border-radius: 50%;
  filter: blur(60px);
}

/* Tagline */
.footer-tagline {
  font-size: 1.1rem;
  font-weight: 500;
  color: #ced7f7;
}
.india-text {
  color: #00d4ff;
  font-weight: 600;
}
.brand-text {
  color: #bf91ff;
  font-weight: 600;
}

/* Footer links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.footer-links li a {
  color: #a9b6e8;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.25s ease;
}

.footer-links li a:hover {
  color: #ffffff;
  padding-left: 4px;
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
}

/* Divider */
.footer-divider {
  border-color: rgba(255, 255, 255, 0.15);
}

/* Stay connected */
.stay-connected-title {
  color: #8ab6ff;
  text-shadow: 0 0 8px rgba(138, 182, 255, 0.4);
}

.footer-url {
  color: #66c0ff;
  text-decoration: none;
  transition: 0.25s;
}
.footer-url:hover {
  color: #99dbff;
  text-shadow: 0 0 8px rgba(153, 219, 255, 0.6);
}

.footer-email {
  color: #c9d6ff;
  font-weight: 500;
}

.coming-soon {
  color: #4dff91;
  font-weight: 600;
  text-shadow: 0 0 6px rgba(77, 255, 145, 0.4);
}

/* Hover lift effect */
.footer-links-col a {
  position: relative;
}

.footer-links-col a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background: #8ac7ff;
  transition: width 0.3s ease;
}
.footer-links-col a:hover::after {
  width: 100%;
}
`}</style>
    </>
  );
};

export default MyStore;
