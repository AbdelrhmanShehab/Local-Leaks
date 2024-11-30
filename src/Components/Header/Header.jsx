import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cartIcon.svg";
import userIcon from "../../Assets/userIcon.svg";
import favIcon from "../../Assets/favIcon.svg";
const Header = () => {
  const location = useLocation();

  return (
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="" />
      <nav className={style.navBar}>
        <ul>
          <li
            className={location.pathname === "/" ? style.navTagsSelected : ""}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/deals" ? style.navTagsSelected : ""
            }
          >
            <Link to="/deals">Deals</Link>
          </li>
          <li
            className={
              location.pathname === "/categories" ? style.navTagsSelected : ""
            }
          >
            <Link to="/categories">Categories</Link>
          </li>
          <li
            className={
              location.pathname === "/new-arrivals" ? style.navTagsSelected : ""
            }
          >
            <Link to="/new-arrivals">New Arrivals</Link>
          </li>
        </ul>
      </nav>
      <div className={style.iconBar}>
        <img src={cartIcon} />
        <img src={favIcon} />
        <img src={userIcon} />
      </div>
    </header>
  );
};

export default Header;
