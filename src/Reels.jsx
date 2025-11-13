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
import "animate.css";

export default function Reels() {
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const [reels, setReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Fetch Reels from Django API
  useEffect(() => {
    const fetchReels = async () => {
      try {
        const res = await axios.get("https://indokonabackend-1.onrender.com/api/myreels/");
        setReels(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch reels:", error);
        toast.error("Failed to load reels!");
      }
    };
    fetchReels();
  }, []);

  // ✅ Intersection Observer for auto play/pause
  useEffect(() => {
    const el = containerRef.current;
    if (!el || reels.length === 0) return;

    const options = { root: el, threshold: 0.65 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        const vid = videoRefs.current[id];
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
          setActiveIndex(reels.findIndex((r) => r.id == id));
        } else {
          vid.pause();
        }
      });
    }, options);

    const cards = el.querySelectorAll(".reel-card");
    cards.forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, [reels]);

  // ✅ Keyboard support
  useEffect(() => {
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

  // 🎨 CSS styling for reels
  const inlineCSS = `
    .reels-container {
      height: 100vh;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
      background: radial-gradient(circle at center, #000000 40%, #121212 100%);
    }

    .reel-card {
      height: 100vh;
      scroll-snap-align: start;
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .reel-card:hover {
      transform: scale(1.01);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
    }

    .reel-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.95);
    }

    .reel-overlay-top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(5px);
    }

    .reel-overlay-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px 20px;
      color: #fff;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%);
      font-size: 1.05rem;
    }

    .reel-actions {
      position: absolute;
      right: 18px;
      bottom: 120px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;
    }

    .btn-fab {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.15);
      border: 2px solid rgba(255,255,255,0.25);
      backdrop-filter: blur(8px);
      color: #fff;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .btn-fab:hover {
      background: rgba(255,255,255,0.35);
      transform: scale(1.1);
    }

    .username {
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #fff;
    }

    .music-tag {
      font-size: 0.9rem;
      background: rgba(0,0,0,0.5);
      border-radius: 20px;
      padding: 6px 12px;
      backdrop-filter: blur(5px);
    }

    .loading-text {
      color: #bbb;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
    }
  `;

  return (
    <div className="container-fluid p-0">
      <style>{inlineCSS}</style>
      <div className="text-center py-3 bg-dark text-light shadow-sm sticky-top">
        <h5 className="fw-bold mb-0">🎬 Indokona Reels</h5>
        <small className="text-secondary">Swipe ↑ / ↓ • Autoplay • Enjoy</small>
      </div>

      <div ref={containerRef} className="reels-container">
        {reels.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
            <div className="spinner-border text-light mb-3"></div>
            <p className="loading-text">Loading reels...</p>
          </div>
        ) : (
          reels.map((r) => (
            <div key={r.id} data-id={r.id} className="reel-card animate__animated animate__fadeIn">
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
                  <FaUserCircle size={32} color="#fff" />
                  <span className="username">{r.author}</span>
                </div>
                <span className="music-tag">
                  <FaMusic className="me-1" /> {r.music?.split("/").pop()}
                </span>
              </div>

              {/* Right action buttons */}
              <div className="reel-actions">
                <button className="btn-fab" onClick={() => toast.success("Liked ❤️")}>
                  <FaThumbsUp />
                </button>
                <button className="btn-fab" onClick={() => toast.info("Comments coming soon 💬")}>
                  <FaCommentDots />
                </button>
                <button className="btn-fab" onClick={() => toast("Shared 📱")}>
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
                  {videoRefs.current[r.id] && !videoRefs.current[r.id].paused ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>
              </div>

              {/* Bottom caption */}
              <div className="reel-overlay-bottom">
                <div className="fw-semibold">{r.caption}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
