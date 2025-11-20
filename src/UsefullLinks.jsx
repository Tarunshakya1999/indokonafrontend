import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
    const res = await axios.get(API_URL);
    setLinks(res.data);
  };

  // Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add / Update Link
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(`${API_URL}${editingId}/`, formData);
    } else {
      await axios.post(API_URL, formData);
    }

    setFormData({ name: "", url: "" });
    setEditingId(null);
    fetchLinks();
  };

  // Edit Button Click
  const handleEdit = (link) => {
    setFormData({ name: link.name, url: link.url });
    setEditingId(link.id);
  };

  // Delete Button
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchLinks();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">Useful Links</h2>

      {/* Admin ko hi Form dikhana */}
      {isAdmin && (
        <div className="card p-3 mb-4">
          <h4>{editingId ? "Update Link" : "Add New Link"}</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mt-2"
              placeholder="Link Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="url"
              name="url"
              className="form-control mt-2"
              placeholder="Link URL"
              value={formData.url}
              onChange={handleChange}
              required
            />

            <button className="btn btn-success mt-3">
              {editingId ? "Update Link" : "Add Link"}
            </button>
          </form>
        </div>
      )}

      {/* Links List */}
      <div className="card p-3">
        <h4 className="mb-3">All Links</h4>
        <ul className="list-group">
          {links.map((link) => (
            <li
              key={link.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{link.name}</strong>
                <br />
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.url}
                </a>
              </div>

              {/* Edit/Delete sirf Admin ko */}
              {isAdmin && (
                <div>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(link)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(link.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
