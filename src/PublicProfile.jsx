import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PublicProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    aadhar_number: "",
    dob: "",
  });

  const [userpic, setUserpic] = useState(null);
  const [aadharCardPic, setAadharCardPic] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Handle input (with 4-4 Aadhar formatting)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value) || value.length > 10) return;
    }

    if (name === "aadhar_number") {
      let digits = value.replace(/\s+/g, "");
      if (!/^\d*$/.test(digits) || digits.length > 12) return;
      let formatted = digits.match(/.{1,4}/g)?.join(" ") || "";
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "userpic") {
      setUserpic(file);
      setPreview(URL.createObjectURL(file));
    } else if (name === "aadhar_card_pic") {
      setAadharCardPic(file);
    }
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanAadhar = formData.aadhar_number.replace(/\s+/g, "");

    if (formData.phone.length !== 10) {
      setMessage("⚠️ Phone number must be exactly 10 digits.");
      setMessageType("error");
      return;
    }

    if (cleanAadhar.length !== 12) {
      setMessage("⚠️ Aadhaar number must be exactly 12 digits.");
      setMessageType("error");
      return;
    }

    if (!userpic || !aadharCardPic) {
      setMessage("⚠️ Please upload both profile and Aadhaar card image.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) =>
      data.append(key, key === "aadhar_number" ? cleanAadhar : formData[key])
    );
    data.append("userpic", userpic);
    data.append("aadhar_card_pic", aadharCardPic);

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/userprofiles/",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage("✅ Profile created successfully!");
      setMessageType("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        aadhar_number: "",
      });
      setUserpic(null);
      setAadharCardPic(null);
      setPreview(null);
    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
      const errData = error.response?.data;
      if (errData?.email) setMessage(errData.email[0]);
      else if (errData?.phone) setMessage(errData.phone[0]);
      else if (errData?.aadhar_number) setMessage(errData.aadhar_number[0]);
      else setMessage("❌ Failed to create your profile. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    }
  };

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #dbeafe, #f0f9ff)",
        minHeight: "100vh",
      }}
    >
      {/* Loading Overlay */}
      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 9999,
          }}
        >
          <div
            className="spinner-border text-primary mb-3"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          ></div>
          <h5 className="text-primary fw-semibold text-center">
            Creating your profile, please wait...
          </h5>
        </div>
      )}

      <div
        className="card shadow-lg border-0 rounded-4 mx-auto p-4"
        style={{
          maxWidth: "700px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          transition: "0.3s",
        }}
      >
        <h3 className="text-center fw-bold text-primary mb-4">
          🌟 Create Your Public Profile
        </h3>

        {message && (
          <div
            className={`alert text-center fw-semibold ${
              messageType === "success" ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Name */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control form-control-lg shadow-sm"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="10-digit number"
                required
              />
            </div>

            {/* Address */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Address</label>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your complete address"
                required
              />
            </div>

            {/* Pincode */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Pincode</label>
              <input
                type="number"
                className="form-control form-control-lg shadow-sm"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit"
                required
              />
            </div>

            {/* Aadhar Number */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Aadhaar Number</label>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                name="aadhar_number"
                value={formData.aadhar_number}
                onChange={handleChange}
                maxLength={14}
                placeholder="XXXX XXXX XXXX"
                required
              />
            </div>

            {/* Profile Picture */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Profile Picture</label>
              <input
                type="file"
                className="form-control form-control-lg shadow-sm"
                name="userpic"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              {preview && (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="mt-2 rounded-4 shadow"
                  width="100"
                  height="100"
                />
              )}
            </div>

            {/* Aadhaar Card Picture */}
            <div className="col-md-12">
              <label className="form-label fw-semibold">
                Aadhaar Card Picture
              </label>
              <input
                type="file"
                className="form-control form-control-lg shadow-sm"
                name="aadhar_card_pic"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
              />
            </div>
            {/* Date Of Birth*/}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Date Of Birth</label>
              <input
                type="date"
                className="form-control form-control-lg shadow-sm"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-4 py-2 fs-5 fw-semibold shadow-sm"
            disabled={loading}
            style={{
              transition: "0.3s",
            }}
          >
            {loading ? "Uploading..." : "🚀 Submit Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
