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

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [loading, setLoading] = useState(false);

  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const linksPerPage = 5;

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

  const openConfirm = (action) => {
    setConfirmAction(() => action);
    setShowConfirm(true);
  };

  const runConfirmedAction = async () => {
    setShowConfirm(false);
    setLoading(true);
    await confirmAction();
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openConfirm(async () => {
      if (editingId) {
        await axios.put(`${API_URL}${editingId}/`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ name: "", url: "" });
      setEditingId(null);
      fetchLinks();
    });
  };

  const handleEdit = (link) => {
    setFormData({ name: link.name, url: link.url });
    setEditingId(link.id);
  };

  const handleDelete = (id) => {
    openConfirm(async () => {
      await axios.delete(`${API_URL}${id}/`);
      fetchLinks();
    });
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

  // PAGINATION CALCULATION
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = links.slice(indexOfFirstLink, indexOfLastLink);

  const totalPages = Math.ceil(links.length / linksPerPage);

  return (
    <>
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
          transition: 0.2s;
        }
        .link-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .btn-purple {
          background: linear-gradient(45deg, #6a1b9a, #8e24aa);
          color: white;
          border-radius: 10px;
        }
      `}</style>

      <div className={`min-vh-100 p-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ fontWeight: "800", color: darkMode ? "#ffc7ff" : "#6a1b9a" }}>
              ✨ Useful Links
            </h2>

            <button className="btn btn-purple btn-sm" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* FORM */}
          {isAdmin && (
            <div className={`card p-4 shadow-lg mb-4 border-0 glass-card ${darkMode ? "glass-card-dark" : ""}`}>
              <h4 className="fw-bold mb-3">
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

                <button className="btn btn-purple mt-3 px-4" type="submit">
                  {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : editingId ? (
                    "Update Link"
                  ) : (
                    "Add Link"
                  )}
                </button>
              </form>
            </div>
          )}

          {/* ALL LINKS + PAGINATION */}
          <div className={`card p-4 shadow-lg border-0 glass-card ${darkMode ? "glass-card-dark" : ""}`}>
            <h4 className="fw-bold mb-3">📚 All Links</h4>

            <ul className="list-group">
              {currentLinks.map((link, index) => (
                <li
                  key={link.id}
                  draggable
                  onDragStart={() => onDragStart(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDrop(index)}
                  className={`list-group-item shadow-sm mb-3 border-0 link-item ${
                    darkMode ? "bg-dark text-light" : "bg-white"
                  }`}
                  style={{ borderRadius: "15px", cursor: "grab" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <FaGripVertical style={{ opacity: 0.5 }} />
                      <FaLink style={{ color: "#8e24aa" }} />
                      <div>
                        <strong>{link.name}</strong>
                        <br />
                        <a href={link.url} target="_blank" rel="noreferrer" style={{ color: "#8e24aa" }}>
                          {link.url}
                        </a>
                      </div>
                    </div>

                    {isAdmin && (
                      <div className="d-flex gap-2">
                        <button className="btn btn-purple btn-sm" onClick={() => handleEdit(link)}>
                          <FaEdit className="me-1" /> Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
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

            {/* PAGINATION UI */}
            <div className="d-flex justify-content-center mt-4 gap-2">
              <button
                className="btn btn-secondary btn-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ⬅ Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`btn btn-sm ${currentPage === i + 1 ? "btn-purple" : "btn-outline-secondary"}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="btn btn-secondary btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next ➡
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fw-bold">Are you sure?</h5>
                <button className="btn-close" onClick={() => setShowConfirm(false)}></button>
              </div>

              <div className="modal-body">This action cannot be undone.</div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>
                  Cancel
                </button>

                <button className="btn btn-danger" onClick={runConfirmedAction}>
                  {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    "Yes, Continue"
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
