import React, { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://indokonabackend-1.onrender.com/api/register2/", form);
      setMsg("Signup successful!");
    } catch (err) {
      setMsg("Error: " + err.response.data.error);
    }
  };

  return (
    <div className="mt-4">
      <h3>Signup</h3>
      <p className="text-success">{msg}</p>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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

        <button className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}
