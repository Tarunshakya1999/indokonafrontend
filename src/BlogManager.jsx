// BlogManager.jsx with blur + loading placeholder
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Nav";
import "./loader.css"; // custom loader CSS (create file)

const API = "https://indokonabackend-1.onrender.com/api/blogs/";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    const res = await axios.get(API);
    setBlogs(res.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    if (form.image) data.append("image", form.image);

    setLoading(true);
    try {
      if (editingId) {
        await axios.patch(`${API}${editingId}/`, data);
        alert("✅ Blog Updated");
      } else {
        await axios.post(API, data);
        alert("✅ Blog Added");
      }
      setForm({ title: "", description: "", image: null });
      setEditingId(null);
      getBlogs();
    } finally {
      setLoading(false);
    }
  };

  const editBlog = (b) => {
    setEditingId(b.id);
    setForm({ title: b.title, description: b.description, image: null });
  };

  const deleteBlog = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API}${id}/`);
      alert("🗑️ Blog Deleted");
      getBlogs();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={loading ? "blur-area" : ""}>
        <Navbar />
        <div className="container my-5">
          <h2 className="text-primary fw-bold mb-4">📝 Manage Blogs</h2>

          <form onSubmit={handleSubmit} className="card p-4 shadow-lg rounded-4 mb-5">
            <input type="text" name="title" className="form-control mb-3" placeholder="Blog Title" value={form.title} onChange={handleChange} required />
            <textarea name="description" className="form-control mb-3" placeholder="Blog Description" value={form.description} onChange={handleChange} required />
            <input type="file" name="image" className="form-control mb-3" onChange={handleChange} accept="image/*" />
            <button className="btn btn-primary w-100 rounded-pill">
              {editingId ? "✏️ Update Blog" : "➕ Add Blog"}
            </button>
          </form>

          <div className="row g-4">
            {blogs.map((b) => (
              <div key={b.id} className="col-md-4">
                <div className="card rounded-4 shadow-sm h-100">
                  <img src={b.image} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt={b.title} />
                  <div className="card-body">
                    <h5 className="fw-bold">{b.title}</h5>
                    <p>{b.description.substring(0, 80)}...</p>

                    <button className="btn btn-warning btn-sm rounded-pill me-2" onClick={() => editBlog(b)}>
                      ✏️ Edit
                    </button>
                    <button className="btn btn-danger btn-sm rounded-pill" onClick={() => deleteBlog(b.id)}>
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogManager;
