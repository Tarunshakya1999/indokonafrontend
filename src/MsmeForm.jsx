import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  // ⭐ handle input + digit limit
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile_number" && value.length > 10) return;
    if (name === "aadhaar_number" && value.length > 12) return;
    if (name === "pan_number" && value.length > 20) return;

    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e) => {
    const { name, files: f } = e.target;
    setFiles((s) => ({ ...s, [name]: f[0] || null }));
  };

  // ⭐ Validations
  const validate = () => {
    const err = {};
    if (!form.full_name.trim()) err.full_name = "Full name required";
    if (!/^[6-9]\d{9}$/.test(form.mobile_number))
      err.mobile_number = "Invalid mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid email";
    if (!/^\d{12}$/.test(form.aadhaar_number))
      err.aadhaar_number = "Aadhaar must be 12 digits";
    if (!form.business_name.trim())
      err.business_name = "Business name required";
    if (!form.state.trim()) err.state = "State required";
    if (!form.district.trim()) err.district = "District required";
    if (!/^\d{6}$/.test(form.pincode)) err.pincode = "Pincode must be 6 digits";
    if (!form.date_of_starting) err.date_of_starting = "Date required";
    if (!/^\d{9,18}$/.test(form.bank_account_number))
      err.bank_account_number = "Invalid account number";
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc_code))
      err.ifsc_code = "Invalid IFSC";

    if (!files.aadhaar_front) err.aadhaar_front = "Upload Aadhaar front";
    if (!files.aadhaar_back) err.aadhaar_back = "Upload Aadhaar back";
    if (!files.business_proof) err.business_proof = "Upload business proof";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const v = validate();
    setErrors(v);

    if (Object.keys(v).length) {
      setLoading(false);
      return;
    }

    const fd = new FormData();
    for (const key in form) fd.append(key, form[key]);
    fd.append("aadhaar_front", files.aadhaar_front);
    fd.append("aadhaar_back", files.aadhaar_back);
    fd.append("business_proof", files.business_proof);

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/msme-register/",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
      } else {
        setFailed(true);
      }
    } catch (err) {
      console.log(err);
      setFailed(true);
    }

    setLoading(false);
  };

  // ⭐ SUCCESS UI
  if (success)
    return (
      <div className="success-container fade-in">
        <div className="card success-card shadow-lg">
          <div className="checkmark">&#10003;</div>
          <h2>Registration Successful!</h2>
          <p>Your MSME application has been submitted successfully.</p>
        </div>
      </div>
    );

  // ❌ ERROR UI
  if (failed)
    return (
      <div className="error-container fade-in">
        <div className="card error-card shadow-lg">
          <div className="crossmark">&#10005;</div>
          <h2>Submission Failed</h2>
          <p>Something went wrong. Please try again.</p>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setFailed(false)}
          >
            Try Again
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div className="container mt-4 fade-in">
        <h2 className="mb-4 fw-bold text-primary">MSME Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="row">
            {[
              { label: "Full Name", name: "full_name", star: true },
              { label: "Mobile Number", name: "mobile_number", star: true },
              { label: "Email", name: "email", star: true },
              { label: "Aadhaar Number", name: "aadhaar_number", star: true },
              { label: "Business Name", name: "business_name", star: true },
              { label: "State", name: "state", star: true },
              { label: "District", name: "district", star: true },
              { label: "Pincode", name: "pincode", star: true },
              { label: "PAN Number", name: "pan_number", star: false },
              {
                label: "Bank Account Number",
                name: "bank_account_number",
                star: true,
              },
              { label: "IFSC Code", name: "ifsc_code", star: true },
            ].map((fld) => (
              <div key={fld.name} className="col-md-6 mb-3">
                <label>
                  {fld.label}{" "}
                  {fld.star && <span className="text-danger">*</span>}
                </label>
                <input
                  className="form-control"
                  name={fld.name}
                  value={form[fld.name]}
                  onChange={handleChange}
                />
                {errors[fld.name] && (
                  <small className="text-danger">{errors[fld.name]}</small>
                )}
              </div>
            ))}

            {/* Aadhaar Files */}
            <div className="col-md-4 mb-3">
              <label>
                Aadhaar Front <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="aadhaar_front"
                className="form-control"
                onChange={handleFile}
              />
              {errors.aadhaar_front && (
                <small className="text-danger">{errors.aadhaar_front}</small>
              )}
            </div>

            <div className="col-md-4 mb-3">
              <label>
                Aadhaar Back <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="aadhaar_back"
                className="form-control"
                onChange={handleFile}
              />
              {errors.aadhaar_back && (
                <small className="text-danger">{errors.aadhaar_back}</small>
              )}
            </div>

            <div className="col-md-4 mb-3">
              <label>
                Business Proof <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="business_proof"
                className="form-control"
                onChange={handleFile}
              />
              {errors.business_proof && (
                <small className="text-danger">{errors.business_proof}</small>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="btn btn-primary mt-3 w-100"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner-border spinner-border-sm"></div>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
      <style>{`.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

.success-container, .error-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.success-card, .error-card {
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  width: 450px;
  animation: pop 0.4s;
}

.success-card { border-left: 6px solid #28a745; }
.error-card { border-left: 6px solid #dc3545; }

@keyframes pop {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.checkmark {
  font-size: 60px;
  color: #28a745;
  font-weight: bold;
}

.crossmark {
  font-size: 60px;
  color: #dc3545;
  font-weight: bold;
}
 `}</style>
    </>
  );
}
