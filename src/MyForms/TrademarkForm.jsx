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

  // --------------------------------------
  // UPDATED handleChange WITH MOBILE LIMIT
  // --------------------------------------
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Allow only numbers & max 10 digits for mobile
    if (name === "mobile") {
      value = value.replace(/\D/g, ""); // remove non-digits
      if (value.length > 10) return; // stop if more than 10 digits
    }

    // Allow only digits & max 6 for pincode
    if (name === "pincode") {
      value = value.replace(/\D/g, "");
      if (value.length > 6) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // File Handler
  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Trademark Class Selection
  const handleClassChange = (e) => {
    const value = e.target.value;
    let updated = [...formData.classes];

    if (updated.includes(value)) {
      updated = updated.filter((c) => c !== value);
    } else {
      updated.push(value);
    }
    setFormData({ ...formData, classes: updated });
  };

  // --------------------------------------
  // VALIDATION
  // --------------------------------------
  const validateForm = () => {
    let newErrors = {};

    if (!formData.applicant_name.trim()) {
      newErrors.applicant_name = "Applicant name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.applicant_name)) {
      newErrors.applicant_name = "Name must contain only alphabets.";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email address.";
    }

    if (!formData.business_type) {
      newErrors.business_type = "Select business type.";
    }

    if (!formData.brand_name.trim()) {
      newErrors.brand_name = "Brand name is required.";
    }

    if (formData.classes.length === 0) {
      newErrors.classes = "Select at least one trademark class.";
    }

    if (!formData.business_activity.trim()) {
      newErrors.business_activity = "This field is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Full address is required.";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter valid 6-digit pincode.";
    }

    // File Validations
    const imageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const docTypes = ["application/pdf", "image/png", "image/jpeg"];

    if (!formData.brand_logo) {
      newErrors.brand_logo = "Brand logo required.";
    } else if (!imageTypes.includes(formData.brand_logo.type)) {
      newErrors.brand_logo = "Only JPG/PNG allowed.";
    }

    if (!formData.aadhaar || !docTypes.includes(formData.aadhaar.type)) {
      newErrors.aadhaar = "Upload valid Aadhaar (PDF/JPG/PNG).";
    }

    if (!formData.pan || !docTypes.includes(formData.pan.type)) {
      newErrors.pan = "Upload valid PAN (PDF/JPG/PNG).";
    }

    if (!formData.business_proof || !docTypes.includes(formData.business_proof.type)) {
      newErrors.business_proof = "Upload valid Business Proof (PDF/JPG/PNG).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --------------------------------------
  // SUBMIT HANDLER
  // --------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="container mt-4 p-4 shadow bg-white rounded text-center">
        <h2 className="text-success">🎉 Trademark Form Submitted Successfully!</h2>
        <p className="mt-3">Our team will contact you soon.</p>
        <a href="/" className="btn btn-primary mt-3">Go Home</a>
      </div>
    );
  }

  // --------------------------------------
  // UI RETURN
  // --------------------------------------

  return (
    <div className="container mt-4 p-4 shadow bg-white rounded">
      <h2 className="text-center mb-4">Trademark Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Applicant Name + Mobile */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Applicant Name</label>
            <input
              type="text"
              className={`form-control ${errors.applicant_name ? "is-invalid" : ""}`}
              name="applicant_name"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.applicant_name}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              maxLength="10"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.mobile}</div>
          </div>
        </div>

        {/* Email + Business Type */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Business Type</label>
            <select
              className={`form-control ${errors.business_type ? "is-invalid" : ""}`}
              name="business_type"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Owner</option>
              <option>Firm</option>
              <option>Pvt Ltd</option>
              <option>LLP</option>
            </select>
            <div className="invalid-feedback">{errors.business_type}</div>
          </div>
        </div>

        {/* Brand Name + Logo */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Brand Name</label>
            <input
              type="text"
              className={`form-control ${errors.brand_name ? "is-invalid" : ""}`}
              name="brand_name"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.brand_name}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Brand Logo Upload</label>
            <input
              type="file"
              className={`form-control ${errors.brand_logo ? "is-invalid" : ""}`}
              name="brand_logo"
              accept="image/*"
              onChange={handleFile}
            />
            <div className="invalid-feedback">{errors.brand_logo}</div>
          </div>
        </div>

        {/* ───── Trademark Classes ───── */}
        <div className="mb-2">
          <label>Select Trademark Classes</label>
          <div className="row">
            {[
              "01","02","03","04","05","06","07","08","09","10",
              "11","12","13","14","15","16","17","18","19","20",
              "21","22","23","24","25","26","27","28","29","30",
              "31","32","33","34","35","36","37","38","39","40",
              "41","42","43","44","45"
            ].map((c) => (
              <div className="col-2" key={c}>
                <input type="checkbox" value={c} onChange={handleClassChange} /> {c}
              </div>
            ))}
          </div>
          {errors.classes && (
            <small className="text-danger">{errors.classes}</small>
          )}
        </div>

        {/* Business Activity */}
        <div className="mb-3">
          <label>Business Activity</label>
          <textarea
            className={`form-control ${errors.business_activity ? "is-invalid" : ""}`}
            name="business_activity"
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.business_activity}</div>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label>Full Address</label>
          <textarea
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            name="address"
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.address}</div>
        </div>

        {/* State + Pincode */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>State</label>
            <input
              type="text"
              className={`form-control ${errors.state ? "is-invalid" : ""}`}
              name="state"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.state}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Pincode</label>
            <input
              type="text"
              maxLength="6"
              className={`form-control ${errors.pincode ? "is-invalid" : ""}`}
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.pincode}</div>
          </div>
        </div>

        {/* Aadhaar, PAN, Business Proof */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Aadhaar Upload</label>
            <input
              type="file"
              className={`form-control ${errors.aadhaar ? "is-invalid" : ""}`}
              name="aadhaar"
              onChange={handleFile}
            />
            <div className="invalid-feedback">{errors.aadhaar}</div>
          </div>

          <div className="col-md-4 mb-3">
            <label>PAN Upload</label>
            <input
              type="file"
              className={`form-control ${errors.pan ? "is-invalid" : ""}`}
              name="pan"
              onChange={handleFile}
            />
            <div className="invalid-feedback">{errors.pan}</div>
          </div>

          <div className="col-md-4 mb-3">
            <label>Business Proof</label>
            <input
              type="file"
              className={`form-control ${errors.business_proof ? "is-invalid" : ""}`}
              name="business_proof"
              onChange={handleFile}
            />
            <div className="invalid-feedback">{errors.business_proof}</div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 mt-3"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Trademark Application"}
        </button>

      </form>
    </div>
  );
}
