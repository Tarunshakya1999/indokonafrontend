// ----------------- src/components/ResetPasswordPage.js -----------------
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ResetPasswordPage(){
  const { uid, token } = useParams();
  const [password,setPassword] = useState('');
  const [msg,setMsg] = useState(null);

  const submit = async e =>{
    e.preventDefault();
    try{
      const res = await axios.post('http://127.0.0.1:8000/api/password-reset-confirm/', { uid, token, password });
      setMsg({ type:'success', text: res.data.msg || 'Password reset. You can now login.' });
    }catch(err){
      setMsg({ type:'error', text: err?.response?.data?.error || err.message });
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width:420 }}>
        <h4 className="mb-3 text-center">Reset Password</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" type="password" placeholder="New password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn btn-success w-100">Set Password</button>
        </form>
        {msg && <div className={`mt-3 text-center ${msg.type==='error'?'text-danger':'text-success'}`}>{msg.text}</div>}
        <div className="mt-3 text-center"><Link to="/">Back to login</Link></div>
      </div>
    </div>
  )
}