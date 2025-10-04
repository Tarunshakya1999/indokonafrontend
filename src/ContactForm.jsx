import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://djangobackend-e7rf.onrender.com/api/contact/", form);
      setStatus(res.data.msg);
      setForm({ name: "", email: "", phone: "", message: "" }); // clear form
    } catch (err) {
      setStatus("Failed to send message");
    }
  };

  // 👇 Auto-hide status after 2 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-black py-5">
      <h1
        className="text-center mb-4 fw-bold"
        style={{ color: "lawngreen" }}
        data-aos="fade-down"
      >
        <i className="fas fa-envelope me-2" style={{ color: "lawngreen" }}></i>
        Contact Me
      </h1>

      {status && <div className="alert alert-info text-center">{status}</div>}

      <div className="row justify-content-center">
        <div className="col-md-6" data-aos="zoom-in">
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-dark text-light shadow-lg rounded"
            style={{ border: "1px solid rgba(124,252,0,0.3)" }}
          >
            {/* Name Input */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "lawngreen" }}>
                Your Name
              </label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-light">
                  <i className="fas fa-user" style={{ color: "lawngreen" }}></i>
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark text-light border-light"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "lawngreen" }}>
                Your Email
              </label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-light">
                  <i className="fas fa-envelope" style={{ color: "lawngreen" }}></i>
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-dark text-light border-light"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "lawngreen" }}>
                Your Phone Number
              </label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-light">
                  <i className="fas fa-phone" style={{ color: "lawngreen" }}></i>
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="form-control bg-dark text-light border-light"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "lawngreen" }}>
                Message
              </label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-light">
                  <i
                    className="fas fa-comment-dots"
                    style={{ color: "lawngreen" }}
                  ></i>
                </span>
                <textarea
                  name="message"
                  className="form-control bg-dark text-light border-light"
                  rows="4"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100 mt-3"
              style={{
                background: "linear-gradient(45deg, lawngreen, #32cd32)",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <i
                className="fas fa-paper-plane me-2"
                style={{ color: "black" }}
              ></i>{" "}
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
   
    </>
  );
};

export default ContactForm;
