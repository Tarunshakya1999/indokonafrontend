import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaUserCircle, FaMusic, FaThumbsUp, FaCommentDots, FaShareAlt, FaPlay, FaPause } from "react-icons/fa";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reels() {
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const audioRefs = useRef({}); // 🎵 music refs
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

  // ✅ Intersection Observer for video + music auto play/pause
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
          setActiveIndex(reels.findIndex((r) => r.id == id));
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

  // ✅ Keyboard navigation
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

  const inlineCSS = `
    .reels-container{ height: calc(100vh - 64px - 48px); overflow-y: auto; scroll-snap-type: y mandatory; }
    .reel-card{ height: calc(100vh - 64px - 48px); scroll-snap-align: start; position: relative; border-radius: 24px; overflow: hidden; }
    .reel-video{ width:100%; height:100%; object-fit: cover; }
    .reel-overlay-top{ position:absolute; top:0; left:0; right:0; padding:16px; display:flex; justify-content:space-between; align-items:center; }
    .reel-overlay-bottom{ position:absolute; bottom:0; left:0; right:0; padding:16px; color:#fff; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%); }
    .reel-actions{ position:absolute; right:12px; bottom:90px; display:flex; flex-direction:column; gap:10px; }
    .btn-fab{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.9); border:0; box-shadow:0 6px 18px rgba(0,0,0,0.2); }
  `;

  return (
    <div className="container py-3">
      <style>{inlineCSS}</style>
      <div className="text-center mb-3">
        <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
          Swipe ↑ / ↓ • Autoplay • Scroll Snap
        </span>
      </div>

      <div ref={containerRef} className="reels-container">
        {reels.length === 0 ? (
          <div className="text-center text-secondary mt-5">
            <div className="spinner-border text-primary mb-3"></div>
            <p>Loading reels...</p>
          </div>
        ) : (
          reels.map((r) => (
            <div key={r.id} data-id={r.id} className="reel-card shadow-lg" style={{ background: "#000" }}>
              {/* 🎥 Video */}
              <video
                ref={(v) => (videoRefs.current[r.id] = v)}
                className="reel-video"
                src={r.src}
                playsInline
               // muted 
                loop
                preload="metadata"
              />

              {/* 🎵 Music Audio */}
              <audio
                ref={(a) => (audioRefs.current[r.id] = a)}
                src={r.music}
                preload="auto"
              />

              {/* Top overlay */}
              <div className="reel-overlay-top">
                <div className="d-flex align-items-center gap-2">
                  <FaUserCircle size={28} color="#fff" />
                  <span className="text-white fw-semibold">{r.author}</span>
                </div>
                <span className="badge bg-dark bg-opacity-50 text-white">
                  <FaMusic className="me-1" />
                  {r.music?.split("/").pop()}
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
                <button className="btn-fab" onClick={() => toast("Shared to WhatsApp 📱")}>
                  <FaShareAlt />
                </button>
                <button
                  className="btn-fab"
                  onClick={() => {
                    const v = videoRefs.current[r.id];
                    const a = audioRefs.current[r.id];
                    if (!v) return;
                    if (v.paused) {
                      v.play();
                      a?.play();
                    } else {
                      v.pause();
                      a?.pause();
                    }
                  }}
                >
                  {videoRefs.current[r.id] && !videoRefs.current[r.id].paused ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              {/* Bottom caption */}
              <div className="reel-overlay-bottom">
                <div className="text-white fw-semibold">{r.caption}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
