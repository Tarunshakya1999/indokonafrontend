import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://indokonabackend-1.onrender.com//api/login2/", {
        username: form.email,
        password: form.password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      setMsg("Login successful!");
    } catch (err) {
      setMsg("Invalid email or password");
    }
  };

  return (
    <div className="mt-4">
      <h3>Login</h3>
      <p className="text-danger">{msg}</p>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}
