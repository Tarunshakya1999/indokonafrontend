// App.js — Full Facebook style Wall + Reels (Django API) + Messenger
// Requires:
// npm i react-router-dom react-icons react-toastify axios bootstrap

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
  FaFacebookMessenger,
  FaPaperPlane,
} from "react-icons/fa";

/* =====================
   THEME
   ===================== */
const THEME = {
  fbBg: "#f0f2f5",
  fbBlue: "#1877f2",
};

/* =====================
   STORIES DATA (demo)
   ===================== */
const STORIES = [
  {
    id: 1,
    name: "Indokona",
    label: "Boost your business",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Credit Bazar",
    label: "MSME Loans",
    image:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dream True Academy",
    label: "Live Classes",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Family Tree",
    label: "Matchmaking CRM",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
  },
];

/* =====================
   ROOT APP
   ===================== */
export default function MyApp() {
  const [active, setActive] = useState("feed"); // 'feed' | 'reels' | 'messages'

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
            <button
              className={`btn btn-sm d-flex align-items-center gap-1 ${
                active === "messages" ? "btn-primary" : "btn-outline-primary"
              }`}
              style={{ borderRadius: 999 }}
              onClick={() => setActive("messages")}
            >
              <FaFacebookMessenger /> Messages
            </button>

            <Link to="/pf" className="btn btn-sm btn-outline-secondary">
              Public Profile
            </Link>
            <Link to="/reelsupload" className="btn btn-sm btn-success">
              Upload Reels
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Tabs */}
      {active === "feed" && <Feed />}
      {active === "reels" && <Reels />}
      {active === "messages" && <Messenger />}

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
   FEED — Stories + Create Post + Right Sidebar
   ===================== */
