// ----------------- src/components/ForgotPasswordPage.js -----------------
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage(){
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState(null);

  const submit = async e =>{
    e.preventDefault();
    try{
      const res = await axios.post('https://indokonabackend-1.onrender.com/password-reset/', { email });
      setMsg({ type:'success', text: res.data.msg || 'Check console / mailbox for reset link.' });
    }catch(err){
      setMsg({ type:'error', text: err?.response?.data?.error || err.message });
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width:420 }}>
        <h4 className="mb-3 text-center">Forgot Password</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <button className="btn btn-primary w-100">Send reset link</button>
        </form>
        {msg && <div className={`mt-3 text-center ${msg.type==='error'?'text-danger':'text-success'}`}>{msg.text}</div>}
        <div className="mt-3 text-center"><Link to="/">Back to login</Link></div>
      </div>
    </div>
  )
}