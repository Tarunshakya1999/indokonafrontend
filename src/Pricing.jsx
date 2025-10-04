import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/plans/") // Django API
      .then(res => setPlans(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">💰 Pricing Plans</h2>
      <div className="row">
        {plans.map((plan) => (
          <div key={plan.id} className="col-md-4 mb-3">
            <div className="card shadow-lg h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <p className="card-text">Setup: {plan.setup_cost}</p>
                <p className="card-text">Renewal: {plan.renewal}</p>
                <small className="text-muted">{plan.notes}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
