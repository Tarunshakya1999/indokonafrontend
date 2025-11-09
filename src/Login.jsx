import React, { useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    setIsSuccess(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://indokonabackend-1.onrender.com/login/",
        { username, password }
      );

      const { access, refresh, service, role } = response.data;

      // Store tokens & user info
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("username", username);
      localStorage.setItem("service", service);
      localStorage.setItem("role", role);

      setMsg("Login successful! Redirecting...");
      setIsSuccess(true);

      setTimeout(() => {
        setLoading(false);

        // ✅ Redirect based on service
        if (service === "Store") {
          navigate("/digital-store-dashboard");
        } else if (service === "Fintech") {
          navigate("/fintech-dashboard");
        } else if (service === "SaaS") {
          navigate("/saas-dashboard");
        } else if (service === "M2M") {
          navigate("/m2m-dashboard");
        } else if (service === "Acadmy") {
          navigate("/academy-dashboard");
        } else {
          navigate("/");
        }
      }, 1500);
    } catch (err) {
      const errorMsg =
        err.response?.data?.detail || "Invalid credentials. Try again!";
      setMsg(errorMsg);
      setIsSuccess(false);
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="login-page">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card glass-card p-4 shadow-lg rounded-4">
                <h2 className="text-center mb-4 text-primary fw-bold">
                  Login to Your Account
                </h2>

                {msg && (
                  <div
                    className={`alert ${
                      isSuccess ? "alert-success" : "alert-danger"
                    } text-center fw-semibold`}
                  >
                    {msg}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <div className="input-group shadow-sm">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <i className="fa-solid fa-eye"></i>
                        ) : (
                          <i className="fa-solid fa-eye-slash"></i>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn rounded-pill shadow"
                      style={{ backgroundColor: "green", color: "white" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          ></span>
                          Logging in...
                        </>
                      ) : (
                        "Login Now"
                      )}
                    </button>
                  </div>

                  <p className="text-center text-muted mt-3">
                    Don't have an account?{" "}
                    <Link to="/register" className="fw-semibold text-decoration-none">
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
