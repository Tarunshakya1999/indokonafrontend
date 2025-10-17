import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/contact/", formData, {
        // headers: { "Content-Type": "application/json" },
      });
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <div className="container my-5 p-4 bg-light rounded shadow" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 fw-bold text-primary">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">
            <FaUser className="me-2 text-primary" /> Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">
            <FaEnvelope className="me-2 text-primary" /> Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">
            <FaPhone className="me-2 text-primary" /> Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">
            <FaCommentDots className="me-2 text-primary" /> Message
          </label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Send Message
        </button>
      </form>

      {status && <p className="text-center mt-3">{status}</p>}
    </div>
  );
};

export default ContactForm;
