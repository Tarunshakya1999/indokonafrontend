import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/about.jpg";

function AboutUs() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", paddingBottom: "100px" }}>
      <Container className="py-5">
        <h1 className="text-center fw-bold mb-5">ABOUT US</h1>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold mb-3">India’s Most Transparent Fintech Platform</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Indokona Credit Bazar Pvt. Ltd. is India’s most trusted and scalable fintech platform. 
              We provide financial empowerment through innovation, transparency, and collaboration. 
              Our platform connects millions of users, partners, and service providers across India, 
              delivering simple yet powerful digital financial services for everyone.
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              With multiple partner levels — from Retailer to Combo Plan — we ensure that every 
              stakeholder grows with us. Our mission is to build a transparent financial ecosystem 
              that benefits both individuals and businesses equally.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={aboutImage}
              alt="About Indokona Fintech"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <hr />

        {/* Long content sections */}
        <section className="my-5">
          <h3 className="fw-bold mb-3">Our Mission</h3>
          <p style={{ fontSize: "1.05rem" }}>
            Our mission is to revolutionize India’s fintech industry by offering transparency, 
            scalability, and user-centric financial solutions. We aim to simplify every financial 
            process — from payments and lending to investments and insurance — with a focus on 
            accessibility, affordability, and accountability.
          </p>
          <p>
            At Indokona, we believe in a world where technology bridges the gap between 
            opportunity and empowerment. By providing cutting-edge digital tools, we help 
            our partners expand their reach and customers achieve financial freedom.
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Our Vision</h3>
          <p>
            To create India’s most transparent, secure, and accessible fintech network that 
            fosters financial inclusion and innovation. Our vision extends beyond profits — 
            it’s about building trust and delivering long-term value to every Indian household.
          </p>
          <p>
            We envision a digital India where every transaction is seamless, every partner 
            empowered, and every customer confident in their financial journey.
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Core Values</h3>
          <ul>
            <li><b>Transparency:</b> Every process is clear, every transaction accountable.</li>
            <li><b>Innovation:</b> We constantly evolve to bring smarter fintech solutions.</li>
            <li><b>Integrity:</b> Ethical practices guide every action we take.</li>
            <li><b>Empowerment:</b> Supporting partners and users to grow financially.</li>
            <li><b>Collaboration:</b> Together, we build a stronger financial ecosystem.</li>
          </ul>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Our Services</h3>
          <p>
            Indokona Fintech provides a wide range of financial solutions designed for both 
            individuals and businesses. Our scalable platform supports:
          </p>
          <ul>
            <li>Digital Payments & Money Transfers</li>
            <li>Retailer & Distributor Partnerships</li>
            <li>Recharge, Bill Payment & Utility Solutions</li>
            <li>Loan Assistance & Credit Management</li>
            <li>Micro Insurance & Investment Opportunities</li>
            <li>Razorpay Payment Gateway Integration</li>
          </ul>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Technology & Innovation</h3>
          <p>
            Our technology stack is designed with scalability and reliability at its core. 
            Using modern frameworks like Django, React, and cloud infrastructure, we ensure 
            fast, secure, and real-time financial transactions. 
          </p>
          <p>
            With AI-driven analytics, Indokona continuously enhances customer experience and 
            provides valuable insights to partners for business growth.
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Achievements</h3>
          <p>
            Since our inception, Indokona Fintech has achieved remarkable growth across 
            multiple states in India. Our platform has empowered thousands of retailers, 
            agents, and distributors to expand their digital financial services seamlessly.
          </p>
          <ul>
            <li>10,000+ Active Partners</li>
            <li>1 Million+ Transactions Processed</li>
            <li>24/7 Support for all Partners</li>
            <li>Recognized as one of the most trusted fintech platforms in India</li>
          </ul>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Partner with Us</h3>
          <p>
            Be part of India’s fastest-growing fintech ecosystem. Whether you are a retailer, 
            distributor, or entrepreneur — Indokona Fintech gives you the tools to grow your 
            business with ease. Our multi-tier partnership system ensures that everyone gains 
            from our collective success.
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Future Roadmap</h3>
          <p>
            We are expanding our services to include more advanced AI-powered credit scoring, 
            investment portfolios, and blockchain-based security systems. 
            Our goal is to redefine the fintech experience by merging simplicity with 
            technological excellence.
          </p>
          <p>
            With every milestone, Indokona Fintech continues to stand by its promise — 
            <b>“India’s Most Transparent Fintech Platform.”</b>
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Customer Testimonials</h3>
          <p>
            “Indokona Fintech helped me expand my business faster than I imagined. 
            Their transparency and support are unmatched.” – <b>Rajesh Kumar, Retail Partner</b>
          </p>
          <p>
            “Being part of Indokona has changed how I handle my financial transactions. 
            It’s smooth, reliable, and completely secure.” – <b>Sunita Sharma, Distributor</b>
          </p>
        </section>

        <section className="my-5">
          <h3 className="fw-bold mb-3">Contact Us</h3>
          <p>
            📍 <b>Head Office:</b> Indokona Credit Bazar Pvt. Ltd., New Delhi, India  
            <br />
            📞 <b>Phone:</b> +91-9876543210  
            <br />
            📧 <b>Email:</b> support@indokona.com
          </p>
        </section>

        <hr />
        <p className="text-center text-muted">© 2025 Indokona Fintech | All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default AboutUs;
