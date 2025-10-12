import React from "react";
import AOS from "aos"; // 1. Import AOS
import "aos/dist/aos.css"; // Don't forget to import AOS CSS in your main file or here

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Table,
  Accordion,
} from "react-bootstrap";

import Navbar from "./Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Pikachoo from "./assets/fintech2.jpg";
import retailer from "./assets/retailer.jpg";
import distributer from "./assets/distributer.jpg";
import "./App.css";
// In a real app, you'd use icons like 'react-bootstrap-icons' or 'fontawesome' here.

const IndokonaFintechPage = () => {
  const [Data, setData] = useState([]);
  const [pricingData, setPlans] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://indokonabackend-1.onrender.com/api/pdf/"
      );
      setData(response.data);
      console.log("PDF : ", response.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };

// Plans Code



const getplans = async () => {
    try {
      const response2 = await axios.get(
        "https://indokonabackend-1.onrender.com/api/plans/"
      );
      setData(response2.data);
      console.log("Plans: ", response2.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };



  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Animation repeats every time you scroll up/down
      mirror: true, // Also animate on scroll back up
    });
    getdata();
    getplans();
  }, []);

  // --- Data Structures for easy rendering (Same as before) ---

  // const pricingData = [
  //   {
  //     img: retailer,
  //     type: "Retailer",
  //     setup: "₹5,999/-",
  //     renewal: "₹1,499/-",
  //     notes: "Basic Kit + Panel",
  //   },
  //   {
  //     img: distributer,
  //     type: "Distributor",
  //     setup: "₹19,999/-",
  //     renewal: "₹4,999/-",
  //     notes: "Multi Retailer Onboarding",
  //   },
  //   {
  //     img: Pikachoo,
  //     type: "Master Distributor",
  //     setup: "₹39,999/-",
  //     renewal: "₹9,999/-",
  //     notes: "Manage Distributors & Retailers",
  //   },
  //   {
  //     img: Pikachoo,
  //     type: "Admin Panel",
  //     setup: "Custom Pricing",
  //     renewal: "As per usage",
  //     notes: "Includes advanced monitoring",
  //   },
  //   {
  //     img: Pikachoo,
  //     type: "B2B API Access",
  //     setup: "Starts ₹49,999/-",
  //     renewal: "As per volume",
  //     notes: "API + SaaS hosting",
  //   },
  //   {
  //     img: Pikachoo,
  //     type: "White Label",
  //     setup: "₹99,999/-",
  //     renewal: "₹24,999/-",
  //     notes: "Complete Brand Setup + Full Control",
  //   },
  // ];

  const comparisonData = [
    {
      feature: "Direct Transactions",
      Retailer: "✅",
      Distributor: "✅",
      Master: "✅",
      Admin: "✅",
      B2B: "✅",
      WL: "✅",
    },
    {
      feature: "Onboard Retailers",
      Retailer: "❌",
      Distributor: "✅",
      Master: "✅",
      Admin: "✅",
      B2B: "✅",
      WL: "✅",
    },
    {
      feature: "Onboard Distributors",
      Retailer: "❌",
      Distributor: "❌",
      Master: "✅",
      Admin: "✅",
      B2B: "✅",
      WL: "✅",
    },
    {
      feature: "Control Over Commission",
      Retailer: "❌",
      Distributor: "Limited",
      Master: "Limited",
      Admin: "Full",
      B2B: "Full",
      WL: "Full",
    },
    {
      feature: "Branding & Domain",
      Retailer: "❌",
      Distributor: "❌",
      Master: "❌",
      Admin: "❌",
      B2B: "❌",
      WL: "✅",
    },
    {
      feature: "Automation Tools Add-on",
      Retailer: "Optional",
      Distributor: "Optional",
      Master: "Optional",
      Admin: "Optional",
      B2B: "Optional",
      WL: "Optional",
    },
  ];

  const faqData = [
    {
      q: "Is Indokona Fintech approved by RBI?",
      a: "Indokona is a Technology Service Provider. All transactions are processed via RBI-authorized Banks, NBFCs & Insurance Partners.",
    },
    {
      q: "How much can I earn as a Retailer or Distributor?",
      a: "Retailers earn ₹8–₹25 per transaction, Distributors & Master Distributors earn extra override commissions. Earnings depend on your network size.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar, PAN, 2 Photos, and Address Proof. For White Label, company documents may be required.",
    },
    {
      q: "What is the Super Branding Kit?",
      a: "A full marketing kit worth ₹11,999 FREE (T-Shirt, Cap, ID, Banner, Posters, Visiting Card, Digital Creatives).",
    },
    {
      q: "What is the Training + Automation Add-on?",
      a: "This is a separate paid package to help scale your business using AI, CRM, and digital marketing automation.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="indokona-page">
        {/* ---------------------------------------------------------------------- */}
        {/* 1. Hero Section (First Fold) - Fade In Up for main content */}
        {/* ---------------------------------------------------------------------- */}
        <header
          id="hero"
          className="bg-primary text-white text-center py-5 py-md-5"
        >
          <Container className="p-4 p-md-5">
            <Row className="align-items-center">
              <Col lg={7} className="text-lg-start" data-aos="fade-right">
                <h1 className="display-4 fw-bold mb-3">
                  Start, Build & Scale Your Fintech Business – From Retailer to
                  White Label
                </h1>
                <p className="lead mb-4">
                  Indokona Fintech brings you technology, automation, training,
                  and tools to create not just a brand, but a scalable fintech
                  empire.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-start justify-content-center">
                  <Button
                    variant="warning"
                    size="lg"
                    className="px-4"
                    href="https://forms.gle/Xq4twuUwDPbEhCwt8"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    Become a Partner Now
                  </Button>

                  {Data.map((item) => (
                    <a
                      key={item.id}
                      href={item.pdf}
                      className="btn"
                      style={{
                        background: "red",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fas fa-download me-2"></i> Download Brochure
                    </a>
                  ))}

                  <Button
                    variant="warning"
                    size="lg"
                    className="px-4"
                    href="https://forms.gle/qBnTqrLvheNZJ2hC6"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    Request Free Demo
                  </Button>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block" data-aos="fade-left">
                {/* Visuals Placeholder */}
                <img
                  style={{
                    height: "450px",
                    width: "500px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  src={Pikachoo}
                  alt="Indokona Dashboard Mockup"
                />
              </Col>
            </Row>
          </Container>
        </header>

        <hr className="my-0" />

        {/* ---------------------------------------------------------------------- */}
        {/* 12. Trust & Compliance Badges - Simple Fade Up */}
        {/* ---------------------------------------------------------------------- */}
        <section id="trust-badges" className="bg-light py-3">
          <Container>
            <Row className="text-center justify-content-center">
              <Col xs={6} md={3} className="my-2" data-aos="fade-up">
                <h6 className="fw-bold text-success">
                  ✔ Registered Pvt. Ltd. Company
                </h6>
              </Col>
              <Col
                xs={6}
                md={3}
                className="my-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h6 className="fw-bold text-success">
                  ✔ ISO Standard IT Practices
                </h6>
              </Col>
              <Col
                xs={6}
                md={3}
                className="my-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h6 className="fw-bold text-success">
                  ✔ Secure SSL Data Encryption
                </h6>
              </Col>
              <Col
                xs={6}
                md={3}
                className="my-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h6 className="fw-bold text-success">
                  ✔ RBI/NPCI/UIDAI Compliant
                </h6>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 2. About Indokona - Fade Up for text, Flip for Card */}
        {/* ---------------------------------------------------------------------- */}
        <section id="about" className="py-5">
          <Container>
            <h2 className="text-center mb-4" data-aos="fade-down">
              About Indokona
            </h2>
            <Row className="justify-content-center" data-aos="fade-up">
              <Col lg={8} className="text-center">
                <p className="fs-5 mb-4">
                  **Indokona Credit Bazar Pvt. Ltd.** is India’s most
                  transparent and scalable fintech platform. We empower
                  entrepreneurs to start at any level—**Retailer, Distributor,
                  Master Distributor, Admin, B2B, or White Label**—and grow
                  their network with ease.
                </p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={12}>
                <h4
                  className="text-primary text-center mb-3"
                  data-aos="fade-up"
                >
                  Every partner receives:
                </h4>
                <Card
                  className="shadow-lg"
                  data-aos="flip-up"
                  data-aos-delay="100"
                >
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="list-unstyled fw-bold">
                          <li className="mb-2">
                            ✅ Auto-Generated Authorization Letter
                          </li>
                          <li className="mb-2">
                            ✅ Verified Digital Certificate
                          </li>
                          <li className="mb-2">
                            ✅ Unique Digital ID Card (with QR + Hologram)
                          </li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <div
                          className="p-3 bg-light rounded"
                          data-aos="zoom-in"
                        >
                          <p className="fw-bold mb-1 text-danger">
                            ✅ Super Branding Kit (MRP ₹11,999 FREE)
                          </p>
                          <small>
                            Includes Brand T-Shirt, Cap, Certificate, ID Card,
                            Banner (5×3 ft), 10 Posters (5×2.5 ft), Digital
                            Visiting Card, Social Media Creatives.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <hr />

        {/* ---------------------------------------------------------------------- */}
        {/* 3. Partnership Plans Explained - Grid animation */}
        {/* ---------------------------------------------------------------------- */}
        <section id="plans-explained" className="py-5" style={{ background: "linear-gradient(120deg, #f8f9fa, #e9ecef)" }}>
  <Container>
    <h2 className="text-center mb-5 fw-bold" data-aos="fade-down" style={{ color: "#343a40" }}>
      Partnership Plans Explained
    </h2>
    <Row className="g-4">
      {pricingData.map((item, index) => (
        <Col md={4} sm={6} key={index}>
          <Card 
            className="text-center h-100 shadow-lg border-0 rounded-4"
            style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <Card.Img
              variant="top"
              src={item.img}
              alt={item.type}
              style={{ height: "350px", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
            />
            <Card.Body>
              <Card.Title className="text-dark fs-4 fw-bold mb-3">
                {item.type}
              </Card.Title>
              <div className="mb-2">
                <span className="badge bg-primary me-2">{item.setup}</span>
                <span className="badge bg-success">{item.renewal}</span>
              </div>
              <Card.Text className="text-muted">{item.notes}</Card.Text>
              <button className="btn btn-outline-primary mt-3 w-100">
                Join Now
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

        {/* ---------------------------------------------------------------------- */}
        {/* 8. Pricing Section - Table Slide In */}
        {/* ---------------------------------------------------------------------- */}
        <section id="pricing" className="py-5">
          <Container>
            <h2 className="text-center mb-4" data-aos="fade-down">
              Flexible Partner Pricing
            </h2>
            <div
              className="table-responsive shadow-lg rounded"
              data-aos="zoom-in-up"
            >
              <Table
                striped
                bordered
                hover
                className="text-center align-middle mb-0"
              >
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Partner Type</th>
                    <th>One-Time Setup Cost</th>
                    <th>Renewal (Yearly)</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{item.type}</td>
                      <td>
                        <span className="text-primary fw-bold">
                          {item.setup}
                        </span>
                      </td>
                      <td>{item.renewal}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <p className="text-center mt-3 text-muted" data-aos="fade-up">
              (Pricing is indicative. Final cost may vary as per requirement &
              customizations.)
            </p>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 4. Special Add-On (Training + Automation Tools) - Scale Up */}
        {/* ---------------------------------------------------------------------- */}
        <section id="add-ons" className="py-5 bg-warning bg-opacity-10">
          <Container>
            <Card className="border-0 shadow-lg p-4" data-aos="zoom-in-up">
              <Card.Body>
                <h2 className="text-center text-dark mb-4">
                  🌟 Don’t Just Build a Brand –{" "}
                  <span className="text-primary">Learn How to Scale It!</span>
                </h2>
                <Row>
                  <Col md={6} data-aos="fade-right">
                    <h4 className="fw-bold text-dark">
                      ✅ Marketing Training Programs
                    </h4>
                    <p className="text-muted">
                      Learn how to attract, convert & retain customers with
                      proven fintech marketing strategies.
                    </p>
                  </Col>
                  <Col md={6} data-aos="fade-left">
                    <h4 className="fw-bold text-dark">
                      ✅ Full Automation Tools
                    </h4>
                    <p className="text-muted">
                      AI-driven CRM, Auto-Scheduler, Campaign Management, SEO,
                      and Social Media Automation to save you time.
                    </p>
                  </Col>
                </Row>
                <div
                  className="text-center mt-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p className="fs-5 fw-bold text-danger mb-1">
                    💰 Note: This package is separate from White Label cost.
                  </p>
                  <p className="lead fw-bold">
                    📈 With this, you don’t just start a business—you grow it
                    into a scalable fintech company.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 9. Comparison Chart - Fade In Up for content */}
        {/* ---------------------------------------------------------------------- */}
        <section id="comparison" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4" data-aos="fade-down">
              Feature Comparison Across Plans
            </h2>
            <div
              className="table-responsive shadow-lg rounded"
              data-aos="fade-up"
            >
              <Table
                striped
                bordered
                hover
                className="text-center align-middle mb-0"
              >
                <thead className="table-primary">
                  <tr>
                    <th>Feature / Plan</th>
                    <th>Retailer</th>
                    <th>Distributor</th>
                    <th>Master Distributor</th>
                    <th>Admin Panel</th>
                    <th>B2B</th>
                    <th>White Label</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="text-start fw-bold">{item.feature}</td>
                      <td>{item.Retailer}</td>
                      <td>{item.Distributor}</td>
                      <td>{item.Master}</td>
                      <td>{item.Admin}</td>
                      <td>{item.B2B}</td>
                      <td>{item.WL}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 10. Success Stories / Testimonials - Fade Left/Right */}
        {/* ---------------------------------------------------------------------- */}
        <section id="testimonials" className="py-5">
          <Container>
            <h2 className="text-center mb-4" data-aos="fade-down">
              Our Success Stories
            </h2>
            <Row className="justify-content-center">
              <Col md={6} className="mb-4">
                <Card className="h-100 shadow" data-aos="fade-right">
                  <Card.Body>
                    <p className="lead fst-italic">
                      “I started as a **Retailer** with Indokona and within 6
                      months scaled up to Distributor level. The authorization
                      and branding kit helped me gain trust in my market.”
                    </p>
                    <footer className="blockquote-footer mt-2">
                      Rahul Verma,{" "}
                      <cite title="Source Title">Distributor Partner</cite>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 shadow" data-aos="fade-left">
                  <Card.Body>
                    <p className="lead fst-italic">
                      “**White Label** solution from Indokona gave me my own
                      brand identity. With training + automation toolkit, I grew
                      my fintech business 4x in 1 year.”
                    </p>
                    <footer className="blockquote-footer mt-2">
                      Neha Sharma,{" "}
                      <cite title="Source Title">White Label Owner</cite>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 11. FAQ Section - Zoom In */}
        {/* ---------------------------------------------------------------------- */}
        <section id="faq" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4" data-aos="fade-down">
              Frequently Asked Questions
            </h2>
            <Accordion
              defaultActiveKey="0"
              alwaysOpen
              className="shadow-lg"
              data-aos="zoom-in"
            >
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header className="fw-bold">
                    {item.q}
                  </Accordion.Header>
                  <Accordion.Body>👉 {item.a}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 5. Legal & Compliance - Fade Up */}
        {/* ---------------------------------------------------------------------- */}
        <section
          id="legal"
          className="py-4 text-center bg-dark text-muted"
          data-aos="fade-up"
        >
          <Container>
            <small>
              <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-4">
                <li>• Indokona is a **Technology Service Provider** only.</li>
                <li>
                  • Transactions are processed via Authorized Banks, NBFCs &
                  Insurance Partners.
                </li>
                <li>• We follow RBI, NPCI, UIDAI & IT Act 2000 guidelines.</li>
                <li>
                  • All Authorization Documents are for business representation.
                </li>
              </ul>
            </small>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 6. Call-To-Action (CTA) Section - Bounce/Zoom effect */}
        {/* ---------------------------------------------------------------------- */}
        <section
          id="main-cta"
          className="py-5 bg-primary text-white text-center"
        >
          <Container>
            <h2 className="display-5 fw-bold mb-3" data-aos="zoom-in">
              🌐 Ready to start your fintech journey?
            </h2>
            <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
              👉 Become a Partner Today and grow with Indokona Fintech.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button
                variant="warning"
                size="lg"
                className="px-5"
                href="https://forms.gle/Xq4twuUwDPbEhCwt8"
                data-aos="flip-down"
                data-aos-delay="200"
              >
                [ Become a Partner ]
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="px-5"
                href="https://forms.gle/qBnTqrLvheNZJ2hC6"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                [ Request Demo ]
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="px-5"
                data-aos="flip-down"
                data-aos-delay="400"
              >
                [ Download Brochure ]
              </Button>
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 7. Footer Section */}
        {/* ---------------------------------------------------------------------- */}
        <footer className="bg-dark text-white-50 py-4">
          <Container className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.
              All rights reserved.
            </p>
            <small className="d-block mt-1">
              [Footer links and original content placeholder]
            </small>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default IndokonaFintechPage;
