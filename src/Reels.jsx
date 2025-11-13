import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaThumbsUp, FaCommentDots, FaTrash, FaReply, FaShareAlt } from "react-icons/fa";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://indokonabackend-1.onrender.com/api";
axios.defaults.withCredentials = true; // for session auth

export default function Reels() {
  const [reels, setReels] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [activeReel, setActiveReel] = useState(null);

  useEffect(() => {
    fetchReels();
  }, []);

  async function fetchReels() {
    const res = await axios.get("/myreels/");
    setReels(res.data);
  }

  async function toggleLike(id) {
    try {
      const res = await axios.post(`/myreels/${id}/toggle_like/`);
      setReels((prev) =>
        prev.map((r) => (r.id === id ? { ...r, liked_by_user: res.data.liked, likes_count: res.data.likes_count } : r))
      );
    } catch {
      toast.error("Login required!");
    }
  }

  async function addComment(id) {
    if (!commentText.trim()) return;
    try {
      const res = await axios.post(`/myreels/${id}/add_comment/`, { text: commentText });
      setReels((prev) =>
        prev.map((r) => (r.id === id ? { ...r, comments: [...r.comments, res.data] } : r))
      );
      setCommentText("");
    } catch {
      toast.error("Login required!");
    }
  }

  async function deleteComment(reelId, commentId) {
    try {
      await axios.delete(`/myreels/${reelId}/delete_comment/`, { data: { comment_id: commentId } });
      setReels((prev) =>
        prev.map((r) =>
          r.id === reelId ? { ...r, comments: r.comments.filter((c) => c.id !== commentId) } : r
        )
      );
    } catch {
      toast.error("Only your own comment can be deleted!");
    }
  }

  async function shareReel(reel) {
    const link = `${window.location.origin}/reel/${reel.id}`;
    if (navigator.share) {
      await navigator.share({ title: reel.caption, url: link });
    } else {
      await navigator.clipboard.writeText(link);
      toast.info("Link copied!");
    }
  }

  return (
    <div className="container py-4">
      {reels.map((r) => (
        <div key={r.id} className="mb-5 border rounded-4 p-3 bg-light">
          <video src={r.src} controls style={{ width: "100%", borderRadius: "12px" }} />
          <div className="d-flex align-items-center justify-content-between mt-2">
            <button className="btn btn-light" onClick={() => toggleLike(r.id)}>
              <FaThumbsUp color={r.liked_by_user ? "blue" : "gray"} /> {r.likes_count}
            </button>
            <button className="btn btn-light" onClick={() => setActiveReel(r.id)}>
              <FaCommentDots /> {r.comments.length}
            </button>
            <button className="btn btn-light" onClick={() => shareReel(r)}>
              <FaShareAlt /> Share
            </button>
          </div>

          {activeReel === r.id && (
            <div className="mt-3">
              {r.comments.map((c) => (
                <div key={c.id} className="d-flex justify-content-between align-items-center">
                  <span><b>{c.user.username}:</b> {c.text}</span>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteComment(r.id, c.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <div className="mt-2 d-flex">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add comment..."
                  className="form-control me-2"
                />
                <button className="btn btn-primary" onClick={() => addComment(r.id)}>
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
