import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TrademarkForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

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

  // ------------------------------------------------
  // ⭐ HANDLE CHANGE (with restrictions)
  // ------------------------------------------------
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "mobile") {
      value = value.replace(/\D/g, "");
      if (value.length > 10) return;
    }

    if (name === "pincode") {
      value = value.replace(/\D/g, "");
      if (value.length > 6) return;
    }

    setFormData({ ...formData, [name]: value });
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

  // ------------------------------------------------
  // ⭐ VALIDATION FUNCTION
  // ------------------------------------------------
  const validateForm = () => {
    let newErrors = {};

    if (!formData.applicant_name.trim())
      newErrors.applicant_name = "Applicant name is required.";

    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number.";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.business_type)
      newErrors.business_type = "Select your business type.";

    if (!formData.brand_name.trim())
      newErrors.brand_name = "Brand name is required.";

    if (!formData.brand_logo)
      newErrors.brand_logo = "Brand logo is required.";

    if (formData.classes.length === 0)
      newErrors.classes = "Select at least 1 trademark class.";

    if (!formData.business_activity.trim())
      newErrors.business_activity = "Business activity is required.";

    if (!formData.address.trim())
      newErrors.address = "Address is required.";

    if (!formData.state.trim())
      newErrors.state = "State is required.";

    if (!/^[0-9]{6}$/.test(formData.pincode))
      newErrors.pincode = "Enter valid 6-digit pincode.";

    if (!formData.aadhaar)
      newErrors.aadhaar = "Aadhaar upload is required.";

    if (!formData.pan)
      newErrors.pan = "PAN upload is required.";

    if (!formData.business_proof)
      newErrors.business_proof = "Business proof is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ------------------------------------------------
  // ⭐ SUBMIT FORM
  // ------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo(0, 0);
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
    } catch {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  // ------------------------------------------------
  // SUCCESS PAGE
  // ------------------------------------------------
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

  // ------------------------------------------------
  // FORM UI
  // ------------------------------------------------
  return (
    <div className="container mt-4 p-4 shadow bg-white rounded">
      <h2 className="text-center mb-4 fw-bold">Trademark Registration Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* ---------------------- ROW 1 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Applicant Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="applicant_name"
              className={`form-control ${errors.applicant_name && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.applicant_name && <div className="invalid-feedback">{errors.applicant_name}</div>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Mobile Number <span className="text-danger">*</span></label>
            <input
              type="text"
              name="mobile"
              maxLength="10"
              className={`form-control ${errors.mobile && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
          </div>
        </div>

        {/* ---------------------- ROW 2 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Email ID <span className="text-danger">*</span></label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Business Type <span className="text-danger">*</span></label>
            <select
              name="business_type"
              className={`form-control ${errors.business_type && "is-invalid"}`}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Owner</option>
              <option>Firm</option>
              <option>Pvt Ltd</option>
              <option>LLP</option>
            </select>
            {errors.business_type && <div className="invalid-feedback">{errors.business_type}</div>}
          </div>
        </div>

        {/* ---------------------- ROW 3 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Brand / Trademark Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="brand_name"
              className={`form-control ${errors.brand_name && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.brand_name && <div className="invalid-feedback">{errors.brand_name}</div>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Brand Logo Upload <span className="text-danger">*</span></label>
            <input
              type="file"
              name="brand_logo"
              accept="image/*"
              className={`form-control ${errors.brand_logo && "is-invalid"}`}
              onChange={handleFile}
            />
            {errors.brand_logo && <div className="invalid-feedback">{errors.brand_logo}</div>}
          </div>
        </div>

        {/* ---------------------- CLASS SELECTION ---------------------- */}
        <div className="mb-3">
          <label>Select Trademark Classes <span className="text-danger">*</span></label>

          <div className="row mt-2">
            {[
              "01","02","03","04","05","06","07","08","09","10",
              "11","12","13","14","15","16","17","18","19","20",
              "21","22","23","24","25","26","27","28","29","30",
              "31","32","33","34","35","36","37","38","39","40",
              "41","42","43","44","45"
            ].map((cls) => (
              <div className="col-md-2 col-3 mb-1" key={cls}>
                <input
                  type="checkbox"
                  value={cls}
                  onChange={handleClassChange}
                /> {cls}
              </div>
            ))}
          </div>

          {errors.classes && <p className="text-danger">{errors.classes}</p>}
        </div>

        {/* ---------------------- BUSINESS ACTIVITY ---------------------- */}
        <div className="mb-3">
          <label>Business Activity Description <span className="text-danger">*</span></label>
          <textarea
            name="business_activity"
            className={`form-control ${errors.business_activity && "is-invalid"}`}
            onChange={handleChange}
          ></textarea>
          {errors.business_activity && <div className="invalid-feedback">{errors.business_activity}</div>}
        </div>

        {/* ---------------------- ADDRESS ---------------------- */}
        <div className="mb-3">
          <label>Full Address <span className="text-danger">*</span></label>
          <textarea
            name="address"
            className={`form-control ${errors.address && "is-invalid"}`}
            onChange={handleChange}
          ></textarea>
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>

        {/* ---------------------- ROW 4 ---------------------- */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>State <span className="text-danger">*</span></label>
            <input
              type="text"
              name="state"
              className={`form-control ${errors.state && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.state && <div className="invalid-feedback">{errors.state}</div>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Pincode <span className="text-danger">*</span></label>
            <input
              type="text"
              name="pincode"
              maxLength="6"
              className={`form-control ${errors.pincode && "is-invalid"}`}
              onChange={handleChange}
            />
            {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
          </div>
        </div>

        {/* ---------------------- FILE UPLOADS ---------------------- */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Aadhaar Upload <span className="text-danger">*</span></label>
            <input
              type="file"
              name="aadhaar"
              className={`form-control ${errors.aadhaar && "is-invalid"}`}
              onChange={handleFile}
            />
            {errors.aadhaar && <div className="invalid-feedback">{errors.aadhaar}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label>PAN Upload <span className="text-danger">*</span></label>
            <input
              type="file"
              name="pan"
              className={`form-control ${errors.pan && "is-invalid"}`}
              onChange={handleFile}
            />
            {errors.pan && <div className="invalid-feedback">{errors.pan}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label>Proof of Business <span className="text-danger">*</span></label>
            <input
              type="file"
              name="business_proof"
              className={`form-control ${errors.business_proof && "is-invalid"}`}
              onChange={handleFile}
            />
            {errors.business_proof && <div className="invalid-feedback">{errors.business_proof}</div>}
          </div>
        </div>

        {/* ---------------------- SUBMIT ---------------------- */}
        <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
          {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
          {loading ? "Submitting..." : "Submit Trademark Application"}
        </button>

      </form>
    </div>
  );
}
