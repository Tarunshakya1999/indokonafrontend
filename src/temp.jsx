import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


/**
 * Indokona Partner CRM — Single-file React App
 * Stack: React + Bootstrap 5, Bootstrap Icons
 * Features: Dark/Light toggle, Sidebar, Topbar, Toasters, Modals,
 * Pages: Dashboard, Partners, KYC, Products, Sales, Wallet, Payouts, Certificates, Settings
 * Notes: Uses local state with realistic flows; replace API hooks with real endpoints later.
 */

// ---------- Utilities ----------
const currency = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n || 0);
const nowIso = () => new Date().toISOString();
const uid = (p = "ID") => `${p}_${Math.random().toString(36).slice(2, 9)}`;

// ---------- Theme Hook ----------
function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("crm_theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("crm_theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

// ---------- Toast System ----------
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (title, body, variant = "primary") => {
    const id = uid("toast");
    setToasts((t) => [...t, { id, title, body, variant }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  };
  const Toasts = () => (
    <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 1080 }}>
      {toasts.map((t) => (
        <div key={t.id} className={`toast show text-bg-${t.variant} border-0 shadow-sm`}> 
          <div className="toast-header border-0">
            <i className="bi bi-lightning-charge-fill me-2"></i>
            <strong className="me-auto">{t.title}</strong>
            <button className="btn-close" onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))}></button>
          </div>
          <div className="toast-body">{t.body}</div>
        </div>
      ))}
    </div>
  );
  return { push, Toasts };
}

// ---------- Seed Data ----------
const seedPartners = [
  { id: uid("PRT"), code: "INDO001", plan: "Gold", name: "Rahul Verma", phone: "+91 98765 43210", brand: "Verma Digital", kyc: "Verified", wallet: 32500, subdomain: "rahul.indokona.in", parent: null, created_at: nowIso() },
  { id: uid("PRT"), code: "INDO002", plan: "Pro", name: "Anjali Sharma", phone: "+91 99876 54321", brand: "Anjali Tech", kyc: "Pending", wallet: 8200, subdomain: "anjali.indokona.in", parent: null, created_at: nowIso() },
  { id: uid("PRT"), code: "INDO003", plan: "Diamond", name: "Karan Mehta", phone: "+91 90909 01010", brand: "Mehta Ventures", kyc: "Verified", wallet: 182000, subdomain: "karan.indokona.in", parent: "INDO001", created_at: nowIso() },
];

const seedProducts = [
  { id: 1, sku: "DP-CANVA", title: "Canva PRO (Resale)", price: 999, resale: true, license: "subscription" },
  { id: 2, sku: "WP-HOST", title: "Managed WordPress Hosting", price: 2999, resale: true, license: "service" },
  { id: 3, sku: "CRM-WHATS", title: "Bulk WhatsApp CRM", price: 4999, resale: true, license: "saas" },
  { id: 4, sku: "DVCARD", title: "Digital Visiting Card", price: 299, resale: true, license: "one-time" },
];

const seedSales = [
  { id: uid("SALE"), partner_code: "INDO001", buyer: "Amit Gupta", email: "amit@example.com", product_id: 1, amount: 999, commission: 300, status: "settled", created_at: nowIso() },
  { id: uid("SALE"), partner_code: "INDO003", buyer: "Neha Jain", email: "neha@example.com", product_id: 3, amount: 4999, commission: 1200, status: "settled", created_at: nowIso() },
];

const seedLeads = [
  { id: uid("LEAD"), name: "Rohit Kumar", phone: "+91 89012 33445", email: "rohit@gmail.com", status: "New", source: "Facebook Ads", date: nowIso() },
  { id: uid("LEAD"), name: "Pooja Singh", phone: "+91 99012 11122", email: "pooja@gmail.com", status: "Contacted", source: "Instagram", date: nowIso() },
];


// ---------- Layout Components ----------
function Topbar({ theme, setTheme, onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backdropFilter: "blur(6px)" }}>
      <div className="container-fluid">
        <span className="navbar-brand fw-bold d-flex align-items-center">
          <i className="bi bi-boxes me-2"></i> Indokona Partner CRM
                </span>
        <form className="d-none d-md-flex ms-auto me-3" role="search" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control" type="search" placeholder="Search partners, sales, products..." onChange={(e) => onSearch?.(e.target.value)} />
        </form>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
          </button>
          <button className="btn btn-primary btn-sm"><i className="bi bi-plus-lg me-1"></i> Quick Create</button>
          <img alt="user" src={`https://api.dicebear.com/8.x/initials/svg?seed=Admin`} width={28} height={28} className="rounded-circle border" />
        </div>

        
      </div>
    </nav>
  );
}

