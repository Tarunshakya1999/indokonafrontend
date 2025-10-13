import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";

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
    setLoading(true); // start loader

    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("message", formData.message);
    data.append("rating", formData.rating);
    if (formData.videos) data.append("videos", formData.videos);

    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/feedback/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
      setFormData({ name: "", role: "Suite", message: "", videos: null, rating: 5 });
    } catch (err) {
      console.error(err);
      alert("Failed to submit testimonial. Try again!");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
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
            <Spinner animation="border" variant="primary" style={{ width: "4rem", height: "4rem" }} />
            <p className="mt-3 fw-bold text-primary">Submitting your testimonial...</p>
          </div>
        </div>
      )}

      <Container className="mt-5">
        <h2 className="mb-4 text-primary fw-bold">Add Testimonial</h2>

        {success && <Alert variant="success">Testimonial submitted!</Alert>}

        <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded-4 bg-light">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Suite">Suite</option>
              <option value="Fintech">Fintech</option>
              <option value="SaaS">SaaS</option>
              <option value="Mind to market">Mind to market</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Video</Form.Label>
            <Form.Control type="file" name="videos" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </Form.Control>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default TestimonialForm;
