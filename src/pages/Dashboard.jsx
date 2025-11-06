import React, { useEffect, useState } from "react";
import { useApi } from "../api/ApiProvider";

export default function Dashboard() {
  const { client } = useApi();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    client.get("/dashboard/")
      .then(res => setStats(res.data))
      .catch(() => setStats({ total_sales:0, total_orders:0, total_customers:0 }));
  }, []);

  if (!stats) return <div className="p-4">Loading...</div>;

  return (
    <div className="container py-4">
      <h4>Dashboard</h4>
      <div className="row g-3 mt-2">
        {["total_sales","total_orders","total_customers"].map(key => (
          <div className="col-md-4" key={key}>
            <div className="card p-3">
              <div>{key.replace("_"," ")}</div>
              <h3>{stats[key]}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
