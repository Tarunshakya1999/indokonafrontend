// App.js — Premium Feed + Reels (Instagram/Facebook style)
// Copy into src/App.js in a CRA/Vite React project
// Requires: bootstrap, react-icons, react-toastify
//   npm i bootstrap react-icons react-toastify

import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaCommentDots, FaShareAlt, FaUserCircle, FaPlay, FaPause, FaMusic, FaHome } from 'react-icons/fa';

/* =====================
   THEME & SHARED STYLES
   ===================== */
const THEME = {
  gradient: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 50%, #f43f5e 100%)',
  glass: {
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid rgba(255,255,255,0.35)',
    boxShadow: '0 10px 30px rgba(2,6,23,0.12)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px'
  }
};

/* =====================
   SAMPLE DATA (demo)
   ===================== */
const SAMPLE_POSTS = [
  {
    id: 1,
    author: 'Indokona Credit Bazar',
    title: 'Instant Business Loan for MSME',
    body: 'Low interest • Fast approval • PAN + GST • #Loans #MSME',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
    likes: 320,
    time: '2h'
  },
  {
    id: 2,
    author: 'Dream True Academy',
    title: 'Digital Marketing Mastery – Live',
    body: '6-week live batch • Video + Monetization • #DigitalMarketing #Course',
    image: 'https://images.unsplash.com/photo-1529336953121-ad2a0ffb0f84?q=80&w=1400&auto=format&fit=crop',
    likes: 205,
    time: '6h'
  },
  {
    id: 3,
    author: 'Family Tree',
    title: 'Matchmaking CRM Upgrade',
    body: 'New workflow • Realtime charts • Premium UI • #CRM',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    likes: 118,
    time: '1d'
  }
];

// Public CC0/MDN demo mp4s for smooth autoplay (replace with your uploads anytime)
const SAMPLE_REELS = [
  {
    id: 'r1',
    author: 'Indokona',
    caption: 'Grow your business with verified leads 🚀',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    music: 'Corporate Beat — @studio'
  },
  {
    id: 'r2',
    author: 'Credit Bazar',
    caption: 'MSME loan in 24 hours ✅ #Loans',
    src: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
    music: 'Uplift — @beats'
  },
  {
    id: 'r3',
    author: 'Dream True Academy',
    caption: 'Content is the new currency 💡 #Marketing',
    src: 'https://filesamples.com/samples/video/mp4/sample_640x360.mp4',
    music: 'Synthwave — @mixlab'
  }
];

/* =====================
   ROOT APP
   ===================== */
export default function MyApp() {
  const [active, setActive] = useState('feed'); // 'feed' | 'reels'

  return (
    <div style={{ minHeight: '100vh', background: THEME.gradient }}>
      <ToastContainer />

      {/* Top Nav */}
      <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
        <div className="container-fluid px-3">
          <span className="navbar-brand text-white fw-bold d-flex align-items-center gap-2">
            <FaHome /> Indokona Business Wall
          </span>
          <div className="ms-auto d-flex gap-2">
            <button className={`btn btn-sm ${active==='feed'?'btn-light':'btn-outline-light'}`} onClick={()=>setActive('feed')}>Feed</button>
            <Link to="/reels" className={`btn btn-sm ${active==='reels'?'btn-light':'btn-outline-light'}`}>Reels</Link>
            <Link to="/pf" className="btn btn-primary">Public Profile</Link>
            <Link to="/reelsupload"className="btn btn-success">Upload Reels</Link>
          </div>
        </div>
      </nav>

      {active === 'feed' ? <Feed /> : <Reels reels={SAMPLE_REELS} />}

      <footer className="text-center text-white-50 py-3" style={{ background: 'rgba(0,0,0,0.25)' }}>
        © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.
      </footer>
    </div>
  );
}

/* =====================
   FEED — Facebook style stacked cards
   ===================== */
