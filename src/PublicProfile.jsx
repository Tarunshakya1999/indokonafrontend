import React, { useState } from "react";
import axios from "axios";

// Icons
import {
  User,
  Mail,
  Phone,
  Home,
  Hash,
  CreditCard,
  Calendar,
  Upload,
  Loader2,
  CheckCircle,
  AlertCircle,
  Building,
} from "lucide-react";

// Custom styles + Bootstrap via CDN
const CustomStyles = () => (
  <style>
    {`
      @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

      body { font-family: 'Inter', sans-serif; }

      .form-container-bg {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        min-height: 100vh;
      }

      .profile-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
      }

      .loading-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        display: flex; flex-direction: column;
        justify-content: center; align-items: center;
        backdrop-filter: blur(8px);
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 9999;
      }

      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-spin { animation: spin 1s linear infinite; }

      .file-upload-label {
        border: 2px dashed #0d6efd;
        padding: 0.75rem;
        cursor: pointer;
        color: #0d6efd;
        background: #f8f9fa;
        font-weight: 500;
        text-align: center;
      }

      .profile-preview {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
    `}
  </style>
);

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
  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [loading, setLoading] = useState(false);

  // Input handler
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

  // File handlers
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "userpic") {
      setUserpic(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    } else if (name === "aadhar_card_pic") {
      setAadharCardPic(files[0]);
    }
  };

  // Submit handler with token authorization
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanAadhar = formData.aadhar_number.replace(/\s+/g, "");
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setMessage("You must be logged in!");
      setMsgType("error");
      return;
    }

    if (formData.phone.length !== 10) {
      setMessage("Phone number must be exactly 10 digits.");
      setMsgType("error");
      return;
    }

    if (cleanAadhar.length !== 12) {
      setMessage("Aadhaar number must be 12 digits.");
      setMsgType("error");
      return;
    }

    if (!userpic || !aadharCardPic) {
      setMessage("Please upload both images!");
      setMsgType("error");
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((k) =>
      data.append(k, k === "aadhar_number" ? cleanAadhar : formData[k])
    );
    data.append("userpic", userpic);
    data.append("aadhar_card_pic", aadharCardPic);

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/userprofiles/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setMessage("Profile created successfully!");
      setMsgType("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        aadhar_number: "",
        dob: "",
      });
      setUserpic(null);
      setAadharCardPic(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setMessage("Failed to create profile!");
      setMsgType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setMsgType("");
      }, 5000);
    }
  };

  return (
    <>
      <CustomStyles />

      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <Loader2 size={60} className="text-primary animate-spin mb-3" />
          <h5 className="text-primary fw-semibold">Creating your profile...</h5>
        </div>
      )}

      <div className="container py-5 form-container-bg">
        <div
          className="card profile-card border-0 rounded-4 mx-auto p-4"
          style={{ maxWidth: "800px" }}
        >
          <h3 className="text-center fw-bold text-primary mb-4">
            <Building className="me-2" /> Create Your Public Profile
          </h3>

          {/* Alerts */}
          {message && (
            <div
              className={`alert d-flex align-items-center fw-semibold ${
                msgType === "success" ? "alert-success" : "alert-danger"
              }`}
            >
              {msgType === "success" ? (
                <CheckCircle className="me-2" />
              ) : (
                <AlertCircle className="me-2" />
              )}
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              {/* Name */}
              <div className="col-md-6">
                <label className="fw-semibold">Full Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <User size={18} />{" "}
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="fw-semibold">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Mail size={18} />{" "}
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="fw-semibold">Phone</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Phone size={18} />{" "}
                  </span>
                  <input
                    type="text"
                    name="phone"
                    maxLength="10"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="col-md-6">
                <label className="fw-semibold">Date of Birth</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Calendar size={18} />{" "}
                  </span>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="col-md-12">
                <label className="fw-semibold">Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Home size={18} />{" "}
                  </span>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Pincode */}
              <div className="col-md-6">
                <label className="fw-semibold">Pincode</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Hash size={18} />{" "}
                  </span>
                  <input
                    type="text"
                    name="pincode"
                    maxLength="6"
                    className="form-control"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Aadhar */}
              <div className="col-md-6">
                <label className="fw-semibold">Aadhaar Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <CreditCard size={18} />{" "}
                  </span>
                  <input
                    type="text"
                    name="aadhar_number"
                    className="form-control"
                    maxLength="14"
                    placeholder="XXXX XXXX XXXX"
                    value={formData.aadhar_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Profile Pic */}
              <div className="col-md-6">
                <label className="fw-semibold">Profile Picture</label>
                <label htmlFor="userpic" className="file-upload-label">
                  <Upload size={18} /> Upload Profile
                </label>
                <input
                  id="userpic"
                  name="userpic"
                  type="file"
                  className="d-none"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {preview && (
                  <img src={preview} className="profile-preview mt-3" alt="" />
                )}
              </div>

              {/* Aadhaar Pic */}
              <div className="col-md-6">
                <label className="fw-semibold">Aadhaar Card Pic</label>
                <label htmlFor="aadhar" className="file-upload-label">
                  <Upload size={18} /> Upload Aadhaar
                </label>
                <input
                  id="aadhar"
                  name="aadhar_card_pic"
                  type="file"
                  className="d-none"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-4 py-2 fw-semibold fs-5">
              Submit Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
