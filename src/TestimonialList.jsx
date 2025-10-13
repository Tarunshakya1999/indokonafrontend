import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://indokonabackend-1.onrender.com/api/feedback/")
      .then((res) => {
        setTestimonials(res.data);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "700", color: "#007bff" }}
      >
        What Our Clients Say
      </h2>
      <Row>
        {testimonials.map((t) => (
          <Col md={4} key={t.id} className="mb-4">
            <Card className="shadow-sm rounded-4 h-100 border-0">
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                    {t.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <Badge bg="secondary">{t.role}</Badge>
                  </Card.Subtitle>

                  {/* Star Rating */}
                  <Card.Text className="mb-2">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < Number(t.rating) ? (
                        <span
                          key={i}
                          style={{
                            color: "#ffc107",
                            fontSize: "1.2rem",
                            marginRight: "2px",
                          }}
                        >
                          ★
                        </span>
                      ) : (
                        <span
                          key={i}
                          style={{
                            color: "#e0e0e0",
                            fontSize: "1.2rem",
                            marginRight: "2px",
                          }}
                        >
                          ★
                        </span>
                      )
                    )}
                  </Card.Text>
                </div>

                <Card.Text
                  className="mb-3"
                  style={{ flexGrow: 1, color: "#555", fontStyle: "italic" }}
                >
                  "{t.message}"
                </Card.Text>

                {t.videos && (
                  <video
                    width="100%"
                    style={{
                      maxHeight: "350px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginTop: "auto",
                    }}
                    controls
                  >
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
