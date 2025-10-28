import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="header-bar">
        <div className="brand">
          <img className="logo-img" src="/images/kei-truck-logo.png" alt="KeiTruck Hub Logo" />
          <strong>KeiTruck Hub</strong>
        </div>
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/models">Models & Specs</NavLink></li>
            <li><NavLink to="/builds">Custom Builds</NavLink></li>
            <li><NavLink to="/importing">Importing Guide</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
