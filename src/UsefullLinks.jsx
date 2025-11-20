import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UsefulLinksPage() {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({ name: "", url: "" });
  const [editingId, setEditingId] = useState(null);

  const API_URL = "https://indokonabackend-1.onrender.com/api/useful-links/";

  const username = localStorage.getItem("username");
  const isAdmin = username === "admin";

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    const res = await axios.get(API_URL);
    setLinks(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleEdit = (link) => {
    setFormData({ name: link.name, url: link.url });
    setEditingId(link.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchLinks();
  };

  return (
    <div
      className="min-vh-100 p-4"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#6a1b9a" }}>
          ✨ Useful Links
        </h2>

        {isAdmin && (
          <div
            className="card shadow-lg p-4 mb-4 border-0"
            style={{ borderRadius: "20px", backdropFilter: "blur(10px)" }}
          >
            <h4 className="fw-bold" style={{ color: "#512da8" }}>
              {editingId ? "Update Link" : "Add New Link"}
            </h4>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mt-3"
                placeholder="Link Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ borderRadius: "12px" }}
              />

              <input
                type="url"
                name="url"
                className="form-control mt-3"
                placeholder="Link URL"
                value={formData.url}
                onChange={handleChange}
                required
                style={{ borderRadius: "12px" }}
              />

              <button
                className="btn mt-3 px-4"
                style={{
                  background: "#8e24aa",
                  color: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                {editingId ? "Update Link" : "Add Link"}
              </button>
            </form>
          </div>
        )}

        <div
          className="card shadow-lg p-4 border-0"
          style={{ borderRadius: "20px", backdropFilter: "blur(10px)" }}
        >
          <h4 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
            📚 All Links
          </h4>

          <ul className="list-group">
            {links.map((link) => (
              <li
                key={link.id}
                className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 shadow-sm"
                style={{ borderRadius: "15px", background: "#ffffffb8" }}
              >
                <div>
                  <strong style={{ color: "#4a148c" }}>{link.name}</strong>
                  <br />
                  <a href={link.url} target="_blank" rel="noreferrer" style={{ color: "#8e24aa" }}>
                    {link.url}
                  </a>
                </div>

                {isAdmin && (
                  <div>
                    <button
                      className="btn btn-sm me-2"
                      onClick={() => handleEdit(link)}
                      style={{ background: "#7b1fa2", color: "white", borderRadius: "8px" }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(link.id)}
                      style={{ borderRadius: "8px" }}
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
    </div>
  );
}