function Feed() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    image: null,
    time: "",
  });

  const [editingId, setEditingId] = useState(null);

  // 🔥 Fetch posts
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          "https://indokonabackend-1.onrender.com/api/mypost/"
        );
        setPosts(response.data);
      } catch (err) {
        toast.error("Failed to fetch posts");
      }
    };
    getPost();
  }, []);

  // Input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // File
  function handleImage(e) {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  }

  // 🔥 Add / Edit
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
        response = await axios.post(
          "https://indokonabackend-1.onrender.com/api/mypost/",
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setPosts((prev) => [response.data, ...prev]);
        toast.success("Post added");
      } else {
        response = await axios.patch(
          `https://indokonabackend-1.onrender.com/api/mypost/${editingId}/`,
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setPosts((ps) => ps.map((p) => (p.id === editingId ? response.data : p)));
        toast.info("Post updated");
      }

      setShowModal(false);
      setFormData({ author: "", title: "", body: "", image: null, time: "" });
      setEditingId(null);
    } catch {
      toast.error("Something went wrong!");
    }
  }

  // 🔥 Edit Button
  function loadToForm(post) {
    setEditingId(post.id);
    setFormData({
      author: post.author,
      title: post.title,
      body: post.body,
      image: null,
      time: post.time,
    });
    setShowModal(true);
  }

  // 🔥 Delete
  async function handleDelete(id) {
    const ok = window.confirm("Delete this post?");
    if (!ok) return;
    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/mypost/${id}/`
      );
      setPosts((ps) => ps.filter((p) => p.id !== id));
      toast.success("Deleted");
    } catch {
      toast.error("Delete failed");
    }
  }

  return (
    <div className="container py-4">
      {/* ---------- STORIES BAR ---------- */}
      <div
        className="card shadow-sm border-0 mb-4"
        style={{ borderRadius: 18 }}
      >
        <div className="card-body py-3">
          <div className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h6 className="m-0 fw-semibold">Stories</h6>
            <small className="text-primary" style={{ cursor: "pointer" }}>
              See all
            </small>
          </div>

          <div
            className="d-flex gap-3 overflow-auto pb-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {/* Add Story card */}
            <div
              className="position-relative flex-shrink-0"
              style={{ width: 110 }}
            >
              <div
                className="rounded-4 d-flex flex-column justify-content-center align-items-center"
                style={{
                  height: 180,
                  backgroundColor: "#e4e6eb",
                  border: "1px dashed #ccc",
                  cursor: "pointer",
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: THEME.fbBlue,
                    color: "#fff",
                    fontSize: 24,
                  }}
                >
                  +
                </div>
                <small className="fw-semibold text-center">Create story</small>
              </div>
            </div>

            {STORIES.map((s) => (
              <div
                key={s.id}
                className="position-relative flex-shrink-0"
                style={{ width: 110 }}
              >
                <div
                  className="rounded-4"
                  style={{
                    height: 180,
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="rounded-circle border border-2 border-primary d-flex align-items-center justify-content-center"
                    style={{
                      width: 38,
                      height: 38,
                      margin: 8,
                      backgroundColor: "#fff",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    {s.name.charAt(0)}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      right: 8,
                      color: "#fff",
                      textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {s.name}
                    <br />
                    <span style={{ fontWeight: 400 }}>{s.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- CREATE POST CLICK BOX ---------- */}
      <div
        className="card shadow-sm border-0 mb-4"
        style={{ borderRadius: 18 }}
      >
        <div className="card-body d-flex align-items-center gap-3">
          <FaUserCircle size={45} className="text-secondary" />

          <div
            className="form-control rounded-pill px-4 py-2"
            style={{
              background: "#f0f2f5",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
            }}
            onClick={() => setShowModal(true)}
          >
            Post something about your business…
          </div>
        </div>
      </div>

      {/* ---------- MAIN ROW: FEED + RIGHT SIDEBAR ---------- */}
      <div className="row g-3">
        {/* FEED COLUMN */}
        <div className="col-lg-8 col-md-12">
          {posts.map((p) => (
            <div key={p.id} className="mb-4">
              <div
                className="card shadow-sm border-0"
                style={{ borderRadius: 18 }}
              >
                <div className="card-body pb-2">
                  {/* HEADER */}
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <FaUserCircle size={40} className="text-secondary" />
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
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(p.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <h5 className="fw-bold">{p.title}</h5>
                  <div className="mb-2 text-muted">{renderWithTags(p.body)}</div>
                </div>

                {p.image && (
                  <img
                    src={p.image}
                    className="img-fluid"
                    style={{
                      maxHeight: 420,
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                )}

                {/* BUTTONS */}
                <div className="px-3 pt-2 pb-3">
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-light flex-fill"
                      onClick={() => {
                        setPosts((ps) =>
                          ps.map((x) =>
                            x.id === p.id
                              ? { ...x, likes: (x.likes || 0) + 1 }
                              : x
                          )
                        );
                      }}
                    >
                      <FaThumbsUp className="me-1" /> {p.likes || 0} Like
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaCommentDots className="me-1" /> Comment
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaShareAlt className="me-1" /> Share
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

        {/* RIGHT SIDEBAR (desktop only) */}
        <div className="col-lg-4 d-none d-lg-block">
          {/* Suggestions */}
          <div
            className="card shadow-sm border-0 mb-3"
            style={{ borderRadius: 18 }}
          >
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Suggested pages</h6>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <FaUserCircle size={34} className="text-secondary" />
                  <div className="ms-2">
                    <div className="fw-semibold small">Indokona Fintech</div>
                    <small className="text-muted">Financial Services</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-primary">Follow</button>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaUserCircle size={34} className="text-secondary" />
                  <div className="ms-2">
                    <div className="fw-semibold small">
                      Dream True Academy
                    </div>
                    <small className="text-muted">Education</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-primary">Follow</button>
              </div>
            </div>
          </div>

          {/* Sponsored / Ads */}
          <div
            className="card shadow-sm border-0 mb-3"
            style={{ borderRadius: 18 }}
          >
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Sponsored</h6>
              <div className="mb-3">
                <div
                  className="rounded-3 mb-2"
                  style={{
                    height: 100,
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=800&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="fw-semibold small">
                  Indokona Business Suite
                </div>
                <small className="text-muted">
                  Automate marketing, CRM & finance in one place.
                </small>
              </div>
            </div>
          </div>

          {/* Shortcuts */}
          <div
            className="card shadow-sm border-0"
            style={{ borderRadius: 18 }}
          >
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Your shortcuts</h6>
              <ul className="list-unstyled mb-0 small">
                <li className="mb-2">• Indokona Job Portal</li>
                <li className="mb-2">• Indokona Digital Store</li>
                <li className="mb-2">• Idea 2 Empire Academy</li>
                <li>• Business Wall Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- POPUP MODAL ---------- */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
          }}
        >
          <div
            className="bg-white shadow-lg p-4"
            style={{
              width: "95%",
              maxWidth: 520,
              borderRadius: 18,
              animation: "popup 0.25s ease",
            }}
          >
            {/* Modal Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">
                {editingId ? "Edit Post" : "Create Post"}
              </h5>
              <button
                className="btn btn-light"
                onClick={() => {
                  setEditingId(null);
                  setShowModal(false);
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body Form */}
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
                placeholder="Headline (eg. New offers)"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <textarea
                name="body"
                className="form-control mb-2"
                placeholder="Write something…"
                rows={3}
                value={formData.body}
                onChange={handleChange}
                required
              />

              <input
                type="time"
                name="time"
                className="form-control mb-2"
                value={formData.time}
                onChange={handleChange}
                required
              />

              <input
                type="file"
                className="form-control mb-3"
                onChange={handleImage}
              />

              <button className="btn btn-primary w-100" type="submit">
                {editingId ? "Update Post" : "Post"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Popup Animation */}
      <style>
        {`
          @keyframes popup {
            from { opacity: 0; transform: scale(0.94); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

/* =====================
   REELS — Using Django API (your code, integrated)
   ===================== */

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
    FaFacebookMessenger,
    FaPaperPlane,
    FaBookmark,          // 👈 YE ADD KARNA HAI
  } from "react-icons/fa";
   function Reels() {
    const containerRef = useRef(null);
    const videoRefs = useRef({});
    const audioRefs = useRef({});
    const [reels, setReels] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const [tapLike, setTapLike] = useState(null);      // big heart
    const [hearts, setHearts] = useState([]);          // floating hearts
    const [saved, setSaved] = useState({});            // bookmark state
    const [isBouncing, setIsBouncing] = useState(false);
  
    const [showCommentsFor, setShowCommentsFor] = useState(null); // reel id
    const [commentsData, setCommentsData] = useState({});
    const [commentInput, setCommentInput] = useState("");
  
    const [profileFor, setProfileFor] = useState(null); // reel id -> profile popup
    const [loadedVideos, setLoadedVideos] = useState({}); // loading blur
    
  
    // 🚀 Fetch Reels from Django API
    useEffect(() => {
      const fetchReels = async () => {
        try {
          const res = await axios.get(
            "https://indokonabackend-1.onrender.com/api/myreels/"
          );
          setReels(res.data);
        } catch (error) {
          toast.error("Failed to load reels!");
        }
      };
      fetchReels();
    }, []);
  
    // 🎥 Auto play/pause via IntersectionObserver
    useEffect(() => {
      const el = containerRef.current;
      if (!el || reels.length === 0) return;
  
      const options = { root: el, threshold: 0.65 };
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          const vid = videoRefs.current[id];
          const aud = audioRefs.current[id];
          if (!vid) return;
  
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
            aud?.play().catch(() => {});
            setActiveIndex(reels.findIndex((r) => String(r.id) === String(id)));
          } else {
            vid.pause();
            aud?.pause();
          }
        });
      }, options);
  
      const cards = el.querySelectorAll(".reel-card");
      cards.forEach((c) => io.observe(c));
  
      return () => io.disconnect();
    }, [reels]);
  
    // ⌨ Keyboard arrows + bounce on edges
    useEffect(() => {
      const onKey = (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (activeIndex + 1 >= reels.length) {
            triggerBounce();
          } else {
            snapTo(activeIndex + 1);
          }
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          if (activeIndex - 1 < 0) {
            triggerBounce();
          } else {
            snapTo(activeIndex - 1);
          }
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [activeIndex, reels]);
  
    function triggerBounce() {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 300);
    }
  
    // Smooth scroll to reel index
    function snapTo(index) {
      const el = containerRef.current;
      if (!el || reels.length === 0) return;
      const i = Math.max(0, Math.min(index, reels.length - 1));
      const card = el.querySelector(`[data-id="${reels[i].id}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  
    // ❤️ Double Tap Like + floating hearts
    function handleDoubleTap(id) {
      setTapLike(id);
  
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 60 + 20, // 20–80% horizontally
      };
      setHearts((prev) => [...prev, newHeart]);
  
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1200);
  
      toast.success("Liked ❤️");
    }
  
    // 🎬 Tap to play / pause anywhere on reel
    function togglePlay(id) {
      const vid = videoRefs.current[id];
      const aud = audioRefs.current[id];
      if (!vid) return;
      if (vid.paused) {
        vid.play();
        aud?.play();
      } else {
        vid.pause();
        aud?.pause();
      }
    }
  
    // 💾 Bookmark toggle
    function toggleSave(e, id) {
      e.stopPropagation();
      setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
      toast.info(saved[id] ? "Removed from saved" : "Saved");
    }
  
    // 💬 Open comments drawer
    function openComments(e, reelId) {
      e.stopPropagation();
      setShowCommentsFor(reelId);
      setCommentsData((prev) => {
        if (prev[reelId]) return prev;
        return {
          ...prev,
          [reelId]: [
            { id: 1, user: "Indokona", text: "Amazing reel! 🔥" },
            { id: 2, user: "Credit Bazar", text: "Great information 👌" },
          ],
        };
      });
    }
  
    // 💬 Add comment
    function submitComment(e) {
      e.preventDefault();
      if (!commentInput.trim() || !showCommentsFor) return;
      const text = commentInput.trim();
      setCommentsData((prev) => ({
        ...prev,
        [showCommentsFor]: [
          ...(prev[showCommentsFor] || []),
          {
            id: Date.now(),
            user: "You",
            text,
          },
        ],
      }));
      setCommentInput("");
    }
  
    // 👤 Profile popup toggle
    function toggleProfilePopup(e, reelId) {
      e.stopPropagation();
      setProfileFor((prev) => (prev === reelId ? null : reelId));
    }
  
    // Caption with hashtags highlighted (white text)
    function renderCaption(text = "") {
      const parts = text.split(/(#[A-Za-z0-9_]+)/g);
      return (
        <span>
          {parts.map((p, i) =>
            p.startsWith("#") ? (
              <span
                key={i}
                style={{
                  color: "#60a5fa",
                  fontWeight: 600,
                  marginRight: 4,
                }}
              >
                {p}
              </span>
            ) : (
              <span key={i}>{p}</span>
            )
          )}
        </span>
      );
    }
  
    const currentComments =
      showCommentsFor != null ? commentsData[showCommentsFor] || [] : [];
  
    const inlineCSS = `
      .reels-container{
        height: calc(100vh - 70px);
        overflow-y: auto;
        scroll-snap-type: y mandatory;
      }
      .reel-card{
        height: 94vh;
        scroll-snap-align: start;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        background:#000;
      }
      .reel-video-wrapper{
        position:relative;
        width:100%;
        height:100%;
      }
      .reel-video{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:opacity 0.3s ease;
      }
      .reel-video-loading .reel-video{
        filter:blur(3px);
        opacity:0.7;
      }
  
      .reel-actions{
        position:absolute;
        right:12px;
        bottom:110px;
        display:flex;
        flex-direction:column;
        gap:14px;
        z-index:30;
      }
      .btn-fab{
        width:50px;height:50px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        background:rgba(255,255,255,0.92);
        box-shadow:0 6px 18px rgba(0,0,0,0.25);
        font-size:20px;
        border:0;
      }
      .btn-fab.bookmarked{
        background:#1d4ed8;
        color:#fff;
      }
  
      .reel-overlay-top{
        position:absolute; top:0; left:0; right:0;
        padding:16px;
        z-index:20;
        display:flex; justify-content:space-between; align-items:center;
      }
      .reel-overlay-bottom{
        position:absolute; bottom:0; left:0; right:0;
        padding:20px;
        z-index:25;
        background:linear-gradient(180deg, transparent, rgba(0,0,0,0.7));
        color:#fff;
      }
  
      .music-disc{
        width:40px;height:40px;border-radius:50%;
        background:#111;
        border:2px solid #fff;
        animation: spin 4s linear infinite;
      }
      @keyframes spin{
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
      }
  
      .big-heart{
        position:absolute;
        top:50%; left:50%;
        transform:translate(-50%, -50%);
        font-size:100px;
        color:white;
        opacity:0;
        animation: heartPop 0.9s ease forwards;
        z-index:40;
        pointer-events:none;
      }
      @keyframes heartPop{
        0%{transform:scale(0.5) translate(-50%, -50%); opacity:0;}
        40%{transform:scale(1.2) translate(-50%, -50%); opacity:1;}
        100%{transform:scale(0.8) translate(-50%, -50%); opacity:0;}
      }
  
      .float-heart{
        position:absolute;
        bottom:120px;
        font-size:24px;
        opacity:0.9;
        animation: floatUp 1.2s ease-out forwards;
        z-index:40;
        pointer-events:none;
      }
      @keyframes floatUp{
        0%{transform:translateY(0) scale(1); opacity:0.9;}
        100%{transform:translateY(-140px) scale(1.8); opacity:0;}
      }
  
      .reels-bounce{
        animation: bounceY 0.3s ease;
      }
      @keyframes bounceY{
        0%{transform:translateY(0);}
        50%{transform:translateY(-16px);}
        100%{transform:translateY(0);}
      }
  
      /* Profile popup */
      .profile-popup{
        position:absolute;
        left:16px;
        top:56px;
        background:#111827;
        color:#f9fafb;
        border-radius:12px;
        padding:10px 12px;
        z-index:35;
        min-width:180px;
        box-shadow:0 10px 25px rgba(0,0,0,0.4);
        font-size:13px;
      }
  
      /* Comments bottom sheet */
      .comments-backdrop{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.6);
        display:flex;
        justify-content:center;
        align-items:flex-end;
        z-index:60;
      }
      .comments-sheet{
        width:100%;
        max-width:480px;
        background:#fff;
        border-radius:18px 18px 0 0;
        padding:12px 16px 4px;
        max-height:70vh;
        display:flex;
        flex-direction:column;
        animation: slideUp 0.25s ease;
      }
      @keyframes slideUp{
        from{transform:translateY(100%);}
        to{transform:translateY(0);}
      }
      .comments-list{
        flex:1;
        overflow-y:auto;
        margin-bottom:8px;
      }
  
      @media(min-width:992px){
        .reels-container{ max-width:480px; margin:0 auto; }
        .reel-card{ height:92vh; }
      }
    `;
  
    const currentReel =
      showCommentsFor != null
        ? reels.find((r) => String(r.id) === String(showCommentsFor))
        : null;
  
    return (
      <>
        <style>{inlineCSS}</style>
  
        <div className="container py-3">
          <div className="text-center mb-3">
            <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
              Swipe ↑ / ↓ • Double Tap ❤️ • Tap to Pause
            </span>
          </div>
  
          <div
            ref={containerRef}
            className={`reels-container ${isBouncing ? "reels-bounce" : ""}`}
          >
            {reels.length === 0 ? (
              <div className="text-center text-secondary mt-5">
                <div className="spinner-border text-primary mb-3"></div>
                <p>Loading reels...</p>
              </div>
            ) : (
              reels.map((r) => (
                <div
                  key={r.id}
                  data-id={r.id}
                  className="reel-card shadow-lg"
                  onDoubleClick={() => handleDoubleTap(r.id)}
                  onClick={() => togglePlay(r.id)}
                >
                  {/* Big like heart */}
                  {tapLike === r.id && <div className="big-heart">❤️</div>}
  
                  {/* Video wrapper with soft blur while loading */}
                  <div
                    className={
                      loadedVideos[r.id] ? "reel-video-wrapper" : "reel-video-wrapper reel-video-loading"
                    }
                  >
                    <video
                      ref={(v) => (videoRefs.current[r.id] = v)}
                      className="reel-video"
                      src={r.src}
                      playsInline
                      loop
                      preload="metadata"
                      onLoadedData={() =>
                        setLoadedVideos((prev) => ({ ...prev, [r.id]: true }))
                      }
                    />
                  </div>
  
                  {/* Music audio */}
                  <audio
                    ref={(a) => (audioRefs.current[r.id] = a)}
                    src={r.music}
                    preload="auto"
                  />
  
                  {/* Floating hearts */}
                  {hearts.map((h) => (
                    <div
                      key={h.id}
                      className="float-heart"
                      style={{ left: `${h.left}%` }}
                    >
                      ❤️
                    </div>
                  ))}
  
                  {/* TOP overlay */}
                  <div className="reel-overlay-top">
                    <div
                      className="d-flex align-items-center gap-2"
                      onClick={(e) => toggleProfilePopup(e, r.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <FaUserCircle size={28} color="#fff" />
                      <span className="text-white fw-semibold">{r.author}</span>
                    </div>
  
                    <div className="d-flex flex-column align-items-center">
                      <div className="music-disc mb-1"></div>
                      <small className="text-white">
                        {r.music ? r.music.split("/").pop() : "Music"}
                      </small>
                    </div>
                  </div>
  
                  {/* Profile popup */}
                  {profileFor === r.id && (
                    <div className="profile-popup">
                      <div className="d-flex align-items-center mb-2">
                        <FaUserCircle size={28} className="me-2" />
                        <div>
                          <div className="fw-semibold">{r.author}</div>
                          <div style={{ fontSize: 11, opacity: 0.8 }}>
                            Business Creator
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-primary w-100 mb-1">
                        Follow
                      </button>
                      <small style={{ opacity: 0.7 }}>
                        Get updates from this creator on your Indokona Business
                        Wall.
                      </small>
                    </div>
                  )}
  
                  {/* RIGHT actions */}
                  <div className="reel-actions">
                    <button
                      className="btn-fab"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDoubleTap(r.id);
                      }}
                    >
                      <FaThumbsUp />
                    </button>
  
                    <button
                      className="btn-fab"
                      onClick={(e) => openComments(e, r.id)}
                    >
                      <FaCommentDots />
                    </button>
  
                    <button
                      className="btn-fab"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast("Shared to WhatsApp 📱");
                      }}
                    >
                      <FaShareAlt />
                    </button>
  
                    <button
                      className={`btn-fab ${saved[r.id] ? "bookmarked" : ""}`}
                      onClick={(e) => toggleSave(e, r.id)}
                    >
                      <FaBookmark />
                    </button>
  
                    <button
                      className="btn-fab"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(r.id);
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
  
                  {/* BOTTOM caption */}
                  <div className="reel-overlay-bottom">
                    <div className="text-white fw-semibold">
                      {renderCaption(r.caption || "")}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
  
        {/* COMMENTS BOTTOM SHEET */}
        {showCommentsFor && (
          <div
            className="comments-backdrop"
            onClick={() => setShowCommentsFor(null)}
          >
            <div
              className="comments-sheet"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center gap-2">
                  <FaUserCircle size={26} className="text-secondary" />
                  <div>
                    <div className="fw-semibold small">
                      {currentReel?.author || "Creator"}
                    </div>
                    <small className="text-muted">Reel comments</small>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => setShowCommentsFor(null)}
                >
                  ✕
                </button>
              </div>
  
              <div className="comments-list">
                {currentComments.length === 0 ? (
                  <div className="text-muted small text-center mt-3">
                    No comments yet. Be the first to comment!
                  </div>
                ) : (
                  currentComments.map((c) => (
                    <div key={c.id} className="mb-2">
                      <div className="fw-semibold small">{c.user}</div>
                      <div className="small">{c.text}</div>
                    </div>
                  ))
                )}
              </div>
  
              <form onSubmit={submitComment} className="pt-2 border-top">
                <div className="input-group input-group-sm mt-2">
                  <input
                    className="form-control"
                    placeholder="Add a comment…"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
/* =====================
   MESSENGER — Full Chat UI
   ===================== */
function Messenger() {
  const [conversations] = useState([
    {
      id: "c1",
      name: "Indokona Support",
      last: "How can we help you today?",
      unread: 2,
    },
    {
      id: "c2",
      name: "Credit Bazar Team",
      last: "Your MSME loan query is updated.",
      unread: 0,
    },
    {
      id: "c3",
      name: "Dream True Academy",
      last: "Batch starts from Monday.",
      unread: 1,
    },
  ]);

  const [activeId, setActiveId] = useState("c1");

  const [chats, setChats] = useState({
    c1: [
      {
        from: "them",
        text: "Welcome to Indokona Messenger 💬",
        time: "09:30",
      },
      {
        from: "them",
        text: "Ask any question about your business or loans.",
        time: "09:31",
      },
    ],
    c2: [
      {
        from: "them",
        text: "We received your MSME loan application.",
        time: "11:00",
      },
    ],
    c3: [
      {
        from: "them",
        text: "Your seat is reserved for Digital Marketing batch.",
        time: "15:42",
      },
    ],
  });

  const [input, setInput] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      from: "me",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChats((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), newMsg],
    }));
    setInput("");
  }

  const activeConv = conversations.find((c) => c.id === activeId);
  const activeMessages = chats[activeId] || [];

  return (
    <div className="container py-4">
      <div
        className="card shadow-sm border-0"
        style={{ borderRadius: 18, minHeight: "60vh" }}
      >
        <div
          className="card-header bg-white border-0 d-flex align-items-center justify-content-between"
          style={{ borderRadius: "18px 18px 0 0" }}
        >
          <div className="d-flex align-items-center gap-2">
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: 36,
                height: 36,
                backgroundColor: THEME.fbBlue,
                color: "#fff",
              }}
            >
              <FaFacebookMessenger />
            </span>
            <div>
              <div className="fw-semibold">Indokona Messenger</div>
              <small className="text-muted">
                Chat with teams, support and partners
              </small>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="row g-0" style={{ minHeight: "50vh" }}>
            {/* LEFT: CONVERSATION LIST */}
            <div
              className="col-md-4 border-end"
              style={{ backgroundColor: "#f0f2f5" }}
            >
              <div className="p-3 border-bottom">
                <input
                  className="form-control form-control-sm"
                  placeholder="Search in Messenger"
                />
              </div>
              <div style={{ maxHeight: "55vh", overflowY: "auto" }}>
                {conversations.map((c) => (
                  <div
                    key={c.id}
                    className={`px-3 py-2 d-flex justify-content-between align-items-center ${
                      c.id === activeId ? "bg-white" : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      borderBottom: "1px solid #e4e6eb",
                    }}
                    onClick={() => setActiveId(c.id)}
                  >
                    <div className="d-flex align-items-center">
                      <FaUserCircle size={32} className="text-secondary" />
                      <div className="ms-2">
                        <div className="fw-semibold small">{c.name}</div>
                        <small className="text-muted text-truncate d-block">
                          {c.last}
                        </small>
                      </div>
                    </div>
                    {c.unread > 0 && (
                      <span className="badge bg-primary rounded-pill">
                        {c.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: ACTIVE CHAT */}
            <div className="col-md-8 d-flex flex-column">
              {/* Chat header */}
              <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaUserCircle size={36} className="text-secondary" />
                  <div className="ms-2">
                    <div className="fw-semibold small">
                      {activeConv?.name || "Select a chat"}
                    </div>
                    <small className="text-success">● Active now</small>
                  </div>
                </div>
              </div>

              {/* Chat body */}
              <div
                className="flex-grow-1 px-3 py-3"
                style={{ overflowY: "auto", backgroundColor: "#ffffff" }}
              >
                {activeMessages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`d-flex mb-2 ${
                      m.from === "me"
                        ? "justify-content-end"
                        : "justify-content-start"
                    }`}
                  >
                    <div
                      className="px-3 py-2 rounded-4"
                      style={{
                        maxWidth: "75%",
                        backgroundColor:
                          m.from === "me" ? THEME.fbBlue : "#e4e6eb",
                        color: m.from === "me" ? "#fff" : "#050505",
                      }}
                    >
                      <div style={{ fontSize: 14 }}>{m.text}</div>
                      <div
                        className="text-end"
                        style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}
                      >
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}

                {activeMessages.length === 0 && (
                  <div className="text-center text-muted mt-5">
                    Start a conversation with {activeConv?.name}.
                  </div>
                )}
              </div>

              {/* Chat input */}
              <form onSubmit={sendMessage}>
                <div className="px-3 py-2 border-top bg-white">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Type a message…"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <FaPaperPlane className="me-1" /> Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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