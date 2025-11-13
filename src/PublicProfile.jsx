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
  });

  const [userpic, setUserpic] = useState(null);
  const [aadharCardPic, setAadharCardPic] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // ✅ success or error
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Handle text input with digit limit validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent more than 10 digits in phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // only numbers
      if (value.length > 10) return; // max 10 digits
    }

    // Prevent more than 12 digits in Aadhar
    if (name === "aadhar_number") {
      if (!/^\d*$/.test(value)) return; // only numbers
      if (value.length > 12) return; // max 12 digits
    }

    setFormData({ ...formData, [name]: value });
  };

  // handle file input
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

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (formData.phone.length !== 10) {
      setMessage("⚠️ Phone number must be exactly 10 digits.");
      setMessageType("error");
      return;
    }

    if (formData.aadhar_number.length !== 12) {
      setMessage("⚠️ Aadhar number must be exactly 12 digits.");
      setMessageType("error");
      return;
    }

    if (!userpic || !aadharCardPic) {
      setMessage("⚠️ Please upload both profile picture and Aadhar card image.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("userpic", userpic);
    data.append("aadhar_card_pic", aadharCardPic);

    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/userprofiles/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
    <div className="container mt-5 position-relative">
      {/* 🔥 Loading Overlay */}
      {loading && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 999,
          }}
        >
          <div
            className="spinner-border text-primary mb-3"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          ></div>
          <h5 className="text-primary fw-semibold text-center">
            Please wait while your profile is creating this may take few seconds...
          </h5>
        </div>
      )}

      <h3 className="mb-4 text-center fw-bold text-primary">Public Profile Form</h3>

      {message && (
        <div
          className={`alert text-center fw-semibold ${
            messageType === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`card p-4 shadow-lg border-0 rounded-4 bg-light ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="row">
          {/* Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>

          {/* Address */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Pincode */}
          <div className="col-md-4 mb-3">
            <label className="form-label fw-semibold">Pincode</label>
            <input
              type="number"
              className="form-control"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Aadhar Number */}
          <div className="col-md-4 mb-3">
            <label className="form-label fw-semibold">Aadhar Number</label>
            <input
              type="text"
              className="form-control"
              name="aadhar_number"
              value={formData.aadhar_number}
              onChange={handleChange}
              maxLength={12}
              required
            />
          </div>

          {/* Profile Picture */}
          <div className="col-md-4 mb-3">
            <label className="form-label fw-semibold">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              name="userpic"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="mt-2 rounded-3 shadow-sm"
                width="100"
                height="100"
              />
            )}
          </div>

          {/* Aadhar Card Picture */}
          <div className="col-md-12 mb-3">
            <label className="form-label fw-semibold">Aadhar Card Picture</label>
            <input
              type="file"
              className="form-control"
              name="aadhar_card_pic"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mt-2 fw-semibold"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit Profile"}
        </button>
      </form>
    </div>
  );
}
