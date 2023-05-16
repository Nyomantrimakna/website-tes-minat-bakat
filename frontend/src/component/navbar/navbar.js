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
      <div className="navbar-menu-box">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cname} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile-box">
          <Link to="/profil" className="profile-picture">
            <i className="fa-sharp fa-regular fa-user profile-icon"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
