import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://127.0.0.1:8000/api/blogs/";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [editingId, setEditingId] = useState(null);

  // Fetch blogs
  const getBlogs = async () => {
    const res = await axios.get(API);
    setBlogs(res.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // Form change handler
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  // Submit form (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    if (form.image) data.append("image", form.image);

    if (editingId) {
      await axios.put(`${API}${editingId}/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Blog Updated");
    } else {
      await axios.post(API, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Blog Added");
    }

    setForm({ title: "", description: "", image: null });
    setEditingId(null);
    getBlogs();
  };

  // Edit Blog
  const editBlog = (blog) => {
    setEditingId(blog.id);
    setForm({ title: blog.title, description: blog.description, image: null });
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    await axios.delete(`${API}${id}/`);
    alert("🗑️ Blog Deleted");
    getBlogs();
  };

  return (
    <div className="container my-5">
      <h2 className="text-primary fw-bold mb-4">📝 Manage Blogs</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow-lg rounded-4 mb-5"
      >
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          className="form-control mb-3"
          placeholder="Blog Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          className="form-control mb-3"
          onChange={handleChange}
          accept="image/*"
        />

        <button className="btn btn-primary w-100 rounded-pill">
          {editingId ? "✏️ Update Blog" : "➕ Add Blog"}
        </button>
      </form>

      {/* Blog List */}
      <div className="row g-4">
        {blogs.map((b) => (
          <div key={b.id} className="col-md-4">
            <div className="card rounded-4 shadow-sm h-100">
              <img
                src={`http://127.0.0.1:8000${b.image}`}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt={b.title}
              />
              <div className="card-body">
                <h5 className="fw-bold">{b.title}</h5>
                <p>{b.description.substring(0, 80)}...</p>

                <button
                  className="btn btn-warning btn-sm rounded-pill me-2"
                  onClick={() => editBlog(b)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => deleteBlog(b.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
