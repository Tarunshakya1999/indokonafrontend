import React, { useState } from "react";
import axios from "axios";
// Bootstrap CSS is now imported via CDN in the CustomStyles component
// import "bootstrap/dist/css/bootstrap.min.css";
// Import icons from lucide-react for a modern look
import {
  User,
  Mail,
  Phone,
  Home,
  Hash,
  CreditCard,
  Calendar,
  Upload,
  Image as ImageIcon,
  Loader2,
  CheckCircle,
  AlertCircle,
  Building,
} from "lucide-react";

// CSS-in-JS using a <style> tag is the cleanest way to add custom styles
// in a single-file React component without Tailwind.
const CustomStyles = () => (
  <style>
    {`
      /* Import Bootstrap CSS from CDN */
      @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

      /* Import the Inter font for a cleaner, modern look */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }

      /* A subtle background gradient */
      .form-container-bg {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        min-height: 100vh;
      }

      /* Softer shadows and a slight blur for the card */
      .profile-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        transition: all 0.3s ease;
      }

      /* Custom loading overlay */
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(8px);
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 9999;
      }

      /* Spinning animation for the loader icon */
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .animate-spin {
        animation: spin 1s linear infinite;
      }

      /* Style the input groups */
      .input-group-text {
        background-color: #ffffff;
        border-end-width: 0;
      }
      .form-control {
        border-start-width: 0;
      }
      .form-control:focus {
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        border-color: #86b7fe;
        z-index: 2; /* Brings input on top of icon span on focus */
      }
      /* Fix border radius clipping */
      .input-group .form-control {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .input-group .input-group-text {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      

      /* Custom file upload button */
      .file-upload-label {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 2px dashed #0d6efd;
        background-color: #f8f9fa;
        transition: all 0.3s ease;
        padding: 0.75rem 1.25rem;
        color: #0d6efd;
        font-weight: 500;
      }

      .file-upload-label:hover {
        background-color: #e9f2ff;
        border-color: #0a58ca;
      }

      .file-upload-label span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        padding-left: 8px;
      }

      /* Profile image preview */
      .profile-preview {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border: 3px solid #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      
      /* Submit button hover effect */
      .btn-submit {
        transition: all 0.3s ease;
      }
      .btn-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
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
    if (!file) return;

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

      setMessage("Profile created successfully!");
      setMessageType("success");
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
    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
      const errData = error.response?.data;
      let errorMsg = "❌ Failed to create your profile. Please try again.";
      if (errData) {
        if (errData.email) errorMsg = `Email: ${errData.email[0]}`;
        else if (errData.phone) errorMsg = `Phone: ${errData.phone[0]}`;
        else if (errData.aadhar_number) errorMsg = `Aadhaar: ${errData.aadhar_number[0]}`;
        else if (typeof errData === 'object' && errData !== null) {
          // Handle nested errors
          const firstKey = Object.keys(errData)[0];
          if (Array.isArray(errData[firstKey]) && errData[firstKey].length > 0) {
            errorMsg = `Error: ${errData[firstKey][0]}`;
          }
        }
      }
      setMessage(errorMsg);
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
    <>
      {/* Inject our custom styles */}
      <CustomStyles />

      <div className="container-fluid py-5 form-container-bg">
        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay">
            <Loader2 className="text-primary animate-spin mb-3" size={64} />
            <h5 className="text-primary fw-semibold text-center">
              Creating your profile, please wait...
            </h5>
          </div>
        )}

        <div
          className="card profile-card border-0 rounded-4 mx-auto p-4 p-md-5"
          style={{ maxWidth: "800px" }}
        >
          <h3 className="text-center fw-bold text-primary mb-4 d-flex align-items-center justify-content-center">
            <Building className="me-3" size={32} /> Create Your Public Profile
          </h3>

          {message && (
            <div
              className={`alert d-flex align-items-center fw-semibold ${
                messageType === "success" ? "alert-success" : "alert-danger"
              }`}
            >
              {messageType === "success" ? (
                <CheckCircle className="me-2" />
              ) : (
                <AlertCircle className="me-2" />
              )}
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <User size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <Mail size={20} className="text-muted" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Phone</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <Phone size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="10-digit number"
                    required
                  />
                </div>
              </div>

              {/* Date Of Birth */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Date Of Birth</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <Calendar size={20} className="text-muted" />
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="col-md-12">
                <label className="form-label fw-semibold">Address</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <Home size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your complete address"
                    required
                  />
                </div>
              </div>

              {/* Pincode */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Pincode</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <Hash size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit"
                    maxLength={6}
                    required
                  />
                </div>
              </div>

              {/* Aadhar Number */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Aadhaar Number</label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text">
                    <CreditCard size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="aadhar_number"
                    value={formData.aadhar_number}
                    onChange={handleChange}
                    maxLength={14}
                    placeholder="XXXX XXXX XXXX"
                    required
                  />
                </div>
              </div>

              {/* Profile Picture */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Profile Picture
                </label>
                <label
                  htmlFor="userpic-upload"
                  className="form-control form-control-lg file-upload-label shadow-sm"
                >
                  <Upload size={20} />
                  <span>
                    {userpic ? userpic.name : "Click to upload image"}
                  </span>
                </label>
                <input
                  type="file"
                  className="d-none"
                  id="userpic-upload"
                  name="userpic"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className="mt-3 rounded-circle profile-preview"
                  />
                )}
              </div>

              {/* Aadhaar Card Picture */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Aadhaar Card Picture
                </label>
                <label
                  htmlFor="aadhar-upload"
                  className="form-control form-control-lg file-upload-label shadow-sm"
                >
                  <Upload size={20} />
                  <span>
                    {aadharCardPic
                      ? aadharCardPic.name
                      : "Upload Aadhaar (Image/PDF)"}
                  </span>
                </label>
                <input
                  type="file"
                  className="d-none"
                  id="aadhar-upload"
                  name="aadhar_card_pic"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit w-100 mt-4 py-2 fs-5 fw-semibold shadow-sm d-flex align-items-center justify-content-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin me-2" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="me-2" /> Submit Profile
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}