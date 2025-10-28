import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-bar">
        <div className="brand">
          <img src="/images/kei-truck-logo.png" alt="KeiTruck Hub Logo" className="logo-img" />
          <strong>KeiTruck Hub</strong>
        </div>
        <button className="hamburger" onClick={()=>setOpen(o=>!o)} aria-expanded={open}>☰</button>
        <nav>
          <ul className={open ? "show" : ""} onClick={()=>setOpen(false)}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/models">Models &amp; Specs</NavLink></li>
            <li><NavLink to="/builds">Custom Builds</NavLink></li>
            <li><NavLink to="/importing">Importing Guide</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
