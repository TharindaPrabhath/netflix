import "../styles/Nav.css";

import NetflixLogo from "../assets/netflix-logo.png";
import SearchIcon from "../assets/search-white.svg";
import MobileMenu from "../assets/menu-white.svg";
import CloseIcon from "../assets/close-white.svg";

import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

function Nav() {
  const [blackNav, setBlackNav] = useState(false);
  const [mobileMenuClick, setMobileMenuClick] = useState(false);
  const isMobile = useMediaQuery({ query: "(min-width: 600px)" });

  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    window.addEventListener("resize", checkMobile);
  }, []);

  const transitionNav = () => {
    if (window.scrollY > 100) setBlackNav(true);
    else setBlackNav(false);
  };

  const checkMobile = () => {
    if (isMobile) setMobileMenuClick(true);
    else setMobileMenuClick(false);
  };

  const clickedMobileMenu = () => {
    setMobileMenuClick(true);
  };

  const clickedMobileMenuClose = () => {
    setMobileMenuClick(false);
  };

  const showMobileIcon = () => {
    if (!mobileMenuClick)
      return (
        <img
          onClick={clickedMobileMenu}
          className="nav__mobile-menu"
          src={MobileMenu}
          alt="Mobile menu"
        />
      );
    else
      return (
        <img
          onClick={clickedMobileMenuClose}
          className="nav__mobile-menu-close"
          src={CloseIcon}
          alt="Mobile menu close"
        />
      );
  };

  return (
    <div className={`nav ${blackNav && "nav-black"}`}>
      <img className="nav__logo" src={NetflixLogo} alt="Netflix logo" />

      <div className={mobileMenuClick ? "nav__mobile-links" : "nav__links"}>
        <ul>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Recently Added</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
      </div>

      <img className="nav__search" src={SearchIcon} alt="Search icon" />

      <img
        className="nav__avatar"
        onClick={() => history.push("/profile")}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
        alt="Avatar"
      />

      <div className="nav__mobile">{showMobileIcon()}</div>
    </div>
  );
}

export default Nav;
