import React, { useEffect, useState } from "react";
import { useApi } from "../api/ApiProvider";

export default function ResourcePage({ endpoint, title }) {
  const { client } = useApi();
  const [data, setData] = useState([]);

  useEffect(() => {
    client.get(`/${endpoint}/`)
      .then(res => setData(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="container py-4">
      <h4>{title}</h4>
      <div className="table-responsive mt-3">
        <table className="table table-striped">
          <thead>
            <tr>{Object.keys(data[0] || {}).slice(0,6).map(k => <th key={k}>{k}</th>)}</tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                {Object.values(row).slice(0,6).map((v,i)=><td key={i}>{String(v)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
