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

  // Text Fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // File Fields
  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Multiple Class Selection
  const handleClassChange = (e) => {
    const value = e.target.value;
    let updatedClasses = [...formData.classes];

    if (updatedClasses.includes(value)) {
      updatedClasses = updatedClasses.filter((c) => c !== value);
    } else {
      updatedClasses.push(value);
    }
    setFormData({ ...formData, classes: updatedClasses });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "classes") {
        value.forEach((c) => fd.append("classes", c));
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
      setLoading(false);
    } catch (err) {
      alert("Something went wrong!");
      setLoading(false);
    }
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
      <h2 className="text-center mb-4">Trademark Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* ROW 1 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Applicant Name</label>
            <input
              type="text"
              className="form-control"
              name="applicant_name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Business Type</label>
            <select
              className="form-control"
              name="business_type"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Owner</option>
              <option>Firm</option>
              <option>Pvt Ltd</option>
              <option>LLP</option>
            </select>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Brand Name (Trademark Name)</label>
            <input
              type="text"
              className="form-control"
              name="brand_name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Brand Logo Upload</label>
            <input
              type="file"
              className="form-control"
              name="brand_logo"
              accept="image/*"
              onChange={handleFile}
              required
            />
          </div>
        </div>

        {/* CLASS SELECTION */}
        <div className="mb-3">
          <label>Select Trademark Classes (Multiple)</label>
          <div className="row">

            {[
              "01","02","03","04","05","06","07","08","09","10",
              "11","12","13","14","15","16","17","18","19","20",
              "21","22","23","24","25","26","27","28","29","30",
              "31","32","33","34","35","36","37","38","39","40",
              "41","42","43","44","45"
            ].map((cls) => (
              <div className="col-md-2 col-3" key={cls}>
                <input
                  type="checkbox"
                  value={cls}
                  onChange={handleClassChange}
                />{" "}
                {cls}
              </div>
            ))}
          </div>
        </div>

        {/* BUSINESS ACTIVITY */}
        <div className="mb-3">
          <label>Business Activity Description</label>
          <textarea
            className="form-control"
            name="business_activity"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* ADDRESS */}
        <div className="mb-3">
          <label>Full Address</label>
          <textarea
            className="form-control"
            name="address"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* ROW 4 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* FILE UPLOADS */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Aadhaar Upload</label>
            <input
              type="file"
              name="aadhaar"
              className="form-control"
              onChange={handleFile}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label>PAN Upload</label>
            <input
              type="file"
              name="pan"
              className="form-control"
              onChange={handleFile}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label>Proof of Business</label>
            <input
              type="file"
              name="business_proof"
              className="form-control"
              onChange={handleFile}
              required
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="btn btn-success w-100 mt-3"
          disabled={loading}
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            ></span>
          ) : null}
          {loading ? "Submitting..." : "Submit Trademark Application"}
        </button>
      </form>
    </div>
  );
}
