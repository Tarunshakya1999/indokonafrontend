import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa"; // logout icon
import "./index.css";

const Navbar = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUsername(null);
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          background: "linear-gradient(90deg, #0a3d62, #1e3799)",
          zIndex: 1030,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold text-white fs-4 d-flex align-items-center"
            to="/"
          >
            <i className="fa-solid fa-lock me-2"></i>
            Indokona <span className="text-warning">.com</span>
          </Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/">
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/about">
                  <FaInfoCircle className="me-2" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/services">
                  <FaServicestack className="me-2" /> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/feedbacklist">
                  <i className="fa-regular fa-image"></i> <span style={{marginLeft:"7px"}}>Our Gallery</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/contact">
                  <FaEnvelope className="me-2" /> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/store">
                  <i className="fa-solid fa-store"></i> <span style={{marginLeft:"7px"}}>Digital Store</span>
                </Link>
              </li>
              {/* ✅ View Cart Link */}
              <li className="nav-item">
                <Link className="nav-link cool-link d-flex align-items-center" to="/cart">
                  <FaShoppingCart className="me-2" /> View Cart
                </Link>
              </li>
              <li>
              <Link to="/add-product" className="btn btn-primary pills">Add Product</Link>
               
              </li>
            </ul>

            {username ? (
              <div className="ms-lg-3 d-flex align-items-center">
                <span className="text-white me-3 fw-bold">Welcome, {username}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger rounded-pill px-4 fw-bold d-flex align-items-center"
                >
                  <FaSignOutAlt className="me-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="ms-lg-3 d-flex">
                <Link
                  to="/login"
                  className="btn btn-outline-light rounded-pill px-4 me-2 d-flex align-items-center"
                >
                  <FiLogIn className="me-2" /> Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-warning rounded-pill px-4 fw-bold d-flex align-items-center"
                >
                  <FaUserPlus className="me-2" /> Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: "70px" }}></div>
    </>
  );
};

export default Navbar;
