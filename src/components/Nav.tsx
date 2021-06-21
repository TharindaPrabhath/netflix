import React, { Component } from "react";

import "../styles/Nav.css";

import NetflixLogo from "../assets/netflix-logo.png";
import SearchIcon from "../assets/search-white.svg";
import MobileMenu from "../assets/menu-white.svg";

function Nav() {
  return (
    <div className="nav nav-black">
      <img className="nav__logo" src={NetflixLogo} alt="Netflix logo" />

      <div className="nav__links">
        <ul>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
        </ul>
      </div>

      <img className="nav__search" src={SearchIcon} alt="Search icon" />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
        alt="Avatar"
      />

      <div className="nav__mobile">
        <img className="nav__mobile-menu" src={MobileMenu} alt="Mobile menu" />
      </div>
    </div>
  );
}

export default Nav;
