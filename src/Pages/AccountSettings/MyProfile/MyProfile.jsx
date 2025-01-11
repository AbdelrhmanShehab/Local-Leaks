import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./MyProfile.module.css";
import { SmallButton } from "../../../Components/ReusableComponents/ReusableComponents";

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
          <section className={style.subscriptionSection}>
            <div className={style.subscriptionText}>
              <h2>Subscribe with us</h2>
              <p>By doing that we’ll reach you with our latest offers</p>
            </div>
            <SmallButton smallButtonLabel={"Subscribe now"}/>
          </section>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
