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
  const [service, setService] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("info");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fintechRoles = [
    "Retailer",
    "Distributor",
    "Master Distributor",
    "Super Distributor",
    "White Label",
  ];

  const storeRoles = [
    "Basic Reseller",
    "Pro Reseller",
    "Gold Reseller",
    "Diamond Reseller",
  ];

  const getRoleOptions = () => {
    if (service === "Fintech") return fintechRoles;
    if (service === "Store") return storeRoles;
    return [];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setMsg("Password and Confirm Password do not match.");
      setMsgType("danger");
      return;
    }

    // ✅ Check role only for Fintech & Store
    if ((service === "Fintech" || service === "Store") && !role) {
      setMsg("Please select a role for this service.");
      setMsgType("danger");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      // ✅ Send role only when needed
      const data = { username, email, password, password2, service };
      if (service === "Fintech" || service === "Store") {
        data.role = role;
      }

      await axios.post(
        "https://indokonabackend-1.onrender.com/api/register/",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      setMsg("✅ Registration Successful! Redirecting to login...");
      setMsgType("success");

      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        if (errorData.username) {
          setMsg("❌ Username already exists.");
        } else if (errorData.email) {
          setMsg("❌ Email already exists.");
        } else if (errorData.password) {
          setMsg("❌ Password error: " + errorData.password[0]);
        } else if (errorData.role) {
          setMsg("❌ Please select a valid role.");
        } else {
          setMsg("❌ Something went wrong.");
        }
      } else {
        setMsg("⚠️ Server error. Try again later.");
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
                <div className={`alert alert-${msgType} text-center fw-semibold rounded-3`}>
                  {msg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUserShield className="me-2 text-primary" /> Select Service
                  </label>
                  <select
                    className="form-control rounded-pill shadow-sm"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      setRole("");
                    }}
                    required
                  >
                    <option value="">-- Choose Service --</option>
                    <option value="Fintech">Indokona Fintech</option>
                    <option value="Suit">Indokona Suite</option>
                    <option value="SaaS">Indokona SaaS</option>
                    <option value="M2M">Indokona M2M</option>
                    <option value="Store">Indokona Digital Store</option>
                    <option value="Acadmy">Indokona Academy</option>
                  </select>
                </div>

                {getRoleOptions().length > 0 && (
                  <div className="mb-3 fade-in">
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
                      {getRoleOptions().map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg fw-semibold rounded-pill shadow-sm d-flex justify-content-center align-items-center"
                    style={{
                      background: "linear-gradient(90deg, #00b09b, #96c93d)",
                      color: "white",
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
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

              <p className="text-center text-muted mt-3">
                Already have an account?{" "}
                <Link to="/login" className="fw-semibold" style={{ color: "#1e3c72" }}>
                  Login As User
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
