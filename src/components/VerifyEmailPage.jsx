// ----------------- src/components/VerifyEmailPage.js -----------------
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmailPage(){
  const { uid, token } = useParams();
  const [msg,setMsg] = useState('Verifying...');

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.post('https://indokonabackend-1.onrender.com/verify-email/', { uid, token });
        setMsg(res.data.msg || 'Email verified! You may login.');
      }catch(err){
        setMsg('Verification failed: ' + (err?.response?.data?.error || err.message));
      }
    })()
  },[uid,token]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width:420 }}>
        <h4 className="text-center">Email verification</h4>
        <div className="mt-3 text-center">{msg}</div>
        <div className="mt-3 text-center"><Link to="/">Go to Login</Link></div>
      </div>
    </div>
  )
}