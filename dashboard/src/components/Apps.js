import React, { useState } from "react";
import {
  Apps as AppsIcon,
  Assessment,
  AccountBalance,
  School,
  NotificationsActive,
  ShoppingCart,
} from "@mui/icons-material";

const catalog = [
  {
    id: "kite",
    name: "Kite",
    desc:
      "Trading platform with streaming data, charts and a clean UI.",
    href: "https://kite.zerodha.com/",
    icon: <AppsIcon style={{ color: "#4184f3" }} />,
  },
  {
    id: "console",
    name: "Console",
    desc: "Account dashboard with reports and visualisations.",
    href: "https://console.zerodha.com/",
    icon: <Assessment style={{ color: "#4caf50" }} />,
  },
  {
    id: "coin",
    name: "Coin",
    desc: "Direct mutual funds delivered to your Demat.",
    href: "https://coin.zerodha.com/",
    icon: <AccountBalance style={{ color: "#ff9800" }} />,
  },
  {
    id: "varsity",
    name: "Varsity",
    desc: "Free and open market education.",
    href: "https://zerodha.com/varsity/",
    icon: <School style={{ color: "#9c27b0" }} />,
  },
  {
    id: "sentinel",
    name: "Sentinel",
    desc: "Alerts on market events and instrument moves.",
    href: "https://sentinel.zerodha.com/",
    icon: <NotificationsActive style={{ color: "#e91e63" }} />,
  },
  {
    id: "smallcase",
    name: "Smallcase",
    desc: "Thematic baskets of stocks and ETFs.",
    href: "https://smallcase.zerodha.com/",
    icon: <ShoppingCart style={{ color: "#795548" }} />,
  },
];

const Apps = () => {
  const [installed, setInstalled] = useState({});

  const handleInstall = (id) => {
    setInstalled((prev) => ({ ...prev, [id]: true }));
  };

  const handleOpen = (href) => {
    window.open(href, "_blank");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3 className="title">Apps</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {catalog.map((app) => {
          const isInstalled = installed[app.id];
          return (
            <div
              key={app.id}
              style={{
                border: "1px solid #eee",
                borderRadius: 6,
                padding: 16,
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {app.icon}
                <div style={{ fontSize: 16, fontWeight: 500 }}>{app.name}</div>
              </div>
              <div style={{ color: "#777", fontSize: 13, marginTop: 8 }}>{app.desc}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {!isInstalled ? (
                  <button
                    className="btn"
                    onClick={() => handleInstall(app.id)}
                    style={{ background: "#4184f3" }}
                  >
                    Install
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => handleOpen(app.href)}
                    style={{ background: "#4caf50" }}
                  >
                    Open
                  </button>
                )}
                <button
                  className="btn"
                  onClick={() => handleOpen(app.href)}
                  style={{ background: "#9e9e9e" }}
                >
                  Learn more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apps;