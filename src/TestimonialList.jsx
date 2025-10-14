import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

// ⏱️ Helper function: converts timestamp → "x time ago"
const timeAgo = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval > 1 ? "s" : ""} ago`;
  return "Just now";
};

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://indokonabackend-1.onrender.com/api/feedback/")
      .then((res) => {
        // ✅ Directly use backend created_at timestamp
        const updatedData = res.data.map((item) => ({
          ...item,
          local_time: item.created_at,
        }));

        setTestimonials(updatedData);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <div className="testimonial-section">
      <Container className="py-5">
        <h2 className="text-center mb-5 section-title">
          💬 What Our Clients Say
        </h2>

        <Row>
          {testimonials.map((t) => {
            const rating = parseInt(t.rating) || 0;

            return (
              <Col md={4} key={t.id} className="mb-4">
                <Card className="testimonial-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <Card.Title className="testimonial-name">{t.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <Badge bg="info" className="role-badge">
                          {t.role || "Client"}
                        </Badge>
                      </Card.Subtitle>

                      {/* ⭐ Star Rating */}
                      <div className="stars mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 💬 Message */}
                    <Card.Text className="testimonial-message">“{t.message}”</Card.Text>

                    {/* 🎥 Video */}
                    {t.videos && (
                      <video className="testimonial-video" controls preload="none">
                        <source src={t.videos} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* 🕒 Upload Time */}
                    <div className="upload-time mt-3 text-muted">
                      ⏱️ {timeAgo(t.local_time)}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Inline CSS */}
      <style>{`
        .testimonial-section {
          background: linear-gradient(135deg, #e3f2fd, #f8f9fa);
          min-height: 100vh;
        }
        .section-title {
          font-weight: 800;
          color: #007bff;
          letter-spacing: 0.5px;
          text-shadow: 0px 1px 3px rgba(0,0,0,0.15);
        }
        .testimonial-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          background: white;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .testimonial-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #343a40;
        }
        .role-badge {
          background: linear-gradient(90deg, #007bff, #00b4d8);
          color: white;
          font-size: 0.9rem;
        }
        .testimonial-message {
          flex-grow: 1;
          color: #555;
          font-style: italic;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .stars .star {
          font-size: 1.3rem;
          color: #ddd;
          margin-right: 3px;
        }
        .stars .star.filled {
          color: #ffc107;
        }
        .testimonial-video {
          width: 100%;
          max-height: 250px;
          object-fit: cover;
          border-radius: 12px;
          margin-top: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .upload-time {
          font-size: 0.9rem;
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default TestimonialList;
