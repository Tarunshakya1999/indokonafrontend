// src/components/RoleLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { baseURL, setTokenForRole } from "./api";
import { useNavigate } from "react-router-dom";

export default function RoleLogin({ role, storageKey, redirectPath }){
  const [form, setForm] = useState({ username:"", password:"" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const payload = { ...form, role };
      const res = await axios.post(`${baseURL}api/mylogin/`, payload);
      // store access token under provided storageKey
      setTokenForRole(storageKey, res.data.access);
      // optionally store refresh elsewhere
      alert(`${role} login successful`);
      navigate(redirectPath);
    }catch(err){
      alert("Login error: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <div className="container mt-4" style={{maxWidth:480}}>
      <h3>Login — {role.toUpperCase()}</h3>
      <form onSubmit={submit}>
        <input placeholder="Username" className="form-control my-2" onChange={e=>setForm({...form,username:e.target.value})} />
        <input placeholder="Password" type="password" className="form-control my-2" onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
