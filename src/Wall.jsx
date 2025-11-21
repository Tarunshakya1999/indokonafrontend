// App.js — Facebook style Feed + Reels
// Requires: bootstrap, react-icons, react-toastify, react-router-dom
//   npm i bootstrap react-icons react-toastify react-router-dom

import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaThumbsUp,
  FaCommentDots,
  FaShareAlt,
  FaUserCircle,
  FaPlay,
  FaPause,
  FaMusic,
  FaHome,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

/* =====================
   THEME
   ===================== */
const THEME = {
  fbBg: "#f0f2f5",
  fbBlue: "#1877f2",
};

/* =====================
   SAMPLE REELS (demo)
   ===================== */
const SAMPLE_REELS = [
  {
    id: "r1",
    author: "Indokona",
    caption: "Grow your business with verified leads 🚀",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    music: "Corporate Beat — @studio",
  },
  {
    id: "r2",
    author: "Credit Bazar",
    caption: "MSME loan in 24 hours ✅ #Loans",
    src: "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",
    music: "Uplift — @beats",
  },
  {
    id: "r3",
    author: "Dream True Academy",
    caption: "Content is the new currency 💡 #Marketing",
    src: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    music: "Synthwave — @mixlab",
  },
];

/* =====================
   ROOT APP
   ===================== */
export default function MyApp() {
  const [active, setActive] = useState("feed"); // 'feed' | 'reels'

  return (
    <div style={{ minHeight: "100vh", backgroundColor: THEME.fbBg }}>
      <ToastContainer position="top-center" />

      {/* Top Nav — Facebook style */}
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #dddfe2",
        }}
      >
        <div className="container-fluid px-3">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: 36,
                height: 36,
                backgroundColor: THEME.fbBlue,
                color: "#fff",
                fontSize: 20,
              }}
            >
              <FaHome />
            </span>
            <span style={{ color: THEME.fbBlue }}>Indokona Business Wall</span>
          </span>

          <div className="ms-auto d-flex align-items-center gap-2">
            {/* Feed / Reels tabs */}
            <button
              className={`btn btn-sm ${
                active === "feed" ? "btn-primary" : "btn-outline-primary"
              }`}
              style={{ borderRadius: 999 }}
              onClick={() => setActive("feed")}
            >
              Feed
            </button>
            <button
              className={`btn btn-sm ${
                active === "reels" ? "btn-primary" : "btn-outline-primary"
              }`}
              style={{ borderRadius: 999 }}
              onClick={() => setActive("reels")}
            >
              Reels
            </button>

            {/* External nav */}
            <Link to="/pf" className="btn btn-sm btn-outline-secondary">
              Public Profile
            </Link>
            <Link to="/reelsupload" className="btn btn-sm btn-success">
              Upload Reels
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      {active === "feed" ? (
        <Feed />
      ) : (
        <Reels reels={SAMPLE_REELS} />
      )}

      <footer
        className="text-center text-muted py-3"
        style={{ borderTop: "1px solid #dddfe2", backgroundColor: "#ffffff" }}
      >
        © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.
      </footer>
    </div>
  );
}

/* =====================
   FEED — Facebook style stacked cards
   ===================== */
