import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./SideBarNav.module.css";
import logo from "../../Assets/logo.png";
import shieldCheck from "../../Assets/shieldFilter.svg";

const SideBarNav = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState(null); // Main filter (e.g., Men/Women)
  const [selectedMoreFilter, setSelectedMoreFilter] = useState(null); // Sub-filter (e.g., Tops/Bottoms)

  const logoBtn = () => {
    navigate("/");
  };

  const resetFilters = () => {
    setSelectedFilter(null);
    setSelectedMoreFilter(null);
  };

  const enhancedToggleSidebar = () => {
    if (isOpen) {
      // If sidebar is open, close it and reset filters
      resetFilters();
    }
    toggleSidebar(); // Toggle the sidebar state
  };

  // Reset filters when the sidebar closes
  useEffect(() => {
    if (!isOpen) {
      resetFilters();
    }
  }, [isOpen]);

  const handleFilterClick = (filter) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
    setSelectedMoreFilter(null); // Reset child filters when switching main filters
  };

  const handleChildFilterClick = (filter) => {
    setSelectedMoreFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const filterMoreAndMoreOptions = {
    tops: ["Shirts", "Jackets", "Sweatshirts", "Sweaters"],
    bottoms: ["Pants", "Shorts", "Skirts", "Jeans"],
  };

  const renderFilterMore = (
    <ul className={style.filterMore}>
      <li>
        <button onClick={() => handleChildFilterClick("tops")}>Upper</button>
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
        <button onClick={() => handleChildFilterClick("bottoms")}>Bottoms</button>
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
        <button className={style.closeButton} onClick={enhancedToggleSidebar}>
          ✕
        </button>
      </div>

      <ul className={style.SideBarMenuCat}>
        <h3>Shop for:</h3>
        <li>
          <button onClick={() => handleFilterClick("men")}>Men</button>
          {selectedFilter === "men" && (
            <>
              <img src={shieldCheck} alt="Selected" />
              {renderFilterMore}
            </>
          )}
        </li>
        <li>
          <button onClick={() => handleFilterClick("women")}>Women</button>
          {selectedFilter === "women" && (
            <>
              <img src={shieldCheck} alt="Selected" />
              {renderFilterMore}
            </>
          )}
        </li>
      </ul>
      <ul className={style.SideBarMenu}>
        <h3>Shop by:</h3>
        <li>
          <Link to="/items">All Clothing</Link>
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
};

export default SideBarNav;