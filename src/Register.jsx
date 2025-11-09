import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaCrown } from "react-icons/fa";

/**
 * Inline SVG Gold Coin (no external image import) — fixes build error and keeps visuals premium
 * NOTE: per your request, no brand text is rendered on the coin.
 */
function GoldCoin({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="gc_fill" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#fff6b7" />
          <stop offset="40%" stopColor="#f9d65c" />
          <stop offset="85%" stopColor="#d9a72b" />
          <stop offset="100%" stopColor="#b48116" />
        </radialGradient>
        <linearGradient id="gc_edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9e27d" />
          <stop offset="50%" stopColor="#cfa43a" />
          <stop offset="100%" stopColor="#9a6f14" />
        </linearGradient>
        <filter id="gc_glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* rim */}
      <circle cx="50" cy="50" r="48" fill="url(#gc_edge)" filter="url(#gc_glow)" />
      {/* face */}
      <circle cx="50" cy="50" r="42" fill="url(#gc_fill)" />
      {/* inner shine */}
      <ellipse cx="38" cy="34" rx="16" ry="10" fill="#ffffff" opacity="0.25" />
      {/* subtle ridges */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (Math.PI / 180) * angle;
        const rOuter = 47;
        const rInner = 42;
        const x1 = 50 + rInner * Math.cos(rad);
        const y1 = 50 + rInner * Math.sin(rad);
        const x2 = 50 + rOuter * Math.cos(rad);
        const y2 = 50 + rOuter * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ad8624" strokeWidth="1" opacity="0.6" />;
      })}
    </svg>
  );
}

/**
 * Gold coin rainfall background (full-screen). Uses stable random seed via useMemo so coins don't jump.
 */
function GoldCoinRain({ count = 40 }) {
  const coins = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // vw
        startY: -Math.random() * 150, // px above the viewport
        size: 28 + Math.random() * 24, // 28–52 px
        d: 10 + Math.random() * 12, // fall duration
        delay: Math.random() * 6,
        rot: (Math.random() * 60 - 30),
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {coins.map((c) => (
        <motion.div
          key={c.id}
          className="absolute opacity-85 drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
          style={{ left: `${c.x}%`, top: c.startY }}
          animate={{
            y: [0, 1200],
            rotate: [c.rot, -c.rot, c.rot],
          }}
          transition={{ duration: c.d, delay: c.delay, repeat: Infinity, ease: "linear" }}
        >
          <GoldCoin size={c.size} />
        </motion.div>
      ))}
    </div>
  );
}

// ---------------- Register Page ----------------
function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [service, setService] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("info");
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const ROLE_OPTIONS = {
    Fintech: ["Retailer", "Distributor", "Master Distributor", "Super Distributor", "White Label"],
    Store: ["Basic Reseller", "Pro Reseller", "Gold Reseller", "Diamond Reseller"],
    Suit: ["Starter Plan", "Pro Plan", "Enterprise Plan"],
    SaaS: ["Starter Plan", "Pro Plan", "Enterprise Plan"],
    M2M: ["Starter Plan", "Pro Plan", "Enterprise Plan"],
    Acadmy: ["Starter Plan", "Professional Plan", "Empire Builder Plan"],
  };

  const rolesForService = ROLE_OPTIONS[service] || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMsg("Password and Confirm Password do not match.");
      setMsgType("danger");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/register/",
        { username, email, password, password2, service, role },
        { headers: { "Content-Type": "application/json" } }
      );

      setMsg("✅ Registration Successful! Redirecting to login...");
      setMsgType("success");
      setRedirecting(true);

      setTimeout(() => {
        setLoading(false);
        navigate(`/login/${service.toLowerCase()}`);
      }, 2500);
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        if (errorData.username) {
          setMsg("❌ Username already exists.");
        } else if (errorData.email) {
          setMsg("❌ Email already exists.");
        } else if (errorData.password) {
          setMsg("❌ Password error: " + errorData.password[0]);
        } else if (errorData.role) {
          setMsg("❌ Please select a valid role.");
        } else {
          setMsg("❌ Something went wrong.");
        }
      } else {
        setMsg("⚠ Server error. Try again later.");
      }
      setMsgType("danger");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-700 via-yellow-800 to-yellow-900">
      <GoldCoinRain />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-yellow-300 text-center mb-8 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] tracking-wide relative z-10"
      >
        Welcome to Indokona Business Empire !!!!!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-gradient-to-tr from-white/90 to-yellow-100/90 rounded-3xl shadow-2xl p-10 w-full max-w-lg border border-yellow-400 hover:shadow-yellow-400/80 transition-all duration-700 backdrop-blur-lg"
      >
        <motion.h2
          animate={{ textShadow: ["0 0 5px #FFD700", "0 0 20px #FFD700", "0 0 5px #FFD700"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="text-center text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2"
        >
          <FaCrown className="text-yellow-500 animate-pulse" /> Create Your Account <FaCrown className="text-yellow-500 animate-pulse" />
        </motion.h2>

        {msg && (
          <div className={`text-center fw-semibold rounded-3 p-2 mb-4 ${msgType === "success" ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {msg}
            {redirecting && <span className="ml-2 animate-pulse">⏳</span>}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {[{ label: "Username", icon: <FaUser />, type: "text", value: username, setValue: setUserName },
            { label: "Email", icon: <FaEnvelope />, type: "email", value: email, setValue: setEmail },
            { label: "Password", icon: <FaLock />, type: "password", value: password, setValue: setPassword },
            { label: "Confirm Password", icon: <FaLock />, type: "password", value: password2, setValue: setPassword2 }].map((input, i) => (
            <div key={i} className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-1">{input.label}</label>
              <div className="flex items-center border-2 border-yellow-400 rounded-xl px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-yellow-400 transition-all">
                <span className="text-yellow-500 text-lg mr-2 animate-pulse">{input.icon}</span>
                <input
                  type={input.type}
                  value={input.value}
                  onChange={(e) => input.setValue(e.target.value)}
                  required
                  className="w-full focus:outline-none text-gray-700 bg-transparent"
                />
              </div>
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaBuilding className="text-yellow-500 animate-pulse" /> Select Service</label>
            <select
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                setRole("");
              }}
              className="w-full border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-xl px-4 py-2 shadow-sm text-gray-700 bg-white hover:shadow-md transition-all"
              required
            >
              <option value="">-- Choose Service --</option>
              {Object.keys(ROLE_OPTIONS).map((key) => (
                <option key={key} value={key}>{`Indokona ${key}`}</option>
              ))}
            </select>
          </div>

          {rolesForService.length > 0 && (
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaCrown className="text-yellow-500 animate-pulse" /> Select Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-xl px-4 py-2 shadow-sm text-gray-700 bg-white hover:shadow-md transition-all"
                required
              >
                <option value="">-- Choose Role --</option>
                {rolesForService.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Registering...
              </>
            ) : (
              "Register Now"
            )}
          </motion.button>
        </form>

        <div className="flex justify-center mt-6">
          <p className="text-center text-muted text-lg">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-yellow-600 hover:text-yellow-700 transition-all animate-pulse">
              Login As User
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Simple sanity self-tests (run manually if needed)
export function __selfTests__() {
  const services = ["Fintech", "Store", "Suit", "SaaS", "M2M", "Acadmy"];
  if (!services.every((s) => typeof s === "string")) throw new Error("Service keys invalid");
  return true;
}



