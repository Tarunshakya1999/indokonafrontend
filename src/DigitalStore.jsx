import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStore, FaEye, FaBullseye, FaHandshake, FaStar, FaRocket } from 'react-icons/fa';

// Component for the Indo-Mini-Store landing page
const MyStore = () => {
    // Reseller Plans Data
    const plans = [
        {
            level: 'Basic Reseller',
            price: '₹999',
            color: 'success',
            features: [
                'Simple login access to reseller dashboard',
                'Resell any software on a commission basis',
                'Commissions credited instantly'
            ]
        },
        {
            level: 'Pro Reseller',
            price: '₹1,999',
            color: 'primary',
            features: [
                'Set your own selling price (control profit margin)',
                'Advanced reseller dashboard',
                'New referral methods + 1-hour training'
            ]
        },
        {
            level: 'Gold Reseller',
            price: '₹2,999',
            color: 'warning',
            features: [
                'Full resale rights on all software',
                'Create your own sub-brand (e.g., digiministore/tarun)',
                'Self price control + marketing support & paid add-ons'
            ]
        },
        {
            level: 'Diamond Reseller',
            price: '₹4,999',
            color: 'danger',
            features: [
                'All Gold features, plus:',
                'Free sub-domain (e.g., yourname.indokona.in)',
                'Complete branding kit (visiting card, poster, banner)',
                '1-on-1 training and lifetime support'
            ]
        },
    ];

    return (
        <div className="indo-mini-store-page">
            {/* --- Hero Section --- */}
            <header className="py-5 bg-light border-bottom" data-aos="fade-up" data-aos-once="false">
                <Container>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h1 className="display-4 fw-bold text-dark">Indokona Digital Store 🏪</h1>
                            <p className="lead text-muted mt-3">
                                India’s most trusted digital marketplace, empowering entrepreneurs to earn smartly by reselling premium digital products and software subscriptions.
                            </p>
                            <div className="mt-4">
                                <Button variant="success" size="lg" className="me-3">Join Now</Button>
                                <Button variant="outline-dark" size="lg">Start Selling</Button>
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
                            <h2 className="text-center mb-4">About Indokona Digital Store</h2>
                            <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
                                Indokona Digital Store, powered by Indokona Credit Bazar Pvt. Ltd., is a platform where entrepreneurs, freelancers, and digital creators come together. We offer instant access, transparent pricing, and **lifetime earning opportunities**, enabling every Indian to build their own digital business from anywhere.
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
                                    <h3 className="card-title text-success"><FaEye className="me-2" /> Vision</h3>
                                    <p className="card-text">
                                        To empower **10 lakh+ Indians** to become digital entrepreneurs by providing cutting-edge tools, practical training, and high-value earning opportunities in the online software market.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm border-0 h-100">
                                <Card.Body>
                                    <h3 className="card-title text-primary"><FaBullseye className="me-2" /> Mission</h3>
                                    <p className="card-text">
                                        To simplify digital commerce and make premium software subscriptions accessible to everyone — while helping resellers build their brand, grow income, and achieve **financial independence**.
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
                            <h2 className="text-center mb-4"><FaHandshake className="me-2" /> Why Trust Indokona?</h2>
                        </Col>
                    </Row>
                    <Row className="g-4 text-center mb-5" data-aos="fade-up" data-aos-once="false">
                        {[
                            'Registered under Indokona Credit Bazar Pvt. Ltd.',
                            '100% digital & transparent processes',
                            'Instant product access & activation',
                            'High earning opportunities for every partner',
                            'Dedicated support & practical training'
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
                            <h2 className="text-center mb-4"><FaStar className="me-2" /> Reseller Benefits</h2>
                        </Col>
                    </Row>
                    <Row className="g-4" data-aos="fade-up" data-aos-once="false">
                        {[
                            'Access to 100+ trending software & digital products',
                            'Launch your own digital store instantly',
                            'Earn high commissions on every sale',
                            '24/7 partner support and training sessions',
                            'Personal dashboard with sales & payments reports',
                            'Brand identity tools: logos, banners, visiting cards'
                        ].map((item, index) => (
                            <Col md={4} key={index}>
                                <Card className="border-0 h-100 bg-white shadow-sm p-3">
                                    <p className="mb-0"><span className="fw-bold text-primary">•</span> {item}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* --- Reseller Plans Section --- */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5 fw-bold">💼 Reseller Plans (Clear, Simple & Powerful)</h2>
                    <Row className="g-4">
                        {plans.map((plan, index) => (
                            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100} data-aos-once="false">
                                <Card className={`shadow-lg border-3 border-${plan.color} h-100`}>
                                    <Card.Header className={`bg-${plan.color} text-white text-center py-3`}>
                                        <h4 className="mb-0 fw-bold">{plan.level}</h4>
                                    </Card.Header>
                                    <Card.Body className="d-flex flex-column">
                                        <h1 className="text-center display-5 fw-bold mb-3">{plan.price}</h1>
                                        <ul className="list-unstyled mb-4 flex-grow-1">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="my-2">
                                                    <span className={`text-${plan.color} fw-bold me-2`}>✓</span> {feature}
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
                    <h2 className="text-center mb-5"><FaRocket className="me-2" /> Why Join as a Reseller?</h2>
                    <Row className="g-4 mb-5" data-aos="fade-up" data-aos-once="false">
                        {[
                            'Unlimited earning potential — scale your income as you sell more',
                            'Skill growth — sales, branding, digital marketing training included',
                            'Build your brand — get a store identity, subdomain & marketing assets',
                            'Fast ROI — recover plan cost with few sales',
                            'Full support — training, tools, and personal mentorship'
                        ].map((item, index) => (
                            <Col md={4} key={index}>
                                <div className="p-3 border rounded h-100">
                                    <p className="mb-0 fw-light"><span className="text-warning fw-bold">»</span> {item}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <hr className="my-5 bg-secondary" />

                    <div className="text-center" data-aos="fade-up" data-aos-once="false">
                        <h2 className="fw-bold mb-3">Start Your Journey Today</h2>
                        <p className="lead mb-4">
                            Join the fastest-growing reseller community in India and start earning from home with Indokona Digital Store.
                            <br />**No experience required — we train you to succeed!**
                        </p>
                        <Button variant="success" size="lg" className="me-3">Join Now</Button>
                        <Button variant="outline-light" size="lg" className="me-3">Login</Button>
                        <Button variant="primary" size="lg">Start Selling</Button>
                    </div>
                </Container>
            </section>

            {/* --- Footer & Contact --- */}
            <footer className="py-4 bg-light border-top">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p className="mb-0 text-muted">Tagline: “Made in Digital India — Elevate Your Brand with Indokona.”</p>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <h5 className="mb-2">📱 Stay Connected</h5>
                            <p className="mb-0">Website: <a href="www.indokona.com" className="text-decoration-none">www.indokona.com</a></p>
                            <p className="mb-0">Support: <span className="fw-bold">+91 96259 95155</span></p>
                            <p className="mb-0">Email: indokonaoutsourcing@gmail.com</p>
                            <p className="mb-0 text-success">App: Android & iOS — coming soon</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default MyStore;