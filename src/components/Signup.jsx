// ================= Signup Component =================
// File: src/components/Signup.js
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/register2/", form);
      setMsg("Signup successful! Now login.");
    } catch (error) {
      setMsg("Error: " + error.response.data.error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Signup</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mb-2"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100">Create Account</button>
        </form>
        {msg && <p className="text-center mt-2 text-success">{msg}</p>}
      </div>
    </div>
  );
}
