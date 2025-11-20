import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLink, FaEdit, FaTrash, FaGripVertical } from "react-icons/fa";

/**
 * UsefulLinksPage
 * - Admin: Add / Edit / Delete / Approve links
 * - Users: View approved links with search, filter, pagination
 * - Extra: Dark/Light mode, drag & drop ordering, confirmation modal
 *
 * NOTE:
 * - All network errors are caught and shown as friendly messages.
 * - No error is thrown during initial render or state setup.
 * - If the API/server is down, the UI still loads and shows an error banner.
 */

export default function UsefulLinksPage() {
  // ---------- STATE ----------
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    category: "Others",
    approved: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [dragIndex, setDragIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Loading + error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Confirmation modal
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    title: "",
    message: "",
    action: null,
    payload: null,
  });

  const API_URL = "https://indokonabackend-1.onrender.com/api/useful-links/";

  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  const isAdmin = username === "admin";

  const categories = [
    "All",
    "Business",
    "Government",
    "Banking",
    "Education",
    "Tech",
    "Others",
  ];

  const pageSize = 6;

  // ---------- DATA FETCH (SAFE) ----------
  const fetchLinks = useCallback(async () => {
    // If API URL is somehow missing, avoid throwing
    if (!API_URL) {
      setError("API URL is not configured.");
      setLinks([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(API_URL);
      const data = Array.isArray(res.data) ? res.data : [];
      setLinks(data);
    } catch (err) {
      console.warn("Error fetching links", err);
      setError("Unable to load links. Please try again later.");
      setLinks([]); // keep UI stable even on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      if (!isMounted) return;
      await fetchLinks();
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [fetchLinks]);

  // ---------- CONFIRMATION MODAL HELPERS ----------
  const openConfirm = ({ title, message, action, payload }) => {
    setConfirmModal({ show: true, title, message, action, payload });
  };

  const closeConfirm = () => {
    setConfirmModal({
      show: false,
      title: "",
      message: "",
      action: null,
      payload: null,
    });
  };

  const handleConfirm = () => {
    if (confirmModal.action) {
      confirmModal.action(confirmModal.payload);
    }
    closeConfirm();
  };

  // ---------- FORM HANDLERS ----------
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitAction = async () => {
    const payload = {
      name: formData.name.trim(),
      url: formData.url.trim(),
      category: formData.category || "Others",
      approved: !!formData.approved,
    };

    if (!payload.name || !payload.url) return; // extra safety

    try {
      setLoading(true);
      setError(null);

      if (editingId) {
        await axios.put(`${API_URL}${editingId}/`, payload);
      } else {
        await axios.post(API_URL, payload);
      }

      setFormData({ name: "", url: "", category: "Others", approved: true });
      setEditingId(null);
      await fetchLinks();
    } catch (err) {
      console.warn("Error saving link", err);
      setError("There was a problem saving the link.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openConfirm({
      title: editingId ? "Update Link" : "Add Link",
      message: "Are you sure you want to save this link?",
      action: submitAction,
      payload: null,
    });
  };

  const editAction = (link) => {
    setFormData({
      name: link.name || "",
      url: link.url || "",
      category: link.category || "Others",
      approved: typeof link.approved === "boolean" ? link.approved : true,
    });
    setEditingId(link.id);
  };

  const handleEdit = (link) => {
    openConfirm({
      title: "Edit Link",
      message: "Do you want to load this link into the form for editing?",
      action: editAction,
      payload: link,
    });
  };

  const deleteAction = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${API_URL}${id}/`);
      await fetchLinks();
    } catch (err) {
      console.warn("Error deleting link", err);
      setError("There was a problem deleting the link.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    openConfirm({
      title: "Delete Link",
      message: "This link will be permanently deleted. Are you sure?",
      action: deleteAction,
      payload: id,
    });
  };

  const approveAction = async (link) => {
    const updated = {
      name: link.name,
      url: link.url,
      category: link.category || "Others",
      approved: !(typeof link.approved === "boolean" ? link.approved : true),
    };

    try {
      setLoading(true);
      setError(null);
      await axios.put(`${API_URL}${link.id}/`, updated);
      await fetchLinks();
    } catch (err) {
      console.warn("Error toggling approve", err);
      setError("There was a problem updating approval status.");
    } finally {
      setLoading(false);
    }
  };

  const toggleApprove = (link) => {
    openConfirm({
      title: link.approved ? "Unapprove Link" : "Approve Link",
      message: "Are you sure you want to change the approval state?",
      action: approveAction,
      payload: link,
    });
  };

  // ---------- DRAG & DROP ----------
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

  // ---------- FILTERING / PAGINATION ----------
  const isLinkApproved = (link) => {
    if (!isAdmin)
      return typeof link.approved === "boolean" ? link.approved : true;
    return true;
  };

  const getCategory = (link) => link.category || "Others";

  const visibleLinks = links.filter((link) => isLinkApproved(link));

  const filteredLinks = visibleLinks.filter((link) => {
    const cat = getCategory(link);
    const matchesCategory =
      selectedCategory === "All" || cat === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (link.name || "").toLowerCase().includes(term) ||
      (link.url || "").toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredLinks.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedLinks = filteredLinks.slice(
    startIndex,
    startIndex + pageSize
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // ---------- RENDER ----------
  return (
    <div
      className={`min-vh-100 p-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}
      style={{ transition: "0.4s" }}
    >
      <div className="container">
        {/* Confirmation Modal */}
        {confirmModal.show && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "rgba(0,0,0,0.6)", zIndex: 2000 }}
          >
            <div
              className="p-4 shadow-lg"
              style={{
                background: darkMode ? "#222" : "white",
                width: "380px",
                borderRadius: "15px",
                animation: "pop .2s ease",
              }}
            >
              <h5 className="fw-bold mb-3">
                {confirmModal.title || "⚠️ Confirm Action"}
              </h5>
              <p className="mb-4">
                {confirmModal.message || "Are you sure you want to continue?"}
              </p>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={closeConfirm}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleConfirm}>
                  Yes, Proceed
                </button>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes pop {
            0% { transform: scale(0.6); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2
            className="fw-bold"
            style={{ color: darkMode ? "#ffccff" : "#6a1b9a" }}
          >
            ✨ Useful Links
          </h2>
          <button
            className="btn btn-sm"
            onClick={() => setDarkMode(!darkMode)}
            style={{
              borderRadius: "10px",
              background: darkMode ? "#9c27b0" : "#6a1b9a",
              color: "white",
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Error / Loading banners */}
        {error && <div className="alert alert-danger py-2">{error}</div>}
        {loading && (
          <div className="alert alert-info py-2 mb-2">Loading...</div>
        )}

        {/* ADMIN FORM */}
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
            <h4
              className="fw-bold"
              style={{ color: darkMode ? "#f8bbd0" : "#512da8" }}
            >
              {editingId ? "Update Link" : "Add New Link"}
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="row g-3 mt-1">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Link Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="url"
                    name="url"
                    className="form-control"
                    placeholder="Link URL"
                    value={formData.url}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="col-md-2">
                  <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                    style={{ borderRadius: "12px" }}
                  >
                    {categories
                      .filter((c) => c !== "All")
                      .map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="approvedCheck"
                      name="approved"
                      checked={formData.approved}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="approvedCheck"
                    >
                      Approved
                    </label>
                  </div>
                </div>
              </div>

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

        {/* LIST SECTION */}
        <div
          className="card shadow-lg p-4 border-0"
          style={{
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            background: darkMode ? "#1c1c1c" : "#ffffffc9",
            transition: "0.4s",
          }}
        >
          {/* SEARCH + CATEGORY */}
          <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
            <h4
              className="fw-bold mb-0"
              style={{ color: darkMode ? "#ffccff" : "#6a1b9a" }}
            >
              📚 All Links
            </h4>
            <div className="d-flex flex-wrap gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                style={{ maxWidth: "220px", borderRadius: "12px" }}
              />
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                style={{ maxWidth: "180px", borderRadius: "12px" }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ul className="list-group">
            {paginatedLinks.map((link, index) => (
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
                  cursor: "grab",
                  transition: "0.3s",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <FaGripVertical
                    style={{ color: darkMode ? "#ddd" : "#555" }}
                  />
                  <FaLink style={{ color: "#8e24aa" }} />
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <strong
                        style={{
                          color: darkMode ? "#f8bbd0" : "#4a148c",
                        }}
                      >
                        {link.name}
                      </strong>
                      <span
                        className="badge rounded-pill"
                        style={{
                          background:
                            getCategory(link) === "Government"
                              ? "#1e88e5"
                              : getCategory(link) === "Banking"
                              ? "#43a047"
                              : getCategory(link) === "Business"
                              ? "#fb8c00"
                              : "#8e24aa",
                          color: "white",
                        }}
                      >
                        {getCategory(link)}
                      </span>
                      {isAdmin && (
                        <span
                          className={`badge rounded-pill ${
                            typeof link.approved === "boolean"
                              ? link.approved
                                ? "bg-success"
                                : "bg-secondary"
                              : "bg-success"
                          }`}
                        >
                          {typeof link.approved === "boolean"
                            ? link.approved
                              ? "Approved"
                              : "Pending"
                            : "Approved"}
                        </span>
                      )}
                    </div>
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

                {isAdmin && (
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm d-flex align-items-center"
                      onClick={() => toggleApprove(link)}
                      style={{
                        background: "#00bfa5",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      {typeof link.approved === "boolean" && link.approved
                        ? "Unapprove"
                        : "Approve"}
                    </button>
                    <button
                      className="btn btn-sm d-flex align-items-center"
                      onClick={() => handleEdit(link)}
                      style={{
                        background: "#7b1fa2",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      <FaEdit className="me-1" /> Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center"
                      onClick={() => handleDelete(link.id)}
                      style={{ borderRadius: "8px" }}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="small">
              Showing {filteredLinks.length === 0 ? 0 : startIndex + 1}-
              {Math.min(startIndex + pageSize, filteredLinks.length)} of {" "}
              {filteredLinks.length}
            </span>
            <div className="btn-group">
              <button
                className="btn btn-sm btn-outline-secondary"
                disabled={safePage === 1}
                onClick={() => goToPage(safePage - 1)}
              >
                Prev
              </button>
              <button className="btn btn-sm btn-outline-secondary" disabled>
                Page {safePage} of {totalPages}
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                disabled={safePage === totalPages}
                onClick={() => goToPage(safePage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}