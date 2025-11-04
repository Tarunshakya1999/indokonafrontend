import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import Navbar from "./Nav";
import Footer from "./Footer";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "Suite",
    message: "",
    videos: null,
    rating: 5,
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // loader state

  // success message 5 sec baad gayab ho jaye
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    if (e.target.name === "videos") {
      setFormData({ ...formData, videos: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("message", formData.message);
    data.append("rating", formData.rating);
    if (formData.videos) data.append("videos", formData.videos);

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/feedback/",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccess(true);
      setFormData({
        name: "",
        role: "Suite",
        message: "",
        videos: null,
        rating: 5,
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit testimonial. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        {/* Blur + Loader Overlay */}
        {loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(5px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div className="text-center">
              <Spinner
                animation="border"
                variant="primary"
                style={{ width: "4rem", height: "4rem" }}
              />
              <p className="mt-3 fw-bold text-primary">
                Submitting your feedback...
              </p>
            </div>
          </div>
        )}

        <Container className="mt-5">
          <h2 className="mb-4 text-primary fw-bold text-center">
            Share Your Valuable Feedback & Experience 🌟
          </h2>
          <h5 className="text-center text-success">
            You Can See Your Rating and Reviews in Our Gallery Section{" "}
          </h5>

          {success && (
            <Alert variant="success" className="text-center fw-semibold">
              ✅ Thank you for your feedback! We truly appreciate your time and
              support.
            </Alert>
          )}

          <Form
            onSubmit={handleSubmit}
            className="p-4 shadow-lg rounded-4 bg-light border border-2 border-primary-subtle"
          >
            {/* Name Field */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </Form.Group>

            {/* Service Type */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Select Our Service
              </Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="Suite">Indokona Suite</option>
                <option value="Fintech">Indokona Fintech</option>
                <option value="SaaS">Indokona SaaS</option>
                <option value="Mind to market">Mind To Market</option>
              </Form.Select>
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Your Feedback / Experience
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Tell us about your experience or suggestions..."
              />
            </Form.Group>

            {/* Video Upload */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Upload a Short Review Video
              </Form.Label>
              <Form.Control
                type="file"
                name="videos"
                accept="video/*"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                You can upload a short testimonial video (max size ~50MB).
              </Form.Text>
            </Form.Group>

            {/* Rating */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Rate Your Experience
              </Form.Label>
              <Form.Select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="1">⭐ 1 - Poor</option>
                <option value="2">⭐⭐ 2 - Fair</option>
                <option value="3">⭐⭐⭐ 3 - Good</option>
                <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
              </Form.Select>
            </Form.Group>

            <div className="text-center mt-4">
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="px-5 fw-bold rounded-pill"
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </Button>
            </div>
          </Form>
        </Container>

        {/* Inline CSS Styling */}
        <style jsx>{`
          h2 {
            font-family: "Poppins", sans-serif;
            letter-spacing: 0.5px;
          }

          .form-control:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          }

          .btn-primary {
            background: linear-gradient(90deg, #007bff, #00bfff);
            border: none;
            transition: all 0.3s ease-in-out;
          }

          .btn-primary:hover {
            background: linear-gradient(90deg, #0056b3, #0088cc);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
          }
        `}</style>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default TestimonialForm;
