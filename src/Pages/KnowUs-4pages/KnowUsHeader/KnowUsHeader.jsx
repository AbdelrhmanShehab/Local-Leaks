import { React, lazy, Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import "./KnowUsHeader.module.css";
import style from "./KnowUsHeader.module.css";

const KnowUsHeader = ({ selectedPage }) => {
  return (
    <div className={style.KnowUsSection}>
      <h1>Get to Know Us</h1>
      <header className={style.headerKnowUs}>
        <nav className={style.headerNav}>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? `${style.HeaderKnowUsOption} ${style.knowUsActive}`
                : style.HeaderKnowUsOption
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? `${style.HeaderKnowUsOption} ${style.knowUsActive}`
                : style.HeaderKnowUsOption
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive
                ? `${style.HeaderKnowUsOption} ${style.knowUsActive}`
                : style.HeaderKnowUsOption
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="/shipping-and-returns"
            className={({ isActive }) =>
              isActive
                ? `${style.HeaderKnowUsOption} ${style.knowUsActive}`
                : style.HeaderKnowUsOption
            }
          >
            Shipping & Returns
          </NavLink>
        </nav>
      </header>
    </div>
  );
};
export default KnowUsHeader;
