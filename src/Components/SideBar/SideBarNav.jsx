import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./SideBarNav.module.css";
import logo from "../../Assets/logo.png";
import shieldCheck from "../../Assets/shieldFilter.svg";

function SideBarNav({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState(null); // Main filter (e.g., Men/Women)
  const [selectedMoreFilter, setSelectedMoreFilter] = useState(null); // Sub-filter (e.g., Tops/Bottoms)

  const logoBtn = () => {
    navigate("/");
  };

  const filterMoreAndMoreOptions = {
    tops: ["Shirts", "Jackets", "Sweatshirts", "Sweaters"],
    bottoms: ["Pants", "Shorts", "Skirts", "Jeans"],
  };

  const filterMore = (
    <ul className={style.filterMore}>
      <li>
        <button onClick={() => setSelectedMoreFilter("tops")}>Upper</button>
        {selectedMoreFilter === "tops" && (
          <>
            <img src={shieldCheck} alt="Selected" />
            <ul className={style.filterMoreAndMore}>
              {filterMoreAndMoreOptions.tops.map((item, index) => (
                <li key={index}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
      <li>
        <button onClick={() => setSelectedMoreFilter("bottoms")}>
          Bottoms
        </button>
        {selectedMoreFilter === "bottoms" && (
          <>
            <img src={shieldCheck} alt="Selected" />
            <ul className={style.filterMoreAndMore}>
              {filterMoreAndMoreOptions.bottoms.map((item, index) => (
                <li key={index}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
      <li>
        <button>Accessories</button>
      </li>
    </ul>
  );

  return (
    <div
      className={`${style.SideBarNav} ${isOpen ? style.open : style.closed}`}
    >
      <div className={style.logoClose}>
        <img
          src={logo}
          className={style.logo}
          alt="Local Leaks"
          onClick={logoBtn}
        />
        <button className={style.closeButton} onClick={toggleSidebar}>
          ✕
        </button>
      </div>

      <ul className={style.SideBarMenuCat}>
        <h3>Shop for:</h3>
        <li>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter === "men" ? null : "men")
            }
          >
            Men
          </button>
          {selectedFilter === "men" && (
            <>
              <img src={shieldCheck} alt="Selected" />
              {filterMore}
            </>
          )}
        </li>
        <li>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter === "women" ? null : "women")
            }
          >
            Women
          </button>
          {selectedFilter === "women" && (
            <>
              <img src={shieldCheck} alt="Selected" />
              {filterMore}
            </>
          )}
        </li>
      </ul>
      <ul className={style.SideBarMenu}>
        <h3>Shop by:</h3>
        <li>
          <Link to="/item">All Clothing</Link>
        </li>
        <li>
          <Link to="/brands">Our Brands</Link>
        </li>
        <li>
          <Link to="/cart">Our Models</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBarNav;
