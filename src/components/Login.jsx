// ----------------- src/components/LoginPage.js -----------------
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage(){
  const [form,setForm] = useState({ username:'', password:'' });
  const [msg,setMsg] = useState(null);
  const navigate = useNavigate();

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e =>{
    e.preventDefault();
    try{
      const res = await axios.post('http://127.0.0.1:8000/api/token/', form);
      // store JWT
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      // fetch profile to know role
      const profile = await axios.get('http://127.0.0.1:8000/api/profile/', { headers: { Authorization: `Bearer ${res.data.access}` } });
      localStorage.setItem('role', profile.data.role);
      navigate('/dashboard');
    }catch(err){
      setMsg('Login failed: ' + (err?.response?.data?.detail || err.message));
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width:420 }}>
        <h4 className="mb-3 text-center">Login</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" name="username" placeholder="Username" onChange={change} required />
          <input className="form-control mb-2" name="password" placeholder="Password" onChange={change} type="password" required />
          <button className="btn btn-success w-100">Login</button>
        </form>
        {msg && <div className="mt-3 text-danger text-center">{msg}</div>}
        <div className="mt-3 d-flex justify-content-between">
          <Link to="/signup">Create account</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  )
}