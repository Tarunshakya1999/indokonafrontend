import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function CRMLayoutPremium() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 🔥 AUTO CREDIT / DEBIT AMOUNTS & USERS
  const creditOptions = [5999, 9999, 14999, 24999, 45999, 79999];

  // 50 UNIQUE CREDITORS (syntax fixed)
  const creditorNames = [
    "Rohit", "Sanya", "Vivek", "Adarsh", "Nikita", "Manoj", "Sahil", "Tanya", "Deepak", "Ritu",
    "Pankaj", "Saurabh", "Yash", "Priya", "Gopal", "Rohini", "Kabir", "Megha", "Arjun", "Sneha",
    "Harsh", "Kavita", "Roshan", "Jyoti", "Karan", "Monu", "Sameer", "Yuvraj", "Anjali", "Dev",
    "Farhan", "Preeti", "Naveen", "Komal", "Rishi", "Payal", "Vijay", "Simran", "Aman", "Shobhit",
    "Reema", "Lavanya", "Imran", "Arti", "Zoya", "Parth", "Mahesh", "Namrata", "Jatin", "Tanvi"
  ];

  const debitOptions = [1999, 2999, 4999, 7299, 10499, 13499, 24999];
  const debitUsers = ["Sameer", "Manisha", "Vipin", "Karan", "Krishna", "Monika"];

  // Live values
  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);
  const [wallet, setWallet] = useState(26421);
  const [sales, setSales] = useState(148558);
  const [partners, setPartners] = useState(134);

  // Credit/Debit visual state
  const [lastCredit, setLastCredit] = useState<{ amt: number; creditor: string } | null>(null);
  const [floatingCredit, setFloatingCredit] = useState<string | null>(null);
  const [walletGlow, setWalletGlow] = useState(false);

  const [lastDebit, setLastDebit] = useState<{ amt: number; user: string } | null>(null);
  const [floatingDebit, setFloatingDebit] = useState<string | null>(null);
  const [walletRedGlow, setWalletRedGlow] = useState(false);

  // Commission filters & state
  const [commissionPreset, setCommissionPreset] = useState<"all" | "today" | "week" | "month">("all");
  const [commissionFrom, setCommissionFrom] = useState<string>("");
  const [commissionTo, setCommissionTo] = useState<string>("");
  const [commissionDebitor, setCommissionDebitor] = useState<string>("all");

  // ⏰ LIVE DATE & TIME
  const [dateTime, setDateTime] = useState(new Date());

  // small regular increments to feel live (non-critical)
  useEffect(() => {
    const inc = setInterval(() => {
      setWallet((w) => w + Math.floor(Math.random() * 10));
      setSales((s) => s + Math.floor(Math.random() * 20));
      setPartners((p) => p + (Math.random() > 0.995 ? 1 : 0));
      setDateTime(new Date());
    }, 3000);
    return () => clearInterval(inc);
  }, []);

  // AUTO CREDIT + FLOATING + GLOW + CREDITOR NAME
  useEffect(() => {
    const autoCredit = setInterval(() => {
      const amt = creditOptions[Math.floor(Math.random() * creditOptions.length)];
      const creditor = creditorNames[Math.floor(Math.random() * creditorNames.length)];

      setWallet((w) => w + amt);
      setSales((s) => s + amt);
      setLastCredit({ amt, creditor });

      setTransactionHistory((h) => [
        { type: "credit", amt, creditor, time: new Date().toLocaleString(), ts: new Date().toISOString() },
        ...h,
      ]);

      setFloatingCredit(`+ ₹${amt.toLocaleString()} from ${creditor}`);
      setWalletGlow(true);

      setTimeout(() => setFloatingCredit(null), 2000);
      setTimeout(() => setWalletGlow(false), 600);
    }, 7000);

    return () => clearInterval(autoCredit);
  }, []);

  // AUTO DEBIT
  useEffect(() => {
    const autoDebit = setInterval(() => {
      const amt = debitOptions[Math.floor(Math.random() * debitOptions.length)];
      const user = debitUsers[Math.floor(Math.random() * debitUsers.length)];

      setWallet((w) => w - amt);
      setLastDebit({ amt, user });

      setTransactionHistory((h) => [
        { type: "debit", amt, user, time: new Date().toLocaleString(), ts: new Date().toISOString() },
        ...h,
      ]);

      setFloatingDebit(`- ₹${amt.toLocaleString()} to ${user}`);
      setWalletRedGlow(true);

      setTimeout(() => setFloatingDebit(null), 2200);
      setTimeout(() => setWalletRedGlow(false), 600);
    }, 9000);

    return () => clearInterval(autoDebit);
  }, []);

  // AUTO PARTNER COUNTER
  useEffect(() => {
    const partnerPulse = setInterval(() => {
      const randomCounts = [19, 29, 26, 41, 79, 67, 56, 45, 72, 87, 99, 151];
      const rand = randomCounts[Math.floor(Math.random() * randomCounts.length)];
      const newVal = Math.min(999, Math.max(250, partners + (Math.random() > 0.5 ? rand : -rand)));
      setPartners(newVal);
    }, 10000);

    return () => clearInterval(partnerPulse);
  }, [partners]);

  const userName = "Partner";

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Partners", icon: "🤝" },
    { name: "Commission", icon: "💹" },
    { name: "Wallet", icon: "💰" },
    { name: "Loan", icon: "🏦" },
    { name: "Credit Card", icon: "💳" },
    { name: "Saving Account", icon: "💸" },
    { name: "Dmate Account", icon: "📁" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Reports", icon: "📊" },
    { name: "Settings", icon: "⚙️" },
  ];

  const gradientBg = "linear-gradient(135deg, #FFD700 0%, #FFB700 30%, #D4AF37 70%, #B8860B 100%)";

  const sidebarStyle: React.CSSProperties = {
    width: "270px",
    background: "linear-gradient(180deg, #1a1a1a 0%, #2b2b2b 100%)",
    color: "#fff",
    boxShadow: "2px 0 10px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #444",
  };

  const cardStyle: React.CSSProperties = {
    background: "linear-gradient(145deg, #1c1c1c, #2b2b2b)",
    border: "1px solid #3a3a3a",
    borderRadius: 16,
    color: "#FFD700",
    padding: 25,
    boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
  };

  const dashboardData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
  ];

  const renderDashboard = () => (
    <>
      {/* HEADER */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #FFD70022, #B8860B22)",
          padding: "14px 25px",
          borderRadius: 14,
          marginBottom: 25,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFD700",
          fontWeight: 700,
          fontSize: "1.1rem",
          boxShadow: "0 4px 18px rgba(255,215,0,0.18)",
        }}
      >
        <div>
          <div>Welcome back, {userName} 👋</div>
          <div style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>
            {dateTime.toLocaleString()}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: "0.85rem", color: "#e5e7eb" }}>
            Active Page: {activePage}
          </span>
          <button
            onClick={() => setIsLoggedIn((v) => !v)}
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,215,0,0.6)",
              background: gradientBg,
              color: "#1b1300",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* CARDS ROW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginBottom: 24,
        }}
      >
        {/* WALLET CARD PREMIUM */}
        <div
          style={{
            ...cardStyle,
            background:
              "radial-gradient(circle at top left, rgba(255,215,0,0.16), rgba(0,0,0,0.95))",
            border: "1px solid rgba(255,215,0,0.55)",
            boxShadow: walletRedGlow
              ? "0 0 30px rgba(255,68,68,0.7), 0 0 45px rgba(0,0,0,0.9)"
              : walletGlow
              ? "0 0 30px rgba(0,255,191,0.7), 0 0 45px rgba(0,0,0,0.9)"
              : "0 0 24px rgba(0,0,0,0.9)",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Shine sweep */}
          <div
            style={{
              position: "absolute",
              top: -40,
              left: -120,
              width: 160,
              height: 160,
              background:
                "linear-gradient(130deg, rgba(255,255,255,0.7), rgba(255,255,255,0))",
              filter: "blur(6px)",
              opacity: 0,
              transform: "translateX(-140%) rotate(25deg)",
              animation: "shineSweep 3.6s linear infinite",
              pointerEvents: "none",
            }}
          />

          {/* Particles */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 24,
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "rgba(255,215,0,0.9)",
                boxShadow: "0 0 16px rgba(255,215,0,1)",
                animation: "particleFloat 6s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 14,
                right: 30,
                width: 5,
                height: 5,
                borderRadius: 999,
                background: "rgba(0,255,191,0.9)",
                boxShadow: "0 0 16px rgba(0,255,191,1)",
                animation: "particleFloat 7s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 40,
                right: 60,
                width: 4,
                height: 4,
                borderRadius: 999,
                background: "rgba(148,163,184,0.9)",
                boxShadow: "0 0 10px rgba(148,163,184,1)",
                animation: "particleFloat 8s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            />
          </div>

          {/* Floating badges */}
          {floatingCredit && (
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 12,
                padding: "4px 10px",
                borderRadius: 999,
                background: "rgba(22,163,74,0.2)",
                border: "1px solid rgba(34,197,94,0.8)",
                color: "#bbf7d0",
                fontSize: "0.7rem",
                animation: "floatUp 2s ease-out",
              }}
            >
              {floatingCredit}
            </div>
          )}
          {floatingDebit && (
            <div
              style={{
                position: "absolute",
                top: 32,
                right: 16,
                padding: "4px 10px",
                borderRadius: 999,
                background: "rgba(239,68,68,0.2)",
                border: "1px solid rgba(248,113,113,0.8)",
                color: "#fecaca",
                fontSize: "0.7rem",
                animation: "floatUpDown 2.2s ease-out",
              }}
            >
              {floatingDebit}
            </div>
          )}

          <h5
            style={{
              color: "#FFD700",
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            💰 Premium Wallet Balance
          </h5>

          <div style={{ position: "relative", width: "100%", marginTop: 10 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.15), rgba(255,255,255,0))",
                borderRadius: 14,
                transform: "rotate(5deg)",
                pointerEvents: "none",
              }}
            />

            <h1
              style={{
                color: walletRedGlow ? "#ff3b3b" : "#00ffbf",
                fontSize: "2.6rem",
                fontWeight: 900,
                textShadow: walletRedGlow
                  ? "0 0 25px #ff1a1a, 0 0 45px #ff0000"
                  : "0 0 25px #00ffbf, 0 0 45px #00ffaa",
                transition: "0.3s",
                padding: "6px 0",
              }}
            >
              ₹{wallet.toLocaleString()}
            </h1>
          </div>

          <div style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>
            {lastCredit && (
              <div>
                Last credit: ₹{lastCredit.amt.toLocaleString()} from {lastCredit.creditor}
              </div>
            )}
            {lastDebit && (
              <div>
                Last debit: ₹{lastDebit.amt.toLocaleString()} to {lastDebit.user}
              </div>
            )}
          </div>
        </div>

        {/* SALES CARD */}
        <div style={cardStyle}>
          <h5 style={{ marginBottom: 8, fontSize: "0.95rem" }}>📊 Total Sales</h5>
          {lastCredit && (
            <div
              style={{
                color: "#00ff99",
                fontWeight: 700,
                marginBottom: 6,
                fontSize: "1rem",
              }}
            >
              CREDIT + ₹{lastCredit.amt.toLocaleString()} from {lastCredit.creditor}
            </div>
          )}
          <h2 style={{ margin: 0, fontSize: "2rem" }}>₹{sales.toLocaleString()}</h2>
          <p style={{ fontSize: "0.8rem", color: "#d1d5db", marginTop: 6 }}>
            Live credit inflow driven by your partners.
          </p>
        </div>

        {/* PARTNERS CARD */}
        <div style={cardStyle}>
          <h5 style={{ marginBottom: 8, fontSize: "0.95rem" }}>🤝 Active Partners</h5>
          <h2 style={{ margin: 0, fontSize: "2rem" }}>{partners}</h2>
          <p style={{ fontSize: "0.8rem", color: "#d1d5db", marginTop: 6 }}>
            Number of verified Indokona partners currently active.
          </p>
        </div>
      </div>

      {/* CHART + RECENT TRANSACTIONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
          gap: 20,
        }}
      >
        <div style={cardStyle}>
          <h5 style={{ marginBottom: 10, fontSize: "0.95rem" }}>📈 Sales Trend</h5>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  background: "#111827",
                  border: "1px solid #4b5563",
                  fontSize: "0.8rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#facc15"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={cardStyle}>
          <h5 style={{ marginBottom: 10, fontSize: "0.95rem" }}>📜 Recent Transactions</h5>
          {transactionHistory.length === 0 ? (
            <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              Auto engine warming up... new credits and debits will appear here.
            </p>
          ) : (
            <div style={{ maxHeight: 220, overflowY: "auto" }}>
              {transactionHistory.slice(0, 10).map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px 0",
                    borderBottom: "1px solid #374151",
                    fontSize: "0.8rem",
                    color: "#e5e7eb",
                  }}
                >
                  <span>
                    {t.type === "credit" ? "🟢" : "🔴"} {t.type.toUpperCase()}
                  </span>
                  <span>
                    ₹{t.amt.toLocaleString()} {t.creditor ? `from ${t.creditor}` : t.user ? `to ${t.user}` : ""}
                  </span>
                  <span style={{ color: "#9ca3af" }}>{t.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const renderWallet = () => (
    <div
      style={{
        ...cardStyle,
        color: "#fff",
        background: "radial-gradient(circle at top, #1e1e1e, #050505)",
        border: "1px solid rgba(255,215,0,0.35)",
        boxShadow: "0 0 28px rgba(0,0,0,0.95), 0 0 32px rgba(255,215,0,0.08)",
        padding: 26,
      }}
    >
      <h4 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 10 }}>
        💰 Wallet & Transactions
      </h4>
      <p style={{ color: "#ccc", marginBottom: 14 }}>
        Live wallet ledger (auto-updated from credit and debit engine).
      </p>
      <div style={{ marginBottom: 18 }}>
        <strong>Current Balance:</strong> ₹{wallet.toLocaleString()}
      </div>
      {transactionHistory.length === 0 ? (
        <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
          Engine starting... wait for a few seconds to see live movements.
        </p>
      ) : (
        <div style={{ maxHeight: 420, overflowY: "auto" }}>
          {transactionHistory.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                marginBottom: 8,
                borderRadius: 14,
                background:
                  "linear-gradient(135deg, rgba(255,215,0,0.06), rgba(0,0,0,0.6))",
                border: "1px solid rgba(255,215,0,0.25)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: "100%",
                  borderRadius: 6,
                  marginRight: 14,
                  background: t.type === "credit" ? "#00ff99" : "#ff4444",
                  boxShadow:
                    t.type === "credit"
                      ? "0 0 12px #00ff99"
                      : "0 0 12px #ff4444",
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: t.type === "credit" ? "#00ff99" : "#ff5555",
                  }}
                >
                  {t.type === "credit" ? "+" : "-"} ₹{t.amt.toLocaleString()}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>
                  {t.type === "credit" && t.creditor && `From: ${t.creditor}`}
                  {t.type === "debit" && t.user && `To: ${t.user}`}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: 2 }}>
                  {t.time}
                </div>
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  padding: 6,
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.3)",
                }}
              >
                {t.type === "credit" ? "🟢" : "🔴"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCommission = () => {
    // Prepare filtered debit transactions
    const debitTx = transactionHistory.filter((t) => t.type === "debit");

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const inPresetRange = (d: Date) => {
      switch (commissionPreset) {
        case "today":
          return d >= startOfToday;
        case "week":
          return d >= startOfWeek;
        case "month":
          return d >= startOfMonth;
        default:
          return true;
      }
    };

    const inCustomRange = (d: Date) => {
      if (!commissionFrom && !commissionTo) return true;
      let ok = true;
      if (commissionFrom) {
        const from = new Date(commissionFrom + "T00:00:00");
        ok = ok && d >= from;
      }
      if (commissionTo) {
        const to = new Date(commissionTo + "T23:59:59");
        ok = ok && d <= to;
      }
      return ok;
    };

    const filteredDebits = debitTx.filter((t) => {
      const ts = t.ts ? new Date(t.ts) : new Date(t.time);
      if (commissionDebitor !== "all" && t.user !== commissionDebitor) return false;
      if (!inPresetRange(ts)) return false;
      if (!inCustomRange(ts)) return false;
      return true;
    });

    const totals = filteredDebits.reduce(
      (acc: { totalAmt: number; totalTds: number; totalNet: number }, t: any) => {
        const tds = Math.floor(t.amt * 0.05);
        const net = t.amt - tds;
        acc.totalAmt += t.amt;
        acc.totalTds += tds;
        acc.totalNet += net;
        return acc;
      },
      { totalAmt: 0, totalTds: 0, totalNet: 0 }
    );

    const uniqueDebitors = Array.from(new Set(debitTx.map((t: any) => t.user).filter(Boolean)));

    const handleExportExcel = () => {
      if (filteredDebits.length === 0) return;
      const header = ["Debitor", "Amount", "TDS 5%", "Net Commission", "Time"];
      const rows = filteredDebits.map((t: any) => {
        const tds = Math.floor(t.amt * 0.05);
        const net = t.amt - tds;
        return [t.user || "N/A", t.amt, tds, net, t.time];
      });
      const csv = [header, ...rows]
        .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
        .join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "commission-report.csv";
      a.click();
      URL.revokeObjectURL(url);
    };

    const handleExportPdf = () => {
      if (filteredDebits.length === 0) return;
      const win = window.open("", "_blank");
      if (!win) return;
      const rowsHtml = filteredDebits
        .map((t: any) => {
          const tds = Math.floor(t.amt * 0.05);
          const net = t.amt - tds;
          return `<tr>
              <td>${t.user || "N/A"}</td>
              <td>₹${t.amt.toLocaleString()}</td>
              <td>₹${tds.toLocaleString()}</td>
              <td>₹${net.toLocaleString()}</td>
              <td>${t.time}</td>
            </tr>`;
        })
        .join("");

      win.document.write(`<!DOCTYPE html>
        <html>
          <head>
            <title>Commission Report</title>
            <style>
              body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; background:#020617; color:#f9fafb; }
              h1 { color:#facc15; }
              table { width:100%; border-collapse: collapse; margin-top:16px; }
              th, td { border:1px solid #4b5563; padding:8px 10px; font-size:12px; }
              th { background:#111827; color:#facc15; }
              tr:nth-child(even) { background:#020617; }
              tr:nth-child(odd) { background:#030712; }
            </style>
          </head>
          <body>
            <h1>Indokona Commission Report (5% TDS)</h1>
            <p>Generated on ${new Date().toLocaleString()}</p>
            <table>
              <thead>
                <tr>
                  <th>Debitor</th>
                  <th>Amount</th>
                  <th>TDS 5%</th>
                  <th>Net Commission</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </body>
        </html>`);
      win.document.close();
      win.focus();
      win.print();
    };

    const handlePayout = () => {
      if (totals.totalNet <= 0 || filteredDebits.length === 0) return;
      // Auto debit wallet with total net commission as payout
      setWallet((w) => w - totals.totalNet);
      setTransactionHistory((h) => [
        {
          type: "debit",
          amt: totals.totalNet,
          user: "Commission Payout",
          time: new Date().toLocaleString(),
          ts: new Date().toISOString(),
        },
        ...h,
      ]);
    };

    return (
      <div style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>💹 Commission (5% TDS Applied)</h3>
        <p style={{ fontSize: "0.9rem", color: "#d1d5db" }}>
          All debit transactions with TDS deduction and net commission.
        </p>

        {/* Summary strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
            gap: 10,
            marginTop: 12,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(248,250,252,0.08)",
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "#9ca3af" }}>Total Debit</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹{totals.totalAmt.toLocaleString()}</div>
          </div>
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(30,64,175,0.9)",
              border: "1px solid rgba(191,219,254,0.4)",
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "#dbeafe" }}>Total TDS 5%</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹{totals.totalTds.toLocaleString()}</div>
          </div>
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(22,163,74,0.95)",
              border: "1px solid rgba(187,247,208,0.9)",
              color: "#022c22",
            }}
          >
            <div style={{ fontSize: "0.7rem", opacity: 0.9 }}>Net Commission (Payable)</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>₹{totals.totalNet.toLocaleString()}</div>
          </div>
        </div>

        {/* Filters row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {["all", "today", "week", "month"].map((key) => {
              const labels: any = {
                all: "All",
                today: "Today",
                week: "This Week",
                month: "This Month",
              };
              const active = commissionPreset === key;
              return (
                <button
                  key={key}
                  onClick={() => setCommissionPreset(key as any)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    border: active ? "1px solid #facc15" : "1px solid #4b5563",
                    background: active ? "rgba(250,204,21,0.15)" : "transparent",
                    color: active ? "#facc15" : "#e5e7eb",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <input
              type="date"
              value={commissionFrom}
              onChange={(e) => setCommissionFrom(e.target.value)}
              style={{
                padding: "4px 8px",
                borderRadius: 8,
                border: "1px solid #4b5563",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: "0.75rem",
              }}
            />
            <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>to</span>
            <input
              type="date"
              value={commissionTo}
              onChange={(e) => setCommissionTo(e.target.value)}
              style={{
                padding: "4px 8px",
                borderRadius: 8,
                border: "1px solid #4b5563",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: "0.75rem",
              }}
            />
          </div>

          <div>
            <select
              value={commissionDebitor}
              onChange={(e) => setCommissionDebitor(e.target.value)}
              style={{
                padding: "5px 8px",
                borderRadius: 8,
                border: "1px solid #4b5563",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: "0.75rem",
              }}
            >
              <option value="all">All Debitors</option>
              {uniqueDebitors.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            <button
              type="button"
              onClick={handleExportPdf}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid #facc15",
                background: "linear-gradient(135deg,#facc15,#eab308)",
                color: "#1f2937",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Export PDF
            </button>
            <button
              type="button"
              onClick={handleExportExcel}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid #22c55e",
                background: "linear-gradient(135deg,#22c55e,#16a34a)",
                color: "#022c22",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Export Excel
            </button>
            <button
              type="button"
              onClick={handlePayout}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid #f97316",
                background: "linear-gradient(135deg,#fb923c,#ea580c)",
                color: "#1f2937",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: totals.totalNet > 0 ? "pointer" : "not-allowed",
                opacity: totals.totalNet > 0 ? 1 : 0.5,
              }}
            >
              Release Payout
            </button>
          </div>
        </div>

        {/* List */}
        <div style={{ maxHeight: 360, overflowY: "auto", marginTop: 8 }}>
          {filteredDebits.length === 0 ? (
            <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              No debit transactions match the selected filters.
            </p>
          ) : (
            filteredDebits.map((t: any, i: number) => {
              const tds = Math.floor(t.amt * 0.05);
              const net = t.amt - tds;
              return (
                <div
                  key={i}
                  style={{
                    padding: "10px 12px",
                    marginBottom: 10,
                    borderRadius: 14,
                    background:
                      "linear-gradient(135deg, rgba(255,215,0,0.06), rgba(0,0,0,0.6))",
                    border: "1px solid rgba(255,215,0,0.25)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#ff4444",
                    }}
                  >
                    Debit: ₹{t.amt.toLocaleString()} (To {t.user})
                  </div>
                  <div
                    style={{ fontSize: "0.85rem", color: "#facc15" }}
                  >
                    TDS 5%: -₹{tds.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#00ff99",
                      fontWeight: 700,
                    }}
                  >
                    Net Commission: ₹{net.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#9ca3af",
                      marginTop: 4,
                    }}
                  >
                    {t.time}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  const renderPlaceholder = (label: string) => (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0 }}>{label}</h3>
      <p style={{ fontSize: "0.9rem", color: "#d1d5db" }}>
        This section is reserved for Indokona premium module: {label}. UI and backend
        integrations can be plugged in here.
      </p>
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return renderDashboard();
      case "Wallet":
        return renderWallet();
      case "Partners":
        return renderPlaceholder("Partners");
      case "Commission":
        return renderCommission();
      case "Loan":
        return renderPlaceholder("Loan");
      case "Credit Card":
        return renderPlaceholder("Credit Card");
      case "Saving Account":
        return renderPlaceholder("Saving Account");
      case "Dmate Account":
        return renderPlaceholder("Dmate Account");
      case "Insurance":
        return renderPlaceholder("Insurance");
      case "Reports":
        return renderPlaceholder("Reports");
      case "Settings":
        return renderPlaceholder("Settings");
      default:
        return renderDashboard();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "#f9fafb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* SIDEBAR */}
      <aside style={sidebarStyle}>
        <div
          style={{
            padding: "18px 20px 16px",
            borderBottom: "1px solid #3f3f46",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: gradientBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#1b1300",
              fontSize: "1.1rem",
            }}
          >
            IC
          </div>
          <div>
            <div style={{ fontWeight: 800, letterSpacing: 0.5 }}>Indokona CRM</div>
            <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Premium Partner Panel</div>
          </div>
        </div>

        <nav style={{ padding: "14px 10px", flex: 1, overflowY: "auto" }}>
          {menuItems.map((item) => {
            const active = activePage === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: "none",
                  outline: "none",
                  background: active ? "rgba(250,204,21,0.12)" : "transparent",
                  color: active ? "#facc15" : "#e5e7eb",
                  padding: "8px 10px",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div
          style={{
            padding: 12,
            borderTop: "1px solid #3f3f46",
            fontSize: "0.75rem",
            color: "#9ca3af",
          }}
        >
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: 24,
          overflowY: "auto",
        }}
      >
        {renderContent()}
        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-18px); opacity: 0; }
          }
          @keyframes floatUpDown {
            0% { transform: translateY(0); opacity: 1; }
            40% { transform: translateY(10px); }
            70% { transform: translateY(-8px); }
            100% { transform: translateY(0); opacity: 0; }
          }
          @keyframes shineSweep {
            0%   { transform: translateX(-140%) rotate(25deg); opacity: 0; }
            25%  { opacity: 1; }
            60%  { opacity: 1; }
            100% { transform: translateX(140%) rotate(25deg); opacity: 0; }
          }
          @keyframes particleFloat {
            0%   { transform: translateY(0px); opacity: 0.9; }
            50%  { transform: translateY(-8px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.85; }
          }
        `}</style>
      </main>
    </div>
  );
}
