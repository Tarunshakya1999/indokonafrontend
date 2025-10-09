import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Nav";
import Footer from "./Footer";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/contact/",
        form
      );
      setStatus(res.data.msg);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(135deg, #001f3f, #003366, #0077b6)",
          minHeight: "100vh",
          color: "white",
          paddingTop: "80px",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="fw-bold display-5 mb-3" style={{ letterSpacing: "2px" }}>
            <i className="fas fa-headset me-2 text-info"></i> Contact Indokona Fintech
          </h1>
          <p className="lead text-light">
            Have questions or need support? We’re here to help you 24/7.
          </p>
        </div>

        {/* Status Message */}
        {status && (
          <div className="alert alert-info text-center w-75 mx-auto shadow-lg">
            {status}
          </div>
        )}

        {/* Contact Form */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <form
                onSubmit={handleSubmit}
                className="p-5 rounded shadow-lg bg-light text-dark"
                data-aos="zoom-in"
                style={{
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                }}
              >
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold text-primary">
                    Full Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white border-0">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0 shadow-sm"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label fw-semibold text-primary">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white border-0">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 shadow-sm"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="form-label fw-semibold text-primary">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white border-0">
                      <i className="fas fa-phone"></i>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control border-0 shadow-sm"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label fw-semibold text-primary">
                    Message
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white border-0">
                      <i className="fas fa-comment-dots"></i>
                    </span>
                    <textarea
                      name="message"
                      className="form-control border-0 shadow-sm"
                      rows="4"
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg px-5 text-white"
                    style={{
                      background:
                        "linear-gradient(45deg, #0077b6, #00b4d8, #90e0ef)",
                      border: "none",
                      fontWeight: "600",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div
            className="text-center text-light mt-5"
            data-aos="fade-up"
            style={{ lineHeight: "1.8" }}
          >
            <h4 className="fw-bold mb-3 text-info">Get in Touch</h4>
            <p>
              📍 <b>Head Office:</b> Indokona Credit Bazar Pvt. Ltd., New Delhi, India
              <br />
              📞 <b>Phone:</b> +91-9876543210
              <br />
              📧 <b>Email:</b> support@indokona.com
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
