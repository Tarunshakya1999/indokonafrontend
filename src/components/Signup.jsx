import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/register2/",
        form
      );

      setMsg("Signup successful!");
      setMsgType("success");
      setTimeout(() => navigate("/login22"), 1500);
    } catch (err) {
      setMsg("Error: " + err.response.data.error);
      setMsgType("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .signup-container {
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
          padding: 20px;
        }

        .signup-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 50px 40px;
          backdrop-filter: blur(10px);
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .signup-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .signup-header h2 {
          color: #333;
          font-weight: 700;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .signup-header p {
          color: #666;
          font-size: 15px;
          font-weight: 400;
        }

        .form-group {
          margin-bottom: 25px;
          position: relative;
        }

        .form-group label {
          display: block;
          color: #555;
          font-weight: 500;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .form-control {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f8f9fa;
          font-family: 'Poppins', sans-serif;
        }

        .form-control:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-control::placeholder {
          color: #aaa;
        }

        .btn-signup {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-signup:active {
          transform: translateY(0);
        }

        .alert-message {
          padding: 12px 20px;
          border-radius: 10px;
          margin-bottom: 25px;
          font-size: 14px;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .signup-footer {
          text-align: center;
          margin-top: 30px;
          color: #666;
          font-size: 14px;
        }

        .signup-footer a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .signup-footer a:hover {
          color: #764ba2;
        }

        .icon-wrapper {
          text-align: center;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 36px;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 576px) {
          .signup-card {
            padding: 40px 30px;
          }
          
          .signup-header h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="signup-container">
        <div className="signup-card">
          <div className="icon-wrapper">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="signup-header">
            <h2>Create Account</h2>
            <p>Join us today! It only takes a minute</p>
          </div>

          {msg && (
            <div className={`alert-message ${msgType === 'success' ? 'alert-success' : 'alert-error'}`}>
              {msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Create a password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>

          <div className="signup-footer">
            Already have an account? <a href="/login22">Login here</a>
          </div>
        </div>
      </div>
    </>
  );
}