function Sidebar({ current, setCurrent }) {
  const items = [
    { key: "dashboard", icon: "bi-speedometer2", label: "Dashboard" },
    { key: "partners", icon: "bi-people", label: "Partners" },
    { key: "kyc", icon: "bi-shield-check", label: "KYC" },
    { key: "products", icon: "bi-bag", label: "Products" },
    { key: "sales", icon: "bi-receipt", label: "Sales" },
    { key: "wallet", icon: "bi-wallet2", label: "Wallet" },
    { key: "payouts", icon: "bi-bank", label: "Payouts" },
    { key: "certificates", icon: "bi-award", label: "Certificates" },
    { key: "leads", icon: "bi-person", label: "Leads" },

    { key: "settings", icon: "bi-gear", label: "Settings" },
  ];
  return (
    <aside className="border-end" style={{ minWidth: 250 }}>
      <div className="p-3">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text"><i className="bi bi-search"></i></span>
          <input className="form-control" placeholder="Quick jump" onKeyDown={(e)=>{ if(e.key==='Enter'){ setCurrent(e.target.value.toLowerCase())}}} />
        </div>
        <ul className="list-group list-group-flush">
          {items.map((it) => (
            <li key={it.key} className={`list-group-item d-flex align-items-center ${current===it.key?"active":''}`} role="button" onClick={() => setCurrent(it.key)}>
              <i className={`bi ${it.icon} me-2`}></i>{it.label}
              {current===it.key && <i className="bi bi-chevron-right ms-auto"></i>}
            </li>
          ))}
        </ul>
        <div className="mt-3 p-3 rounded-3 text-bg-dark bg-gradient" style={{backgroundImage:"linear-gradient(135deg,#0d6efd,#6f42c1)"}}>
          <div className="small opacity-75">Plan</div>
          <div className="fw-bold">Enterprise</div>
          <div className="small mt-2">2000 partners • Auto Payouts</div>
          <button className="btn btn-light btn-sm w-100 mt-2">Manage Plan</button>
        </div>
      </div>
    </aside>
  );
}

