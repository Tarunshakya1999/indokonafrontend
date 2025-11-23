// ----------------- src/components/DashboardPage.js -----------------
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DashboardPage(){
  const [profile,setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    (async ()=>{
      const token = localStorage.getItem('access');
      if(!token){ navigate('/'); return }
      try{
        const res = await axios.get('http://127.0.0.1:8000/api/profile/', { headers: { Authorization: `Bearer ${token}` } });
        setProfile(res.data);
      }catch(err){
        // token might be expired: clear and redirect
        localStorage.removeItem('access'); localStorage.removeItem('refresh'); localStorage.removeItem('role');
        navigate('/');
      }
    })()
  },[navigate]);

  const logout = ()=>{
    localStorage.removeItem('access'); localStorage.removeItem('refresh'); localStorage.removeItem('role');
    navigate('/');
  }

  if(!profile) return (
    <div className="container d-flex justify-content-center align-items-center vh-100"><div>Loading...</div></div>
  )

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Welcome, {profile.username}</h3>
        <div>
          <span className="badge bg-secondary me-3">Role: {profile.role}</span>
          <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
        </div>
      </div>

      {profile.role==='admin' ? (
        <div className="card p-4 shadow-sm">
          <h5>Admin Dashboard</h5>
          <p>Manage users, view stats, etc.</p>
        </div>
      ) : (
        <div className="card p-4 shadow-sm">
          <h5>User Dashboard</h5>
          <p>Your personal area — welcome!</p>
        </div>
      )}
    </div>
  )
}