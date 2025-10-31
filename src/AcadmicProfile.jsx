import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/profile2/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setUser(res.data));
  }, []);

  return user ? (
    <div className="container p-4">
      <h2>Welcome {user.username}</h2>
      <img src={user.profile_pic} width="150" alt="" />
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
      <p>DOB: {user.dob}</p>
      <button className="btn btn-danger" onClick={()=>{ localStorage.clear(); window.location="/";}}>Logout</button>
    </div>
  ) : <h3>Loading...</h3>;
}
