import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ReelUploadForm() {
  const [formData, setFormData] = useState({
    author: "",
    caption: "",
  });

  const [video, setVideo] = useState(null);
  const [music, setMusic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle file select
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "src") {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    } else if (name === "music") {
      setMusic(file);
    }
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      setMessage("⚠️ Please upload a video file.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setProgress(0);

    const data = new FormData();
    data.append("author", formData.author);
    data.append("caption", formData.caption);
    data.append("src", video);

    // ✅ Add music only if provided
    if (music) {
      data.append("music", music);
    }

    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/myreels/", data, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      setMessage("✅ Reel uploaded successfully!");
      setMessageType("success");
      setFormData({ author: "", caption: "" });
      setVideo(null);
      setMusic(null);
      setPreview(null);
      setProgress(0);
    } catch (error) {
      console.error("❌ Upload error:", error.response?.data || error.message);
      setMessage("❌ Failed to upload reel. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <div className="container mt-5 position-relative">
      <div
        className="card shadow-lg border-0 p-4 rounded-4 bg-light"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <h3 className="text-center text-primary fw-bold mb-4">
          🎥 Upload New Reel
        </h3>

        {/* Alert Message */}
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
          {/* Author */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Author Name</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Caption */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Caption</label>
            <input
              type="text"
              className="form-control"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Say something..."
              maxLength={50}
              required
            />
          </div>

          {/* Video Upload */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Reel Video</label>
            <input
              type="file"
              className="form-control"
              name="src"
              accept="video/*"
              onChange={handleFileChange}
              required
            />
            {preview && (
              <video
                src={preview}
                controls
                className="mt-3 rounded-3 shadow-sm w-100"
                style={{ maxHeight: "300px" }}
              />
            )}
          </div>

          {/* Music Upload (Optional) */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Background Music (Optional)
            </label>
            <input
              type="file"
              className="form-control"
              name="music"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Progress Bar */}
          {loading && (
            <div className="progress mt-3" style={{ height: "10px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100 mt-4 fw-semibold"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Reel"}
          </button>
        </form>
      </div>
    </div>
  );
}
