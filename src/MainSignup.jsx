// src/components/MainSignup.jsx
import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "./api";

export default function MainSignup(){
  const [form, setForm] = useState({ username:"", email:"", password:"", role:"main" });

  const submit = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${baseURL}/register2/`, form);
      alert("Registered main user. Login now.");
    }catch(err){
      alert("Error: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <div className="container mt-4" style={{maxWidth:480}}>
      <h3>Signup (Main website)</h3>
      <form onSubmit={submit}>
        <input name="username" className="form-control my-2" placeholder="Username" onChange={e=>setForm({...form,username:e.target.value})} />
        <input name="email" className="form-control my-2" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
        <input name="password" type="password" className="form-control my-2" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}
