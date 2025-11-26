import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FssaiForm() {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    applicant_name: "",
    business_name: "",
    address: "",
    business_type: "",
    turnover: "",
    processing: "",
    aadhar: null,
    photo: null,
    shop_docs: null,
    layout: null,
  });

  const [errors, setErrors] = useState({}); // <-- NEW

  // TEXT INPUT HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // FILE INPUT HANDLER
  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // -----------------------------
  // STEP-WISE VALIDATION FUNCTION
  // -----------------------------
  const validateStep = () => {
    let temp = {};

    if (step === 1) {
      if (!formData.applicant_name) temp.applicant_name = "Required";
      if (!formData.business_name) temp.business_name = "Required";
      if (!formData.address) temp.address = "Required";
    }

    if (step === 2) {
      if (!formData.business_type) temp.business_type = "Required";
      if (!formData.turnover) temp.turnover = "Required";
    }

    if (step === 3) {
      if (!formData.aadhar) temp.aadhar = "Required";
      if (!formData.photo) temp.photo = "Required";
      if (!formData.shop_docs) temp.shop_docs = "Required";
      if (!formData.layout) temp.layout = "Required";
    }

    if (step === 4) {
      if (!formData.processing) temp.processing = "Required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // -----------------------------
  // NEXT BUTTON HANDLER
  // -----------------------------
  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  // -----------------------------
  // SUBMIT FORM
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    setLoading(true);
    setError(null);

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/fssai/",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong!");
    }
  };

  // SUCCESS PAGE
  if (submitted) {
    return (
      <div className="container text-center mt-5">
        <div className="p-5 shadow-lg bg-white rounded">
          <h2 className="text-success mb-3">🎉 Application Submitted!</h2>
          <p className="lead">We will contact you soon.</p>
          <a href="/" className="btn btn-primary mt-3">Go Home</a>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="p-5 shadow-lg bg-white rounded">
          <h2 className="text-danger mb-3">❌ Failed</h2>
          <p>{error}</p>
          <button className="btn btn-warning" onClick={() => setError(null)}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4 shadow-lg bg-white rounded" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-4">FSSAI BASIC REGISTRATION FORM</h2>

      {/* PROGRESS BAR */}
      <div className="progress mb-4" style={{ height: "10px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            {/* Applicant Name */}
            <div className="mb-3">
              <label className="form-label">Applicant Name</label>
              <input
                type="text"
                className={`form-control ${errors.applicant_name ? "is-invalid" : ""}`}
                name="applicant_name"
                onChange={handleChange}
              />
              {errors.applicant_name && <div className="invalid-feedback">{errors.applicant_name}</div>}
            </div>

            {/* Business Name */}
            <div className="mb-3">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                className={`form-control ${errors.business_name ? "is-invalid" : ""}`}
                name="business_name"
                onChange={handleChange}
              />
              {errors.business_name && <div className="invalid-feedback">{errors.business_name}</div>}
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Full Address</label>
              <textarea
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                name="address"
                onChange={handleChange}
              ></textarea>
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            <button onClick={handleNext} type="button" className="btn btn-primary w-100">Next</button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            {/* Business Type */}
            <div className="mb-3">
              <label className="form-label">Type of Business</label>
              <select
                name="business_type"
                className={`form-control ${errors.business_type ? "is-invalid" : ""}`}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Meat Shop</option>
                <option>Chicken Shop</option>
                <option>Fish Shop</option>
                <option>Restaurant (Small)</option>
                <option>Food Stall</option>
              </select>
              {errors.business_type && <div className="invalid-feedback">{errors.business_type}</div>}
            </div>

            {/* Turnover */}
            <div className="mb-3">
              <label className="form-label">Annual Turnover</label>
              <select
                name="turnover"
                className={`form-control ${errors.turnover ? "is-invalid" : ""}`}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="below12">Below ₹12 Lakhs</option>
                <option value="above12">Above ₹12 Lakhs</option>
              </select>
              {errors.turnover && <div className="invalid-feedback">{errors.turnover}</div>}
            </div>

            <button className="btn btn-secondary me-2" onClick={() => setStep(1)}>Back</button>
            <button className="btn btn-primary" type="button" onClick={handleNext}>Next</button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            {["aadhar", "photo", "shop_docs", "layout"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">{field.toUpperCase()}</label>
                <input
                  type="file"
                  name={field}
                  className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                  onChange={handleFile}
                />
                {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
              </div>
            ))}

            <button className="btn btn-secondary me-2" onClick={() => setStep(2)}>Back</button>
            <button className="btn btn-primary" type="button" onClick={handleNext}>Next</button>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <div className="mb-3">
              <label className="form-label">Processing Method</label>
              <select
                name="processing"
                className={`form-control ${errors.processing ? "is-invalid" : ""}`}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Fresh Chicken Sale</option>
                <option>Meat Cutting & Selling</option>
                <option>Food Handling / Storage</option>
              </select>
              {errors.processing && <div className="invalid-feedback">{errors.processing}</div>}
            </div>

            <div className="form-check mb-3 p-3 bg-warning rounded">
              <input type="checkbox" className="form-check-input" required />
              <label className="form-check-label ms-2">
                I hereby declare all details are true.
              </label>
            </div>

            <button className="btn btn-secondary me-2" onClick={() => setStep(3)}>Back</button>
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </>
        )}

      </form>
    </div>
  );
}