// ---------- Widgets ----------
function Stat({ title, value, icon, hint }) {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div className="text-secondary small">{title}</div>
              <div className="fs-4 fw-bold">{value}</div>
              {hint && <div className="small text-success mt-1"><i className="bi bi-graph-up-arrow me-1"></i>{hint}</div>}
            </div>
            <div className="ms-3 display-6"><i className={`bi ${icon}`}></i></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Pages ----------
function PageDashboard({ partners, sales, wallet, products }) {
  const totalSales = sales.reduce((a, s) => a + s.amount, 0);
  const totalCommission = sales.reduce((a, s) => a + s.commission, 0);
  const verified = partners.filter((p) => p.kyc === "Verified").length;

  return (
    <div className="container-fluid py-3">
      <div className="row g-3">
        <Stat title="Total Revenue" value={currency(totalSales)} icon="bi-cash-coin" hint="+12% this week" />
        <Stat title="Commission Paid" value={currency(totalCommission)} icon="bi-coin" hint="+8%" />
        <Stat title="Verified Partners" value={verified} icon="bi-shield-check" hint={`of ${partners.length}`} />
        <Stat title="Active Products" value={products.length} icon="bi-bag" />
      </div>

      <div className="row g-3 mt-1">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center">
              <i className="bi bi-receipt-cutoff me-2"></i>
              Recent Sales
              <span className="ms-auto small text-secondary">Last 10</span>
            </div>
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Sale ID</th><th>Partner</th><th>Product</th><th>Buyer</th><th>Amount</th><th>Commission</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.slice(0,10).map((s) => (
                    <tr key={s.id}>
                      <td className="text-secondary">{s.id.slice(-6)}</td>
                      <td>{s.partner_code}</td>
                      <td>{products.find(p=>p.id===s.product_id)?.title}</td>
                      <td>{s.buyer}</td>
                      <td>{currency(s.amount)}</td>
                      <td><span className="badge text-bg-success">{currency(s.commission)}</span></td>
                      <td><span className={`badge text-bg-${s.status==="settled"?"primary":"warning"}`}>{s.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent"><i className="bi bi-lightbulb me-2"></i>Quick Actions</div>
            <div className="list-group list-group-flush">
              <button className="list-group-item list-group-item-action"><i className="bi bi-person-plus me-2"></i>New Partner</button>
              <button className="list-group-item list-group-item-action"><i className="bi bi-upload me-2"></i>Upload KYC</button>
              <button className="list-group-item list-group-item-action"><i className="bi bi-bag-plus me-2"></i>Add Product</button>
              <button className="list-group-item list-group-item-action"><i className="bi bi-send-check me-2"></i>Approve Payouts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PagePartners({ partners, setPartners, pushToast }) {
  const [q, setQ] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", brand: "", plan: "Basic" });

  const filtered = partners.filter((p) => [p.name, p.code, p.plan, p.brand].join(" ").toLowerCase().includes(q.toLowerCase()));

  const addPartner = () => {
    const code = `INDO${String(partners.length + 1).padStart(3, "0")}`;
    setPartners((ps) => [
      { id: uid("PRT"), code, plan: form.plan, name: form.name || "New Partner", phone: form.phone, brand: form.brand, kyc: "Pending", wallet: 0, subdomain: `${form.name.split(" ")[0]?.toLowerCase()||"partner"}.indokona.in`, parent: null, created_at: nowIso() },
      ...ps,
    ]);
    setShowNew(false);
    pushToast("Partner created", `${form.name} onboarded with code ${code}`, "success");
    setForm({ name: "", phone: "", brand: "", plan: "Basic" });
  };

  const setKyc = (code, status) => {
    setPartners((ps) => ps.map((p) => (p.code === code ? { ...p, kyc: status } : p)));
    pushToast("KYC Updated", `${code} → ${status}`, status === "Verified" ? "success" : "warning");
  };

  return (
    <div className="container-fluid p-3">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0"><i className="bi bi-people me-2"></i>Partners</h5>
        <div className="ms-auto d-flex gap-2">
          <input className="form-control" placeholder="Search partners" style={{ maxWidth: 320 }} value={q} onChange={(e) => setQ(e.target.value)} />
          <button className="btn btn-primary" onClick={() => setShowNew(true)}><i className="bi bi-person-plus me-1"></i>New</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Code</th><th>Name</th><th>Brand</th><th>Plan</th><th>KYC</th><th>Wallet</th><th>Subdomain</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td className="text-secondary">{p.code}</td>
                <td>{p.name}<div className="small text-secondary">{p.phone}</div></td>
                <td>{p.brand}</td>
                <td><span className="badge text-bg-info">{p.plan}</span></td>
                <td>
                  <span className={`badge text-bg-${p.kyc === "Verified" ? "success" : p.kyc === "Pending" ? "warning" : "danger"}`}>{p.kyc}</span>
                </td>
                <td>{currency(p.wallet)}</td>
                <td><i className="bi bi-link-45deg me-1"></i>{p.subdomain}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-outline-success btn-sm" onClick={() => setKyc(p.code, "Verified")}><i className="bi bi-shield-check"></i></button>
                  <button className="btn btn-outline-warning btn-sm" onClick={() => setKyc(p.code, "Pending")}><i className="bi bi-hourglass-split"></i></button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => setKyc(p.code, "Rejected")}><i className="bi bi-x-circle"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Partner Modal */}
      {showNew && (
        <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => setShowNew(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Partner</h5>
                <button className="btn-close" onClick={() => setShowNew(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label">Name</label><input className="form-control" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Brand</label><input className="form-control" value={form.brand} onChange={(e)=>setForm({...form,brand:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Plan</label>
                    <select className="form-select" value={form.plan} onChange={(e)=>setForm({...form,plan:e.target.value})}>
                      {['Basic','Pro','Gold','Diamond'].map(p=> <option key={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" onClick={()=>setShowNew(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={addPartner}><i className="bi bi-check2 me-1"></i>Create</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageKyc({ partners, setPartners, pushToast }) {
  const list = partners.map((p) => ({ code: p.code, name: p.name, status: p.kyc, submitted: p.kyc !== "Pending" ? nowIso() : null }));
  const update = (code, status) => {
    setPartners((ps) => ps.map((p) => (p.code === code ? { ...p, kyc: status } : p)));
    pushToast("KYC", `${code} marked ${status}`, status === "Verified" ? "success" : status === "Rejected" ? "danger" : "warning");
  };
  return (
    <div className="container-fluid p-3">
      <h5 className="mb-3"><i className="bi bi-shield-check me-2"></i>KYC Review</h5>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light"><tr><th>Code</th><th>Name</th><th>Submitted</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {list.map((k) => (
              <tr key={k.code}>
                <td>{k.code}</td><td>{k.name}</td><td>{k.submitted? new Date(k.submitted).toLocaleString(): "—"}</td>
                <td><span className={`badge text-bg-${k.status==="Verified"?"success":k.status==="Rejected"?"danger":"warning"}`}>{k.status}</span></td>
                <td className="d-flex gap-2">
                  <button className="btn btn-outline-success btn-sm" onClick={()=>update(k.code,'Verified')}><i className="bi bi-check2-circle"></i></button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={()=>update(k.code,'Pending')}><i className="bi bi-hourglass"></i></button>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>update(k.code,'Rejected')}><i className="bi bi-x-octagon"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PageProducts({ products, setProducts, pushToast }) {
  const [q, setQ] = useState("");
  const [form, setForm] = useState({ title: "", sku: "", price: 0, license: "saas", resale: true });
  const [show, setShow] = useState(false);
  const filtered = products.filter((p) => [p.title, p.sku, p.license].join(" ").toLowerCase().includes(q.toLowerCase()));
  const add = () => {
    setProducts((pp) => [{ id: Date.now(), ...form, price: Number(form.price) }, ...pp]);
    setShow(false); setForm({ title: "", sku: "", price: 0, license: "saas", resale: true });
    pushToast("Product added", `${form.title} created`, "success");
  };
  return (
    <div className="container-fluid p-3">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0"><i className="bi bi-bag me-2"></i>Products</h5>
        <div className="ms-auto d-flex gap-2">
          <input className="form-control" placeholder="Search products" value={q} onChange={(e)=>setQ(e.target.value)} style={{maxWidth:320}}/>
          <button className="btn btn-primary" onClick={()=>setShow(true)}><i className="bi bi-plus-lg me-1"></i>Add</button>
        </div>
      </div>
      <div className="row g-3">
        {filtered.map((p)=> (
          <div key={p.id} className="col-md-6 col-xl-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{p.title}</div>
                    <div className="small text-secondary">SKU: {p.sku} • {p.license}</div>
                  </div>
                  <span className={`badge text-bg-${p.resale? 'success':'secondary'}`}>{p.resale? 'Resale On':'Resale Off'}</span>
                </div>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                  <div className="fs-5 fw-bold">{currency(p.price)}</div>
                  <div className="btn-group">
                    <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-outline-danger btn-sm" onClick={()=>setProducts((pp)=>pp.filter(x=>x.id!==p.id))}><i className="bi bi-trash"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {show && (
        <div className="modal d-block" onClick={()=>setShow(false)}>
          <div className="modal-dialog" onClick={(e)=>e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Add Product</h5><button className="btn-close" onClick={()=>setShow(false)}></button></div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label">Title</label><input className="form-control" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">SKU</label><input className="form-control" value={form.sku} onChange={(e)=>setForm({...form,sku:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Price</label><input type="number" className="form-control" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">License</label>
                    <select className="form-select" value={form.license} onChange={(e)=>setForm({...form,license:e.target.value})}>
                      {['saas','service','subscription','one-time'].map(l=> <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div className="col-12 form-check form-switch ms-2">
                    <input className="form-check-input" type="checkbox" checked={form.resale} onChange={(e)=>setForm({...form,resale:e.target.checked})}/>
                    <label className="form-check-label">Resale Allowed</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer"><button className="btn btn-light" onClick={()=>setShow(false)}>Cancel</button><button className="btn btn-primary" onClick={add}>Create</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageSales({ sales, setSales, products, pushToast }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ partner_code: "INDO001", product_id: 1, buyer: "", email: "", amount: 0, commission: 0 });
  const add = () => {
    setSales((ss)=> [ { id: uid("SALE"), ...form, amount: Number(form.amount), commission: Number(form.commission), status: "settled", created_at: nowIso() }, ...ss]);
    setShow(false); pushToast("Sale recorded", `${form.buyer} • ${currency(form.amount)}`, "success");
    setForm({ partner_code: "INDO001", product_id: 1, buyer: "", email: "", amount: 0, commission: 0 });
  };
  return (
    <div className="container-fluid p-3">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0"><i className="bi bi-receipt me-2"></i>Sales</h5>
        <button className="btn btn-primary ms-auto" onClick={()=>setShow(true)}><i className="bi bi-plus-lg me-1"></i>Add Sale</button>
      </div>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light"><tr><th>ID</th><th>Partner</th><th>Product</th><th>Buyer</th><th>Amount</th><th>Commission</th><th>Status</th></tr></thead>
          <tbody>
            {sales.map((s)=> (
              <tr key={s.id}>
                <td className="text-secondary">{s.id.slice(-6)}</td>
                <td>{s.partner_code}</td>
                <td>{products.find(p=>p.id===s.product_id)?.title}</td>
                <td>{s.buyer}<div className="small text-secondary">{s.email}</div></td>
                <td>{currency(s.amount)}</td>
                <td><span className="badge text-bg-success">{currency(s.commission)}</span></td>
                <td><span className="badge text-bg-primary">{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {show && (
        <div className="modal d-block" onClick={()=>setShow(false)}>
          <div className="modal-dialog" onClick={(e)=>e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Record Sale</h5><button className="btn-close" onClick={()=>setShow(false)}></button></div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label">Partner Code</label><input className="form-control" value={form.partner_code} onChange={(e)=>setForm({...form,partner_code:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Product</label>
                    <select className="form-select" value={form.product_id} onChange={(e)=>setForm({...form,product_id:Number(e.target.value)})}>
                      {products.map(p=> <option key={p.id} value={p.id}>{p.title}</option>)}
                    </select>
                  </div>
                  <div className="col-md-6"><label className="form-label">Buyer Name</label><input className="form-control" value={form.buyer} onChange={(e)=>setForm({...form,buyer:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Buyer Email</label><input type="email" className="form-control" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Amount</label><input type="number" className="form-control" value={form.amount} onChange={(e)=>setForm({...form,amount:e.target.value})}/></div>
                  <div className="col-md-6"><label className="form-label">Commission</label><input type="number" className="form-control" value={form.commission} onChange={(e)=>setForm({...form,commission:e.target.value})}/></div>
                </div>
              </div>
              <div className="modal-footer"><button className="btn btn-light" onClick={()=>setShow(false)}>Cancel</button><button className="btn btn-primary" onClick={add}>Save</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageWallet({ partners, sales, setPartners, pushToast }) {
  const total = sales.reduce((a, s) => a + s.commission, 0);
  const [selected, setSelected] = useState(partners[0]?.code || "");

  const credit = () => {
    setPartners((ps)=> ps.map(p => p.code===selected ? { ...p, wallet: p.wallet + 1000 } : p));
    pushToast("Wallet Credit", `${selected} + ${currency(1000)}`, "success");
  };
  const debit = () => {
    setPartners((ps)=> ps.map(p => p.code===selected ? { ...p, wallet: Math.max(0, p.wallet - 1000) } : p));
    pushToast("Wallet Debit", `${selected} - ${currency(1000)}`, "warning");
  };

  return (
    <div className="container-fluid p-3">
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="small text-secondary">Total Commission (All partners)</div>
              <div className="fs-3 fw-bold">{currency(total)}</div>
              <div className="mt-3 input-group">
                <span className="input-group-text">Partner</span>
                <select className="form-select" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                  {partners.map(p=> <option key={p.code}>{p.code}</option>)}
                </select>
              </div>
              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-success" onClick={credit}><i className="bi bi-plus-circle me-1"></i>Credit ₹1,000</button>
                <button className="btn btn-outline-danger" onClick={debit}><i className="bi bi-dash-circle me-1"></i>Debit ₹1,000</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent"><i className="bi bi-wallet2 me-2"></i>Partner Wallets</div>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light"><tr><th>Partner</th><th>Plan</th><th>KYC</th><th>Wallet</th></tr></thead>
                <tbody>
                  {partners.map(p=> (
                    <tr key={p.code}>
                      <td>{p.code}<div className="small text-secondary">{p.name}</div></td>
                      <td><span className="badge text-bg-info">{p.plan}</span></td>
                      <td><span className={`badge text-bg-${p.kyc==="Verified"?"success":p.kyc==="Pending"?"warning":"danger"}`}>{p.kyc}</span></td>
                      <td className="fw-semibold">{currency(p.wallet)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PagePayouts({ partners, pushToast }) {
  const [requests, setRequests] = useState([
    { id: uid("PO"), code: "INDO002", amount: 5000, method: "upi", status: "requested", created_at: nowIso() },
  ]);
  const act = (id, status) => {
    setRequests((r)=> r.map(x => x.id===id ? { ...x, status } : x));
    pushToast("Payout", `Request ${id.slice(-6)} → ${status}`, status==="paid"?"success":"warning");
  };
  return (
    <div className="container-fluid p-3">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0"><i className="bi bi-bank me-2"></i>Payouts</h5>
        <button className="btn btn-outline-primary ms-auto" onClick={()=>setRequests(r=>[{ id: uid("PO"), code: "INDO001", amount: 3000, method: "bank", status: "requested", created_at: nowIso() }, ...r])}><i className="bi bi-send me-1"></i>Simulate Request</button>
      </div>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light"><tr><th>ID</th><th>Partner</th><th>Amount</th><th>Method</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {requests.map(r => (
              <tr key={r.id}>
                <td className="text-secondary">{r.id.slice(-6)}</td>
                <td>{r.code}</td>
                <td>{currency(r.amount)}</td>
                <td className="text-uppercase">{r.method}</td>
                <td><span className={`badge text-bg-${r.status==="paid"?"success":r.status==="rejected"?"danger":"warning"}`}>{r.status}</span></td>
                <td className="d-flex gap-2">
                  <button className="btn btn-outline-success btn-sm" onClick={()=>act(r.id,'paid')}><i className="bi bi-check2"></i></button>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>act(r.id,'rejected')}><i className="bi bi-x"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PageCertificates({ partners }) {
  return (
    <div className="container-fluid p-3">
      <h5 className="mb-3"><i className="bi bi-award me-2"></i>Certificates & IDs</h5>
      <div className="row g-3">
        {partners.map(p => (
          <div key={p.code} className="col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Authorization Certificate</div>
                    <div className="small text-secondary">{p.name} • {p.brand}</div>
                  </div>
                  <span className="badge text-bg-primary">v1.0</span>
                </div>
                <div className="mt-3 p-3 rounded-3 border position-relative" style={{background:"repeating-linear-gradient(135deg,rgba(0,0,0,.03),rgba(0,0,0,.03) 8px,transparent 8px,transparent 16px)"}}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-patch-check-fill fs-3 me-3 text-primary"></i>
                    <div>
                      <div className="fw-bold">Indokona Authorized Reseller</div>
                      <div className="small">Code: {p.code} • KYC: {p.kyc}</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-download me-1"></i>Download PDF</button>
                  <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-upc-scan me-1"></i>Generate ID Card</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function PageLeads({ leads, setLeads, pushToast }) {
  
  const [q, setQ] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", source: "Facebook" });

  const filtered = leads.filter((l) =>
    [l.name, l.phone, l.email, l.source].join(" ").toLowerCase().includes(q.toLowerCase())
  );

  const addLead = () => {
    setLeads((l) => [
      { id: uid("LEAD"), status: "New", ...form, date: nowIso() },
      ...l,
    ]);
    pushToast("Lead Added", `${form.name} added successfully`, "success");
    setShowNew(false);
    setForm({ name: "", phone: "", email: "", source: "Facebook" });
  };

  return (
    <div className="container-fluid p-3">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0"><i className="bi bi-person-lines-fill me-2"></i>Leads</h5>
        <div className="ms-auto d-flex gap-2">
          <input
            className="form-control"
            placeholder="Search leads"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ maxWidth: 320 }}
          />
          <button className="btn btn-primary" onClick={() => setShowNew(true)}>
            <i className="bi bi-plus-circle me-1"></i>New Lead
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th><th>Phone</th><th>Email</th><th>Status</th><th>Source</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.phone}</td>
                <td>{l.email}</td>
                <td><span className="badge text-bg-info">{l.status}</span></td>
                <td>{l.source}</td>
                <td className="small text-secondary">{l.date.slice(0,10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showNew && (
        <div className="modal d-block" onClick={() => setShowNew(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Lead</h5>
                <button className="btn-close" onClick={() => setShowNew(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row g-2">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input className="form-control" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input className="form-control" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input className="form-control" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Source</label>
                    <select className="form-select" value={form.source} onChange={(e)=>setForm({...form,source:e.target.value})}>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>WhatsApp</option>
                      <option>Website</option>
                      <option>Referral</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" onClick={()=>setShowNew(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={addLead}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function PageSettings({ theme, setTheme }) {
  return (
    <div className="container-fluid p-3">
      <h5 className="mb-3"><i className="bi bi-gear me-2"></i>Settings</h5>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">Appearance</div>
            <div className="card-body">
              <div className="form-check form-switch">
                <input id="darkSwitch" className="form-check-input" type="checkbox" checked={theme==='dark'} onChange={(e)=> setTheme(e.target.checked? 'dark':'light')} />
                <label className="form-check-label" htmlFor="darkSwitch">Dark Mode</label>
              </div>
              <div className="mt-3 small text-secondary">Dark / Light uses Bootstrap 5 CSS variables via <code>data-bs-theme</code>.</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent">Company</div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6"><label className="form-label">Brand Name</label><input className="form-control" defaultValue="Indokona Digital Store"/></div>
                <div className="col-md-6"><label className="form-label">Primary Color</label><input type="color" className="form-control form-control-color" defaultValue="#0d6efd"/></div>
                <div className="col-12"><label className="form-label">Support Email</label><input type="email" className="form-control" defaultValue="support@indokona.in"/></div>
              </div>
              <div className="mt-3"><button className="btn btn-primary"><i className="bi bi-save me-1"></i>Save</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Root App ----------
export default function IndokonaCRMApp() {
  const { theme, setTheme } = useTheme();
  const { push, Toasts } = useToasts();

  const [current, setCurrent] = useState("dashboard");
  const [partners, setPartners] = useState(seedPartners);
  const [products, setProducts] = useState(seedProducts);
  const [sales, setSales] = useState(seedSales);
  const [leads, setLeads] = useState(seedLeads);


  const wallet = useMemo(() => partners.reduce((a, p) => a + (p.wallet || 0), 0), [partners]);

  useEffect(() => {
    // Simulate welcome toast
    push("Welcome", "Indokona Partner CRM is ready.", "primary");
  }, []); // eslint-disable-line

  return (
    <>
   
    <div className="d-flex" style={{ minHeight: "100vh", background: theme==='dark' ? "radial-gradient(1200px 600px at -10% -10%, rgba(111,66,193,.25), transparent), radial-gradient(900px 600px at 110% 10%, rgba(13,110,253,.18), transparent)" : "radial-gradient(1000px 500px at -10% -10%, rgba(13,110,253,.08), transparent)" }}>
      <Sidebar current={current} setCurrent={setCurrent} />
      <main className="flex-grow-1">
        <Topbar theme={theme} setTheme={setTheme} onSearch={(v)=>{/* future global search */}} />

        {current === "dashboard" && <PageDashboard partners={partners} sales={sales} wallet={wallet} products={products} />}
        {current === "partners" && <PagePartners partners={partners} setPartners={setPartners} pushToast={push} />}
        {current === "kyc" && <PageKyc partners={partners} setPartners={setPartners} pushToast={push} />}
        {current === "products" && <PageProducts products={products} setProducts={setProducts} pushToast={push} />}
        {current === "sales" && <PageSales sales={sales} setSales={setSales} products={products} pushToast={push} />}
        {current === "wallet" && <PageWallet partners={partners} sales={sales} setPartners={setPartners} pushToast={push} />}
        {current === "payouts" && <PagePayouts partners={partners} pushToast={push} />}
        {current === "certificates" && <PageCertificates partners={partners} />}
        {current === "settings" && <PageSettings theme={theme} setTheme={setTheme} />}
        {current === "leads" && <PageLeads leads={leads} setLeads={setLeads} pushToast={push} />}


        <footer className="text-center small text-secondary py-4 border-top">© {new Date().getFullYear()} Indokona Digital Store • All rights reserved</footer>
      </main>
      <Toasts />
    </div>
    </>
  );
}
