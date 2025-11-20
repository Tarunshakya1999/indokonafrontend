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
    <div
      className={`min-vh-100 p-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}
      style={{ transition: "0.4s" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold" style={{ color: darkMode ? "#ffccff" : "#6a1b9a" }}>
            ✨ Useful Links
          </h2>

          <button
            className="btn btn-sm"
            onClick={() => setDarkMode(!darkMode)}
            style={{ borderRadius: "10px", background: darkMode ? "#9c27b0" : "#6a1b9a", color: "white" }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {isAdmin && (
          <div
            className="card shadow-lg p-4 mb-4 border-0"
            style={{
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              background: darkMode ? "#222" : "#ffffffaa",
              transition: "0.4s",
            }}
          >
            <h4 className="fw-bold" style={{ color: darkMode ? "#f8bbd0" : "#512da8" }}>
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
                  boxShadow: "0 4px 10px #8e24aa80",
                }}
              >
                {editingId ? "Update Link" : "Add Link"}
              </button>
            </form>
          </div>
        )}

        <div
          className="card shadow-lg p-4 border-0"
          style={{
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            background: darkMode ? "#1c1c1c" : "#ffffffc9",
            transition: "0.4s",
          }}
        >
          <h4 className="fw-bold mb-3" style={{ color: darkMode ? "#ffccff" : "#6a1b9a" }}>
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
                className="list-group-item d-flex justify-content-between align-items-center border-0 mb-3 shadow-sm"
                style={{
                  borderRadius: "15px",
                  background: darkMode ? "#2c2c2c" : "#ffffffb8",
                  transition: "0.3s",
                  cursor: "grab",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <FaGripVertical style={{ color: darkMode ? "#ddd" : "#555" }} />
                  <FaLink style={{ color: "#8e24aa" }} />
                  <div>
                    <strong style={{ color: darkMode ? "#f8bbd0" : "#4a148c" }}>{link.name}</strong>
                    <br />
                    <a href={link.url} target="_blank" rel="noreferrer" style={{ color: "#8e24aa" }}>
                      {link.url}
                    </a>
                  </div>
                </div>

                {isAdmin && (
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm d-flex align-items-center"
                      onClick={() => handleEdit(link)}
                      style={{
                        background: "#7b1fa2",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0 0 10px #7b1fa280",
                      }}
                    >
                      <FaEdit className="me-1" /> Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center"
                      onClick={() =>   handleDelete(link.id)}
                      style={{ borderRadius: "8px", boxShadow: "0 0 10px #ff000080" }}
                    >
                      <FaTrash className="me-1" /> Delete
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