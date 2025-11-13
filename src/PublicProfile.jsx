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
  const [preview, setPreview] = useState(null); // 👈 for image preview

  // handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file input
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "userpic") {
      setUserpic(file);
      setPreview(URL.createObjectURL(file)); // show preview
    } else if (name === "aadhar_card_pic") {
      setAadharCardPic(file);
    }
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate files
    if (!userpic || !aadharCardPic) {
      setMessage("⚠️ Please upload both profile picture and Aadhar card image.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("userpic", userpic);
    data.append("aadhar_card_pic", aadharCardPic);

    try {
      const response = await axios.post("https://indokonabackend-1.onrender.com/api/userprofiles/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("✅ Server Response:", response.data);

      setMessage("✅ Profile submitted successfully! Waiting for admin verification.");
      setFormData({ name: "", email: "", phone: "", address: "", pincode: "", aadhar_number: "" });
      setUserpic(null);
      setAadharCardPic(null);
      setPreview(null);
    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
      setMessage("❌ Error submitting profile. Please check details and try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center fw-bold text-primary">Public Profile Form</h3>
      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-lg border-0 rounded-4 bg-light">
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

        <button type="submit" className="btn btn-primary w-100 mt-2 fw-semibold">
          Submit Profile
        </button>
      </form>
    </div>
  );
}
