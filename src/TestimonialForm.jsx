import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "Suite",
    message: "",
    videos: null,
    rating: 5,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "videos") {
      setFormData({ ...formData, videos: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setFormData({ name: "", role: "Suite", message: "", videos: null, rating: 5 });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Add Testimonial</h2>
      {success && <Alert variant="success">Testimonial submitted!</Alert>}
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default TestimonialForm;
