// TestimonialList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://indokonabackend-1.onrender.com/api/feedback/")
      .then((res) => {
        setTestimonials(res.data);
        console.log("Response : ", res.data);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2>All Testimonials</h2>
      <Row>
        {testimonials.map((t) => (
          <Col md={4} key={t.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {t.role}
                </Card.Subtitle>
                <Card.Text>{t.message}</Card.Text>
                {t.videos && (
                  <video width="100%" controls height="20%">
                    <source src={t.videos} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialList;
