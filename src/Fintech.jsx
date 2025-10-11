import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function IndokonaComboPlan() {
  return (
    <div className="combo-plan-page">
      {/* Hero Section */}
      <section className="text-center bg-light py-5">
        <Container>
          <h1 className="display-5 fw-bold">🚀 One Platform, Endless Possibilities – Launch, Automate & Scale Your Business</h1>
          <p className="lead mt-3">
            Indokona Combo Plan combines Fintech + SaaS + Automation & Digital Marketing Suite in one complete package.
            Now, manage your fintech operations, SaaS business, and brand automation all from a single platform.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <Button variant="primary">🌐 Explore Combo Plan</Button>
            <Button variant="outline-dark">🎯 Request Free Demo</Button>
            <Button variant="success">📄 Download Brochure PDF</Button>
          </div>
        </Container>
      </section>

      {/* What’s Included Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">What’s Included in Combo Plan?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">1️⃣ Indokona Fintech (White Label)</h5>
                  <ul>
                    <li>Launch Your Own Branded Fintech Portal (Logo + Domain)</li>
                    <li>Multi-Level User Management: Retailer → Distributor → Master Distributor → Admin</li>
                    <li>Control Over Commission Slabs</li>
                    <li>AEPS, BBPS, DMT, Loans, Credit & Virtual Cards</li>
                    <li>24×7 Technical Support</li>
                    <li>Authorization: White Label License Agreement + CEO ID + Digital Corporate Seal</li>
                    <li><strong>Benefit:</strong> Start your fintech empire without building technology from scratch.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">2️⃣ Indokona SaaS (Software as a Service)</h5>
                  <ul>
                    <li>Access to ready-to-use business automation software</li>
                    <li>Cloud-based CRM, ERP, Accounting, Inventory, POS & Analytics</li>
                    <li>Multi-Client & Multi-Location Management</li>
                    <li>Scalable & Secure Architecture (SSL + GDPR compliant)</li>
                    <li><strong>Benefit:</strong> Run software business alongside fintech, sell subscriptions, or onboard clients.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">3️⃣ Indokona Suite (Branding + Automation + Marketing)</h5>
                  <ul>
                    <li>AI-driven CRM, Auto Scheduler, Campaign Manager, SEO, Social Media Automation</li>
                    <li>White Label Branding & Digital Creatives</li>
                    <li>Lead Generation, Customer Retention, Growth Analytics</li>
                    <li>Business Intelligence Dashboard for ROI Tracking</li>
                    <li><strong>Benefit:</strong> Automate marketing and operations efficiently.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Combo Plan Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Why Choose Indokona Combo Plan?</h2>
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Feature</th>
                  <th>Benefit for Customer</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>One Platform</td><td>No need to manage multiple tools separately</td></tr>
                <tr><td>Multi-Business Capability</td><td>Run Fintech + SaaS + Brand Automation together</td></tr>
                <tr><td>Scalable</td><td>Add users, modules, and partners as you grow</td></tr>
                <tr><td>Branding & Marketing</td><td>White Label + Automation ensures brand visibility</td></tr>
                <tr><td>Support & Training</td><td>Dedicated onboarding & technical assistance</td></tr>
                <tr><td>Cost-Efficient</td><td>All three solutions in one package – value for money</td></tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="text-center py-5">
        <Container>
          <h2 className="fw-bold">💡 Single Investment, Triple Advantage!</h2>
          <p className="lead mt-3">
            With Indokona Combo Plan, you don’t just start a business — you own a complete ecosystem:
          </p>
          <ul className="list-unstyled mt-4">
            <li>💼 Fintech – Grow a scalable financial business</li>
            <li>🧠 SaaS – Run software solutions for clients</li>
            <li>📈 Suite – Automate operations & digital marketing</li>
          </ul>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <Button variant="primary">🌐 Explore Combo Plan</Button>
            <Button variant="outline-dark">🎯 Request Free Demo</Button>
            <Button variant="success">📄 Download Brochure PDF</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
