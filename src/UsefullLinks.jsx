import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLink, FaEdit, FaTrash, FaGripVertical } from "react-icons/fa";

export default function UsefulLinksPage() {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({ name: "", url: "" });
  const [editingId, setEditingId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [dragIndex, setDragIndex] = useState(null);

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

  const onDragStart = (index) => setDragIndex(index);

  const onDrop = (index) => {
    if (dragIndex === null) return;

    const newLinks = [...links];
    const draggedItem = newLinks[dragIndex];

    newLinks.splice(dragIndex, 1);
    newLinks.splice(index, 0, draggedItem);

    setLinks(newLinks);
    setDragIndex(null);
  };

  return (
    <>
      {/* ---------- CUSTOM CSS ---------- */}
      <style>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.35);
          transition: 0.3s;
          border-radius: 20px;
        }

        .glass-card-dark {
          backdrop-filter: blur(12px);
          background: rgba(0, 0, 0, 0.45);
        }

        .link-item {
          transition: transform 0.2s, box-shadow 0.3s;
        }

        .link-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .btn-purple {
          background: linear-gradient(45deg, #6a1b9a, #8e24aa);
          color: white;
          border-radius: 10px;
          border: none;
        }

        .btn-purple:hover {
          opacity: 0.9;
        }

        .title-style {
          font-weight: 800;
          letter-spacing: 1px;
        }
      `}</style>

      {/* ---------- MAIN UI ---------- */}
      <div
        className={`min-vh-100 p-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}
        style={{ transition: "0.4s" }}
      >
        <div className="container">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2
              className="title-style"
              style={{ color: darkMode ? "#f3c1ff" : "#6a1b9a" }}
            >
              ✨ Useful Links
            </h2>

            <button className="btn btn-purple btn-sm" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* ADD / UPDATE FORM */}
          {isAdmin && (
            <div className={`card p-4 shadow-lg mb-4 border-0 glass-card ${darkMode ? "glass-card-dark text-light" : ""}`}>
              <h4
                className="fw-bold mb-3"
                style={{ color: darkMode ? "#ffb3ff" : "#512da8" }}
              >
                {editingId ? "✏ Update Link" : "➕ Add New Link"}
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
                />

                <input
                  type="url"
                  name="url"
                  className="form-control mt-3"
                  placeholder="Link URL"
                  value={formData.url}
                  onChange={handleChange}
                  required
                />

                <button className="btn btn-purple mt-3 px-4">
                  {editingId ? "Update Link" : "Add Link"}
                </button>
              </form>
            </div>
          )}

          {/* ALL LINKS LIST */}
          <div className={`card p-4 shadow-lg border-0 glass-card ${darkMode ? "glass-card-dark text-light" : ""}`}>
            <h4
              className="fw-bold mb-3"
              style={{ color: darkMode ? "#ffd6ff" : "#6a1b9a" }}
            >
              📚 All Links
            </h4>

            <ul className="list-group">
              {links.map((link, index) => (
                <li
                  key={link.id}
                  draggable
                  onDragStart={() => onDragStart(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDrop(index)}
                  className={`list-group-item mb-3 border-0 shadow-sm link-item ${
                    darkMode ? "bg-dark text-light" : "bg-white"
                  }`}
                  style={{ borderRadius: "15px", cursor: "grab" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Left side */}
                    <div className="d-flex align-items-center gap-3">
                      <FaGripVertical style={{ opacity: 0.6 }} />
                      <FaLink style={{ color: "#8e24aa" }} />
                      <div>
                        <strong style={{ color: darkMode ? "#ffccff" : "#4a148c" }}>
                          {link.name}
                        </strong>
                        <br />
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#8e24aa" }}
                        >
                          {link.url}
                        </a>
                      </div>
                    </div>

                    {/* Admin Buttons */}
                    {isAdmin && (
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-purple btn-sm d-flex align-items-center"
                          onClick={() => handleEdit(link)}
                        >
                          <FaEdit className="me-1" /> Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm d-flex align-items-center"
                          onClick={() => handleDelete(link.id)}
                        >
                          <FaTrash className="me-1" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
