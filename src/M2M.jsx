import React, { useEffect } from "react";
import AOS from "aos";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Navbar from "./Nav";

const MindToMarketPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,  // Animation repeats
      mirror: true,
    });
  }, []);

  const packagesData = [
    {
      package: "Starter Package",
      price: "₹9,999 – ₹14,999",
      ideal: "Freelancers & Individuals",
      key: "Logo, MSME registration, 1-page website",
    },
    {
      package: "Pro Package",
      price: "₹24,999 – ₹39,999",
      ideal: "Startups & Shops",
      key: "Domain, hosting, e-commerce, CRM, marketing",
    },
    {
      package: "Business Package",
      price: "₹49,999 – ₹79,999",
      ideal: "MSMEs & Growing Firms",
      key: "Website + App + Legal + Marketing",
    },
    {
      package: "Corporate Package",
      price: "₹100,000 – ₹300,000+",
      ideal: "Brands & Agencies",
      key: "Branding suite + Custom software + AMC",
    },
    {
      package: "White-Label SaaS Plan",
      price: "₹500,000+",
      ideal: "IT & Marketing Agencies",
      key: "SaaS portal + CRM + AI tools + White-label",
    },
  ];

  return (
    <>
    <Navbar/>
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <Container data-aos="fade-down">
          <h1>🌐 Mind To Market — Powered by Indokona</h1>
          <p className="lead mt-3">
            From Idea to Empire — Your Complete Brand-Building Partner
          </p>
        </Container>
      </header>

      {/* About Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up">
            About the Brand
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Mind To Market is an all-in-one business and brand launch platform
            that helps individuals, startups, MSMEs, and corporations build a
            complete, legally compliant business ecosystem. We go beyond simple
            branding or marketing — our strength lies in providing A-to-Z
            business transformation services, from company registration and
            legal setup to automation, SaaS tools, CRM, software, websites, and
            nationwide marketing execution.
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            <strong>Parent Company:</strong> Indokona Credit Bazar Pvt. Ltd. <br />
            <strong>Head Office:</strong> Faridabad, Haryana, India
          </p>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6} data-aos="fade-right">
              <h3>Our Mission</h3>
              <p>
                To empower Indian entrepreneurs with every resource they need to
                start, build, and scale their businesses — legally, digitally,
                and globally. We aim to create 100,000+ successful entrepreneurs
                by 2030.
              </p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <h3>Our Vision</h3>
              <p>
                To establish Mind To Market as India’s most trusted and
                result-driven business transformation hub, where every idea —
                big or small — gets the chance to become a market-ready, revenue-generating brand.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Complete Brand-Building Ecosystem */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up">
            Our Complete Brand-Building Ecosystem
          </h2>
          <Row className="g-4">
            {[
              "Business Registration & Legal Setup",
              "Branding & Creative Identity",
              "Website & Landing Page Development",
              "Mobile App & Custom Software Solutions",
              "Digital Marketing & Promotion",
              "SaaS & Automation Tools",
              "Annual Maintenance (AMC)",
              "Business Training & Mentorship",
              "Awards & Recognition Assistance",
            ].map((item, index) => (
              <Col md={4} key={index} data-aos="fade-up" data-aos-delay={index*100}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title className="text-primary">{item}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Packages Table */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-down">
            Popular Packages
          </h2>
          <div className="table-responsive shadow-lg rounded" data-aos="zoom-in-up">
            <Table striped bordered hover className="text-center align-middle mb-0">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Package</th>
                  <th>Price Range</th>
                  <th>Ideal For</th>
                  <th>Key Inclusions</th>
                </tr>
              </thead>
              <tbody>
                {packagesData.map((pkg, index) => (
                  <tr key={index}>
                    <td>{pkg.package}</td>
                    <td>{pkg.price}</td>
                    <td>{pkg.ideal}</td>
                    <td>{pkg.key}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-5">
        <Container data-aos="fade-up">
          <h2 className="text-center mb-4">Why Choose Mind To Market</h2>
          <ul className="list-unstyled fs-5">
            <li>✅ One-stop business transformation solution (A → Z)</li>
            <li>✅ Backed by Indokona Group’s legal and financial strength</li>
            <li>✅ In-house teams for design, development, marketing & compliance</li>
            <li>✅ ISO & government certification support</li>
            <li>✅ End-to-end AMC, mentorship & funding guidance</li>
            <li>✅ ROI-focused, compliant & transparent business model</li>
          </ul>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-primary text-white">
        <Container data-aos="fade-up">
          <h2 className="text-center mb-4">Contact & Sales</h2>
          <p className="text-center">📍 Faridabad, Haryana, India</p>
          <p className="text-center">📧 Email: support@mindtomarket.in</p>
          <p className="text-center">🌐 Website: www.mindtomarket.in</p>
          <p className="text-center">📱 WhatsApp: +91 9xxxxxxxxx</p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <Container>
          <p>&copy; 2025 Mind To Market — Powered by Indokona Credit Bazar Pvt. Ltd. All rights reserved.</p>
        </Container>
      </footer>
    </div>
    </>
  );
};

export default MindToMarketPage;
