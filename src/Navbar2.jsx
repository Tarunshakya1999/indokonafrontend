import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Navbar2 = () => {
  return (
    <>
      <style>
        {`
  .back-fixed-btn {
    position: fixed;
    top: 6px;
    left: 12px;
    z-index: 2000;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    padding: 8px 8px;
    border: 1px solid rgba(255,193,7,0.4);
    transition: 0.3s ease;
  }

  .back-fixed-btn:hover {
    background: rgba(255,193,7,0.2);
    border-color: #ffc107;
    box-shadow: 0 0 10px rgba(255,193,7,0.7);
    transform: scale(1.08);
  }

  .back-icon {
    font-size: 26px;
    color: #ffc107;
  }

  .navbar-custom {
    backdrop-filter: blur(12px);
    background: rgba(15, 15, 15, 0.85) !important;
    border-bottom: 1px solid rgba(255, 193, 7, 0.20);
  }

  /* Premium nav link hover */
  .navbar-nav .nav-link {
    position: relative;
    color: #ffffff !important;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
  }

  .navbar-nav .nav-link:hover {
    color: #ffc107 !important;
    transform: translateY(-2px);
    background: rgba(255,193,7,0.1);
    box-shadow: 0 0 8px rgba(255,193,7,0.2);
  }

  /* Underline animation */
  .navbar-nav .nav-link::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #ffc107;
    transition: width 0.35s ease;
  }

  .navbar-nav .nav-link:hover::after {
    width: 100%;
  }

  .scroll-banner {
  width: 100%;
  overflow: hidden;
  background: #111;
  color: #ffc107;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255,193,7,0.4);
  display: flex;
  align-items: center;
  white-space: nowrap;
  letter-spacing: 0.8px;
}


`}
      </style>

      {/* Back button */}
      <Link to="/" className="back-fixed-btn">
        <FiArrowLeft className="back-icon" />
      </Link>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
        <div className="container">
          <a className="navbar-brand fw-bold text-center" style={{ color: "#ffc107"}}>
            My Digital Store
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/productlist">
                  Digital Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-warning ms-3" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      
      </nav>
     
    </>
    
  );
};

export default Navbar2;
