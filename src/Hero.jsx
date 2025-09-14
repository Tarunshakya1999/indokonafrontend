import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";

export default function Hero() {
  const [Data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/hero/");
      setData(response.data);
    } catch (err) {
      alert("Oops! Something went wrong");
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar />

      <section
        className="d-flex justify-content-center align-items-center vh-100 text-white"
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e3799)",
        }}
      >
        <div className="text-center">
          {Data.length > 0 && (
            <>
              {/* ✅ Circle Logo with Glow Effect */}
              <div className="mb-4">
                <img
                  src={Data[0].image}
                  alt={Data[0].name}
                  className="rounded-circle shadow-lg border border-4 border-warning"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    boxShadow: "0 0 30px rgba(241, 196, 15, 0.6)",
                  }}
                />
              </div>

              {/* ✅ Website Name */}
              <h1 className="fw-bold display-4">
                {Data[0].name}
                <span style={{ color: "#f1c40f" }}> FinTech</span>
              </h1>

              {/* ✅ Tagline */}
              <p className="fs-4 fst-italic mt-3 text-warning">
                {Data[0].tagline}
              </p>

              {/* ✅ Supportline */}
              <p className="fs-6 text-light mb-4">{Data[0].supportline}</p>

              {/* ✅ CTA Buttons */}
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="/services"
                  className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm"
                >
                  Explore Services
                </a>
                <a
                  href="/signup"
                  className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm"
                >
                  Get Started
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