function Feed(){
  const [posts, setPosts] = useState(SAMPLE_POSTS);

  function like(id){
    setPosts(ps => ps.map(p => p.id===id ? { ...p, likes: p.likes+1 } : p));
  }

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h3 className="text-white fw-semibold mb-1">India’s First Verified Business Wall</h3>
        <p className="text-white-50 mb-0">Post like Facebook • Reels like Instagram • Premium glass UI</p>
      </header>

      <div className="row justify-content-center">
        {posts.map(p => (
          <div key={p.id} className="col-xl-7 col-lg-8 col-md-10 mb-4">
            <div className="p-4" style={THEME.glass}>
              <div className="d-flex align-items-center mb-2">
                <FaUserCircle size={32} className="text-secondary"/>
                <div className="ms-2">
                  <div className="fw-semibold">{p.author}</div>
                  <small className="text-muted">{p.time} • Public</small>
                </div>
              </div>

              <h5 className="fw-bold mb-2" style={{color:'#111827'}}>{p.title}</h5>
              <p className="text-muted">{renderWithTags(p.body)}</p>

              <div className="mb-3">
                <img src={p.image} alt="post" className="img-fluid rounded-4" style={{ objectFit:'cover', width:'100%', maxHeight: 520 }} />
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-outline-primary" onClick={()=>like(p.id)}>
                  <FaThumbsUp className="me-1"/> {p.likes}
                </button>
                <button className="btn btn-sm btn-outline-secondary"><FaCommentDots className="me-1"/> Comment</button>
                <button className="btn btn-sm btn-outline-success"><FaShareAlt className="me-1"/> Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================
   REELS — Instagram/TikTok style vertical swipe
   - Full height cards
   - Scroll-snap to next/prev
   - Autoplay when in view, pause when out
   ===================== */
// function Reels({ reels }){
//   const containerRef = useRef(null);
//   const videoRefs = useRef({});
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Intersection Observer to auto play/pause
//   useEffect(()=>{
//     const el = containerRef.current;
//     if(!el) return;

//     const options = { root: el, threshold: 0.65 };
//     const io = new IntersectionObserver((entries)=>{
//       entries.forEach(entry=>{
//         const id = entry.target.getAttribute('data-id');
//         const vid = videoRefs.current[id];
//         if(!vid) return;
//         if(entry.isIntersecting){
//           vid.play().catch(()=>{});
//           setActiveIndex(reels.findIndex(r=>r.id===id));
//         }else{
//           vid.pause();
//         }
//       });
//     }, options);

//     const cards = el.querySelectorAll('.reel-card');
//     cards.forEach(c=>io.observe(c));
//     return ()=> io.disconnect();
//   }, [reels]);

//   // Keyboard support (ArrowUp/Down)
//   useEffect(()=>{
//     const el = containerRef.current;
//     if(!el) return;
//     const onKey = (e)=>{
//       if(e.key === 'ArrowDown') {
//         e.preventDefault();
//         snapTo(activeIndex + 1);
//       }
//       if(e.key === 'ArrowUp') {
//         e.preventDefault();
//         snapTo(activeIndex - 1);
//       }
//     };
//     window.addEventListener('keydown', onKey);
//     return ()=> window.removeEventListener('keydown', onKey);
//   }, [activeIndex]);

//   function snapTo(index){
//     const el = containerRef.current;
//     if(!el) return;
//     const clamped = Math.max(0, Math.min(index, reels.length-1));
//     const card = el.querySelector(`[data-id="${reels[clamped].id}"]`);
//     if(card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }

//   const inlineCSS = `
//     .reels-container{ height: calc(100vh - 64px - 48px); overflow-y: auto; scroll-snap-type: y mandatory; }
//     .reel-card{ height: calc(100vh - 64px - 48px); scroll-snap-align: start; position: relative; border-radius: 24px; overflow: hidden; }
//     .reel-video{ width:100%; height:100%; object-fit: cover; }
//     .reel-overlay-top{ position:absolute; top:0; left:0; right:0; padding:16px; display:flex; justify-content:space-between; align-items:center; }
//     .reel-overlay-bottom{ position:absolute; bottom:0; left:0; right:0; padding:16px; color:#fff; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%); }
//     .reel-actions{ position:absolute; right:12px; bottom:90px; display:flex; flex-direction:column; gap:10px; }
//     .btn-fab{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.9); border:0; box-shadow:0 6px 18px rgba(0,0,0,0.2); }
//   `;

//   return (
//     <div className="container py-3">
//       <style>{inlineCSS}</style>
//       <div className="text-center mb-3">
//         <span className="badge bg-light text-dark px-3 py-2 rounded-pill">Swipe ↑ / ↓ • Autoplay • Scroll Snap</span>
//       </div>

//       <div ref={containerRef} className="reels-container">
//         {reels.map((r, idx)=> (
//           <div key={r.id} data-id={r.id} className="reel-card shadow-lg" style={{ background:'#000' }}>
//             <video
//               ref={v => videoRefs.current[r.id] = v}
//               className="reel-video"
//               src={r.src}
//               playsInline
//               muted
//               loop
//               preload="metadata"
//             />

//             {/* Top overlay */}
//             <div className="reel-overlay-top">
//               <div className="d-flex align-items-center gap-2">
//                 <FaUserCircle size={28} color="#fff"/>
//                 <span className="text-white fw-semibold">{r.author}</span>
//               </div>
//               <span className="badge bg-dark bg-opacity-50 text-white"><FaMusic className="me-1"/> {r.music}</span>
//             </div>

//             {/* Right action buttons */}
//             <div className="reel-actions">
//               <button className="btn-fab" onClick={()=>toast.success('Liked')}> <FaThumbsUp/> </button>
//               <button className="btn-fab" onClick={()=>toast.info('Comments coming soon')}> <FaCommentDots/> </button>
//               <button className="btn-fab" onClick={()=>toast('Shared to WhatsApp')}> <FaShareAlt/> </button>
//               <button className="btn-fab" onClick={()=>{
//                 const v = videoRefs.current[r.id]; if(!v) return; v.paused ? v.play() : v.pause();
//               }}> { (videoRefs.current[r.id] && !videoRefs.current[r.id].paused) ? <FaPause/> : <FaPlay/> } </button>
//             </div>

//             {/* Bottom caption */}
//             <div className="reel-overlay-bottom">
//               <div className="text-white fw-semibold">{r.caption}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* =====================
   UTILS
   ===================== */
function renderWithTags(text=''){
  const parts = text.split(/(#[A-Za-z0-9_]+)/g);
  return (
    <span>
      {parts.map((p,i)=> p.startsWith('#')
        ? <span key={i} className="badge bg-primary bg-opacity-10 text-primary me-1">{p}</span>
        : <span key={i} className="text-muted">{p}</span>
      )}
    </span>
  );
}
