import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// Import the custom CSS file below (you'll need to create this file)
import "./UsefulLinks.css"; 

export default function UsefulLinksPage() {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({ name: "", url: "" });
  const [editingId, setEditingId] = useState(null);

  const API_URL = "https://indokonabackend-1.onrender.com/api/useful-links/";

  // Admin Check
  const username = localStorage.getItem("username");
  const isAdmin = username === "admin";

  // Fetch Links
  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const res = await axios.get(API_URL);
      setLinks(res.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  // Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add / Update Link
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API_URL}${editingId}/`, formData);
      } else {
        await axios.post(API_URL, formData);
      }

      setFormData({ name: "", url: "" });
      setEditingId(null);
      fetchLinks();
    } catch (error) {
      console.error("Error submitting link:", error);
    }
  };

  // Edit Button Click
  const handleEdit = (link) => {
    setFormData({ name: link.name, url: link.url });
    setEditingId(link.id);
  };

  // Delete Button
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      try {
        await axios.delete(`${API_URL}${id}/`);
        fetchLinks();
      } catch (error) {
        console.error("Error deleting link:", error);
      }
    }
  };

  return (
    <>
    <style>{`/* Custom Styles for UsefulLinksPage */

/* Overall Page Background and Container Styling */
.useful-links-page {
  background-color: #f8f9fa; /* Light grey background */
  min-height: 100vh;
}

/* Page Title Style */
.page-title {
  letter-spacing: 1px;
  color: #007bff !important; /* Blue primary color */
}

/* Admin Form Card Styling */
.admin-form-card .card-header {
  background-color: #007bff !important; /* Blue header */
  border-radius: 0.35rem 0.35rem 0 0;
}

/* Links List Card Styling */
.links-list-card {
  border: none;
  border-radius: 0.75rem; /* Rounded corners for the list card */
  overflow: hidden; /* Ensures list items respect border-radius */
}

.links-list-card .card-header {
  background-color: #6c757d !important; /* Grey secondary color */
}

/* Individual Link Item Styling */
.resource-item {
  border-left: 5px solid transparent; /* Subtle line for visual flair */
  transition: all 0.3s ease;
  cursor: pointer;
}

.resource-item:hover {
  background-color: #e9ecef; /* Slightly darker on hover */
  border-left-color: #17a2b8; /* Highlight with a vibrant color (info color) */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

/* Link URL Styling */
.resource-url {
  color: #17a2b8; /* Info color for the link */
  font-size: 0.9rem;
}

/* Button Styling in List (using outline for sleek look) */
.link-actions .btn {
  transition: all 0.3s ease;
}

/* Form Input Focus Effect */
.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Font and Icons */
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');`}</style>
    <div className="useful-links-page container py-5">
      <h2 className="text-center mb-5 display-4 text-primary fw-bold page-title">
        <i className="bi bi-link-45deg me-3"></i>Useful Resources
      </h2>

      {/* Admin ko hi Form dikhana */}
      {isAdmin && (
        <div className="admin-form-card card shadow-lg mb-5 bg-light-subtle">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">
              {editingId ? "✍️ Update Resource" : "➕ Add New Resource"}
            </h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-5">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Resource Name (e.g., React Docs)"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="url"
                    name="url"
                    className="form-control form-control-lg"
                    placeholder="Full URL (e.g., https://react.dev)"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-2 d-grid">
                  <button className="btn btn-success btn-lg resource-submit-btn">
                    {editingId ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Links List */}
      <div className="links-list-card card shadow-lg">
        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">🔗 All Available Resources</h4>
        </div>
        <ul className="list-group list-group-flush">
          {links.length > 0 ? (
            links.map((link) => (
              <li
                key={link.id}
                className="resource-item list-group-item d-flex justify-content-between align-items-center p-3"
              >
                <div className="link-content">
                  <h5 className="mb-1 text-dark">
                    <i className="bi bi-bookmark-fill me-2 text-info"></i>
                    {link.name}
                  </h5>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none resource-url"
                  >
                    {link.url}
                  </a>
                </div>

                {/* Edit/Delete sirf Admin ko */}
                {isAdmin && (
                  <div className="link-actions">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(link)}
                    >
                      <i className="bi bi-pencil-fill"></i> Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(link.id)}
                    >
                      <i className="bi bi-trash-fill"></i> Delete
                    </button>
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted p-4">
              No useful links found. {isAdmin && "Add one now!"}
            </li>
          )}
        </ul>
      </div>
    </div>
    </>



  );
}