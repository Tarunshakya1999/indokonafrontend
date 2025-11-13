import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaMusic,
  FaThumbsUp,
  FaCommentDots,
  FaShareAlt,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reels() {
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const audioRefs = useRef({});
  const [reels, setReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyParentId, setReplyParentId] = useState(null);

  const userToken = localStorage.getItem("token"); // assume JWT stored

  const axiosAuth = axios.create({
    baseURL: "https://indokonabackend-1.onrender.com/api/",
    headers: userToken ? { Authorization: `Bearer ${userToken}` } : {},
  });

  // ✅ Fetch Reels
  useEffect(() => {
    const fetchReels = async () => {
      try {
        const res = await axios.get(
          "https://indokonabackend-1.onrender.com/api/myreels/"
        );
        setReels(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load reels!");
      }
    };
    fetchReels();
  }, []);

  // ✅ Like Toggle
  const toggleLike = async (id) => {
    try {
      const res = await axiosAuth.post(`myreels/${id}/toggle_like/`);
      setReels((prev) =>
        prev.map((r) =>
          r.id === id
            ? { ...r, likes_count: res.data.likes_count, is_liked: res.data.liked }
            : r
        )
      );
    } catch {
      toast.error("Login required to like!");
    }
  };

  // ✅ Add Comment
  const addComment = async (id) => {
    if (!commentText.trim()) return;
    try {
      const res = await axiosAuth.post(`myreels/${id}/comment/`, {
        text: commentText,
      });
      setReels((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, comments: [...r.comments, res.data] } : r
        )
      );
      setCommentText("");
    } catch {
      toast.error("Login required to comment!");
    }
  };

  // ✅ Add Reply
  const addReply = async (reelId) => {
    if (!replyText.trim()) return;
    try {
      const res = await axiosAuth.post(`myreels/${reelId}/comment/`, {
        text: replyText,
        parent: replyParentId,
      });
      setReels((prev) =>
        prev.map((r) =>
          r.id === reelId ? { ...r, comments: [...r.comments, res.data] } : r
        )
      );
      setReplyText("");
      setReplyParentId(null);
    } catch {
      toast.error("Login required to reply!");
    }
  };

  // ✅ Delete Comment
  const deleteComment = async (reelId, commentId) => {
    try {
      await axiosAuth.delete(`myreels/${reelId}/delete_comment/`, {
        data: { id: commentId },
      });
      setReels((prev) =>
        prev.map((r) =>
          r.id === reelId
            ? { ...r, comments: r.comments.filter((c) => c.id !== commentId) }
            : r
        )
      );
    } catch {
      toast.error("Cannot delete comment!");
    }
  };

  // ✅ Share
  const shareReel = (r) => {
    const shareUrl = `${window.location.origin}/reel/${r.id}`;
    if (navigator.share) {
      navigator.share({
        title: r.caption,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied!");
    }
  };

  // ✅ Video AutoPlay System (same as your existing code)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || reels.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          const vid = videoRefs.current[id];
          const aud = audioRefs.current[id];
          if (!vid) return;
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
            aud?.play().catch(() => {});
            setActiveIndex(reels.findIndex((r) => r.id == id));
          } else {
            vid.pause();
            aud?.pause();
          }
        });
      },
      { root: el, threshold: 0.65 }
    );
    const cards = el.querySelectorAll(".reel-card");
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [reels]);

  // ✅ CSS
  const inlineCSS = `
    .reels-container{ height: calc(100vh - 64px); overflow-y: auto; scroll-snap-type: y mandatory; }
    .reel-card{ height: calc(100vh - 64px); scroll-snap-align: start; position: relative; border-radius: 24px; overflow: hidden; }
    .btn-fab{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.9); border:0; }
  `;

  return (
    <div className="container py-3">
      <style>{inlineCSS}</style>
      <div ref={containerRef} className="reels-container">
        {reels.map((r) => (
          <div key={r.id} data-id={r.id} className="reel-card shadow-lg bg-black">
            <video
              ref={(v) => (videoRefs.current[r.id] = v)}
              src={r.src}
              className="w-100 h-100 object-fit-cover"
              loop
              playsInline
            />
            {r.music && <audio ref={(a) => (audioRefs.current[r.id] = a)} src={r.music} />}

            {/* Top */}
            <div className="position-absolute top-0 start-0 p-3 text-white">
              <FaUserCircle className="me-2" />
              {r.author}
            </div>

            {/* Right side actions */}
            <div className="position-absolute end-0 bottom-0 d-flex flex-column align-items-center gap-3 p-3">
              <button className="btn-fab" onClick={() => toggleLike(r.id)}>
                <FaThumbsUp color={r.is_liked ? "blue" : "black"} />
                <small>{r.likes_count}</small>
              </button>
              <button
                className="btn-fab"
                data-bs-toggle="collapse"
                data-bs-target={`#comments-${r.id}`}
              >
                <FaCommentDots />
              </button>
              <button className="btn-fab" onClick={() => shareReel(r)}>
                <FaShareAlt />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="position-absolute bottom-0 start-0 w-100 text-white p-3 bg-gradient">
              <p>{r.caption}</p>
            </div>

            {/* Comment Section */}
            <div className="collapse bg-white text-dark p-3" id={`comments-${r.id}`}>
              {r.comments.map((c) => (
                <div key={c.id} className="border-bottom py-2">
                  <strong>{c.user.username}: </strong>
                  {c.text}
                  <div className="d-flex gap-2 mt-1">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => setReplyParentId(c.id)}
                    >
                      Reply
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteComment(r.id, c.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {/* Replies */}
                  {c.replies?.map((rep) => (
                    <div key={rep.id} className="ps-3 text-secondary small">
                      ↳ <strong>{rep.user.username}:</strong> {rep.text}
                    </div>
                  ))}
                </div>
              ))}
              <div className="d-flex mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  value={replyParentId ? replyText : commentText}
                  onChange={(e) =>
                    replyParentId
                      ? setReplyText(e.target.value)
                      : setCommentText(e.target.value)
                  }
                />
                <button
                  className="btn btn-primary ms-2"
                  onClick={() =>
                    replyParentId
                      ? addReply(r.id)
                      : addComment(r.id)
                  }
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
