// src/components/MainSignup.jsx
import React, { useState } from "react";
import { api } from "../api"; // ✅ correct import path (if api.js in src folder)

export default function MainSignup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "main",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("register2/", form);
      alert("✅ Registration successful! Now login.");
    } catch (err) {
      console.log(err);
      alert("❌ Error: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 480 }}>
      <h3 className="mb-3 fw-bold text-center">Create Account</h3>

      <form onSubmit={submit}>
        <input
          name="username"
          className="form-control my-2"
          placeholder="Username"
          required
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          name="email"
          className="form-control my-2"
          placeholder="Email"
          required
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          name="password"
          type="password"
          className="form-control my-2"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}
