import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    username: "", email: "", password: "",
    confirm_password: "", mobile: "", dob: "", profile_pic: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => fd.append(key, value));

    await axios.post("http://127.0.0.1:8000/api/register2/", fd);
    alert("Signup successful!");
  };

  return (
    <div className="container p-4">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {["username","email","password","confirm_password","mobile","dob"].map((field)=>(
          <input className="form-control mb-2" placeholder={field} 
            type={field.includes("password") ? "password" : "text"} 
            onChange={(e)=>setForm({...form,[field]:e.target.value})} required/>
        ))}
        <input type="file" className="form-control mb-2"
          onChange={(e)=>setForm({...form,profile_pic:e.target.files[0]})}/>
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
