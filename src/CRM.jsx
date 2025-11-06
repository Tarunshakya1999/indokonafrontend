import React, { useState, useEffect } from "react";

// ✅ Fixed backtick template literals
const customStyles = `
  body, .d-flex, .flex-grow-1, .list-group-item {
    transition: background-color 0.3s, color 0.3s !important;
  }

  .list-group-item:not(.active-custom):hover {
    transform: translateX(3px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .btn:focus, .form-control:focus {
    box-shadow: 0 0 0 0.2rem var(--accent-color-rgb) !important;
  }
`;

export default function CRMLayoutPreview() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      bgPrimary: "#f5f6fa",
      sidebarBg: "#ffffff",
      sidebarText: "#343a40",
      sidebarBorder: "#e9ecef",
      accentColor: "#007bff",
      accentColorRGB: "0, 123, 255",
      accentText: "#ffffff",
      mainBg: "#ffffff",
      mainText: "#343336",
      headerBg: "#f8f9fa",
      searchBg: "#e9ecef",
      searchColor: "#495057",
      hoverBg: "rgba(0, 123, 255, 0.1)",
    },
    dark: {
      bgPrimary: "#212529",
      sidebarBg: "#2c3034",
      sidebarText: "#e9ecef",
      sidebarBorder: "#495057",
      accentColor: "#17a2b8",
      accentColorRGB: "23, 162, 184",
      accentText: "#ffffff",
      mainBg: "#343a40",
      mainText: "#f8f9fa",
      headerBg: "#2c3034",
      searchBg: "#495057",
      searchColor: "#e9ecef",
      hoverBg: "rgba(23, 162, 184, 0.1)",
    },
  };

  const currentTheme = themes[theme];
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    let styleTag = document.getElementById("crm-styles");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "crm-styles";
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = customStyles;

    Object.entries({
      "--sidebar-bg": currentTheme.sidebarBg,
      "--sidebar-text": currentTheme.sidebarText,
      "--accent-color": currentTheme.accentColor,
      "--accent-color-rgb": currentTheme.accentColorRGB,
      "--sidebar-border": currentTheme.sidebarBorder,
    }).forEach(([key, value]) => document.body.style.setProperty(key, value));

    return () => {
      [
        "--sidebar-bg",
        "--sidebar-text",
        "--accent-color",
        "--accent-color-rgb",
        "--sidebar-border",
      ].forEach((key) => document.body.style.removeProperty(key));
    };
  }, [theme, currentTheme]);

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "My Account", icon: "👤" },
    { name: "Wallet", icon: "💰" },
    { name: "Set Commission", icon: "💹" },
    { name: "Digital Product", icon: "💻" },
    { name: "Software", icon: "🖥" },
    { name: "Subscription", icon: "📄" },
    { name: "Resale Product", icon: "📦" },
    { name: "Hot Deal", icon: "🔥" },
    { name: "Leads", icon: "📂" },
    { name: "Sales", icon: "📈" },
    { name: "Reports", icon: "📊" },
  ];

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden", backgroundColor: currentTheme.bgPrimary }}>
      <div className="d-flex flex-column shadow-lg" style={{ width: "280px", backgroundColor: currentTheme.sidebarBg, color: currentTheme.sidebarText, borderRight: `1px solid ${currentTheme.sidebarBorder}` }}>
        <div className="p-3 border-bottom" style={{ borderColor: currentTheme.sidebarBorder }}>
          <h4 className="fw-bold" style={{ color: currentTheme.accentColor }}>Digital Store CRM</h4>
        </div>

        <ul className="list-group list-group-flush flex-grow-1 p-2">
          {menuItems.map((item) => {
            const isActive = activePage === item.name;
            return (
              <li
                key={item.name}
                className={`list-group-item border-0 ${isActive ? "active-custom" : ""}`}
                onClick={() => setActivePage(item.name)}
                style={{ backgroundColor: isActive ? currentTheme.accentColor : currentTheme.sidebarBg, color: isActive ? currentTheme.accentText : currentTheme.sidebarText, borderRadius: "8px", margin: "4px 0", fontWeight: isActive ? "bold" : "normal" }}
              >
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span> <span className="ms-3">{item.name}</span>
              </li>
            );
          })}
        </ul>

        <div className="p-3 border-top" style={{ borderColor: currentTheme.sidebarBorder }}>
          <button className="btn btn-sm w-100" style={{ backgroundColor: currentTheme.accentColor, color: currentTheme.accentText }}>Logout</button>
        </div>
      </div>

      <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: currentTheme.mainBg }}>
        <div className="p-3 d-flex justify-content-between align-items-center shadow-sm sticky-top" style={{ backgroundColor: currentTheme.headerBg, borderBottom: `1px solid ${currentTheme.sidebarBorder}` }}>
          <span style={{ color: currentTheme.accentColor }}>{activePage}</span>

          <button onClick={toggleTheme} className="btn btn-sm rounded-pill px-3 fw-bold" style={{ backgroundColor: currentTheme.accentColor, color: currentTheme.accentText }}>
            {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
          </button>
        </div>

        <div className="flex-grow-1 p-5">
          <div style={{ padding: "30px", background: theme === "light" ? "#eef7ff" : "#454d55", borderRadius: "15px" }}>
            <h2 style={{ color: currentTheme.accentColor }}>{activePage} Overview</h2>
          </div>
        </div>
      </div>
    </div>
  );
}