import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./MyProfile.module.css";
import style from "./MyProfile.module.css";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
import SettingsProfileHeader from "../SettingsProfileHeader/SettingsProfileHeader";
const MyProfile = () => {
  return (
    <>
      <div className={style.twoSectionsFlex}>
        <SettingsSideBar />
        <div>
          <SettingsProfileHeader
            settingsTitle={"Account Settings"}
            settingsDesc={"Settings and options for your account"}
          />
        </div>
      </div>
    </>
  );
};
export default MyProfile;