function Feed() {
  const [posts, setPosts] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    image: null,
    time: "",
  });

  const [editingId, setEditingId] = useState(null); // null = add mode, id = edit mode

  // ---------------------------
  // 🔥 1. Fetch all posts
  // ---------------------------
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          "https://indokonabackend-1.onrender.com/api/mypost/"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    };
    getPost();
  }, []);

  // ---------------------------
  // 🔥 2. INPUT HANDLERS
  // ---------------------------
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImage(e) {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  }

  // ---------------------------
  // 🔥 3. ADD / EDIT POST
  // ---------------------------
  async function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData();
    fd.append("author", formData.author);
    fd.append("title", formData.title);
    fd.append("body", formData.body);
    fd.append("time", formData.time);
    if (formData.image) fd.append("image", formData.image);

    try {
      let response;

      if (editingId === null) {
        // ADD MODE
        response = await axios.post(
          "https://indokonabackend-1.onrender.com/api/mypost/",
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        setPosts((prev) => [response.data, ...prev]);
        setSuccess("Post added successfully!");
        toast.success("Post added successfully!");
      } else {
        // EDIT MODE
        response = await axios.patch(
          `https://indokonabackend-1.onrender.com/api/mypost/${editingId}/`,
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        setPosts((ps) => ps.map((p) => (p.id === editingId ? response.data : p)));
        setSuccess("Post updated successfully!");
        toast.info("Post updated successfully!");
      }

      // Reset form
      setFormData({ author: "", title: "", body: "", image: null, time: "" });
      setEditingId(null);
    } catch {
      setError("Something went wrong. Try again!");
      toast.error("Something went wrong. Try again!");
    }
  }

  // ---------------------------
  // 🔥 4. DELETE POST
  // ---------------------------
  async function handleDelete(id) {
    const ok = window.confirm("Are you sure you want to delete this post?");
    if (!ok) return;

    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/mypost/${id}/`
      );
      setPosts((posts) => posts.filter((p) => p.id !== id));
      toast.success("Post deleted");
    } catch {
      alert("Delete failed");
    }
  }

  // ---------------------------
  // 🔥 5. LIKE BUTTON
  // ---------------------------
  function like(id) {
    setPosts((ps) =>
      ps.map((p) =>
        p.id === id ? { ...p, likes: (p.likes || 0) + 1 } : p
      )
    );
  }

  // ---------------------------
  // 🔥 6. EDIT BUTTON CLICK
  // ---------------------------
  function loadToForm(post) {
    setEditingId(post.id);
    setFormData({
      author: post.author,
      title: post.title,
      body: post.body,
      image: null,
      time: post.time,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-10">

          {/* Alerts */}
          {success && (
            <div className="alert alert-success py-2 mb-3" role="alert">
              {success}
            </div>
          )}
          {error && (
            <div className="alert alert-danger py-2 mb-3" role="alert">
              {error}
            </div>
          )}

          {/* ------------------- COMPOSER CARD ------------------- */}
          <div
            className="card mb-4 border-0 shadow-sm"
            style={{ borderRadius: 18 }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <FaUserCircle size={38} className="text-secondary" />
                <div className="ms-2">
                  <div className="fw-semibold">Create post</div>
                  <small className="text-muted">
                    Share update on your Business Wall
                  </small>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  name="author"
                  className="form-control mb-2"
                  placeholder="Business / Page name"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />

                <input
                  name="title"
                  className="form-control mb-2"
                  placeholder="Headline (eg. New Offer for MSME)"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="body"
                  className="form-control mb-2"
                  placeholder="Write something about your post…"
                  rows={3}
                  value={formData.body}
                  onChange={handleChange}
                  required
                />

                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImage}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-muted">
                    Image optional • Hashtags supported (#Loans #MSME)
                  </small>
                  <button className="btn btn-primary px-4" type="submit">
                    {editingId ? "Update Post" : "Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ------------------- POSTS LIST ------------------- */}
          {posts.map((p) => (
            <div key={p.id} className="mb-4">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: 18 }}
              >
                <div className="card-body pb-2">
                  {/* HEADER */}
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <FaUserCircle size={38} className="text-secondary" />
                      <div className="ms-2">
                        <div className="fw-semibold">{p.author}</div>
                        <small className="text-muted">
                          {p.time || "Just now"} • Public
                        </small>
                      </div>
                    </div>

                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => loadToForm(p)}
                        title="Edit"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(p.id)}
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <h5 className="fw-semibold mb-1">{p.title}</h5>
                  <div className="mb-2">{renderWithTags(p.body)}</div>
                </div>

                {p.image && (
                  <img
                    src={p.image}
                    className="img-fluid"
                    style={{
                      maxHeight: 450,
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                )}

                {/* ACTIONS */}
                <div className="px-3 pt-2 pb-3">
                  <div className="d-flex justify-content-start gap-2 mb-2">
                    <button
                      className="btn btn-sm btn-light flex-fill"
                      onClick={() => like(p.id)}
                    >
                      <FaThumbsUp className="me-1" />{" "}
                      {p.likes || 0} Like
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaCommentDots className="me-1" />
                      Comment
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaShareAlt className="me-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center text-muted mt-4">
              No posts yet. Create your first business update!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =====================
   REELS — vertical swipe (Instagram/Facebook style)
   ===================== */
function Reels({ reels }) {
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(0);

  // Intersection Observer to auto play/pause
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const options = { root: el, threshold: 0.65 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        const vid = videoRefs.current[id];
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
          setActiveIndex(reels.findIndex((r) => r.id === id));
        } else {
          vid.pause();
        }
      });
    }, options);

    const cards = el.querySelectorAll(".reel-card");
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [reels]);

  // Keyboard support (ArrowUp/Down)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        snapTo(activeIndex + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        snapTo(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  function snapTo(index) {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, reels.length - 1));
    const card = el.querySelector(`[data-id="${reels[clamped].id}"]`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const inlineCSS = `
    .reels-container{ height: calc(100vh - 64px - 64px); overflow-y: auto; scroll-snap-type: y mandatory; padding-bottom: 16px; }
    .reel-card{ height: calc(100vh - 64px - 80px); scroll-snap-align: start; position: relative; border-radius: 24px; overflow: hidden; margin-bottom: 16px; }
    .reel-video{ width:100%; height:100%; object-fit: cover; }
    .reel-overlay-top{ position:absolute; top:0; left:0; right:0; padding:16px; display:flex; justify-content:space-between; align-items:center; }
    .reel-overlay-bottom{ position:absolute; bottom:0; left:0; right:0; padding:16px; color:#fff; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.7) 100%); }
    .reel-actions{ position:absolute; right:12px; bottom:90px; display:flex; flex-direction:column; gap:10px; }
    .btn-fab{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.95); border:0; box-shadow:0 6px 18px rgba(0,0,0,0.25); }
  `;

  return (
    <div className="container py-3">
      <style>{inlineCSS}</style>

      <div className="text-center mb-3">
        <span className="badge bg-white text-dark px-3 py-2 rounded-pill shadow-sm">
          Facebook Reels style • Swipe ↑ / ↓ • Autoplay
        </span>
      </div>

      <div ref={containerRef} className="reels-container">
        {reels.map((r) => (
          <div
            key={r.id}
            data-id={r.id}
            className="reel-card shadow-lg"
            style={{ background: "#000" }}
          >
            <video
              ref={(v) => (videoRefs.current[r.id] = v)}
              className="reel-video"
              src={r.src}
              playsInline
              muted
              loop
              preload="metadata"
            />

            {/* Top overlay */}
            <div className="reel-overlay-top">
              <div className="d-flex align-items-center gap-2">
                <FaUserCircle size={28} color="#fff" />
                <span className="text-white fw-semibold">{r.author}</span>
              </div>
              <span className="badge bg-dark bg-opacity-50 text-white">
                <FaMusic className="me-1" /> {r.music}
              </span>
            </div>

            {/* Right action buttons */}
            <div className="reel-actions">
              <button
                className="btn-fab"
                onClick={() => toast.success("Liked")}
              >
                <FaThumbsUp />
              </button>
              <button
                className="btn-fab"
                onClick={() => toast.info("Comments coming soon")}
              >
                <FaCommentDots />
              </button>
              <button
                className="btn-fab"
                onClick={() => toast("Shared to WhatsApp")}
              >
                <FaShareAlt />
              </button>
              <button
                className="btn-fab"
                onClick={() => {
                  const v = videoRefs.current[r.id];
                  if (!v) return;
                  v.paused ? v.play() : v.pause();
                }}
              >
                {videoRefs.current[r.id] &&
                !videoRefs.current[r.id].paused ? (
                  <FaPause />
                ) : (
                  <FaPlay />
                )}
              </button>
            </div>

            {/* Bottom caption */}
            <div className="reel-overlay-bottom">
              <div className="text-white fw-semibold">{r.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================
   UTILS
   ===================== */
function renderWithTags(text = "") {
  const parts = text.split(/(#[A-Za-z0-9_]+)/g);
  return (
    <span>
      {parts.map((p, i) =>
        p.startsWith("#") ? (
          <span
            key={i}
            className="badge bg-primary bg-opacity-10 text-primary me-1"
          >
            {p}
          </span>
        ) : (
          <span key={i} className="text-muted">
            {p}
          </span>
        )
      )}
    </span>
  );
}