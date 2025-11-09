import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FaUser, FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import { MdHowToReg } from "react-icons/md";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("info");
  const [loading, setLoading] = useState(false); // ✅ loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setMsg("Password and Confirm Password do not match.");
      setMsgType("danger");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/register/",
        { username, email, password, password2, role },
        { headers: { "Content-Type": "application/json" } }
      );

      setMsg("Registration Successful! Redirecting to login...");
      setMsgType("success");

      // ⏱ Show message for 4 seconds before redirect
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        const errorData = err.response.data;

        if (errorData.username) {
          setMsg("Username already exists.");
        } else if (errorData.email) {
          setMsg("Email already exists.");
        } else if (errorData.password) {
          setMsg("Password error: " + errorData.password[0]);
        } else if (errorData.role) {
          setMsg("Please select a valid role.");
        } else {
          setMsg("Something went wrong.");
        }
      } else {
        setMsg("Server error.");
      }
      setMsgType("danger");
    }
  };

  return (
    <>
      <Nav />
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        }}
      >
        <div className="col-md-8 col-lg-5">
          <div
            className="card shadow-lg border-0 rounded-4 p-4"
            style={{ backgroundColor: "white" }}
          >
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold text-dark">
                🚀 Create Your Account
              </h2>

              {msg && (
                <div
                  className={`alert alert-${msgType} text-center fw-semibold rounded-3`}
                >
                  {msg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUser className="me-2 text-primary" /> Username
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaEnvelope className="me-2 text-danger" /> Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaLock className="me-2 text-warning" /> Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaLock className="me-2 text-success" /> Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Confirm your password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                  />
                </div>

                {/* Role */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUserShield className="me-2 text-info" /> Select Role
                  </label>
                  <select
                    className="form-control rounded-pill shadow-sm"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">-- Choose Role --</option>
                    <option value="Fintech">Indokona Fintech</option>
                    <option value="Suit">Indokona Suit</option>
                    <option value="SaaS">Indokona SaaS</option>
                    <option value="M2M">Indokona M2M</option>
                    <option value="Store">Digital Store</option>
                    <option value="Acadmy">Acadmy</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg fw-semibold rounded-pill shadow-sm d-flex justify-content-center align-items-center"
                    style={{
                      background: "linear-gradient(90deg, #00b09b, #96c93d)",
                      color: "white",
                      transition: "all 0.3s ease-in-out",
                    }}
                    disabled={loading} // disable button while loading
                    onMouseOver={(e) =>
                      (e.target.style.background =
                        "linear-gradient(90deg, #11998e, #38ef7d)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background =
                        "linear-gradient(90deg, #00b09b, #96c93d)")
                    }
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Registering...
                      </>
                    ) : (
                      <>
                        <MdHowToReg className="me-2 fs-5" /> Register
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Login Redirect */}
              <p className="text-center text-muted mt-3">
                Already have an account?{" "}
                <Link
                  to="/login2"
                  className="fw-semibold"
                  style={{ color: "#1e3c72", textDecoration: "none" }}
                >
                  Login As User
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
