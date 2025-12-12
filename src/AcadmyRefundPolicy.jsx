import React, { useState, useEffect } from "react";
import { DollarSign, Clock } from "lucide-react";

export default function AcadmyRefundPolicy() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        /* ---------- HERO + BACKGROUND STYLES ---------- */
        :root{
          --neon-1: #ff7a18;
          --neon-2: #ff416c;
          --neon-3: #ff9a00;
          --bg-dark: #070617;
        }

        .refund-hero {
          min-height: 62vh;
          background: linear-gradient(135deg, rgba(7,6,23,1) 0%, rgba(19,12,49,1) 50%, rgba(7,6,23,1) 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* mouse-follow glow */
        .cursor-glow {
          position: fixed;
          pointer-events: none;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(70px);
          mix-blend-mode: screen;
          opacity: 0.20;
          transform: translate(-50%, -50%);
          transition: left 0.08s linear, top 0.08s linear;
          z-index: 5;
          background: radial-gradient(circle at 30% 30%, rgba(255,122,24,0.95), rgba(255,66,108,0.6) 40%, rgba(255,154,0,0.25) 70%, transparent 80%);
        }

        /* subtle geometric overlay */
        .geom-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 30px, transparent 30px 60px);
          opacity: 0.04;
          z-index: 1;
        }

        /* particles */
        .hero-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 18px rgba(255,122,24,0.9);
          opacity: 0.06;
          animation: float 6s linear infinite;
          z-index: 2;
        }
        @keyframes float {
          from { transform: translateY(0) translateX(0); opacity: .06; }
          to { transform: translateY(-120vh) translateX(30px); opacity: 0; }
        }

        /* hero content */
        .hero-content {
          position: relative;
          z-index: 3;
          color: #fff;
          text-align: center;
          padding: 3.5rem 1rem;
        }

        .hero-icon-wrap {
          position: relative;
          display: inline-block;
          width: 140px;
          height: 140px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,122,24,0.12), rgba(255,66,108,0.10));
          backdrop-filter: blur(6px);
          box-shadow: 0 10px 30px rgba(255,66,108,0.06), inset 0 -4px 30px rgba(255,154,0,0.02);
          margin-bottom: 1rem;
          transition: transform .6s cubic-bezier(.2,.9,.2,1);
        }

        .hero-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: #ff9a00;
          transform-origin: center;
          animation: hero-bounce 2s infinite;
        }

        @keyframes hero-bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .hero-title {
          font-weight: 900;
          font-size: clamp(2.2rem, 4.8vw, 4rem);
          line-height: 1.02;
          background: linear-gradient(90deg, #ff9a00, #ff416c 40%, #ff7a18 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin-bottom: .5rem;
        }

        .hero-sub {
          color: rgba(255,255,255,0.92);
          font-weight: 700;
          font-size: clamp(1rem, 1.6vw, 1.6rem);
          margin-bottom: .75rem;
        }

        .hero-meta {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          background: rgba(255,255,255,0.03);
          padding: .4rem .9rem;
          border-radius: 999px;
          border: 1px solid rgba(255,122,24,0.08);
          color: #ffd8c2;
        }

        /* progress bar */
        .progress-track {
          height: 10px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          margin-top: 1.75rem;
          box-shadow: inset 0 0 18px rgba(0,0,0,0.35);
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff9a00, #ff416c);
          width: 0%;
          transition: width 0.25s linear;
        }

        /* responsive spacing */
        @media (min-width: 992px) {
          .hero-content { padding: 5.5rem 1rem; }
        }
      `}</style>

      <section className="refund-hero geom-overlay">
        {/* mouse-follow glow */}
        <div
          className="cursor-glow"
          style={{ left: mouse.x, top: mouse.y }}
          aria-hidden
        />

        {/* floating particles (randomized positions) */}
        {[...Array(10)].map((_, i) => {
          const left = Math.round(Math.random() * 100);
          const top = Math.round(Math.random() * 100);
          const delay = (Math.random() * 6).toFixed(2);
          const dur = (6 + Math.random() * 6).toFixed(2);
          return (
            <div
              key={i}
              className="hero-particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
                opacity: 0.04 + Math.random() * 0.08,
              }}
            />
          );
        })}

        {/* content */}
        <div className="container hero-content">
          <div className="hero-icon-wrap mx-auto">
            <div className="hero-icon">
              <DollarSign size={56} strokeWidth={1.6} />
            </div>
          </div>

          <h1 className="hero-title">Refund Policy</h1>
          <p className="hero-sub">Indokona Idea to Empire Academy™</p>

          <div className="hero-meta mx-auto">
            <Clock size={16} strokeWidth={1.6} />
            <small>Last Updated: January 2025</small>
          </div>

          {/* progress bar */}
          <div className="col-10 col-md-8 col-lg-6 mx-auto">
            <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
