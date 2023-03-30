import React from "react";
import { MenuItems } from "./menuitems";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <Link to="/" className="navbar-logo">
        FindTheWay
      </Link>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cname} to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
