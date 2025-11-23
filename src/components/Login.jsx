import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/login2/",
        {
          username: form.username,
          password: form.password,
        }
      );

      // store tokens
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      // store username FROM backend response
      localStorage.setItem("username", res.data.username);

      setMsg("Login successful!");
      navigate("/wall");

    } catch (err) {
      setMsg("Invalid username or password");
    }
  };

  return (
    <div className="mt-4">
      <h3>Login</h3>
      <p className="text-danger">{msg}</p>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Username"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}
