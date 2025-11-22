import React, { useState } from "react";
import {Link} from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  const apps = [
    { id: 'kite', name: 'Kite', desc: 'Trading platform', href: 'https://kite.zerodha.com/', icon: 'fa-line-chart' },
    { id: 'console', name: 'Console', desc: 'Account dashboard', href: 'https://console.zerodha.com/', icon: 'fa-pie-chart' },
    { id: 'coin', name: 'Coin', desc: 'Direct mutual funds', href: 'https://coin.zerodha.com/', icon: 'fa-university' },
    { id: 'varsity', name: 'Varsity', desc: 'Market education', href: 'https://zerodha.com/varsity/', icon: 'fa-book' },
    { id: 'sentinel', name: 'Sentinel', desc: 'Alerts', href: 'https://sentinel.zerodha.com/', icon: 'fa-bell' },
    { id: 'smallcase', name: 'Smallcase', desc: 'Thematic baskets', href: 'https://smallcase.zerodha.com/', icon: 'fa-th-large' },
    { id: 'dashboard', name: 'Trading Dashboard', desc: 'Local app', href: '/dashboard', icon: 'fa-dashboard' },
  ];

  return (
    <div className="border-bottom" style={{ backgroundColor: "#FFF " }}>
      <nav className="navbar" style={{ paddingTop: 8, paddingBottom: 8 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
          {/* Section 1: Logo and Main Links */}
          <div style={{ display: 'flex', alignItems: 'center' }}> 
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.svg" style={{ width: 140 }} alt="Logo" />
            </Link>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
            <ul className="navbar-nav" style={{ flexDirection: 'row', display:'flex', alignItems:'center', justifyContent:'flex-end', gap: 20 }}>
              <li className="nav-item"><Link className="nav-link active" to="/signup">Signup</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/product">Products</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/pricing">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/support">Support</Link></li>
            </ul>
            <Link className="nav-link active" aria-current="page" to="" onClick={(e)=>{e.preventDefault(); toggle();}}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </nav>
      {/* Removed the separate container for the links */}
      
      {open && (
        <div style={{
          position: 'fixed', right: 20, top: 70, background: '#fff', border: '1px solid #eee',
          borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', width: 640, padding: 16, zIndex: 2000
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 14, color: '#666' }}>Explore</div>
            <button className="btn" style={{ background: 'transparent' }} onClick={()=>setOpen(false)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {apps.map(app => (
              <div key={app.id} style={{ border: '1px solid #f0f0f0', borderRadius: 8, padding: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className={`fa ${app.icon}`} style={{ color: '#4184f3' }}></i>
                  <div style={{ fontWeight: 600 }}>{app.name}</div>
                </div>
                <div style={{ color: '#888', fontSize: 12, marginTop: 6 }}>{app.desc}</div>
                <div style={{ marginTop: 10 }}>
                  {app.href.startsWith('/') ? (
                    <Link className="btn btn-primary" to={app.href} onClick={()=>setOpen(false)}>Open</Link>
                  ) : (
                    <a className="btn btn-primary" href={app.href} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>Open</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;