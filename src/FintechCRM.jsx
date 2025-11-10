import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function CRMLayoutPremium() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const userName = "Partner";

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Partners", icon: "🤝" },
    { name: "Commission", icon: "💹" },
    { name: "Wallet", icon: "💰" },
    { name: "Reports", icon: "📊" },
    { name: "Settings", icon: "⚙️" },
  ];

  const gradientBg =
    "linear-gradient(135deg, #FFD700 0%, #FFB700 30%, #D4AF37 70%, #B8860B 100%)";

  const sidebarStyle = {
    width: "270px",
    background: `linear-gradient(180deg, #1a1a1a 0%, #2b2b2b 100%)`,
    color: "#fff",
    boxShadow: "2px 0 10px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #444",
  };

  const menuItemStyle = (active) => ({
    cursor: "pointer",
    borderRadius: "10px",
    padding: "12px 16px",
    margin: "6px 10px",
    background: active ? gradientBg : "transparent",
    color: active ? "#000" : "#fff",
    fontWeight: active ? "700" : "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    transition: "0.3s",
    boxShadow: active ? "0 0 10px rgba(255,215,0,0.4)" : "none",
  });

  const topbarStyle = {
    background: gradientBg,
    color: "#1a1a1a",
    padding: "12px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    boxShadow: "0 3px 10px rgba(255,215,0,0.4)",
  };

  const cardStyle = {
    background: `linear-gradient(145deg, #1c1c1c, #2b2b2b)`,
    border: "1px solid #3a3a3a",
    borderRadius: "16px",
    color: "#FFD700",
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
  };

  const dashboardData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={cardStyle}><h5>💰 Wallet Balance</h5><h2>₹25,450.00</h2><small>Updated just now</small></div>
              <div style={cardStyle}><h5>📊 Total Sales</h5><h2>₹1,45,800</h2><small>This Month</small></div>
              <div style={cardStyle}><h5>🤝 Active Partners</h5><h2>128</h2><small>Across all levels</small></div>
            </div>
            <div style={{ ...cardStyle, height: 300 }}>
              <h5>📈 Sales Growth Chart</h5>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={dashboardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#FFD700" strokeWidth={2} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case "Partners":
        return (
          <div style={{ ...cardStyle, color: "#fff" }}>
            <h4>🤝 Partner Management</h4>
            <p style={{ color: "#ccc" }}>View, edit, and manage your partners below:</p>
            <table style={{ width: '100%', color: '#FFD700' }}>
              <thead>
                <tr><th>Name</th><th>Plan</th><th>Status</th><th>Commission</th></tr>
              </thead>
              <tbody>
                <tr><td>Rahul Verma</td><td>Gold</td><td>Active</td><td>20%</td></tr>
                <tr><td>Neha Sharma</td><td>Pro</td><td>Pending</td><td>15%</td></tr>
              </tbody>
            </table>
          </div>
        );
      case "Commission":
        return (
          <div style={{ ...cardStyle, color: '#fff' }}>
            <h4>💹 Commission Manager</h4>
            <p style={{ color: '#ccc' }}>Set partner commission rates and downline rules:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label>Partner Name</label>
                <input style={{ width: '100%', borderRadius: '8px', padding: '8px' }} placeholder="Enter name" />
              </div>
              <div>
                <label>Commission %</label>
                <input type="number" style={{ width: '100%', borderRadius: '8px', padding: '8px' }} placeholder="Enter %" />
              </div>
            </div>
            <button style={{ marginTop: '15px', background: gradientBg, border: 'none', padding: '10px 15px', borderRadius: '8px', fontWeight: '600' }}>Save Commission</button>
          </div>
        );
      case "Wallet":
        return (
          <div style={{ ...cardStyle, color: '#fff' }}>
            <h4>💰 Wallet & Transactions</h4>
            <p style={{ color: '#ccc' }}>Your wallet ledger:</p>
            <ul>
              <li>+ ₹2,000 credited for sale</li>
              <li>- ₹500 payout</li>
              <li>+ ₹1,200 commission from downline</li>
            </ul>
          </div>
        );
      case "Reports":
        return (
          <div style={{ ...cardStyle, color: '#fff' }}>
            <h4>📊 Reports & Analytics</h4>
            <p style={{ color: '#ccc' }}>Performance reports with workflow insights:</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div><h5>Sales</h5><p>₹1,45,800</p></div>
              <div><h5>Commission</h5><p>₹32,400</p></div>
              <div><h5>Partners</h5><p>128</p></div>
            </div>
          </div>
        );
      case "Settings":
        return (
          <div style={{ ...cardStyle, color: '#fff' }}>
            <h4>⚙️ Settings</h4>
            <p style={{ color: '#ccc' }}>Manage your account preferences and CRM configuration here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0f0f0f' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '20px 16px', borderBottom: '1px solid #333', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'serif', background: gradientBg, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}>Indokona CRM</h3>
          <small style={{ color: '#bbb' }}>Premium Partner Network</small>
        </div>

        <ul style={{ listStyle: 'none', padding: '20px 0', flexGrow: 1 }}>
          {menuItems.map((item) => (
            <li key={item.name} onClick={() => setActivePage(item.name)} style={menuItemStyle(activePage === item.name)}>
              <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>

        <div style={{ padding: '20px', borderTop: '1px solid #333' }}>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: gradientBg, fontWeight: '700' }}>Logout 🔓</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: gradientBg, fontWeight: '700' }}>Login 🔑</button>
          )}
        </div>
      </aside>

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={topbarStyle}>
          <div style={{ fontSize: '1.4rem' }}>{menuItems.find((i) => i.name === activePage)?.icon} {activePage}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>Welcome, {userName} 🌟</span>
            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid gold' }} />
          </div>
        </div>

        <div style={{ padding: '30px', overflowY: 'auto' }}>{renderContent()}</div>
      </main>
    </div>
  );
}
