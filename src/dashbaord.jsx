import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Single-file React component for a CRM Dashboard using Bootstrap
// Usage:
// 1) Install dependencies: axios, bootstrap
//    npm i axios bootstrap
// 2) In index.js or App.css import Bootstrap CSS:
//    import 'bootstrap/dist/css/bootstrap.min.css';
// 3) Place <CRMDashboard /> inside your app.
// 4) Authentication: this component reads token from localStorage.getItem('token')
//    If your app uses another auth flow, change the getAuthHeaders() function.

const API_BASE = 'https://indokonabackend-1.onrender.com/api/';

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
});

export default function CRMDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total_orders: 0, total_leads: 0, revenue: 0 });
  const [orders, setOrders] = useState([]);
  const [leads, setLeads] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [errors, setErrors] = useState(null);

  // Simple summary calc
  function computeStats(ordersList, leadsList) {
    const total_orders = ordersList.length;
    const total_leads = leadsList.length;
    const revenue = ordersList.reduce((s, o) => s + Number(o.amount || 0), 0);
    const byStatus = ordersList.reduce((acc, o) => {
      acc[o.status] = (acc[o.status] || 0) + 1;
      return acc;
    }, {});
    return { total_orders, total_leads, revenue, byStatus };
  }

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchAll() {
    setLoading(true);
    try {
      const [ordersRes, leadsRes] = await Promise.all([
        axiosInstance.get('/orders/'),
        axiosInstance.get('/leads/'),
      ]);
      setOrders(ordersRes.data);
      setLeads(leadsRes.data);
      setStats(computeStats(ordersRes.data, leadsRes.data));
    } catch (e) {
      console.error(e);
      setErrors('Failed to load data. Check console and authentication token.');
    } finally {
      setLoading(false);
    }
  }

  // ---------- ORDERS CRUD ----------
  async function createOrder(payload) {
    try {
      const res = await axiosInstance.post('/orders/', payload);
      const newOrders = [res.data, ...orders];
      setOrders(newOrders);
      setStats(computeStats(newOrders, leads));
      setShowOrderForm(false);
    } catch (e) {
      console.error(e);
      setErrors('Failed to create order');
    }
  }

  async function updateOrder(id, payload) {
    try {
      const res = await axiosInstance.put(`/orders/${id}/`, payload);
      const newOrders = orders.map((o) => (o.id === id ? res.data : o));
      setOrders(newOrders);
      setStats(computeStats(newOrders, leads));
      setSelectedOrder(null);
      setShowOrderForm(false);
    } catch (e) {
      console.error(e);
      setErrors('Failed to update order');
    }
  }

  async function deleteOrder(id) {
    if (!window.confirm('Delete this order?')) return;
    try {
      await axiosInstance.delete(`/orders/${id}/`);
      const newOrders = orders.filter((o) => o.id !== id);
      setOrders(newOrders);
      setStats(computeStats(newOrders, leads));
    } catch (e) {
      console.error(e);
      setErrors('Failed to delete order');
    }
  }

  // ---------- LEADS CRUD ----------
  async function createLead(payload) {
    try {
      const res = await axiosInstance.post('/leads/', payload);
      const newLeads = [res.data, ...leads];
      setLeads(newLeads);
      setStats(computeStats(orders, newLeads));
      setShowLeadForm(false);
    } catch (e) {
      console.error(e);
      setErrors('Failed to create lead');
    }
  }

  async function updateLead(id, payload) {
    try {
      const res = await axiosInstance.put(`/leads/${id}/`, payload);
      const newLeads = leads.map((l) => (l.id === id ? res.data : l));
      setLeads(newLeads);
      setStats(computeStats(orders, newLeads));
      setSelectedLead(null);
      setShowLeadForm(false);
    } catch (e) {
      console.error(e);
      setErrors('Failed to update lead');
    }
  }

  async function deleteLead(id) {
    if (!window.confirm('Delete this lead?')) return;
    try {
      await axiosInstance.delete(`/leads/${id}/`);
      const newLeads = leads.filter((l) => l.id !== id);
      setLeads(newLeads);
      setStats(computeStats(orders, newLeads));
    } catch (e) {
      console.error(e);
      setErrors('Failed to delete lead');
    }
  }

  // ---------- Forms ----------
  function OrderForm({ order, onCancel, onSave }) {
    const [form, setForm] = useState(
      order || { user: null, product: null, amount: '', status: 'pending', transaction_id: '' }
    );

    function handleChange(e) {
      const { name, value } = e.target;
      setForm((s) => ({ ...s, [name]: value }));
    }

    function submit(e) {
      e.preventDefault();
      // minimal validation
      if (!form.amount) return alert('Amount required');
      onSave(order ? order.id : null, form);
    }

    return (
      <div className="card p-3 mb-3">
        <h5>{order ? 'Edit Order' : 'New Order'}</h5>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label className="form-label">Product (id)</label>
            <input className="form-control" name="product" value={form.product || ''} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Amount</label>
            <input className="form-control" name="amount" value={form.amount || ''} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Status</label>
            <select className="form-select" name="status" value={form.status} onChange={handleChange}>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="delivered">Delivered</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">Save</button>
            <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  function LeadForm({ lead, onCancel, onSave }) {
    const [form, setForm] = useState(lead || { name: '', email: '', phone: '', source: 'website', status: 'new', notes: '' });
    function handleChange(e) {
      const { name, value } = e.target;
      setForm((s) => ({ ...s, [name]: value }));
    }
    function submit(e) {
      e.preventDefault();
      if (!form.name) return alert('Name required');
      onSave(lead ? lead.id : null, form);
    }
    return (
      <div className="card p-3 mb-3">
        <h5>{lead ? 'Edit Lead' : 'New Lead'}</h5>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input className="form-control" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Source</label>
            <select className="form-select" name="source" value={form.source} onChange={handleChange}>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="form-label">Status</label>
            <input className="form-control" name="status" value={form.status} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">Notes</label>
            <textarea className="form-control" name="notes" value={form.notes} onChange={handleChange} />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">Save</button>
            <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Indokona CRM Dashboard</h3>
        <div>
          <button className="btn btn-success me-2" onClick={() => { setSelectedOrder(null); setShowOrderForm(true); }}>New Order</button>
          <button className="btn btn-primary" onClick={() => { setSelectedLead(null); setShowLeadForm(true); }}>New Lead</button>
        </div>
      </div>

      {errors && <div className="alert alert-danger">{errors}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="card p-3">
                <h6>Total Orders</h6>
                <h3>{stats.total_orders}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h6>Total Leads</h6>
                <h3>{stats.total_leads}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h6>Revenue</h6>
                <h3>₹{Number(stats.revenue).toFixed(2)}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h6>Statuses</h6>
                {stats.byStatus ? Object.entries(stats.byStatus).map(([k, v]) => (
                  <div key={k}><small>{k}: </small><strong>{v}</strong></div>
                )) : <div>-</div>}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <div className="card mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <strong>Orders</strong>
                </div>
                <div className="card-body p-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o.id}>
                          <td>{o.id}</td>
                          <td>{o.product || (o.product_name ? o.product_name : '-')}</td>
                          <td>₹{Number(o.amount).toFixed(2)}</td>
                          <td>{o.status}</td>
                          <td>{new Date(o.created_at).toLocaleString()}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => { setSelectedOrder(o); setShowOrderForm(true); }}>Edit</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteOrder(o.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {showOrderForm && (
                <OrderForm
                  order={selectedOrder}
                  onCancel={() => { setShowOrderForm(false); setSelectedOrder(null); }}
                  onSave={(id, data) => (id ? updateOrder(id, data) : createOrder(data))}
                />
              )}
            </div>

            <div className="col-md-5">
              <div className="card mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <strong>Leads</strong>
                </div>
                <div className="card-body p-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((l) => (
                        <tr key={l.id}>
                          <td>{l.id}</td>
                          <td>{l.name}</td>
                          <td>{l.source}</td>
                          <td>{l.status}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => { setSelectedLead(l); setShowLeadForm(true); }}>Edit</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteLead(l.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {showLeadForm && (
                <LeadForm
                  lead={selectedLead}
                  onCancel={() => { setShowLeadForm(false); setSelectedLead(null); }}
                  onSave={(id, data) => (id ? updateLead(id, data) : createLead(data))}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
