import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TrademarkForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    applicant_name: "",
    mobile: "",
    email: "",
    business_type: "",
    brand_name: "",
    classes: [],
    business_activity: "",
    address: "",
    state: "",
    pincode: "",
    brand_logo: null,
    aadhaar: null,
    pan: null,
    business_proof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleClassChange = (e) => {
    const value = e.target.value;
    const updated = formData.classes.includes(value)
      ? formData.classes.filter((v) => v !== value)
      : [...formData.classes, value];

    setFormData({ ...formData, classes: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.classes.length === 0) {
      alert("Please select at least 1 trademark class.");
      return;
    }

    setLoading(true);
    const fd = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "classes") {
        value.forEach((cls) => fd.append("classes", cls));
      } else {
        fd.append(key, value);
      }
    });

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/trademark",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="container mt-4 p-4 shadow bg-white rounded text-center">
        <h2 className="text-success">🎉 Trademark Form Submitted Successfully!</h2>
        <p className="mt-3">Our team will contact you soon.</p>
        <a href="/" className="btn btn-primary mt-3">
          Go Home
        </a>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4 shadow bg-white rounded">
      <h2 className="text-center mb-4 fw-bold">Trademark Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* ---------------------- ROW 1 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>
              Applicant Name <span className="text-danger">*</span>
            </label>
            <input type="text" name="applicant_name" className="form-control" required onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>
              Mobile Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ---------------------- ROW 2 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>
              Email ID <span className="text-danger">*</span>
            </label>
            <input type="email" name="email" className="form-control" required onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>
              Business Type <span className="text-danger">*</span>
            </label>
            <select name="business_type" className="form-control" required onChange={handleChange}>
              <option value="">Select</option>
              <option>Owner</option>
              <option>Firm</option>
              <option>Pvt Ltd</option>
              <option>LLP</option>
            </select>
          </div>
        </div>

        {/* ---------------------- ROW 3 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>
              Brand / Trademark Name <span className="text-danger">*</span>
            </label>
            <input type="text" name="brand_name" className="form-control" required onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>
              Brand Logo Upload <span className="text-danger">*</span>
            </label>
            <input type="file" name="brand_logo" className="form-control" accept="image/*" required onChange={handleFile} />
          </div>
        </div>

        {/* ---------------------- CLASS SELECTION ---------------------- */}
        <div className="mb-3">
          <label>
            Select Trademark Classes <span className="text-danger">*</span>
          </label>
          <div className="row mt-2">
            {[
              "01","02","03","04","05","06","07","08","09","10",
              "11","12","13","14","15","16","17","18","19","20",
              "21","22","23","24","25","26","27","28","29","30",
              "31","32","33","34","35","36","37","38","39","40",
              "41","42","43","44","45"
            ].map((cls) => (
              <div className="col-md-2 col-3 mb-1" key={cls}>
                <input type="checkbox" value={cls} onChange={handleClassChange} /> {cls}
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------- BUSINESS ACTIVITY ---------------------- */}
        <div className="mb-3">
          <label>
            Business Activity Description <span className="text-danger">*</span>
          </label>
          <textarea name="business_activity" className="form-control" required onChange={handleChange}></textarea>
        </div>

        {/* ---------------------- ADDRESS ---------------------- */}
        <div className="mb-3">
          <label>
            Full Address <span className="text-danger">*</span>
          </label>
          <textarea name="address" className="form-control" required onChange={handleChange}></textarea>
        </div>

        {/* ---------------------- ROW 4 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>
              State <span className="text-danger">*</span>
            </label>
            <input type="text" name="state" className="form-control" required onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>
              Pincode <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              className="form-control"
              required
              pattern="[0-9]{6}"
              maxLength="6"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ---------------------- FILE UPLOADS ---------------------- */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>
              Aadhaar Upload <span className="text-danger">*</span>
            </label>
            <input type="file" name="aadhaar" className="form-control" required onChange={handleFile} />
          </div>

          <div className="col-md-4 mb-3">
            <label>
              PAN Upload <span className="text-danger">*</span>
            </label>
            <input type="file" name="pan" className="form-control" required onChange={handleFile} />
          </div>

          <div className="col-md-4 mb-3">
            <label>
              Proof of Business <span className="text-danger">*</span>
            </label>
            <input type="file" name="business_proof" className="form-control" required onChange={handleFile} />
          </div>
        </div>

        {/* ---------------------- SUBMIT ---------------------- */}
        <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
          {loading ? (
            <span className="spinner-border spinner-border-sm me-2"></span>
          ) : null}
          {loading ? "Submitting..." : "Submit Trademark Application"}
        </button>
      </form>
    </div>
  );
}
