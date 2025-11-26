import React, { useState } from "react";
import axios from "axios";
// Import your custom CSS file



// --- Component Logic (Unchanged) ---
// (Your existing state, handleChange, handleFile, validate, and handleSubmit functions are perfect and remain the same)
// ---

export default function MsmeForm() {
  const [form, setForm] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    aadhaar_number: "",
    applicant_type: "Proprietor",
    business_name: "",
    business_address: "",
    state: "",
    district: "",
    pincode: "",
    business_type: "Manufacturer",
    date_of_starting: "",
    pan_number: "",
    bank_account_number: "",
    ifsc_code: "",
    number_of_employees: "",
    investment_in_plant_machinery: "",
    annual_turnover: "",
  });

  const [files, setFiles] = useState({
    aadhaar_front: null,
    aadhaar_back: null,
    business_proof: null,
  });

  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e) => {
    const { name, files: f } = e.target;
    setFiles((s) => ({ ...s, [name]: f[0] || null }));
  };

  const validate = () => {
    const err = {};
    if (!form.full_name.trim()) err.full_name = "Full name required";
    if (!/^[6-9]\d{9}$/.test(form.mobile_number))
      err.mobile_number = "Invalid mobile";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid email";
    if (!/^\d{12}$/.test(form.aadhaar_number))
      err.aadhaar_number = "Aadhaar should be 12 digits";
    if (!form.business_name.trim())
      err.business_name = "Business name required";
    if (!form.state) err.state = "State required";
    if (!form.district) err.district = "District required";
    if (!/^\d{6}$/.test(form.pincode))
      err.pincode = "Pincode should be 6 digits";
    if (!form.date_of_starting) err.date_of_starting = "Date required";
    if (!/^\d{9,18}$/.test(form.bank_account_number))
      err.bank_account_number = "Invalid account number";
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc_code))
      err.ifsc_code = "Invalid IFSC format";
    if (!files.aadhaar_front) err.aadhaar_front = "Upload Aadhaar front";
    if (!files.aadhaar_back) err.aadhaar_back = "Upload Aadhaar back";
    if (!files.business_proof) err.business_proof = "Upload business proof";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    const fd = new FormData();
    for (const key in form) fd.append(key, form[key]);
    fd.append("aadhaar_front", files.aadhaar_front);
    fd.append("aadhaar_back", files.aadhaar_back);
    fd.append("business_proof", files.business_proof);

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/msme-register/",
        fd,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMsg("Form submitted successfully! 🎉");
      // Reset form (your original reset logic is here)
      setForm({
        full_name: "",
        mobile_number: "",
        email: "",
        aadhaar_number: "",
        applicant_type: "Proprietor",
        business_name: "",
        business_address: "",
        state: "",
        district: "",
        pincode: "",
        business_type: "Manufacturer",
        date_of_starting: "",
        pan_number: "",
        bank_account_number: "",
        ifsc_code: "",
        number_of_employees: "",
        investment_in_plant_machinery: "",
        annual_turnover: "",
      });
      setFiles({
        aadhaar_front: null,
        aadhaar_back: null,
        business_proof: null,
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setMsg(
        err.response?.data?.detail ||
          "Server error — check console / Django logs"
      );
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 form-fade-in">
        <div className="form-card">
          <h3 className="form-title">
            <span role="img" aria-label="Rocket">
              🚀
            </span>{" "}
            MSME Registration Form
            <small className="text-muted d-block" style={{ fontSize: "0.6em" }}>
              (Udyam)
            </small>
          </h3>

          {msg && (
            <div
              className={`alert ${
                msg.includes("success")
                  ? "alert-success-custom"
                  : "alert-danger-custom"
              }`}
            >
              {msg}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            noValidate
          >
            <div className="row">
              {/* Input fields */}
              {[
                {
                  label: "Full Name *",
                  name: "full_name",
                  type: "text",
                  required: true,
                },
                {
                  label: "Mobile Number *",
                  name: "mobile_number",
                  type: "text",
                  required: true,
                },
                {
                  label: "Email ID *",
                  name: "email",
                  type: "email",
                  required: true,
                },
                {
                  label: "Aadhaar Number *",
                  name: "aadhaar_number",
                  type: "text",
                  required: true,
                },
              ].map((field) => (
                <div
                  key={field.name}
                  className="col-md-6 mb-4 form-group-custom"
                >
                  <label className="form-label-custom">{field.label}</label>
                  <input
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className={`form-control-custom ${
                      errors[field.name] ? "is-invalid-custom" : ""
                    }`}
                    type={field.type}
                  />
                  {errors[field.name] && (
                    <small className="text-danger-custom">
                      {errors[field.name]}
                    </small>
                  )}
                </div>
              ))}

              {/* Selects and Address */}
              <div className="col-md-6 mb-4 form-group-custom">
                <label className="form-label-custom">Applicant Type *</label>
                <select
                  name="applicant_type"
                  value={form.applicant_type}
                  onChange={handleChange}
                  className="form-select-custom"
                >
                  <option>Proprietor</option>
                  <option>Partnership</option>
                  <option>Pvt Ltd</option>
                  <option>LLP</option>
                </select>
              </div>

              <div className="col-md-6 mb-4 form-group-custom">
                <label className="form-label-custom">Business Name *</label>
                <input
                  name="business_name"
                  value={form.business_name}
                  onChange={handleChange}
                  className={`form-control-custom ${
                    errors.business_name ? "is-invalid-custom" : ""
                  }`}
                />
                {errors.business_name && (
                  <small className="text-danger-custom">
                    {errors.business_name}
                  </small>
                )}
              </div>

              <div className="col-12 mb-4 form-group-custom">
                <label className="form-label-custom">Business Address *</label>
                <textarea
                  name="business_address"
                  value={form.business_address}
                  onChange={handleChange}
                  className="form-control-custom"
                  rows={2}
                />
              </div>

              {[
                { label: "State *", name: "state", required: true },
                { label: "District *", name: "district", required: true },
                { label: "Pincode *", name: "pincode", required: true },
              ].map((field) => (
                <div
                  key={field.name}
                  className="col-md-4 mb-4 form-group-custom"
                >
                  <label className="form-label-custom">{field.label}</label>
                  <input
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className={`form-control-custom ${
                      errors[field.name] ? "is-invalid-custom" : ""
                    }`}
                  />
                  {errors[field.name] && (
                    <small className="text-danger-custom">
                      {errors[field.name]}
                    </small>
                  )}
                </div>
              ))}

              <div className="col-md-6 mb-4 form-group-custom">
                <label className="form-label-custom">Business Type *</label>
                <select
                  name="business_type"
                  value={form.business_type}
                  onChange={handleChange}
                  className="form-select-custom"
                >
                  <option>Manufacturer</option>
                  <option>Service</option>
                </select>
              </div>

              <div className="col-md-6 mb-4 form-group-custom">
                <label className="form-label-custom">
                  Date of Starting Business *
                </label>
                <input
                  type="date"
                  name="date_of_starting"
                  value={form.date_of_starting}
                  onChange={handleChange}
                  className={`form-control-custom ${
                    errors.date_of_starting ? "is-invalid-custom" : ""
                  }`}
                />
                {errors.date_of_starting && (
                  <small className="text-danger-custom">
                    {errors.date_of_starting}
                  </small>
                )}
              </div>

              {/* Financial and other details */}
              {[
                {
                  label: "PAN Number (optional)",
                  name: "pan_number",
                  required: false,
                },
                {
                  label: "Bank Account Number *",
                  name: "bank_account_number",
                  required: true,
                },
                { label: "IFSC Code *", name: "ifsc_code", required: true },
                {
                  label: "Number of Employees",
                  name: "number_of_employees",
                  required: false,
                },
                {
                  label: "Investment in Plant & Machinery (INR)",
                  name: "investment_in_plant_machinery",
                  required: false,
                },
                {
                  label: "Annual Turnover (INR)",
                  name: "annual_turnover",
                  required: false,
                },
              ].map((field) => (
                <div
                  key={field.name}
                  className="col-md-6 mb-4 form-group-custom"
                >
                  <label className="form-label-custom">{field.label}</label>
                  <input
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className={`form-control-custom ${
                      errors[field.name] ? "is-invalid-custom" : ""
                    }`}
                  />
                  {errors[field.name] && (
                    <small className="text-danger-custom">
                      {errors[field.name]}
                    </small>
                  )}
                </div>
              ))}

              {/* File Uploads */}
              <div className="col-12">
                <h5 className="file-upload-title mt-3 mb-3">
                  Document Uploads
                </h5>
              </div>
              {[
                {
                  label: "Upload Aadhaar Front *",
                  name: "aadhaar_front",
                  required: true,
                },
                {
                  label: "Upload Aadhaar Back *",
                  name: "aadhaar_back",
                  required: true,
                },
                {
                  label: "Upload Business Proof *",
                  name: "business_proof",
                  required: true,
                },
              ].map((fileField) => (
                <div
                  key={fileField.name}
                  className="col-md-4 mb-4 form-group-custom"
                >
                  <label className="form-label-custom">{fileField.label}</label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    name={fileField.name}
                    onChange={handleFile}
                    className={`form-file-control-custom ${
                      errors[fileField.name] ? "is-invalid-custom" : ""
                    }`}
                  />
                  {errors[fileField.name] && (
                    <small className="text-danger-custom">
                      {errors[fileField.name]}
                    </small>
                  )}
                  {files[fileField.name] && (
                    <small className="text-success-custom d-block mt-1">
                      ✅ Uploaded: {files[fileField.name].name}
                    </small>
                  )}
                </div>
              ))}
            </div>

            <button className="submit-btn-animated" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <style>{`/* --- Color Variables and Base Styles --- */
:root {
  --primary-color: #007bff; /* Bright Blue */
  --accent-color: #28a745; /* Green Accent */
  --text-color: #343a40;
  --bg-color: #f8f9fa;
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --error-color: #dc3545;
}

body {
  background-color: var(--bg-color);
}

/* --- Form Card Styling --- */
.form-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease-in-out; /* Hover Effect Prep */
  border-left: 5px solid var(--primary-color);
}

.form-title {
  color: var(--primary-color);
  font-weight: 700;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

/* --- Input/Select Styling with Focus Animation --- */
.form-label-custom {
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 5px;
  display: block;
}

.form-control-custom,
.form-select-custom,
.form-file-control-custom {
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 10px 15px;
  width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control-custom:focus,
.form-select-custom:focus,
.form-file-control-custom:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.25); /* Focus Glow Effect */
  outline: none;
}

.form-select-custom {
  /* Ensure consistent height for select */
  appearance: none; 
  background-image: url("data:image/svg+xml,..."); /* Add custom arrow if needed */
}


/* Validation Styles */
.is-invalid-custom {
  border-color: var(--error-color) !important;
}

.text-danger-custom {
  color: var(--error-color) !important;
  font-size: 0.85em;
  margin-top: 5px;
}

.text-success-custom {
  color: var(--accent-color) !important;
  font-size: 0.85em;
}

/* --- Button Styling with Animation --- */
.submit-btn-animated {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  
  /* Animation Properties */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
}

.submit-btn-animated:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: translateY(-2px); /* Slight lift effect */
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.6);
}

/* Cool Hover Wave/Ripple Animation */
.submit-btn-animated:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 0;
  transform: scale(1, 1) translate(-50%);
  transition: all 0.5s ease;
}

.submit-btn-animated:active:after {
  /* Activates on click */
  transform: scale(100, 100) translate(-50%);
  opacity: 1;
  transition: all 0.3s ease;
}

/* --- Section/Alert Styling --- */
.file-upload-title {
    color: var(--primary-color);
    font-size: 1.2em;
    font-weight: 600;
}

.alert-success-custom {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  background-color: #e6ffe6;
  border-radius: 8px;
}

.alert-danger-custom {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid var(--error-color);
  color: var(--error-color);
  background-color: #ffe6e6;
  border-radius: 8px;
}


/* --- Fade-In Animation for the entire Form --- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* --- Keyframe for Input Hover Animation (Optional) --- */
/*
.form-group-custom:hover .form-label-custom {
    color: var(--accent-color);
    transition: color 0.3s;
}
*/`}</style>
    </>
  );
}
