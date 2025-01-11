import { React, lazy, Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SettingsSideBar.module.css";
import style from "./SettingsSideBar.module.css";

const SettingsSideBar = () => {
  return (
    <div className={style.AccountSettingsSection}>
      <header className={style.headerSettings}>
        <nav className={style.headerSettingsNav}>
          <h2>Settings</h2>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive
                ? `${style.headerAccountSettings} ${style.accountSettingsActive}`
                : style.headerAccountSettings
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive
                ? `${style.headerAccountSettings} ${style.accountSettingsActive}`
                : style.headerAccountSettings
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/payment-data"
            className={({ isActive }) =>
              isActive
                ? `${style.headerAccountSettings} ${style.accountSettingsActive}`
                : style.headerAccountSettings
            }
          >
            Payment Data
          </NavLink>
        </nav>
      </header>
      <div className={style.lineBesideAccountSettings}></div>
    </div>
  );
};
export default SettingsSideBar;
