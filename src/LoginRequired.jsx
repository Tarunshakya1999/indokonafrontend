// LoginRequired.js
import React from "react";
import { Link } from "react-router-dom";

export default function LoginRequired() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-danger mb-3">⚠️ Please Login First</h1>
      <p className="fs-5 mb-3">You need to login to access this page.</p>
      <Link to="/login" className="btn btn-primary rounded-pill px-4 py-2">
        Go to Login
      </Link>
    </div>
  );
}
