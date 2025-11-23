import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/login2/",
        {
          username: form.username,
          password: form.password,
        }
      );

      // Store tokens
      localStorage.setItem("access_main", res.data.access);
      localStorage.setItem("refresh_main", res.data.refresh);
      localStorage.setItem("myusername", res.data.username);

      setMsg("Login successful! Redirecting...");
      setMsgType("success");
      setTimeout(() => navigate("/wall"), 1500);

    } catch (err) {
      setMsg("Invalid username or password");
      setMsgType("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
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

        .login-wrapper {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
          padding: 55px 45px;
          backdrop-filter: blur(10px);
          animation: slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          overflow: hidden;
        }

        .login-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .welcome-section {
          text-align: center;
          margin-bottom: 45px;
        }

        .login-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 45px rgba(102, 126, 234, 0.5);
          }
        }

        .welcome-section h2 {
          color: #2d3748;
          font-weight: 700;
          font-size: 34px;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .welcome-section p {
          color: #718096;
          font-size: 15px;
          font-weight: 400;
        }

        .form-group {
          margin-bottom: 28px;
          position: relative;
        }

        .form-label {
          display: block;
          color: #4a5568;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 14px;
          letter-spacing: 0.3px;
        }

        .input-wrapper {
          position: relative;
        }

        .form-control {
          width: 100%;
          padding: 15px 20px;
          padding-left: 50px;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f7fafc;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }

        .form-control:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 5px rgba(102, 126, 234, 0.1);
          transform: translateY(-1px);
        }

        .form-control::placeholder {
          color: #a0aec0;
        }

        .input-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          transition: color 0.3s ease;
          pointer-events: none;
        }

        .form-control:focus + .input-icon {
          color: #667eea;
        }

        .password-toggle {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #a0aec0;
          cursor: pointer;
          padding: 5px;
          transition: color 0.3s ease;
        }

        .password-toggle:hover {
          color: #667eea;
        }

        .btn-login {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 14px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-login:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
        }

        .btn-login:active {
          transform: translateY(-1px);
        }

        .alert {
          padding: 14px 20px;
          border-radius: 12px;
          margin-bottom: 25px;
          font-size: 14px;
          font-weight: 500;
          animation: slideDown 0.4s ease;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert-success {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
        }

        .alert-danger {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
        }

        .login-footer {
          text-align: center;
          margin-top: 35px;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }

        .login-footer p {
          color: #718096;
          font-size: 14px;
          margin-bottom: 0;
        }

        .login-footer a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
        }

        .login-footer a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #667eea;
          transition: width 0.3s ease;
        }

        .login-footer a:hover::after {
          width: 100%;
        }

        .login-footer a:hover {
          color: #764ba2;
        }

        .forgot-password {
          text-align: right;
          margin-top: 10px;
        }

        .forgot-password a {
          color: #667eea;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .forgot-password a:hover {
          color: #764ba2;
        }

        @media (max-width: 576px) {
          .login-card {
            padding: 45px 35px;
          }
          
          .welcome-section h2 {
            font-size: 30px;
          }

          .login-icon {
            width: 75px;
            height: 75px;
          }
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="welcome-section">
            <div className="login-icon">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
            <h2>Welcome Back</h2>
            <p>Please login to your account</p>
          </div>

          {msg && (
            <div className={`alert ${msgType === 'success' ? 'alert-success' : 'alert-danger'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {msgType === 'success' ? (
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                ) : (
                  <circle cx="12" cy="12" r="10"></circle>
                )}
                {msgType === 'success' ? (
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                ) : (
                  <>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </>
                )}
              </svg>
              {msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-wrapper">
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  required
                />
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          <div className="login-footer">
            <p>Don't have an account? <a href="/signup22">Sign up here</a></p>
          </div>
        </div>
      </div>
    </>
  );
}