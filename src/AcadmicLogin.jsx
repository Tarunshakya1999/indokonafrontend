import axios from "axios";
import { useState } from "react";

export default function Login2() {
  const [data, setData] = useState({ identifier: "", password: "" });

  const login = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://127.0.0.1:8000/api/login2/", data);

    localStorage.setItem("token", res.data.access);
    localStorage.setItem("username", res.data.username);

    window.location = "/profile";
  };

  return (
    <div className="container p-4">
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          className="form-control mb-2"
          placeholder="Email or Username"
          onChange={(e) => setData({ ...data, identifier: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}
