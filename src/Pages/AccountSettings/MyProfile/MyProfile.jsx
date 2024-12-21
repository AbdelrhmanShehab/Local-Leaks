import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./MyProfile.module.css";
import style from "./MyProfile.module.css";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
const MyProfile = () => {
  return (
    <>
      <div className={style.twoSectionsFlx}>
        <SettingsSideBar />
        <div className={style.profileSection}>
          <h1 className={style.title}>Account Settings</h1>
          <p className={style.subtitle}>
            Settings and options for your account
          </p>
          <hr className={style.separator} />
        </div>
      </div>
    </>
  );
};
export default MyProfile;
