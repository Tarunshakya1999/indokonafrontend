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
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e) => {
    const { name, files: f } = e.target;
    setFiles((s) => ({ ...s, [name]: f[0] || null }));
  };

  // simple client-side validations
  const validate = () => {
    const err = {};
    if (!form.full_name.trim()) err.full_name = "Full name required";
    if (!/^[6-9]\d{9}$/.test(form.mobile_number)) err.mobile_number = "Invalid mobile";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Invalid email";
    if (!/^\d{12}$/.test(form.aadhaar_number)) err.aadhaar_number = "Aadhaar should be 12 digits";
    if (!form.business_name.trim()) err.business_name = "Business name required";
    if (!form.state) err.state = "State required";
    if (!form.district) err.district = "District required";
    if (!/^\d{6}$/.test(form.pincode)) err.pincode = "Pincode should be 6 digits";
    if (!form.date_of_starting) err.date_of_starting = "Date required";
    // bank and IFSC minimal check
    if (!/^\d{9,18}$/.test(form.bank_account_number)) err.bank_account_number = "Invalid account number";
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc_code)) err.ifsc_code = "Invalid IFSC format";
    // files required
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
      // If you're using CSRF token in cookie, axios will send it automatically if configured.
      const res = await axios.post("https://indokonabackend-1.onrender.com/api/msme-register/", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("Form submitted successfully!");
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
      setFiles({ aadhaar_front: null, aadhaar_back: null, business_proof: null });
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
    <div className="container mt-4">
      <h3>MSME Registration Form (Udyam)</h3>
      {msg && <div className="alert alert-info">{msg}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name *</label>
            <input name="full_name" value={form.full_name} onChange={handleChange} className="form-control" />
            {errors.full_name && <small className="text-danger">{errors.full_name}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Mobile Number *</label>
            <input name="mobile_number" value={form.mobile_number} onChange={handleChange} className="form-control" />
            {errors.mobile_number && <small className="text-danger">{errors.mobile_number}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Email ID *</label>
            <input name="email" value={form.email} onChange={handleChange} className="form-control" />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Aadhaar Number *</label>
            <input name="aadhaar_number" value={form.aadhaar_number} onChange={handleChange} className="form-control" />
            {errors.aadhaar_number && <small className="text-danger">{errors.aadhaar_number}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Applicant Type *</label>
            <select name="applicant_type" value={form.applicant_type} onChange={handleChange} className="form-select">
              <option>Proprietor</option>
              <option>Partnership</option>
              <option>Pvt Ltd</option>
              <option>LLP</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Business Name *</label>
            <input name="business_name" value={form.business_name} onChange={handleChange} className="form-control" />
            {errors.business_name && <small className="text-danger">{errors.business_name}</small>}
          </div>

          <div className="col-12 mb-3">
            <label>Business Address *</label>
            <textarea name="business_address" value={form.business_address} onChange={handleChange} className="form-control" rows={2} />
          </div>

          <div className="col-md-4 mb-3">
            <label>State *</label>
            <input name="state" value={form.state} onChange={handleChange} className="form-control" />
            {errors.state && <small className="text-danger">{errors.state}</small>}
          </div>

          <div className="col-md-4 mb-3">
            <label>District *</label>
            <input name="district" value={form.district} onChange={handleChange} className="form-control" />
            {errors.district && <small className="text-danger">{errors.district}</small>}
          </div>

          <div className="col-md-4 mb-3">
            <label>Pincode *</label>
            <input name="pincode" value={form.pincode} onChange={handleChange} className="form-control" />
            {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Business Type *</label>
            <select name="business_type" value={form.business_type} onChange={handleChange} className="form-select">
              <option>Manufacturer</option>
              <option>Service</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Date of Starting Business *</label>
            <input type="date" name="date_of_starting" value={form.date_of_starting} onChange={handleChange} className="form-control" />
            {errors.date_of_starting && <small className="text-danger">{errors.date_of_starting}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>PAN Number (optional for Micro)</label>
            <input name="pan_number" value={form.pan_number} onChange={handleChange} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Bank Account Number *</label>
            <input name="bank_account_number" value={form.bank_account_number} onChange={handleChange} className="form-control" />
            {errors.bank_account_number && <small className="text-danger">{errors.bank_account_number}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>IFSC Code *</label>
            <input name="ifsc_code" value={form.ifsc_code} onChange={handleChange} className="form-control" />
            {errors.ifsc_code && <small className="text-danger">{errors.ifsc_code}</small>}
          </div>

          <div className="col-md-6 mb-3">
            <label>Number of Employees</label>
            <input name="number_of_employees" value={form.number_of_employees} onChange={handleChange} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Investment in Plant & Machinery</label>
            <input name="investment_in_plant_machinery" value={form.investment_in_plant_machinery} onChange={handleChange} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Annual Turnover</label>
            <input name="annual_turnover" value={form.annual_turnover} onChange={handleChange} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Upload Aadhaar Front *</label>
            <input type="file" accept="image/*,application/pdf" name="aadhaar_front" onChange={handleFile} className="form-control" />
            {errors.aadhaar_front && <small className="text-danger">{errors.aadhaar_front}</small>}
          </div>

          <div className="col-md-4 mb-3">
            <label>Upload Aadhaar Back *</label>
            <input type="file" accept="image/*,application/pdf" name="aadhaar_back" onChange={handleFile} className="form-control" />
            {errors.aadhaar_back && <small className="text-danger">{errors.aadhaar_back}</small>}
          </div>

          <div className="col-md-4 mb-3">
            <label>Upload Business Proof *</label>
            <input type="file" accept="image/*,application/pdf" name="business_proof" onChange={handleFile} className="form-control" />
            {errors.business_proof && <small className="text-danger">{errors.business_proof}</small>}
          </div>
        </div>

        <button className="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  );
}
