import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cartIcon.svg";
import userIcon from "../../Assets/userIcon.svg";
import favIcon from "../../Assets/favIcon.svg";

const Header = ({ showSideBar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logoBtn = () => {
    navigate("/");
  };

  return (
    <header className={style.header}>
      <img
        src={logo}
        className={style.logo}
        alt="Local Leaks"
        onClick={logoBtn}
      />

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
            <Link to="/deals">All Clothing</Link>
          </li>

          <li
            className={
              location.pathname === "/categories" ? style.navTagsSelected : ""
            }
          >
            <Link to="/categories">New Arrivals</Link>
          </li>

          <li
            className={
              location.pathname === "/new-arrivals" ? style.navTagsSelected : ""
            }
          >
            <button onClick={showSideBar}>
              Shop
              <svg
                style={{ marginLeft: "5px" }}
                width="15"
                height="8"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7947 1.56515C16.7991 1.35905 16.7299 1.15685 16.5968 0.986548C16.4637 0.816243 16.2732 0.686246 16.0516 0.614545C15.8301 0.542844 15.5885 0.532984 15.3602 0.586332C15.132 0.639679 14.9284 0.753595 14.7776 0.912316L8.81663 6.98665L2.85564 0.908563C2.76285 0.797522 2.64468 0.704467 2.50859 0.635268C2.3725 0.56607 2.22145 0.522232 2.06496 0.50652C1.90847 0.490809 1.74996 0.503566 1.5994 0.543985C1.44885 0.584404 1.30954 0.651609 1.19026 0.741357C1.07098 0.831105 0.97432 0.941449 0.906381 1.06542C0.838442 1.1894 0.800699 1.32431 0.795534 1.46165C0.790369 1.59899 0.817893 1.73577 0.876371 1.86337C0.93485 1.99096 1.02301 2.10659 1.13529 2.20297L7.94356 9.15149C8.05055 9.26077 8.18343 9.34852 8.33304 9.40868C8.48265 9.46884 8.64544 9.5 8.81018 9.5C8.97492 9.5 9.1377 9.46884 9.28731 9.40868C9.43692 9.34852 9.56981 9.26077 9.6768 9.15149L16.5066 2.20297C16.6847 2.02604 16.7866 1.80051 16.7947 1.56515Z"
                  fill="#00FF2A"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <div className={style.iconBar}>
        <img src={favIcon} alt="" />
        <img src={userIcon} alt="" />
        <img src={cartIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;
