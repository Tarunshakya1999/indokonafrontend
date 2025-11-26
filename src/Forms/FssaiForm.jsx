import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FssaiForm() {
  const [step, setStep] = useState(1);

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

  // Handle text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file fields
  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Submit API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/fssai/",
        fd,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      alert("FSSAI Registration Submitted Successfully!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="container mt-4 p-4 shadow-lg bg-white rounded" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-4">FSSAI BASIC REGISTRATION FORM</h2>

      {/* PROGRESS */}
      <div className="progress mb-4" style={{ height: "10px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="mb-3">
              <label className="form-label">Applicant Name</label>
              <input type="text" className="form-control"
                name="applicant_name" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Business Name</label>
              <input type="text" className="form-control"
                name="business_name" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Full Address</label>
              <textarea className="form-control"
                name="address" onChange={handleChange} required></textarea>
            </div>

            <button type="button" className="btn btn-primary w-100"
              onClick={() => setStep(2)}>Next</button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="mb-3">
              <label className="form-label">Type of Business</label>
              <select name="business_type" className="form-control"
                onChange={handleChange} required>
                <option value="">Select</option>
                <option>Meat Shop</option>
                <option>Chicken Shop</option>
                <option>Fish Shop</option>
                <option>Restaurant (Small)</option>
                <option>Food Stall</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Annual Turnover</label>
              <select name="turnover" className="form-control"
                onChange={handleChange} required>
                <option value="">Select</option>
                <option value="below12">Below ₹12 Lakhs</option>
                <option value="above12">Above ₹12 Lakhs</option>
              </select>
            </div>

            <button className="btn btn-secondary me-2"
              onClick={() => setStep(1)}>Back</button>
            <button className="btn btn-primary"
              onClick={() => setStep(3)}>Next</button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div className="mb-3">
              <label>Aadhar Card *</label>
              <input type="file" name="aadhar"
                className="form-control"
                onChange={handleFile} required />
            </div>

            <div className="mb-3">
              <label>Applicant Photo *</label>
              <input type="file" name="photo"
                className="form-control"
                onChange={handleFile} required />
            </div>

            <div className="mb-3">
              <label>Shop Documents *</label>
              <input type="file" name="shop_docs"
                className="form-control"
                onChange={handleFile} required />
            </div>

            <div className="mb-3">
              <label>Layout Photo *</label>
              <input type="file" name="layout"
                className="form-control"
                onChange={handleFile} required />
            </div>

            <button className="btn btn-secondary me-2"
              onClick={() => setStep(2)}>Back</button>
            <button className="btn btn-primary"
              onClick={() => setStep(4)}>Next</button>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <div className="mb-3">
              <label>Processing Method</label>
              <select name="processing" className="form-control"
                onChange={handleChange} required>
                <option value="">Select</option>
                <option>Fresh Chicken Sale</option>
                <option>Meat Cutting & Selling</option>
                <option>Food Handling / Storage</option>
              </select>
            </div>

            <div className="form-check mb-3 bg-warning p-3 rounded">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label ms-2">
                I hereby declare that all the information is true.
              </label>
            </div>

            <button className="btn btn-secondary me-2"
              onClick={() => setStep(3)}>Back</button>

            <button type="submit" className="btn btn-success">
              Submit Application
            </button>
          </>
        )}

      </form>
    </div>
  );
}
