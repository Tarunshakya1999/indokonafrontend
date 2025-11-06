import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useApi } from "../api/ApiProvider";

export default function Topbar() {
  const { token, theme, setTheme } = useApi();
  const [showSettings, setShowSettings] = useState(false);

  const menus = ["Dashboard","Products","Orders","Leads","Wallets","Commissions","HotDeals"];

  return (
    <nav className="navbar navbar-expand-lg border-bottom px-3 sticky-top bg-body">
      <div className="container-fluid">
        <span className="navbar-brand fw-semibold">Indokona CRM</span>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menus.map(name => (
              <li key={name} className="nav-item">
                <NavLink className="nav-link" to={`/${name.toLowerCase()}`}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <span className={`badge ${token ? 'text-bg-success' : 'text-bg-warning'}`}>
            {token ? "Auth OK" : "No Token"}
          </span>

          <div className="form-check form-switch ms-2">
            <input className="form-check-input"
              type="checkbox"
              checked={theme === 'dark'}
              onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </div>

          <button className="btn btn-outline-primary btn-sm ms-2"
            onClick={() => setShowSettings(true)}>
            ⚙
          </button>
        </div>
      </div>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </nav>
  );
}

function SettingsModal({ onClose }) {
  const { baseURL, setBaseURL, token, setToken } = useApi();
  const [url, setUrl] = useState(baseURL);
  const [tok, setTok] = useState(token);

  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5>API Settings</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input className="form-control mb-2" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Base URL"/>
            <input className="form-control" value={tok} onChange={(e)=>setTok(e.target.value)} placeholder="Token"/>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary"
              onClick={()=>{ setBaseURL(url); setToken(tok); onClose(); }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
